import { motion } from 'framer-motion';
import { BarChart3, Network, Search, FileText, Handshake, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Search,
    title: 'Off-Market Opportunities',
    description: 'Access properties that never reach the open market — sourced through our trusted local network before they are publicly listed.',
  },
  {
    icon: MapPin2,
    title: 'Local Market Expertise',
    description: 'Deep knowledge of Greater Manchester and the North West property market, including emerging hotspots and undervalued areas.',
  },
  {
    icon: BarChart3,
    title: 'Deal Analysis',
    description: 'Every opportunity comes with full financial analysis, including projected yields, refurbishment costs and comparable sales data.',
  },
  {
    icon: FileText,
    title: 'Property Sourcing',
    description: 'We source properties tailored to your specific investment strategy — whether buy-to-let, HMO, flip or development.',
  },
  {
    icon: Network,
    title: 'Professional Introductions',
    description: 'Connect with our network of trusted solicitors, mortgage brokers, surveyors and contractors to streamline your purchase.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Relationships',
    description: 'We focus on building lasting partnerships, not one-off transactions. Your success is our success.',
  },
];

function MapPin2(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function InvestmentOpportunities() {
  const { ref, inView } = useInView();

  return (
    <section id="investors" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,169,110,0.6) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-700/50 blur-3xl" />

      <div className="container-max relative z-10">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="inline-block text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">
            For Investors
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Investment Opportunities
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join our exclusive investor network and gain access to carefully sourced
            off-market deals across Greater Manchester and the North West.
          </p>
        </motion.div>

        {/* Image + text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/property2.png"
                alt="Professional property investment meeting"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/50 to-transparent" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Who We Work With
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Whether you are an experienced portfolio landlord, a first-time investor
              or a developer looking for your next project — we tailor our service to
              your specific goals and investment strategy.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Experienced Investors', 'First-Time Investors', 'Cash Buyers', 'Portfolio Landlords', 'Developers', 'JV Partners'].map((type) => (
                <div key={type} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  {type}
                </div>
              ))}
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join Our Investor Network
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Services cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              whileHover={{ y: -6, backgroundColor: 'rgba(201,169,110,0.08)' }}
              className="glass-card p-6 cursor-default transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-400/15 flex items-center justify-center mb-4">
                <service.icon size={24} className="text-gold-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
