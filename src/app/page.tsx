"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import EditorialIntro from "@/components/intro/EditorialIntro";
import HorizontalProjects from "@/components/projects/HorizontalProjects";
import BentoCapabilities from "@/components/bento/BentoCapabilities";
import EditorialServices from "@/components/services/EditorialServices";
import CreativeProcess from "@/components/process/CreativeProcess";
import TechStack from "@/components/tech/TechStack";
import AboutStudio from "@/components/about/AboutStudio";
import FAQSection from "@/components/faq/FAQSection";
import ContactConversion from "@/components/contact/ContactConversion";
import Footer from "@/components/footer/Footer";
import ProjectModal from "@/components/projects/ProjectModal";
import { Project } from "@/data/portfolioData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="relative min-h-screen bg-[#08090D] text-[#F2EFE9] selection:bg-[#B99B70] selection:text-[#08090D]">
      {/* Precision Floating Navigation */}
      <Navbar />

      {/* 01. The First Impression: Futuristic 3D Hero */}
      <HeroSection onSelectProject={setSelectedProject} />

      {/* 02. Editorial Introduction: Light Ivory Luxury Narrative */}
      <EditorialIntro />

      {/* 03. Curated Portfolio: Horizontal Project Scrolling Showcase */}
      <HorizontalProjects
        selectedProject={selectedProject}
        onSelectProject={setSelectedProject}
      />

      {/* 04. Creative Capabilities: Asymmetrical Bento Matrix with Live RTL Demo */}
      <BentoCapabilities />

      {/* 05. Editorial Client Services: Value-Focused Commercial Offerings */}
      <EditorialServices />

      {/* 06. Execution Blueprint: 5-Step Process Timeline */}
      <CreativeProcess />

      {/* 07. Genuine Tooling: Production Technology Stack */}
      <TechStack />

      {/* 08. The Practice: Independent Studio & Founder Narrative */}
      <AboutStudio />

      {/* 09. Client Clarifications: Interactive FAQ */}
      <FAQSection />

      {/* 10. High-Converting Close: Project Inquiry Engine & WhatsApp Direct */}
      <ContactConversion />

      {/* Studio Sign-Off */}
      <Footer />

      {/* Global Case Study Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
