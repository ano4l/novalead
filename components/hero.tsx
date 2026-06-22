"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GL } from "./gl";
import { Pill } from "./pill";
import { FluidCTA } from "./fluid-cta";
import { useSiteSettings } from "@/hooks/use-site-settings";
import {
  clients,
  novaProducts,
  processSteps,
  services,
} from "@/lib/site-content";

const storySteps = [
  {
    step: "01",
    eyebrow: "The signal",
    title: "Good businesses lose momentum in the handoff.",
    body:
      "A visitor lands, an enquiry arrives, a sales conversation starts, and the follow-up depends on too many manual steps.",
    metric: "Faster response",
  },
  {
    step: "02",
    eyebrow: "The system",
    title: "Growth needs one connected operating layer.",
    body:
      "NovaLeads connects brand, website, software, automated business processes and AI auditing, lead generation, and automation so the next step is obvious.",
    metric: "Cleaner flow",
  },
  {
    step: "03",
    eyebrow: "The shift",
    title: "The business starts moving with less drag.",
    body:
      "The offer is easier to understand, enquiries are easier to capture, and the team spends more time on real opportunities.",
    metric: "Sharper execution",
  },
] as const;

function HeroTrendline() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[8%] z-[2] h-[30rem] opacity-100 md:bottom-[2%] md:h-[42rem]">
      <svg
        className="hero-trendline h-full w-full"
        viewBox="0 0 1440 520"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="trendline-echo trendline-echo-one"
          d="M74 416 C220 380 326 286 450 294 C586 302 642 354 778 202 C900 66 1064 74 1368 100"
          stroke="url(#hero-growth-gradient-soft)"
          strokeLinecap="round"
          strokeWidth="22"
        />
        <path
          className="trendline-echo trendline-echo-two"
          d="M74 416 C220 380 326 286 450 294 C586 302 642 354 778 202 C900 66 1064 74 1368 100"
          stroke="url(#hero-growth-gradient-soft)"
          strokeLinecap="round"
          strokeWidth="13"
        />
        <path
          d="M74 416 C220 380 326 286 450 294 C586 302 642 354 778 202 C900 66 1064 74 1368 100"
          stroke="rgba(0,87,184,0.2)"
          strokeWidth="3"
        />
        <path
          className="trendline-draw"
          d="M74 416 C220 380 326 286 450 294 C586 302 642 354 778 202 C900 66 1064 74 1368 100"
          stroke="url(#hero-growth-gradient)"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          className="trendline-comet"
          d="M74 416 C220 380 326 286 450 294 C586 302 642 354 778 202 C900 66 1064 74 1368 100"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeWidth="5"
        />
        {[
          [450, 294],
          [778, 202],
          [1064, 74],
          [1368, 100],
        ].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle
              className="trendline-node-halo"
              cx={cx}
              cy={cy}
              r={index === 3 ? 24 : 19}
              fill={index % 2 === 0 ? "#0057B8" : "#E1262D"}
              style={{ animationDelay: `${0.24 + index * 0.2}s` }}
            />
            <circle
              className="trendline-node"
              cx={cx}
              cy={cy}
              r={index === 3 ? 11 : 8}
              fill={index % 2 === 0 ? "#0057B8" : "#E1262D"}
              style={{ animationDelay: `${0.24 + index * 0.2}s` }}
            />
          </g>
        ))}
        <defs>
          <linearGradient
            id="hero-growth-gradient"
            x1="74"
            x2="1368"
            y1="416"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0057B8" stopOpacity="0.7" />
            <stop offset="0.44" stopColor="#0B7CFF" />
            <stop offset="1" stopColor="#E1262D" />
          </linearGradient>
          <linearGradient
            id="hero-growth-gradient-soft"
            x1="74"
            x2="1368"
            y1="416"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0057B8" stopOpacity="0.04" />
            <stop offset="0.52" stopColor="#0B7CFF" stopOpacity="0.18" />
            <stop offset="1" stopColor="#E1262D" stopOpacity="0.16" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeroStatBlock() {
  const { homepageHeroStat } = useSiteSettings();

  if (!homepageHeroStat.value) {
    return null;
  }

  return (
    <div className="mx-auto mt-8 grid max-w-[520px] gap-3 rounded-[1.5rem] border border-[#061327]/10 bg-white/72 p-5 backdrop-blur-md sm:grid-cols-[0.8fr_1.2fr] sm:items-center sm:text-left">
      <p className="font-sentient text-5xl leading-none tracking-[-0.08em] text-primary">
        {homepageHeroStat.value}
      </p>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#061327]/46">
          {homepageHeroStat.label}
        </p>
        <p className="mt-2 text-sm leading-6 text-[#061327]/58">
          {homepageHeroStat.supportingText}
        </p>
      </div>
    </div>
  );
}

function StoryVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="story-visual mt-10 p-6">
        <div className="relative z-10 grid h-full min-h-[190px] content-center gap-5">
          {["Website visit", "Missed follow-up", "Cold opportunity"].map(
            (item, itemIndex) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-[#061327]/10 bg-white/60 p-4"
              >
                <span className="flow-node h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(225,38,45,0.6)]" />
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#061327]/66">
                  {itemIndex + 1}. {item}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="story-visual mt-10 p-6">
        <div className="relative z-10 flex min-h-[190px] items-center justify-center">
          <div className="relative h-40 w-40 rounded-full border border-[#0B7CFF]/55">
            {["Brand", "Web", "AI", "Sales"].map((item, nodeIndex) => (
              <div
                key={item}
                className="flow-node absolute flex h-16 w-16 items-center justify-center rounded-full border border-[#061327]/12 bg-[#0057B8]/12 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#061327]"
                style={{
                  left: `${50 + Math.cos((nodeIndex / 4) * Math.PI * 2) * 48}%`,
                  top: `${50 + Math.sin((nodeIndex / 4) * Math.PI * 2) * 48}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {item}
              </div>
            ))}
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-center font-mono text-[10px] uppercase tracking-[0.12em] text-white shadow-[0_0_44px_rgba(225,38,45,0.48)]">
              Growth
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="story-visual mt-10 p-6">
      <div className="relative z-10 flex min-h-[190px] items-end gap-4">
        {[34, 52, 72, 92].map((height, barIndex) => (
          <div
            key={height}
            className="growth-bar flex-1 rounded-t-2xl bg-[linear-gradient(180deg,#E1262D,#0057B8)] shadow-[0_0_26px_rgba(0,87,184,0.28)]"
            style={{
              height: `${height}%`,
              animationDelay: `${barIndex * 0.18}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ScrollStory() {
  return (
    <section className="relative z-10 border-y border-[#061327]/10 bg-white/82 py-24 backdrop-blur-md md:py-36">
      <div className="container grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Pill>Growth story</Pill>
          <h2 className="mt-7 max-w-[10ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] text-[#061327] md:text-7xl">
            From signal to system.
          </h2>
          <p className="mt-6 max-w-[520px] text-base leading-8 text-[#061327]/62">
            Scroll through the growth path: where momentum leaks, how the
            operating layer connects, and what changes once the system is live.
          </p>
          <div className="relative mt-10 hidden h-44 overflow-hidden rounded-[1.5rem] border border-[#061327]/12 bg-white/72 lg:block">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 620 190"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M28 146 C116 136 142 92 226 102 S358 126 424 62 S538 31 594 42"
                stroke="rgba(6,19,39,0.16)"
                strokeWidth="2"
              />
              <path
                className="growth-line"
                d="M28 146 C116 136 142 92 226 102 S358 126 424 62 S538 31 594 42"
                stroke="#E1262D"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
            <div className="hero-signal absolute inset-x-8 bottom-0 h-20" />
          </div>
        </div>

        <div className="grid gap-[45vh] pb-[12vh] pt-4">
          {storySteps.map((item, index) => (
            <article
              key={item.step}
              className="story-card nova-card min-h-[58vh] rounded-[2rem] p-7 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/42">
                    {item.step} / {item.eyebrow}
                  </p>
                  <h3 className="mt-8 max-w-[11ch] font-sentient text-5xl leading-[0.94] tracking-[-0.08em] text-[#061327] md:text-6xl">
                    {item.title}
                  </h3>
                </div>
                <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-primary sm:inline-flex">
                  {item.metric}
                </span>
              </div>
              <p className="mt-16 max-w-[54ch] text-lg leading-8 text-[#061327]/66">
                {item.body}
              </p>
              <StoryVisual index={index} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PoweredByNova() {
  return (
    <section
      id="products"
      className="relative z-10 border-y border-[#061327]/10 bg-white/90 py-24 backdrop-blur-md md:py-36"
    >
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Pill>Powered by Nova</Pill>
          <h2 className="mt-7 max-w-[11ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] text-[#061327] md:text-7xl">
            Products that keep growth moving.
          </h2>
          <p className="mt-6 max-w-[560px] text-base leading-8 text-[#061327]/62">
            SiteRent, BizStack, and Auris are Nova-built products: practical software
            layers for businesses that need a sharper web presence, a
            cleaner operating system, and a receptionist that never sleeps.
          </p>

          <div className="product-panel nova-card relative mt-10 overflow-hidden rounded-[2rem] p-5">
            <div className="relative z-10 rounded-[1.5rem] border border-[#061327]/10 bg-white p-5">
              <Image
                src="/poweredbynova.jpeg"
                alt="Powered by Nova products: SiteRent and BizStack"
                width={720}
                height={360}
                className="mx-auto max-h-52 w-full object-contain"
              />
            </div>
            <svg
              className="pointer-events-none absolute inset-x-4 bottom-4 h-28"
              viewBox="0 0 520 130"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M12 104 C82 94 108 66 176 73 S292 88 350 38 S446 16 508 24"
                stroke="rgba(6,19,39,0.14)"
                strokeWidth="2"
                fill="none"
              />
              <path
                className="product-growth-line"
                d="M12 104 C82 94 108 66 176 73 S292 88 350 38 S446 16 508 24"
                stroke="url(#product-growth-gradient)"
                strokeLinecap="round"
                strokeWidth="5"
                fill="none"
              />
              <defs>
                <linearGradient
                  id="product-growth-gradient"
                  x1="12"
                  x2="508"
                  y1="104"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0057B8" />
                  <stop offset="1" stopColor="#E1262D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="grid gap-[26vh] pb-[10vh] pt-4">
          {novaProducts.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="product-story-card nova-card group min-h-[62vh] rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/45 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/42">
                    0{index + 1} / {product.eyebrow}
                  </p>
                  <h3 className="mt-8 font-sentient text-6xl leading-none tracking-[-0.08em] text-[#061327] md:text-7xl">
                    {product.name}
                  </h3>
                </div>
                <span className="hidden rounded-full border border-[#0057B8]/25 bg-[#0057B8]/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[#0057B8] sm:inline-flex">
                  Powered
                </span>
              </div>

              <p className="mt-14 max-w-[56ch] text-lg leading-8 text-[#061327]/66">
                {product.short}
              </p>

              <div className="mt-10 flex min-h-48 items-center justify-center rounded-[1.5rem] border border-[#061327]/10 bg-white p-5">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  className="max-h-40 w-full object-contain"
                />
              </div>

              <div className="mt-10 grid gap-3">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-[#061327]/12 bg-white/70 px-5 py-4"
                  >
                    <span className="text-base text-[#061327]/76">
                      {feature}
                    </span>
                    <span className="h-2 w-12 rounded-full bg-[linear-gradient(90deg,#0057B8,#E1262D)]" />
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-end gap-3">
                {[36, 50, 68, 86].map((height, barIndex) => (
                  <span
                    key={height}
                    className="product-bar flex-1 rounded-t-2xl bg-[linear-gradient(180deg,#E1262D,#0057B8)]"
                    style={{
                      height: `${height + index * 6}px`,
                      animationDelay: `${barIndex * 0.16}s`,
                    }}
                  />
                ))}
              </div>

              <span className="mt-10 inline-block font-mono text-xs uppercase text-primary opacity-70 transition group-hover:opacity-100">
                View product
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <main className="relative z-10">
      <section className="relative flex min-h-svh flex-col justify-between overflow-hidden">
        <GL hovering={hovering} />
        <div className="hero-signal pointer-events-none absolute inset-x-[16%] top-[22%] z-[1] h-44 opacity-80" />
        <HeroTrendline />
        <div className="container relative z-10 mt-auto pb-16 pt-36 text-center">
          <Pill className="mb-6">NovaLeads Growth Partner</Pill>
          <h1 className="mx-auto max-w-[920px] font-sentient text-5xl leading-[0.93] tracking-[-0.08em] text-[#061327] sm:text-6xl md:text-7xl lg:text-[7.5rem]">
            Unlock your <br />
            <i className="font-light">future</i> growth
          </h1>
          <p className="mx-auto mt-8 max-w-[650px] text-balance font-mono text-sm leading-7 text-[#061327]/62 sm:text-base">
            We are the future and the future is here. Leads, web, software, AI
            reception, brand, strategy, and automation built as one growth
            system.
          </p>

          <div
            className="mt-12"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <FluidCTA />
          </div>
          <HeroStatBlock />
        </div>
      </section>

      <ScrollStory />

      <PoweredByNova />

      <section className="relative z-10 border-t border-[#061327]/10 bg-white/78 py-24 backdrop-blur-md md:py-32">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Pill>Services</Pill>
              <h2 className="mt-7 max-w-[11ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] text-[#061327] md:text-7xl">
                Built around growth, not noise.
              </h2>
            </div>
            <Link
              href="/services/lead-generation"
              className="font-mono text-sm uppercase text-primary hover:text-primary/80"
            >
              Explore services
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="nova-card group min-h-[330px] rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/45 md:min-h-[30rem]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/42 md:min-h-9">
                  0{index + 1} / {service.eyebrow}
                </p>
                <h3 className="mt-8 font-sentient text-4xl leading-none tracking-[-0.07em] text-[#061327] md:min-h-36">
                  {service.title}
                </h3>
                <p className="mt-12 min-h-0 max-w-[30ch] text-base leading-7 text-[#061327]/64 md:min-h-28">
                  {service.short}
                </p>
                <span className="mt-7 inline-block font-mono text-xs uppercase text-primary opacity-70 transition group-hover:opacity-100">
                  View detail
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Pill>People worked with</Pill>
            <h2 className="mt-7 max-w-[12ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] text-[#061327] md:text-7xl">
              Proof in the work.
            </h2>
            <p className="mt-6 max-w-[520px] text-base leading-8 text-[#061327]/62">
              Logos, project notes, and testimonials live on their own pages so
              each piece of work can stand on its own.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="font-mono text-sm uppercase text-primary hover:text-primary/80"
              >
                View work
              </Link>
              <Link
                href="/testimonials"
                className="font-mono text-sm uppercase text-[#061327]/58 hover:text-[#061327]"
              >
                Testimonials
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {clients.map((client) => (
              <article
                key={client.name}
                className="nova-card rounded-[2rem] p-5 text-center"
              >
                <div className="flex min-h-52 items-center justify-center rounded-[1.5rem] bg-white p-5">
                  <Image
                    src={client.image}
                    alt={`${client.name} logo`}
                    width={520}
                    height={320}
                    className="max-h-40 w-full object-contain"
                  />
                </div>
                <p className="mt-4 font-sentient text-2xl italic tracking-[-0.05em] text-primary">
                  {client.work}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#061327]/10 bg-white/86 py-24 backdrop-blur-md md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Pill>Method</Pill>
            <h2 className="mt-7 max-w-[10ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] text-[#061327] md:text-7xl">
              Diagnose. Design. Deploy.
            </h2>
            <Link
              href="/process"
              className="mt-8 inline-block font-mono text-sm uppercase text-primary hover:text-primary/80"
            >
              See process
            </Link>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="nova-card grid gap-4 rounded-[2rem] p-7 md:grid-cols-[90px_1fr]"
              >
                <span className="font-sentient text-5xl tracking-[-0.08em] text-primary/80">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-sentient text-4xl tracking-[-0.07em] text-[#061327]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[48ch] text-base leading-7 text-[#061327]/62">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-24 text-center md:py-32">
        <div className="container">
          <Pill>Next step</Pill>
          <h2 className="mx-auto mt-7 max-w-[10ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] text-[#061327] md:text-7xl">
            Let us map what grows next.
          </h2>
          <p className="mx-auto mt-6 max-w-[580px] text-base leading-8 text-[#061327]/62">
            The audit turns growth ambition into a practical plan across lead
            flow, websites, software, AI support, and automation.
          </p>
          <div
            className="mt-10"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <FluidCTA label="Start the audit" />
          </div>
        </div>
      </section>
    </main>
  );
}
