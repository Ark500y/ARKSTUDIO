"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { PROJECTS, BRAND_INFO } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, X, CheckCircle2, Tag } from "lucide-react";

function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#08090D]/90 backdrop-blur-xl" />
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#111318] border border-white/[0.08] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Hero Image */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#08090D]/70 backdrop-blur-sm border border-white/10 text-[#F2EFE9] hover:text-[#B99B70] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-6">
            <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wide mb-2 ${
              project.status === "Live Project" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
              project.status === "Featured Production" ? "bg-[#A78BFA]/20 text-[#A78BFA] border border-[#A78BFA]/30" :
              "bg-[#B99B70]/20 text-[#B99B70] border border-[#B99B70]/30"
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <span className="text-[11px] font-mono text-[#B99B70] uppercase tracking-widest">{project.number} · {project.category}</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F2EFE9] mt-1">{project.title}</h2>
              <p className="text-sm text-[#E2DDD5]/60 mt-1">{project.location} · {project.year}</p>
            </div>
          </div>

          <p className="text-[#E2DDD5] text-base leading-relaxed mb-6">{project.fullDesc}</p>

          {/* Challenge */}
          <div className="p-5 rounded-xl bg-[#08090D] border border-white/[0.06] mb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-3">Challenge</h3>
            <p className="text-sm text-[#E2DDD5] leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="p-5 rounded-xl bg-[#F2EFE9] border border-[#08090D]/10 mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-3">Solution</h3>
            <p className="text-sm text-[#111318]/80 leading-relaxed">{project.solution}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-3">Features</h3>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B99B70] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#E2DDD5]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090D] border border-white/[0.08] text-xs font-mono text-[#E2DDD5]">
                <Tag className="w-3 h-3 text-[#B99B70]" />
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/projects/${project.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B99B70] to-[#9E825C] text-[#08090D] font-display font-bold text-sm hover:shadow-[0_0_20px_rgba(185,155,112,0.4)] transition-all"
            >
              Read Case Study <ArrowUpRight className="w-4 h-4" />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[#F2EFE9] font-display font-medium text-sm hover:border-[#B99B70]/50 transition-all"
              >
                View Live Site <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [modalProject, setModalProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <main className="relative min-h-screen bg-[#08090D] text-[#F2EFE9] selection:bg-[#B99B70] selection:text-[#08090D]">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full bg-gradient-to-bl from-[#A78BFA]/10 to-transparent blur-[130px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]">Portfolio</span>
            <span className="h-px flex-1 max-w-[60px] bg-[#B99B70]/40" />
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[96px] tracking-tighter leading-[0.92] text-[#F2EFE9] mb-6">
            REAL PROJECTS.
            <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B99B70] to-[#F2EFE9] text-4xl sm:text-6xl lg:text-7xl">
              Real Impact.
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-[#E2DDD5] leading-relaxed font-light">
            Live client deployments and production builds — each one demonstrating a specific
            discipline, regional market, or technical challenge solved.
          </p>
        </div>
      </section>

      {/* ── Projects Grid ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* First project — full width featured */}
          {PROJECTS[0] && (
            <div
              className="mb-8 group cursor-pointer"
              onClick={() => setModalProject(PROJECTS[0])}
            >
              <div className="relative w-full h-80 sm:h-[480px] rounded-2xl overflow-hidden bg-[#111318]">
                <Image
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/90 via-[#08090D]/40 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-semibold uppercase tracking-wide">
                    {PROJECTS[0].status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#B99B70]/20 text-[#B99B70] border border-[#B99B70]/20 text-[11px] font-mono font-bold">
                    {PROJECTS[0].number}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:bottom-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-mono text-[#B99B70] uppercase tracking-widest">{PROJECTS[0].category}</span>
                    <span className="text-[#A4A4AD]/50">·</span>
                    <span className="text-[11px] font-mono text-[#A4A4AD]">{PROJECTS[0].year}</span>
                  </div>
                  <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F2EFE9] mb-3 leading-tight">
                    {PROJECTS[0].title}
                  </h2>
                  <p className="text-sm text-[#E2DDD5]/80 max-w-2xl mb-5">{PROJECTS[0].shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {PROJECTS[0].tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-[#E2DDD5]">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <Link
                      href={`/projects/${PROJECTS[0].id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B99B70] to-[#9E825C] text-[#08090D] font-display font-bold text-sm hover:shadow-[0_0_20px_rgba(185,155,112,0.4)] transition-all"
                    >
                      Read Case Study <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    {PROJECTS[0].liveUrl && (
                      <a
                        href={PROJECTS[0].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[#F2EFE9] font-display font-medium text-sm hover:border-[#B99B70]/50 transition-all"
                      >
                        View Live <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Remaining projects — 2 col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(1).map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setModalProject(project)}
              >
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#111318] mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wide ${
                      project.status === "Live Project" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                      project.status === "Featured Production" ? "bg-[#A78BFA]/20 text-[#A78BFA] border border-[#A78BFA]/30" :
                      "bg-[#B99B70]/20 text-[#B99B70] border border-[#B99B70]/30"
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-[#B99B70]/20 text-[#B99B70] border border-[#B99B70]/20 text-[11px] font-mono font-bold">
                      {project.number}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[#B99B70] uppercase tracking-widest">{project.category}</span>
                    <span className="text-[#A4A4AD]/50">·</span>
                    <span className="text-[11px] font-mono text-[#A4A4AD]">{project.year}</span>
                  </div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F2EFE9] mb-2 group-hover:text-[#B99B70] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#E2DDD5] leading-relaxed mb-4">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-[#111318] border border-white/[0.08] text-xs font-mono text-[#E2DDD5]">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111318] border border-[#B99B70]/30 text-[#B99B70] font-medium text-xs hover:bg-[#B99B70]/10 transition-all"
                    >
                      Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] text-[#E2DDD5] font-medium text-xs hover:border-[#B99B70]/30 transition-all"
                      >
                        Live Site <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F2EFE9] text-[#08090D]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tighter mb-5">
            Want results like these?
          </h2>
          <p className="text-[#111318]/70 text-base max-w-xl mx-auto mb-10">
            Every project here started with a simple conversation. Let&apos;s talk about what you&apos;re building.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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

      {/* ── Project Modal ─────────────────────────────────────────── */}
      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}

      <Footer />
    </main>
  );
}
