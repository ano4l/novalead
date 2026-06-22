import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How NovaLeads diagnoses, designs, and deploys growth systems for businesses.",
};

export default function ProcessPage() {
  return (
    <PageShell
      eyebrow="Method"
      title="Diagnose, design, deploy."
      intro="A simple operating rhythm for turning growth ambition into practical systems and sharper execution."
    >
      <section className="container pb-20">
        <div className="grid gap-5">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="nova-card grid gap-5 rounded-[2rem] p-7 md:grid-cols-[120px_1fr] md:p-10"
            >
              <span className="font-sentient text-6xl tracking-[-0.08em] text-primary/80">
                0{index + 1}
              </span>
              <div>
                <h2 className="font-sentient text-5xl tracking-[-0.08em]">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-[56ch] text-lg leading-8 text-[#061327]/64">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
