import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const floatingShapes = [
  { size: 300, x: '10%', y: '20%', delay: 0, duration: 8 },
  { size: 200, x: '80%', y: '60%', delay: 2, duration: 10 },
  { size: 150, x: '60%', y: '10%', delay: 1, duration: 7 },
  { size: 100, x: '30%', y: '80%', delay: 3, duration: 9 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToNext = () => {
    const el = document.querySelector('#trusted');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/property1.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/75 to-navy-950/90" />
      </motion.div>

      {/* Floating orbs */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-max text-center px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/pennine logo.png"
            alt="Pennine Property Partners"
            className="h-20 max-w-[78vw] w-auto rounded-xl border border-gold-300/30 shadow-[0_14px_40px_rgba(0,0,0,0.42)] md:h-24 lg:h-28"
          />
        </motion.div>

        {/* Gold label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gold-400 font-semibold text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Stockport and Manchester
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Helping Homeowners{' '}
          <span className="text-gradient-gold">Sell Quickly.</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-semibold">
            Connecting Investors With{' '}
            <span className="text-gradient-gold">Trusted Opportunities.</span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We connect homeowners who need a quick, stress-free sale with our trusted
          network of property investors — delivering speed, certainty and transparency
          across the North West.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#sell"
            onClick={(e) => { e.preventDefault(); document.querySelector('#sell')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary text-base px-10 py-5 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Sell My Property
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#investors"
            onClick={(e) => { e.preventDefault(); document.querySelector('#investors')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-secondary text-base px-10 py-5 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Become an Investor
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            'Response within 24 hours',
            'Deep Local Connections',
            'Investors and Sellers Already Onboard',
          ].map((stat) => (
            <div key={stat} className="glass-card p-4 min-h-28 flex items-center justify-center text-center">
              <div className="font-display text-lg md:text-xl lg:text-2xl font-bold text-gold-400 leading-snug">{stat}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-gold-400 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}