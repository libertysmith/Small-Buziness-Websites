import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'en' | 'ko';
type Dictionary = Record<string, string>;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const getBrowserLocale = (): Locale => {
  if (typeof navigator === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ko')) return 'ko';
  return 'en';
};

const getStoredLocale = (): Locale => {
  if (typeof window === 'undefined') return getBrowserLocale();
  
  const stored = localStorage.getItem('sbw-locale');
  if (stored === 'en' || stored === 'ko') return stored;
  return getBrowserLocale();
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale);
  const [dictionary, setDictionary] = useState<Dictionary>({});

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('sbw-locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (key: string): string => {
    return dictionary[key] || key;
  };

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const dict = await import(`./${locale}.json`);
        setDictionary(dict.default || dict);
      } catch (error) {
        console.error(`Failed to load ${locale} dictionary:`, error);
      }
    };

    loadDictionary();
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}