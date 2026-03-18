import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import NeuralBackground from './components/NeuralBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Futuristic loading screen
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full min-h-screen bg-background text-slate-200 selection:bg-cyan-500/30 font-['Inter'] relative overflow-x-hidden">
      {loading ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-t-2 border-cyan-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-r-2 border-purple-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
            <div className="absolute inset-4 border-b-2 border-blue-500 rounded-full animate-[spin_2s_linear_infinite]"></div>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-display tracking-widest text-cyan-400">
              INIT
            </div>
          </div>
          <div className="text-sm font-display tracking-[0.3em] uppercase text-slate-400 animate-pulse">
            System Initializing
          </div>
          <div className="w-48 h-1 mt-6 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-[loading_2.5s_ease-in-out_forwards]"></div>
          </div>
        </div>
      ) : (
        <>
          <CustomCursor />
          <NeuralBackground />
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
            <footer className="py-8 text-center text-slate-500 border-t border-white/5 backdrop-blur-sm">
              <p className="font-display tracking-wider text-sm">&copy; {new Date().getFullYear()} Sukeerthan. All rights reserved.</p>
            </footer>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
