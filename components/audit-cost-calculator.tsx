"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { FluidCTA } from "@/components/fluid-cta";

const WEEKS_PER_MONTH = 4.3;
const ESTIMATED_CLOSE_RATE = 0.25;

const currencyFormatter = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0,
});

function toPositiveNumber(value: string) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function AuditCostCalculator() {
  const [missedLeads, setMissedLeads] = useState("8");
  const [averageValue, setAverageValue] = useState("2500");

  const estimatedMonthlyLeak = useMemo(() => {
    return (
      toPositiveNumber(missedLeads) *
      WEEKS_PER_MONTH *
      toPositiveNumber(averageValue) *
      ESTIMATED_CLOSE_RATE
    );
  }, [averageValue, missedLeads]);

  return (
    <div className="nova-card overflow-hidden rounded-[2rem] p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#061327]/10 bg-white text-primary">
            <Calculator className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
            Audit calculator
          </p>
          <h2 className="mt-5 max-w-[12ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] md:text-7xl">
            What missed leads may cost.
          </h2>
          <p className="mt-6 max-w-[560px] text-base leading-8 text-[#061327]/62">
            A quick estimate for the audit conversation, using a conservative
            working close-rate assumption until Miguel signs off the final
            formula.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-[#061327]/10 bg-white/80 p-5 md:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/54">
                Missed calls/leads per week
              </span>
              <input
                min="0"
                inputMode="numeric"
                type="number"
                value={missedLeads}
                onChange={(event) => setMissedLeads(event.target.value)}
                className="mt-3 h-12 w-full rounded-2xl border border-[#061327]/12 bg-white px-4 text-lg text-[#061327] outline-none transition focus:border-primary/60"
              />
            </label>

            <label className="block">
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#061327]/54">
                Average job/client value
              </span>
              <input
                min="0"
                inputMode="decimal"
                type="number"
                value={averageValue}
                onChange={(event) => setAverageValue(event.target.value)}
                className="mt-3 h-12 w-full rounded-2xl border border-[#061327]/12 bg-white px-4 text-lg text-[#061327] outline-none transition focus:border-primary/60"
              />
            </label>
          </div>

          <div
            className="mt-5 rounded-[1.5rem] border border-primary/16 bg-[#fff7f7] p-5"
            aria-live="polite"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70">
              Estimated monthly revenue leak
            </p>
            <p className="mt-3 font-sentient text-5xl leading-none tracking-[-0.08em] text-primary md:text-6xl">
              {currencyFormatter.format(estimatedMonthlyLeak)}
            </p>
            <p className="mt-4 text-sm leading-6 text-[#061327]/56">
              Calculation: missed leads per week x 4.3 weeks x average value x
              25% estimated close rate. Final assumption needs sign-off before
              production launch.
            </p>
          </div>

          <div className="mt-6">
            <FluidCTA label="Book Your AI Business Audit ->" compact />
          </div>
        </div>
      </div>
    </div>
  );
}
