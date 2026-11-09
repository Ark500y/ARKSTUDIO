"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, Clock, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/portfolioData";
import { playTick } from "@/utils/audio";

export default function EditorialServices() {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const toggleService = (id: string) => {
    playTick(750);
    setActiveServiceId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#F2EFE9] text-[#111318] py-28 sm:py-36 overflow-hidden border-t border-[#111318]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24 pb-8 border-b border-[#111318]/15">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B99B70]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B99B70] font-semibold">
                05 / Client Services & Commercial Solutions
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#111318] tracking-tight">
              Crafted For Impact. <br />
              <span className="font-serif italic font-normal text-[#B99B70]">
                Built For Conversion.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-8 border-l border-[#111318]/15">
            <p className="text-sm text-[#111318]/70 leading-relaxed font-sans font-light">
              Clear deliverables, honest timelines, and measurable business outcomes. No template markups, no agency bloat.
            </p>
          </div>
        </div>

        {/* Services Editorial Stack / Accordion */}
        <div className="flex flex-col divide-y divide-[#111318]/15 border-b border-[#111318]/15">
          {SERVICES.map((service) => {
            const isOpen = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className="py-8 transition-colors group cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs sm:text-sm text-[#B99B70] font-semibold">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#111318] group-hover:text-[#B99B70] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-mono text-[#111318]/50 block sm:hidden mt-1 font-arabic">
                        {service.arabicTitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 justify-between sm:justify-end">
                    <span className="hidden md:inline-block font-arabic text-sm text-[#111318]/50">
                      {service.arabicTitle}
                    </span>
                    <span className="text-xs font-mono text-[#B99B70] bg-[#111318]/5 px-3 py-1 rounded-full border border-[#111318]/10">
                      {service.timeline}
                    </span>
                    <div
                      className={`p-2 rounded-full border border-[#111318]/15 group-hover:border-[#B99B70] transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#111318] text-[#F2EFE9]" : "bg-transparent text-[#111318]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="mt-8 pt-6 border-t border-[#111318]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
                    
                    {/* Left: Detailed Description & Value Props */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <p className="text-base sm:text-lg font-serif text-[#111318] leading-relaxed mb-4 italic">
                          &ldquo;{service.tagline}&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-[#111318]/75 leading-relaxed font-sans mb-6 font-light">
                          {service.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/85 border border-[#111318]/10 shadow-sm">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#B99B70] font-semibold mb-2">
                          Client Value Delivery
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#111318]/80 font-light">
                          {service.valueProps.map((vp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#B99B70] font-bold">✦</span>
                              <span>{vp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: Deliverables & Tech Stack */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div className="mb-6">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#111318]/60 font-semibold mb-3">
                          What&apos;s Included In This Engagement:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#111318]/85">
                          {service.deliverables.map((deliv, idx) => (
                            <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-[#111318]/5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B99B70]" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tooling and Inquiry Button */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#111318]/10">
                        <div className="flex flex-wrap gap-1.5">
                          {service.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#111318]/5 text-[#111318]/80 border border-[#111318]/10"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#contact"
                          onClick={() => playTick(800)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111318] hover:bg-[#B99B70] text-[#F2EFE9] hover:text-[#08090D] text-xs font-display font-semibold transition-all duration-300 shadow-md"
                          data-cursor-text="INQUIRE"
                        >
                          <span>Request Proposal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
