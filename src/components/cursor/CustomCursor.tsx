"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsTouch(false);
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

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

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Trailing ring animation
    let animationFrameId: number;
    const animateTrail = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
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
  }, [position.x, position.y, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Central crisp precision dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B99B70] shadow-[0_0_12px_rgba(185,155,112,0.8)] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 0.3 : 1})`,
        }}
      />

      {/* Fluid trailing ring with dynamic text pill */}
      <div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          cursorText
            ? "w-20 h-20 bg-[#08090D]/85 border-[#B99B70] backdrop-blur-md shadow-[0_0_25px_rgba(185,155,112,0.4)]"
            : isPointer
            ? "w-14 h-14 bg-[#B99B70]/15 border-[#B99B70]/60 backdrop-blur-[2px]"
            : "w-8 h-8 bg-transparent border-white/20"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
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
