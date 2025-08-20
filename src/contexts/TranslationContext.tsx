import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation, Language } from '../hooks/useTranslation';

interface TranslationContextType {
  language: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const translation = useTranslation();

  return (
    <TranslationContext.Provider value={translation}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a TranslationProvider');
  }
  return context;
};
