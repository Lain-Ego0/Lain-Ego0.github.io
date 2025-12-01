
import React from 'react';

const Footer: React.FC<{ name: string }> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          © {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-slate-400 dark:text-slate-600 text-sm mt-2">
          Designed & Built by {name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
