import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const socialData = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sukeerthan-arava-a14347318/',
    icon: Linkedin,
    colorClass: 'text-blue-500',
    hoverBgClass: 'hover:bg-blue-500/10',
    hoverBorderClass: 'hover:border-blue-500/50',
    glowClass: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Arava-Sukeerthan',
    icon: Github,
    colorClass: 'text-slate-300',
    hoverBgClass: 'hover:bg-purple-500/10',
    hoverBorderClass: 'hover:border-purple-500/50',
    glowClass: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
  }
];

const SocialLinks = ({ className = '', iconSize = 24, showLabels = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialData.map((social, index) => {
        const Icon = social.icon;
        
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center gap-2 p-3 rounded-xl bg-slate-800/50 
              border border-slate-700 backdrop-blur-md transition-all duration-300
              ${social.colorClass} ${social.hoverBgClass} ${social.hoverBorderClass} ${social.glowClass}
            `}
            aria-label={social.name}
          >
            <Icon size={iconSize} />
            {showLabels && <span className="font-medium text-sm">{social.name}</span>}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
