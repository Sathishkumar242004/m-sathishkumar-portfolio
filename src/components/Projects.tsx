import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FolderKanban, Play, X, Compass, Activity, ServerCrash } from 'lucide-react';
import { projectsData } from '../portfolioData';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-dark-bg/90 border-t border-neutral-900/60 overflow-hidden">
      {/* Background radial glowing ball */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4" id="projects-section-header">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-neon-pink rounded"></div>
          </div>
          <p className="text-neutral-400 text-sm max-w-sm font-sans">
            A curated showcase of professional website designs, responsive landing pages, and premium creative concepts.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid-container">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl overflow-hidden glass-morphism border-neutral-800/80 hover:border-neon-pink/40 bg-zinc-950/80 transition-all duration-500 flex flex-col relative"
            >
              {/* Card visual banner wrapper */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                {/* Visual shadow cast */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
                
                {/* Image plate with hover zoom effect */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Corner Category Tag */}
                <span className="absolute top-4 left-4 z-20 text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-neon-pink border border-neutral-800">
                  {project.category}
                </span>

                {/* Overlaid Action Button standard banner */}
                <div className="absolute inset-0 z-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-3 rounded-xl bg-neon-pink text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-neon-pink/30 hover:scale-105 active:scale-95 transition-all"
                  >
                    Explore Project <Play className="w-3.5 h-3.5 fill-white" />
                  </button>
                </div>
              </div>

              {/* Card Bottom Panel details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-pink transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Technology Pill Hub */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-2.5 py-1 rounded bg-neutral-900/60 text-neutral-400 border border-neutral-850"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider and Action link footer */}
                  <div className="pt-4 border-t border-neutral-900/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono font-bold tracking-widest text-neutral-400 group-hover:text-neon-pink flex items-center gap-1.5 transition-colors"
                    >
                      <FolderKanban className="w-4 h-4" /> EXPLORE VIEW
                    </button>
                    
                    <div className="flex items-center space-x-3">
                      <a
                        href={project.githubUrl}
                        className="p-2 rounded-xl bg-neutral-900/60 text-neutral-400 hover:text-white border border-neutral-850 transition-colors"
                        title="View Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 rounded-xl bg-neutral-900/60 text-neon-pink hover:text-white border border-neutral-850 transition-colors"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* High-Fidelity Specs Dialog Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              id="project-details-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl bg-zinc-950 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
                id="project-details-dialog-card"
              >
                {/* Decorative Pink Glow corner highlight */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-neon-pink/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Close Button Trigger */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-neutral-400 hover:text-neon-pink border border-neutral-800 transition-colors"
                  aria-label="Close dialog"
                  id="project-dialog-close"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Visual Image Banner */}
                <div className="relative aspect-video w-full bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="text-[10px] font-mono uppercase bg-neon-pink px-2.5 py-1 text-white rounded font-bold tracking-widest text-right">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Technical Breakdowns */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white tracking-wide" id="project-dialog-title">
                      {selectedProject.title}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed font-sans" id="project-dialog-description">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Project Specifications */}
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-850/80 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="space-y-1">
                      <div className="text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 text-neon-pink" /> DEVELOPMENT STYLE
                      </div>
                      <div className="text-neutral-200">No-Code & Visual Platforms</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 text-neon-pink" /> USER EXPERIENCE
                      </div>
                      <div className="text-neutral-200">Responsive & Engaging</div>
                    </div>
                  </div>

                  {/* Project Highlights / Tags */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                      Project Highlights
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono font-medium px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-6 border-t border-neutral-900 flex flex-wrap gap-3">
                    <a
                      href={selectedProject.liveUrl}
                      className="px-5 py-3 rounded-xl bg-neon-pink hover:bg-neon-pink-hover text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-neon-pink/15 transition-all"
                      id="project-dialog-live-link"
                    >
                      View Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                    
                    <a
                      href={selectedProject.githubUrl}
                      className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-200 font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 border border-neutral-800 transition-all"
                      id="project-dialog-source-link"
                    >
                      Inquire Details <Github className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
