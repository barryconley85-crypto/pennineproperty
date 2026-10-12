import { motion } from 'framer-motion';
import { Home, TrendingUp, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function HowWeHelp() {
  const { ref, inView } = useInView();

  const cards = [
    {
      icon: Home,
      audience: 'Homeowners',
      headline: 'Need to Sell Quickly?',
      description:
        'Whether you\'re relocating, going through probate, facing financial pressure, or simply need a fast, certain sale — we connect you directly with our trusted network of cash buyers. No estate agents, no chains, no delays.',
      points: [
        'Receive an offer within 48 hours',
        'Contracts exchanged within 8 weeks',
        'No fees, no hidden costs',
        'Completely stress-free process',
      ],
      cta: 'Sell My Property',
      href: '#sell',
      gradient: 'from-navy-800 to-navy-700',
      badge: 'For Homeowners',
    },
    {
      icon: TrendingUp,
      audience: 'Investors',
      headline: 'Access Off-Market Deals',
      description:
        'Join our exclusive investor network and gain access to carefully sourced, off-market property opportunities across Greater Manchester and the North West. From buy-to-let to refurbishment projects — we find the right deals for your strategy.',
      points: [
        'Exclusive off-market opportunities',
        'Full deal analysis provided',
        'Local market expertise',
        'Long-term investment relationships',
      ],
      cta: 'Become an Investor',
      href: '#investors',
      gradient: 'from-gold-500 to-gold-400',
      badge: 'For Investors',
    },
  ];

  return (
    <section id="how-we-help" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="gold-label">What We Do</p>
          <h2 className="section-heading mb-4">
            Two Ways We Can Help You
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pennine Property Partners serves both homeowners seeking a quick sale and
            investors looking for their next opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.audience}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="card group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${card.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-8 -translate-x-8" />
                <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
                  i === 0 ? 'bg-white/20 text-white' : 'bg-navy-800/30 text-navy-900'
                }`}>
                  {card.badge}
                </span>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  i === 0 ? 'bg-gold-400/20' : 'bg-navy-800/20'
                }`}>
                  <card.icon size={28} className={i === 0 ? 'text-gold-400' : 'text-navy-800'} />
                </div>
                <h3 className={`font-display text-2xl font-bold mb-2 ${i === 0 ? 'text-white' : 'text-navy-900'}`}>
                  {card.headline}
                </h3>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">{card.description}</p>
                <ul className="space-y-3 mb-8">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-gold-500" />
                      </div>
                      <span className="text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={card.href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(card.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                  className={`inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300 ${
                    i === 0 ? 'text-navy-800 hover:text-gold-500' : 'text-gold-500 hover:text-gold-600'
                  }`}
                >
                  {card.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
