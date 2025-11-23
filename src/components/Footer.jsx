import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Kumar <span className="text-blue-500">Sankalp</span>
            </h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about building innovative web applications and solving real-world problems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${link.toLowerCase()}`).scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:kumarsankalp2310@gmail.com"
                className="bg-slate-800 hover:bg-blue-500 text-gray-400 hover:text-white p-3 rounded-lg transition-all transform hover:scale-110"
              >
                <FiMail size={20} />
              </a>
              <a
                href="https://github.com/sankalp2233"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-500 text-gray-400 hover:text-white p-3 rounded-lg transition-all transform hover:scale-110"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kumar-sankalp-6a2777253"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-500 text-gray-400 hover:text-white p-3 rounded-lg transition-all transform hover:scale-110"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            Kumar Sankalp © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
