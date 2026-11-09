"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Compass, Layers, Monitor, Rocket, Search } from "lucide-react";
import { CREATIVE_PROCESS } from "@/data/portfolioData";

export default function CreativeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (phase: string) => {
    switch (phase) {
      case "DISCOVER":
        return <Search className="w-4 h-4" />;
      case "STRATEGY":
        return <Compass className="w-4 h-4" />;
      case "DESIGN":
        return <Layers className="w-4 h-4" />;
      case "DEVELOP":
        return <Monitor className="w-4 h-4" />;
      case "DELIVER":
        return <Rocket className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="process"
      className="relative w-full bg-[#08090D] text-[#F2EFE9] py-28 sm:py-36 overflow-hidden border-t border-white/[0.06] scroll-mt-20"
    >
      {/* Decorative Aura */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B99B70]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B99B70]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B99B70] font-semibold">
              06 / Execution Blueprint
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2EFE9] tracking-tight mb-4">
            A Predictable 5-Step Process. <br />
            <span className="font-serif italic font-normal text-[#B99B70]">
              Zero Friction. Pure Velocity.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A4A4AD] font-light leading-relaxed">
            Every successful project follows a battle-tested timeline from initial discovery to high-performance launch.
          </p>
        </div>

        {/* Step Progression Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {CREATIVE_PROCESS.map((p, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={p.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border transition-all text-left flex flex-col justify-between ${
                  isCurrent
                    ? "bg-[#161922] border-[#B99B70] shadow-[0_0_20px_rgba(185,155,112,0.2)]"
                    : "bg-[#0E1015] border-white/[0.06] hover:border-white/20 text-[#A4A4AD]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isCurrent ? "text-[#B99B70]" : "text-white/40"}`}>
                    {p.step}
                  </span>
                  <div className={`${isCurrent ? "text-[#B99B70]" : "text-white/30"}`}>
                    {getStepIcon(p.phase)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                    {p.phase}
                  </div>
                  <div className="text-xs font-display font-semibold text-[#F2EFE9] truncate">
                    {p.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Presentation */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0F1117] border border-white/[0.08] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 select-none pointer-events-none opacity-[0.03] font-display font-black text-9xl text-white">
            {CREATIVE_PROCESS[activeStep].step}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded bg-[#B99B70]/10 border border-[#B99B70]/20 text-[11px] font-mono text-[#B99B70] font-semibold">
                  STAGE {CREATIVE_PROCESS[activeStep].step} — {CREATIVE_PROCESS[activeStep].phase}
                </span>
                <span className="text-xs font-mono text-[#A4A4AD]">
                  Timeline: {CREATIVE_PROCESS[activeStep].timeframe}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F2EFE9] mb-4">
                {CREATIVE_PROCESS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[#A4A4AD] leading-relaxed mb-8 font-light">
                {CREATIVE_PROCESS[activeStep].description}
              </p>

              {/* Navigation buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : CREATIVE_PROCESS.length - 1))}
                  className="px-4 py-2 rounded-full border border-white/10 hover:border-[#B99B70] text-xs font-mono text-[#A4A4AD] hover:text-[#F2EFE9] transition-all"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < CREATIVE_PROCESS.length - 1 ? prev + 1 : 0))}
                  className="px-5 py-2 rounded-full bg-[#B99B70] hover:bg-[#A88B60] text-[#08090D] font-display font-semibold text-xs transition-all shadow-[0_0_15px_rgba(185,155,112,0.3)]"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right Actionable Deliverables List */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-black/50 border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#B99B70] font-semibold mb-4">
                Action Items & Deliverables:
              </h4>
              <ul className="space-y-3">
                {CREATIVE_PROCESS[activeStep].actions.map((act, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#E2DDD5]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#B99B70] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
