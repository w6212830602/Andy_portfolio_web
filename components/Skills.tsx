import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Object.values(SkillCategory);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-[0.03] pointer-events-none">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white aspect-square" />
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-gray-400">Languages, frameworks, and tools I use to build worlds.</p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            const categorySkills = SKILLS.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} className="relative">
                <h3 className="text-xl font-mono text-neonBlue mb-6 pl-4 border-l-2 border-neonBlue">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {categorySkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + catIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          boxShadow: "0 0 20px rgba(59,199,255,0.4)",
                          borderColor: "rgba(59,199,255,0.8)" 
                        }}
                        className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-white/10 cursor-default select-none group"
                      >
                        {Icon && (
                          <Icon className="w-5 h-5 text-gray-400 group-hover:text-neonPurple transition-colors group-hover:rotate-12" />
                        )}
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        
                        {/* Interactive glow effect on hover only */}
                        <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-neonCyan transition-colors shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_10px_#3BC7FF]" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;