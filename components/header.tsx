"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "@/components/language-provider";
import { siteNavigation } from "@/lib/site-content";
import { FluidCTA } from "./fluid-cta";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  return <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
    <header className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 rounded-full border border-[#0A2463]/10 bg-white/90 px-4 py-3 shadow-[0_12px_48px_rgba(10,36,99,0.08)] backdrop-blur-xl sm:px-6">
      <Link href="/" aria-label="NovaLeads home" className="inline-flex shrink-0 items-center gap-2.5 rounded-lg">
        <Logo alt="" className="h-9 w-9 rounded-lg p-0 sm:h-10 sm:w-10" />
        <span className="font-sentient text-[1.65rem] tracking-[-0.06em] text-[#061327] sm:text-3xl">NovaLeads</span>
      </Link>
      <nav aria-label={t("Main navigation")} className="hidden items-center gap-6 min-[1180px]:flex">
        {siteNavigation.map(item => <Link key={item.name} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`rounded-md py-2 text-sm font-semibold transition-colors hover:text-[#B81D2D] ${pathname === item.href ? "text-[#B81D2D]" : "text-[#0A2463]"}`}>{t(item.name)}</Link>)}
      </nav>
      <div className="flex shrink-0 items-center gap-3">
        <div className="hidden sm:block"><LanguageSwitcher /></div>
        <div className="hidden min-[1180px]:block"><FluidCTA compact /></div>
        <MobileMenu />
      </div>
    </header>
  </div>;
};
