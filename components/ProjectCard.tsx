
import React from 'react';
import { Project } from '../types';
import { useLanguage } from '../context.tsx';
import { Github, ExternalLink } from 'lucide-react';

// --- PRESENTATION LAYER ---

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { lang } = useLanguage();

  return (
    <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
        <img 
          src={project.imageUrl} 
          alt={project.title[lang]} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
             // Fallback if local image not found
             (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Project+Image';
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {project.title[lang]}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
            {project.description[lang]}
          </p>
        </div>
        
        {/* Footer: Tags & Links */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map(t => (
              <span key={t} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50 text-xs font-medium text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-600/50">
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Github size={16} /> <span>Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-blue-700 transition-colors">
                <ExternalLink size={16} /> <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
