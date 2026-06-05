export interface NavLink {
  name: string;
  href: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface Program {
  id: string;
  imageKey: 'crossfit' | 'boxing' | 'yoga';
  title: string;
  tags: string[];
  description?: string;
  longDescription?: string;
  benefits?: string[];
  schedule?: {
    day: string;
    time: string;
    trainer: string;
    duration: string;
    level: string;
  }[];
  difficulty?: 'مبتدئ' | 'متوسط' | 'متقدم';
  participants?: number;
  price?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
}

export interface WorkHours {
  days: string;
  hours: string;
}

export interface Trainer {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  certifications: string[];
  image: string;
  bio: string;
  socialMedia: {
    instagram: string;
    twitter: string;
    facebook: string;
  };
  programs: string[];
  rating: number;
  reviews: number;
}

export interface Class {
  id: string;
  day: string;
  dayEnglish: string;
  program: string;
  trainer: string;
  time: string;
  endTime: string;
  duration: string;
  level: string;
  capacity: number;
  enrolled: number;
  description: string;
}
