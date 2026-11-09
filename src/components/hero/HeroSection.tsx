"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin, Sparkles, CheckCircle2, ChevronRight, Eye } from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";
import { BRAND_INFO, PROJECTS, Project } from "@/data/portfolioData";
import { playTick } from "@/utils/audio";

interface HeroSectionProps {
  onSelectProject?: (project: Project) => void;
}

export default function HeroSection({ onSelectProject }: HeroSectionProps) {
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#08090D] text-[#F2EFE9] flex flex-col justify-between pt-24 sm:pt-32 pb-8 overflow-hidden scroll-mt-24"
    >
      {/* Background Gradients & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial golden glow behind central portrait */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-[#B99B70]/18 via-[#A78BFA]/10 to-transparent blur-[140px] pointer-events-none" />
        {/* Deep cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,9,13,0.85)_80%,rgba(8,9,13,1)_100%)]" />
      </div>

      {/* 3D WebGL Canvas Layer */}
      <Hero3DCanvas />

      {/* Main Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[620px]">
          
          {/* Left Column: Headlines, Copy, CTAs & Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left pt-2 lg:pt-0">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111318]/90 border border-[#B99B70]/30 w-fit mx-auto lg:mx-0 mb-6 shadow-[0_0_20px_rgba(185,155,112,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#E2DDD5]">
                {BRAND_INFO.availabilityShort}
              </span>
              <span className="text-white/20 text-xs">|</span>
              <span className="text-[10px] font-mono text-[#B99B70]">Worldwide</span>
            </div>

            {/* Oversized Main Display Headline with Bespoke Hierarchy */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tighter leading-[1.02] text-[#F2EFE9] mb-5">
              I Build Digital
              <br />
              <span className="text-[#F2EFE9]">Experiences</span>
              <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B99B70] via-[#F2EFE9] to-[#B99B70] text-3xl sm:text-5xl md:text-[54px] block mt-1 leading-[1.1]">
                That Move Brands Forward.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#A4A4AD] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 font-sans font-light">
              I&apos;m <strong className="text-[#F2EFE9] font-medium">Abdul Rehman</strong> — an independent web designer, frontend developer and visual creative crafting premium digital experiences for ambitious businesses.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                onClick={() => playTick(800)}
                className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#B99B70] to-[#9E825C] text-[#08090D] font-display font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(185,155,112,0.4)] hover:shadow-[0_0_35px_rgba(185,155,112,0.7)] transition-all duration-300 hover:scale-[1.02]"
                data-cursor-text="VIEW"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={() => playTick(900)}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#111318]/80 hover:bg-[#1A1D24] border border-white/15 hover:border-[#B99B70]/60 text-[#F2EFE9] font-display font-medium text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300"
                data-cursor-text="START"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#B99B70] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Location & Global Scope Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-[#A4A4AD]">
              <MapPin className="w-3.5 h-3.5 text-[#B99B70]" />
              <span>Sargodha, Pakistan</span>
              <span className="text-white/20">|</span>
              <span className="text-[#E2DDD5]">Working Worldwide</span>
            </div>
          </div>

          {/* Center Column: Portrait integrated with 3D Sculptural Aura */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2 pt-2 lg:pt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] aspect-[4/5] flex items-end justify-center">
              
              {/* Backlight halo glow */}
              <div className="absolute inset-x-8 top-12 bottom-0 rounded-full bg-gradient-to-t from-[#B99B70]/25 via-[#A78BFA]/15 to-transparent blur-2xl" />

              {/* Abdul Rehman Cutout Portrait */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="/images/abdulrehman-cutout-hero.webp"
                  alt="Abdul Rehman — Creative Developer & Web Designer"
                  width={460}
                  height={560}
                  priority
                  className={`object-contain object-bottom max-h-[300px] sm:max-h-[420px] lg:max-h-[500px] w-auto drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] transition-all duration-700 ${
                    portraitLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  onLoad={() => setPortraitLoaded(true)}
                />
              </div>

              {/* Seamless Grounding Fade into Bottom Bar */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#08090D] via-[#08090D]/60 to-transparent z-15 pointer-events-none" />

              {/* Subtle floating glass badge near portrait */}
              <div className="absolute -bottom-2 -left-2 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#111318]/85 border border-white/10 backdrop-blur-md shadow-xl">
                <div className="w-2 h-2 rounded-full bg-[#B99B70] animate-pulse" />
                <span className="text-[11px] font-mono text-[#E2DDD5] tracking-wide">
                  ARK® Creative Studio
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Service Anchors & Scroll Indicator */}
          <div className="lg:col-span-2 hidden lg:flex flex-col justify-center items-end gap-3 order-3">
            {[
              "Web Design & Development",
              "Graphic Design & Branding",
              "UI/UX Design",
              "Arabic & English Websites",
            ].map((service) => (
              <a
                key={service}
                href="#services"
                onClick={() => playTick(700)}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111318]/60 hover:bg-[#111318] border border-white/[0.08] hover:border-[#B99B70]/40 text-[11px] font-mono text-[#A4A4AD] hover:text-[#F2EFE9] transition-all text-right shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B99B70]/50 group-hover:bg-[#B99B70] transition-colors" />
                <span>{service}</span>
              </a>
            ))}

            {/* Scroll Indicator */}
            <div className="mt-8 flex flex-col items-center gap-2 text-[10px] font-mono text-[#A4A4AD] uppercase tracking-widest">
              <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-[#B99B70] animate-bounce" />
              </div>
              <span className="text-[9px]">Scroll to Explore</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Real Work Quick Previews, Stats & Marquee Ticker */}
      <div className="relative z-20 w-full mt-10 border-t border-white/[0.08] bg-[#0B0D12]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Header / Intro to Work */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#B99B70] mb-1">
                <span>01</span>
                <span>/</span>
                <span>Featured Projects</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#F2EFE9]">
                Real Work. Real Impact.
              </h3>
              <p className="text-xs text-[#A4A4AD] font-light mt-0.5">
                Explore recent client builds engineered for speed & conversion.
              </p>
            </div>

            {/* 3 Quick Project Cards */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PROJECTS.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    playTick(750);
                    onSelectProject?.(project);
                  }}
                  className="group relative p-2.5 rounded-xl bg-[#111318]/70 hover:bg-[#1A1D24] border border-white/[0.08] hover:border-[#B99B70]/50 cursor-pointer transition-all duration-300 flex flex-col justify-between"
                  data-cursor-text="PREVIEW"
                >
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-2 bg-black/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[9px] font-mono text-[#B99B70]">
                      {project.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-medium text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors truncate">
                      {project.title}
                    </h4>
                    <p className="text-[10px] text-[#A4A4AD] truncate">
                      {project.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Counter */}
            <div className="md:col-span-3 flex items-center justify-between sm:justify-around md:justify-end gap-6 border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-6">
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#B99B70]">
                  2+
                </div>
                <div className="text-[10px] font-mono text-[#A4A4AD] uppercase tracking-wider">
                  Years Exp.
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/[0.08]" />
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#F2EFE9]">
                  50+
                </div>
                <div className="text-[10px] font-mono text-[#A4A4AD] uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/[0.08]" />
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-emerald-400">
                  100%
                </div>
                <div className="text-[10px] font-mono text-[#A4A4AD] uppercase tracking-wider">
                  Satisfaction
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Technology Marquee Ticker */}
        <div className="w-full border-t border-white/[0.06] bg-[#08090D] py-2 overflow-hidden flex items-center">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-[11px] font-mono text-[#A4A4AD]">
            {BRAND_INFO.heroTickerTech.concat(BRAND_INFO.heroTickerTech).map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#B99B70]" />
                <span className="text-[#E2DDD5]/80 hover:text-[#B99B70] transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
