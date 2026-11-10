"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { CREATIVE_PROCESS, FAQ_ITEMS, BRAND_INFO } from "@/data/portfolioData";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function ProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-[#08090D] text-[#F2EFE9] selection:bg-[#B99B70] selection:text-[#08090D]">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#A78BFA]/8 to-transparent blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#B99B70]/8 to-transparent blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]">Process</span>
            <span className="h-px flex-1 max-w-[60px] bg-[#B99B70]/40" />
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[96px] tracking-tighter leading-[0.92] text-[#F2EFE9] mb-6">
            HOW I WORK
            <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B99B70] to-[#F2EFE9] text-4xl sm:text-6xl lg:text-7xl">
              With Clients
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-[#E2DDD5] leading-relaxed font-light">
            A battle-tested 5-step methodology developed over 2+ years and 50+ projects. Clear timelines,
            complete transparency, and measurable results at every phase.
          </p>

          {/* Timeline overview pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {CREATIVE_PROCESS.map((step) => (
              <div key={step.step} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111318] border border-white/[0.06]">
                <span className="text-xs font-mono text-[#B99B70]">{step.step}</span>
                <span className="text-xs font-medium text-[#E2DDD5]">{step.phase}</span>
                <span className="text-[10px] font-mono text-[#A4A4AD]">· {step.timeframe}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vertical Timeline ─────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 sm:left-10 top-10 bottom-10 w-px bg-gradient-to-b from-[#B99B70]/40 via-[#B99B70]/20 to-transparent hidden lg:block" />

            <div className="space-y-16">
              {CREATIVE_PROCESS.map((step, index) => (
                <div key={step.step} className="relative lg:pl-28">
                  {/* Step circle */}
                  <div className="absolute left-0 top-0 hidden lg:flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-[#111318] border-2 border-[#B99B70]/40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(185,155,112,0.1)]">
                      <span className="text-[11px] font-mono text-[#B99B70]">{step.step}</span>
                      <span className="text-[9px] font-mono text-[#A4A4AD] mt-0.5">{step.phase}</span>
                    </div>
                  </div>

                  {/* Mobile step label */}
                  <div className="flex items-center gap-3 mb-5 lg:hidden">
                    <div className="w-12 h-12 rounded-full bg-[#111318] border-2 border-[#B99B70]/40 flex flex-col items-center justify-center">
                      <span className="text-[10px] font-mono text-[#B99B70]">{step.step}</span>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#B99B70] uppercase tracking-widest">{step.phase}</span>
                      <span className="text-xs text-[#A4A4AD] ml-2">· {step.timeframe}</span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 rounded-2xl bg-[#111318] border border-white/[0.06] hover:border-[#B99B70]/20 transition-all duration-300">
                    {/* Top meta */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="hidden lg:block text-xs font-mono text-[#B99B70] uppercase tracking-widest">{step.phase}</span>
                        <span className="hidden lg:block h-3.5 w-px bg-white/20" />
                        <span className="text-xs font-mono text-[#A4A4AD]">{step.timeframe}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#B99B70]/50">Step {index + 1} of {CREATIVE_PROCESS.length}</span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F2EFE9] mb-4">
                      {step.title}
                    </h2>

                    <p className="text-[#E2DDD5] text-base leading-relaxed mb-7">
                      {step.description}
                    </p>

                    {/* Actions grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.actions.map((action) => (
                        <div
                          key={action}
                          className="flex items-center gap-3 p-3.5 rounded-xl bg-[#08090D] border border-white/[0.05]"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#B99B70]/10 border border-[#B99B70]/20 flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B99B70]" />
                          </div>
                          <span className="text-sm text-[#E2DDD5]">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111318] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <div className="text-[11px] font-mono text-[#B99B70] uppercase tracking-widest mb-3">Ready to Begin?</div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F2EFE9] mb-3">
              Let&apos;s start with a quick chat
            </h2>
            <p className="text-[#E2DDD5] text-base font-light max-w-lg">
              Reach me directly on WhatsApp to discuss your project goals, timeline and investment.
              Most initial responses within 2 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href={BRAND_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(52,211,153,0.3)]"
            >
              <span>WhatsApp Me Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-[#F2EFE9] font-display font-medium text-sm hover:border-[#B99B70]/50 transition-all"
            >
              Or Use the Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F2EFE9] text-[#08090D]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]">Common Questions</span>
            <span className="h-px flex-1 max-w-[60px] bg-[#B99B70]/40" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tighter text-[#08090D] mb-14">
            Frequently Asked
          </h2>

          <div className="space-y-3">
            {FAQ_ITEMS.slice(0, 4).map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#08090D]/10 overflow-hidden"
              >
                <button
                  className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 bg-white/50 hover:bg-white/80 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-[#08090D]">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B99B70] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 bg-white/50 border-t border-[#08090D]/5">
                    <p className="text-sm sm:text-base text-[#111318]/80 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#111318]/60 text-sm mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#08090D] text-[#F2EFE9] font-semibold text-sm hover:bg-[#B99B70] hover:text-[#08090D] transition-all"
            >
              Ask Me Directly <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
