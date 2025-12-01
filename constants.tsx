import { Code2, Database, Layout, Smartphone, Server, Terminal, User, Briefcase, Settings, MapPin, Coffee, FileCode, BarChart3, Users, Wallet, Bot, Gamepad2 } from 'lucide-react';
import { Project, Experience, Skill, SkillCategory } from './types';

export const HERO_CONTENT = {
  greeting: "Hello, I'm Andy Li",
  tagline: "Building creative systems with code, data, and imagination.",
  subTagline: "Software Engineer specializing in full-stack development with React, Next.js, and modern backend technologies.",
};

export const CONTACT_INFO = {
  email: "li.guanhui.andy@gmail.com",
  phone: "(403) 978-5524",
  location: "Calgary, AB",
  github: "github.com/w6212830602",
  linkedin: "www.linkedin.com/in/andy-li-855299a0",
};

export const PROJECTS: Project[] = [
  {
    id: 'scorecard',
    title: 'ScoreCard',
    description: 'Internal sales analytics tool using C# MAUI & Syncfusion charts. Data-driven dashboard with automated Excel workflows.',
    techStack: ['C#', '.NET MAUI', 'Syncfusion', 'Excel Automation'],
    icon: BarChart3,
    gradient: 'from-violet-600 to-indigo-600',
    category: 'Full Stack',
    githubUrl: 'https://github.com/w6212830602/PowerHouse-ScordCard',
  },
  {
    id: 'badminton-hub',
    title: 'BadmintonHub',
    description: 'A dedicated platform for badminton enthusiasts to organize games, form teams, and manage player sign-ups.',
    techStack: ['React', 'GitHub Pages', 'Web'],
    icon: Users,
    gradient: 'from-emerald-500 to-cyan-500',
    category: 'Web',
    link: 'https://w6212830602.github.io/BadmintonHub/',
    githubUrl: 'https://github.com/w6212830602/BadmintonHub',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'Personal finance app with live budgets, savings goals, and real-time progress animations.',
    techStack: ['React Native', 'Supabase', 'Mobile'],
    icon: Wallet,
    gradient: 'from-orange-500 to-pink-500',
    category: 'Mobile',
    githubUrl: 'https://github.com/cassandracrawford/expense-tracker',
  },
  {
    id: 'aigame',
    title: 'AIGame',
    description: 'React + Vite + Supabase + Ollama local LLM. Dynamic branching stories with animated UI.',
    techStack: ['React', 'Vite', 'Supabase', 'Ollama (LLM)'],
    icon: Bot,
    gradient: 'from-fuchsia-600 to-purple-600',
    category: 'AI',
    githubUrl: 'https://github.com/w6212830602/deepgame',
  },
  {
    id: 'cedres',
    title: 'CEDRES Lab Management',
    description: 'Academic group system with asset tracking, user management, and structured dashboards.',
    techStack: ['Web', 'Asset Tracking', 'Management'],
    icon: Database,
    gradient: 'from-blue-600 to-cyan-600',
    category: 'Web',
    githubUrl: 'https://github.com/cassandracrawford/final-capstone',
  },
  {
    id: 'gamevault',
    title: 'GameVault',
    description: 'Modern, responsive game library with Supabase backend.',
    techStack: ['Next.js', 'Supabase', 'React'],
    icon: Gamepad2,
    gradient: 'from-indigo-500 to-purple-500',
    category: 'Web',
    githubUrl: 'https://github.com/w6212830602/gamevault',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'powerhouse',
    role: 'Software Developer Intern',
    company: 'PowerHouse Data Centre Group',
    location: 'Calgary',
    period: 'Jan 2025 – May 2025',
    description: [
      'Designed and developed an internal Sales Analytics System using C# and .NET MAUI.',
      'Automated Excel-based reports, reducing reporting time by 70%.',
      'Acted as sole developer, delivering a production-ready system within 4 months.'
    ],
    icon: Code2,
  },
  {
    id: 'taskus',
    role: 'User Support Technician',
    company: 'TaskUs',
    location: 'Taipei',
    period: 'May 2022 – Apr 2024',
    description: [
      'Provided IT troubleshooting and technical support to global clients.',
      'Diagnosed and resolved hardware, software, and system issues.',
    ],
    icon: Terminal,
  },
  {
    id: 'novotel',
    role: 'Talent & Culture Coordinator',
    company: 'Novotel Taipei',
    location: 'Taipei',
    period: 'Sep 2020 – Sep 2021',
    description: [
      'Managed employee benefits and payroll through integrated software systems.',
      'Developed digital records for data-driven HR management.'
    ],
    icon: User,
  },
  {
    id: 'cypress',
    role: 'Technician',
    company: 'Cypress Ski Resort',
    location: 'Vancouver',
    period: 'Nov 2019 – Mar 2020',
    description: [
      'Provided technical support and maintenance for equipment.',
      'Ensured safety compliance and educated customers.'
    ],
    icon: Settings,
  },
];

export const SKILLS: Skill[] = [
  { name: 'React', category: SkillCategory.Frontend, level: 90, icon: Code2 },
  { name: 'TypeScript', category: SkillCategory.Frontend, level: 85, icon: FileCode },
  { name: 'HTML5/CSS3', category: SkillCategory.Frontend, level: 95, icon: Layout },
  { name: 'JavaScript (ES6+)', category: SkillCategory.Frontend, level: 90, icon: Code2 },
  { name: 'Next.js', category: SkillCategory.Frontend, level: 85, icon: Code2 },
  { name: 'C#', category: SkillCategory.Backend, level: 80, icon: Terminal },
  { name: 'Java', category: SkillCategory.Backend, level: 75, icon: Coffee },
  { name: 'Python', category: SkillCategory.Backend, level: 75, icon: Terminal },
  { name: 'Node.js', category: SkillCategory.Backend, level: 70, icon: Server },
  { name: 'Supabase', category: SkillCategory.Backend, level: 85, icon: Database },
  { name: 'Figma', category: SkillCategory.Design, level: 80, icon: Layout },
  { name: 'Git/GitHub', category: SkillCategory.Tools, level: 85, icon: Code2 },
  { name: 'Azure', category: SkillCategory.Tools, level: 60, icon: Database },
];