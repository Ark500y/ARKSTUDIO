"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, ArrowRight, CheckCircle2, Globe, Shield, Tag, MapPin, Calendar } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0E1015] border border-white/10 text-[#F2EFE9] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[#A4A4AD] hover:text-[#F2EFE9] transition-all"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Telemetry */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A4A4AD] mb-4">
          <span className="text-[#B99B70] font-semibold">{project.number}</span>
          <span>•</span>
          <span className="uppercase">{project.category}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#B99B70]" />
            {project.location}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#F2EFE9] mb-4">
          {project.title}
        </h2>

        {/* Main Screenshot in Browser Mockup Frame */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/80 border border-white/10 mb-8 shadow-2xl">
          {/* Browser Header Bar */}
          <div className="h-7 w-full bg-[#1A1D24] border-b border-white/10 flex items-center px-3 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <div className="mx-auto text-[10px] font-mono text-[#A4A4AD] truncate max-w-xs px-2 py-0.5 rounded bg-black/40">
              {project.liveUrl || "Production Case Study Preview"}
            </div>
          </div>
          <div className="relative w-full h-[calc(100%-28px)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#A4A4AD] mb-1">
                {m.label}
              </div>
              <div className="font-display font-bold text-base sm:text-lg text-[#B99B70]">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Deep Breakdown: Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-[#111318] border border-white/[0.08]">
            <h3 className="font-display font-bold text-base text-[#F2EFE9] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              The Challenge
            </h3>
            <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#111318] border border-white/[0.08]">
            <h3 className="font-display font-bold text-base text-[#F2EFE9] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              The Architectural Solution
            </h3>
            <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mb-8">
          <h3 className="font-display font-bold text-base text-[#F2EFE9] mb-3">
            Delivered Capabilities & Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A4A4AD]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B99B70] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-white/[0.08]">
          <span className="text-[11px] font-mono text-[#A4A4AD] mr-2">Technologies:</span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#E2DDD5]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B99B70] hover:bg-[#A88B60] text-[#08090D] font-display font-semibold text-xs transition-all shadow-[0_0_20px_rgba(185,155,112,0.3)]"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="text-xs font-mono text-[#A4A4AD] italic">
                Client branding & visual identity project
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-[#E2DDD5] transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
