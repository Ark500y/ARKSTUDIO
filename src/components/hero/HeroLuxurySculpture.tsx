"use client";

import React from "react";

export default function HeroLuxurySculpture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Central Architectural Lighting Aura */}
      <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] flex items-center justify-center">
        
        {/* Ambient Specular Backlight */}
        <div
          className="absolute inset-0 rounded-full opacity-60 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(185,155,112,0.18) 0%, rgba(167,139,250,0.12) 35%, rgba(8,9,13,0) 70%)",
            willChange: "transform, opacity",
          }}
        />

        {/* Outer Iridescent Violet Halo — Hardware Accelerated GPU Rotation */}
        <div
          className="absolute w-[290px] h-[290px] sm:w-[420px] sm:h-[420px] lg:w-[490px] lg:h-[490px] rounded-full border border-[#C4B5FD]/35 shadow-[0_0_35px_rgba(167,139,250,0.25)]"
          style={{
            transform: "rotateX(68deg) rotateY(-18deg)",
            animation: "haloSpin 28s linear infinite",
            willChange: "transform",
          }}
        />

        {/* Second Intersecting Muted Champagne Gold Ring */}
        <div
          className="absolute w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] rounded-full border border-[#B99B70]/45 shadow-[0_0_40px_rgba(185,155,112,0.2)]"
          style={{
            transform: "rotateX(42deg) rotateY(48deg)",
            animation: "goldRingSpin 36s linear infinite reverse",
            willChange: "transform",
          }}
        />

        {/* Central Liquid Chrome Torus Knot Graphic */}
        <div
          className="relative w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] flex items-center justify-center"
          style={{
            animation: "knotDrift 14s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          {/* Stylized Ultra-High-Definition Vector Liquid Chrome Knot */}
          <svg
            viewBox="0 0 360 360"
            className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] filter contrast-125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Liquid Chrome Primary Gradient */}
              <linearGradient id="chromeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="18%" stopColor="#E2DDD5" />
                <stop offset="38%" stopColor="#B99B70" />
                <stop offset="55%" stopColor="#1A1D24" />
                <stop offset="72%" stopColor="#F4EFE6" />
                <stop offset="88%" stopColor="#C4B5FD" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>

              {/* Counter-Iridescent Shading Gradient */}
              <linearGradient id="chromeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#F4EFE6" />
                <stop offset="50%" stopColor="#08090D" />
                <stop offset="78%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>

              {/* Specular Highlight Filter */}
              <radialGradient id="specularGlow" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#F5EFE6" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#B99B70" stopOpacity="0.15" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Halo Glow */}
            <circle cx="180" cy="180" r="140" fill="url(#specularGlow)" opacity="0.35" />

            {/* Outer Intertwined Torus Ribbons */}
            <path
              d="M180,48 C242,48 298,92 308,154 C318,216 278,278 218,300 C158,322 92,294 62,240 C32,186 52,118 102,80 C132,58 156,48 180,48 Z"
              stroke="url(#chromeGrad1)"
              strokeWidth="24"
              strokeLinecap="round"
              fill="none"
              opacity="0.92"
            />

            <path
              d="M140,70 C198,52 268,76 292,132 C316,188 284,258 228,284 C172,310 102,284 72,230 C42,176 68,102 120,74 C128,70 134,70 140,70 Z"
              stroke="url(#chromeGrad2)"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
              opacity="0.88"
            />

            {/* Inner Liquid Torus Core */}
            <path
              d="M180,95 C222,95 258,126 264,168 C270,210 242,252 202,266 C162,280 118,262 98,225 C78,188 92,142 126,116 C146,102 162,95 180,95 Z"
              stroke="url(#chromeGrad1)"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              opacity="0.96"
            />

            {/* Specular Light Reflection Glints */}
            <ellipse cx="140" cy="100" rx="35" ry="12" transform="rotate(-25 140 100)" fill="#FFFFFF" opacity="0.85" />
            <ellipse cx="230" cy="245" rx="30" ry="9" transform="rotate(25 230 245)" fill="#FFFFFF" opacity="0.75" />
            <circle cx="280" cy="150" r="6" fill="#FFFFFF" opacity="0.95" />
          </svg>
        </div>

        {/* Floating Liquid Mercury Droplets (Positioned around knot) */}
        <div
          className="absolute w-5 h-5 rounded-full bg-gradient-to-tr from-[#FFFFFF] via-[#E2DDD5] to-[#B99B70] shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          style={{
            top: "16%",
            left: "18%",
            animation: "dropletFloat1 7s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        <div
          className="absolute w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFFFFF] via-[#F4EFE6] to-[#A78BFA] shadow-[0_0_20px_rgba(167,139,250,0.5)]"
          style={{
            bottom: "22%",
            right: "14%",
            animation: "dropletFloat2 9s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        <div
          className="absolute w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#FFFFFF] via-[#B99B70] to-[#111318] shadow-[0_0_10px_rgba(185,155,112,0.5)]"
          style={{
            top: "28%",
            right: "22%",
            animation: "dropletFloat3 8s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* Atmospheric Stardust Accent Points */}
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-80 animate-ping" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full bg-[#A78BFA] opacity-90 animate-pulse" />
        <div className="absolute top-2/3 left-1/5 w-1 h-1 rounded-full bg-[#FFFFFF] opacity-75 animate-pulse" />
      </div>
    </div>
  );
}
