import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SDE Internship",
      company: "Vayv Systems",
      period: "May 2025 - Jul 2025",
      description: [
        "Implemented full-stack user management system.",
        "Built user profile APIs for create, read, and update functionality using NodeJS and ExpressJS.",
        "Implemented secure JWT-based authentication mechanisms.",
        "Utilized React.js and MongoDB to fetch, display, and manage user profile data.",
        "Optimized database queries and API responses."
      ]
    },
    {
      title: "Publicity Executive",
      company: "Jagriti (Annual Socio-Awareness Weekend organized by Social Service Council IIT BHU)",
      period: "2023",
      description: [
        "Played a key role in planning and executing publicity campaigns for Jagriti.",
        "Targeting and engaging diverse student demographics to maximize event reach and impact."
      ]
    },
    {
      title: "Executive",
      company: "Kashiyatra (Annual Socio-cultural festival of IIT BHU)",
      period: "2023",
      description: [
        "Coordinated and managed large-scale fest events.",
        "Overseeing operations, resolving onspot issues, and ensuring seamless execution for an improved participant experience"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-700 last:border-l-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
              
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-primary/30 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm bg-slate-800 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
