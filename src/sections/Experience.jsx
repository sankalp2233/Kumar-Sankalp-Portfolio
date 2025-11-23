import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'YugaYatra Retail (OPC) Pvt. Ltd.',
      period: 'Nov 17, 2025 - Jan 17, 2026',
      duration: '2 months',
      description: 'Web development and digital content creation',
      highlights: [
        'API design and development',
        'Real-time projects and freelancing',
        'Seller portal development',
        'Team collaboration',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            <span className="text-blue-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500/20 p-3 rounded-lg">
                        <FiBriefcase className="text-blue-500 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    </div>
                    <p className="text-blue-400 text-lg ml-12">{exp.company}</p>
                  </div>
                </div>

                <div className="ml-12 space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FiCalendar className="text-blue-500" />
                    <span>{exp.period}</span>
                    <span className="text-gray-500">({exp.duration})</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 ml-12">{exp.description}</p>

                <div className="ml-12">
                  <h4 className="text-white font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + (i * 0.05), duration: 0.3 }}
                        className="text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
