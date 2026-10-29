"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedBackground = dynamic(() => import("./gl").then(mod => mod.GL), { ssr: false });

export function HeroBackground({ hovering }: { hovering: boolean }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAnimate(!motionQuery.matches);
    sync();
    motionQuery.addEventListener("change", sync);
    return () => motionQuery.removeEventListener("change", sync);
  }, []);
  return <><div className="hero-background-static pointer-events-none absolute inset-0" aria-hidden="true" />{animate && <AnimatedBackground hovering={hovering} />}</>;
}
