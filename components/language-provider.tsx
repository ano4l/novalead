"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { textTranslations, translations } from "@/lib/i18n";

const LanguageContext = createContext<{
  locale: Locale;
  t: (keyOrSource: string) => string;
  translateText: (source: string) => string;
  setLocale: (locale: Locale) => void;
}>({
  locale: "en",
  t: (key) => key,
  translateText: (source) => source,
  setLocale: () => {},
});

const ATTRIBUTE_LOCALE = "data-i18n-attr";
const originalText = new Map<Text, { raw: string; source: string }>();
const translatedAttributes = new Map<Element, Map<string, string>>();

export function translateSource(source: string, locale: Locale): string {
  if (locale === "en" || !source) return source;
  const fromKeyed = translations[locale]?.[source];
  if (fromKeyed) return fromKeyed;
  const trimmed = source.trim();
  const fromCatalog = textTranslations[trimmed];
  if (fromCatalog && fromCatalog !== trimmed) return fromCatalog;
  return source;
}

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
    translatedAttributes.forEach((attrMap, element) => {
      if (element.isConnected) {
        attrMap.forEach((raw, attr) => {
          if (element.hasAttribute(attr)) element.setAttribute(attr, raw);
        });
      }
    });
    return;
  }

  textNodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (
      !parent ||
      ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "OPTION"].includes(parent.tagName)
    ) {
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

  const translatableAttributes = ["placeholder", "aria-label", "title", "alt"];
  document.body.querySelectorAll(`[${ATTRIBUTE_LOCALE}]`).forEach((element) => {
    const attrName = element.getAttribute(ATTRIBUTE_LOCALE);
    if (!attrName || !translatableAttributes.includes(attrName)) return;
    const raw =
      translatedAttributes.get(element)?.get(attrName) ??
      element.getAttribute(attrName) ??
      "";
    if (!translatedAttributes.has(element)) {
      translatedAttributes.set(element, new Map([[attrName, raw]]));
    }
    const translated = translateSource(raw, locale);
    if (translated !== raw) element.setAttribute(attrName, translated);
  });

  translatableAttributes.forEach((attrName) => {
    document.body.querySelectorAll(`[${attrName}]`).forEach((element) => {
      const raw = element.getAttribute(attrName) ?? "";
      if (!raw) return;
      const key = `${attrName}:${raw}`;
      const cachedRaw = translatedAttributes.get(element)?.get(key);
      const originalRaw = cachedRaw ?? raw;
      if (!translatedAttributes.has(element)) {
        translatedAttributes.set(element, new Map([[key, originalRaw]]));
      } else if (!cachedRaw) {
        translatedAttributes.get(element)?.set(key, originalRaw);
      }
      const translated = translateSource(originalRaw, locale);
      if (translated !== originalRaw) element.setAttribute(attrName, translated);
    });
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("novaleads-locale") as Locale;
    if (saved === "en" || saved === "pt") {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    translateDocument(locale);
    if (locale !== "pt") return;
    const observer = new MutationObserver(() => translateDocument("pt"));
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    return () => observer.disconnect();
  }, [locale, isReady]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("novaleads-locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (keyOrSource: string): string => {
    if (!keyOrSource) return "";
    return translateSource(keyOrSource, locale);
  };

  const translateText = (source: string): string => translateSource(source, locale);

  return (
    <LanguageContext.Provider value={{ locale, t, translateText, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
