import { motion } from 'framer-motion';
import { Home, TrendingUp, Clock, PoundSterling } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stories = [
  {
    icon: Clock,
    type: 'Quick Sale',
    location: 'Salford, M6',
    property: '3-bed terraced house',
    detail: 'Sold in 18 days',
    description: 'Homeowner needed to relocate for work. Received two cash offers within 48 hours and completed in under three weeks.',
    tag: 'Homeowner',
    tagColor: 'bg-navy-800/10 text-navy-800',
  },
  {
    icon: TrendingUp,
    type: 'Investment Deal',
    location: 'Oldham, OL1',
    property: 'Refurbishment opportunity',
    detail: '£35k below market value',
    description: 'Off-market deal sourced for an experienced investor. Full refurbishment analysis provided. Now generating strong rental yield.',
    tag: 'Investor',
    tagColor: 'bg-gold-400/10 text-gold-600',
  },
  {
    icon: Home,
    type: 'Probate Sale',
    location: 'Bury, BL9',
    property: '4-bed detached',
    detail: 'Completed in 21 days',
    description: 'Executor needed a swift, hassle-free sale during a difficult family period. We handled everything sensitively and professionally.',
    tag: 'Homeowner',
    tagColor: 'bg-navy-800/10 text-navy-800',
  },
  {
    icon: PoundSterling,
    type: 'Portfolio Acquisition',
    location: 'Rochdale, OL11',
    property: '3 buy-to-let properties',
    detail: 'All sold within 2 weeks',
    description: 'Landlord exiting the market needed to sell three properties simultaneously. We found buyers for all three within a fortnight.',
    tag: 'Landlord',
    tagColor: 'bg-green-100 text-green-700',
  },
];

export default function SuccessStories() {
  const { ref, inView } = useInView();

  return (
    <section id="success" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="gold-label">Success Stories</p>
          <h2 className="section-heading mb-4">Real Results, Real People</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection of recent transactions — demonstrating the speed, professionalism
            and results we deliver for both homeowners and investors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.type + story.location}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="card p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-800/5 group-hover:bg-gold-400/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <story.icon size={22} className="text-navy-800 group-hover:text-gold-500 transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <h3 className="font-display text-lg font-bold text-navy-800">{story.type}</h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${story.tagColor}`}>
                      {story.tag}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{story.property} · {story.location}</div>
                  <div className="text-gold-500 font-bold text-sm mb-3">{story.detail}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
