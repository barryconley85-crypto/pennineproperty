import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const articles = [
  {
    category: 'Official Market Data',
    date: 'Updated August 2026',
    source: 'Office for National Statistics',
    title: 'Housing Prices and Rents in Manchester',
    excerpt:
      'Explore official local data on average house prices, rents, buyer types and affordability in Manchester.',
    readTime: 'External resource',
    url: 'https://www.ons.gov.uk/visualisations/housingpriceslocal/E08000003/',
  },
  {
    category: 'Investor Due Diligence',
    date: 'Government service',
    source: 'HM Land Registry',
    title: 'Search for Land and Property Information',
    excerpt:
      'Check a property’s title, ownership, mortgage information, restrictive covenants and easements before committing to a purchase.',
    readTime: 'External resource',
    url: 'https://www.gov.uk/search-property-information-land-registry',
  },
  {
    category: 'Probate Guidance',
    date: 'Government guidance',
    source: 'GOV.UK',
    title: "Dealing with the Estate of Someone Who's Died",
    excerpt:
      'Official guidance for executors and administrators, including dealing with estate assets such as property.',
    readTime: 'External resource',
    url: 'https://www.gov.uk/probate-estate',
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
            <p className="gold-label">Trusted Resources</p>
            <h2 className="section-heading">Property News & Guidance</h2>
          </div>
          <a
            href="https://www.gov.uk/browse/housing-local-services/buying-owning-property"
            target="_blank"
            rel="noreferrer"
            className="text-navy-800 font-semibold text-sm flex items-center gap-2 hover:text-gold-500 transition-colors"
          >
            Explore official guidance <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${article.title} from ${article.source} in a new tab`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="card group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
            >
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
                  <span className="text-xs text-gray-400">Source: {article.source}</span>
                  <span className="text-navy-800 group-hover:text-gold-500 transition-colors text-sm font-semibold flex items-center gap-1">
                    Open source <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}