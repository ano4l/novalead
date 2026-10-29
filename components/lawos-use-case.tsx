import { DemoLink } from "./demo-link";

const capabilities = [
  ["Dual-clock monitoring", "Checks contributions against the BCEA s34A payroll-date deadline and the Pension Funds Act s13A deadline, seven days after month-end."],
  ["Early timing-exposure flags", "Surfaces the gap between the two deadlines, including exposure that month-end monitoring can miss."],
  ["Automated reconciliation", "Validates and reconciles payroll and bank files, with people reviewing exceptions."],
  ["Working shown on every flag", "Shows the dates, rule applied and pinned rule-set version behind each flag."],
  ["Human review", "Routes flags to a named reviewer, whose operational decision is recorded."],
  ["Hash-chained audit ledger", "Keeps an append-only record with chain-integrity verification at every step."],
] as const;

const context = [
  ["Pension & labour industry review", "Reviews contribution timing against South African labour and pension law, including BCEA s34A and PFA s13A."],
  ["Dual-monitoring compliance software", "Checks the payroll-date deadline and the deadline seven days after month-end, surfacing exposure between them. It also calculates s13A late-payment interest and supports evidence packs."],
  ["Market, problem & solution", "For funds, administrators and pension and labour law firms: when deducted contributions arrive late, LawOS flags timing exposure and prepares evidence for a named human reviewer."],
] as const;

export function LawOSUseCase() {
  return (
    <section id="lawos" className="brief-section border-y border-[#DDE1EC] bg-[#F6F7FB]">
      <div className="brief-container">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="brief-eyebrow">Nova Intelligence / Use case</p><h2 className="brief-heading">Meet LawOS.</h2><span className="brief-tag brief-tag-live mt-5">Live demo</span></div>
          <p className="brief-copy !mt-0 max-w-[64ch] text-lg">LawOS monitors whether pension contributions deducted from salaries reach the fund on time. It helps funds, administrators and legal teams identify late payments and prepare evidence for review.</p>
        </div>
        <div className="lawos-demo mt-10">
          <video className="aspect-video w-full bg-[#09212b]" controls preload="none" poster="/lawos-poster.jpg" playsInline aria-label="LawOS product demonstration">
            <source src="/lawos-demo.mp4" type="video/mp4" />
            Your browser does not support video. <a href="/lawos-demo.mp4">Download the LawOS demonstration</a>.
          </video>
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#DDE1EC] bg-white px-6 py-5"><p className="text-sm leading-6 text-[#4A5270]">See contribution monitoring, human review and the audit ledger in action.</p><DemoLink /></div>
        </div>
        <div className="mt-14">
          <p className="brief-eyebrow">Core capabilities</p>
          <h3 className="brief-heading !text-3xl md:!text-4xl">What LawOS does today.</h3>
          <div className="mt-8 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map(([title, body], index) => (
              <article key={title} className="brief-capability">
                <p className="brief-step-number !text-sm">0{index + 1}</p>
                <h4 className="brief-card-title !mt-4 !text-xl">{title}</h4>
                <p className="brief-copy !text-base">{body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {context.map(([title, body]) => <article className="brief-card" key={title}><h3 className="brief-card-title !mt-0 !text-xl">{title}</h3><p className="brief-copy !text-base">{body}</p></article>)}
        </div>
      </div>
    </section>
  );
}
