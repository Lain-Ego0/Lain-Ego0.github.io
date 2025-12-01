
export type Language = 'en' | 'zh';

export interface LocalizedString {
  en: string;
  zh: string;
}

export interface NavLink {
  id: string;
  label: LocalizedString;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string; // Maps to icons in constants.ts
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string; // Use local path relative to public folder, e.g., "./assets/project.png"
}

export interface SkillCategory {
  category: LocalizedString;
  items: string[];
}

export interface Profile {
  name: string;
  title: LocalizedString;
  bio: LocalizedString;
  avatarUrl: string; // Use local path, e.g., "./assets/avatar.png"
  email: string;
  location: LocalizedString;
  socials: SocialLink[];
}

export interface SiteData {
  profile: Profile;
  projects: Project[];
  openSource: Project[];
  skills: SkillCategory[];
}
