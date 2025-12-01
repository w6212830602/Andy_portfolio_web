import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Code } from 'lucide-react';
import Lottie from 'lottie-react';

const About: React.FC = () => {
  const [lottieData, setLottieData] = useState<any>(null);

  useEffect(() => {
    // Fetch a public Lottie JSON for a futuristic tech/developer animation
    // Using a reliable "Coding/Developer" animation URL
    fetch('https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json') 
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch lottie');
        return response.json();
      })
      .then(data => setLottieData(data))
      .catch(err => console.error("Lottie fetch error:", err));
  }, []);

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-neonCyan rounded-full"></span>
              About Me
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-sans">
              I'm a <span className="text-neonPurple font-semibold">Junior Software Developer</span> with a passion for building full-stack applications and immersive mobile experiences. With a background in varied industries, I bring strong problem-solving skills and a user-centric approach to every project.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-sans">
              Currently, I'm exploring the intersection of <span className="text-neonBlue font-semibold">AI integration</span> and reactive interfaces. Whether it's automating sales analytics or creating interactive story engines, I love turning complex data into clean, playful UI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-white/5 hover:border-neonPurple/30 transition-colors group">
                <Cpu className="w-8 h-8 text-neonPurple mb-3 group-hover:animate-bounce" />
                <h3 className="text-white font-bold mb-1">Problem Solver</h3>
                <p className="text-sm text-gray-500">Analytical thinking backed by hands-on troubleshooting.</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-white/5 hover:border-neonCyan/30 transition-colors group">
                <Code className="w-8 h-8 text-neonCyan mb-3 group-hover:rotate-12 transition-transform" />
                <h3 className="text-white font-bold mb-1">Full Stack</h3>
                <p className="text-sm text-gray-500">From React frontends to C# & Supabase backends.</p>
              </div>
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full w-[320px] h-[320px] mx-auto my-auto pointer-events-none"
            />
             <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-neonPurple/20 rounded-full w-[350px] h-[350px] mx-auto my-auto pointer-events-none"
            />
            
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-card shadow-[0_0_50px_rgba(59,199,255,0.2)] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group">
              {lottieData ? (
                <div className="w-full h-full p-4 bg-black/40 backdrop-blur-sm">
                   <Lottie 
                      animationData={lottieData} 
                      loop={true} 
                      className="w-full h-full"
                    />
                </div>
              ) : (
                <User className="w-32 h-32 text-gray-600" />
              )}
               <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neonPurple/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10 bg-card px-4 py-2 rounded-full border border-white/10 shadow-xl text-xs font-mono text-neonCyan z-10"
            >
              System.init()
            </motion.div>
             <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-10 bg-card px-4 py-2 rounded-full border border-white/10 shadow-xl text-xs font-mono text-neonPurple z-10"
            >
              <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>
              Online
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;