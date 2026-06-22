import type { Metadata } from "next";
import { ReferBusinessForm } from "@/components/refer-business-form";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Refer a Business",
  description:
    "Refer a business to NovaLeads without incentive terms until the referral mechanism is confirmed.",
};

export default function ReferPage() {
  return (
    <PageShell
      eyebrow="Referral"
      title="Refer a business."
      intro="Share a business that should speak to NovaLeads. Incentive terms will be added only once Miguel confirms them."
    >
      <section className="container pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
              Referral mechanism
            </p>
            <h2 className="mt-5 max-w-[12ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] md:text-7xl">
              Keep it simple.
            </h2>
            <p className="mt-6 max-w-[520px] text-base leading-8 text-[#061327]/62">
              This captures the referrer, the referred business, and a useful
              contact path without promising any incentive terms.
            </p>
          </div>
          <ReferBusinessForm />
        </div>
      </section>
    </PageShell>
  );
}
