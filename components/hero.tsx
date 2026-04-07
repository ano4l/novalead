import Link from "next/link";
import { HeroEffects } from "./hero-effects";
import { Pill } from "./pill";
import { Button } from "./ui/button";

const capabilityItems = [
  {
    title: "Lead generation",
    body: "Targeted demand generation shaped around the clients you actually want.",
  },
  {
    title: "Sales support",
    body: "Cleaner follow-up, faster response, and better handoff between interest and action.",
  },
  {
    title: "Brand and web",
    body: "Sharper positioning, websites, and landing pages that earn trust early.",
  },
  {
    title: "Automation",
    body: "Practical systems that remove drag without removing the human touch.",
  },
] as const;

const serviceItems = [
  {
    id: "01",
    title: "Lead generation",
    body: "Campaigns, offers, and outreach designed around the market you want to win in, not generic traffic for its own sake.",
  },
  {
    id: "02",
    title: "Sales and business development",
    body: "Support across follow-up, conversion flow, and the simple systems that help good conversations turn into real opportunities.",
  },
  {
    id: "03",
    title: "Marketing and branding",
    body: "Clearer messaging, stronger positioning, and a sharper digital presence that helps people trust the business faster.",
  },
  {
    id: "04",
    title: "Consulting and strategy",
    body: "Honest guidance on what needs attention first, what can wait, and where growth is getting slowed down unnecessarily.",
  },
  {
    id: "05",
    title: "Business process automation",
    body: "Thoughtful automation that replaces repetitive manual work so the team can focus on higher-value tasks.",
  },
] as const;

const processItems = [
  {
    id: "01",
    title: "Diagnose",
    body: "We look closely at the business as it is now: goals, offer, market, bottlenecks, and the processes that are quietly holding growth back.",
  },
  {
    id: "02",
    title: "Design",
    body: "We shape a plan around your stage of growth, blending the right mix of positioning, lead flow, sales support, and automation.",
  },
  {
    id: "03",
    title: "Deploy",
    body: "We build and launch alongside you with clear milestones, useful reporting, and a focus on outcomes that matter in the real business.",
  },
] as const;

const signalItems = [
  { value: "Lower", label: "admin drag" },
  { value: "Faster", label: "sales response" },
  { value: "Sharper", label: "execution" },
] as const;

const principleItems = [
  "Tailored to your market",
  "Built around your sales style",
  "Specific to your audience",
  "Designed for your growth stage",
  "Replacing old with better",
] as const;

const resultItems = [
  {
    title: "Clearer positioning",
    body: "People understand the value of the business faster, which makes every campaign and conversation work harder.",
  },
  {
    title: "Better response flow",
    body: "Enquiries get handled with more consistency, less delay, and fewer opportunities slipping through the cracks.",
  },
  {
    title: "Smarter operations",
    body: "The business feels lighter to run because repetitive tasks, clunky handoffs, and old workarounds start to disappear.",
  },
] as const;

const industryItems = [
  "Healthcare",
  "Real estate",
  "Professional services",
  "Logistics and machinery",
  "Non-profits",
  "Local service businesses",
  "Growing SMEs",
] as const;

const locationItems = [
  "Cape Town",
  "Johannesburg",
  "Working beyond South Africa",
] as const;

const faqItems = [
  {
    question: "What kind of work does NovaLeads actually do?",
    answer:
      "NovaLeads works across lead generation, sales support, branding, websites, strategy, and automation. The mix depends on what the business actually needs, not on a fixed package.",
  },
  {
    question: "Is this only for businesses that want AI or automation?",
    answer:
      "No. Automation is used where it improves speed, consistency, or admin load. The goal is a better-running business, not forcing technology where it does not belong.",
  },
  {
    question: "Do I need a brand-new website before we start?",
    answer:
      "Not necessarily. Sometimes the right move is a new landing page or a sharper site. Sometimes it is messaging, follow-up, or strategy first. We diagnose before we prescribe.",
  },
  {
    question: "Do you only work in South Africa?",
    answer:
      "NovaLeads is based in South Africa and can support businesses locally as well as teams operating in other markets.",
  },
] as const;

const panelClass =
  "relative overflow-hidden rounded-[2rem] border border-white/16 bg-[rgba(233,238,249,0.12)] p-6 shadow-[0_28px_80px_rgba(8,25,72,0.22)] backdrop-blur-xl md:p-7";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <HeroEffects />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,25,72,0.14),rgba(8,25,72,0.4)_24%,rgba(8,25,72,0.74)_100%)]" />

      <section
        id="top"
        data-hero-section
        className="relative flex min-h-svh scroll-mt-32 items-center overflow-hidden pt-28"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_50%_0%,rgba(233,238,249,0.16),transparent_58%)]" />
        <div className="pointer-events-none absolute left-[-8rem] top-16 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(225,38,45,0.22),transparent_64%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] top-20 h-[32rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(114,144,228,0.3),transparent_62%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[8%] top-24 h-[36rem] rounded-[999px] bg-[radial-gradient(circle_at_50%_24%,rgba(8,25,72,0.76),rgba(8,25,72,0.46)_48%,transparent_76%)] blur-2xl" />
        <div
          data-hero-glow
          className="pointer-events-none absolute bottom-[-12rem] left-1/2 h-[24rem] w-[96rem] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_50%_100%,rgba(233,238,249,0.22),rgba(225,38,45,0.16)_34%,transparent_72%)] blur-3xl"
        />

        <div className="container relative grid min-h-svh items-end gap-10 pb-20 pt-14 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-12">
          <div className="relative max-w-[780px] self-end">
            <Pill className="border-white/16 bg-[rgba(233,238,249,0.12)] text-foreground/82">
              Business growth partners
            </Pill>
            <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.32em] text-foreground/60">
              Lead generation, sales, branding, strategy, and automation
            </p>
            <h1
              data-hero-title
              className="relative mt-6 max-w-[12ch] font-sentient text-5xl leading-[0.92] tracking-[-0.08em] text-foreground [text-shadow:0_14px_44px_rgba(8,25,72,0.42)] sm:text-6xl md:text-7xl lg:text-[7.15rem]"
              style={{ transformOrigin: "left top" }}
            >
              Out with the old.{" "}
              <i className="font-light text-foreground/92">
                In with a business that actually grows.
              </i>
            </h1>
            <p className="mt-8 max-w-[720px] text-pretty text-base leading-8 text-foreground/80 sm:text-[1.08rem]">
              Over the last two months, we have helped businesses sharpen their
              message, rebuild pages, strengthen follow-up, and put smarter
              systems behind the work. NovaLeads works best when we can show up
              as a hands-on partner across strategy, sales, branding, and
              practical automation.
            </p>

            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild>
                <Link data-gl-trigger href="#contact">
                  Book a free 30-minute growth audit
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#process">See how we work</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {locationItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/14 bg-[rgba(233,238,249,0.08)] px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-foreground/72"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-8 max-w-[640px] text-sm leading-7 text-foreground/60">
              The aim is simple: clearer positioning, stronger lead flow,
              faster response, and a business that feels easier to move
              forward.
            </p>
          </div>

          <div className="relative grid gap-6 lg:pb-8">
            <article className={panelClass}>
              <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/58">
                Our story and the case for change
              </p>
              <blockquote className="mt-6 max-w-[18ch] font-sentient text-3xl leading-tight tracking-[-0.06em] text-foreground sm:text-[2.4rem]">
                "We kept seeing good businesses held back not by lack of
                ambition, but by outdated processes, unclear positioning, and
                too much manual work."
              </blockquote>
              <p className="mt-6 max-w-[52ch] text-base leading-8 text-foreground/76">
                That is why the work now reaches beyond one tactic. We diagnose
                what is slowing growth, design what fits the business, and
                deploy the pages, campaigns, systems, and support that help it
                move with more confidence.
              </p>
            </article>

            <article className={panelClass}>
              <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/58">
                What the last two months confirmed
              </p>
              <h2 className="mt-5 max-w-[18ch] font-sentient text-3xl leading-tight tracking-[-0.06em] text-foreground sm:text-[2.3rem]">
                Businesses pulling ahead are the ones responding faster,
                communicating clearly, and using automation intelligently.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {signalItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.35rem] border border-white/14 bg-[rgba(255,255,255,0.05)] px-4 py-4"
                  >
                    <strong className="block font-sentient text-3xl tracking-[-0.06em] text-foreground">
                      {item.value}
                    </strong>
                    <p className="mt-2 text-sm leading-6 text-foreground/68">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/12 bg-[rgba(233,238,249,0.08)] backdrop-blur-xl">
        <div className="container grid gap-px md:grid-cols-4">
          {capabilityItems.map((item, index) => (
            <article key={item.title} className="px-0 py-6 md:px-6 md:py-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/48">
                0{index + 1}
              </p>
              <strong className="mt-3 block font-sentient text-2xl tracking-[-0.05em] text-foreground">
                {item.title}
              </strong>
              <p className="mt-4 max-w-[28ch] text-sm leading-7 text-foreground/68">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(8,25,72,0.1),rgba(8,25,72,0.32)_18%,rgba(8,25,72,0.16)_100%)] py-28 md:py-36"
      >
        <div className="container grid gap-14 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-start">
          <div>
            <div className="max-w-[860px]">
              <Pill className="border-white/16 bg-[rgba(233,238,249,0.1)] text-foreground/82">
                What we deliver
              </Pill>
              <h2 className="mt-8 max-w-[12ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(8,25,72,0.24)] sm:text-5xl md:text-6xl lg:text-[5.35rem]">
                Full-service support, built around the business in front of us.
              </h2>
              <p className="mt-8 max-w-[760px] text-pretty text-base leading-8 text-foreground/76 sm:text-lg">
                This is not about pushing one offer. It is about combining the
                right pieces so growth feels more intentional, more personal,
                and less held back by old ways of working.
              </p>
            </div>

            <div className="mt-16 border-y border-white/12">
              {serviceItems.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-4 border-b border-white/12 py-8 last:border-b-0 md:grid-cols-[110px_minmax(0,0.86fr)_minmax(0,1fr)] md:gap-10"
                >
                  <span className="font-sentient text-3xl tracking-[-0.06em] text-foreground/34">
                    {item.id}
                  </span>
                  <h3 className="font-sentient text-2xl tracking-[-0.05em] text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="max-w-[40ch] text-base leading-8 text-foreground/74">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-6 xl:pt-28">
            <article className={panelClass}>
              <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/58">
                Tailored in practice
              </p>
              <div className="mt-6 grid gap-3">
                {principleItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-[1.2rem] border border-white/12 bg-[rgba(255,255,255,0.05)] px-4 py-4"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-foreground/74">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className={panelClass}>
              <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/58">
                How we tend to show up best
              </p>
              <h3 className="mt-5 max-w-[14ch] font-sentient text-3xl leading-tight tracking-[-0.06em] text-foreground">
                No templates. No one-size-fits-all package. Built around you.
              </h3>
              <p className="mt-5 text-base leading-8 text-foreground/74">
                The recent work has made that even clearer. Businesses respond
                well when the plan fits their actual market, team capacity, and
                stage of growth, not an agency playbook copied from somewhere
                else.
              </p>
            </article>
          </aside>
        </div>
      </section>

      <section
        id="process"
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(8,25,72,0.18),rgba(8,25,72,0.4)_24%,rgba(8,25,72,0.14)_100%)] py-28 md:py-36"
      >
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Pill className="border-white/16 bg-[rgba(233,238,249,0.1)] text-foreground/82">
              How we work
            </Pill>
            <h2 className="mt-8 max-w-[11ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(8,25,72,0.24)] sm:text-5xl md:text-6xl">
              Diagnose, design, and deploy with clarity.
            </h2>
            <p className="mt-8 max-w-[620px] text-base leading-8 text-foreground/76 sm:text-lg">
              The method is simple on purpose. We learn the business properly,
              shape the right response, and execute with you so the work lands
              in reality instead of staying in a slide deck.
            </p>

            <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/16 bg-[rgba(233,238,249,0.12)] p-5 shadow-[0_24px_80px_rgba(8,25,72,0.24)] backdrop-blur-xl md:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(233,238,249,0.18),transparent_24%),radial-gradient(circle_at_50%_82%,rgba(225,38,45,0.18),transparent_28%)]" />
              <div className="relative min-h-[420px]">
                <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-white/14" />
                <div
                  data-process-line
                  className="absolute left-1/2 top-[15%] w-px -translate-x-1/2 bg-gradient-to-b from-[#e9eef9] via-[#7f96df] to-[#e1262d]"
                  style={{ height: "0%" }}
                />
                <div
                  data-process-dot
                  className="absolute left-1/2 top-[15%] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7f9ff] shadow-[0_0_36px_rgba(225,38,45,0.45)]"
                />
                <div className="absolute inset-x-[14%] top-[13%] aspect-square rounded-full border border-white/12" />
                <div className="absolute inset-x-[24%] top-[23%] aspect-square rounded-full border border-white/12" />
                <div className="absolute inset-x-[34%] top-[33%] aspect-square rounded-full border border-white/12" />

                <div className="absolute inset-x-0 bottom-0">
                  <div className="rounded-[1.75rem] border border-white/16 bg-[rgba(8,25,72,0.42)] p-5 backdrop-blur-xl md:p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/52">
                      NovaLeads method
                    </p>
                    <span
                      data-process-signal-step
                      className="mt-4 block font-sentient text-6xl tracking-[-0.08em] text-foreground/30"
                    >
                      01
                    </span>
                    <h3
                      data-process-signal-title
                      className="mt-2 font-sentient text-2xl tracking-[-0.05em] text-foreground sm:text-3xl"
                    >
                      {processItems[0].title}
                    </h3>
                    <p
                      data-process-signal-body
                      className="mt-4 max-w-[34ch] text-sm leading-7 text-foreground/72 sm:text-base"
                    >
                      {processItems[0].body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-y border-white/12">
            {processItems.map((item, index) => (
              <article
                key={item.id}
                data-process-step
                data-step-id={item.id}
                data-step-title={item.title}
                data-step-body={item.body}
                data-active={index === 0 ? "true" : "false"}
                className="grid gap-3 border-b border-white/12 py-8 opacity-60 transition-all duration-300 data-[active=true]:translate-x-2 data-[active=true]:opacity-100 last:border-b-0 md:grid-cols-[110px_1fr]"
              >
                <span className="font-sentient text-3xl tracking-[-0.06em] text-foreground/34">
                  {item.id}
                </span>
                <div>
                  <h3 className="font-sentient text-2xl tracking-[-0.05em] text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[40ch] text-base leading-8 text-foreground/74">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="results"
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(8,25,72,0.16),rgba(8,25,72,0.3)_24%,rgba(8,25,72,0.12)_100%)] py-28 md:py-36"
      >
        <div className="container">
          <div className="max-w-[880px]">
            <Pill className="border-white/16 bg-[rgba(233,238,249,0.1)] text-foreground/82">
              What better looks like
            </Pill>
            <h2 className="mt-8 max-w-[12ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(8,25,72,0.24)] sm:text-5xl md:text-6xl lg:text-[5rem]">
              Less friction, stronger follow-through, and growth that feels
              more grounded.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {resultItems.map((item) => (
              <article key={item.title} className={panelClass}>
                <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                <h3 className="font-sentient text-3xl tracking-[-0.06em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-[32ch] text-base leading-8 text-foreground/74">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              Industries we have been closest to
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {industryItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/14 bg-[rgba(233,238,249,0.08)] px-4 py-2 text-sm text-foreground/76"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36">
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-20">
          <div>
            <Pill className="border-white/16 bg-[rgba(233,238,249,0.1)] text-foreground/82">
              Our commitment
            </Pill>
            <blockquote className="mt-8 max-w-[11ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(8,25,72,0.24)] sm:text-5xl md:text-6xl lg:text-[5.15rem]">
              "We do not believe in one-size-fits-all. Every client gets a
              partner who shows up fully."
            </blockquote>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Relationships first. Results always.
            </p>
          </div>

          <div className="lg:pt-24">
            <Pill className="border-white/16 bg-[rgba(233,238,249,0.1)] text-foreground/82">
              Why it feels more personal
            </Pill>
            <h3 className="mt-8 max-w-[13ch] font-sentient text-3xl leading-tight tracking-[-0.06em] text-foreground sm:text-4xl">
              The recent work has been about getting closer to the real
              business, not hiding behind generic marketing language.
            </h3>
            <p className="mt-6 max-w-[40ch] text-base leading-8 text-foreground/74">
              Once we started building from what clients were actually dealing
              with day to day, the work became more honest and more useful. The
              best results came from clearer offers, better systems, and
              genuine partnership rather than more noise.
            </p>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(8,25,72,0.12),rgba(8,25,72,0.28)_20%,rgba(8,25,72,0.16)_100%)] py-28 md:py-36"
      >
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <Pill className="border-white/16 bg-[rgba(233,238,249,0.1)] text-foreground/82">
              Frequently asked
            </Pill>
            <h2 className="mt-8 max-w-[11ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(8,25,72,0.24)] sm:text-5xl md:text-6xl">
              Clear answers, without the agency fog.
            </h2>
          </div>

          <div className="border-y border-white/12">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="border-b border-white/12 py-6 last:border-b-0"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none pr-8 font-sentient text-2xl tracking-[-0.05em] text-foreground sm:text-[2rem] [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-[40ch] text-base leading-8 text-foreground/74">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(8,25,72,0.14),rgba(8,25,72,0.38)_24%,rgba(8,25,72,0.18)_100%)] pb-10 pt-28 md:pb-16 md:pt-36"
      >
        <div className="container border-t border-white/12 pt-16 text-center">
          <Pill className="border-white/16 bg-[rgba(233,238,249,0.1)] text-foreground/82">
            Next step
          </Pill>
          <h2 className="mx-auto mt-8 max-w-[11ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(8,25,72,0.24)] sm:text-5xl md:text-6xl lg:text-[5rem]">
            Book a free 30-minute growth audit.
          </h2>
          <p className="mx-auto mt-8 max-w-[760px] text-pretty text-base leading-8 text-foreground/76 sm:text-lg">
            We will identify the clearest growth opportunity your business may
            be leaving on the table, and the kind of strategy, support, or
            systems that could help you capture it. No pressure. Just clarity.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild>
              <Link data-gl-trigger href="#top">
                Request a growth audit
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#services">Review services</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative pb-10">
        <div className="container flex flex-col gap-5 border-t border-white/12 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-primary shadow-glow shadow-primary/60" />
              <span className="font-sentient text-2xl tracking-[-0.05em]">
                NovaLeads
              </span>
            </div>
            <p className="mt-3 text-sm text-foreground/58">
              Based in South Africa, partnering with businesses locally and
              beyond.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-foreground/64">
            <Link href="#services">Services</Link>
            <Link href="#process">Process</Link>
            <Link href="#results">Results</Link>
            <Link href="#faq">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
