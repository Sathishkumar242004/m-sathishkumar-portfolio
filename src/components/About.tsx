import { motion } from 'motion/react';
import { BookOpen, Cpu, Brain, Sparkles, Check } from 'lucide-react';
import { aboutContent } from '../portfolioData';

export default function About() {
  const getAchievementIcon = (achievement: string) => {
    if (achievement.includes('Learning')) {
      return <BookOpen className="w-5 h-5 text-neon-pink" />;
    }
    if (achievement.includes('Workflows')) {
      return <Cpu className="w-5 h-5 text-neon-pink" />;
    }
    if (achievement.includes('Solving')) {
      return <Brain className="w-5 h-5 text-neon-pink" />;
    }
    return <Sparkles className="w-5 h-5 text-neon-pink" />;
  };

  const getAchievementSub = (achievement: string) => {
    if (achievement.includes('Learning')) {
      return 'Evolving toolchains';
    }
    if (achievement.includes('Workflows')) {
      return 'Innovative workflows';
    }
    if (achievement.includes('Solving')) {
      return 'Smart design solutions';
    }
    return 'Immersive designs';
  };

  return (
    <section id="about" className="py-24 relative bg-dark-bg/95 border-t border-neutral-900/60 overflow-hidden">
      {/* Background soft glowing blur elements */}
      <div className="absolute top-1/2 -left-[10%] w-[350px] h-[350px] rounded-full bg-neon-pink/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center md:text-left max-w-3xl mb-16 space-y-3" id="about-section-header">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-20 bg-neon-pink rounded"></div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Biographical copywriting (Left Column) */}
          <div className="lg:col-span-7 space-y-6" id="about-biography">
            <span className="text-[11px] font-mono tracking-widest text-[#ff2a85] bg-[#ff007f]/5 px-3 py-1 rounded border border-[#ff007f]/10 uppercase inline-block">
              {aboutContent.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight">
              {aboutContent.title}
            </h3>
            
            <div className="space-y-4 text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
              {aboutContent.paragraphs.map((para, i) => (
                <p key={i} id={`about-para-${i}`}>
                  {para}
                </p>
              ))}
            </div>

            {/* Accent quote box */}
            <div className="border-l-2 border-neon-pink pl-6 py-2 bg-neutral-900/20 rounded-r-xl">
              <span className="text-xs font-mono text-neon-pink uppercase tracking-wider block font-bold">MY MISSION</span>
              <p className="text-neutral-200 text-sm italic font-sans mt-1">
                "Empowering businesses to grow and scale by turning creative concepts into business-ready visual realities."
              </p>
            </div>
          </div>

          {/* Achievements Container (Right Column) */}
          <div className="lg:col-span-5" id="about-achievements-container">
            <div className="space-y-4">
              {aboutContent.achievements.map((achievement, i) => (
                <motion.div
                  key={achievement}
                  id={`achievement-card-${i}`}
                  whileHover={{ x: 6 }}
                  className="p-5 rounded-2xl glass-morphism border-neutral-800/80 relative overflow-hidden group transition-all duration-300 flex items-center justify-between bg-zinc-950/40"
                >
                  {/* Decorative glowing back light */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-neon-pink/5 rounded-full blur-2xl group-hover:bg-neon-pink/10 transition-all duration-500"></div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-850 flex items-center justify-center text-neon-pink group-hover:border-neon-pink/40 group-hover:bg-neon-pink/5 transition-all">
                      {getAchievementIcon(achievement)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-wide group-hover:text-neon-pink transition-colors">
                        {achievement}
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5 block">
                        {getAchievementSub(achievement)}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-[10px] font-mono text-neutral-600 group-hover:text-neon-pink/80 transition-all">
                      0{i + 1}
                    </span>
                    <Check className="w-4 h-4 text-neon-pink/30 group-hover:text-neon-pink transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Professional Quality Verification Label */}
            <div className="mt-6 flex items-center justify-center gap-3 p-4 rounded-xl border border-dashed border-neutral-800 text-neutral-500 font-mono text-[10px] tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse"></span>
              Professional & Quality-Focused Approach
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
