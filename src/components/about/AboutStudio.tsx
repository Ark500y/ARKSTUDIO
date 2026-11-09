"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Globe, MapPin, Sparkles, UserCheck, Shield } from "lucide-react";
import { BRAND_INFO } from "@/data/portfolioData";
import { playTick } from "@/utils/audio";

export default function AboutStudio() {
  return (
    <section
      id="about-studio"
      className="relative w-full bg-[#F2EFE9] text-[#111318] py-28 sm:py-36 overflow-hidden border-t border-[#111318]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Telemetry */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#B99B70]" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B99B70] font-semibold">
            08 / Personal Creative Brand
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Narrative & Architectural Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111318] tracking-tight leading-[1.1] mb-6">
              Independent Craftsmanship. <br />
              <span className="font-serif italic font-normal text-[#B99B70]">
                One Creative Partner.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#111318]/90 leading-relaxed font-sans mb-5 font-light">
              ARK® is not a sprawling agency with account managers, junior handoffs, or hidden layers of bureaucracy. When you hire ARK, you work directly with me — <strong>Abdul Rehman</strong>.
            </p>

            <p className="text-xs sm:text-sm text-[#111318]/70 leading-relaxed font-sans mb-10 font-light">
              Based in Sargodha, Pakistan and partnering with clients across Saudi Arabia, the United Arab Emirates, Pakistan, and worldwide, I take complete responsibility for your digital brand. From the first brand moodboard to the final Next.js deployment, every interaction is crafted with uncompromising attention to detail, sub-second performance, and conversion intent.
            </p>

            {/* Architectural 4-Pillar Grid (Replacing generic white cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#111318]/15 mb-10">
              <div className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-display font-bold text-sm text-[#111318] group-hover:text-[#B99B70] transition-colors">
                    1-on-1 Direct Access
                  </h4>
                  <span className="font-mono text-xs text-[#B99B70]">01</span>
                </div>
                <p className="text-xs text-[#111318]/70 leading-relaxed font-light">
                  Fast WhatsApp responses and personal updates throughout the project lifecycle.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-display font-bold text-sm text-[#111318] group-hover:text-[#B99B70] transition-colors">
                    Gulf Region Expertise
                  </h4>
                  <span className="font-mono text-xs text-[#B99B70]">02</span>
                </div>
                <p className="text-xs text-[#111318]/70 leading-relaxed font-light">
                  Proven track record delivering bilingual Arabic & English platforms for KSA and UAE businesses.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-display font-bold text-sm text-[#111318] group-hover:text-[#B99B70] transition-colors">
                    Design + Code Hybrid
                  </h4>
                  <span className="font-mono text-xs text-[#B99B70]">03</span>
                </div>
                <p className="text-xs text-[#111318]/70 leading-relaxed font-light">
                  No friction between designer and developer — I conceptualize and code the vision myself.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-display font-bold text-sm text-[#111318] group-hover:text-[#B99B70] transition-colors">
                    Fixed Pricing & Clear Scope
                  </h4>
                  <span className="font-mono text-xs text-[#B99B70]">04</span>
                </div>
                <p className="text-xs text-[#111318]/70 leading-relaxed font-light">
                  Transparent contracts with milestones and zero hidden surprise costs.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(800)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111318] hover:bg-[#B99B70] text-[#F2EFE9] hover:text-[#08090D] font-display font-semibold text-xs tracking-wide transition-all shadow-md"
                data-cursor-text="WHATSAPP"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                onClick={() => playTick(700)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F2EFE9] border border-[#111318]/20 text-[#111318] font-display font-medium text-xs tracking-wide transition-all"
              >
                <span>Send Project Brief</span>
              </a>
            </div>
          </div>

          {/* Right: Studio Portrait in Matte Obsidian Bezel */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-[370px] rounded-2xl overflow-hidden bg-[#08090D] p-3 shadow-2xl border border-[#111318]/20">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/abdulrehman-portrait-red.jpg"
                  alt="Abdul Rehman Portfolio Studio"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-white">
                <div>
                  <div className="text-xs font-display font-bold text-[#F2EFE9]">
                    Abdul Rehman
                  </div>
                  <div className="text-[10px] font-mono text-[#B99B70]">
                    Sargodha, Pakistan • UTC+5 PKT
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
