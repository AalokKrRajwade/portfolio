import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Code, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-slate-900">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm md:text-base mb-4">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Aalok Kumar Rajwade</span>
            </h1>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Competitive Programmer | Full Stack Developer | IIT (BHU)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href="/resume.pdf" // Placeholder for resume link
              className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700 flex items-center gap-2"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex justify-center gap-6 text-gray-400"
          >
            <a href="https://github.com/aalok-rajwade" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/aalok-rajwade" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aalokprayasjee01@gmail.com" className="hover:text-white transition-colors">
              <Mail size={24} />
            </a>
             {/* Add Codeforces/Leetcode icons if available or use generic Code icon */}
             <a href="#" className="hover:text-white transition-colors" title="Codeforces">
                <Code size={24} />
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
