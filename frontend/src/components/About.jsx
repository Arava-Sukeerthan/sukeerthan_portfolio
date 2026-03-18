import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin, Award } from 'lucide-react';
import SocialLinks from './SocialLinks';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 w-full min-h-screen flex items-center bg-[#030014]/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-200 mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
            About Me
          </h2>
          <p className="text-cyan-400 font-medium tracking-wide font-display">THE ARCHITECT BEHIND THE MODELS</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left / Profile Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="p-8 rounded-3xl glass-card relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px] translate-x-10 -translate-y-10 group-hover:bg-cyan-400/30 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-[50px] -translate-x-5 translate-y-5"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-600 to-purple-600 mb-8 flex items-center justify-center font-display text-4xl font-bold shadow-lg ring-4 ring-[#030014]">
                  S
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Sukeerthan</h3>
                <p className="text-cyan-400 font-medium mb-6">Data Scientist & ML Engineer</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin size={18} className="text-slate-500" />
                    <span>Nellore, Andhra Pradesh</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Mail size={18} className="text-slate-500" />
                    <span>asukeertthan@gmail.com</span>
                  </div>
                </div>

                <SocialLinks iconSize={20} />
              </div>
            </div>
            
            {/* Education Quick info inside profile box or below */}
            <div className="mt-6 flex flex-col gap-4">
               <div className="glass-card p-5 rounded-2xl border-l-4 border-l-cyan-500">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-200">B.Tech in CS (AI)</h4>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">CGPA: 9.2</span>
                  </div>
                  <p className="text-sm text-slate-400">Narayana Engineering College, Nellore</p>
               </div>
            </div>
          </motion.div>

          {/* Right / Descriptive */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed font-light space-y-6">
              <p className="text-lg">
                I am an aspiring Data Scientist focused on engineering intelligent, scalable systems that translate robust data into actionable strategies and optimize complex real-world problems.
              </p>
              
              <p className="text-lg">
                Currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence, I leverage my strong foundation in statistical modeling and machine learning architecture. Proficient in <strong className="text-cyan-400 font-medium">Python, SQL, Pandas, and NumPy</strong>, I rigorously explore unstructured datastores, engineering features to deploy predictive algorithms and build data-driven applications that drive efficiency.
              </p>
              
              <p className="text-lg">
                My core expertise lies in pattern recognition, deep analytical reasoning, and developing predictive models that transform raw datasets into meaningful, high-level business insights. Beyond deploying robust algorithms, I actively hone my leadership and communication skills as a <strong className="text-cyan-400 font-medium">Microsoft Learn Student Ambassador</strong> and <strong className="text-cyan-400 font-medium">GeeksforGeeks Campus Mantri</strong>. I continuously experiment with state-of-the-art ML workflows, aiming to deliver impactful data science solutions at an enterprise scale.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
               <div className="glass-card p-6 rounded-2xl border-t border-t-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full flex items-center justify-center -mr-4 -mt-4 transition-transform group-hover:scale-110">
                    <Award className="text-purple-400 w-6 h-6 ml-2 mt-2" />
                  </div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2">Pre-University Education</h4>
                  <p className="text-lg font-medium text-slate-200">Intermediate (MPC)</p>
                  <p className="text-sm text-slate-400">Viswasai Junior College &bull; 92%</p>
               </div>
               
               <div className="glass-card p-6 rounded-2xl border-t border-t-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full flex items-center justify-center -mr-4 -mt-4 transition-transform group-hover:scale-110">
                    <Award className="text-blue-400 w-6 h-6 ml-2 mt-2" />
                  </div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2">Secondary Education</h4>
                  <p className="text-lg font-medium text-slate-200">SSC (10th Grade)</p>
                  <p className="text-sm text-slate-400">Kendriya Vidyalaya &bull; 91%</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
