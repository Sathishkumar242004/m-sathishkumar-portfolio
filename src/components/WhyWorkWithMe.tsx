import { motion } from 'motion/react';
import { Zap, Sparkles, Target, Brain } from 'lucide-react';
import { whyWorkWithMeData } from '../portfolioData';

const iconMap: Record<string, any> = {
  Zap: Zap,
  Sparkles: Sparkles,
  Target: Target,
  Brain: Brain
};

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-24 relative bg-dark-bg/95 border-t border-neutral-900/60 overflow-hidden">
      {/* Absolute floating lights */}
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-neon-pink/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4" id="why-me-section-header">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            WHY WORK WITH ME
          </h2>
          <div className="h-1 w-20 bg-neon-pink rounded mx-auto"></div>
          <p className="text-neutral-400 text-sm max-w-lg font-sans leading-relaxed">
            Discover the advantages of working with a No-Code & AI Builder focused on creating modern, visually engaging, and business-ready digital experiences.
          </p>
        </div>

        {/* Confidence Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="why-work-with-me-grid">
          {whyWorkWithMeData.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Zap;
            return (
              <motion.div
                key={item.title}
                id={`why-card-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl glass-morphism border-neutral-800/80 hover:border-neutral-700/80 hover:shadow-xl hover:shadow-neon-pink/5 relative overflow-hidden group transition-all duration-300 bg-zinc-950/40"
              >
                {/* Decorative glow */}
                <div className="absolute right-0 top-0 w-24 h-24 bg-neon-pink/5 rounded-full blur-2xl group-hover:bg-neon-pink/10 transition-all duration-500"></div>

                {/* Horizontal flow */}
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  
                  {/* Left Column Icon plate */}
                  <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800/80 text-neon-pink group-hover:bg-neon-pink group-hover:text-white transition-all duration-300 shadow-lg flex-shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Right Column Text specifications */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-neon-pink transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Corner mark */}
                <span className="absolute bottom-4 right-6 text-[10px] font-mono text-neutral-800 font-bold group-hover:text-neon-pink/20 transition-colors">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
