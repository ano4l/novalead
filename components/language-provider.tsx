"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { textTranslations, translations } from "@/lib/i18n";

const LanguageContext = createContext<{
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
}>({
  locale: "en",
  t: (key) => key,
  setLocale: () => {},
});

const originalText = new Map<Text, { raw: string; source: string }>();

function translateDocument(locale: Locale) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node = walker.nextNode();
  while (node) {
    textNodes.push(node as Text);
    node = walker.nextNode();
  }

  if (locale === "en") {
    originalText.forEach(({ raw }, textNode) => {
      if (textNode.isConnected) textNode.data = raw;
    });
    return;
  }

  textNodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) {
      return;
    }
    const source = originalText.get(textNode)?.source ?? textNode.data.trim();
    const translated = textTranslations[source];
    if (!translated || source === translated) return;
    if (!originalText.has(textNode)) {
      originalText.set(textNode, { raw: textNode.data, source });
    }
    const leading = textNode.data.match(/^\s*/)?.[0] ?? "";
    const trailing = textNode.data.match(/\s*$/)?.[0] ?? "";
    textNode.data = `${leading}${translated}${trailing}`;
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("novaleads-locale") as Locale;
    if (saved === "en" || saved === "pt") {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  useEffect(() => {
    translateDocument(locale);
    if (locale !== "pt") return;
    const observer = new MutationObserver(() => translateDocument("pt"));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [locale]);

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
