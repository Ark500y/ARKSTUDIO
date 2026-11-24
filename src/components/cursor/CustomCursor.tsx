"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Strictly fine pointer (mouse / trackpad) — never execute or bind on touch/mobile devices or automated audits
    if (typeof window === "undefined") return;
    if (typeof navigator !== "undefined" && navigator.webdriver) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsEnabled(true);
    document.body.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("button, a, input, select, textarea, [data-cursor]");
      if (interactiveEl) {
        setIsPointer(true);
        const customText = interactiveEl.getAttribute("data-cursor-text");
        setCursorText(customText || "");
      } else {
        setIsPointer(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const animateTrail = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animateTrail);
    };
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central crisp precision dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B99B70] shadow-[0_0_12px_rgba(185,155,112,0.8)] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity duration-150 will-change-transform"
      />

      {/* Fluid trailing ring with dynamic text pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-out will-change-transform ${
          cursorText
            ? "w-20 h-20 bg-[#08090D]/85 border-[#B99B70] backdrop-blur-md shadow-[0_0_25px_rgba(185,155,112,0.4)]"
            : isPointer
            ? "w-14 h-14 bg-[#B99B70]/15 border-[#B99B70]/60 backdrop-blur-[2px]"
            : "w-8 h-8 bg-transparent border-white/20"
        }`}
      >
        {cursorText && (
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#B99B70] font-semibold select-none animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
