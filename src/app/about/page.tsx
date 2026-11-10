"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { BRAND_INFO, TECH_STACK } from "@/data/portfolioData";
import { ArrowUpRight, MapPin, Globe, Zap, CheckCircle2 } from "lucide-react";

const VALUES = [
  {
    icon: "✦",
    title: "Craft Over Templates",
    desc: "Every project is built from scratch. No drag-and-drop builders, no bloated themes. Clean, hand-written code that performs as precisely as it looks.",
  },
  {
    icon: "◈",
    title: "Performance First",
    desc: "Websites that feel instant. Sub-second load times, optimized Core Web Vitals, and lean codebases that work flawlessly across all devices and connections.",
  },
  {
    icon: "⬡",
    title: "Conversion Focused",
    desc: "Beautiful design that earns revenue. Every layout decision is informed by user psychology and conversion strategy — turning visitors into genuine clients.",
  },
  {
    icon: "⟡",
    title: "Bilingual by Design",
    desc: "Authentic Arabic and English development. True RTL architecture built with cultural sensitivity — not translations bolted onto Western layouts.",
  },
  {
    icon: "◎",
    title: "Long-Term Thinking",
    desc: "Scalable, maintainable codebases built with future growth in mind. Sites that remain fast, secure and extendable for years after launch.",
  },
  {
    icon: "✧",
    title: "Personal Accountability",
    desc: "You speak directly with the person designing and building your site. No handoffs, no account managers. Total ownership and transparent communication.",
  },
];

export default function AboutPage() {
  const allTech = [
    ...TECH_STACK.frontend,
    ...TECH_STACK.design,
    ...TECH_STACK.motionAnd3D,
    ...TECH_STACK.deploymentAndSEO,
  ];

  return (
    <main className="relative min-h-screen bg-[#08090D] text-[#F2EFE9] selection:bg-[#B99B70] selection:text-[#08090D]">
      <Navbar />

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#A78BFA]/10 via-[#B99B70]/8 to-transparent blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#B99B70]/8 to-transparent blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]">About</span>
            <span className="h-px flex-1 max-w-[60px] bg-[#B99B70]/40" />
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[96px] xl:text-[108px] tracking-tighter leading-[0.92] text-[#F2EFE9] mb-8">
            THE PRACTICE
            <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B99B70] via-[#D4B896] to-[#F2EFE9] text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Behind ARK®
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-[#E2DDD5] leading-relaxed font-light">
            An independent creative studio operating at the intersection of visual design,
            modern frontend engineering, and strategic digital experience — crafted by one person
            with absolute commitment to quality.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            {BRAND_INFO.stats.map((stat) => (
              <div key={stat.value} className="flex flex-col">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#B99B70]">{stat.value}</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E2DDD5]/60 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portrait + Story ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F2EFE9] text-[#08090D]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Portrait Column */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="relative">
              {/* Main portrait */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#E8E4DC] shadow-2xl">
                <Image
                  src="/images/abdulrehman-portrait-red.jpg"
                  alt="Abdul Rehman — ARK® Creative Studio Founder"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#08090D]/80 backdrop-blur-sm border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-white tracking-wide">Available for Projects</span>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="mt-5 p-5 rounded-2xl bg-[#08090D] text-[#F2EFE9] shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#B99B70] flex-shrink-0" />
                    <span className="text-sm text-[#E2DDD5]">Sargodha, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#B99B70] flex-shrink-0" />
                    <span className="text-sm text-[#E2DDD5]">Working Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-[#B99B70] flex-shrink-0" />
                    <span className="text-sm text-[#E2DDD5]">Freelance — Open to Projects</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/[0.07]">
                  <div className="text-[11px] font-mono text-[#B99B70] uppercase tracking-widest mb-1.5">Languages</div>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#B99B70]/10 border border-[#B99B70]/20 text-xs text-[#B99B70]">English</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-xs text-[#A78BFA]" dir="rtl">عربي</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-start pt-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]/70 mb-4">The Founder</div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-[#08090D] mb-2 leading-tight">
              Abdul Rehman
            </h2>
            <p className="font-serif italic font-normal text-[#B99B70] text-xl sm:text-2xl mb-8">
              Creative Developer &amp; Designer
            </p>

            <div className="space-y-5 text-[#111318]/85 text-base leading-relaxed">
              <p>
                I&apos;m Abdul Rehman — an independent web designer, frontend developer and graphic designer
                based in Sargodha, Pakistan. I operate under the brand <strong className="font-semibold text-[#08090D]">ARK®</strong> and work
                with ambitious businesses worldwide who demand digital experiences built to an uncompromising premium standard.
              </p>
              <p>
                My work spans custom website design and development, UI/UX architecture, bilingual Arabic
                and English web builds, brand identity design, and technical SEO. I&apos;ve delivered live
                production websites for clients in Saudi Arabia, the UAE, and Pakistan — from industrial
                fleet operators to HVAC service companies and restaurant brands.
              </p>
              <p>
                What separates my work from agencies and template shops is a combination of genuine technical
                depth and an obsessive eye for craft. I don&apos;t use generic page builders or bloated themes.
                Every project is engineered from the ground up using modern React, Next.js, and TypeScript
                — and designed with Figma and the Adobe Creative Suite.
              </p>
              <p>
                Bilingual English and Arabic development is one of my core specializations. I build true
                RTL (right-to-left) architectures that feel native to Arab and Gulf audiences — not crude
                auto-translations. This positions me to serve the high-value Saudi Arabian and UAE markets
                that are significantly underserved by Western design studios.
              </p>
              <p>
                Every engagement is personal. You work directly with me — no account managers, no outsourcing,
                no surprises. I bring over 2 years of focused freelance experience, 50+ completed projects,
                and 100% client satisfaction to every collaboration.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10 pt-10 border-t border-[#08090D]/10">
              {BRAND_INFO.stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <div className="font-display font-black text-3xl text-[#08090D] mb-1">{stat.value}</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#B99B70] mb-1">{stat.label}</div>
                  <div className="text-xs text-[#111318]/60 leading-snug">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#08090D] text-[#F2EFE9] font-display font-semibold text-sm tracking-wide hover:bg-[#B99B70] hover:text-[#08090D] transition-all duration-300"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#08090D]/20 text-[#08090D] font-display font-medium text-sm tracking-wide hover:border-[#08090D]/50 transition-all duration-300"
              >
                <span>View My Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#08090D]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]">What I Stand For</span>
            <span className="h-px flex-1 max-w-[60px] bg-[#B99B70]/40" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tighter text-[#F2EFE9] mb-4">
            Design Philosophy
          </h2>
          <p className="text-[#E2DDD5] text-base max-w-2xl mb-16 font-light">
            Six principles that guide every decision — from pixel alignment to production deployment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-2xl bg-[#111318] border border-white/[0.06] hover:border-[#B99B70]/30 transition-all duration-300 group"
              >
                <div className="text-2xl text-[#B99B70] mb-5 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                <h3 className="font-display font-semibold text-lg text-[#F2EFE9] mb-3">{v.title}</h3>
                <p className="text-sm text-[#E2DDD5] leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F2EFE9] text-[#08090D] border-t border-[#08090D]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]">Technology</span>
            <span className="h-px flex-1 max-w-[60px] bg-[#B99B70]/40" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tighter mb-14">
            Tools &amp; Technologies
          </h2>

          {/* Categorized grid */}
          {[
            { label: "Frontend Development", items: TECH_STACK.frontend },
            { label: "Design & Creative", items: TECH_STACK.design },
            { label: "Motion & 3D", items: TECH_STACK.motionAnd3D },
            { label: "Deployment & SEO", items: TECH_STACK.deploymentAndSEO },
          ].map((category) => (
            <div key={category.label} className="mb-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-4">{category.label}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {category.items.map((tech) => (
                  <div key={tech.name} className="p-4 rounded-xl bg-[#08090D]/5 border border-[#08090D]/10 hover:border-[#B99B70]/30 transition-colors group">
                    <div className="text-xs font-mono font-semibold text-[#08090D] group-hover:text-[#B99B70] transition-colors mb-1">{tech.name}</div>
                    <div className="text-[10px] text-[#111318]/50 leading-snug">{tech.level}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-6 flex flex-wrap gap-2">
            {allTech.map((t) => (
              <span key={t.name} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090D]/5 border border-[#08090D]/10 text-[11px] font-mono text-[#08090D]/60">
                <CheckCircle2 className="w-3 h-3 text-[#B99B70]" />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#08090D] text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B99B70]/[0.03] to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B99B70]/10 border border-[#B99B70]/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-[#B99B70] uppercase tracking-widest">Currently Available</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-[#F2EFE9] mb-6">
            Ready to work together?
          </h2>
          <p className="text-[#E2DDD5] text-base mb-10 font-light leading-relaxed">
            Let&apos;s build something exceptional for your business. No templates, no shortcuts — just precision craftsmanship.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#B99B70] to-[#9E825C] text-[#08090D] font-display font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(185,155,112,0.5)] transition-all duration-300"
            >
              Start Your Project <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/20 text-[#F2EFE9] font-display font-medium text-sm tracking-wide hover:border-[#B99B70]/50 transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
