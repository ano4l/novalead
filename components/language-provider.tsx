"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

const LanguageContext = createContext<{
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
}>({
  locale: "en",
  t: (key) => key,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("novaleads-locale") as Locale;
    if (saved === "en" || saved === "pt") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("novaleads-locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (key: string): string => {
    return translations[locale]?.[key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
