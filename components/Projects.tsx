import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-20 bg-[#0D0F18] relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neonBlue/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">
            A collection of applications demonstrating full-stack capabilities, data visualization, and creative interaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onMouseMove={handleMouseMove}
              className="group relative rounded-2xl cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-shadow duration-300"
            >
              {/* Glow Border Effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-white/10 transition-opacity duration-300" />
              <div 
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.6), transparent 40%)`
                }}
              />

              {/* Card Content */}
              <div className="relative bg-card rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image/Icon Container - Replaced Image with Gradient + Icon */}
                <div className={`h-48 overflow-hidden relative bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20" 
                       style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                  </div>

                  <motion.div 
                    layoutId={`icon-${project.id}`}
                    className="z-20 transform transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-6"
                  >
                    <project.icon className="w-20 h-20 text-white shadow-xl drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]" strokeWidth={1.5} />
                  </motion.div>

                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold font-mono rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full border border-white/20 text-white mt-16">
                          <Maximize2 className="w-6 h-6" />
                      </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold text-white mb-2 font-heading group-hover:text-neonCyan transition-colors">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                       <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5 font-mono">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-[#13151f] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-50 flex flex-col md:flex-row max-h-[90vh]"
            >
               <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Visual Side */}
              <div className={`w-full md:w-1/2 h-64 md:h-auto relative bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`}>
                 {/* Pattern Overlay */}
                 <div className="absolute inset-0 opacity-20" 
                       style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                 </div>
                 
                 <motion.div layoutId={`icon-${selectedProject.id}`}>
                    <selectedProject.icon className="w-32 h-32 text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]" strokeWidth={1} />
                 </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#13151f] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
                 <motion.h3 
                    layoutId={`title-${selectedProject.id}`}
                    className="text-3xl md:text-4xl font-heading font-bold text-white mb-2"
                 >
                  {selectedProject.title}
                </motion.h3>
                 <span className="inline-block px-3 py-1 text-sm font-bold font-mono rounded-full bg-neonPurple/20 text-neonPurple border border-neonPurple/50 w-fit mb-6">
                    {selectedProject.category}
                  </span>

                  <h4 className="text-gray-300 font-bold mb-2 flex items-center gap-2">
                    <div className="w-1 h-5 bg-neonCyan rounded-full" />
                    Overview
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-gray-300 font-bold mb-3 flex items-center gap-2">
                     <div className="w-1 h-5 bg-neonBlue rounded-full" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-sm px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 font-mono hover:border-neonCyan/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/10 flex gap-4">
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-xl bg-neonPurple hover:bg-neonPurple/90 text-white font-bold text-center transition-all shadow-lg shadow-neonPurple/20 flex items-center justify-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                      </a>
                    )}
                    <a 
                      href={selectedProject.githubUrl || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-center transition-all flex items-center justify-center gap-2 ${!selectedProject.githubUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <Github className="w-4 h-4" />
                        Source Code
                    </a>
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;