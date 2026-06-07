import React from 'react';
import { Mail, MessageCircle, Github, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-black/95 text-neutral-400 py-16 border-t border-neutral-900 overflow-hidden relative">
      {/* Accent corner light */}
      <div className="absolute bottom-0 right-[15%] w-[150px] h-[150px] bg-neon-pink/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-neutral-900" id="footer-main-layout">
          
          {/* Left Column: Brand Info */}
          <div className="space-y-4" id="footer-brand-column">
            <div className="flex items-center space-x-3" id="footer-brand-title-wrap">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-pink to-purple-700 flex items-center justify-center shadow shadow-neon-pink/10">
                <Sparkles className="w-4 h-4 text-white hover:animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white tracking-widest uppercase">
                  M SATHISHKUMAR
                </h3>
                <p className="text-xs text-neon-pink font-mono tracking-wider font-semibold uppercase">
                  No-Code & AI Builder
                </p>
              </div>
            </div>
            
            <p className="text-neutral-400 text-sm max-w-sm font-sans leading-relaxed">
              Creating cinematic websites, stunning visuals, and business-ready digital experiences.
            </p>
          </div>

          {/* Right Column: Key Contacts */}
          <div className="flex flex-col md:items-end justify-start space-y-4 font-mono text-xs" id="footer-contact-column">
            <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-bold md:text-right block">
              Direct Inquiries
            </span>
            <div className="space-y-2.5 text-neutral-300 md:text-right" id="footer-contact-links">
              {/* Email */}
              <div className="flex items-center gap-2 md:justify-end group">
                <Mail className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neon-pink transition-colors" />
                <span className="text-neutral-500">Email:</span>
                <a
                  href="mailto:sathishmahendiran12@gmail.com"
                  className="font-semibold text-white hover:text-neon-pink transition-colors"
                >
                  sathishmahendiran12@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2 md:justify-end group">
                <MessageCircle className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neon-pink transition-colors" />
                <span className="text-neutral-500">WhatsApp:</span>
                <a
                  href="https://wa.me/919363392225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-neon-pink transition-colors"
                >
                  +91 93633 92225
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-2 md:justify-end group">
                <Github className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neon-pink transition-colors" />
                <span className="text-neutral-500">GitHub:</span>
                <a
                  href="https://github.com/Sathishkumar242004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-neon-pink transition-colors"
                >
                  Sathishkumar242004
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 font-mono text-neutral-600" id="footer-bottom-info">
          <div className="text-center sm:text-left">
            <span>&copy; 2026 M SATHISHKUMAR. All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
