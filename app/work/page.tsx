import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyFilter } from "@/components/case-study-filter";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Filter NovaLeads work by industry across healthcare, HVAC, hospitality, professional services, and real estate.",
};

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="People worked with"
      title="Brands moving into what is next."
      intro="A focused view of the businesses NovaLeads has supported, with industry slots ready for approved case-study evidence."
    >
      <section className="container pb-20">
        <CaseStudyFilter />

        <div className="mt-12 rounded-[2rem] border border-[#061327]/10 bg-white/72 p-6 text-center">
          <p className="mx-auto max-w-[620px] text-base leading-7 text-[#061327]/60">
            Know a business that should be here next?
          </p>
          <Link
            href="/refer"
            className="mt-4 inline-block font-mono text-sm uppercase tracking-[0.14em] text-primary transition hover:text-primary/80"
          >
            Refer a Business
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
