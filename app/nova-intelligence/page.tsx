import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ScanLine, Workflow } from "lucide-react";
import { FluidCTA } from "@/components/fluid-cta";
import { LawOSUseCase } from "@/components/lawos-use-case";

export const metadata: Metadata = {
  title: "Nova Intelligence",
  description: "Market research, compliance and risk intelligence, including the LawOS pension contribution monitoring demo.",
};

export default function NovaIntelligencePage() {
  return (
    <main className="relative z-10 bg-[#F6F7FB]">
      <section className="brief-hero">
        <div className="brief-container">
          <p className="brief-eyebrow">AI, business intelligence & automation</p>
          <h1>Nova Intelligence</h1>
          <p className="brief-copy max-w-3xl !text-lg md:!text-xl">Intelligence for institutions and businesses: we research the market, find the constraints and compliance gaps, and build tailored software that closes them.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#lawos" className="brief-link brief-link-primary">See LawOS demo <ArrowDown aria-hidden="true" /></a><a href="#pipeline" className="brief-link">Product pipeline <ArrowRight aria-hidden="true" /></a></div>
        </div>
      </section>
      <section className="brief-section bg-white">
        <div className="brief-container">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div><p className="brief-eyebrow">Market research & problem-solving</p><h2 className="brief-heading max-w-xl">We start with the problem,<br className="hidden md:block" /> not the product.</h2></div>
            <div className="brief-research-steps">
              <article><ScanLine aria-hidden="true" /><div><p className="brief-eyebrow">01 / Assess</p><h3 className="brief-card-title !mt-3">Assess market conditions</h3><p className="brief-copy">We identify the constraints and compliance gaps holding a sector or business back.</p></div></article>
              <article><Workflow aria-hidden="true" /><div><p className="brief-eyebrow">02 / Build</p><h3 className="brief-card-title !mt-3">Build tailored solutions</h3><p className="brief-copy">We turn those findings into software for institutions and businesses.</p></div></article>
            </div>
          </div>
        </div>
      </section>
      <LawOSUseCase />
      <section id="pipeline" className="brief-section bg-white">
        <div className="brief-container">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div><p className="brief-eyebrow">Product pipeline</p><h2 className="brief-heading">What comes next.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["RiskOS", "AuditOS"].map((name, index) => <article className="brief-pipeline-card" key={name}><span className="brief-step-number">0{index + 2}</span><h3 className="brief-card-title !mt-8">{name}</h3><span className="brief-tag brief-tag-development mt-5">In development</span></article>)}
            </div>
          </div>
        </div>
      </section>
      <section className="brief-section brief-cta-section">
        <div className="brief-container text-center"><p className="brief-eyebrow !text-[#FF8A94]">Start with clarity</p><h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">Find your compliance gaps before they find you.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Book a Growth Audit and we’ll show you where Nova Intelligence fits.</p><div className="mt-9"><FluidCTA /></div></div>
      </section>
    </main>
  );
}
