import { Project, Service, Skill } from './types';
import hawkinsImage from '../assets/hawkins.jpg.png';
import portfolioImage from '../assets/portfolio.jpg.png';
import landingImage from '../assets/landing.jpg.png';
import logosImage from '../assets/logos.jpg.png';
import aiShowcaseImage from '../assets/ai-showcase.jpg.png';
import atmosphereWeatherImage from '../assets/atmosphere-weather.png';

export const portfolioOwner = {
  name: 'M SATHISHKUMAR',
  title: 'No-Code & AI Builder',
  tagline: 'Creating cinematic websites, stunning visuals, and business-ready digital experiences.',
  email: 'sathishmahendiran12@gmail.com',
  socials: {
    github: 'https://github.com/Sathishkumar242004',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    emailLink: 'mailto:sathishmahendiran12@gmail.com',
  }
};

export const aboutContent = {
  subtitle: 'INNOVATION & DESIGN VELOCITY',
  title: 'Creating Cinematic Websites, Stunning Visuals & Modern Digital Experiences',
  paragraphs: [
    "I'm a No-Code & AI Builder passionate about creating cinematic websites, stunning visuals, and modern digital experiences.",
    "By combining AI-powered workflows with modern design tools, I transform ideas into professional websites, landing pages, logos, and visual content faster than traditional methods.",
    "My focus is on building experiences that are visually engaging, business-ready, and designed to leave a lasting impression."
  ],
  achievements: [
    'Continuous Learning',
    'AI-Powered Workflows',
    'Creative Problem Solving',
    'Modern Digital Experiences'
  ]
};

export const servicesData: Service[] = [
  {
    id: 'srv-1',
    title: 'Website Design',
    description: 'Modern and responsive websites designed to create a strong digital presence and deliver a professional user experience.',
    iconName: 'Monitor',
    badge: 'Core'
  },
  {
    id: 'srv-2',
    title: 'Landing Page Design',
    description: 'Conversion-focused landing pages built to showcase services, products, and generate leads effectively.',
    iconName: 'Target',
    badge: 'Popular'
  },
  {
    id: 'srv-3',
    title: 'Portfolio Websites',
    description: 'Personal portfolio websites crafted to highlight skills, projects, achievements, and professional identity.',
    iconName: 'FolderKanban',
    badge: 'Premium'
  },
  {
    id: 'srv-4',
    title: 'Business Websites',
    description: 'Professional business websites designed to establish credibility and help businesses grow online.',
    iconName: 'Building2',
    badge: 'Enterprise'
  },
  {
    id: 'srv-5',
    title: 'Logo Design',
    description: 'Modern logo concepts created using design principles and AI-assisted creative workflows.',
    iconName: 'Palette'
  },
  {
    id: 'srv-6',
    title: 'AI Image Generation',
    description: 'High-quality AI-generated visuals, promotional graphics, cinematic artwork, and creative content.',
    iconName: 'Image',
    badge: 'AI Infused'
  }
];

export const skillsData: Skill[] = [
  // AI Development
  { name: 'ChatGPT', category: 'AI Development' },
  { name: 'Claude', category: 'AI Development' },
  { name: 'Google AI Studio', category: 'AI Development' },
  { name: 'Codex', category: 'AI Development' },

  // Design & Creative
  { name: 'Canva', category: 'Design & Creative' },
  { name: 'Midjourney', category: 'Design & Creative' },
  { name: 'AI Image Generation', category: 'Design & Creative' },
  { name: 'Logo Design', category: 'Design & Creative' },
  { name: 'Visual Content Creation', category: 'Design & Creative' },

  // Website Building
  { name: 'Framer', category: 'Website Building' },
  { name: 'WordPress', category: 'Website Building' },
  { name: 'No-Code Website Development', category: 'Website Building' },
  { name: 'Landing Page Development', category: 'Website Building' },

  // Development Tools
  { name: 'Visual Studio Code', category: 'Development Tools' },
  { name: 'GitHub', category: 'Development Tools' },

  // Specialization
  { name: 'AI-Assisted Development', category: 'Specialization' },
  { name: 'Business Website Creation', category: 'Specialization' },
  { name: 'Portfolio Website Development', category: 'Specialization' },
  { name: 'Cinematic Website Experiences', category: 'Specialization' }
];

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Hawkins After Dark',
    description: 'A cinematic Stranger Things-inspired web experience featuring immersive visuals, atmospheric effects, and modern web interactions.',
    category: 'Cinematic Experience',
    image: hawkinsImage,
    tags: ['Cinematic UI Design', 'Interactive Experience', 'AI-Assisted Development', 'Responsive Design'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-2',
    title: 'Personal Portfolio Website',
    description: 'A modern portfolio experience designed to showcase skills, services, and creative work through a professional user interface.',
    category: 'Personal Branding',
    image: portfolioImage,
    tags: ['Personal Branding', 'Responsive Layout', 'Modern Design', 'Optimized Performance'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-3',
    title: 'Business Landing Page',
    description: 'A conversion-focused landing page designed to help businesses showcase services and generate leads.',
    category: 'Landing Page',
    image: landingImage,
    tags: ['Lead Generation', 'Mobile Responsive', 'Modern Business Design', 'Fast Loading Experience'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-4',
    title: 'Logo Design Collection',
    description: 'A collection of logo concepts created using modern branding principles and AI-assisted workflows.',
    category: 'Brand Identity',
    image: logosImage,
    tags: ['Brand Identity Concepts', 'Modern Visual Design', 'AI-Assisted Creativity', 'Scalable Branding Assets'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-5',
    title: 'AI Visual Creation Showcase',
    description: 'A showcase of AI-generated visuals, cinematic artwork, promotional graphics, and creative concepts.',
    category: 'Creative Design',
    image: aiShowcaseImage,
    tags: ['AI Image Generation', 'Marketing Visuals', 'Cinematic Artwork', 'Creative Concepts'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
  id: 'proj-0',
  title: 'Atmosphere Weather',
  description: 'A premium glassmorphism weather application built with React, TypeScript and Vite. Features live weather updates, dynamic backgrounds, animated weather icons, search suggestions, responsive design, and Apple VisionOS-inspired UI.',
  category: 'Frontend Application',
  image: atmosphereWeatherImage,
  tags: [
    'React',
    'TypeScript',
    'Vite',
    'Weather API',
    'Glassmorphism',
    'Responsive UI'
  ],
  liveUrl: 'https://atmosphere-weather-teal.vercel.app/',
  githubUrl: 'https://github.com/Sathishkumar242004/atmosphere-weather'
},
];

export const whyWorkWithMeData = [
  {
    title: 'Fast Execution',
    description: 'AI-powered workflows help reduce development time while maintaining quality.',
    iconName: 'Zap'
  },
  {
    title: 'Modern Design',
    description: 'Clean, cinematic, and premium-looking digital experiences.',
    iconName: 'Sparkles'
  },
  {
    title: 'Business Focused',
    description: 'Every project is built with real business goals in mind.',
    iconName: 'Target'
  },
  {
    title: 'Creative Problem Solving',
    description: 'Combining creativity, technology, and AI to deliver effective solutions.',
    iconName: 'Brain'
  }
];
