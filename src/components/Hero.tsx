import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ArrowDown, FolderGit2, CalendarRange } from 'lucide-react';
import { portfolioOwner } from '../portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-dark-bg"
    >
      {/* Cinematic Glowing Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-neon-pink/15 blur-[120px] mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-[250px] h-[250px] sm:w-[450px] sm:h-[440px] rounded-full bg-purple-900/10 blur-[100px] mix-blend-screen animate-pulse-slow [animation-delay:2s]"></div>

      {/* Cybernetic Tech Grid and Lights Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Diagonal beam */}
      <div className="absolute -top-[40%] left-[20%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-neon-pink/20 to-transparent rotate-45 transform pointer-events-none"></div>

      {/* Container holding layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Details Panel */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Neon Pink Accent Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-morphism border-neutral-800/80 shadow-md shadow-black/40"
            id="hero-badge-tag"
          >
            <span className="w-2 h-2 rounded-full bg-neon-pink animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-neon-pink absolute"></span>
            <span className="text-xs font-mono font-semibold tracking-widest text-neutral-300 uppercase pl-1.5">
              Available for Freelance & Contracts
            </span>
          </motion.div>

          {/* Core Name */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white uppercase"
              id="hero-owner-name"
            >
              {portfolioOwner.name}
            </motion.h1>

            {/* Accent Role Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-wide"
              id="hero-owner-title"
            >
              <span className="bg-gradient-to-r from-neon-pink via-[#ff2a85] to-purple-500 bg-clip-text text-transparent neon-glow-text">
                {portfolioOwner.title}
              </span>
            </motion.h2>
          </div>

          {/* Tagline Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-sans"
            id="hero-owner-tagline"
          >
            {portfolioOwner.tagline}
          </motion.p>

          {/* Interactive Button CTA Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4 w-full"
            id="hero-cta-group"
          >
            {/* CTA 1: View Projects */}
            <a
              href="#projects"
              id="hero-btn-projects"
              className="px-6 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest text-white relative overflow-hidden group transition-all duration-300 shadow-lg shadow-neon-pink/15 border border-neon-pink"
            >
              <span className="absolute inset-0 bg-neon-pink opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                View Projects <FolderGit2 className="w-4 h-4" />
              </span>
            </a>

            {/* CTA 2: Contact Me */}
            <a
              href="#contact"
              id="hero-btn-contact"
              className="px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-white glass-morphism border-neutral-700/50 hover:border-neon-pink/50 flex items-center justify-center gap-2 transition-all duration-300"
            >
              Contact Me <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* CTA 3: Hire Me */}
            <a
              href="#contact"
              id="hero-btn-hire"
              className="px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-neutral-200 flex items-center justify-center gap-1.5 transition-all duration-300"
            >
              Hire Me <Sparkles className="w-3.5 h-3.5 text-neon-pink" />
            </a>
          </motion.div>
        </div>

        {/* Feature Visual Cinematic Profile Card (Right Side) */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-sm rounded-3xl overflow-hidden glass-morphism border-neutral-800 p-3 neon-glow-card shadow-2xl shadow-neon-pink/5"
          >
            {/* Geometric Ambient Ring */}
            <div className="absolute inset-0 rounded-3xl border border-neon-pink/20 scale-[1.02] animate-pulse pointer-events-none"></div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-950/85 flex flex-col p-6 space-y-5">
              
              {/* Card Header Profile Details */}
              <div className="space-y-1 pb-4 border-b border-neutral-900">
                <span className="text-[9px] font-mono text-neon-pink uppercase tracking-widest block">
                  // PROFESSIONAL PROFILE
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight uppercase">
                  M SATHISHKUMAR
                </h3>
                <h4 className="text-xs sm:text-sm font-sans font-bold text-neon-pink tracking-wide">
                  No-Code & AI Builder
                </h4>
              </div>

              {/* Tagline / Mission */}
              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                Building cinematic websites, stunning visuals, and business-ready digital experiences.
              </p>

              {/* Services List */}
              <div className="space-y-2.5">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">
                  Core Services
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-sans">
                  {[
                    'Website Design',
                    'Landing Page Design',
                    'Portfolio Websites',
                    'Business Websites',
                    'Logo Design',
                    'AI Image Generation'
                  ].map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-pink"></span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Section */}
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">
                    CURRENT STATE
                  </span>
                  <span className="text-xs font-semibold text-neutral-200">
                    Status
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    Available for New Projects
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative Slide-down Scroll Tip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500 hover:text-neon-pink transition-colors cursor-pointer pointer-events-none">
        <span className="text-[9px] font-mono uppercase tracking-widest">DISCOVER CREATION</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
