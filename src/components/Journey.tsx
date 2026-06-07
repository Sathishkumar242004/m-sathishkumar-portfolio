import { motion } from 'motion/react';
import { Cpu, Layers, Layout, Award, Sparkles, GraduationCap } from 'lucide-react';

const learningAreas = [
  {
    title: 'AI Tools',
    description: 'Leveraging cutting-edge generative tools to design custom assets, conceptual art, and innovative visual components.',
    icon: Cpu,
  },
  {
    title: 'No-Code Platforms',
    description: 'Building fully-faced, pixel-perfect websites that are fast, flexible, and exceptionally easy to maintain.',
    icon: Layers,
  },
  {
    title: 'Website Design',
    description: 'Structuring cinematic and modern digital pages with a precise focus on clean layouts and responsive user behaviors.',
    icon: Layout,
  },
  {
    title: 'Branding',
    description: 'Creating high-fidelity logos, cohesive visual identities, and creative branding assets that stand out in crowded markets.',
    icon: Award,
  },
  {
    title: 'Digital Experiences',
    description: 'Combining visual aesthetics and modern interaction patterns to craft immersive experiences designed to engage and convert.',
    icon: Sparkles,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-dark-bg/90 border-t border-neutral-900/60 overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/4 right-[2%] w-[350px] h-[350px] bg-neon-pink/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4" id="journey-section-header">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Journey & Growth
          </h2>
          <div className="h-1 w-20 bg-neon-pink rounded mx-auto"></div>
          <p className="text-neon-pink text-xs font-mono uppercase tracking-widest font-bold mt-1">
            Continuous Learning
          </p>
          <p className="text-neutral-400 text-sm max-w-md font-sans">
            I am constantly exploring and improving my skills in multiple creative and technical domains.
          </p>
        </div>

        {/* 5-Card Balanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;
            
            // Balanced responsive spans
            const colSpanClass = index < 3
              ? "col-span-1 lg:col-span-2"
              : index === 3
                ? "col-span-1 md:col-span-1 lg:col-span-3"
                : "col-span-1 md:col-span-2 lg:col-span-3";

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${colSpanClass} p-8 rounded-3xl glass-morphism border-neutral-800/80 hover:border-neutral-700/80 hover:shadow-xl hover:shadow-neon-pink/5 relative overflow-hidden group transition-all duration-300 bg-zinc-950/40`}
              >
                {/* Subtle glow accent */}
                <div className="absolute right-0 top-0 w-24 h-24 bg-neon-pink/5 rounded-full blur-2xl group-hover:bg-neon-pink/10 transition-all duration-500"></div>

                <div className="flex flex-col h-full justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Icon container */}
                    <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800/80 text-neon-pink group-hover:bg-neon-pink group-hover:text-white transition-all duration-300 shadow-lg inline-block">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-neon-pink transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner checkmark or label */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-600 group-hover:text-neon-pink/40 transition-colors uppercase tracking-widest pt-4 border-t border-neutral-900">
                    <span>EXPLORING & IMPROVING</span>
                    <span>0{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Goal Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto p-8 rounded-3xl bg-neutral-950/40 border border-neutral-900 border-dashed flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          id="journey-goal-footer"
        >
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <div className="p-3 rounded-full bg-neon-pink/10 text-neon-pink">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-mono font-bold text-white tracking-widest uppercase">
                My Objective
              </h4>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-xl">
                My goal is to build smarter, more creative, and more effective digital solutions through continuous learning and experimentation.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-neon-pink hover:bg-neon-pink-hover text-white font-semibold text-xs uppercase tracking-widest font-mono transition-colors duration-300 shadow-lg shadow-neon-pink/20"
          >
            Work With Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}
