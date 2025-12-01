
import { SiteData } from './types';

// --- CONTENT LAYER ---
// Edit this file to update your website content.
// For images, place files in your public/assets folder and reference them here.

export const siteData: SiteData = {
  profile: {
    name: "Lain",
    title: { en: "Full Stack Engineer", zh: "全栈开发工程师" },
    bio: { 
      en: "Passionate about building scalable web applications and exploring new technologies. Focusing on React, Node.js, and AI integration. Minimalist design enthusiast.", 
      zh: "热衷于构建可扩展的Web应用并探索新技术。专注于 React, Node.js 和 AI 集成。极简主义设计爱好者。" 
    },
    // TODO: Replace with your actual avatar image in public/assets/avatar.png
    avatarUrl: "./assets/avatar.png", 
    email: "contact@lain-ego0.dev",
    location: { en: "Shanghai, China", zh: "中国，上海" },
    socials: [
      { platform: "GitHub", url: "https://github.com/Lain-Ego0", iconName: "Github" },
      { platform: "Twitter", url: "https://twitter.com", iconName: "Twitter" },
      { platform: "Email", url: "mailto:contact@lain-ego0.dev", iconName: "Mail" }
    ]
  },
  skills: [
    { category: { en: "Frontend", zh: "前端" }, items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
    { category: { en: "Backend", zh: "后端" }, items: ["Node.js", "Python", "PostgreSQL", "Redis", "Go"] },
    { category: { en: "DevOps", zh: "运维" }, items: ["Docker", "AWS", "GitHub Actions", "Nginx"] },
  ],
  projects: [
    {
      id: "1",
      title: { en: "Personal Portfolio", zh: "个人主页" },
      description: { en: "A professional, minimalist portfolio site built with React and Tailwind CSS. Features dark mode and bilingual support.", zh: "使用 React 和 Tailwind CSS 构建的专业极简主义个人主页。支持暗黑模式和双语切换。" },
      techStack: ["React", "Tailwind", "TypeScript"],
      repoUrl: "https://github.com/Lain-Ego0/Lain-Ego0.github.io",
      demoUrl: "https://lain-ego0.github.io",
      // TODO: Add image to public/assets/
      imageUrl: "./assets/portfolio-preview.png"
    },
    {
      id: "2",
      title: { en: "E-Commerce Dashboard", zh: "电商后台管理" },
      description: { en: "Real-time analytics dashboard for e-commerce platforms with data visualization.", zh: "带有数据可视化的电商平台实时分析仪表板。" },
      techStack: ["Vue", "D3.js", "Express"],
      imageUrl: "./assets/dashboard-preview.png"
    }
  ],
  openSource: [
    {
      id: "os1",
      title: { en: "React Utils", zh: "React 工具库" },
      description: { en: "A collection of custom hooks for modern React apps to simplify state management.", zh: "用于简化状态管理的现代 React 应用自定义 Hook 集合。" },
      techStack: ["TypeScript", "NPM"],
      repoUrl: "https://github.com",
    }
  ]
};
