"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { LayoutDashboard, Users, BookOpen, CreditCard, PieChart, CheckSquare, Bell } from "lucide-react";

const features = [
  {
    id: "dashboard",
    title: "Command Center Dashboard",
    description: "Get a bird's-eye view of your entire institution. Track active students, pending dues, and daily collections in real-time.",
    icon: <LayoutDashboard size={24} className="text-brand-indigo" />,
    image: "/dashbord.png",
    color: "from-brand-indigo/20 to-transparent",
    device: "desktop"
  },
  {
    id: "students",
    title: "Student Management",
    description: "Organize thousands of student profiles. Instantly access fee history, attendance records, and parent contact details.",
    icon: <Users size={24} className="text-brand-cyan" />,
    image: "/Screenshot_20260616-091217.png",
    color: "from-brand-cyan/20 to-transparent",
    device: "mobile"
  },
  {
    id: "batches",
    title: "Batch Management",
    description: "Structure complex curriculum structures. Assign teachers, schedule classes, and manage cohort-specific fee slabs seamlessly.",
    icon: <BookOpen size={24} className="text-brand-emerald" />,
    image: "/plan.png",
    color: "from-brand-emerald/20 to-transparent",
    device: "desktop"
  },
  {
    id: "fees",
    title: "Automated Fee Collection",
    description: "Never chase payments again. Send automated payment links, handle installments, and auto-reconcile UPI transactions.",
    icon: <CreditCard size={24} className="text-brand-indigo" />,
    image: "/1000114420.png",
    color: "from-brand-indigo/20 to-transparent",
    device: "mobile"
  },
  {
    id: "reports",
    title: "Advanced Reports",
    description: "Generate deep financial insights and custom PDF reports. Analyze revenue growth, identify defaulters, and optimize your cash flow.",
    icon: <PieChart size={24} className="text-brand-cyan" />,
    image: "/setting.png",
    color: "from-brand-cyan/20 to-transparent",
    device: "desktop"
  },
  {
    id: "attendance",
    title: "Smart Attendance Sync",
    description: "Log presence seamlessly via manual entry or biometric gate sync. Automatically trigger SMS alerts for absent students.",
    icon: <CheckSquare size={24} className="text-brand-emerald" />,
    image: "/attendanc.png",
    color: "from-brand-emerald/20 to-transparent",
    device: "mobile"
  },
  {
    id: "notifications",
    title: "Automated Notifications",
    description: "Keep parents in the loop effortlessly. Send automated WhatsApp and SMS reminders for upcoming dues, events, and holidays.",
    icon: <Bell size={24} className="text-yellow-500" />,
    image: "/Screenshot_20260614-084408.png",
    color: "from-yellow-500/20 to-transparent",
    device: "mobile"
  }
];

export default function InteractiveShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scroll position to update active index
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      // Total scrollable height within the component
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        // Calculate which section we are in
        const index = Math.min(
          Math.floor(scrollProgress * features.length),
          features.length - 1
        );
        
        if (index !== activeIndex) {
          setActiveIndex(index);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const activeFeature = features[activeIndex];

  return (
    <section id="product-demo" className="relative bg-[#05070e] z-10" ref={containerRef}>
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br ${activeFeature.color} blur-[120px] opacity-30 transition-all duration-1000`} />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Left Side: Scrollable Text Sections */}
          <div className="w-full lg:w-[45%] py-[20vh] lg:py-[30vh]">
            <div className="mb-[20vh] lg:mb-[30vh]">
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-indigo animate-pulse" />
                Product Demonstration
              </h2>
              <h3 className="font-clash text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                See FeeSync in Action
              </h3>
              <p className="text-slate-400 text-base md:text-lg">
                Scroll to explore the beautifully crafted, intuitive interfaces that power thousands of coaching institutes every day.
              </p>
            </div>

            {features.map((feature, idx) => (
              <div 
                key={feature.id} 
                className={`min-h-[60vh] flex flex-col justify-center transition-all duration-500 ${
                  activeIndex === idx ? "opacity-100 scale-100" : "opacity-30 scale-95"
                }`}
              >
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-xl backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h4 className="font-clash text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h4>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            ))}
            
            {/* Bottom spacer */}
            <div className="h-[20vh] lg:h-[30vh]" />
          </div>

          {/* Right Side: Sticky Device Frame */}
          <div className="w-full lg:w-[55%] h-[60vh] lg:h-screen sticky top-0 flex items-center justify-center py-20 overflow-hidden perspective-1000">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: -10 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative flex items-center justify-center w-full"
              >
                {activeFeature.device === "desktop" ? (
                  /* Desktop / Dashboard Frame */
                  <div className="relative w-[95%] lg:w-[120%] aspect-[16/10] bg-[#111] border-4 lg:border-8 border-slate-800 rounded-xl lg:rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-4 md:h-6 bg-slate-900 flex items-center gap-1.5 px-3 z-30">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div className="mx-auto bg-slate-800 rounded px-2 md:px-4 py-0.5 text-[6px] md:text-[8px] text-slate-400 font-mono">
                        feesync.com/admin
                      </div>
                    </div>
                    <div className="absolute inset-0 top-4 md:top-6 bg-black">
                      <Image
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        fill
                        className="object-cover object-left-top"
                      />
                    </div>
                  </div>
                ) : (
                  /* Mobile App Frame */
                  <div className="relative h-[450px] lg:h-[600px] aspect-[9/19] bg-black border-[6px] lg:border-[10px] border-slate-800 rounded-[2rem] lg:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-5 lg:h-7 bg-black z-30 flex items-center justify-center">
                      <div className="w-[30%] h-[50%] bg-slate-900 rounded-b-xl" />
                    </div>
                    <Image
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
