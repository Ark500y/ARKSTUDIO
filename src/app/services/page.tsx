"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SERVICES, BRAND_INFO } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, Clock, Wrench, ChevronRight } from "lucide-react";

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <main className="relative min-h-screen bg-[#08090D] text-[#F2EFE9] selection:bg-[#B99B70] selection:text-[#08090D]">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-[#B99B70]/8 to-transparent blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]">Services</span>
            <span className="h-px flex-1 max-w-[60px] bg-[#B99B70]/40" />
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[96px] tracking-tighter leading-[0.92] text-[#F2EFE9] mb-6">
            WHAT I BUILD
            <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B99B70] to-[#F2EFE9] text-4xl sm:text-6xl lg:text-7xl">
              &amp; Design
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-[#E2DDD5] leading-relaxed font-light">
            Five core service disciplines — each engineered with the same obsessive attention to
            detail, performance, and business results.
          </p>
        </div>
      </section>

      {/* ── Interactive Service Explorer ───────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28">
              <div className="p-2 rounded-2xl bg-[#111318] border border-white/[0.06]">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    className={`w-full text-left flex items-center justify-between gap-4 px-4 py-4 rounded-xl transition-all duration-200 group mb-1 last:mb-0 ${
                      activeId === service.id
                        ? "bg-[#B99B70]/10 border border-[#B99B70]/25"
                        : "hover:bg-white/[0.03] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-mono ${activeId === service.id ? "text-[#B99B70]" : "text-[#A4A4AD]"}`}>
                        {service.number}
                      </span>
                      <span className={`text-sm font-medium transition-colors ${activeId === service.id ? "text-[#F2EFE9]" : "text-[#E2DDD5]/70 group-hover:text-[#F2EFE9]"}`}>
                        {service.title}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-all ${activeId === service.id ? "text-[#B99B70] translate-x-0.5" : "text-[#A4A4AD]/40 group-hover:text-[#A4A4AD]"}`} />
                  </button>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-5 p-5 rounded-2xl bg-gradient-to-tr from-[#B99B70]/10 to-transparent border border-[#B99B70]/20">
                <p className="text-sm text-[#E2DDD5] mb-4 leading-relaxed">
                  Ready to get started? Let&apos;s discuss your project requirements.
                </p>
                <a
                  href={BRAND_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#B99B70] text-[#08090D] font-semibold text-sm hover:bg-[#D4B896] transition-colors w-full justify-center"
                >
                  <span>Message on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </aside>

            {/* ── Detail Panel ── */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div key={active.id} className="animate-fade-in">
                {/* Header */}
                <div className="p-8 sm:p-10 rounded-2xl bg-[#111318] border border-white/[0.06] mb-6">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="text-[11px] font-mono text-[#B99B70] uppercase tracking-widest">{active.number} / 05</span>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#B99B70]/10 border border-[#B99B70]/20">
                      <Clock className="w-3.5 h-3.5 text-[#B99B70]" />
                      <span className="text-xs font-mono text-[#B99B70]">{active.timeline}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F2EFE9] mb-2 leading-tight">
                    {active.title}
                  </h2>

                  <p
                    dir="rtl"
                    className="font-mono text-sm text-[#A78BFA] mb-6"
                  >
                    {active.arabicTitle}
                  </p>

                  <p className="text-base text-[#B99B70] font-serif italic mb-6">{active.tagline}</p>

                  <p className="text-[#E2DDD5] text-base leading-relaxed">{active.description}</p>
                </div>

                {/* Deliverables + Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-7 rounded-2xl bg-[#111318] border border-white/[0.06]">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-5">
                      What You Receive
                    </h3>
                    <ul className="space-y-3">
                      {active.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#B99B70] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#E2DDD5] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-7 rounded-2xl bg-[#111318] border border-white/[0.06]">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-5">
                      Why It Matters
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {active.valueProps.map((prop) => (
                        <li key={prop} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] flex-shrink-0 mt-2" />
                          <span className="text-sm text-[#E2DDD5] leading-snug">{prop}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-4 mt-6 pt-6 border-t border-white/[0.06]">
                      Tools Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {active.tools.map((tool) => (
                        <span
                          key={tool}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090D] border border-white/[0.08] text-xs font-mono text-[#E2DDD5]"
                        >
                          <Wrench className="w-3 h-3 text-[#B99B70]" />
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Row */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#B99B70] to-[#9E825C] text-[#08090D] font-display font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(185,155,112,0.4)] transition-all duration-300"
                  >
                    Get a Quote for This Service <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-[#F2EFE9] font-display font-medium text-sm hover:border-[#B99B70]/50 transition-all duration-300"
                  >
                    View Related Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2EFE9] text-[#08090D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tighter mb-3">
              Have a project in mind?
            </h2>
            <p className="text-[#111318]/70 text-base max-w-lg">
              Every project starts with a simple conversation. Tell me what you&apos;re building and I&apos;ll tell you exactly how I can make it exceptional.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#08090D] text-[#F2EFE9] font-display font-bold text-sm tracking-wide hover:bg-[#B99B70] hover:text-[#08090D] transition-all duration-300"
            >
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={BRAND_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#08090D]/20 text-[#08090D] font-display font-medium text-sm hover:border-[#08090D]/50 transition-all duration-300"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
