import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Aalok Kumar Rajwade. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/aalok-rajwade" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/aalok-rajwade" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:aalokprayasjee01@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
