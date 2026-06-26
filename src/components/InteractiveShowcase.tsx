"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  CheckSquare, 
  Bell, 
  PieChart, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

const features = [
  {
    id: "dashboard",
    index: "01",
    badge: "Control Center",
    title: "Command Center Dashboard",
    description: "Manage your entire coaching institute from a single screen. Track collections, pending dues, student status, and batch revenue analytics in real-time.",
    icon: <LayoutDashboard size={20} className="text-brand-indigo" />,
    image: "/dashboard.png",
    color: "from-brand-indigo/30 to-brand-indigo/5",
    accent: "indigo",
    accentHex: "#4f46e5",
    glowClass: "shadow-[0_0_50px_rgba(79,70,229,0.35)]",
    highlights: ["Real-time collections counter", "Active vs Pending student stats", "Instant search & filter tools"]
  },
  {
    id: "students",
    index: "02",
    badge: "Profiles & Records",
    title: "Student Directory",
    description: "Organize and access student profiles effortlessly. View active enrollments, course history, fee records, and parent details in one clean list.",
    icon: <Users size={20} className="text-brand-cyan" />,
    image: "/student.png",
    color: "from-brand-cyan/30 to-brand-cyan/5",
    accent: "cyan",
    accentHex: "#06b6d4",
    glowClass: "shadow-[0_0_50px_rgba(6,182,212,0.35)]",
    highlights: ["Detailed profiles & course history", "One-click parent WhatsApp connect", "Full payment log archives"]
  },
  {
    id: "batches",
    index: "03",
    badge: "Cohorts & Classes",
    title: "Batch Structure & Slabs",
    description: "Structure complex curriculum structures. Assign teachers, schedule classes, and manage cohort-specific fee slabs seamlessly.",
    icon: <BookOpen size={20} className="text-brand-emerald" />,
    image: "/batches.png",
    color: "from-brand-emerald/30 to-brand-emerald/5",
    accent: "emerald",
    accentHex: "#10b981",
    glowClass: "shadow-[0_0_50px_rgba(16,185,129,0.35)]",
    highlights: ["Cohort fee structure rules", "Automatic schedule conflict check", "Batch occupancy & revenue charts"]
  },
  {
    id: "batch_details",
    index: "04",
    badge: "Class Performance",
    title: "Detailed Batch Dashboard",
    description: "Dive deep into batch-level details. Check student progress, update attendance states, track installment statuses, and monitor batch growth.",
    icon: <CheckSquare size={20} className="text-brand-cyan" />,
    image: "/batch_details.png",
    color: "from-brand-cyan/30 to-brand-cyan/5",
    accent: "cyan",
    accentHex: "#06b6d4",
    glowClass: "shadow-[0_0_50px_rgba(6,182,212,0.35)]",
    highlights: ["Instant attendance logging", "Installment tracking breakdown", "Batch performance history logs"]
  },
  {
    id: "notifications",
    index: "05",
    badge: "Automated Alerts",
    title: "WhatsApp & SMS System",
    description: "Keep parents in the loop effortlessly. Send automated WhatsApp and SMS reminders for upcoming dues, events, and holidays.",
    icon: <Bell size={20} className="text-amber-500" />,
    image: "/notification.png",
    color: "from-amber-500/30 to-amber-500/5",
    accent: "amber",
    accentHex: "#f59e0b",
    glowClass: "shadow-[0_0_50px_rgba(245,158,11,0.35)]",
    highlights: ["Direct-to-parent auto dispatch", "Payment link integrations", "Custom message template builder"]
  },
  {
    id: "reports",
    index: "06",
    badge: "Ledger Analytics",
    title: "Financial Reports & Ledger",
    description: "Generate deep financial insights and custom PDF reports. Analyze revenue growth, identify defaulters, and optimize your cash flow.",
    icon: <PieChart size={20} className="text-brand-emerald" />,
    image: "/report.png",
    color: "from-brand-emerald/30 to-brand-emerald/5",
    accent: "emerald",
    accentHex: "#10b981",
    glowClass: "shadow-[0_0_50px_rgba(16,185,129,0.35)]",
    highlights: ["Defaulter listing & age analysis", "Tax, discounts, and custom line items", "Exportable custom PDF reports"]
  }
];

export default function InteractiveShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const children = container.children;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDifference = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (!child.classList.contains("snap-center")) continue;

      const childCenter = child.offsetLeft - container.offsetLeft + child.clientWidth / 2;
      const difference = Math.abs(containerCenter - childCenter);

      if (difference < minDifference) {
        minDifference = difference;
        closestIndex = i;
      }
    }

    if (closestIndex !== activeSlide) {
      setActiveSlide(closestIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeSlide]);

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const children = container.children;
    
    // Find matching slide element
    let slideElement: HTMLElement | null = null;
    let matchIdx = 0;
    
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (child.classList.contains("snap-center")) {
        if (matchIdx === index) {
          slideElement = child;
          break;
        }
        matchIdx++;
      }
    }

    if (slideElement) {
      container.scrollTo({
        left: slideElement.offsetLeft - container.offsetLeft - (container.clientWidth - slideElement.clientWidth) / 2,
        behavior: "smooth"
      });
      setActiveSlide(index);
    }
  };

  const scrollPrev = () => {
    if (activeSlide > 0) {
      scrollToSlide(activeSlide - 1);
    }
  };

  const scrollNext = () => {
    if (activeSlide < features.length - 1) {
      scrollToSlide(activeSlide + 1);
    }
  };

  const activeFeature = features[activeSlide];

  return (
    <section id="product-demo" className="relative bg-[#05070e] py-24 md:py-32 z-10 overflow-hidden">
      
      {/* Background radial highlights */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full blur-[140px] opacity-15 transition-all duration-700 ease-in-out pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${activeFeature.accentHex} 0%, transparent 70%)`
          }}
        />
        <div className="absolute inset-0 bg-grid-overlay opacity-10 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-indigo animate-pulse" />
              Product Demonstration
            </h2>
            <h3 className="font-clash text-3xl md:text-5xl font-extrabold text-white leading-tight">
              A Visual Tour of FeeSync
            </h3>
            <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
              Explore the beautifully responsive mobile interfaces designed to streamline fee workflows, class schedules, and parental alerts.
            </p>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={activeSlide === 0}
              aria-label="Previous Demo"
              className={`p-3 rounded-full border transition-all duration-300 ${
                activeSlide === 0 
                  ? "border-white/5 text-slate-600 cursor-not-allowed" 
                  : "border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/20 active:scale-95 shadow-md"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="text-xs font-mono text-slate-400 select-none">
              <span className="text-white font-bold">{activeSlide + 1}</span>
              <span className="text-slate-600 mx-1">/</span>
              <span>{features.length}</span>
            </div>

            <button
              onClick={scrollNext}
              disabled={activeSlide === features.length - 1}
              aria-label="Next Demo"
              className={`p-3 rounded-full border transition-all duration-300 ${
                activeSlide === features.length - 1 
                  ? "border-white/5 text-slate-600 cursor-not-allowed" 
                  : "border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/20 active:scale-95 shadow-md"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Snapping Scroll Viewport */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4 px-4 -mx-4 md:px-2 md:mx-0"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {features.map((feature, idx) => {
            const isSelected = activeSlide === idx;
            
            return (
              <div
                key={feature.id}
                className="w-[calc(100vw-3rem)] sm:w-[540px] md:w-[840px] lg:w-[940px] flex-shrink-0 snap-center transition-all duration-500"
              >
                {/* Master Glassmorphic Card Container */}
                <div 
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-12 rounded-3xl border transition-all duration-500 overflow-hidden glass-panel h-full ${
                    isSelected 
                      ? "border-white/15 bg-slate-900/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]" 
                      : "border-white/5 bg-slate-900/20 opacity-40 scale-[0.98] pointer-events-none"
                  }`}
                >
                  {/* Huge Decorative Index Background */}
                  <div className="absolute right-6 top-0 text-[10rem] md:text-[15rem] font-clash font-black text-white/[0.02] leading-none select-none pointer-events-none transition-all duration-500">
                    {feature.index}
                  </div>

                  {/* Left Column: Realistic CSS Mobile Phone Mockup */}
                  <div className="w-[220px] md:w-[250px] aspect-[9/20] flex-shrink-0 relative z-10">
                    
                    {/* Glowing Backlight matching slide theme */}
                    <div 
                      className={`absolute inset-2 rounded-[2.5rem] blur-[30px] opacity-0 transition-opacity duration-700 pointer-events-none group-hover:opacity-100 ${feature.glowClass}`} 
                    />

                    {/* Realistic Device Outline & Bezel */}
                    <motion.div 
                      className="relative w-full h-full rounded-[2.5rem] p-[8px] bg-gradient-to-b from-[#2d3748] via-[#1a202c] to-[#0d1117] shadow-2xl ring-1 ring-white/15 overflow-hidden flex flex-col items-center cursor-default"
                      whileHover={isSelected ? { y: -8, rotateY: 4, rotateX: -2, scale: 1.03 } : {}}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      {/* Left Side Buttons */}
                      <div className="absolute top-20 -left-[1px] w-[3px] h-8 bg-slate-600 rounded-r-xs border-r border-black/40 z-30" />
                      <div className="absolute top-30 -left-[1px] w-[3px] h-8 bg-slate-600 rounded-r-xs border-r border-black/40 z-30" />
                      
                      {/* Right Side Button */}
                      <div className="absolute top-24 -right-[1px] w-[3px] h-12 bg-slate-600 rounded-l-xs border-l border-black/40 z-30" />

                      {/* Screen Container */}
                      <div className="relative w-full h-full rounded-[2.1rem] bg-[#070914] overflow-hidden border border-slate-950 flex flex-col">
                        
                        {/* Dynamic Island Notch */}
                        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4.5 bg-black rounded-full z-45 flex items-center justify-center border border-white/10">
                          <div className="absolute right-4 w-1.5 h-1.5 bg-[#0d1326] rounded-full border border-slate-900 flex items-center justify-center">
                            <div className="w-[3px] h-[3px] bg-blue-900 rounded-full" />
                          </div>
                        </div>

                        {/* High Fidelity Simulated Status Bar */}
                        <div className="absolute top-0 inset-x-0 h-9 z-40 flex justify-between items-center px-5 text-[9px] text-white/90 font-semibold select-none bg-gradient-to-b from-black/40 to-transparent pt-1">
                          <span className="font-sans leading-none tracking-tight">09:41</span>
                          <div className="flex items-center gap-1">
                            {/* Cellular Signal bars */}
                            <div className="flex items-end gap-[1px] h-[7px]">
                              <div className="w-[1.5px] h-[2px] bg-white rounded-2xs" />
                              <div className="w-[1.5px] h-[3.5px] bg-white rounded-2xs" />
                              <div className="w-[1.5px] h-[5px] bg-white rounded-2xs" />
                              <div className="w-[1.5px] h-[6.5px] bg-white/40 rounded-2xs" />
                            </div>
                            {/* Wifi indicator */}
                            <svg className="w-2.5 h-2.5 fill-current text-white" viewBox="0 0 24 24">
                              <path d="M12 21l-12-12c2.4-2.4 5.6-3.8 9-3.8s6.6 1.4 9 3.8l-12 12zm0-2.8l9.2-9.2c-1.8-1.5-4.2-2.4-6.8-2.4s-5 0.9-6.8 2.4l9.2 9.2z"/>
                            </svg>
                            {/* Battery Container */}
                            <div className="w-4 h-2 border border-white/60 rounded-[3px] p-[0.5px] flex items-center relative ml-0.5">
                              <div className="h-full w-[85%] bg-emerald-400 rounded-3xs" />
                              <div className="absolute -right-[2.5px] top-1/2 -translate-y-1/2 w-[1.5px] h-0.7 bg-white/60 rounded-r-3xs" />
                            </div>
                          </div>
                        </div>

                        {/* Actual Screenshot Content */}
                        <div className="relative flex-1 w-full h-full bg-[#05070e] overflow-hidden">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            sizes="(max-width: 768px) 220px, 250px"
                            priority={idx === 0}
                            className="object-cover object-top pt-8 transition-transform duration-500 group-hover:scale-102"
                          />
                          
                          {/* Screen Glare reflection overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-20" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column: Narrative details */}
                  <div className="flex-1 flex flex-col justify-center relative z-10 text-left">
                    
                    {/* Badge and info */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                        {feature.badge}
                      </span>
                      <span 
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: feature.accentHex }}
                      />
                      <span className="text-[9px] font-mono tracking-widest uppercase text-slate-500">
                        Module {feature.index} of 06
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-clash text-2xl md:text-3.5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                      {feature.description}
                    </p>

                    {/* bullet checks */}
                    <div className="space-y-3.5 mb-8">
                      {feature.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 group/item">
                          <div 
                            className="mt-0.5 p-1 rounded-full flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                            style={{ 
                              backgroundColor: `${feature.accentHex}15`,
                              color: feature.accentHex
                            }}
                          >
                            <svg className="w-3.5 h-3.5 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <span className="text-xs md:text-sm text-slate-300 font-medium leading-tight">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Accent border bottom highlight */}
                    <div className="w-24 h-1 rounded-full transition-all duration-500"
                      style={{ 
                        background: `linear-gradient(to right, ${feature.accentHex}, transparent)` 
                      }}
                    />

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicators/dot controllers */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {features.map((_, idx) => {
            const isSelected = activeSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isSelected 
                    ? "w-8 bg-brand-indigo" 
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
