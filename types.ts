import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: LucideIcon;
  gradient: string;
  link?: string;
  githubUrl?: string;
  category: 'Mobile' | 'Web' | 'Full Stack' | 'AI';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: LucideIcon;
}

export enum SkillCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Design = 'Design',
  Tools = 'Tools',
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0-100
  icon?: LucideIcon;
}