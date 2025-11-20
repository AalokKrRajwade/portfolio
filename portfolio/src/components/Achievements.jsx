import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Rated Expert on Codeforces",
      description: "Rating: 1600+",
      icon: Trophy,
      color: "text-cyan-400"
    },
    {
      title: "Rated Knight on Leetcode",
      description: "Rating: 2000+",
      icon: Star,
      color: "text-yellow-400"
    },
    {
      title: "3 Star on CodeChef",
      description: "Max Rating: 1747",
      icon: Star,
      color: "text-orange-400"
    },
    {
      title: "HackerRank",
      description: "C++ Gold level",
      icon: Star,
      color: "text-purple-400"
    },
    {
      title: "HackerRank Certified",
      description: "Problem Solving (Intermediate)",
      icon: Award,
      color: "text-green-400"
    },
    {
      title: "2000+ Problems Solved",
      description: "Across Codeforces, LeetCode, and CodeChef",
      icon: Trophy,
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Honors & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-all hover:bg-slate-800"
            >
              <div className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
