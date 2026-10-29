"use client";

import Link from "next/link";
import { useState } from "react";
import { HeroBackground } from "./hero-background";
import { Pill } from "./pill";
import { FluidCTA } from "./fluid-cta";
import { HomeSections } from "./home-sections";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { useTranslation } from "@/components/language-provider";

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

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const { t } = useTranslation();

  return (
    <main className="relative z-10">
      <section className="relative flex min-h-[min(900px,100svh)] flex-col justify-between overflow-hidden">
        <HeroBackground hovering={hovering} />
        <div className="hero-signal pointer-events-none absolute inset-x-[16%] top-[22%] z-[1] h-44 opacity-80" />
        <HeroTrendline />
        <div className="container relative z-10 my-auto pb-20 pt-40 text-center">
          <Pill className="mb-6 h-auto min-h-8 max-w-full py-1 text-xs sm:text-sm">{t("NovaLeads Growth Partner")}</Pill>
          <h1 className="mx-auto max-w-[920px] font-sentient text-5xl leading-[0.93] tracking-[-0.08em] text-[#061327] sm:text-6xl md:text-7xl lg:text-[7.5rem]">
            {t("Unlock your")} <br />
            <i className="font-light">{t("future")}</i> {t("growth")}
          </h1>
          <p className="mx-auto mt-8 max-w-[650px] text-balance font-mono text-sm leading-7 text-[#061327]/62 sm:text-base">
            {t(
              "NovaLeads Systems builds the AI, software and growth systems that help South African businesses and institutions find opportunity, manage risk and grow with confidence."
            )}
          </p>

          <div
            className="mt-12"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <FluidCTA />
          </div>
          <Link href="#solutions" className="mt-6 inline-block rounded-full border border-[#061327]/25 bg-white/65 px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[#061327] hover:border-primary hover:text-primary">Explore our solutions</Link>
          <HeroStatBlock />
        </div>
      </section>

      <HomeSections />
    </main>
  );
}
