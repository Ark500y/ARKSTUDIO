"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { PROJECTS, BRAND_INFO } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, CheckCircle2, Tag, ArrowLeft, MessageCircle } from "lucide-react";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#08090D] text-[#F2EFE9] flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center pt-24">
          <div className="text-7xl mb-6">404</div>
          <h1 className="font-display font-bold text-3xl text-[#F2EFE9] mb-4">Project Not Found</h1>
          <p className="text-[#E2DDD5] mb-8">The project you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B99B70] text-[#08090D] font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const projectIndex = PROJECTS.findIndex((p) => p.id === params.slug);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <main className="relative min-h-screen bg-[#08090D] text-[#F2EFE9] selection:bg-[#B99B70] selection:text-[#08090D]">
      <Navbar />

      {/* ── Full-Bleed Hero ─────────────────────────────────────────── */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/60 to-[#08090D]/20" />

        {/* Back Button */}
        <Link
          href="/projects"
          className="absolute top-24 left-4 sm:left-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#08090D]/70 backdrop-blur-sm border border-white/10 text-[#F2EFE9] text-xs font-mono hover:border-[#B99B70]/40 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All Projects
        </Link>

        {/* Hero Meta */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wide ${
                project.status === "Live Project" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                project.status === "Featured Production" ? "bg-[#A78BFA]/20 text-[#A78BFA] border border-[#A78BFA]/30" :
                "bg-[#B99B70]/20 text-[#B99B70] border border-[#B99B70]/30"
              }`}>
                {project.status}
              </span>
              <span className="text-[11px] font-mono text-[#B99B70] uppercase tracking-widest">{project.number}</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#F2EFE9] mb-3 leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#E2DDD5]/70 font-mono">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.location}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article + Sidebar ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Article ── */}
          <article className="lg:col-span-8">
            {/* Overview */}
            <div className="mb-10">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-4">Overview</h2>
              <p className="text-[#E2DDD5] text-base sm:text-lg leading-relaxed">{project.fullDesc}</p>
            </div>

            {/* Challenge */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111318] border border-white/[0.06] mb-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-4">The Challenge</h2>
              <p className="text-[#E2DDD5] text-base leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F2EFE9] border border-[#08090D]/10 mb-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-4">The Solution</h2>
              <p className="text-[#111318]/85 text-base leading-relaxed">{project.solution}</p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-5">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 p-4 rounded-xl bg-[#111318] border border-white/[0.05]">
                    <CheckCircle2 className="w-4 h-4 text-[#B99B70] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#E2DDD5] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary Image */}
            {project.secondaryImage && (
              <div className="mb-10 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={project.secondaryImage}
                  alt={`${project.title} — secondary view`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Tags */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111318] border border-white/[0.08] text-xs font-mono text-[#E2DDD5]">
                    <Tag className="w-3 h-3 text-[#B99B70]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">

              {/* Metrics */}
              <div className="p-6 rounded-2xl bg-[#111318] border border-white/[0.06]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-5">Project Metrics</h3>
                <div className="space-y-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between gap-4 pb-3 border-b border-white/[0.05] last:border-0 last:pb-0">
                      <span className="text-xs font-mono text-[#A4A4AD] uppercase tracking-wide">{m.label}</span>
                      <span className="text-sm font-semibold text-[#F2EFE9]">{m.value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <span className="text-xs font-mono text-[#A4A4AD] uppercase tracking-wide">Year</span>
                    <span className="text-sm font-semibold text-[#F2EFE9]">{project.year}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-[#A4A4AD] uppercase tracking-wide">Location</span>
                    <span className="text-sm font-semibold text-[#F2EFE9]">{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Live Site */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-2xl bg-[#111318] border border-white/[0.06] hover:border-[#B99B70]/30 transition-colors group"
                >
                  <div>
                    <div className="text-xs font-mono text-[#B99B70] mb-1">Live Website</div>
                    <div className="text-sm text-[#E2DDD5] font-medium break-all">{project.liveUrl.replace("https://", "")}</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#A4A4AD] group-hover:text-[#B99B70] flex-shrink-0 ml-3 transition-colors" />
                </a>
              )}

              {/* Get Something Similar */}
              <a
                href={`${BRAND_INFO.contact.whatsappUrl}?text=Hi%20Abdul%2C%20I%20saw%20your%20${encodeURIComponent(project.title)}%20case%20study%20and%20I%20want%20something%20similar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-mono text-emerald-400 mb-0.5">Get Something Similar</div>
                  <div className="text-sm text-[#E2DDD5]">Message me on WhatsApp</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 ml-auto" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Next Project Band ───────────────────────────────────────── */}
      <section className="border-t border-white/[0.06]">
        <Link
          href={`/projects/${nextProject.id}`}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-8 lg:px-16 py-10 hover:bg-[#111318]/50 transition-colors group"
        >
          <div>
            <div className="text-xs font-mono text-[#A4A4AD] uppercase tracking-widest mb-2">Next Project</div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors">
              {nextProject.title}
            </h3>
            <p className="text-sm text-[#E2DDD5]/60 mt-1">{nextProject.category} · {nextProject.year}</p>
          </div>
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#111318] border border-white/[0.08] flex items-center justify-center group-hover:border-[#B99B70]/40 group-hover:bg-[#B99B70]/10 transition-all">
            <ArrowUpRight className="w-6 h-6 text-[#B99B70]" />
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
