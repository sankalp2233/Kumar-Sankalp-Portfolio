import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiLeaflet } from 'react-icons/si';
import cabNestLogo from '../assets/images/cabnest-logo.webp';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const project = {
    title: 'CabNest',
    subtitle: 'Taxi Booking Application',
    year: '2024',
    description: 'A comprehensive full-stack taxi booking application that enables users to book rides, track drivers in real-time, and calculate fares automatically. Built with a scalable architecture and modern technologies.',
    image: cabNestLogo,
    technologies: [
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
      { name: 'React.js', icon: FaReact, color: 'text-cyan-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
      { name: 'Leaflet Maps', icon: SiLeaflet, color: 'text-green-600' },
    ],
    features: [
      'Real-time location tracking with Leaflet Maps API',
      'User authentication and authorization system',
      'Automated ride booking and fare calculation',
      'RESTful API architecture with Spring Boot',
      'MySQL database with Spring Data JPA',
      'Scalable layered architecture (MVC pattern)',
      'Comprehensive API testing with Postman',
      'Responsive React.js frontend interface',
    ],
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Featured <span className="text-blue-500">Project</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:border-blue-500 transition-all"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 md:p-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  src={project.image}
                  alt={project.title}
                  className="relative w-full max-w-md rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <span className="text-blue-500 font-semibold">{project.year}</span>
                </div>
                <p className="text-blue-400 text-lg mb-4">{project.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + (index * 0.05), duration: 0.3 }}
                        className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-700"
                      >
                        <tech.icon className={`${tech.color} text-xl`} />
                        <span className="text-gray-300 text-sm">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + (index * 0.05), duration: 0.3 }}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/sankalp2233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 border border-slate-700"
                  >
                    <FiGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
