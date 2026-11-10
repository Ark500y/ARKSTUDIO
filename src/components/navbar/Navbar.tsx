"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Clock, Volume2, VolumeX } from "lucide-react";
import { BRAND_INFO } from "@/data/portfolioData";
import { playTick, toggleAudio, isAudioEnabled } from "@/utils/audio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pktTime, setPktTime] = useState("");
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Live PKT (Karachi / Sargodha) Clock
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setPktTime(formatter.format(now) + " PKT");
      } catch {
        setPktTime("12:00:00 PM PKT");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleSoundToggle = () => {
    const nextState = toggleAudio();
    setSoundOn(nextState);
    if (nextState) playTick(900);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08090D]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            onClick={() => playTick(700)}
            className="flex items-center gap-3.5 group"
            data-cursor-text="ARK®"
          >
            {/* ARK Signature Mark */}
            <div className="relative flex items-center">
              <span className="font-display font-bold text-2xl tracking-tighter text-[#F2EFE9] group-hover:text-[#B99B70] transition-colors">
                ARK
              </span>
              <span className="text-[10px] font-mono font-normal text-[#B99B70] align-top ml-0.5">
                ®
              </span>
            </div>

            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />

            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-medium tracking-wide text-[#F2EFE9]/90 group-hover:text-white transition-colors">
                Abdul Rehman
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2DDD5]/70">
                Creative Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111318]/70 border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => playTick(750)}
                className="px-3.5 py-1.5 text-xs font-medium text-[#F2EFE9]/75 hover:text-[#B99B70] hover:bg-white/[0.04] rounded-full transition-all"
                data-cursor-text="GO"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Telemetry / Actions */}
          <div className="flex items-center gap-3">
            {/* Audio Feedback Toggle */}
            <button
              onClick={handleSoundToggle}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-[11px] font-mono text-[#A4A4AD] transition-colors"
              title={soundOn ? "Mute interactive audio" : "Enable tactile sound"}
              aria-label="Toggle telemetry sound"
            >
              {soundOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#B99B70]" />
                  <span className="text-[10px]">SOUND ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-white/40" />
                  <span className="text-[10px] text-white/40">MUTED</span>
                </>
              )}
            </button>

            {/* Live Sargodha PKT Pill (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-[#A4A4AD]">
              <Clock className="w-3 h-3 text-[#B99B70]" />
              <span>{pktTime || "PKT UTC+5"}</span>
            </div>

            {/* Let's Talk Conversion Button */}
            <a
              href="/contact"
              onClick={() => playTick(900)}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-transparent hover:bg-[#B99B70] border border-[#B99B70]/70 hover:border-[#B99B70] text-[#F2EFE9] hover:text-[#08090D] text-xs font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(185,155,112,0.15)] hover:shadow-[0_0_25px_rgba(185,155,112,0.5)]"
              data-cursor-text="TALK"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                playTick(750);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-full bg-[#111318] border border-white/10 text-[#F2EFE9] hover:text-[#B99B70] transition-colors"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090D]/95 backdrop-blur-2xl md:hidden flex flex-col pt-24 px-6 pb-8 transition-all animate-fade-in">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-[#F2EFE9]">ARK®</span>
              <span className="text-xs text-[#A4A4AD]">Abdul Rehman • Sargodha, PK</span>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available</span>
            </div>
          </div>

          <nav className="flex flex-col gap-4 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  playTick(750);
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-display font-medium text-[#F2EFE9] hover:text-[#B99B70] transition-colors py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 flex flex-col gap-3">
            <a
              href={BRAND_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playTick(900)}
              className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <span>WhatsApp Me Directly</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={() => {
                playTick(800);
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-full bg-[#B99B70] text-[#08090D] font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
