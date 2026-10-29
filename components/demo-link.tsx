"use client";
import { trackSiteEvent } from "@/lib/analytics";

export function DemoLink() {
  return <a href="https://nova-intelligence-sandy.vercel.app" target="_blank" rel="noopener noreferrer" onClick={() => trackSiteEvent("open_lawos_demo")} className="inline-flex rounded-full border border-[#061327]/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[#061327] transition hover:border-primary hover:text-primary">Open the live demo ↗</a>;
}
