"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "@/components/language-provider";
import { siteNavigation } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const MobileMenu = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();
  return <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
    <Dialog.Trigger asChild><button type="button" className={cn("flex h-11 w-11 items-center justify-center rounded-full text-[#0A2463] transition hover:bg-[#E3ECFF] min-[1180px]:hidden", className)} aria-label={t("Open menu")}><Menu size={24} aria-hidden="true" /></button></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[70] bg-[#061327]/35 backdrop-blur-sm" />
      <Dialog.Content className="fixed inset-x-3 top-3 z-[71] max-h-[calc(100svh-24px)] overflow-y-auto rounded-[28px] border border-[#DDE1EC] bg-white p-6 pt-20 shadow-2xl sm:inset-x-6 sm:top-5 sm:p-10 sm:pt-20">
        <Dialog.Title className="sr-only">{t("Main navigation")}</Dialog.Title>
        <Dialog.Description className="sr-only">{t("Explore NovaLeads solutions and book a growth audit.")}</Dialog.Description>
        <nav className="flex flex-col gap-2" aria-label={t("Mobile navigation")}>
          <Link href="/" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-3 font-sentient text-4xl tracking-[-0.05em] text-[#0A2463] hover:bg-[#F6F7FB]">{t("Home")}</Link>
          {siteNavigation.map(item => <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} aria-current={pathname === item.href ? "page" : undefined} className="rounded-xl px-3 py-3 font-sentient text-4xl tracking-[-0.05em] text-[#0A2463] hover:bg-[#F6F7FB]">{t(item.name)}</Link>)}
          <Link href="/#audit" onClick={() => setIsOpen(false)} className="mt-5 rounded-full bg-[#D62839] px-6 py-4 text-center text-sm font-bold text-white">{t("Book a growth audit")}</Link>
        </nav>
        <div className="mt-8 flex items-center justify-between border-t border-[#DDE1EC] pt-5"><span className="text-sm text-[#4A5270]">{t("Language")}</span><LanguageSwitcher /></div>
        <Dialog.Close asChild><button type="button" aria-label={t("Close menu")} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F6F7FB] text-[#0A2463] hover:bg-[#E3ECFF]"><X size={23} aria-hidden="true" /></button></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
};
