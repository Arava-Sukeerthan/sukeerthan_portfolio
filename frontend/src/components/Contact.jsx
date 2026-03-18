import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Network error. Is the backend server running?');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 w-full min-h-screen flex items-center bg-[#030014] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-200 mb-4 inline-flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
            Contact Me
            <span className="w-12 h-[2px] bg-cyan-500 rounded-full"></span>
          </h2>
          <p className="text-slate-400 font-light tracking-wide max-w-xl mx-auto mt-4">
            Feel free to reach out for opportunities or just to say hi. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-[#0a0a1a]/50 p-6 rounded-3xl border border-white/5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4 border border-white/5">
                <Mail className="text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">Email</h3>
              <p className="text-slate-400 font-medium text-sm">asukeertthan@gmail.com</p>
            </div>

            <div className="bg-[#0a0a1a]/50 p-6 rounded-3xl border border-white/5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4 border border-white/5">
                <MapPin className="text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">Location</h3>
              <p className="text-slate-400 font-medium text-sm">Nellore, India</p>
            </div>
            
            <div className="pt-4">
              <SocialLinks iconSize={24} className="justify-start" />
            </div>
          </motion.div>

          {/* Form Container */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: ["-1%", "1%", "-1%"] }}
              transition={{ 
                opacity: { duration: 0.6 },
                x: { duration: 0.6 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-[#0a0a1a]/50 p-8 rounded-3xl border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-shadow duration-500 will-change-transform"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#030014] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-light shadow-inner"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-[#030014] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-light shadow-inner"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea
                    required
                    rows="4"
                    className="w-full bg-[#030014] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-light resize-none shadow-inner"
                    placeholder="Describe your project or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-3 text-emerald-400 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20"
                      >
                        <CheckCircle size={20} /> Message sent successfully!
                      </motion.div>
                    ) : status === 'error' ? (
                      <motion.div 
                        key="error"
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-3 text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20"
                      >
                        <AlertCircle className="min-w-5 h-5" /> {errorMessage}
                      </motion.div>
                    ) : (
                      <motion.button
                        key="submit"
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                      >
                        {status === 'loading' ? (
                          <span className="flex items-center gap-3">
                            Sending <span className="animate-spin w-4 h-4 border-2 border-white/20 border-t-white rounded-full"></span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        )}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
