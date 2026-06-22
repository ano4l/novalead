"use client";

import { type FormEvent, useState } from "react";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { submitConfiguredForm } from "@/lib/form-submission";

export function ReferBusinessForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "sent" | "needsDestination" | "error"
  >("idle");
  const { leadCapture } = useSiteSettings();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    try {
      const result = await submitConfiguredForm({
        endpoint: leadCapture.referralFormEndpoint,
        fallbackEmail: leadCapture.referralRecipientEmail,
        form: event.currentTarget,
        storageKey: "novaleads:referral-draft",
        subject: "NovaLeads business referral",
      });

      setSubmitState(result === "sent" ? "sent" : "needsDestination");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form
      className="nova-card rounded-[2rem] p-6 md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label>
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/54">
            Your name
          </span>
          <input
            required
            name="referrer-name"
            className="mt-3 h-12 w-full rounded-2xl border border-[#061327]/12 bg-white px-4 outline-none transition focus:border-primary/60"
          />
        </label>
        <label>
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/54">
            Your email
          </span>
          <input
            required
            name="referrer-email"
            type="email"
            className="mt-3 h-12 w-full rounded-2xl border border-[#061327]/12 bg-white px-4 outline-none transition focus:border-primary/60"
          />
        </label>
        <label>
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/54">
            Referred business
          </span>
          <input
            required
            name="business-name"
            className="mt-3 h-12 w-full rounded-2xl border border-[#061327]/12 bg-white px-4 outline-none transition focus:border-primary/60"
          />
        </label>
        <label>
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/54">
            Business contact
          </span>
          <input
            required
            name="business-contact"
            className="mt-3 h-12 w-full rounded-2xl border border-[#061327]/12 bg-white px-4 outline-none transition focus:border-primary/60"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/54">
          Context
        </span>
        <textarea
          name="context"
          rows={5}
          className="mt-3 w-full resize-none rounded-2xl border border-[#061327]/12 bg-white px-4 py-3 outline-none transition focus:border-primary/60"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="h-12 rounded-full bg-primary px-6 font-mono text-xs uppercase tracking-[0.14em] text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitState === "submitting" ? "Submitting..." : "Submit referral"}
        </button>
        {submitState === "sent" && (
          <p className="text-sm leading-6 text-[#061327]/58" role="status">
            Referral sent.
          </p>
        )}
        {submitState === "needsDestination" && (
          <p className="text-sm leading-6 text-[#061327]/58" role="status">
            Draft saved in this browser. Add a referral endpoint or recipient
            email in site settings before launch.
          </p>
        )}
        {submitState === "error" && (
          <p className="text-sm leading-6 text-[#061327]/58" role="alert">
            The referral could not be sent. Check the configured referral
            endpoint.
          </p>
        )}
      </div>
    </form>
  );
}
