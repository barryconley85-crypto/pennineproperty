import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: 'How quickly can you sell my property?',
    a: 'In most cases, we can present your property to investors within 24–48 hours of your enquiry and receive offers shortly after. Contracts are typically exchanged within 8 weeks, and we have completed sales in as little as 28 days for urgent situations.',
  },
  {
    q: 'Will I get full market value for my property?',
    a: 'We are completely transparent about this: investor purchases are typically below full market value — usually 75–85% of the open market price. In exchange, you receive speed, certainty, no estate agent fees and a completely stress-free process. For many sellers, this trade-off is well worth it.',
  },
  {
    q: 'Is there any cost to use your service?',
    a: 'No. Our service is completely free to homeowners. We are paid by the investors in our network, not by you. There are no upfront fees, no hidden charges and no obligation to accept any offer.',
  },
  {
    q: 'What types of property do you deal with?',
    a: 'We work with all types of residential property across Greater Manchester and the North West — including terraced houses, semi-detached and detached homes, flats, bungalows, HMOs and properties requiring refurbishment. We also consider properties with sitting tenants or legal complications.',
  },
  {
    q: 'Do I need to have the property in perfect condition?',
    a: 'Absolutely not. Many of our investors specifically look for properties that need work. Whether your property needs minor cosmetic updates or a full refurbishment, we can find the right buyer.',
  },
  {
    q: 'How do I join your investor network?',
    a: 'Simply complete our enquiry form or call us directly. We will arrange a brief conversation to understand your investment strategy, budget and preferred property types. Once registered, you will receive relevant opportunities as they become available.',
  },
  {
    q: 'Are you regulated?',
    a: 'Pennine Property Partners Ltd operates as a property sourcing and introduction business. We recommend that all parties involved in any transaction seek independent legal and financial advice. We always act with full transparency and in the best interests of all parties.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We primarily operate across Greater Manchester and the wider North West of England, including Manchester, Salford, Stockport, Oldham, Rochdale, Bury, Bolton, Wigan, Warrington and surrounding areas.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-navy-800 pr-4">{q}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-800/5 flex items-center justify-center">
          {isOpen ? (
            <Minus size={16} className="text-gold-500" />
          ) : (
            <Plus size={16} className="text-navy-800" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView();

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="gold-label">FAQs</p>
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Everything you need to know about selling your property or joining our investor network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
