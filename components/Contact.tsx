
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Copy, Check, Terminal } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Mouse tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden flex items-center min-h-[80vh]">
      {/* Decorative particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonCyan/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info / Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neonPurple/10 text-neonPurple border border-neonPurple/20 text-sm font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonPurple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neonPurple"></span>
                </span>
                Open for Work
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Ready to start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonCyan">
                  new project?
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                I'm currently available for freelance projects and full-time roles. If you're looking for a developer who cares about interaction and design, let's talk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                 href={`https://${CONTACT_INFO.linkedin}`} 
                 target="_blank" 
                 rel="noreferrer"
                 className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-bold font-heading hover:bg-white/5 hover:border-neonCyan/50 transition-all flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Interactive Holographic Card Side */}
          <div className="perspective-1000 flex justify-center lg:justify-end">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl group cursor-pointer"
            >
              {/* Card Glare/Sheen */}
              <div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ transform: "translateZ(1px)" }}
              />
              
              {/* Floating Elements (Z-index effect) */}
              <div style={{ transform: "translateZ(30px)" }} className="absolute inset-0 p-8 flex flex-col justify-between">
                
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading tracking-wide">Andy Li</h3>
                    <p className="text-neonCyan font-mono text-sm mt-1">Creative Developer</p>
                  </div>
                  <Terminal className="w-8 h-8 text-white/20" />
                </div>

                {/* Body - Contact Chip */}
                <div className="space-y-4">
                  <div 
                    onClick={handleCopyEmail}
                    className="group/email flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/10 hover:border-neonPurple/50 hover:bg-black/60 transition-all cursor-pointer"
                  >
                     <div className="flex items-center gap-3 overflow-hidden">
                       <div className="p-2 rounded-md bg-neonPurple/20 text-neonPurple">
                         <Mail className="w-4 h-4" />
                       </div>
                       <span className="text-sm text-gray-300 font-mono truncate">{CONTACT_INFO.email}</span>
                     </div>
                     <div className="text-gray-500 group-hover/email:text-white transition-colors">
                       {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                     </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/10">
                     <div className="flex items-center gap-3">
                       <div className="p-2 rounded-md bg-neonBlue/20 text-neonBlue">
                         <MapPin className="w-4 h-4" />
                       </div>
                       <span className="text-sm text-gray-300 font-mono">{CONTACT_INFO.location}</span>
                     </div>
                  </div>
                </div>

                {/* Footer - Social Row */}
                <div className="flex items-center gap-4 mt-2">
                   <a href={`https://${CONTACT_INFO.github}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                     <Github className="w-6 h-6" />
                   </a>
                   <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neonBlue transition-colors hover:scale-110 transform duration-200">
                     <Linkedin className="w-6 h-6" />
                   </a>
                   <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
                   <span className="text-[10px] font-mono text-gray-600">ID: 855299a0</span>
                </div>
              </div>
              
              {/* Neon Borders */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-neonPurple/30 via-transparent to-neonCyan/30 -z-10 opacity-50 blur-sm" />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
