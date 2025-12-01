import React, { useState } from 'react';
import { SiteData, LocalizedString } from '../types';
import { X, Save, Copy, Check } from 'lucide-react';

interface EditorProps {
  isOpen: boolean;
  onClose: () => void;
  data: SiteData;
  onSave: (newData: SiteData) => void;
}

const Editor: React.FC<EditorProps> = ({ isOpen, onClose, data, onSave }) => {
  const [localData, setLocalData] = useState<SiteData>(data);
  const [copied, setCopied] = useState(false);

  // Update local state when prop changes, if needed
  React.useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handleProfileChange = (field: string, value: string | LocalizedString) => {
    setLocalData(prev => ({
      ...prev,
      profile: { ...prev.profile, [field]: value }
    }));
  };

  const handleProfileNestedChange = (field: 'title' | 'bio' | 'location', lang: 'en' | 'zh', value: string) => {
    setLocalData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: { ...prev.profile[field], [lang]: value }
      }
    }));
  };

  const exportConfig = () => {
    const jsonString = JSON.stringify(localData, null, 2);
    navigator.clipboard.writeText(jsonString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 h-full shadow-2xl overflow-y-auto flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Content Editor</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 flex-1">
          
          {/* Instructions */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm text-blue-800 dark:text-blue-200">
            <p className="font-semibold mb-1">How to maintain:</p>
            <p>1. Edit content here.</p>
            <p>2. Click "Apply Changes" to preview.</p>
            <p>3. Click "Copy Config JSON" and paste it into your code (replacing `defaultSiteData` in `types.ts` or `App.tsx`) to make it permanent on GitHub.</p>
          </div>

          {/* Profile Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 dark:border-slate-700">Profile</h3>
            
            <div className="grid gap-2">
              <label className="text-sm font-medium">Name</label>
              <input 
                value={localData.profile.name}
                onChange={(e) => handleProfileChange('name', e.target.value)}
                className="w-full p-2 rounded border dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Title (EN)</label>
              <input 
                value={localData.profile.title.en}
                onChange={(e) => handleProfileNestedChange('title', 'en', e.target.value)}
                className="w-full p-2 rounded border dark:bg-slate-800 dark:border-slate-700"
              />
            </div>
             <div className="grid gap-2">
              <label className="text-sm font-medium">Title (ZH)</label>
              <input 
                value={localData.profile.title.zh}
                onChange={(e) => handleProfileNestedChange('title', 'zh', e.target.value)}
                className="w-full p-2 rounded border dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Bio (EN)</label>
              <textarea 
                value={localData.profile.bio.en}
                onChange={(e) => handleProfileNestedChange('bio', 'en', e.target.value)}
                className="w-full p-2 rounded border dark:bg-slate-800 dark:border-slate-700 h-24"
              />
            </div>
             <div className="grid gap-2">
              <label className="text-sm font-medium">Bio (ZH)</label>
              <textarea 
                value={localData.profile.bio.zh}
                onChange={(e) => handleProfileNestedChange('bio', 'zh', e.target.value)}
                className="w-full p-2 rounded border dark:bg-slate-800 dark:border-slate-700 h-24"
              />
            </div>
          </section>

          {/* Note for other sections */}
          <div className="text-center text-slate-500 italic p-4 border rounded border-dashed dark:border-slate-700">
            Advanced editing for Projects and Skills involves array manipulation. 
            For this demo, please edit the `defaultSiteData` object in code directly for complex structures, or expand this form logic.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex gap-4">
          <button 
            onClick={() => onSave(localData)}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Save size={18} /> Apply Preview
          </button>
          <button 
            onClick={exportConfig}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-800 dark:bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />} 
            {copied ? 'Copied!' : 'Copy JSON'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Editor;