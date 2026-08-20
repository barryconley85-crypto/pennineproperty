import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const situations = [
  'Relocating for work or family',
  'Going through probate or bereavement',
  'Divorce or separation',
  'Financial pressure or mortgage arrears',
  'Landlords exiting the market',
  'Inherited property you need to sell',
  'Property requiring refurbishment',
  'Chain collapse on an existing sale',
  'Problem tenants or vacant property',
  'Simply need a quick, certain sale',
];

export default function SellYourProperty() {
  const { ref, inView } = useInView();

  return (
    <section id="sell" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="/property1.png"
                alt="Manchester property landscape"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 glass-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-navy-900" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">No Estate Agent Fees</div>
                    <div className="text-white/70 text-xs">Save thousands on your sale</div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy-800/5 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="gold-label">Sell Your Property</p>
            <h2 className="section-heading mb-6">
              A Faster, Simpler Way to Sell
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Pennine Property Partners works with an established network of cash property
              investors across Greater Manchester and the North West. We introduce your
              property directly to the right buyers — cutting out the delays, uncertainty
              and cost of traditional estate agency.
            </p>

            {/* Honest disclosure */}
            <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
              <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Honest disclosure:</strong> Investor purchases are typically below
                full market value. In exchange, you receive speed, certainty and a
                completely stress-free process — with no estate agent fees.
              </p>
            </div>

            <p className="text-gray-700 font-semibold mb-4">We can help if you are:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {situations.map((situation) => (
                <div key={situation} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-gold-500 flex-shrink-0" />
                  <span>{situation}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-navy inline-flex"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Free Consultation
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
