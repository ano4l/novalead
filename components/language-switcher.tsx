"use client";

import { useTranslation } from "@/components/language-provider";
import { localeLabels, locales } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center rounded-full border border-[#061327]/12 bg-white/70 p-0.5">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={[
            "rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-150",
            locale === loc
              ? "bg-primary text-white shadow-[0_2px_10px_rgba(0,87,184,0.25)]"
              : "text-[#061327]/48 hover:text-[#061327]/78",
          ].join(" ")}
          aria-pressed={locale === loc}
          aria-label={loc === "en" ? "Switch to English" : "Mudar para português"}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
