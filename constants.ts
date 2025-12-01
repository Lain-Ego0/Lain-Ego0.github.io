import { Github, Twitter, Mail, Linkedin, Globe, Code, Terminal, Cpu } from 'lucide-react';

export const NAV_LINKS = [
  { id: 'about', label: { en: 'About', zh: '关于我' } },
  { id: 'projects', label: { en: 'Projects', zh: '个人项目' } },
  { id: 'opensource', label: { en: 'Open Source', zh: '开源贡献' } },
  { id: 'skills', label: { en: 'Skills', zh: '技术栈' } },
  { id: 'contact', label: { en: 'Contact', zh: '联系我' } },
];

// Map string names to Lucide components
export const ICON_MAP: Record<string, any> = {
  Github,
  Twitter,
  Mail,
  Linkedin,
  Globe,
  Code,
  Terminal,
  Cpu
};