"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { AlertTriangle, CheckCircle2, TrendingUp, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";

export default function StorytellingScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.35) {
      setActiveStep(0);
    } else if (latest >= 0.35 && latest < 0.7) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  });

  // Numeric count-up variables for Success state
  const [revenue, setRevenue] = useState(0);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    if (activeStep === 2) {
      // Trigger count up animations
      let revCount = 0;
      let rateCount = 0;
      const revInterval = setInterval(() => {
        revCount += 350000;
        if (revCount >= 10250000) {
          setRevenue(10250000);
          clearInterval(revInterval);
        } else {
          setRevenue(revCount);
        }
      }, 30);

      const rateInterval = setInterval(() => {
        rateCount += 3;
        if (rateCount >= 99) {
          setRate(99.8);
          clearInterval(rateInterval);
        } else {
          setRate(rateCount);
        }
      }, 25);

      return () => {
        clearInterval(revInterval);
        clearInterval(rateInterval);
      };
    } else {
      setRevenue(0);
      setRate(0);
    }
  }, [activeStep]);

  return (
    <section id="story" ref={containerRef} className="relative bg-[#060913] min-h-[300vh] py-24 z-10">
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
        
        {/* Left Side: Story Narratives */}
        <div className="space-y-[60vh] lg:space-y-[80vh] py-[10vh] lg:py-[30vh] relative z-10">
          
          {/* Section Header */}
          <div className="relative z-20 mb-8 lg:mb-16 pt-8 text-center lg:text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-2">
              THE INSTITUTIONAL JOURNEY
            </h2>
            <p className="text-xl md:text-3xl font-bold font-syne text-white px-4 lg:px-0">
              See How FeeSync Shakes Up Academic Admin
            </p>
          </div>
          
          {/* Step 1: The Chaos */}
          <div className="flex flex-col justify-center min-h-[40vh] lg:min-h-[50vh] scroll-mt-24 bg-[#060913]/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl border border-white/5 shadow-2xl lg:border-none lg:shadow-none">
            <span className="text-red-500 font-bold text-xs md:text-sm tracking-wider uppercase mb-3 flex items-center gap-1.5">
              <ShieldAlert size={14} /> Phase 1: The Administrative Chaos
            </span>
            <h3 className="font-clash text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Hours Wasted Chasing Overdue Fees
            </h3>
            <p className="text-slate-400 text-xs md:text-base leading-relaxed mb-4 lg:mb-6">
              Academy owners spend up to 15 hours every month reviewing diaries, cross-referencing messy bank statements, and sending awkward reminder messages manually to parent groups on WhatsApp.
            </p>
            <div className="flex flex-col gap-2 lg:gap-3 text-[10px] lg:text-xs text-red-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Overdue payments remain unnoticed for months.
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Scattered receipts make tax reporting a nightmare.
              </div>
            </div>
          </div>

          {/* Step 2: The Transformation */}
          <div className="flex flex-col justify-center min-h-[40vh] lg:min-h-[50vh] scroll-mt-24 bg-[#060913]/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl border border-white/5 shadow-2xl lg:border-none lg:shadow-none">
            <span className="text-brand-indigo font-bold text-xs md:text-sm tracking-wider uppercase mb-3 flex items-center gap-1.5">
              <Sparkles size={14} /> Phase 2: The FeeSync Transformation
            </span>
            <h3 className="font-clash text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              One-Click Automated Reminders
            </h3>
            <p className="text-slate-400 text-xs md:text-base leading-relaxed mb-4 lg:mb-6">
              Deploy FeeSync and watch system algorithms organize messy registers into automated payment pipelines. The software handles WhatsApp notifications, UPI bill generator links, and batch logs instantly.
            </p>
            <div className="flex flex-col gap-2 lg:gap-3 text-[10px] lg:text-xs text-brand-cyan">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                System dispatches secure payment links on WhatsApp.
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                Dynamic payment pipelines sort student ledger files automatically.
              </div>
            </div>
          </div>

          {/* Step 3: The Success */}
          <div className="flex flex-col justify-center min-h-[40vh] lg:min-h-[50vh] scroll-mt-24 bg-[#060913]/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl border border-white/5 shadow-2xl lg:border-none lg:shadow-none">
            <span className="text-brand-emerald font-bold text-xs md:text-sm tracking-wider uppercase mb-3 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-brand-emerald" /> Phase 3: The Automated Success
            </span>
            <h3 className="font-clash text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Unlock Consistent Cash Flow & Peace of Mind
            </h3>
            <p className="text-slate-400 text-xs md:text-base leading-relaxed mb-4 lg:mb-6">
              Track growth trajectories instantly on a dashboard. Realize 99.8% collection rates, generate professional PDF invoices, sync biometric entrance gates, and scale student batches with full structural control.
            </p>
            <div className="flex flex-col gap-2 lg:gap-3 text-[10px] lg:text-xs text-brand-emerald">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
                Achieve near-zero collection latency.
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
                Generate premium reports to boost institute reputation.
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Sticky Visual Window */}
        <div className="sticky top-20 lg:top-0 h-[45vh] lg:h-screen flex items-center justify-center pointer-events-none order-first lg:order-last z-0 lg:z-10 mt-8 lg:mt-0">
          <div className="relative w-full max-w-md aspect-square lg:aspect-[4/5] rounded-2xl border border-white/10 bg-[#0B0F19]/90 lg:bg-[#0B0F19]/80 p-4 lg:p-8 glass-panel overflow-hidden shadow-2xl flex flex-col justify-between">
            
            {/* Visual Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-slate-500" />
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Live Admin Console
                </span>
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Visual Dynamic Render Area */}
            <div className="flex-1 py-8 relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div
                    key="chaos"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-4"
                  >
                    <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 h-16 w-16 bg-red-500/5 rounded-full blur-md" />
                      <div className="flex justify-between items-start text-xs mb-2">
                        <span className="font-bold text-red-400">OVERDUE - 45 DAYS</span>
                        <span className="text-red-400 font-bold">₹8,500</span>
                      </div>
                      <p className="text-xs text-white font-bold">Rahul Verma (IIT-JEE batch)</p>
                      <p className="text-[10px] text-slate-500 mt-1">Parent: r.verma@email.com</p>
                    </div>

                    <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 opacity-75 relative">
                      <div className="flex justify-between items-start text-xs mb-2">
                        <span className="font-bold text-red-400">OVERDUE - 20 DAYS</span>
                        <span className="text-red-400 font-bold font-mono">₹4,200</span>
                      </div>
                      <p className="text-xs text-white font-bold">Neha Sen (NEET batch)</p>
                      <p className="text-[10px] text-slate-500 mt-1">Parent: n.sen@email.com</p>
                    </div>

                    <div className="flex justify-center">
                      <div className="flex items-center gap-1.5 text-[10px] text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 animate-bounce">
                        <AlertTriangle size={12} />
                        <span>7 Students pending payments</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="transition"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-4"
                  >
                    {/* Auto Reminders pipeline */}
                    <div className="rounded-lg border border-brand-indigo/30 bg-brand-indigo/5 p-4 relative overflow-hidden">
                      <div className="flex justify-between items-center text-xs mb-3">
                        <span className="font-semibold text-slate-300">Processing Reminders</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-ping" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-brand-indigo to-brand-cyan"
                          />
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-500">
                          <span>Dispatching WhatsApp Bills...</span>
                          <span>80% Sent</span>
                        </div>
                      </div>
                    </div>

                    {/* Auto Sorted Card */}
                    <div className="rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 p-4">
                      <p className="text-[10px] text-brand-cyan uppercase font-bold tracking-wide">Queue Organized</p>
                      <p className="text-xs text-white font-bold mt-1">Pending LEDGER &rarr; INVOICES Generated</p>
                      <div className="mt-3 flex gap-2">
                        <span className="text-[9px] px-2 py-0.5 rounded bg-brand-indigo/20 text-brand-indigo border border-brand-indigo/30 font-semibold">IIT-JEE</span>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 font-semibold">NEET</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-5"
                  >
                    {/* Count Up Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border border-white/5 bg-white/5 p-3 text-left">
                        <span className="block text-[9px] text-slate-500 uppercase font-bold tracking-wider">REVENUE REC.</span>
                        <span className="block text-sm font-bold text-white mt-1">
                          ₹{(revenue / 10000000).toFixed(2)} Cr
                        </span>
                      </div>
                      <div className="rounded-lg border border-brand-emerald/20 bg-brand-emerald/5 p-3 text-left">
                        <span className="block text-[9px] text-brand-emerald uppercase font-bold tracking-wider">COLL. RATE</span>
                        <span className="block text-sm font-bold text-brand-emerald mt-1">
                          {rate.toFixed(1)}%
                        </span>
                      </div>
                    </div>

                    {/* PDF Receipt successfully generated block */}
                    <div className="rounded-lg border border-brand-emerald/20 bg-brand-emerald/5 p-4 text-left relative overflow-hidden">
                      <div className="absolute top-0 right-0 h-12 w-12 bg-brand-emerald/5 rounded-full blur-md" />
                      <div className="flex items-center gap-2 mb-2 text-brand-emerald">
                        <CheckCircle2 size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">PAID & SYNCED</span>
                      </div>
                      <p className="text-xs text-white font-bold">Rahul Verma - GST Invoice #F-9283</p>
                      <p className="text-[9px] text-slate-500 mt-1">Auto-dispatched to Parent via WhatsApp & Email</p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 px-1">
                      <span>Automatic Gate entry synced</span>
                      <span className="text-brand-emerald font-bold">Active</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Visual Footer */}
            <div className="border-t border-white/5 pt-4 text-left">
              <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                SYSTEM STATUS
              </span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-semibold text-white">
                  {activeStep === 0 ? "Manual Chasing Mode" : activeStep === 1 ? "Sorting Databases..." : "Secure Automatic Mode"}
                </span>
                <span className={`h-1.5 w-1.5 rounded-full ${activeStep === 0 ? "bg-red-500" : activeStep === 1 ? "bg-brand-cyan" : "bg-brand-emerald"}`} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
