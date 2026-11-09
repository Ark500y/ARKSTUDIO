"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQ_ITEMS } from "@/data/portfolioData";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative w-full bg-[#08090D] text-[#F2EFE9] py-28 sm:py-36 overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B99B70]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B99B70] font-semibold">
              09 / Frequently Asked Questions
            </span>
            <span className="w-8 h-[1px] bg-[#B99B70]" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2EFE9] tracking-tight mb-4">
            Common Client Inquiries. <br />
            <span className="font-serif italic font-normal text-[#B99B70]">
              Transparent Answers.
            </span>
          </h2>
          <p className="text-sm text-[#A4A4AD] font-light max-w-lg mx-auto">
            Everything you need to know about working with ARK® on your next design or development project.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0F1117] border border-white/[0.08] hover:border-[#B99B70]/40 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-[#F2EFE9]">
                    {item.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-full border border-white/10 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#B99B70] text-[#08090D]" : "text-[#A4A4AD]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#A4A4AD] leading-relaxed border-t border-white/[0.04] pt-4 animate-fade-in font-light">
                    {item.a}
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
