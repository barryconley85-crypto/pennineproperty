import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Salford, Manchester',
    role: 'Homeowner',
    stars: 5,
    text: 'After my marriage broke down I needed to sell quickly and without the stress of the open market. Pennine Property Partners were incredible — honest, professional and incredibly fast. I had an offer within 24 hours and completed in three weeks. I cannot thank Adam and Laura enough.',
  },
  {
    name: 'David T.',
    location: 'Stockport',
    role: 'Landlord',
    stars: 5,
    text: 'I had three properties I needed to exit quickly due to the new landlord legislation. Pennine found buyers for all three within a fortnight. The process was completely transparent and the team kept me informed at every stage. Highly recommended.',
  },
  {
    name: 'James R.',
    location: 'Oldham',
    role: 'Property Investor',
    stars: 5,
    text: 'I\'ve been working with Pennine Property Partners for over a year now as an investor. The quality of deals they source is exceptional — always below market value with full analysis provided. A genuinely professional operation.',
  },
  {
    name: 'Patricia H.',
    location: 'Bury, Greater Manchester',
    role: 'Homeowner — Probate Sale',
    stars: 5,
    text: 'Dealing with an inherited property during a difficult time was overwhelming. The team at Pennine were compassionate, patient and made the whole process straightforward. We sold in under four weeks and the whole family was relieved.',
  },
  {
    name: 'Michael B.',
    location: 'Rochdale',
    role: 'Developer',
    stars: 5,
    text: 'Pennine consistently delivers off-market refurbishment opportunities that I simply cannot find elsewhere. Their local knowledge is second to none and the deal analysis they provide saves me hours of due diligence.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { ref, inView } = useInView();

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="gold-label">Client Stories</p>
          <h2 className="section-heading mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Real experiences from homeowners and investors who have worked with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-card p-8 md:p-12 min-h-[280px] flex flex-col justify-between overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} className="text-navy-800" />
            </div>

            {/* Testimonial */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} size={18} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-400 font-bold text-lg">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-navy-800">{testimonials[current].name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonials[current].role} · {testimonials[current].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-gold-400' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-navy-800 hover:bg-navy-800 hover:text-white transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => go(1)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-navy-800 hover:bg-navy-800 hover:text-white transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
