export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'Editorial' | 'Architecture' | 'Fashion' | 'Travel';
  year: string;
  location: string;
  services: string[];
  coverImage: string;
  description: string;
  story: string;
  details: string;
  gallery: {
    url: string;
    caption?: string;
    aspect?: 'landscape' | 'portrait' | 'square';
  }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Creative Process' | 'Behind the Scenes' | 'Travel';
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface GearItem {
  id: string;
  name: string;
  category: string;
  specs: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  year: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export type ActiveView = 'home' | 'about' | 'portfolio' | 'collection' | 'contact';
