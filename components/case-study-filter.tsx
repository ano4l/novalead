"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { caseStudyIndustries, caseStudies } from "@/lib/site-content";

const allFilter = "All";
const filters = [allFilter, ...caseStudyIndustries] as const;

type Filter = (typeof filters)[number];

export function CaseStudyFilter() {
  const [activeFilter, setActiveFilter] = useState<Filter>(allFilter);

  const visibleStudies = useMemo(() => {
    if (activeFilter === allFilter) {
      return caseStudies;
    }

    return caseStudies.filter((study) => study.industry === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={[
                "h-11 shrink-0 rounded-full border px-4 font-mono text-xs uppercase tracking-[0.16em] transition",
                isActive
                  ? "border-primary bg-primary text-white shadow-[0_14px_34px_rgba(225,38,45,0.22)]"
                  : "border-[#061327]/12 bg-white/78 text-[#061327]/58 hover:border-[#061327]/28 hover:text-[#061327]",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleStudies.map((study) => {
          const videoEmbedUrl =
            "videoEmbedUrl" in study && typeof study.videoEmbedUrl === "string"
              ? study.videoEmbedUrl
              : "";
          const image =
            "image" in study && typeof study.image === "string"
              ? study.image
              : "";

          return (
            <article
              key={study.slug}
              className="nova-card flex min-h-[560px] flex-col overflow-hidden rounded-[2rem] p-5"
            >
              {videoEmbedUrl ? (
                <iframe
                  src={videoEmbedUrl}
                  title={`${study.title} video testimonial`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="aspect-video w-full rounded-[1.5rem] border border-[#061327]/10 bg-[#061327]/8"
                />
              ) : image ? (
                <div className="flex min-h-56 items-center justify-center rounded-[1.5rem] border border-[#061327]/10 bg-white p-6">
                  <Image
                    src={image}
                    alt={`${study.client} logo`}
                    width={640}
                    height={420}
                    className="max-h-40 w-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative flex min-h-56 overflow-hidden rounded-[1.5rem] border border-[#061327]/10 bg-white p-6">
                  <div className="hero-signal absolute inset-x-6 top-12 h-28 opacity-70" />
                  <div className="relative z-10 mt-auto">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#061327]/42">
                      Case study slot
                    </p>
                    <p className="mt-3 font-sentient text-4xl italic tracking-[-0.07em] text-primary">
                      {study.industry}
                    </p>
                  </div>
                </div>
              )}

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#0057B8]/20 bg-[#0057B8]/8 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#0057B8]">
                {study.industry}
              </span>
              <span className="rounded-full border border-[#061327]/10 bg-white/72 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#061327]/50">
                {study.status}
              </span>
            </div>

            <h2 className="mt-6 font-sentient text-4xl leading-[0.98] tracking-[-0.07em] text-[#061327]">
              {study.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#061327]/62">
              {study.summary}
            </p>

            <div className="mt-6 grid gap-3 text-sm leading-6 text-[#061327]/66">
              <div className="rounded-2xl border border-[#061327]/10 bg-white/68 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/42">
                  Work
                </p>
                <p className="mt-2">{study.work}</p>
              </div>
              <div className="rounded-2xl border border-[#061327]/10 bg-white/68 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/42">
                  Outcome
                </p>
                <p className="mt-2">{study.outcome}</p>
              </div>
            </div>

            <blockquote className="mt-auto pt-6 font-sentient text-2xl italic leading-tight tracking-[-0.05em] text-primary">
              &quot;{study.pullQuote}&quot;
            </blockquote>
            </article>
          );
        })}
      </div>
    </div>
  );
}
