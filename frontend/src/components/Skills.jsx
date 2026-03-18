import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, Sphere, Line, Preload } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const skillsData = [
  { id: 'python', name: 'Python', category: 'Programming', level: 'Expert', color: '#06b6d4', x: -3, y: 1.5, z: 0 },
  { id: 'cpp', name: 'C++', category: 'Programming', level: 'Advanced', color: '#06b6d4', x: -2.5, y: -2, z: 1 },
  { id: 'sql', name: 'SQL', category: 'Data Analysis', level: 'Expert', color: '#a855f7', x: 0, y: 2, z: -1 },
  { id: 'pandas', name: 'Pandas', category: 'Data Analysis', level: 'Advanced', color: '#a855f7', x: 2, y: 0, z: 1.5 },
  { id: 'numpy', name: 'NumPy', category: 'Data Analysis', level: 'Advanced', color: '#a855f7', x: 1, y: -2.5, z: 0 },
  { id: 'powerbi', name: 'Power BI', category: 'Data Visualization', level: 'Advanced', color: '#3b82f6', x: 3.5, y: 2, z: -0.5 },
];

const SkillNode = ({ skill, activeCategory, hoveredSkill, setHoveredSkill }) => {
  const meshRef = useRef();
  const isHovered = hoveredSkill === skill.id;
  const isCategoryActive = activeCategory === 'All' || activeCategory === skill.category;

  useFrame((state) => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <Float
      speed={2} 
      rotationIntensity={1} 
      floatIntensity={2} 
      position={[skill.x, skill.y, skill.z]}
    >
      <group
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHoveredSkill(skill.id); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHoveredSkill(null); document.body.style.cursor = 'auto'; }}
      >
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial 
            color={isCategoryActive ? skill.color : '#334155'} 
            emissive={isCategoryActive ? skill.color : '#0f172a'}
            emissiveIntensity={isHovered ? 1.5 : (isCategoryActive ? 0.5 : 0)}
            wireframe={true}
            transparent
            opacity={isCategoryActive ? 0.9 : 0.2}
          />
        </Sphere>
        
        {/* Inner solid core */}
        <Sphere args={[0.2, 16, 16]}>
          <meshBasicMaterial 
            color="#ffffff" 
            transparent
            opacity={isCategoryActive ? (isHovered ? 1 : 0.5) : 0.1}
          />
        </Sphere>

        <Html distanceFactor={15} center zIndexRange={[100, 0]}>
          <div className={`transition-all duration-300 ${isCategoryActive ? 'opacity-100' : 'opacity-20'} ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <div className={`
              px-4 py-2 rounded-xl backdrop-blur-md border 
              ${isHovered ? 'bg-[#030014]/90 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-50' : 'bg-[#030014]/50 border-white/10'}
            `}>
              <h3 className={`font-display font-bold whitespace-nowrap ${isHovered ? 'text-white text-lg' : 'text-slate-300 text-sm'}`}>
                {skill.name}
              </h3>
              {isHovered && (
                <div className="mt-1">
                  <div className="text-xs text-cyan-400 font-medium tracking-wider uppercase">{skill.level}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{skill.category}</div>
                </div>
              )}
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
};

const NeuralConnections = ({ skills, hoveredSkill, activeCategory }) => {
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < skills.length; i++) {
      for (let j = i + 1; j < skills.length; j++) {
        // Connect nodes based on category or distance, here we just connect all for a neural web feel
        lines.push({ start: skills[i], end: skills[j] });
      }
    }
    return lines;
  }, [skills]);

  return (
    <group>
      {connections.map((c, i) => {
        const isStartActive = activeCategory === 'All' || activeCategory === c.start.category;
        const isEndActive = activeCategory === 'All' || activeCategory === c.end.category;
        const isActiveContext = isStartActive && isEndActive;
        const isRelatedToHover = hoveredSkill === c.start.id || hoveredSkill === c.end.id;
        
        const opacity = !isActiveContext ? 0.05 : (isRelatedToHover ? 0.6 : 0.15);
        const color = isRelatedToHover ? '#06b6d4' : '#475569';

        return (
          <Line
            key={i}
            points={[
              new THREE.Vector3(c.start.x, c.start.y, c.start.z),
              new THREE.Vector3(c.end.x, c.end.y, c.end.z)
            ]}
            color={color}
            lineWidth={isRelatedToHover ? 2 : 1}
            transparent
            opacity={opacity}
          />
        );
      })}
    </group>
  );
};

const ThreeScene = ({ activeCategory, hoveredSkill, setHoveredSkill }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
      
      <NeuralConnections 
        skills={skillsData} 
        hoveredSkill={hoveredSkill} 
        activeCategory={activeCategory} 
      />
      
      {skillsData.map((skill) => (
        <SkillNode 
          key={skill.id} 
          skill={skill} 
          activeCategory={activeCategory}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
      ))}
      <Preload all />
    </Canvas>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const categories = ['All', 'Programming', 'Data Analysis', 'Data Visualization'];

  return (
    <section id="skills" className="py-24 relative z-10 w-full min-h-screen flex flex-col items-center justify-center border-t border-white/5 bg-gradient-to-b from-transparent to-[#030014]/80">
      <div className="container mx-auto px-6 max-w-6xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-200 mb-4 inline-flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
            Technical Ecosystem
            <span className="w-12 h-[2px] bg-purple-500 rounded-full"></span>
          </h2>
          <p className="text-slate-400 font-light tracking-wide max-w-2xl mx-auto">Interactive neural mapping of my data science toolkit.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md
                ${activeCategory === cat 
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                  : 'bg-[#030014]/50 border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full h-[60vh] max-h-[600px] relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <ThreeScene 
          activeCategory={activeCategory} 
          hoveredSkill={hoveredSkill} 
          setHoveredSkill={setHoveredSkill}
        />
      </motion.div>
    </section>
  );
};

export default Skills;
