import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with comprehensive training in Java, Spring Boot, React.js, and MySQL from IT Vedant. I specialize in building dynamic web applications, RESTful APIs, and database-driven solutions that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Currently, I'm expanding my knowledge in deployment practices, AWS cloud services, and MongoDB to stay at the forefront of modern web development. My strong problem-solving skills and eagerness to learn make me an ideal candidate for challenging projects and internship opportunities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing clean, maintainable code and following best practices. Whether it's designing scalable architectures, optimizing database queries, or creating intuitive user interfaces, I'm committed to delivering high-quality solutions that exceed expectations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Education</h4>
                  <p className="text-gray-400">MA English Literature (IGNOU), BA from Delhi College</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">kumarsankalp2310@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+91 7303506822</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
