import { motion } from 'framer-motion';
import { Shield, Star, Users, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const trustItems = [
  { icon: Shield, label: 'Fully Transparent Process' },
  { icon: Star, label: '5-Star Rated Service' },
  { icon: Users, label: 'Family-Run Business' },
  { icon: Award, label: 'Local Property Experts' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustedBy() {
  const { ref, inView } = useInView();

  return (
    <section
      id="trusted"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 bg-navy-800"
    >
      <div className="container-max">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {trustItems.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={item}
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
            >
              <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-gold-400" />
              </div>
              <span className="text-white/80 font-medium text-sm">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
