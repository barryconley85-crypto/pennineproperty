import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  'For Homeowners': [
    { label: 'Sell Your Property', href: '#sell' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ],
  'For Investors': [
    { label: 'Investment Opportunities', href: '#investors' },
    { label: 'Join Our Network', href: '#contact' },
    { label: 'Property Sourcing', href: '#investors' },
    { label: 'Deal Analysis', href: '#investors' },
    { label: 'Meet the Team', href: '#about' },
  ],
  'Company': [
    { label: 'About Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Latest News', href: '#news' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com', abbr: 'FB' },
  { label: 'Instagram', href: 'https://www.instagram.com', abbr: 'IG' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', abbr: 'LI' },
  { label: 'X', href: 'https://www.x.com', abbr: 'X' },
  { label: 'YouTube', href: 'https://www.youtube.com', abbr: 'YT' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src="/pennine logo.png"
              alt="Pennine Property Partners"
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Helping homeowners sell quickly and connecting investors with trusted
              off-market property opportunities across Greater Manchester and the North West.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="tel:+447533849609" className="flex items-center gap-3 text-white/60 hover:text-gold-400 transition-colors text-sm">
                <Phone size={15} className="text-gold-400 flex-shrink-0" />
                +44 (0)7533 849609
              </a>
              <a href="mailto:adam@penninepropertypartners.co.uk" className="flex items-center gap-3 text-white/60 hover:text-gold-400 transition-colors text-sm">
                <Mail size={15} className="text-gold-400 flex-shrink-0" />
                adam@penninepropertypartners.co.uk
              </a>
              <a href="mailto:laura@penninepropertypartners.co.uk" className="flex items-center gap-3 text-white/60 hover:text-gold-400 transition-colors text-sm">
                <Mail size={15} className="text-gold-400 flex-shrink-0" />
                laura@penninepropertypartners.co.uk
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin size={15} className="text-gold-400 flex-shrink-0" />
                Greater Manchester &amp; North West
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ href, label, abbr }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold-400/20 flex items-center justify-center transition-colors duration-200 text-white/60 hover:text-gold-400 text-xs font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {abbr}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-white text-sm tracking-wide mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-max py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Pennine Property Partners Ltd. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs text-center">
            Pennine Property Partners Ltd is a property sourcing and introduction company.
            We recommend all parties seek independent legal and financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
