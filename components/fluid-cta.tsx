"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type FluidCTAProps = {
  label?: string;
  compact?: boolean;
};

export function FluidCTA({
  label = "Book a growth audit",
  compact = false,
}: FluidCTAProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  return (
    <>
      <motion.div className="relative inline-block">
        <div className="absolute inset-0 rounded-full bg-primary shadow-[0_0_44px_rgba(225,38,45,0.34)]" />
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsExpanded(true)}
          className={[
            "relative rounded-full font-mono uppercase tracking-[0.12em] text-white",
            compact ? "h-12 px-5 text-xs" : "h-16 px-7 text-sm sm:px-9",
          ].join(" ")}
        >
          {label}
        </motion.button>
      </motion.div>

      {isMounted &&
        createPortal(
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="cta-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed inset-0 z-[100] bg-[#020816]/24"
              />
            )}

            {isExpanded && (
              <motion.div
                key="cta-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed inset-0 z-[101] flex h-svh w-screen overflow-hidden bg-primary text-white shadow-[0_30px_120px_rgba(0,32,92,0.34)]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 1.14 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.42, delay: 0.04, ease: "easeOut" }}
                  className="fluid-cta-gradient pointer-events-none absolute inset-0"
                />

                <div className="relative z-10 h-full w-full overflow-y-auto scrollbar-hide">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: 0.12, ease: "easeOut" }}
                    className="mx-auto flex min-h-full w-full max-w-[1120px] flex-col gap-10 p-7 pt-16 sm:p-10 lg:flex-row lg:items-center lg:p-16"
                  >
                    <div className="flex-1">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/70">
                        Growth audit
                      </p>
                      <h2 className="mt-5 max-w-[9ch] font-sentient text-5xl leading-[0.92] tracking-[-0.08em] sm:text-7xl">
                        Let us map what grows next.
                      </h2>
                      <div className="mt-8 grid gap-4 text-base leading-7 text-white/78 sm:text-lg">
                        <p>
                          We will identify the clearest growth opportunity, the
                          bottleneck slowing it down, and the system that can
                          help capture it.
                        </p>
                        <p>
                          Strategy, lead generation, web and software,
                          automated business processes and AI auditing,
                          branding, and automation can all be part of the audit.
                        </p>
                      </div>
                    </div>

                    <form className="flex-1 space-y-4 rounded-[1.5rem] border border-white/14 bg-[#020816]/42 p-5 backdrop-blur-xl sm:p-7">
                      {[
                        ["name", "Full name", "text"],
                        ["email", "Work email", "email"],
                        ["company", "Company website", "url"],
                      ].map(([id, labelText, type]) => (
                        <div key={id}>
                          <label
                            htmlFor={id}
                            className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/68"
                          >
                            {labelText}
                          </label>
                          <input
                            id={id}
                            type={type}
                            className="h-12 w-full rounded-xl border border-white/10 bg-[#020816]/50 px-4 text-white outline-none transition focus:border-white/35"
                          />
                        </div>
                      ))}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/68"
                        >
                          What should we help with?
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full resize-none rounded-xl border border-white/10 bg-[#020816]/50 px-4 py-3 text-white outline-none transition focus:border-white/35"
                        />
                      </div>
                      <button
                        type="button"
                        className="h-12 w-full rounded-full bg-white font-medium text-[#00205c] transition hover:bg-white/90"
                      >
                        Submit request
                      </button>
                    </form>
                  </motion.div>
                </div>

                <motion.button
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#020816]/28 text-white transition hover:bg-[#020816]/42"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
