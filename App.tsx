
import React, { useState, useEffect } from 'react';
import { siteData } from './data';
import { ThemeContext, LanguageContext } from './context.tsx';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Mail } from 'lucide-react';

// --- COMPOSITION LAYER ---

function App() {
  const [lang, setLang] = useState<Language>('zh'); 
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  // Initialize Theme from system preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Update DOM for Tailwind Dark Mode
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Section Title Translation Helper
  const getSectionTitle = (key: string) => {
    const titles: Record<string, { en: string; zh: string }> = {
      projects: { en: "Selected Projects", zh: "个人项目" },
      opensource: { en: "Open Source", zh: "开源贡献" },
      skills: { en: "Tech Stack", zh: "技术栈" },
      contact: { en: "Get In Touch", zh: "联系我" }
    };
    return titles[key] ? titles[key][lang] : key;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(prev => prev === 'dark' ? 'light' : 'dark') }}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <div className="min-h-screen bg-light dark:bg-dark text-slate-900 dark:text-slate-100 font-sans selection:bg-primary/30">
          
          <Navbar />

          <Hero profile={siteData.profile} />

          <Section id="projects" title={getSectionTitle('projects')} alternate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteData.projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          </Section>

          <Section id="opensource" title={getSectionTitle('opensource')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteData.openSource.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          </Section>

          <Section id="skills" title={getSectionTitle('skills')} alternate>
            <Skills skills={siteData.skills} />
          </Section>

          <Section id="contact" title={getSectionTitle('contact')}>
             <div className="max-w-2xl mx-auto text-center space-y-10">
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light">
                  {lang === 'en' 
                    ? "I'm currently available for freelance work and open to new opportunities."
                    : "我目前接受自由职业委托，并对新的工作机会持开放态度。"}
                </p>
                
                <div className="flex justify-center">
                  <a 
                    href={`mailto:${siteData.profile.email}`} 
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>{lang === 'en' ? "Say Hello" : "发邮件给我"}</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                </div>
             </div>
          </Section>

          <Footer name={siteData.profile.name} />

        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
