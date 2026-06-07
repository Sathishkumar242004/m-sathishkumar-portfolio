import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Mail } from 'lucide-react';
import { portfolioOwner } from '../portfolioData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'services', 'skills', 'projects', 'why-work-with-me', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Skills & Tools', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Why Me', href: '#why-work-with-me', id: 'why-work-with-me' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-navbar py-4 shadow-xl shadow-black/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Branding */}
        <a href="#hero" id="navbar-logo" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-pink to-purple-600 flex items-center justify-center shadow-lg shadow-neon-pink/20 transition-transform duration-300 group-hover:scale-110">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-wider bg-gradient-to-r from-white via-neutral-200 to-neon-pink bg-clip-text text-transparent group-hover:text-neon-pink transition-colors duration-300">
              {portfolioOwner.name}
            </span>
            <div className="text-[10px] text-neutral-400 font-mono tracking-widest mt-[-2px]">
              NO-CODE & AI BUILDER
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1" id="nav-desktop-links">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              id={`nav-link-${item.id}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-neon-pink bg-neutral-900/50 shadow-inner'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/30'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#contact"
            id="nav-cta-hire"
            className="relative px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-pink to-purple-700 opacity-90 transition-all duration-300 group-hover:opacity-100"></span>
            <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-1.5 text-white font-mono">
              Hire Me <Mail className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-neutral-300 hover:text-neon-pink p-2 rounded-lg transition-colors"
          aria-label="Toggle navigation menu"
          id="mobile-nav-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden fixed top-[73px] left-0 w-full h-screen bg-black/95 backdrop-blur-3xl z-40 px-6 py-8 border-t border-neutral-900/50 flex flex-col justify-between"
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                id={`nav-mobile-link-${item.id}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`py-3 px-4 rounded-xl text-base font-semibold tracking-wide flex justify-between items-center transition-all ${
                  activeSection === item.id
                    ? 'text-neon-pink bg-neutral-950 border-l-2 border-neon-pink'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-neutral-600 font-mono">
                  [ 0{menuItems.indexOf(item) + 1} ]
                </span>
              </a>
            ))}
          </div>

          <div className="pb-24">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon-pink to-purple-600 py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-neon-pink/20"
              id="mobile-nav-cta"
            >
              Get In Touch <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
