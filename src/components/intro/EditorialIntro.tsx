"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, MapPin } from "lucide-react";
import { BRAND_INFO } from "@/data/portfolioData";
import { playTick } from "@/utils/audio";

export default function EditorialIntro() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#F2EFE9] text-[#111318] py-28 sm:py-36 overflow-hidden transition-colors scroll-mt-20"
    >
      {/* Editorial Decorative Background Elements — lightweight gradient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(185,155,112,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-display font-black text-[240px] leading-none tracking-tighter text-[#111318]">
        ARK
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#7A5B2E]" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#7A5B2E] font-semibold">
            02 / Editorial Introduction
          </span>
        </div>

        {/* Asymmetrical Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline mb-16 sm:mb-24">
          <div className="lg:col-span-8">
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#111318]">
              DESIGN IS MORE THAN <br />
              <span className="font-serif italic font-normal text-[#7A5B2E]">
                WHAT YOU SEE.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-8 border-l border-[#111318]/15">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A5B2E] font-semibold block mb-2">
              The Architecture
            </span>
            <p className="font-display font-medium text-lg sm:text-xl text-[#111318] leading-snug">
              IT&apos;S HOW EVERYTHING WORKS TOGETHER.
            </p>
          </div>
        </div>

        {/* Editorial Body: Asymmetrical Split Layout with High-End Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait in Architectural Matte Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[390px] rounded-2xl overflow-hidden bg-[#111318] shadow-[0_30px_60px_-15px_rgba(17,19,24,0.3)] group border border-[#111318]/20">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/abdulrehman-portrait-red.jpg"
                  alt="Abdul Rehman — Creative Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 390px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:filter-none transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-65" />
              </div>

              {/* Gallery Plaque Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#08090D]/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display font-semibold text-sm text-[#F2EFE9]">
                      Abdul Rehman
                    </p>
                    <p className="text-[11px] font-mono text-[#B99B70]">
                      Independent Creative Developer
                    </p>
                  </div>
                  <div className="text-[10px] font-mono text-[#A4A4AD] px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    ARK® STUDIO
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural coordinate stamp */}
            <div className="hidden sm:flex items-center gap-2 absolute -bottom-5 -right-4 bg-[#F2EFE9] border border-[#111318]/15 px-3.5 py-2 rounded-xl text-[10px] font-mono text-[#111318]/70 shadow-sm">
              <MapPin className="w-3 h-3 text-[#7A5B2E]" />
              <span>32.0836° N, 72.6711° E • Sargodha</span>
            </div>
          </div>

          {/* Right Column: Narrative, Capabilities & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Pull Quote */}
            <div className="relative mb-6 pl-6 border-l-2 border-[#7A5B2E]">
              <p className="text-xl sm:text-2xl font-serif text-[#111318] leading-relaxed italic">
                &ldquo;I combine thoughtful design, modern frontend development and visual storytelling to create websites that look exceptional and work beautifully.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#111318]/80 leading-relaxed font-sans mb-10 font-light">
              Too many commercial websites are either visually striking but slow and broken to use, or purely functional yet forgettable. I build at the intersection: fusing the visual poise of an award-winning independent studio with the performance, SEO, and conversion discipline required to win paying clients.
            </p>

            {/* Architectural Ruled 3-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#111318]/15 mb-10">
              
              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#7A5B2E]">01</span>
                  <Sparkles className="w-4 h-4 text-[#7A5B2E] opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-bold text-sm text-[#111318] mb-1.5 group-hover:text-[#7A5B2E] transition-colors">
                  Art Direction
                </h3>
                <p className="text-xs text-[#111318]/70 leading-relaxed font-light">
                  Bespoke typography, color harmony, and memorable visual language.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#7A5B2E]">02</span>
                  <Layers className="w-4 h-4 text-[#111318] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-bold text-sm text-[#111318] mb-1.5 group-hover:text-[#7A5B2E] transition-colors">
                  Clean Engineering
                </h3>
                <p className="text-xs text-[#111318]/70 leading-relaxed font-light">
                  Next.js App Router, TypeScript, and microsecond interactions.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-emerald-800">03</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-800 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-bold text-sm text-[#111318] mb-1.5 group-hover:text-emerald-800 transition-colors">
                  Bilingual RTL/LTR
                </h3>
                <p className="text-xs text-[#111318]/70 leading-relaxed font-light">
                  Native Arabic & English architecture for Gulf market authority.
                </p>
              </div>

            </div>

            {/* Quick Link to Services */}
            <div>
              <a
                href="/services"
                onClick={() => playTick(750)}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#111318] hover:text-[#7A5B2E] border-b-2 border-[#111318] hover:border-[#7A5B2E] pb-1 transition-all"
                data-cursor-text="SERVICES"
              >
                <span>Explore Full Service Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
