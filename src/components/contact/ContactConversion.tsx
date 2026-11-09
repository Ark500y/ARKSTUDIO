"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";
import { BRAND_INFO, SERVICES } from "@/data/portfolioData";
import { playTick } from "@/utils/audio";

export default function ContactConversion() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    service: SERVICES[0].title,
    budget: "$1,500 – $3,000 (Commercial Build)",
    description: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetTiers = [
    "Under $500",
    "$500 – $1,500",
    "$1,500 – $3,000",
    "$3,000+",
    "Custom / Flexible",
  ];

  const handleCopy = (text: string, type: "email" | "phone") => {
    playTick(800);
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please provide at least your name and email.");
      return;
    }

    playTick(950);
    setIsSubmitting(true);

    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#B99B70", "#A78BFA", "#F2EFE9", "#10B981"],
      });
    } catch {
      // ignore
    }

    // Build formatted message for WhatsApp
    const message = `*NEW PROJECT INQUIRY — ARK® STUDIO*
────────────────────────
👤 *Client Name:* ${formData.name}
📧 *Email:* ${formData.email}
🌐 *Website / Business:* ${formData.websiteUrl || "Not specified"}
🛠 *Required Service:* ${formData.service}
💰 *Estimated Budget:* ${formData.budget}
📝 *Project Overview:*
${formData.description || "Looking forward to discussing project scope and requirements."}
────────────────────────
Sent via ark.portfolio conversion engine`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923141495630?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 400);
  };

  const handleEmailSubmit = () => {
    playTick(750);
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Abdul Rehman,\n\nI would like to discuss a project with ARK®.\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Website/Business: ${formData.websiteUrl || "N/A"}\n` +
        `Required Service: ${formData.service}\n` +
        `Budget: ${formData.budget}\n\n` +
        `Project Details:\n${formData.description || "Let's discuss further."}\n\n` +
        `Best regards,\n${formData.name}`
    );

    window.location.href = `mailto:${BRAND_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#08090D] text-[#F2EFE9] pt-32 sm:pt-40 pb-28 sm:pb-36 overflow-hidden border-t border-white/[0.06] scroll-mt-24"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-[#B99B70]/10 via-[#A78BFA]/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B99B70]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B99B70] font-semibold">
              10 / Start A Project
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F2EFE9] tracking-tight leading-[1.08] mb-4">
            HAVE A PROJECT IN MIND? <br />
            <span className="font-serif italic font-normal text-[#B99B70]">
              LET&apos;S BUILD SOMETHING EXCEPTIONAL.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A4A4AD] font-light leading-relaxed max-w-2xl">
            Whether you need a premium business website, a complete digital identity or a custom web experience, let&apos;s discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Channel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct WhatsApp Action Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111318] to-[#0A0C10] border border-[#B99B70]/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Abdul Rehman is Online • Fast Response</span>
                </div>
                <MessageCircle className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F2EFE9] mb-2">
                Instant WhatsApp Chat
              </h3>
              <p className="text-xs sm:text-sm text-[#A4A4AD] leading-relaxed mb-6 font-light">
                Have a quick question or want to chat about project feasibility right away? Send me a direct WhatsApp voice note or message.
              </p>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/60 border border-white/10 mb-5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#A4A4AD] uppercase">Direct WhatsApp Line</span>
                  <span className="font-mono text-sm sm:text-base text-[#F2EFE9] font-medium">
                    {BRAND_INFO.contact.phoneDisplay}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(BRAND_INFO.contact.phoneDisplay, "phone")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4A4AD] hover:text-[#F2EFE9] transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(900)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-display font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                data-cursor-text="WHATSAPP"
              >
                <span>Open WhatsApp Chat Directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#0F1117] border border-white/[0.08] hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A4A4AD]">
                  Direct Email
                </span>
                <Mail className="w-4 h-4 text-[#B99B70]" />
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={`mailto:${BRAND_INFO.contact.email}`}
                  className="font-mono text-xs sm:text-sm text-[#F2EFE9] hover:text-[#B99B70] transition-colors truncate mr-2"
                >
                  {BRAND_INFO.contact.email}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(BRAND_INFO.contact.email, "email")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4A4AD] hover:text-[#F2EFE9] transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Timezone Guarantees */}
            <div className="p-5 rounded-2xl bg-[#0F1117] border border-white/[0.08] space-y-2.5 text-xs text-[#A4A4AD]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B99B70]" />
                <span>Operating from Sargodha, PK (UTC+5 PKT)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NDA & Client Confidentiality Respected</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B99B70]" />
                <span>Direct 1-on-1 Founder Partnership</span>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Project Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-[#0F1117] border border-white/[0.08] shadow-2xl">
            <h3 className="font-display font-bold text-2xl text-[#F2EFE9] mb-1">
              Project Inquiry Form
            </h3>
            <p className="text-xs text-[#A4A4AD] font-light mb-8">
              Fill in your project details. Submissions immediately open a preformatted brief in WhatsApp or your email client.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#A4A4AD] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs sm:text-sm text-[#F2EFE9] placeholder:text-white/20 focus:outline-none focus:border-[#B99B70] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#A4A4AD] mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. tariq@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs sm:text-sm text-[#F2EFE9] placeholder:text-white/20 focus:outline-none focus:border-[#B99B70] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Website URL */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#A4A4AD] mb-1.5">
                  Business or Current Website URL (Optional)
                </label>
                <input
                  type="text"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="e.g. https://mybusiness.com or Instagram page"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs sm:text-sm text-[#F2EFE9] placeholder:text-white/20 focus:outline-none focus:border-[#B99B70] transition-colors"
                />
              </div>

              {/* Row 3: Required Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#A4A4AD] mb-2">
                  Required Service
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const isSelected = formData.service === s.title;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => {
                          playTick(750);
                          setFormData({ ...formData, service: s.title });
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all text-left ${
                          isSelected
                            ? "bg-[#B99B70] text-[#08090D] font-bold shadow-md"
                            : "bg-white/[0.04] text-[#A4A4AD] hover:text-[#F2EFE9] border border-white/[0.08]"
                        }`}
                      >
                        {s.title}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => {
                      playTick(750);
                      setFormData({ ...formData, service: "Complete Brand + Bilingual Website" });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      formData.service === "Complete Brand + Bilingual Website"
                        ? "bg-[#B99B70] text-[#08090D] font-bold shadow-md"
                        : "bg-white/[0.04] text-[#A4A4AD] hover:text-[#F2EFE9] border border-white/[0.08]"
                    }`}
                  >
                    Complete Brand + Bilingual Website
                  </button>
                </div>
              </div>

              {/* Row 4: Tactile Budget Pills (Replacing boring dropdown) */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#A4A4AD] mb-2">
                  Estimated Budget Tier
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgetTiers.map((tier) => {
                    const isSelected = formData.budget === tier;
                    return (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => {
                          playTick(800);
                          setFormData({ ...formData, budget: tier });
                        }}
                        className={`p-2.5 rounded-xl text-xs font-mono transition-all border text-center ${
                          isSelected
                            ? "bg-[#B99B70]/15 border-[#B99B70] text-[#B99B70] font-bold shadow-[0_0_15px_rgba(185,155,112,0.25)]"
                            : "bg-black/50 border-white/10 text-[#A4A4AD] hover:border-white/20"
                        }`}
                      >
                        {tier}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Description */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#A4A4AD] mb-1.5">
                  Project Description & Goals
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell me about your business, target audience, ideal launch timeline, and any reference sites you admire..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs sm:text-sm text-[#F2EFE9] placeholder:text-white/20 focus:outline-none focus:border-[#B99B70] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#B99B70] to-[#9E825C] hover:from-[#C8A97E] hover:to-[#B99B70] text-[#08090D] font-display font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(185,155,112,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  data-cursor-text="SUBMIT"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Brief via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[#F2EFE9] font-mono text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-[11px] font-mono text-center text-[#A4A4AD]/60 pt-1">
                🔒 No spam. Your information is kept strictly private.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
