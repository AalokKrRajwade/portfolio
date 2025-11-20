import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Ceramic Engineering (IDD)",
      institution: "IIT (BHU), Varanasi",
      score: "8.50 CGPA",
      year: "2026",
      icon: GraduationCap
    },
    {
      degree: "Class XII",
      institution: "Prayas Residential School, Raipur",
      score: "94.40%",
      year: "2021",
      icon: Award
    },
    {
      degree: "Class X",
      institution: "Prayas Residential School, Raipur",
      score: "96.40%",
      year: "2019",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I am a final year student at IIT (BHU) with a passion for competitive programming and full-stack development.
            I love solving complex problems and building scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <edu.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-2">{edu.institution}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {edu.year}
                </span>
                <span className="font-semibold text-primary">{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
