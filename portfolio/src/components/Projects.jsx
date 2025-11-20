import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Memories MERN App",
      description: "A social media web application that allows users to create, like, and comment on posts. Implemented secure authentication & authorization with JWT and bcrypt.",
      tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" // Placeholder
    },
    {
      title: "Live Poll Battle",
      description: "Scalable real-time poll application for instant vote synchronization. Features secure poll room creation and interactive voting system with live updates.",
      tech: ["ReactJS", "NodeJS", "WebSockets"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" // Placeholder
    },
    {
      title: "Sorting Visualizer",
      description: "Web application to showcase the inner workings of popular sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort with color animations.",
      tech: ["HTML", "CSS", "JavaScript", "Algorithms"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" // Placeholder
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
