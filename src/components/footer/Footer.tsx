"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { BRAND_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const pages = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    "Website Design & Development",
    "UI/UX & Interface Design",
    "Brand Identity & Graphic Art",
    "Bilingual English & Arabic",
    "SEO & Performance",
  ];

  return (
    <footer className="w-full bg-[#050608] text-[#F2EFE9] border-t border-white/[0.08] pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-1.5 mb-5 group">
              <span className="font-display font-bold text-3xl tracking-tighter text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors">ARK</span>
              <span className="text-sm font-mono text-[#B99B70]">®</span>
              <span className="text-[10px] font-mono text-[#E2DDD5]/60 uppercase tracking-widest ml-2">Creative Studio</span>
            </Link>

            <p className="text-sm text-[#E2DDD5] leading-relaxed max-w-sm mb-6 font-light">
              Independent digital practice led by <strong className="text-[#F2EFE9] font-medium">Abdul Rehman</strong>. 
              Building high-converting websites, premium UI/UX, and bilingual English & Arabic platforms for ambitious brands worldwide.
            </p>

            <div className="flex items-center gap-2.5 text-sm font-mono text-[#E2DDD5]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sargodha, Pakistan · Remote Worldwide</span>
            </div>

            {/* Contact Links */}
            <div className="mt-6 space-y-2.5">
              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-[#F2EFE9]">WhatsApp — {BRAND_INFO.contact.phoneDisplay}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E2DDD5]/50 group-hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href={`mailto:${BRAND_INFO.contact.email}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] hover:border-[#B99B70]/30 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B99B70]" />
                  <span className="text-sm text-[#F2EFE9] truncate">{BRAND_INFO.contact.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E2DDD5]/50 group-hover:text-[#B99B70] transition-colors" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B99B70] font-semibold mb-5">Pages</h4>
            <ul className="space-y-3">
              {pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E2DDD5] hover:text-[#B99B70] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B99B70] font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-[#E2DDD5] hover:text-[#B99B70] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B99B70] font-semibold mb-5">Status</h4>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#B99B70]/15 to-[#A78BFA]/10 border border-[#B99B70]/25">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Open for Work</span>
              </div>
              <p className="text-xs text-[#E2DDD5] font-light leading-relaxed">
                Accepting select freelance projects for Q1–Q2 2026.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-[#B99B70] hover:text-[#F2EFE9] transition-colors"
              >
                Start a project <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E2DDD5]/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ARK® — Abdul Rehman.</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#E2DDD5]/40">Sargodha, Pakistan · PKT UTC+5</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#E2DDD5]/60 hover:text-[#B99B70] transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
