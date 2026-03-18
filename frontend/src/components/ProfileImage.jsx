import { useState } from 'react';
import { motion } from 'framer-motion';
import OrbitAnimation from './OrbitAnimation';

const ProfileImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      // Anti-Gravity Floating Animation (slow easeInOut)
      animate={{
        y: ["-4%", "4%", "-4%"],
        rotateZ: [-1, 1, -1]
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
      className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto cursor-default flex items-center justify-center pt-8 md:pt-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Orbit Rings */}
      <OrbitAnimation isHovered={isHovered} />

      {/* Core Glowing Background (Blue & Red Theme) */}
      <motion.div 
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.7 : 0.4
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-[10%] bg-gradient-to-tr from-blue-600 to-red-600 rounded-full blur-[70px]"
      />
      
      {/* Glassmorphism Container with Neon Glowing Border */}
      <motion.div 
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered 
            ? '0 0 60px rgba(59, 130, 246, 0.7), 0 0 80px rgba(239, 68, 68, 0.5)' 
            : '0 0 40px rgba(59, 130, 246, 0.3), 0 0 50px rgba(239, 68, 68, 0.2)'
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-[18%] md:inset-[16%] z-10 rounded-full p-1.5 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 glass-card"
      >
        {/* Actual Image Holder */}
        <div className="w-full h-full rounded-full overflow-hidden bg-[#030014] relative">
          
          {/* Subtle inner glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
          
          <img 
            src="/profile.png" 
            alt="Sukeerthan Profile" 
            className={`w-full h-full object-cover object-center filter contrast-[1.12] brightness-[1.05] saturate-[1.1] transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          
          {/* Fallback Display if image is missing */}
          <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#0a0a1a] to-[#1a1a2e] text-center px-4">
            <span className="text-[10px] md:text-sm font-mono text-blue-400">
              Upload your image<br/>as <span className="text-white font-bold">profile.png</span><br/>in /public folder
            </span>
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;
