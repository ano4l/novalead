"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { X } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { useTranslation } from "@/components/language-provider";
import { submitConfiguredForm } from "@/lib/form-submission";
import { trackSiteEvent } from "@/lib/analytics";

type FluidCTAProps = { label?: string; compact?: boolean };

export function FluidCTA({ label = "Book a growth audit", compact = false }: FluidCTAProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [savedDraft, setSavedDraft] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "sent" | "emailPrepared" | "needsDestination" | "error">("idle");
  const { leadCapture } = useSiteSettings();
  const { t } = useTranslation();
  const fieldId = useId();
  const hasDestination = Boolean(leadCapture.auditFormEndpoint || leadCapture.auditRecipientEmail);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    try {
      const result = await submitConfiguredForm({
        endpoint: leadCapture.auditFormEndpoint,
        fallbackEmail: leadCapture.auditRecipientEmail,
        form: event.currentTarget,
        storageKey: "novaleads:audit-request-draft",
        subject: "NovaLeads growth audit request",
      });
      setSubmitState(result);
    } catch {
      setSubmitState("error");
    }
  }

  function handleOpenChange(open: boolean) {
    if (open) {
      setSavedDraft({});
      setSubmitState("idle");
      try {
        const draft: unknown = JSON.parse(localStorage.getItem("novaleads:audit-request-draft") || "null");
        if (draft && typeof draft === "object" && !Array.isArray(draft)) {
          setSavedDraft(Object.fromEntries(Object.entries(draft).filter(([, value]) => typeof value === "string")));
        }
      } catch {
        setSavedDraft({});
      }
    }
    setIsExpanded(open);
  }

  return <Dialog.Root open={isExpanded} onOpenChange={handleOpenChange}>
    <Dialog.Trigger asChild>
      <button type="button" onClick={() => trackSiteEvent("book_growth_audit")} className={`audit-trigger relative inline-flex items-center justify-center rounded-full bg-primary font-mono uppercase tracking-[0.1em] text-white shadow-[0_12px_32px_rgba(214,40,57,0.2)] transition hover:-translate-y-0.5 hover:bg-[#B81D2D] active:translate-y-0 ${compact ? "min-h-12 px-5 text-[11px]" : "min-h-14 px-7 text-xs sm:min-h-16 sm:px-9 sm:text-sm"}`}>
        {t(label)}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[100] bg-[#020816]/55 backdrop-blur-sm" />
      <Dialog.Content className="audit-dialog fixed inset-3 z-[101] overflow-y-auto rounded-[24px] bg-[#B81D2D] text-white shadow-2xl sm:inset-6 lg:inset-x-[max(24px,calc((100vw-1200px)/2))] lg:inset-y-10">
        <div className="fluid-cta-gradient pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid min-h-full max-w-[1120px] items-center gap-7 px-5 pb-6 pt-16 sm:p-10 sm:pt-20 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/85">{t("Growth audit")}</p>
            <Dialog.Title className="mt-5 max-w-[16ch] font-sentient text-4xl sm:max-w-[10ch] leading-[0.98] tracking-[-0.06em] sm:text-6xl">{t("Let us map what grows next.")}</Dialog.Title>
            <Dialog.Description className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:mt-7 sm:text-lg sm:leading-8"><span className="sm:hidden">{t("Tell us a little about your business and what you want to improve.")}</span><span className="hidden sm:inline">{t("We will identify the clearest growth opportunity, the bottleneck slowing it down, and the system that can help capture it.")}</span></Dialog.Description>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-[20px] border border-white/20 bg-[#061327]/65 p-5 backdrop-blur-lg sm:p-7">
            {[["name", t("Full name"), "text", "name"], ["email", t("Work email"), "email", "email"], ["company", t("Company website"), "url", "url"]].map(([name, labelText, type, autoComplete]) => <div key={name}>
              <label htmlFor={`${fieldId}-${name}`} className="mb-2 block text-sm font-semibold text-white">{labelText}{name === "company" ? ` (${t("Optional")})` : ""}</label>
              <input id={`${fieldId}-${name}`} name={name} defaultValue={savedDraft[name] ?? ""} type={type} autoComplete={autoComplete} required={name !== "company"} className="h-12 w-full rounded-xl border border-white/25 bg-[#061327]/55 px-4 text-base text-white outline-none focus:border-white focus:ring-2 focus:ring-white/25" />
            </div>)}
            <div><label htmlFor={`${fieldId}-message`} className="mb-2 block text-sm font-semibold">{t("What should we help with?")}</label><textarea id={`${fieldId}-message`} name="message" defaultValue={savedDraft.message ?? ""} rows={4} required className="w-full resize-y rounded-xl border border-white/25 bg-[#061327]/55 px-4 py-3 text-base text-white outline-none focus:border-white focus:ring-2 focus:ring-white/25" /></div>
            <p className="text-xs leading-5 text-white/85">{t("We use your details to respond to your enquiry.")} <Link href="/privacy-policy" className="underline underline-offset-4">{t("Privacy Policy")}</Link></p>
            {!hasDestination && <p className="text-sm leading-6 text-white/90">{t("Save your request on this device, or contact our team directly.")} <Link href="/contact" className="font-semibold underline underline-offset-4">{t("Contact us")}</Link></p>}
            <button type="submit" disabled={submitState === "submitting"} className="min-h-12 w-full rounded-full bg-white px-5 font-semibold text-[#0A2463] transition hover:bg-[#E3ECFF] disabled:cursor-wait disabled:opacity-70">{submitState === "submitting" ? t("Submitting...") : hasDestination ? t("Submit request") : t("Save request")}</button>
            {submitState === "sent" && <p className="text-sm leading-6" role="status">{t("Request sent.")}</p>}
            {submitState === "emailPrepared" && <p className="text-sm leading-6" role="status">{t("Your email draft is ready. Send it from your email app to complete your request.")}</p>}
            {submitState === "needsDestination" && <p className="text-sm leading-6" role="status">{t("Your request is saved on this device. Contact our team when you are ready to send it.")}</p>}
            {submitState === "error" && <p className="text-sm leading-6" role="alert">{t("We could not save or send your request. Please try again or contact our team.")}</p>}
          </form>
        </div>
        <Dialog.Close asChild><button type="button" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#061327]/65 text-white transition hover:bg-[#061327]" aria-label={t("Close")}><X className="h-5 w-5" aria-hidden="true" /></button></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
