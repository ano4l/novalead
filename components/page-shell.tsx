import Link from "next/link";
import type React from "react";
import { Pill } from "./pill";
import { FluidCTA } from "./fluid-cta";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="relative z-10 min-h-svh bg-white pt-36 text-[#061327]">
      <section className="container pb-16 pt-12 text-center md:pb-24 md:pt-20">
        <Pill>{eyebrow}</Pill>
        <h1 className="mx-auto mt-7 max-w-[10ch] font-sentient text-5xl leading-[0.94] tracking-[-0.08em] md:text-7xl lg:text-[7rem]">
          {title}
        </h1>
        <p className="mx-auto mt-7 max-w-[680px] text-base leading-8 text-[#061327]/62 md:text-lg">
          {intro}
        </p>
      </section>
      {children}
      <section className="container pb-24 pt-10 text-center">
        <div className="nova-card rounded-[2rem] p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/48">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-5 max-w-[11ch] font-sentient text-4xl leading-[0.96] tracking-[-0.08em] md:text-6xl">
            Build what grows next.
          </h2>
          <div className="mt-8">
            <FluidCTA label="Book a growth audit" />
          </div>
          <Link
            href="/"
            className="mt-7 inline-block font-mono text-xs uppercase tracking-[0.18em] text-[#061327]/42 hover:text-[#061327]"
          >
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
