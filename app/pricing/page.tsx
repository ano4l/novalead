import type { Metadata } from "next";
import { Check, LockKeyhole } from "lucide-react";
import { AuditCostCalculator } from "@/components/audit-cost-calculator";
import { FluidCTA } from "@/components/fluid-cta";
import { PageShell } from "@/components/page-shell";
import { hiringComparison, pricingTiers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Audit-first NovaLeads pricing with a visible starter package, quote-gated growth tiers, and an AI business audit calculator.",
};

export default function PricingPage() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Audit-first packages."
      intro="Start with the clearest bottleneck, then scope the right growth system around real operational need."
    >
      <section className="container pb-20">
        <div className="grid gap-5 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "nova-card flex min-h-[520px] flex-col rounded-[2rem] p-6 md:p-7",
                tier.highlighted ? "border-primary/34" : "",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#061327]/44">
                    {tier.status}
                  </p>
                  <h2 className="mt-5 font-sentient text-5xl leading-none tracking-[-0.08em] text-[#061327]">
                    {tier.name}
                  </h2>
                </div>
                {tier.quoteGated && (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#061327]/10 bg-white text-[#061327]/48">
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </div>

              <p className="mt-8 font-mono text-sm uppercase tracking-[0.18em] text-primary">
                {tier.priceLabel}
              </p>
              <p className="mt-5 text-base leading-7 text-[#061327]/62">
                {tier.description}
              </p>

              <div className="mt-8 grid gap-3">
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-[#061327]/10 bg-white/68 p-4 text-sm leading-6 text-[#061327]/68"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <FluidCTA label={tier.cta} compact />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#061327]/10 bg-white/86 py-20 backdrop-blur-md md:py-28">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
                Vs. hiring
              </p>
              <h2 className="mt-5 max-w-[11ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] md:text-7xl">
                Compare the cost shape.
              </h2>
            </div>
            <div className="grid gap-4">
              {hiringComparison.map((row) => (
                <article
                  key={row.area}
                  className="nova-card grid gap-4 rounded-[2rem] p-6 md:grid-cols-[140px_1fr_1fr] md:p-7"
                >
                  <h3 className="font-sentient text-3xl tracking-[-0.07em] text-primary">
                    {row.area}
                  </h3>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/42">
                      Hiring
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#061327]/62">
                      {row.hiring}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/42">
                      NovaLeads system
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#061327]/62">
                      {row.nova}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <AuditCostCalculator />
      </section>
    </PageShell>
  );
}
