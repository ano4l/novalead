import type { Metadata } from "next";
import { FluidCTA } from "@/components/fluid-cta";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a NovaLeads growth audit across lead generation, web, software, AI support, and automation.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Start with a growth audit."
      intro="Open the fluid CTA, tell us what you want to improve, and we will map the clearest next move."
    >
      <section className="container pb-20 text-center">
        <div className="nova-card rounded-[2rem] p-8 md:p-14">
          <p className="mx-auto max-w-[620px] text-lg leading-8 text-[#061327]/66">
            The audit can cover lead generation, web and software development,
            automated business processes and AI auditing, branding, sales
            support, strategy, and automation.
          </p>
          <div className="mt-9">
            <FluidCTA label="Open audit request" />
          </div>
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.18em] text-[#061327]/44">
            Or email us directly:
          </p>
          <a
            href="mailto:euroteam@novaleadsystems.com"
            className="mt-3 inline-block font-mono text-lg text-primary transition-colors hover:text-primary/80"
          >
            euroteam@novaleadsystems.com
          </a>
        </div>
      </section>
    </PageShell>
  );
}
