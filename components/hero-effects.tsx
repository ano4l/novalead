"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LazyGL = dynamic(() => import("./gl").then((mod) => mod.GL), {
  ssr: false,
});

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

type Quality = "medium" | "high";

type ExtendedNavigator = Navigator & {
  connection?: {
    saveData?: boolean;
  };
  deviceMemory?: number;
};

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

function shouldRenderBackground() {
  const nav = navigator as ExtendedNavigator;

  return !(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 767px)").matches ||
    nav.connection?.saveData ||
    (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4)
  );
}

function getQuality(): Quality {
  const nav = navigator as ExtendedNavigator;
  const highMemory =
    typeof nav.deviceMemory !== "number" || nav.deviceMemory > 6;

  return window.innerWidth >= 1440 && highMemory ? "high" : "medium";
}

export function HeroEffects() {
  const [hovering, setHovering] = useState(false);
  const [renderGl, setRenderGl] = useState(false);
  const [quality, setQuality] = useState<Quality>("medium");

  useEffect(() => {
    const idleWindow = window as IdleWindow;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    let timeoutId = 0;
    let idleId = 0;

    const syncBackground = () => {
      if (!shouldRenderBackground()) {
        setRenderGl(false);
        setHovering(false);
        return;
      }

      setQuality(getQuality());
      setRenderGl(true);
    };

    if (idleWindow.requestIdleCallback) {
      idleId = idleWindow.requestIdleCallback(syncBackground, {
        timeout: 1200,
      });
    } else {
      timeoutId = window.setTimeout(syncBackground, 250);
    }

    const handleViewportChange = () => {
      syncBackground();
    };

    window.addEventListener("resize", handleViewportChange);
    mediaQuery.addEventListener("change", handleViewportChange);
    mobileQuery.addEventListener("change", handleViewportChange);

    return () => {
      window.removeEventListener("resize", handleViewportChange);
      mediaQuery.removeEventListener("change", handleViewportChange);
      mobileQuery.removeEventListener("change", handleViewportChange);

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      if (idleId && idleWindow.cancelIdleCallback) {
        idleWindow.cancelIdleCallback(idleId);
      }
    };
  }, []);

  useEffect(() => {
    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-gl-trigger]")
    );

    if (triggers.length === 0) {
      return;
    }

    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    triggers.forEach((trigger) => {
      trigger.addEventListener("pointerenter", handleEnter);
      trigger.addEventListener("pointerleave", handleLeave);
      trigger.addEventListener("focus", handleEnter);
      trigger.addEventListener("blur", handleLeave);
    });

    return () => {
      triggers.forEach((trigger) => {
        trigger.removeEventListener("pointerenter", handleEnter);
        trigger.removeEventListener("pointerleave", handleLeave);
        trigger.removeEventListener("focus", handleEnter);
        trigger.removeEventListener("blur", handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero-section]");
    const heroTitle = document.querySelector<HTMLElement>("[data-hero-title]");
    const heroGlow = document.querySelector<HTMLElement>("[data-hero-glow]");
    const process = document.getElementById("process");
    const processLine = document.querySelector<HTMLElement>("[data-process-line]");
    const processDot = document.querySelector<HTMLElement>("[data-process-dot]");
    const signalStep = document.querySelector<HTMLElement>(
      "[data-process-signal-step]"
    );
    const signalTitle = document.querySelector<HTMLElement>(
      "[data-process-signal-title]"
    );
    const signalBody = document.querySelector<HTMLElement>(
      "[data-process-signal-body]"
    );
    const steps = Array.from(
      document.querySelectorAll<HTMLElement>("[data-process-step]")
    );
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;

    const applyActiveStep = (activeIndex: number) => {
      const current = steps[activeIndex];

      if (!current) {
        return;
      }

      steps.forEach((step, index) => {
        step.dataset.active = index === activeIndex ? "true" : "false";
      });

      if (signalStep) signalStep.textContent = current.dataset.stepId ?? "";
      if (signalTitle) signalTitle.textContent = current.dataset.stepTitle ?? "";
      if (signalBody) signalBody.textContent = current.dataset.stepBody ?? "";
    };

    const updateEffects = () => {
      const reduceMotion = mediaQuery.matches;

      if (hero && heroTitle && heroGlow) {
        const rect = hero.getBoundingClientRect();
        const progress = clamp(
          -rect.top / Math.max(rect.height * 0.62, 1),
          0,
          1
        );

        if (reduceMotion) {
          heroTitle.style.transform = "";
          heroGlow.style.transform = "translateX(-50%)";
          heroGlow.style.opacity = "0.9";
        } else {
          heroTitle.style.transform = `translate3d(0, ${(
            progress * 34
          ).toFixed(1)}px, 0) scale(${(1 - progress * 0.05).toFixed(3)})`;
          heroGlow.style.transform = `translateX(-50%) scale(${(
            1 - progress * 0.1
          ).toFixed(3)})`;
          heroGlow.style.opacity = `${(0.9 - progress * 0.4).toFixed(3)}`;
        }
      }

      if (!process || steps.length === 0) {
        return;
      }

      const processRect = process.getBoundingClientRect();
      const travel = Math.max(processRect.height - window.innerHeight * 0.72, 1);
      const progress = clamp(
        (window.innerHeight * 0.18 - processRect.top) / travel,
        0,
        1
      );

      if (processLine) {
        processLine.style.height = `${(progress * 70).toFixed(2)}%`;
      }

      if (processDot) {
        processDot.style.top = `calc(15% + ${(progress * 70).toFixed(2)}%)`;
      }

      const targetLine = window.innerHeight * 0.42;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
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
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateEffects();
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

  if (!renderGl) {
    return null;
  }

  return <LazyGL hovering={hovering} quality={quality} />;
}
