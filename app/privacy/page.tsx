import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { defaultSiteSettings } from "@/lib/site-settings";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "NovaLeads privacy and data-handling policy placeholder pending approved compliance copy.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Policy copy pending review."
      intro="This route is ready for the approved privacy and data-handling statement before production launch."
    >
      <section className="container pb-20">
        <article className="nova-card rounded-[2rem] p-7 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
            Data handling
          </p>
          <h2 className="mt-5 max-w-[13ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] md:text-7xl">
            Awaiting approved language.
          </h2>
          <p className="mt-7 max-w-[720px] text-lg leading-9 text-[#061327]/66">
            {defaultSiteSettings.footer.privacyStatement} The final policy
            should be reviewed before publishing any detailed claims about POPIA
            compliance, call recordings, transcripts, customer data, or order
            data.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
