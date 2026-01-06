import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-20 bg-[#0D0F18] relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neonPurple/20 to-transparent" />
       <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neonCyan/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Experience Log
          </h2>
          <p className="text-gray-400 font-sans">
            My professional journey through tech and hospitality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Glowing Line*/}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-neonPurple to-transparent md:-translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    animate={{ 
                      scale: isExpanded ? 1.2 : 1,
                      backgroundColor: isExpanded ? '#A855F7' : '#0A0A0E',
                      borderColor: isExpanded ? '#fff' : '#A855F7'
                    }}
                    className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-neonPurple transform -translate-x-[calc(50%+1px)] md:-translate-x-1/2 mt-8 z-20 shadow-[0_0_15px_rgba(168,85,247,0.8)] bg-[#0A0A0E] flex items-center justify-center transition-colors duration-300"
                  >
                    {isExpanded && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                  </motion.div>

                  {/* Content Card */}
                  <div className="ml-20 md:ml-0 md:w-1/2 flex justify-center w-full px-4">
                      <motion.div
                          layout
                          onMouseEnter={() => setExpandedId(exp.id)}
                          onMouseLeave={() => setExpandedId(null)}
                          onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                          className={`w-full max-w-lg bg-card/50 backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                              isExpanded 
                                ? 'border-neonPurple/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] bg-card' 
                                : 'border-white/5 hover:border-neonCyan/30'
                          }`}
                      >
                          {/* Header */}
                          <div className="flex items-start justify-between gap-4 relative z-10">
                             <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`p-2 rounded-lg transition-colors duration-300 ${isExpanded ? 'bg-neonPurple/20 text-neonPurple' : 'bg-white/5 text-gray-400'}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className={`text-xl font-bold transition-colors ${isExpanded ? 'text-white' : 'text-gray-200'}`}>
                                        {exp.role}
                                    </h3>
                                </div>
                                <h4 className="text-neonCyan font-medium mb-1">{exp.company}</h4>
                             </div>
                          </div>

                          {/* Metadata */}
                          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 mt-2 mb-4">
                              <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                                  <Calendar className="w-3 h-3" />
                                  {exp.period}
                              </span>
                               <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                                  <MapPin className="w-3 h-3" />
                                  {exp.location}
                              </span>
                          </div>

                          {/* Expanded Content */}
                          <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />
                                    <ul className="space-y-3">
                                        {exp.description.map((desc, i) => (
                                            <motion.li 
                                                key={i} 
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="text-sm text-gray-300 flex items-start gap-3"
                                            >
                                                 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neonPurple shadow-[0_0_5px_rgba(168,85,247,0.5)] flex-shrink-0" />
                                                <span className="leading-relaxed">{desc}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Hint to expand */}
                          {!isExpanded && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute bottom-4 right-4 text-gray-600"
                              >
                                  <ChevronDown className="w-5 h-5 animate-bounce" />
                              </motion.div>
                          )}
                          
                          {/* Decorative Glow on Hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br from-neonPurple/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'group-hover:opacity-50'}`} />
                      </motion.div>
                  </div>
                  
                  {/* Empty side for layout balance */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;