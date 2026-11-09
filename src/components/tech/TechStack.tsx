"use client";

import React from "react";
import {
  Code,
  Palette,
  Play,
  Box,
  Globe,
  Search,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { TECH_STACK } from "@/data/portfolioData";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend & Code",
      icon: <Code className="w-4 h-4 text-[#B99B70]" />,
      items: TECH_STACK.frontend,
    },
    {
      title: "Design & Art Direction",
      icon: <Palette className="w-4 h-4 text-[#A78BFA]" />,
      items: TECH_STACK.design,
    },
    {
      title: "3D & Motion Physics",
      icon: <Box className="w-4 h-4 text-[#B99B70]" />,
      items: TECH_STACK.motionAnd3D,
    },
    {
      title: "Deployment & SEO Strategy",
      icon: <Globe className="w-4 h-4 text-emerald-400" />,
      items: TECH_STACK.deploymentAndSEO,
    },
  ];

  return (
    <section
      id="technology"
      className="relative w-full bg-[#111318] text-[#F2EFE9] py-28 sm:py-36 overflow-hidden border-t border-white/[0.06] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B99B70]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B99B70] font-semibold">
              07 / Genuine Tooling & Stack
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2EFE9] tracking-tight mb-4">
            Tested Technologies. <br />
            <span className="font-serif italic font-normal text-[#B99B70]">
              Zero Fabricated Claims.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A4A4AD] font-light leading-relaxed">
            Only modern tools and frameworks with genuine, production-tested capability are listed. Every site is engineered to endure.
          </p>
        </div>

        {/* 4 Categorized Tooling Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-[#0B0D12] border border-white/[0.08] hover:border-[#B99B70]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-white/[0.08]">
                  {cat.icon}
                  <h3 className="font-display font-bold text-sm text-[#F2EFE9]">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <div className="flex items-center justify-between text-xs font-medium text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors">
                        <span>{item.name}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B99B70]/60" />
                      </div>
                      <span className="text-[11px] font-mono text-[#A4A4AD] mt-0.5">
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Certified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
