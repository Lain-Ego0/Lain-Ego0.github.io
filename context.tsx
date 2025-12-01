
import React, { createContext, useContext } from 'react';
import { Language } from './types';

// --- LOGIC LAYER (STATE) ---

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({ 
  lang: 'zh', 
  setLang: () => {} 
});

export const ThemeContext = createContext<ThemeContextType>({ 
  theme: 'light', 
  toggleTheme: () => {} 
});

// Custom hooks for easier consumption
export const useLanguage = () => useContext(LanguageContext);
export const useTheme = () => useContext(ThemeContext);
