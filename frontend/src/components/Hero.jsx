import { motion } from 'framer-motion';
import { ChevronDown, Database, Cpu, BrainCircuit } from 'lucide-react';
import SocialLinks from './SocialLinks';
import ProfileImage from './ProfileImage';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      <div className="container mx-auto px-6 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 items-center max-w-7xl mx-auto">
          
          {/* Left Text Segment */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-10 w-full mt-8 lg:mt-0">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-xs md:text-sm font-medium text-cyan-300 tracking-wide uppercase">Open to Opportunities</span>
            </motion.div>

            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.1 }}
               className="text-2xl md:text-3xl font-light text-slate-300 mb-2"
            >
               Hello, I'm <span className="font-bold text-white tracking-wide">Sukeerthan</span>
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold mb-6 tracking-tight leading-tight w-full"
            >
              Aspiring <span className="text-gradient">Data Scientist</span><br/>
              <span className="text-3xl sm:text-4xl md:text-5xl text-slate-300">& ML Enthusiast</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed"
            >
              I build intelligent, scalable machine learning systems and transform complex datasets into actionable insights to drive real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 items-center lg:items-start justify-center lg:justify-start w-full"
            >
              <a href="#projects" className="group relative px-7 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Models <BrainCircuit size={18} className="group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
              </a>
              
              <a href="#contact" className="px-7 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 backdrop-blur-md text-slate-300 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
                 View Resume 
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex justify-center lg:justify-start w-full"
            >
              <SocialLinks iconSize={24} />
            </motion.div>
          </div>

          {/* Right Image/3D Segment */}
          <div className="order-1 lg:order-2 flex justify-center items-center w-full min-h-[300px] mb-8 lg:mb-0">
            <ProfileImage />
          </div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden md:block"
      >
        <a href="#about" className="text-slate-500 hover:text-cyan-400 transition-colors bg-[#030014]/50 rounded-full p-2 backdrop-blur-sm">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
