"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "magnetic" | "drag">("default");
  const [hoverText, setHoverText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const cursorRingX = useSpring(cursorX, springConfig);
  const cursorRingY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop/pointing devices
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Dynamic hover states check
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isMagnetic = target.closest(".magnetic");
      const isLink = target.closest("a, button, select, input, [role='button']");
      const customCursorText = target.getAttribute("data-cursor-text");

      if (customCursorText) {
        setCursorType("drag");
        setHoverText(customCursorText);
      } else if (isMagnetic) {
        setCursorType("magnetic");
      } else if (isLink) {
        setCursorType("hover");
      } else {
        setCursorType("default");
        setHoverText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    // Magnetic effect implementation
    const setupMagnetics = () => {
      const elements = document.querySelectorAll(".magnetic");
      
      elements.forEach((el) => {
        const element = el as HTMLElement;
        
        const onMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const relX = e.clientX - centerX;
          const relY = e.clientY - centerY;
          
          // Pull the element itself slightly
          element.style.transform = `translate(${relX * 0.3}px, ${relY * 0.3}px)`;
          // Snap the cursor toward the center of the element
          cursorX.set(centerX + relX * 0.15);
          cursorY.set(centerY + relY * 0.15);
        };

        const onMouseLeave = () => {
          element.style.transform = "translate(0px, 0px)";
          setCursorType("default");
        };

        const onMouseEnter = () => {
          setCursorType("magnetic");
        };

        element.addEventListener("mousemove", onMouseMove);
        element.addEventListener("mouseleave", onMouseLeave);
        element.addEventListener("mouseenter", onMouseEnter);
      });
    };

    // Small delay to ensure items are rendered
    const timeout = setTimeout(setupMagnetics, 100);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      clearTimeout(timeout);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Cyan Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-cyan rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Outer Indigo Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998] border border-brand-indigo bg-brand-indigo/10 flex items-center justify-center overflow-hidden"
        style={{
          x: cursorRingX,
          y: cursorRingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "hover" ? 44 : cursorType === "magnetic" ? 52 : cursorType === "drag" ? 64 : 20,
          height: cursorType === "hover" ? 44 : cursorType === "magnetic" ? 52 : cursorType === "drag" ? 64 : 20,
          backgroundColor: cursorType === "hover" ? "rgba(79, 70, 229, 0.2)" : cursorType === "magnetic" ? "rgba(6, 182, 212, 0.15)" : cursorType === "drag" ? "rgba(16, 185, 129, 0.25)" : "rgba(79, 70, 229, 0.03)",
          borderColor: cursorType === "hover" ? "#4f46e5" : cursorType === "magnetic" ? "#06b6d4" : cursorType === "drag" ? "#10b981" : "rgba(79, 70, 229, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
      >
        {cursorType === "drag" && (
          <span className="text-[9px] font-bold tracking-widest text-white uppercase select-none">
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}
