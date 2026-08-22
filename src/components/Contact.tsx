import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  website: string;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  enquiryType: '',
  message: '',
  website: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { ref, inView } = useInView();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || 'We could not send your enquiry. Please try again.');
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'We could not send your enquiry. Please call 07533 849609 instead.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,169,110,0.6) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="container-max relative z-10">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="inline-block text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Whether you need a quick sale or want to join our investor network, we would
            love to hear from you. No obligation, no pressure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-6">Contact Direct</h3>
              <div className="space-y-4">
                <a
                  href="tel:+447533849609"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/25 transition-colors">
                    <Phone size={20} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Phone</div>
                    <div className="text-white font-semibold group-hover:text-gold-400 transition-colors">
                      +44 (0)7533 849609
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:adam@penninepropertypartners.co.uk"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/25 transition-colors">
                    <Mail size={20} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Adam</div>
                    <div className="text-white font-semibold group-hover:text-gold-400 transition-colors text-sm">
                      adam@penninepropertypartners.co.uk
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:laura@penninepropertypartners.co.uk"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/25 transition-colors">
                    <Mail size={20} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Laura</div>
                    <div className="text-white font-semibold group-hover:text-gold-400 transition-colors text-sm">
                      laura@penninepropertypartners.co.uk
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Area</div>
                    <div className="text-white font-semibold text-sm">
                      Greater Manchester &amp; North West
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-48 border border-white/10">
              <iframe
                title="Greater Manchester Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152261.91!2d-2.3599!3d53.4808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold-400/20 flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-gold-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Thank You!
                </h3>
                <p className="text-white/70 text-lg mb-2">Your enquiry has been received.</p>
                <p className="text-white/50">
                  A member of our team will be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-5"
                aria-busy={loading}
              >
                <div className="absolute -left-[10000px]" aria-hidden="true">
                  <label htmlFor="website">Leave this field blank</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white/70 text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white/70 text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all duration-200"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/70 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all duration-200"
                    placeholder="+44 7700 000000"
                  />
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-white/70 text-sm font-medium mb-2">
                    I am a... *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    value={form.enquiryType}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-navy-900">Select an option</option>
                    <option value="homeowner" className="bg-navy-900">Homeowner looking to sell</option>
                    <option value="investor" className="bg-navy-900">Property investor</option>
                    <option value="landlord" className="bg-navy-900">Landlord exiting the market</option>
                    <option value="other" className="bg-navy-900">Other enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                    Tell Us More *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all duration-200 resize-none"
                    placeholder="Tell us about your property, your situation and what you're looking for..."
                  />
                </div>

                {submitError && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-300/50 bg-red-500/10 px-4 py-3 text-sm text-red-100"
                  >
                    {submitError}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center text-base py-4 disabled:opacity-70"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-navy-800/30 border-t-navy-800 rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Enquiry
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

                <p className="text-white/40 text-xs text-center">
                  By submitting this form you agree to be contacted by Pennine Property Partners Ltd.
                  We will never share your details with third parties without your consent.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}