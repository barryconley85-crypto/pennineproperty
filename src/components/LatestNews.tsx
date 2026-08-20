import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const articles = [
  {
    category: 'Market Update',
    date: 'July 2026',
    title: 'Greater Manchester Property Market: What Sellers Need to Know in 2026',
    excerpt:
      'The North West property market continues to show resilience. We break down what the latest data means for homeowners considering a sale and investors looking for opportunities.',
    readTime: '4 min read',
  },
  {
    category: 'Investor Guide',
    date: 'June 2026',
    title: 'Why Off-Market Properties Offer the Best Returns for Cash Buyers',
    excerpt:
      'Off-market deals consistently outperform open-market purchases for cash investors. Here\'s why — and how to access them through a trusted sourcing partner.',
    readTime: '5 min read',
  },
  {
    category: 'Homeowner Advice',
    date: 'June 2026',
    title: 'Selling a Probate Property: A Step-by-Step Guide for Executors',
    excerpt:
      'Navigating a probate sale can feel overwhelming. Our guide explains the process clearly and explores how a quick sale to an investor can simplify everything.',
    readTime: '6 min read',
  },
];

export default function LatestNews() {
  const { ref, inView } = useInView();

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="gold-label">Insights</p>
            <h2 className="section-heading">Latest Property News</h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-navy-800 font-semibold text-sm flex items-center gap-2 hover:text-gold-500 transition-colors"
          >
            View all articles <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="card group cursor-pointer"
            >
              {/* Category header */}
              <div className="h-3 bg-gradient-to-r from-navy-800 to-navy-700 group-hover:from-gold-400 group-hover:to-gold-300 transition-all duration-500" />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-gold-500 bg-gold-400/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Calendar size={12} />
                    {article.date}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-navy-800 mb-3 group-hover:text-gold-600 transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                  <span className="text-navy-800 group-hover:text-gold-500 transition-colors text-sm font-semibold flex items-center gap-1">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
