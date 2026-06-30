"use client";

import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { useMemo, useState } from "react";

type VideoTestimonial = {
  client: string;
  eyebrow: string;
  title: string;
  description: string;
  duration: string;
  videoId: string;
  playerHash: string;
  vimeoUrl: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  poster: string;
  posterAlt: string;
  posterWidth: number;
  posterHeight: number;
};

type VideoTestimonialPanelProps = {
  video: VideoTestimonial;
};

export function VideoTestimonialPanel({ video }: VideoTestimonialPanelProps) {
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);

  const playerUrl = useMemo(() => {
    const params = new URLSearchParams({
      h: video.playerHash,
      autoplay: "1",
      badge: "0",
      byline: "0",
      dnt: "1",
      portrait: "0",
      title: "0",
    });

    return `https://player.vimeo.com/video/${video.videoId}?${params.toString()}`;
  }, [video.playerHash, video.videoId]);

  return (
    <article className="nova-card overflow-hidden rounded-[2rem] p-4 md:p-5">
      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#020816]">
          {isPlayerLoaded ? (
            <iframe
              src={playerUrl}
              title={`${video.client} video testimonial`}
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="aspect-[4/3] w-full border-0 bg-[#020816] sm:aspect-[1280/581]"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlayerLoaded(true)}
              className="group relative block aspect-[4/3] w-full overflow-hidden text-left sm:aspect-[1280/581]"
              aria-label={`Play ${video.client} video testimonial`}
            >
              <Image
                src={video.poster}
                alt={video.posterAlt}
                width={video.posterWidth}
                height={video.posterHeight}
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,22,0.78),rgba(2,8,22,0.2)_48%,rgba(2,8,22,0.66))]" />
              <span className="hero-signal absolute inset-x-8 bottom-0 h-24 opacity-70" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/88 px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.24)] backdrop-blur-md">
                <Image
                  src={video.logo}
                  alt={video.logoAlt}
                  width={video.logoWidth}
                  height={video.logoHeight}
                  className="h-9 w-16 object-contain"
                />
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-[#061327]/64 sm:inline">
                  {video.duration}
                </span>
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/35 bg-white text-primary shadow-[0_22px_70px_rgba(225,38,45,0.34)] transition duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                  <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                </span>
              </span>
              <span className="absolute inset-x-5 bottom-5 hidden max-w-[420px] text-white sm:inset-x-7 sm:bottom-7 sm:block">
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/68">
                  {video.eyebrow}
                </span>
                <span className="mt-2 block font-sentient text-3xl leading-none sm:text-5xl">
                  {video.client}
                </span>
              </span>
            </button>
          )}
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#061327]/10 bg-white p-6 md:p-7">
          <div className="hero-signal absolute inset-x-8 top-8 h-20 opacity-50" />
          <div className="relative z-10">
            <div className="flex min-h-32 items-center justify-center rounded-[1.25rem] border border-[#061327]/10 bg-white p-4">
              <Image
                src={video.logo}
                alt={video.logoAlt}
                width={video.logoWidth}
                height={video.logoHeight}
                className="max-h-28 w-full object-contain"
              />
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[#061327]/44">
              {video.eyebrow}
            </p>
            <h2 className="mt-3 font-sentient text-4xl leading-none text-[#061327] md:text-5xl">
              {video.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#061327]/62">
              {video.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlayerLoaded(true)}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 font-mono text-xs uppercase tracking-[0.14em] text-white shadow-[0_18px_34px_rgba(225,38,45,0.22)] transition hover:bg-primary/90"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                Watch
              </button>
              <a
                href={video.vimeoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[#061327]/12 bg-white px-4 font-mono text-xs uppercase tracking-[0.14em] text-[#061327]/58 transition hover:border-[#061327]/26 hover:text-[#061327]"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Vimeo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
