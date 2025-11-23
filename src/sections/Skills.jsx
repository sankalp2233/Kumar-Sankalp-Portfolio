import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaReact, FaGitAlt, FaAws, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiPostman } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming & Web',
      skills: [
        { name: 'Java', icon: FaJava, color: 'text-red-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
        { name: 'React.js', icon: FaReact, color: 'text-cyan-500' },
      ],
    },
    {
      title: 'Databases & Backend',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'Spring Data JPA', icon: FaDatabase, color: 'text-purple-500' },
      ],
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'AWS', icon: FaAws, color: 'text-yellow-600' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-slate-700 hover:border-blue-500 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.3 }}
                      className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all group cursor-pointer"
                    >
                      <skill.icon className={`${skill.color} text-2xl group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Additional Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {['RESTful APIs', 'Fetch API', 'Google Maps API', 'System Administration', 'Spring Data JPA', 'Deployment Practices', 'Version Control'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + (index * 0.05), duration: 0.3 }}
                  className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
