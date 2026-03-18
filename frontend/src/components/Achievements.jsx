import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, ShieldCheck } from 'lucide-react';

const achievements = [
  {
    title: 'Guinness World Record Contributor - Agentathon',
    subtitle: 'Malla Reddy Engineering College',
    description: 'Developed autonomous AI agents in a high-pressure, globally recognized hackathon setting. Collaborated with top-tier talent to build scalable intelligent systems within strict deadlines.',
    icon: <Trophy className="text-yellow-400 w-8 h-8" />,
    color: 'from-amber-600 to-yellow-500'
  },
  {
    title: 'Microsoft Learn Student Ambassador',
    subtitle: 'Global Community Leader',
    description: 'Empowered a global network of peers by advocating for advanced tech skills. Conducted technical workshops focusing on Artificial Intelligence, Cloud Computing, and Data Science methodologies.',
    icon: <Star className="text-blue-400 w-8 h-8" />,
    color: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'GeeksforGeeks Campus Mantri',
    subtitle: 'Technical Leadership',
    description: 'Spearheaded technical communities on campus, orchestrating coding competitions and algorithm workshops to elevate the technical proficiency of engineering cohorts.',
    icon: <Award className="text-emerald-400 w-8 h-8" />,
    color: 'from-emerald-600 to-teal-500'
  },
  {
    title: 'NCC ‘A’ Certificate Holder',
    subtitle: 'National Cadet Corps (India)',
    description: 'Demonstrated exceptional discipline, resilience, and strategic teamwork. Cultivated core leadership qualities that translate directly into leading high-performing technical teams.',
    icon: <ShieldCheck className="text-purple-400 w-8 h-8" />,
    color: 'from-purple-600 to-indigo-500'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 w-full min-h-screen flex items-center bg-[#030014]/50 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-200 mb-4 inline-flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
            Milestones & Leadership
            <span className="w-12 h-[2px] bg-purple-500 rounded-full"></span>
          </h2>
          <p className="text-cyan-400 font-medium tracking-wide font-display mt-2 uppercase">RECOGNITION, COMMUNITY IMPACT & DISCIPLINE</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Central connecting line for desktop visual */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-purple-500/0 -translate-x-1/2 z-0"></div>

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative z-10 glass-card p-8 rounded-3xl hover:bg-[#0a0a1a]/80 transition-all duration-500 group border-l-4 border-l-transparent hover:border-l-cyan-500
                ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:-translate-y-12'}
              `}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-110"></div>
              
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl bg-[#030014] border border-white/10 shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  {item.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-white transition-colors leading-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="text-cyan-400 font-medium text-sm mb-4 font-mono tracking-tight bg-cyan-500/10 inline-block px-2 py-0.5 rounded">
                    {item.subtitle}
                  </div>
                  <p className="text-slate-400 font-light text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
