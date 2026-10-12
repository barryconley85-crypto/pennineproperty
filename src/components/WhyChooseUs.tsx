import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Handshake, MapPin, ShieldCheck, Users2, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count}{suffix}
    </span>
  );
}

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Receive a genuine cash offer within 48 hours of contacting us. Complete in weeks, not months.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Transparent',
    description: 'We are completely upfront about the process, timelines and any offer below market value — no surprises.',
  },
  {
    icon: Handshake,
    title: 'Trusted Network',
    description: 'Our vetted investor network means you deal with serious, cash-ready buyers every time.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Deep roots in Greater Manchester and the North West. We know the market inside out.',
  },
  {
    icon: Users2,
    title: 'Family-Run Values',
    description: 'Personal, honest service from a family business that genuinely cares about your outcome.',
  },
  {
    icon: Clock,
    title: 'No Time Wasters',
    description: 'We only introduce your property to investors who are ready, willing and able to proceed.',
  },
];

const stats = [
  { value: 0, suffix: '', label: 'All Properties Considered' },
  { value: 48, suffix: 'hrs', label: 'Average Offer Time' },
  { value: 0, suffix: '', label: 'Exchange Within 8 Weeks' },
  { value: 5, suffix: '★', label: 'Client Rating' },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="gold-label">Why Choose Us</p>
          <h2 className="section-heading mb-4">
            The Pennine Difference
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine local knowledge, a trusted investor network and a genuinely
            personal approach to deliver results others simply cannot match.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-navy-800 text-white"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                {stat.value === 0 ? stat.label : <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(27,42,74,0.12)' }}
              className="p-6 rounded-2xl border border-gray-100 bg-white shadow-card group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-800/5 group-hover:bg-gold-400/10 flex items-center justify-center mb-4 transition-colors duration-300">
                <feature.icon size={24} className="text-navy-800 group-hover:text-gold-500 transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
