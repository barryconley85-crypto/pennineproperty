import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function CallToAction() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 bg-gradient-to-br from-gold-400 via-gold-300 to-gold-400 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-navy-800/10 translate-y-1/2 -translate-x-1/2" />

      <div className="container-max relative z-10">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-navy-800/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Whether you need to sell quickly or you are looking for your next investment
            opportunity — we are here to help. Get in touch today for a free, no-obligation
            conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-navy-800 text-white font-semibold px-10 py-5 rounded-full shadow-navy hover:bg-navy-700 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Free Consultation
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="tel:+447533849609"
              className="inline-flex items-center gap-2 border-2 border-navy-800 text-navy-900 font-semibold px-10 py-5 rounded-full hover:bg-navy-800 hover:text-white transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={20} />
              Call 07533 849609
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
