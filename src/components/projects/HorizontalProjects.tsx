"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ArrowUpRight, ExternalLink, Layers, Sparkles, Eye, CheckCircle } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

interface HorizontalProjectsProps {
  selectedProject?: Project | null;
  onSelectProject?: (project: Project | null) => void;
}

export default function HorizontalProjects({
  selectedProject: externalSelected,
  onSelectProject: externalOnSelect,
}: HorizontalProjectsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [internalSelected, setInternalSelected] = useState<Project | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeProject = externalSelected !== undefined ? externalSelected : internalSelected;
  const setActiveProject = externalOnSelect || setInternalSelected;

  const checkScrollBounds = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-[#111318] text-[#F2EFE9] py-28 sm:py-36 overflow-hidden border-t border-white/[0.06] scroll-mt-20"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#B99B70]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header Telemetry */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B99B70]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B99B70] font-semibold">
                03 / Curated Portfolio Showcase
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2EFE9] tracking-tight">
              Selected Projects & Case Studies
            </h2>
            <p className="text-sm text-[#A4A4AD] font-light mt-2 max-w-xl">
              Real projects delivered for commercial clients across Saudi Arabia, the UAE, and Pakistan.
            </p>
          </div>

          {/* Desktop Carousel Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all ${
                canScrollLeft
                  ? "bg-white/[0.04] hover:bg-[#B99B70] border-white/10 hover:border-[#B99B70] text-white hover:text-black cursor-pointer"
                  : "bg-white/[0.01] border-white/[0.05] text-white/20 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all ${
                canScrollRight
                  ? "bg-white/[0.04] hover:bg-[#B99B70] border-white/10 hover:border-[#B99B70] text-white hover:text-black cursor-pointer"
                  : "bg-white/[0.01] border-white/[0.05] text-white/20 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Track */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollBounds}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth flex gap-6 px-4 sm:px-6 lg:px-8 pb-8 pt-2"
        data-cursor-text="DRAG"
      >
        {PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className="group relative flex-none w-[88vw] sm:w-[540px] lg:w-[620px] rounded-2xl bg-[#0B0D12] border border-white/[0.08] hover:border-[#B99B70]/60 p-5 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Top Project Badges */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-lg text-[#B99B70]">
                  {project.number}
                </span>
                <span className="text-white/20">/</span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#A4A4AD]">
                  {project.category}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#E2DDD5]">
                {project.location}
              </span>
            </div>

            {/* Laptop / Browser Mockup Screen */}
            <div
              onClick={() => setActiveProject(project)}
              className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/90 border border-white/10 mb-6 cursor-pointer group-hover:border-[#B99B70]/40 transition-colors shadow-2xl"
              data-cursor-text="VIEW"
            >
              {/* Browser bar */}
              <div className="h-6 w-full bg-[#1A1D24] border-b border-white/[0.08] flex items-center px-3 justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rose-500/70" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/70" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
                </div>
                <div className="text-[9px] font-mono text-[#A4A4AD] opacity-80 truncate max-w-[200px]">
                  {project.client}
                </div>
                <div className="w-4" />
              </div>

              {/* Screenshot Image with Smooth Hover Zoom */}
              <div className="relative w-full h-[calc(100%-24px)] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-mono text-white bg-black/75 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#B99B70]" />
                    Click to Open Full Case Study
                  </span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-[#E2DDD5]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] gap-3">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-[#F2EFE9] hover:text-[#B99B70] transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#B99B70] border border-white/10 hover:border-[#B99B70] text-[#E2DDD5] hover:text-[#08090D] text-xs font-mono transition-all"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Modal Component */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
