"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MessageCircle, Globe, Heart } from "lucide-react";
import { BRAND_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050608] text-[#F2EFE9] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-3xl tracking-tighter text-[#F2EFE9]">
                ARK
              </span>
              <span className="text-xs font-mono text-[#B99B70]">®</span>
              <div className="h-4 w-[1px] bg-white/20 mx-2" />
              <span className="text-xs font-mono text-[#A4A4AD] uppercase tracking-widest">
                Creative Studio
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed max-w-sm mb-6 font-light">
              Independent digital practice led by <strong>Abdul Rehman</strong>. Engineering high-converting web applications, luxury UI/UX interfaces, and bilingual Arabic/English platforms for forward-thinking brands worldwide.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-[#A4A4AD]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Sargodha, Pakistan • Remote Worldwide</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#A4A4AD]">
              {[
                { label: "Home", href: "#hero" },
                { label: "Editorial Intro", href: "#about" },
                { label: "Selected Projects", href: "#projects" },
                { label: "Capabilities Bento", href: "#capabilities" },
                { label: "Client Services", href: "#services" },
                { label: "Process Blueprint", href: "#process" },
                { label: "Technology Stack", href: "#technology" },
                { label: "Start A Project", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F2EFE9] hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] font-semibold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#B99B70]/40 transition-colors group"
              >
                <div className="flex items-center gap-2.5 text-[#F2EFE9]">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp (0314 1495630)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A4A4AD] group-hover:text-[#B99B70] transition-colors" />
              </a>

              <a
                href={`mailto:${BRAND_INFO.contact.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#B99B70]/40 transition-colors group"
              >
                <div className="flex items-center gap-2.5 text-[#F2EFE9]">
                  <Mail className="w-4 h-4 text-[#B99B70]" />
                  <span className="truncate">{BRAND_INFO.contact.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A4A4AD] group-hover:text-[#B99B70] transition-colors" />
              </a>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-tr from-[#B99B70]/10 to-transparent border border-[#B99B70]/20">
              <div className="text-[11px] font-mono text-[#B99B70] mb-1">
                CURRENT AVAILABILITY
              </div>
              <p className="text-xs text-[#E2DDD5]/80 font-light">
                Accepting select freelance contracts for Q1 / Q2 2026.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A4A4AD]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ARK® — Abdul Rehman.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#A4A4AD] hover:text-[#B99B70] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
