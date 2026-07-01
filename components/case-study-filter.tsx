"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useMemo, useState } from "react";
import { caseStudyIndustries, caseStudies } from "@/lib/site-content";

const allFilter = "All";
const filters = [allFilter, ...caseStudyIndustries] as const;

type Filter = (typeof filters)[number];

export function CaseStudyFilter() {
  const [activeFilter, setActiveFilter] = useState<Filter>(allFilter);
  const [expandedStudySlug, setExpandedStudySlug] = useState<string | null>(
    null
  );

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
              onClick={() => {
                setActiveFilter(filter);
                setExpandedStudySlug(null);
              }}
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
          const videoTitle =
            "videoTitle" in study && typeof study.videoTitle === "string"
              ? study.videoTitle
              : `${study.title} project video`;
          const pullQuote =
            "pullQuote" in study && typeof study.pullQuote === "string"
              ? study.pullQuote
              : "";
          const isExpanded = expandedStudySlug === study.slug;
          const isLaunchingSoon = study.status
            .toLowerCase()
            .includes("launching soon");

          return (
            <article
              key={study.slug}
              className="nova-card flex min-h-[560px] flex-col overflow-hidden rounded-[2rem] p-5"
            >
              {videoEmbedUrl && isExpanded ? (
                <div className="relative overflow-hidden rounded-[1.5rem] border border-[#061327]/10 bg-[#061327]/8">
                  <iframe
                    src={videoEmbedUrl}
                    title={videoTitle}
                    loading="lazy"
                    allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-64 w-full border-0 bg-[#061327]/8"
                  />
                  <button
                    type="button"
                    onClick={() => setExpandedStudySlug(null)}
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white text-[#061327] shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition hover:bg-[#061327] hover:text-white"
                    aria-label={`Collapse ${study.client} demo video`}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              ) : image ? (
                videoEmbedUrl ? (
                  <button
                    type="button"
                    onClick={() => setExpandedStudySlug(study.slug)}
                    className="flex min-h-56 w-full cursor-pointer items-center justify-center rounded-[1.5rem] border border-[#061327]/10 bg-white p-6 text-left transition hover:border-[#0057B8]/28 focus:outline-none focus:ring-2 focus:ring-[#0057B8]/30"
                    aria-label={`Expand ${study.client} demo video`}
                    aria-expanded={isExpanded}
                  >
                    <Image
                      src={image}
                      alt={`${study.client} logo`}
                      width={640}
                      height={420}
                      className="max-h-40 w-full object-contain"
                    />
                  </button>
                ) : (
                  <div className="flex min-h-56 items-center justify-center rounded-[1.5rem] border border-[#061327]/10 bg-white p-6">
                    <Image
                      src={image}
                      alt={`${study.client} logo`}
                      width={640}
                      height={420}
                      className="max-h-40 w-full object-contain"
                    />
                  </div>
                )
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
              <span
                className={[
                  "rounded-full border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em]",
                  isLaunchingSoon
                    ? "border-[#D97706]/24 bg-[#F59E0B]/12 text-[#92400E]"
                    : "border-[#061327]/10 bg-white/72 text-[#061327]/50",
                ].join(" ")}
              >
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

            {videoEmbedUrl ? (
              <button
                type="button"
                onClick={() =>
                  setExpandedStudySlug(isExpanded ? null : study.slug)
                }
                className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-4 font-mono text-xs uppercase tracking-[0.14em] text-white shadow-[0_18px_34px_rgba(225,38,45,0.2)] transition hover:bg-primary/90"
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <X className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                )}
                {isExpanded ? "Hide demo" : "Watch demo"}
              </button>
            ) : null}

            {pullQuote ? (
              <blockquote className="mt-auto pt-6 font-sentient text-2xl italic leading-tight tracking-[-0.05em] text-primary">
                &quot;{pullQuote}&quot;
              </blockquote>
            ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
