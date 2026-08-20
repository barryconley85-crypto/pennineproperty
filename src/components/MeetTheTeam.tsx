import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const team = [
  {
    name: 'Adam',
    role: 'Co-Founder & Property Specialist',
    email: 'Adam@penninepropertypartners.co.uk',
    phone: '+44 (0)7533 849609',
    bio: 'With years of experience in the Greater Manchester property market, Adam leads our investor relations and deal sourcing operations. His deep local knowledge and extensive network ensure our clients always receive the best opportunities.',
    initials: 'A',
  },
  {
    name: 'Laura',
    role: 'Co-Founder & Client Relations',
    email: 'Laura@penninepropertypartners.co.uk',
    phone: '+44 (0)7533 849609',
    bio: 'Laura manages our homeowner relationships, ensuring every seller receives the personal, compassionate service they deserve. Her commitment to transparency and clear communication is at the heart of everything we do.',
    initials: 'L',
  },
];

export default function MeetTheTeam() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="gold-label">The Team</p>
          <h2 className="section-heading mb-4">Meet the People Behind Pennine</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A family-run business built on trust, transparency and genuine care for
            every client. When you work with us, you deal with real people who are
            invested in your outcome.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="card p-8 group"
            >
              {/* Avatar */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 flex items-center justify-center flex-shrink-0 shadow-navy group-hover:shadow-gold transition-shadow duration-300">
                  <span className="font-display text-3xl font-bold text-gold-400">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-800">{member.name}</h3>
                  <p className="text-gold-500 font-medium text-sm">{member.role}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm mb-6">{member.bio}</p>

              {/* Contact */}
              <div className="space-y-2 border-t border-gray-100 pt-4">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-navy-800 transition-colors"
                >
                  <Mail size={15} className="text-gold-400" />
                  {member.email}
                </a>
                <a
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-navy-800 transition-colors"
                >
                  <Phone size={15} className="text-gold-400" />
                  {member.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Family-run badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-navy-800/5 border border-navy-800/10">
            <div className="w-2 h-2 rounded-full bg-gold-400" />
            <span className="text-navy-800 font-medium text-sm">
              Proudly family-run since our founding — serving Greater Manchester and the North West
            </span>
            <div className="w-2 h-2 rounded-full bg-gold-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
