"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";

const serviceItems = [
  {
    id: "01",
    title: "AI receptionists",
    body: "Capture after-hours calls, answer common questions, qualify intent, and route serious leads before they cool off.",
  },
  {
    id: "02",
    title: "Lead generation campaigns",
    body: "Bring the right traffic in through targeted ads and offers designed around actual service demand, not vanity reach.",
  },
  {
    id: "03",
    title: "Landing pages and websites",
    body: "Shape the conversion path so people understand your offer quickly and know exactly how to enquire or book.",
  },
  {
    id: "04",
    title: "Follow-up automation",
    body: "Keep leads warm with reminders, nurture sequences, and CRM updates that reduce admin load for your team.",
  },
] as const;

const processItems = [
  {
    id: "01",
    title: "Attract qualified demand",
    body: "Targeted paid traffic brings the right people into a sharper, conversion-first environment.",
  },
  {
    id: "02",
    title: "Convert the click cleanly",
    body: "Landing pages and forms reduce hesitation, clarify the offer, and guide serious leads into the next step.",
  },
  {
    id: "03",
    title: "Answer and qualify instantly",
    body: "AI receptionists handle missed calls and inbound interest immediately, even when your team is unavailable.",
  },
  {
    id: "04",
    title: "Book, remind, and optimise",
    body: "Calendar flow, reminders, and reporting keep leads moving and show what to improve over time.",
  },
] as const;

const resultItems = [
  { value: "24/7", label: "AI receptionist coverage" },
  { value: "20+", label: "websites and funnels built" },
  { value: "100+", label: "leads generated" },
] as const;

const faqItems = [
  {
    question: "How does NovaLeads generate leads?",
    answer:
      "NovaLeads combines targeted traffic, conversion-focused pages, AI call handling, and automated follow-up so serious enquiries move toward a booking faster.",
  },
  {
    question: "Do I need an existing website?",
    answer:
      "No. A campaign-specific landing page can be built from scratch, or your current website can be improved and connected to the system.",
  },
  {
    question: "What businesses fit this best?",
    answer:
      "Service businesses, local trades, consultants, coaches, and SMEs that depend on a steady flow of enquiries tend to be the best fit.",
  },
  {
    question: "Do you only work in South Africa?",
    answer:
      "No. NovaLeads is based in South Africa and can also support international businesses that need cleaner lead acquisition systems.",
  },
] as const;

const marketItems = [
  "Real estate",
  "Professional services",
  "Fitness",
  "Beauty",
  "Coaching",
  "Home services",
  "Local trades",
] as const;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function Hero() {
  const [hovering, setHovering] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const heroGlowRef = useRef<HTMLDivElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const processLineRef = useRef<HTMLDivElement | null>(null);
  const processDotRef = useRef<HTMLDivElement | null>(null);
  const signalStepRef = useRef<HTMLSpanElement | null>(null);
  const signalTitleRef = useRef<HTMLHeadingElement | null>(null);
  const signalBodyRef = useRef<HTMLParagraphElement | null>(null);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const applyActiveStep = (activeIndex: number) => {
      const current = processItems[activeIndex];

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        step.dataset.active = index === activeIndex ? "true" : "false";
      });

      if (signalStepRef.current) signalStepRef.current.textContent = current.id;
      if (signalTitleRef.current) {
        signalTitleRef.current.textContent = current.title;
      }
      if (signalBodyRef.current) signalBodyRef.current.textContent = current.body;
    };

    const updateScrollEffects = () => {
      const reduceMotion = mediaQuery.matches;

      if (heroRef.current && heroTitleRef.current && heroGlowRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const progress = clamp(
          -rect.top / Math.max(rect.height * 0.62, 1),
          0,
          1
        );

        if (reduceMotion) {
          heroTitleRef.current.style.transform = "";
          heroGlowRef.current.style.transform = "translateX(-50%)";
          heroGlowRef.current.style.opacity = "0.9";
        } else {
          heroTitleRef.current.style.transform = `translate3d(0, ${(
            progress * 36
          ).toFixed(1)}px, 0) scale(${(1 - progress * 0.06).toFixed(3)})`;
          heroGlowRef.current.style.transform = `translateX(-50%) scale(${(
            1 - progress * 0.12
          ).toFixed(3)})`;
          heroGlowRef.current.style.opacity = `${(0.9 - progress * 0.42).toFixed(
            3
          )}`;
        }
      }

      const visibleSteps = stepRefs.current.filter(
        (step): step is HTMLElement => step !== null
      );

      if (!processRef.current || visibleSteps.length === 0) {
        return;
      }

      const processRect = processRef.current.getBoundingClientRect();
      const travel = Math.max(processRect.height - window.innerHeight * 0.72, 1);
      const progress = clamp(
        (window.innerHeight * 0.18 - processRect.top) / travel,
        0,
        1
      );

      if (processLineRef.current) {
        processLineRef.current.style.height = `${(progress * 70).toFixed(2)}%`;
      }

      if (processDotRef.current) {
        processDotRef.current.style.top = `calc(15% + ${(progress * 70).toFixed(
          2
        )}%)`;
      }

      const targetLine = window.innerHeight * 0.42;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      visibleSteps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const middle = rect.top + rect.height / 2;
        const distance = Math.abs(middle - targetLine);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      applyActiveStep(closestIndex);
    };

    const requestUpdate = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScrollEffects();
      });
    };

    const handleMotionChange = () => {
      requestUpdate();
    };

    applyActiveStep(0);
    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mediaQuery.removeEventListener("change", handleMotionChange);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="relative isolate">
      <GL hovering={hovering} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,12,0.14),rgba(5,6,12,0.36)_24%,rgba(5,6,12,0.58)_100%)]" />

      <section
        id="top"
        ref={heroRef}
        className="relative flex min-h-svh scroll-mt-32 items-end overflow-hidden pt-32"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(255,139,90,0.34),transparent_58%)]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[28rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,211,255,0.2),transparent_56%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[8%] top-24 h-[34rem] rounded-[999px] bg-[radial-gradient(circle_at_50%_26%,rgba(5,6,12,0.88),rgba(5,6,12,0.64)_48%,rgba(5,6,12,0.18)_72%,transparent)] blur-2xl" />
        <div
          ref={heroGlowRef}
          className="pointer-events-none absolute bottom-[-12rem] left-1/2 h-[24rem] w-[96rem] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_50%_100%,rgba(255,139,90,0.62),rgba(255,139,90,0.18)_34%,transparent_70%)] blur-3xl"
        />

        <div className="container relative flex min-h-svh flex-col items-center justify-end pb-20 text-center">
          <div className="pointer-events-none absolute inset-x-[12%] bottom-10 top-28 rounded-[3rem] bg-[radial-gradient(circle_at_50%_24%,rgba(8,10,18,0.72),rgba(8,10,18,0.34)_48%,transparent_74%)] blur-xl" />
          <Pill className="relative mb-8 border-white/12 bg-black/28 text-foreground/72">
            AI receptionist + lead systems
          </Pill>
          <p className="relative font-mono text-[11px] uppercase tracking-[0.32em] text-foreground/56">
            Focused on client acquisition
          </p>
          <h1
            ref={heroTitleRef}
            className="relative mt-6 max-w-[10ch] font-sentient text-5xl leading-[0.92] tracking-[-0.08em] text-foreground [text-shadow:0_12px_44px_rgba(0,0,0,0.58)] sm:text-6xl md:text-7xl lg:text-[7.5rem]"
            style={{ transformOrigin: "center top" }}
          >
            Turn missed calls into booked{" "}
            <i className="font-light text-foreground/92">clients</i>
          </h1>
          <p className="relative mt-8 max-w-[760px] text-pretty text-base leading-8 text-foreground/78 [text-shadow:0_6px_30px_rgba(0,0,0,0.4)] sm:text-[1.15rem]">
            NovaLeads builds the engine behind modern service businesses:
            high-converting landing pages, targeted lead generation, AI call
            handling, and automated follow-ups that keep working after hours.
          </p>

          <div className="relative mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <Link href="#contact">Book a free strategy call</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#process">See the system</Link>
            </Button>
          </div>

          <p className="relative mt-10 max-w-[620px] text-sm leading-7 text-foreground/58">
            Based in South Africa and built for service businesses and SMEs
            that care about real enquiries, faster response times, and cleaner
            conversion systems.
          </p>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-black/18 backdrop-blur-md">
        <div className="container grid md:grid-cols-4">
          <div className="px-0 py-6 md:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              Coverage
            </p>
            <strong className="mt-3 block text-2xl tracking-[-0.05em] text-foreground">
              24/7
            </strong>
          </div>
          <div className="border-t border-white/10 px-0 py-6 md:border-l md:border-t-0 md:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              Guarantee
            </p>
            <strong className="mt-3 block text-2xl tracking-[-0.05em] text-foreground">
              10+ leads in 90 days
            </strong>
          </div>
          <div className="border-t border-white/10 px-0 py-6 md:border-l md:border-t-0 md:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              Clients served
            </p>
            <strong className="mt-3 block text-2xl tracking-[-0.05em] text-foreground">
              10+
            </strong>
          </div>
          <div className="border-t border-white/10 px-0 py-6 md:border-l md:border-t-0 md:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              Campaigns launched
            </p>
            <strong className="mt-3 block text-2xl tracking-[-0.05em] text-foreground">
              15+
            </strong>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(5,6,12,0.1),rgba(5,6,12,0.34)_18%,rgba(5,6,12,0.18)_100%)] py-28 md:py-36"
      >
        <div className="container">
          <div className="max-w-[920px]">
            <Pill className="border-white/12 bg-black/24 text-foreground/72">
              What NovaLeads builds
            </Pill>
            <h2 className="mt-8 max-w-[10ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(0,0,0,0.32)] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
              A cleaner path from attention to appointment.
            </h2>
            <p className="mt-8 max-w-[760px] text-pretty text-base leading-8 text-foreground/72 sm:text-lg">
              Every layer is designed to reduce friction: attract the right
              people, answer faster, qualify automatically, and keep the best
              leads moving toward a booking.
            </p>
          </div>

          <div className="mt-16 border-y border-white/10">
            {serviceItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[110px_minmax(0,0.8fr)_minmax(0,1fr)] md:gap-10"
              >
                <span className="font-sentient text-3xl tracking-[-0.06em] text-foreground/34">
                  {item.id}
                </span>
                <h3 className="font-sentient text-2xl tracking-[-0.05em] text-foreground sm:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-[36ch] text-base leading-8 text-foreground/72">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        ref={processRef}
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(5,6,12,0.2),rgba(5,6,12,0.42)_24%,rgba(5,6,12,0.16)_100%)] py-28 md:py-36"
      >
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Pill className="border-white/12 bg-black/24 text-foreground/72">
              How the system moves
            </Pill>
            <h2 className="mt-8 max-w-[11ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(0,0,0,0.3)] sm:text-5xl md:text-6xl">
              One connected journey from ad click to booked consult.
            </h2>
            <p className="mt-8 max-w-[620px] text-base leading-8 text-foreground/72 sm:text-lg">
              The process is simple on purpose. Scroll through the sequence and
              the live readout updates with each stage of the NovaLeads system.
            </p>

            <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/12 bg-black/38 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-md md:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(104,215,255,0.18),transparent_24%),radial-gradient(circle_at_50%_82%,rgba(255,139,90,0.18),transparent_26%)]" />
              <div className="relative min-h-[420px]">
                <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-white/10" />
                <div
                  ref={processLineRef}
                  className="absolute left-1/2 top-[15%] w-px -translate-x-1/2 bg-gradient-to-b from-[#66d8ff] to-[#ff8b5a]"
                  style={{ height: "0%" }}
                />
                <div
                  ref={processDotRef}
                  className="absolute left-1/2 top-[15%] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_36px_rgba(255,139,90,0.55)]"
                />
                <div className="absolute inset-x-[14%] top-[13%] aspect-square rounded-full border border-white/10" />
                <div className="absolute inset-x-[24%] top-[23%] aspect-square rounded-full border border-white/10" />
                <div className="absolute inset-x-[34%] top-[33%] aspect-square rounded-full border border-white/10" />

                <div className="absolute inset-x-0 bottom-0">
                  <div className="rounded-[1.75rem] border border-white/12 bg-black/58 p-5 backdrop-blur-xl md:p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/52">
                      Live sequence
                    </p>
                    <span
                      ref={signalStepRef}
                      className="mt-4 block font-sentient text-6xl tracking-[-0.08em] text-foreground/32"
                    >
                      01
                    </span>
                    <h3
                      ref={signalTitleRef}
                      className="mt-2 font-sentient text-2xl tracking-[-0.05em] text-foreground sm:text-3xl"
                    >
                      {processItems[0].title}
                    </h3>
                    <p
                      ref={signalBodyRef}
                      className="mt-4 max-w-[34ch] text-sm leading-7 text-foreground/72 sm:text-base"
                    >
                      {processItems[0].body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-y border-white/10">
            {processItems.map((item, index) => (
              <article
                key={item.id}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                data-active={index === 0 ? "true" : "false"}
                className="grid gap-3 border-b border-white/10 py-8 opacity-60 transition-all duration-300 data-[active=true]:translate-x-2 data-[active=true]:opacity-100 last:border-b-0 md:grid-cols-[110px_1fr]"
              >
                <span className="font-sentient text-3xl tracking-[-0.06em] text-foreground/34">
                  {item.id}
                </span>
                <div>
                  <h3 className="font-sentient text-2xl tracking-[-0.05em] text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[40ch] text-base leading-8 text-foreground/72">
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
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(5,6,12,0.18),rgba(5,6,12,0.34)_24%,rgba(5,6,12,0.16)_100%)] py-28 md:py-36"
      >
        <div className="container">
          <div className="max-w-[860px]">
            <Pill className="border-white/12 bg-black/24 text-foreground/72">
              Outcomes over noise
            </Pill>
            <h2 className="mt-8 max-w-[11ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(0,0,0,0.3)] sm:text-5xl md:text-6xl lg:text-[5rem]">
              Built for measurable lead flow, booked appointments, and less
              admin chaos.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 border-y border-white/10 py-10 md:grid-cols-3">
            {resultItems.map((item) => (
              <article key={item.label}>
                <strong className="block font-sentient text-5xl tracking-[-0.08em] text-foreground sm:text-6xl">
                  {item.value}
                </strong>
                <p className="mt-4 max-w-[18ch] text-base leading-8 text-foreground/72">
                  {item.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {marketItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-black/24 px-4 py-2 text-sm text-foreground/78"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36">
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <Pill className="border-white/12 bg-black/24 text-foreground/72">
              What clients feel
            </Pill>
            <blockquote className="mt-8 max-w-[10ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(0,0,0,0.32)] sm:text-5xl md:text-6xl lg:text-[5.25rem]">
              "We finally started getting real leads instead of just likes."
            </blockquote>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              Service-based business
            </p>
          </div>

          <div className="lg:pt-28">
            <Pill className="border-white/12 bg-black/24 text-foreground/72">
              Why it works
            </Pill>
            <h3 className="mt-8 max-w-[13ch] font-sentient text-3xl leading-tight tracking-[-0.06em] text-foreground sm:text-4xl">
              NovaLeads feels closer to a revenue system than a typical
              marketing retainer.
            </h3>
            <p className="mt-6 max-w-[34ch] text-base leading-8 text-foreground/72">
              The whole stack is pointed at one thing: attract better-fit
              demand, respond faster, and help your business convert more of
              the leads that already want help.
            </p>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(5,6,12,0.12),rgba(5,6,12,0.3)_20%,rgba(5,6,12,0.18)_100%)] py-28 md:py-36"
      >
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <Pill className="border-white/12 bg-black/24 text-foreground/72">
              Frequently asked
            </Pill>
            <h2 className="mt-8 max-w-[11ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(0,0,0,0.3)] sm:text-5xl md:text-6xl">
              Clear answers, without the agency fog.
            </h2>
          </div>

          <div className="border-y border-white/10">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="border-b border-white/10 py-6 last:border-b-0"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none pr-8 font-sentient text-2xl tracking-[-0.05em] text-foreground sm:text-[2rem] [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-[38ch] text-base leading-8 text-foreground/72">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative scroll-mt-32 bg-[linear-gradient(180deg,rgba(5,6,12,0.16),rgba(5,6,12,0.42)_24%,rgba(5,6,12,0.2)_100%)] pb-10 pt-28 md:pb-16 md:pt-36"
      >
        <div className="container border-t border-white/10 pt-16 text-center">
          <Pill className="border-white/12 bg-black/24 text-foreground/72">
            Ready to scale
          </Pill>
          <h2 className="mx-auto mt-8 max-w-[10ch] font-sentient text-4xl leading-[0.98] tracking-[-0.08em] text-foreground [text-shadow:0_10px_34px_rgba(0,0,0,0.32)] sm:text-5xl md:text-6xl lg:text-[5rem]">
            Build a lead system that works like staff, not guesswork.
          </h2>
          <p className="mx-auto mt-8 max-w-[760px] text-pretty text-base leading-8 text-foreground/74 sm:text-lg">
            If your business depends on enquiries, response speed, and
            consistent bookings, NovaLeads can help you create a calmer,
            stronger acquisition engine.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <Link href="#top">Request a strategy call</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#services">Review services</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative pb-10">
        <div className="container flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-3">
            <span className="size-2.5 rounded-full bg-primary shadow-glow shadow-primary/50" />
            <span className="font-sentient text-2xl tracking-[-0.05em]">
              NovaLeads
            </span>
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
