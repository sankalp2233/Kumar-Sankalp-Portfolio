import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Kumar Sankalp
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl text-gray-300 mb-6"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-xl"
            >
              Specialized in Java, Spring Boot, React.js, and MySQL. Building dynamic web applications and RESTful APIs with a passion for clean code and innovative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <FiMail /> Get In Touch
              </a>
              <a
                href="/Kumar-Sankalp-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <FiDownload /> Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <a href="mailto:kumarsankalp2310@gmail.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiMail size={24} />
              </a>
              <a href="https://github.com/sankalp2233" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kumar-sankalp-6a2777253" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="tel:+917303506822" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiPhone size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={profileImg}
                alt="Kumar Sankalp"
                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover object-top border-4 border-blue-500 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
