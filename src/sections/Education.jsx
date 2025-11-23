import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Arts (English Literature – English Hons)',
      institution: 'Indira Gandhi National Open University (IGNOU)',
      period: 'Aug 2024 – Present',
      status: 'In Progress',
    },
    {
      degree: 'Bachelor of Arts',
      institution: 'Zakir Hussain Delhi College, University of Delhi',
      period: 'Aug 2021 – Jun 2024',
      status: 'Completed',
    },
  ];

  const certifications = [
    {
      title: "Master's in Full Stack Web Development with Java",
      issuer: 'IT Vedant, South Extension',
      year: '2024',
    },
    {
      title: 'IBM Certification in Java Fundamentals',
      issuer: 'IBM',
      year: '2024',
    },
    {
      title: 'IBM Certification in SQL and Relational Databases 101',
      issuer: 'IBM',
      year: '2024',
    },
    {
      title: 'Diploma in Cloud Computing',
      issuer: 'Jetking, South Extension',
      year: '2023',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Education & <span className="text-blue-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <FiBookOpen className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <FiAward className="text-purple-500 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700 hover:border-purple-500 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/10 p-2 rounded-lg group-hover:bg-purple-500/20 transition-all">
                        <FiAward className="text-purple-400 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">{cert.title}</h4>
                        <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs">{cert.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
