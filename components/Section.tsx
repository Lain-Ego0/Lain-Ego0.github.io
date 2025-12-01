
import React from 'react';

// --- LAYOUT LAYER ---

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  alternate?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, alternate = false }) => (
  <section 
    id={id} 
    className={`py-24 transition-colors duration-300 ${
      alternate ? 'bg-slate-50 dark:bg-slate-800/50' : 'bg-white dark:bg-dark'
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {title && (
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white relative inline-block">
            {title}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>
      )}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {children}
      </div>
    </div>
  </section>
);

export default Section;
