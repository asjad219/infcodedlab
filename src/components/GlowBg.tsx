"use client";

import { useEffect, useRef } from "react";

export default function GlowBg() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob1 = blob1Ref.current;
    const blob2 = blob2Ref.current;
    if (!blob1 || !blob2) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Different starting positions so they flow nicely
    let x1 = mouseX;
    let y1 = mouseY;
    let x2 = mouseX + 100;
    let y2 = mouseY - 100;

    const lagFactor1 = 0.08; // 0.08 lag for primary blob
    const lagFactor2 = 0.04; // slower lag for secondary blob to create parallax depth

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;

      // Calculate lag positions
      x1 += (mouseX - x1) * lagFactor1;
      y1 += (mouseY - y1) * lagFactor1;

      x2 += (mouseX - x2) * lagFactor2;
      y2 += (mouseY - y2) * lagFactor2;

      // Add a subtle wave/breathing movement using Math.sin
      const breathe1X = Math.sin(time) * 30;
      const breathe1Y = Math.cos(time) * 30;
      const breathe2X = Math.cos(time * 0.8) * 40;
      const breathe2Y = Math.sin(time * 0.8) * 40;

      // Apply transforms (minus radius to center them)
      blob1.style.transform = `translate(${x1 - 250 + breathe1X}px, ${y1 - 250 + breathe1Y}px)`;
      blob2.style.transform = `translate(${x2 - 200 + breathe2X}px, ${y2 - 200 + breathe2Y}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    // Only follow mouse on desktop
    if (!window.matchMedia("(pointer: coarse)").matches) {
      animate();
    } else {
      // Static ambient glow for mobile
      blob1.style.top = "20%";
      blob1.style.left = "30%";
      blob2.style.top = "60%";
      blob2.style.left = "50%";
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#030712]"
    >
      {/* Background radial overlay to keep core dark contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#030712_85%)] z-[1]" />

      {/* Blob 1: Electric Indigo / Purple */}
      <div
        ref={blob1Ref}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-35 filter blur-[100px] pointer-events-none transition-opacity duration-1000"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.7) 0%, rgba(99,102,241,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Blob 2: Cyan / Emerald Green */}
      <div
        ref={blob2Ref}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-25 filter blur-[90px] pointer-events-none transition-opacity duration-1000"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(16,185,129,0.25) 60%, transparent 100%)",
        }}
      />

      {/* Static top-left mesh glow for hero backup */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] filter blur-[80px]" />
    </div>
  );
}
