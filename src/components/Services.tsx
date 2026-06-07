import { motion } from 'motion/react';
import { Monitor, Target, FolderKanban, Building2, Palette, Image, ArrowUpRight, Zap } from 'lucide-react';
import { servicesData } from '../portfolioData';

// Map icon names to lucide components
const iconMap: Record<string, any> = {
  Monitor: Monitor,
  Target: Target,
  FolderKanban: FolderKanban,
  Building2: Building2,
  Palette: Palette,
  Image: Image,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-dark-bg/90 border-t border-neutral-900/60 overflow-hidden">
      {/* Cinematic glowing background light */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4" id="services-section-header">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
              Services
            </h2>
            <div className="h-1 w-20 bg-neon-pink rounded"></div>
          </div>
          <p className="text-neutral-400 text-sm max-w-sm font-sans">
            Empowering brands with high-fidelity website development, premium logo design, and custom digital experiences built to convert.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-hub">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Zap;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl glass-morphism border-neutral-800/80 relative overflow-hidden group transition-all duration-300 neon-glow-card-hover"
              >
                {/* Spotlight Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink/0 via-neon-pink/0 to-[#ff007f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badge Indicator */}
                {service.badge && (
                  <span className="absolute top-6 right-6 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-neon-pink/10 text-neon-pink border border-neon-pink/20">
                    {service.badge}
                  </span>
                )}

                <div className="flex flex-col h-full justify-between space-y-8 relative z-10">
                  
                  {/* Top: Icon & Counter */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex items-center justify-center text-neon-pink group-hover:bg-neon-pink group-hover:text-white transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-600 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-bold text-white tracking-wide group-hover:text-neon-pink transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Link Action */}
                  <div className="pt-2 border-t border-neutral-900 flex justify-between items-center text-xs font-mono font-bold tracking-widest text-neutral-400 group-hover:text-white transition-colors duration-300">
                    <span>GET IN TOUCH</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-neon-pink transition-transform" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
