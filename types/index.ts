export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
