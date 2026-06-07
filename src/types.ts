export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Skill {
  name: string;
  category: 'AI Development' | 'Design & Creative' | 'Website Building' | 'Development Tools' | 'Specialization';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  iconName: string;
}
