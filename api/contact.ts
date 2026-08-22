const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const TEMPORARY_RECIPIENT = 'barryconley85@gmail.com';
const ENQUIRY_TYPES = new Set(['homeowner', 'investor', 'landlord', 'other']);

interface ContactPayload {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  enquiryType?: unknown;
  message?: unknown;
  website?: unknown;
}

function jsonResponse(status: number, body: Record<string, string | boolean>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function asText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return entities[character];
  });
}

function formatEnquiryType(value: string): string {
  const labels: Record<string, string> = {
    homeowner: 'Homeowner looking to sell',
    investor: 'Property investor',
    landlord: 'Landlord exiting the market',
    other: 'Other enquiry',
  };
  return labels[value] ?? 'Other enquiry';
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response(null, {
        status: 405,
        headers: { Allow: 'POST' },
      });
    }

    if (!request.headers.get('content-type')?.includes('application/json')) {
      return jsonResponse(415, { error: 'Unsupported submission format.' });
    }

    let payload: ContactPayload;
    try {
      payload = (await request.json()) as ContactPayload;
    } catch {
      return jsonResponse(400, { error: 'Please complete the form and try again.' });
    }

    // Honeypot field: bots should receive a neutral response without sending an email.
    if (asText(payload.website, 200)) {
      return jsonResponse(200, { success: true });
    }

    const firstName = asText(payload.firstName, 80);
    const lastName = asText(payload.lastName, 80);
    const email = asText(payload.email, 254).toLowerCase();
    const phone = asText(payload.phone, 40);
    const enquiryType = asText(payload.enquiryType, 32);
    const message = asText(payload.message, 3_000);

    if (!firstName || !lastName || !email || !enquiryType || !message) {
      return jsonResponse(400, { error: 'Please complete all required fields.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse(400, { error: 'Please enter a valid email address.' });
    }

    if (!ENQUIRY_TYPES.has(enquiryType)) {
      return jsonResponse(400, { error: 'Please select a valid enquiry type.' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    // Temporary no-DNS sender. Replace with a verified business-domain sender later.
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || 'Pennine Property Partners <onboarding@resend.dev>';
    const recipients = (process.env.CONTACT_RECIPIENTS || TEMPORARY_RECIPIENT)
      .split(',')
      .map((recipient) => recipient.trim().toLowerCase())
      .filter(Boolean);

    if (!resendApiKey || recipients.length === 0) {
      console.error('Contact form email configuration is incomplete.');
      return jsonResponse(503, {
        error: 'Our enquiry form is temporarily unavailable. Please call 07533 849609.',
      });
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Not provided');
    const safeEnquiryType = escapeHtml(formatEnquiryType(enquiryType));
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const emailResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'PenninePropertyPartners/1.0',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: recipients,
        reply_to: email,
        subject: `New ${formatEnquiryType(enquiryType)} enquiry from ${firstName} ${lastName}`,
        text: [
          'New website enquiry',
          '',
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          `Phone: ${phone || 'Not provided'}`,
          `Enquiry type: ${formatEnquiryType(enquiryType)}`,
          '',
          'Message:',
          message,
        ].join('\n'),
        html: `
          <h1>New website enquiry</h1>
          <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Enquiry type:</strong> ${safeEnquiryType}</p>
          <p><strong>Message:</strong><br />${safeMessage}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const detail = await emailResponse.text();
      console.error('Resend rejected contact email.', {
        status: emailResponse.status,
        detail: detail.slice(0, 500),
      });
      return jsonResponse(502, {
        error: 'We could not send your enquiry. Please call 07533 849609 or email us directly.',
      });
    }

    return jsonResponse(200, { success: true });
  },
};