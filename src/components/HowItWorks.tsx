import { motion } from 'framer-motion';
import { MessageSquare, Search, Users, Inbox, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us About Your Property',
    description:
      'Complete our simple enquiry form or call us directly. Tell us about your property, your situation and your ideal timescale. There is no obligation and everything is completely confidential.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Review Your Circumstances',
    description:
      "Our team takes the time to understand your specific needs, the property's condition and your desired outcome. We will be honest with you about what we can achieve and how quickly.",
  },
  {
    number: '03',
    icon: Users,
    title: 'We Introduce Your Property to Investors',
    description:
      'We present your property to the most suitable investors in our network — those who match your property type, location and timescale. Only serious, cash-ready buyers.',
  },
  {
    number: '04',
    icon: Inbox,
    title: 'Receive Offers',
    description:
      'You receive genuine cash offers directly. We guide you through each offer, explaining the terms clearly so you can make a fully informed decision with no pressure.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Complete Quickly',
    description:
      'Once you accept an offer, we support you through to completion. With cash buyers and no chains, sales typically complete in 2–4 weeks — sometimes faster.',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="gold-label">The Process</p>
          <h2 className="section-heading mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our simple five-step process takes the stress out of selling. From first
            contact to completion, we guide you every step of the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical centre line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400/0 via-gold-400/40 to-gold-400/0 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="lg:grid lg:grid-cols-[1fr_100px_1fr] lg:gap-8 lg:items-center lg:min-h-[180px]"
                >
                  {/* Left content */}
                  <div
                    className={
                      isLeft
                        ? 'lg:col-start-1 lg:row-start-1 lg:text-right lg:pr-4'
                        : 'lg:col-start-1 lg:row-start-1'
                    }
                  >
                    {isLeft && (
                      <>
                        <div className="text-gold-400 font-bold text-sm tracking-widest mb-1">
                          STEP {step.number}
                        </div>

                        <h3 className="font-display text-xl font-bold text-navy-800 mb-3">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Centre node */}
                  <div className="hidden lg:flex lg:col-start-2 lg:row-start-1 justify-center items-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-navy-800 border-4 border-gold-400/30 flex flex-col items-center justify-center shadow-navy"
                    >
                      <step.icon size={22} className="text-gold-400 mb-0.5" />
                      <span className="text-gold-400 font-bold text-xs">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right content */}
                  <div
                    className={
                      !isLeft
                        ? 'lg:col-start-3 lg:row-start-1 lg:text-left lg:pl-4'
                        : 'lg:col-start-3 lg:row-start-1'
                    }
                  >
                    {!isLeft && (
                      <>
                        <div className="text-gold-400 font-bold text-sm tracking-widest mb-1">
                          STEP {step.number}
                        </div>

                        <h3 className="font-display text-xl font-bold text-navy-800 mb-3">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Mobile version */}
                  <div className="lg:hidden flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center">
                        <step.icon size={20} className="text-gold-400" />
                      </div>
                    </div>

                    <div>
                      <div className="text-gold-400 font-bold text-sm tracking-widest mb-1">
                        STEP {step.number}
                      </div>

                      <h3 className="font-display text-xl font-bold text-navy-800 mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to get started? It takes less than 2 minutes to submit your enquiry.
          </p>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Start the Process Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
