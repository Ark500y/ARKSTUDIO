"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";
import { BRAND_INFO, PROJECTS, Project } from "@/data/portfolioData";
import { playTick } from "@/utils/audio";

interface HeroSectionProps {
  onSelectProject?: (project: Project) => void;
}

export default function HeroSection({ onSelectProject }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#08090D] text-[#F2EFE9] flex flex-col justify-between pt-24 sm:pt-32 pb-8 overflow-hidden scroll-mt-24"
    >
      {/* Background — strong dark overlay so text is always readable */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#B99B70]/12 via-[#A78BFA]/8 to-transparent blur-[160px]" />
        {/* Strong vignette to ensure text readability over 3D canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090D]/70 via-[#08090D]/50 to-[#08090D]/80" />
      </div>

      {/* 3D WebGL Canvas — behind everything */}
      <Hero3DCanvas />

      {/* Main Content — z-20 above canvas */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[600px]">

          {/* Left: Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111318] border border-[#B99B70]/40 w-fit mx-auto lg:mx-0 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[12px] font-mono tracking-wider uppercase text-[#F2EFE9]">
                Available for Projects
              </span>
              <span className="text-white/30 text-xs">|</span>
              <span className="text-[11px] font-mono text-[#B99B70]">Worldwide</span>
            </div>

            {/* Main Headline — maximum contrast */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[64px] xl:text-[72px] tracking-tighter leading-[1.0] text-[#F2EFE9] mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
              I Build Digital<br />
              <span className="text-[#F2EFE9]">Experiences</span><br />
              <span className="font-serif italic font-normal text-[#B99B70] text-3xl sm:text-4xl lg:text-[52px] xl:text-[58px] leading-[1.15] block mt-1">
                That Move Brands Forward.
              </span>
            </h1>

            {/* Supporting Copy — clearly readable */}
            <p className="text-base sm:text-lg text-[#E2DDD5] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              I'm <strong className="text-[#F2EFE9] font-semibold">Abdul Rehman</strong> — an independent web designer,
              frontend developer and visual creative crafting premium digital experiences for ambitious businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                onClick={() => playTick(800)}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#B99B70] to-[#9E825C] text-[#08090D] font-display font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(185,155,112,0.5)] hover:shadow-[0_0_45px_rgba(185,155,112,0.8)] transition-all duration-300 hover:scale-[1.02]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                onClick={() => playTick(900)}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F2EFE9]/10 hover:bg-[#F2EFE9]/20 border border-[#F2EFE9]/30 hover:border-[#B99B70]/60 text-[#F2EFE9] font-display font-medium text-sm tracking-wide backdrop-blur-sm transition-all duration-300"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#B99B70]" />
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-mono text-[#B99B70]">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[#E2DDD5]">Sargodha, Pakistan</span>
              <span className="text-white/30">|</span>
              <span className="text-[#E2DDD5]">Working Worldwide</span>
            </div>
          </div>

          {/* Right: Services + Scroll */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-center items-end gap-3">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[280px] mb-4">
              {[
                { val: "2+", label: "Years Exp." },
                { val: "50+", label: "Projects" },
                { val: "100%", label: "Satisfaction" },
                { val: "EN/AR", label: "Bilingual" },
              ].map((s) => (
                <div key={s.val} className="p-4 rounded-xl bg-[#111318]/80 border border-white/[0.1] backdrop-blur-sm text-center">
                  <div className="font-display font-bold text-xl text-[#B99B70]">{s.val}</div>
                  <div className="text-[10px] font-mono text-[#E2DDD5] uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Service Tags */}
            {["Web Design & Development", "Graphic Design & Branding", "UI/UX Design", "Arabic & English Websites"].map((service) => (
              <a
                key={service}
                href="#services"
                onClick={() => playTick(700)}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111318]/80 hover:bg-[#111318] border border-white/[0.08] hover:border-[#B99B70]/50 text-[12px] font-mono text-[#E2DDD5] hover:text-[#F2EFE9] transition-all backdrop-blur-sm text-right"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B99B70]/60 group-hover:bg-[#B99B70] transition-colors flex-shrink-0" />
                <span>{service}</span>
              </a>
            ))}

            {/* Scroll Indicator */}
            <div className="mt-6 flex flex-col items-center gap-2 text-[10px] font-mono text-[#E2DDD5]/70 uppercase tracking-widest">
              <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-[#B99B70] animate-bounce" />
              </div>
              <span>Scroll</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 w-full mt-8 border-t border-white/[0.08] bg-[#0B0D12]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

            <div className="md:col-span-3">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#B99B70] mb-1">
                <span>01</span><span>/</span><span>Featured Projects</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#F2EFE9]">Real Work. Real Impact.</h3>
              <p className="text-xs text-[#E2DDD5] font-light mt-1">Recent client builds engineered for performance.</p>
            </div>

            {/* Project Cards */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PROJECTS.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  onClick={() => { playTick(750); onSelectProject?.(project); }}
                  className="group relative p-2.5 rounded-xl bg-[#111318] hover:bg-[#1A1D24] border border-white/[0.08] hover:border-[#B99B70]/50 cursor-pointer transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-2 bg-black/40">
                    <Image src={project.image} alt={project.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-[#B99B70]">{project.number}</div>
                  </div>
                  <h4 className="text-xs font-display font-semibold text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors truncate">{project.title}</h4>
                  <p className="text-[10px] text-[#E2DDD5] truncate font-light">{project.category}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="md:col-span-3 flex items-center justify-around border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-6 gap-4">
              {[{ val: "2+", label: "Yrs Exp." }, { val: "50+", label: "Projects" }, { val: "100%", label: "Satisfied" }].map((s, i) => (
                <React.Fragment key={s.val}>
                  {i > 0 && <div className="h-8 w-px bg-white/[0.08]" />}
                  <div className="text-center">
                    <div className="font-display font-bold text-xl text-[#B99B70]">{s.val}</div>
                    <div className="text-[10px] font-mono text-[#E2DDD5] uppercase tracking-wider">{s.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="w-full border-t border-white/[0.06] bg-[#08090D] py-2 overflow-hidden flex items-center">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-[11px] font-mono text-[#E2DDD5]/80">
            {BRAND_INFO.heroTickerTech.concat(BRAND_INFO.heroTickerTech).map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#B99B70]" />
                <span className="hover:text-[#B99B70] transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
