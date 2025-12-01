
import React from 'react';
import { Profile } from '../types';
import { useLanguage } from '../context.tsx';
import { ICON_MAP } from '../constants';
import { ExternalLink, MapPin, ChevronDown } from 'lucide-react';

// --- PRESENTATION LAYER ---

const Hero: React.FC<{ profile: Profile }> = ({ profile }) => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center md:text-left animate-in slide-in-from-left duration-700">
            <div>
              <p className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm md:text-base">
                {lang === 'en' ? "Hello, I'm" : "你好，我是"}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                {profile.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light">
                {profile.title[lang]}
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {profile.bio[lang]}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
               <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <MapPin size={18} />
                  <span>{profile.location[lang]}</span>
               </div>
               
               <div className="flex gap-4">
                 {profile.socials.map((social) => {
                   const Icon = ICON_MAP[social.iconName] || ExternalLink;
                   return (
                     <a 
                      key={social.platform} 
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all transform hover:-translate-y-1 shadow-sm border border-slate-200 dark:border-slate-700"
                      aria-label={social.platform}
                     >
                       <Icon size={20} />
                     </a>
                   )
                 })}
               </div>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="flex-1 flex justify-center md:justify-end animate-in slide-in-from-right duration-700 delay-200">
             <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl rotate-6 opacity-20 blur-lg"></div>
                <div className="relative w-full h-full bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700">
                  <img 
                    src={profile.avatarUrl} 
                    alt={profile.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Avatar';
                    }}
                  />
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
          className="p-2 text-slate-400 hover:text-primary transition-colors"
          aria-label="Scroll Down"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
