
import React from 'react';
import { SkillCategory } from '../types';
import { useLanguage } from '../context.tsx';

// --- PRESENTATION LAYER ---

const Skills: React.FC<{ skills: SkillCategory[] }> = ({ skills }) => {
  const { lang } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skills.map((cat, idx) => (
        <div 
          key={idx} 
          className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/30 dark:hover:border-primary/30 transition-colors"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
            {cat.category[lang]}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {cat.items.map(item => (
              <div key={item} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary/80"></div>
                 <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
