import { motion } from 'motion/react';
import { Cpu, Palette, Layers, Code2, Sparkles, Check } from 'lucide-react';

interface CategoryGroup {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  skills: string[];
}

const categoriesData: CategoryGroup[] = [
  {
    id: 'cat-ai',
    title: 'AI Development',
    iconName: 'Cpu',
    tagline: 'Leveraging cutting-edge AI tools to design custom-tailored layouts and visual components.',
    skills: ['ChatGPT', 'Claude', 'Google AI Studio', 'Codex']
  },
  {
    id: 'cat-design',
    title: 'Design & Creative',
    iconName: 'Palette',
    tagline: 'Bespoke modern branding and high-fidelity asset generators.',
    skills: [
      'Canva',
      'Midjourney',
      'AI Image Generation',
      'Logo Design',
      'Visual Content Creation'
    ]
  },
  {
    id: 'cat-web',
    title: 'Website Building',
    iconName: 'Layers',
    tagline: 'Pixel-perfect visual architectures built for maximum viewer capture.',
    skills: [
      'Framer',
      'WordPress',
      'No-Code Website Development',
      'Landing Page Development'
    ]
  },
  {
    id: 'cat-tools',
    title: 'Development Tools',
    iconName: 'Code2',
    tagline: 'Modern code editor environments and collaborative version control platforms.',
    skills: ['Visual Studio Code', 'GitHub']
  },
  {
    id: 'cat-spec',
    title: 'Specialization',
    iconName: 'Sparkles',
    tagline: 'Creative digital approaches focused on high-converting websites and cinematic visuals.',
    skills: [
      'AI-Assisted Development',
      'Business Website Creation',
      'Portfolio Website Development',
      'Cinematic Website Experiences'
    ]
  }
];

const iconMap: Record<string, any> = {
  Cpu,
  Palette,
  Layers,
  Code2,
  Sparkles
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-dark-bg/95 border-t border-neutral-900/60 overflow-hidden">
      {/* Background neon glow spheres */}
      <div className="absolute top-1/3 -left-[10%] w-[350px] h-[350px] bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-4" id="skills-section-header">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Skills & Tools
          </h2>
          <div className="h-1 w-20 bg-neon-pink rounded mx-auto"></div>
          <p className="text-neutral-400 text-sm max-w-md font-sans leading-relaxed">
            A comprehensive overview of my creative toolchains, web design platforms, and visual development stack.
          </p>
        </div>

        {/* Premium Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-categories-grid">
          {categoriesData.map((category, index) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            
            return (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl glass-morphism border-neutral-800/85 hover:border-neon-pink/40 bg-zinc-950/40 relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual back glow on card hover */}
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-neon-pink/5 rounded-full blur-3xl group-hover:bg-neon-pink/10 transition-colors duration-500"></div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-950/90 border border-neutral-850 group-hover:bg-neon-pink group-hover:text-white group-hover:border-transparent transition-all shadow-md flex items-center justify-center text-neon-pink">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-white tracking-wide group-hover:text-neon-pink transition-colors duration-200">
                          {category.title}
                        </h3>
                        <span className="text-[9px] font-mono text-neutral-550 uppercase tracking-widest">
                          CATEGORY_0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tagline Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8 font-sans">
                    {category.tagline}
                  </p>
                </div>

                {/* Skills Bullet/Tag List Underneath */}
                <div className="space-y-3.5">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-b border-neutral-900 pb-2 flex justify-between">
                    <span>Active Skills</span>
                    <span className="text-neon-pink">{category.skills.length} Tools</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        id={`skill-${category.id}-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-950 border border-neutral-850 hover:border-neon-pink/30 hover:bg-neutral-900/40 transition-all duration-300 text-xs text-neutral-300 hover:text-white"
                      >
                        <Check className="w-3.5 h-3.5 text-neon-pink flex-shrink-0" />
                        <span className="font-sans font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-pink/0 to-transparent group-hover:via-neon-pink/50 transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Trust Flag footer */}
        <div className="mt-20 text-center">
          <span className="text-[10px] font-mono text-neutral-500 hover:text-neutral-400 transition-colors uppercase tracking-widest bg-neutral-950/40 px-5 py-2.5 rounded-full border border-neutral-900 inline-block pointer-events-none">
            PROFESSIONAL & CREATIVE PORTFOLIO VERIFIED
          </span>
        </div>

      </div>
    </section>
  );
}
