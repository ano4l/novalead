"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { siteNavigation } from "@/lib/site-content";
import { Logo } from "@/components/logo";
import { useTranslation } from "@/components/language-provider";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { footer: footerConfig } = useSiteSettings();
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 border-t border-[#061327]/10 bg-white/88 py-12 text-[#061327] backdrop-blur-md">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Logo className="h-10 w-10 rounded-lg p-0" />
            <span className="ml-3 font-sentient text-3xl tracking-[-0.06em]">
              NovaLeads
            </span>
          </Link>
          <p className="mt-5 max-w-[420px] text-sm leading-7 text-[#061327]/58">
            {t("footer.tagline")}
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/38">
            {t("footer.copyright")} {currentYear} NovaLeads
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#061327]/42">
            {t("footer.site")}
          </p>
          <div className="mt-4 grid gap-3">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#061327]/62 transition hover:text-primary"
              >
                {t(item.name)}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm text-[#061327]/62 transition hover:text-primary"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#061327]/42">
            {t("footer.utility")}
          </p>
          <div className="mt-4 grid gap-3">
            {footerConfig.clientPortalUrl && (
              <a
                href={footerConfig.clientPortalUrl}
                className="inline-flex items-center gap-2 text-sm text-[#061327]/62 transition hover:text-primary"
                rel="noreferrer"
                target="_blank"
              >
                {t("footer.clientLogin")} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            <Link
              href={footerConfig.referralHref}
              className="text-sm text-[#061327]/62 transition hover:text-primary"
            >
              {t("nav.refer")}
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-[#061327]/62 transition hover:text-primary"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#061327]/62 transition hover:text-primary"
            >
              {t("footer.terms")}
            </Link>
            <Link
              href="/refund-policy"
              className="text-sm text-[#061327]/62 transition hover:text-primary"
            >
              {t("footer.refund")}
            </Link>
          </div>
          <p className="mt-6 max-w-[360px] text-xs leading-6 text-[#061327]/44">
            {t("footer.privacyStatement")}
          </p>
        </div>
      </div>
    </footer>
  );
}
