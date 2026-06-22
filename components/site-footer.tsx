"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { siteNavigation } from "@/lib/site-content";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { footer: footerConfig } = useSiteSettings();

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
            Leads, web, software, AI reception, brand, strategy, and automation
            built as one growth system.
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/38">
            Copyright {currentYear} NovaLeads
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#061327]/42">
            Site
          </p>
          <div className="mt-4 grid gap-3">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#061327]/62 transition hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm text-[#061327]/62 transition hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#061327]/42">
            Utility
          </p>
          <div className="mt-4 grid gap-3">
            {footerConfig.clientPortalUrl && (
              <a
                href={footerConfig.clientPortalUrl}
                className="inline-flex items-center gap-2 text-sm text-[#061327]/62 transition hover:text-primary"
                rel="noreferrer"
                target="_blank"
              >
                Client Login <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            <Link
              href={footerConfig.referralHref}
              className="text-sm text-[#061327]/62 transition hover:text-primary"
            >
              Refer a Business
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-[#061327]/62 transition hover:text-primary"
            >
              Privacy policy
            </Link>
          </div>
          <p className="mt-6 max-w-[360px] text-xs leading-6 text-[#061327]/44">
            {footerConfig.privacyStatement}
          </p>
        </div>
      </div>
    </footer>
  );
}
