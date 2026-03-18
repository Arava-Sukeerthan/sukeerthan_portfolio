import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, PlayCircle, BarChart, Server } from 'lucide-react';

const projectsData = [
  {
    title: 'Text Summarizer (NLP System)',
    category: 'Natural Language Processing',
    icon: <Server className="text-purple-400 w-6 h-6" />,
    problem: 'Information overload in unstructured text data required automated extraction of key contextual insights.',
    solution: 'Engineered a deep neural network pipeline utilizing state-of-the-art NLP transformers to generate concise, meaning-preserving summaries.',
    impact: 'Accelerated document review time by 70% and improved abstractive summary coherence.',
    tech: ['Python', 'Transformers', 'Hugging Face', 'NLTK', 'Flask'],
    futureScope: 'Integrating domain-specific fine-tuning for legal and medical documentation.',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Zomato Data Analysis',
    category: 'Exploratory Data Analysis',
    icon: <Database className="text-cyan-400 w-6 h-6" />,
    problem: 'Opaque pricing and rating distributions hindered strategic decisions for new restaurant market entry.',
    solution: 'Executed rigorous EDA on massive localized datasets to uncover spatial distribution patterns, cost correlations, and review sentiment metrics.',
    impact: 'Identified 3 underserved location clusters and optimized price-to-rating ratios for maximizing customer acquisition.',
    tech: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    futureScope: 'Deploying predictive machine learning models to forecast restaurant success probability.',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    title: 'Data Jobs Dashboard',
    category: 'Data Visualization',
    icon: <BarChart className="text-emerald-400 w-6 h-6" />,
    problem: 'Siloed job market data made it difficult to track emerging salary trends and skill demands in the Tech sector.',
    solution: 'Architected an interactive data reporting dashboard with dynamic filtering to visualize geographic salaries and required tech stacks.',
    impact: 'Delivered high-level actionable insights for career optimization, isolating top 5 high-yield skills globally.',
    tech: ['Power BI', 'SQL', 'Data Modeling', 'DAX', 'Excel'],
    futureScope: 'Connecting real-time API feeds from LinkedIn and Glassdoor for live market analytics.',
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    title: 'E-commerce Architecture',
    category: 'Full-Stack & Database',
    icon: <PlayCircle className="text-pink-400 w-6 h-6" />,
    problem: 'Legacy e-commerce backends struggled with high-latency queries during peak traffic loads.',
    solution: 'Designed a highly scalable database schema and operationalized robust RESTful APIs for inventory and user management.',
    impact: 'Optimized database query response times by 40% and established a resilient architecture for concurrent transactions.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    futureScope: 'Implementing an AI-driven recommendation engine using collaborative filtering.',
    gradient: 'from-pink-600 to-rose-600'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card hover:bg-[#0a0a1a]/80 group relative overflow-hidden rounded-3xl border-t border-t-white/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
    >
      {/* Decorative gradient blob */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full translate-x-10 -translate-y-10`}></div>
      
      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
            {project.icon}
          </div>
          <div className="flex gap-3">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <div className="mb-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{project.category}</span>
          <h3 className="text-2xl font-display font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        </div>

        <div className="flex-grow space-y-4 mt-6 text-sm">
          <div>
            <span className="text-cyan-500 font-semibold mb-1 block flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Problem</span>
            <p className="text-slate-400 font-light leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-purple-400 font-semibold mb-1 block flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Solution</span>
            <p className="text-slate-300 font-light leading-relaxed">{project.solution}</p>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/5">
            <span className="text-emerald-400 font-semibold mb-1 block flex items-center gap-2 text-xs uppercase tracking-wider"><BarChart size={12} /> Impact</span>
            <p className="text-slate-200 font-medium leading-relaxed text-[13px]">{project.impact}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span key={i} className="px-2 py-1 bg-slate-800/80 border border-slate-700 rounded text-xs text-slate-300 font-mono">
                {t}
              </span>
            ))}
          </div>
          <div className="text-xs text-slate-500 italic mt-4 flex items-start gap-2">
            <span className="text-pink-400 font-bold not-italic">🔮</span> 
            <span className="group-hover:text-slate-400 transition-colors">Future Scope: {project.futureScope}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 w-full bg-[#030014]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex md:justify-between md:items-end"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-200 mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
              Featured Projects
            </h2>
            <p className="text-cyan-400 font-medium tracking-wide font-display max-w-xl">
              DATA-DRIVEN SOLUTIONS & ML ARCHITECTURE
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors pb-1 group font-medium text-sm">
            View GitHub Archive 
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
