import { FluidCTA } from "@/components/fluid-cta";
import { PageShell } from "@/components/page-shell";

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
        </div>
      </section>
    </PageShell>
  );
}
