"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { BRAND_INFO, SERVICES } from "@/data/portfolioData";
import { ArrowUpRight, Mail, MessageCircle, CheckCircle2 } from "lucide-react";

type ServiceId = string | null;

const BUDGET_OPTIONS = [
  "Under USD 500",
  "USD 500 – 1,000",
  "USD 1,000 – 2,500",
  "USD 2,500 – 5,000",
  "USD 5,000+",
];

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState<ServiceId>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const service = SERVICES.find((s) => s.id === selectedService);
    const message = encodeURIComponent(
      `Hi Abdul, I'm reaching out from your portfolio website.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `${url ? `Website/URL: ${url}\n` : ""}` +
      `${service ? `Service Needed: ${service.title}\n` : ""}` +
      `${selectedBudget ? `Budget Range: ${selectedBudget}\n` : ""}` +
      `\nProject Details:\n${description}`
    );

    window.open(`https://wa.me/${BRAND_INFO.contact.whatsappRaw}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-[#08090D] text-[#F2EFE9] selection:bg-[#B99B70] selection:text-[#08090D]">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-[#B99B70]/8 to-transparent blur-[130px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B70]">Contact</span>
            <span className="h-px flex-1 max-w-[60px] bg-[#B99B70]/40" />
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.92] text-[#F2EFE9] mb-6 max-w-5xl">
            Have a project in mind?
            <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B99B70] to-[#F2EFE9]">
              Let&apos;s build something exceptional.
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-[#E2DDD5] leading-relaxed font-light">
            Fill out the form below and your details will be sent directly to my WhatsApp.
            I respond to every serious inquiry within 2 hours.
          </p>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Left: Direct Channels ── */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-5">
            <h2 className="font-display font-bold text-xl text-[#F2EFE9] mb-6">Direct Channels</h2>

            {/* WhatsApp Card */}
            <a
              href={BRAND_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 mb-0.5">WhatsApp — Preferred</div>
                  <div className="text-sm font-semibold text-[#F2EFE9]">{BRAND_INFO.contact.phoneDisplay}</div>
                  <div className="text-xs text-[#E2DDD5]/50 mt-0.5">Usually replies within 2 hours</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${BRAND_INFO.contact.email}`}
              className="flex items-center justify-between p-5 rounded-2xl bg-[#111318] border border-white/[0.06] hover:border-[#B99B70]/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#B99B70]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#B99B70]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#B99B70] mb-0.5">Email</div>
                  <div className="text-sm font-semibold text-[#F2EFE9] break-all">{BRAND_INFO.contact.email}</div>
                  <div className="text-xs text-[#E2DDD5]/50 mt-0.5">For formal proposals</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#B99B70] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Project Info Table */}
            <div className="p-6 rounded-2xl bg-[#111318] border border-white/[0.06]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-5">Project Information</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/[0.05]">
                  {[
                    { label: "Location", value: BRAND_INFO.location },
                    { label: "Timezone", value: BRAND_INFO.timezone },
                    { label: "Languages", value: "English & Arabic" },
                    { label: "Response Time", value: "Within 2 Hours" },
                    { label: "Project Types", value: "Web, Brand, UI/UX" },
                    { label: "Status", value: "Available" },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="py-3 text-[#A4A4AD] font-mono text-xs uppercase tracking-wide pr-4">{row.label}</td>
                      <td className="py-3 text-[#F2EFE9] text-xs text-right">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Availability Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#B99B70]/10 to-transparent border border-[#B99B70]/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-[#B99B70] uppercase tracking-widest">Currently Available</span>
              </div>
              <p className="text-sm text-[#E2DDD5] leading-relaxed">
                Accepting freelance projects for Q1–Q2 2026. Limited spots available — reach out early to secure your timeline.
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-8 xl:col-span-8">
            {submitted ? (
              /* Success State */
              <div className="h-full flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl bg-[#111318] border border-white/[0.06]">
                <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="font-display font-black text-3xl text-[#F2EFE9] mb-4">Message Sent!</h2>
                <p className="text-[#E2DDD5] text-base max-w-md mb-8">
                  Your project details have been sent to my WhatsApp. I&apos;ll review everything and get back to you within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName(""); setEmail(""); setUrl("");
                    setDescription(""); setSelectedService(null); setSelectedBudget(null);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B99B70] text-[#08090D] font-semibold text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-7 sm:p-10 rounded-2xl bg-[#111318] border border-white/[0.06] space-y-7">
                <h2 className="font-display font-bold text-xl text-[#F2EFE9]">Tell Me About Your Project</h2>

                {/* Name + Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-2">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Abdul Rehman"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/[0.08] text-[#F2EFE9] text-sm placeholder:text-[#A4A4AD]/50 focus:outline-none focus:border-[#B99B70]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/[0.08] text-[#F2EFE9] text-sm placeholder:text-[#A4A4AD]/50 focus:outline-none focus:border-[#B99B70]/50 transition-colors"
                    />
                  </div>
                </div>

                {/* URL */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-2">
                    Current Website / Reference URL <span className="text-[#A4A4AD]">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yoursite.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/[0.08] text-[#F2EFE9] text-sm placeholder:text-[#A4A4AD]/50 focus:outline-none focus:border-[#B99B70]/50 transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-3">
                    Service Needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                          selectedService === service.id
                            ? "bg-[#B99B70] text-[#08090D] border-[#B99B70]"
                            : "bg-[#08090D] border-white/[0.08] text-[#E2DDD5] hover:border-[#B99B70]/40"
                        }`}
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-3">
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_OPTIONS.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(selectedBudget === budget ? null : budget)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                          selectedBudget === budget
                            ? "bg-[#A78BFA] text-white border-[#A78BFA]"
                            : "bg-[#08090D] border-white/[0.08] text-[#E2DDD5] hover:border-[#A78BFA]/40"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#B99B70] mb-2">
                    Project Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    placeholder="Tell me about your project — what you need built, your audience, your goals, and any inspiration or reference sites you love..."
                    className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-white/[0.08] text-[#F2EFE9] text-sm placeholder:text-[#A4A4AD]/50 focus:outline-none focus:border-[#B99B70]/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#B99B70] to-[#9E825C] text-[#08090D] font-display font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(185,155,112,0.5)] transition-all duration-300"
                  >
                    <span>Send via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-[#A4A4AD] mt-3">
                    This will open WhatsApp with your pre-filled message. No data is stored on this site.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
