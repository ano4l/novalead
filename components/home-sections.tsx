import Link from "next/link";
import { ArrowRight, BrainCircuit, Layers3 } from "lucide-react";
import { FluidCTA } from "./fluid-cta";
import { BizStackOrbit } from "./bizstack-orbit";

const steps = [
  ["Diagnose", "We map your market challenges, risks and high-value opportunities."],
  ["Design", "We design the fix across marketing, websites, software, business processes and AI."],
  ["Deploy & measure", "We implement, track leads, conversions and ROI, and keep improving."],
] as const;

export function HomeSections() {
  return (
    <>
      <section id="process" className="brief-section bg-white/95">
        <div className="brief-container">
          <div className="brief-section-intro">
            <p className="brief-eyebrow">Our process</p>
            <h2 className="brief-heading">Diagnose. Design.<br />Deploy & measure.</h2>
          </div>
          <div className="brief-process mt-12 grid gap-8 md:grid-cols-3">
            {steps.map(([title, body], index) => (
              <article key={title} className="brief-process-step">
                <span className="brief-step-number">0{index + 1}</span>
                <h3 className="brief-card-title">{title}</h3>
                <p className="brief-copy">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="brief-section bg-[#F6F7FB]">
        <div className="brief-container">
          <p className="brief-eyebrow">Our solutions</p>
          <h2 className="brief-heading">Two products,<br className="sm:hidden" /> one growth partner.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="brief-solution brief-solution-dark">
              <BrainCircuit className="h-8 w-8 text-[#9DB8FF]" aria-hidden="true" />
              <p className="brief-eyebrow mt-8 !text-[#9DB8FF]">AI, business intelligence & automation</p>
              <h3 className="brief-solution-title">Nova Intelligence</h3>
              <p className="mt-5 text-lg leading-8 text-white/85">Market research, compliance and risk intelligence for institutions and businesses.</p>
              <div className="brief-product-list mt-8">
                <div><span>LawOS</span><span className="brief-tag brief-tag-live">Live demo</span></div>
                <div><span>RiskOS</span><span className="brief-tag brief-tag-dark">In development</span></div>
                <div><span>AuditOS</span><span className="brief-tag brief-tag-dark">In development</span></div>
              </div>
              <Link href="/nova-intelligence" className="brief-text-link mt-auto pt-9 text-white">Explore Nova Intelligence <ArrowRight aria-hidden="true" /></Link>
            </article>
            <article className="brief-solution bg-white">
              <Layers3 className="h-8 w-8 text-[#1E4FD8]" aria-hidden="true" />
              <p className="brief-eyebrow mt-8">Business management & SME growth</p>
              <h3 className="brief-solution-title text-[#0A2463]">BizStack</h3>
              <p className="brief-copy text-lg">Business management and integration software, plus the SME Growth System: leads, websites, software and automation.</p>
              <div className="my-5"><BizStackOrbit /></div>
              <Link href="/bizstack" className="brief-text-link mt-auto text-[#B81D2D]">Explore BizStack <ArrowRight aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section id="audit" className="brief-section bg-white text-center">
        <div className="brief-container">
          <p className="brief-eyebrow">Start here</p>
          <h2 className="brief-heading">Book a Growth Audit.</h2>
          <p className="brief-copy mx-auto max-w-2xl">We’ll show you where your business is losing time, money and leads, and what to fix first.</p>
          <div className="mt-9"><FluidCTA /></div>
          <Link href="#solutions" className="brief-text-link mt-7 justify-center text-[#0A2463]">Explore our solutions <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
