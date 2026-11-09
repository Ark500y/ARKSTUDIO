"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Palette,
  Layout,
  Globe2,
  Cpu,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  ShieldCheck,
  Languages,
  Check,
  Copy,
} from "lucide-react";
import { BENTO_CAPABILITIES } from "@/data/portfolioData";
import { playTick } from "@/utils/audio";

export default function BentoCapabilities() {
  const [bilingualActive, setBilingualActive] = useState<"en" | "ar">("ar");
  const [uiTab, setUiTab] = useState<"wireframe" | "interface">("interface");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const brandSwatches = [
    { name: "Obsidian", hex: "#08090D", bgClass: "bg-[#08090D]", textDark: false },
    { name: "Charcoal", hex: "#111318", bgClass: "bg-[#111318]", textDark: false },
    { name: "Champagne", hex: "#B99B70", bgClass: "bg-[#B99B70]", textDark: true },
    { name: "Warm Ivory", hex: "#F2EFE9", bgClass: "bg-[#F2EFE9]", textDark: true },
  ];

  const handleCopyColor = (hex: string) => {
    playTick(850);
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#08090D] text-[#F2EFE9] pt-32 sm:pt-36 pb-28 sm:pb-36 overflow-hidden border-t border-white/[0.06] scroll-mt-24"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#A78BFA]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B99B70]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B99B70] font-semibold">
              04 / Creative Capabilities
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2EFE9] tracking-tight mb-4">
            The Bento Matrix. <br />
            <span className="font-serif italic font-normal text-[#B99B70]">
              Engineered Without Compromise.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A4A4AD] font-light leading-relaxed">
            Six disciplined core capabilities designed to take businesses from an ambiguous concept to a world-class digital brand.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 01: Website Design & Development (Col Span 8) */}
          <div className="col-span-12 lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0F1117] border border-white/[0.08] hover:border-[#B99B70]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#B99B70] tracking-wider font-semibold">
                  01 / FRONTEND ENGINEERING
                </span>
                <span className="px-2.5 py-1 rounded bg-[#B99B70]/10 border border-[#B99B70]/20 text-[10px] font-mono text-[#B99B70]">
                  Core Foundation
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors mb-2">
                Website Design & Development
              </h3>
              <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed max-w-xl mb-6 font-light">
                Bespoke digital platforms engineered from scratch using Next.js 16, React 19, and TypeScript. No sluggish WordPress plugins, no rigid site builder templates, just blazing-fast handcrafted web software.
              </p>
            </div>

            {/* Interactive Code Preview Terminal */}
            <div className="w-full rounded-xl bg-black/70 border border-white/10 p-4 font-mono text-[11px] sm:text-xs text-[#A4A4AD] shadow-inner mb-6 overflow-x-auto">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06] text-[10px] text-white/40">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[#E2DDD5]/70 font-mono">Architecture.tsx</span>
                </div>
                <span className="text-emerald-400 font-mono">Next.js 16 • Turbopack</span>
              </div>
              <pre className="text-[#E2DDD5] leading-relaxed font-mono">
                <code>
                  <span className="text-white/30 mr-3">1</span>
                  <span className="text-purple-400">export default async function</span>{" "}
                  <span className="text-[#B99B70]">DigitalExperience</span>() &#123;
                  <br />
                  <span className="text-white/30 mr-3">2</span>
                  {"  "}<span className="text-purple-400">const</span> stack = [
                  <span className="text-emerald-300">&apos;Next.js&apos;</span>,{" "}
                  <span className="text-emerald-300">&apos;Three.js&apos;</span>,{" "}
                  <span className="text-emerald-300">&apos;Tailwind&apos;</span>];
                  <br />
                  <span className="text-white/30 mr-3">3</span>
                  {"  "}<span className="text-purple-400">return</span> &lt;
                  <span className="text-amber-300">FastReliablePlatform</span> speed=
                  <span className="text-blue-300">&quot;99+&quot;</span> /&gt;;
                  <br />
                  <span className="text-white/30 mr-3">4</span>
                  &#125;
                </code>
              </pre>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.06]">
              {["Modular React 19", "Server Actions", "Zero Layout Shift", "Edge Caching"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#A4A4AD]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B99B70] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 02: Brand Identity Design with Interactive Swatches (Col Span 4) */}
          <div className="col-span-12 lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0F1117] border border-white/[0.08] hover:border-[#B99B70]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#B99B70] tracking-wider font-semibold">
                  02 / ART DIRECTION
                </span>
                <Palette className="w-4 h-4 text-[#B99B70]" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors mb-2">
                Brand Identity & Graphic Art
              </h3>
              <p className="text-xs text-[#A4A4AD] leading-relaxed mb-6 font-light">
                Vector logo systems, typographic marks, color rules, and promotional artwork that etch your business in memory.
              </p>
            </div>

            {/* Visual Color & Mark Sandbox with Interactive Swatches */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-6 flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl tracking-tighter text-[#F2EFE9]">
                  ARK<span className="text-[#B99B70]">®</span>
                </span>
                <span className="text-[10px] font-mono text-[#A4A4AD]">Click Swatch to Copy</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {brandSwatches.map((swatch) => (
                  <button
                    key={swatch.hex}
                    type="button"
                    onClick={() => handleCopyColor(swatch.hex)}
                    className={`relative h-11 rounded-lg ${swatch.bgClass} border border-white/15 flex flex-col items-center justify-center p-1 transition-transform hover:scale-105 group/swatch`}
                    title={`${swatch.name} (${swatch.hex})`}
                  >
                    {copiedColor === swatch.hex ? (
                      <Check className={`w-3.5 h-3.5 ${swatch.textDark ? "text-black" : "text-emerald-400"}`} />
                    ) : (
                      <span className={`text-[8px] font-mono tracking-tighter ${swatch.textDark ? "text-black/80 font-bold" : "text-white/70"}`}>
                        {swatch.hex}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#A4A4AD]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B99B70]" />
                <span>Vector Typography & Logomarks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B99B70]" />
                <span>Social Kits & Fast Foodie Posters</span>
              </div>
            </div>
          </div>

          {/* Card 03: UI/UX Design (Col Span 4) */}
          <div className="col-span-12 lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0F1117] border border-white/[0.08] hover:border-[#B99B70]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#B99B70] tracking-wider font-semibold">
                  03 / USER EXPERIENCE
                </span>
                <Layout className="w-4 h-4 text-[#B99B70]" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors mb-2">
                UI/UX & Design Systems
              </h3>
              <p className="text-xs text-[#A4A4AD] leading-relaxed mb-6 font-light">
                Precision Figma wireframing and design systems built around psychological conversion funnels.
              </p>
            </div>

            {/* Interactive Wireframe vs High-Fidelity Switch */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 mb-6">
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                <span className="text-[#A4A4AD]">Figma Viewport</span>
                <div className="flex bg-white/5 p-0.5 rounded-md">
                  <button
                    onClick={() => {
                      playTick(700);
                      setUiTab("wireframe");
                    }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      uiTab === "wireframe" ? "bg-[#B99B70] text-black font-semibold" : "text-[#A4A4AD]"
                    }`}
                  >
                    Wireframe
                  </button>
                  <button
                    onClick={() => {
                      playTick(800);
                      setUiTab("interface");
                    }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      uiTab === "interface" ? "bg-[#B99B70] text-black font-semibold" : "text-[#A4A4AD]"
                    }`}
                  >
                    UI Design
                  </button>
                </div>
              </div>

              {/* Mini canvas representation */}
              <div className="h-20 w-full rounded-lg border border-dashed border-white/20 p-2.5 flex flex-col justify-between bg-[#111318]/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className={`h-2.5 w-14 rounded transition-colors ${uiTab === "interface" ? "bg-[#B99B70]" : "bg-white/20"}`} />
                  <div className="h-2 w-8 rounded bg-white/10" />
                </div>
                <div className={`h-7 w-full rounded flex items-center px-2.5 text-[9px] font-mono transition-colors ${uiTab === "interface" ? "bg-white/[0.06] text-[#E2DDD5] border border-white/10" : "bg-white/[0.02] text-white/40 border border-dashed border-white/10"}`}>
                  {uiTab === "interface" ? "✦ High-Converting Editorial Layout" : "▧ Information Architecture Grid"}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#A4A4AD]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B99B70]" />
                <span>Conversion Rate Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B99B70]" />
                <span>Responsive Component Libraries</span>
              </div>
            </div>
          </div>

          {/* Card 04: Bilingual English & Arabic Websites (Col Span 8) - Interactive RTL switcher */}
          <div className="col-span-12 lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0F1117] border border-white/[0.08] hover:border-[#B99B70]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#B99B70] tracking-wider font-semibold">
                  04 / REGIONAL SPECIALTY
                </span>
                {/* Live LTR / RTL Demo Toggle */}
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 p-1 rounded-full text-xs font-mono">
                  <Languages className="w-3.5 h-3.5 text-[#B99B70] ml-1" />
                  <button
                    onClick={() => {
                      playTick(700);
                      setBilingualActive("en");
                    }}
                    className={`px-3 py-1 rounded-full transition-all ${
                      bilingualActive === "en" ? "bg-[#B99B70] text-black font-bold" : "text-[#A4A4AD]"
                    }`}
                  >
                    English (LTR)
                  </button>
                  <button
                    onClick={() => {
                      playTick(850);
                      setBilingualActive("ar");
                    }}
                    className={`px-3 py-1 rounded-full transition-all ${
                      bilingualActive === "ar" ? "bg-[#B99B70] text-black font-bold" : "text-[#A4A4AD]"
                    }`}
                  >
                    العربية (RTL)
                  </button>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors mb-2">
                Arabic & English Bilingual Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed max-w-xl mb-6 font-light">
                Specialized in Middle Eastern commercial expansion (Saudi Arabia & UAE). True bidirectional RTL/LTR layout logic with native Arabic typographic rhythm.
              </p>
            </div>

            {/* Interactive Live Bilingual Card Preview (Based on Mian Saqib KSA) */}
            <div
              dir={bilingualActive === "ar" ? "rtl" : "ltr"}
              className={`p-5 sm:p-6 rounded-xl bg-black/70 border border-white/10 mb-6 transition-all duration-500 shadow-xl ${
                bilingualActive === "ar" ? "font-arabic" : "font-sans"
              }`}
            >
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#B99B70]">
                <span>
                  {bilingualActive === "ar"
                    ? "🇸🇦 المشغل الموثوق في السعودية • الدمام"
                    : "🇸🇦 Saudi Arabia Trusted Operator • Dammam"}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold text-[10px]">
                  {bilingualActive === "ar" ? "نشط الآن" : "LIVE BUILD"}
                </span>
              </div>
              <h4 className="text-base sm:text-xl font-bold text-[#F2EFE9] mb-2 leading-snug">
                {bilingualActive === "ar"
                  ? "رفع الأثقال بكل احترافية — خدمات الرافعات المتطورة"
                  : "Heavy Lifting Done Right — Industrial Boom Truck Services"}
              </h4>
              <p className="text-xs sm:text-sm text-[#A4A4AD] mb-4 font-light">
                {bilingualActive === "ar"
                  ? "حلول آمنة وسريعة للمقاولات والمشاريع الصناعية في المنطقة الشرقية بالمملكة العربية السعودية."
                  : "Safe, efficient and reliable boom truck lifting solutions for logistics and industrial contractors."}
              </p>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-[#B99B70] text-black text-xs font-semibold">
                  {bilingualActive === "ar" ? "تواصل عبر واتساب" : "WhatsApp Me"}
                </span>
                <span className="text-xs font-mono text-[#A4A4AD]">
                  {bilingualActive === "ar" ? "اتصال فوري: 059 403 2500" : "Direct Call: 059 403 2500"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/[0.06] text-xs text-[#A4A4AD]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B99B70]" />
                KSA & UAE Local Directory SEO
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B99B70]" />
                Proper Arabic Typography Pairing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B99B70]" />
                Zero Flawed Machine Translations
              </span>
            </div>
          </div>

          {/* Card 05: AI-Assisted Accelerated Workflow (Col Span 6) */}
          <div className="col-span-12 lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0F1117] border border-white/[0.08] hover:border-[#B99B70]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#B99B70] tracking-wider font-semibold">
                  05 / VELOCITY & AGILITY
                </span>
                <Cpu className="w-4 h-4 text-[#B99B70]" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors mb-2">
                AI-Assisted Accelerated Workflow
              </h3>
              <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed mb-6 font-light">
                Leveraging state-of-the-art AI workflows to eliminate repetitive boilerplate, synthesize clean data schemas, and deliver studio-grade custom code at unmatched turnarounds.
              </p>
            </div>

            {/* Velocity Metrics Gauge */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/60 border border-white/10 mb-6 text-center">
              <div>
                <div className="font-display font-bold text-xl text-emerald-400">3x</div>
                <div className="text-[10px] font-mono text-[#A4A4AD] mt-0.5">Faster Delivery</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-[#B99B70]">0%</div>
                <div className="text-[10px] font-mono text-[#A4A4AD] mt-0.5">Code Bloat</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-[#F2EFE9]">100%</div>
                <div className="text-[10px] font-mono text-[#A4A4AD] mt-0.5">Hand-Crafted</div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#A4A4AD]">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#B99B70]" />
                <span>Rapid iterative prototyping and live staging</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#B99B70]" />
                <span>Strict code review, type safety and accessibility</span>
              </div>
            </div>
          </div>

          {/* Card 06: SEO & Performance with Animated SVG Gauges (Col Span 6) */}
          <div className="col-span-12 lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0F1117] border border-white/[0.08] hover:border-[#B99B70]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#B99B70] tracking-wider font-semibold">
                  06 / TECHNICAL EXCELLENCE
                </span>
                <Search className="w-4 h-4 text-[#B99B70]" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors mb-2">
                Technical SEO & Core Web Vitals
              </h3>
              <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed mb-6 font-light">
                Clean semantic HTML5, valid Schema.org JSON-LD microdata, Open Graph tags, and sub-second load times engineered to win Google rankings.
              </p>
            </div>

            {/* Authentic SVG Circular Lighthouse Gauges */}
            <div className="grid grid-cols-4 gap-2.5 p-4 rounded-xl bg-black/60 border border-white/10 mb-6 text-center">
              {[
                { label: "Performance", score: 98 },
                { label: "Accessibility", score: 100 },
                { label: "Best Practice", score: 100 },
                { label: "SEO Rank", score: 100 },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="relative w-12 h-12 flex items-center justify-center mb-1.5">
                    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/10"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray={`${item.score}, 100`}
                        strokeWidth="3"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-bold text-xs text-emerald-400">
                      {item.score}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-[#A4A4AD] leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#A4A4AD]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B99B70]" />
                <span>Rich Snippet Structured Data (Person & ProfessionalService)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B99B70]" />
                <span>Zero Cumulative Layout Shift (CLS) on Mobile</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
