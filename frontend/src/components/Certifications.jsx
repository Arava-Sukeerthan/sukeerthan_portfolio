import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, Brain, ChevronDown, CheckCircle } from 'lucide-react';

const certificationsData = [
  {
    id: 1,
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    shortDesc: 'Comprehensive certification in utilizing Python for advanced data analysis and predictive modeling.',
    fullDesc: 'Mastered core data science libraries including Pandas, NumPy, and Scikit-Learn. Applied statistical analysis techniques to real-world datasets and developed foundational machine learning workflows for data-driven decision making.',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
    date: '2023',
    gradient: 'from-cyan-600 to-blue-600',
    glowColor: 'rgba(6, 182, 212, 0.4)'
  },
  {
    id: 2,
    title: 'Oracle Certified Professional',
    issuer: 'Generative AI',
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    shortDesc: 'Validation of advanced expertise in designing and engineering enterprise-grade Generative AI solutions.',
    fullDesc: 'Engineered complex LLM-based architectures using prompt engineering, fine-tuning, and RAG (Retrieval-Augmented Generation) patterns. Demonstrated proficiency in deploying scalable AI solutions on enterprise infrastructure.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Oracle AI'],
    date: '2024',
    gradient: 'from-purple-600 to-indigo-600',
    glowColor: 'rgba(168, 85, 247, 0.4)'
  }
];

const CertificationCard = ({ cert, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`glass-card relative overflow-hidden rounded-3xl cursor-pointer group transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-white/20`}
      style={{
        boxShadow: isExpanded ? `0 0 30px ${cert.glowColor}` : '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Glow background fading in gracefully on hover */}
      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full translate-x-10 -translate-y-10`}></div>
      <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${cert.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 rounded-full -translate-x-10 translate-y-10`}></div>

      <motion.div layout className="p-8 relative z-10 flex flex-col h-full">
        <motion.div layout className="flex justify-between items-start mb-6">
          <div className="p-4 bg-[#030014]/50 rounded-2xl border border-white/5 backdrop-blur-md shadow-inner">
            {cert.icon}
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-slate-300">{cert.date}</span>
          </div>
        </motion.div>

        <motion.div layout>
          <span className="text-[11px] uppercase font-bold tracking-widest text-slate-400 mb-1 block">
            {cert.issuer}
          </span>
          <h3 className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
            {cert.title}
          </h3>
        </motion.div>

        <motion.p layout className="text-slate-400 font-light mt-4 text-[15px] leading-relaxed">
          {cert.shortDesc}
        </motion.p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/10 space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {cert.fullDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300 font-mono">
                      <CheckCircle className="w-3 h-3 text-cyan-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="mt-6 flex justify-between items-center pt-4 border-t border-white/5">
          <span className="text-cyan-400 text-xs font-medium flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
            {isExpanded ? 'Show less' : 'View details'}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all border border-transparent group-hover:border-cyan-500/30"
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 w-full bg-[#030014]/80 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-200 mb-4 inline-flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
            Certifications
            <span className="w-12 h-[2px] bg-purple-500 rounded-full"></span>
          </h2>
          <p className="text-cyan-400 font-medium tracking-wide font-display mt-2 uppercase">
            VERIFIED EXPERTISE IN AI & DATA SCIENCE
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
