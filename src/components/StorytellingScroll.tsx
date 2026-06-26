"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles, 
  Database, 
  Clock, 
  Unlock, 
  ArrowUpRight 
} from "lucide-react";

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

  // Sub-components as local render helpers to avoid code duplication between desktop and mobile layouts
  function ChaosVisual() {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-red-950/10 rounded-xl border border-red-500/10 p-6 min-h-[250px] lg:min-h-[350px]">
        {/* Pulsing background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12)_0%,transparent_70%)] animate-pulse" />
        
        {/* Chaotic items */}
        <div className="relative w-full max-w-sm flex flex-col justify-center gap-4 z-10">
          
          {/* Invoice 1: Floating in from top left */}
          <motion.div
            initial={{ y: 20, opacity: 0, rotate: -5 }}
            animate={{ 
              y: [0, -6, 0],
              rotate: [-5, -3, -5]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/90 border border-red-500/30 p-3.5 rounded-xl shadow-[0_10px_30px_-10px_rgba(239,68,68,0.2)]"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] bg-red-500/20 text-red-400 font-bold px-2 py-0.5 rounded uppercase tracking-wider">Overdue 45d</span>
              <span className="text-red-400 font-bold text-xs">₹8,500</span>
            </div>
            <p className="text-xs text-white font-medium">Rahul Verma (IIT-JEE)</p>
            <div className="mt-2 flex items-center gap-1 text-[9px] text-slate-500">
              <Clock size={10} />
              <span>Last reminder: 12 days ago</span>
            </div>
          </motion.div>

          {/* Alarm and Wasted time indicators */}
          <div className="flex items-center gap-4 my-1">
            {/* Warning radar */}
            <div className="flex-1 flex items-center gap-3 bg-red-500/5 border border-red-500/10 p-3 rounded-xl">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/30 opacity-75" />
                <AlertTriangle className="text-red-500" size={16} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">Manual Follow-ups</p>
                <p className="text-[11px] text-red-400 font-bold">12 accounts pending</p>
              </div>
            </div>

            {/* Time wasted card */}
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-950/20 relative shrink-0"
            >
              <Clock className="text-red-400/80" size={18} />
              <div className="absolute -bottom-1 -right-1 bg-red-500 text-white font-bold text-[7px] px-1 rounded-full">
                +15h
              </div>
            </motion.div>
          </div>

          {/* Invoice 2: Floating in from bottom right */}
          <motion.div
            initial={{ y: -20, opacity: 0, rotate: 4 }}
            animate={{ 
              y: [0, 8, 0],
              rotate: [4, 6, 4]
            }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            className="bg-slate-900/90 border border-red-500/20 p-3.5 rounded-xl shadow-[0_10px_30px_-10px_rgba(239,68,68,0.15)] self-end w-[85%]"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] bg-red-500/10 text-red-400/80 font-bold px-2 py-0.5 rounded uppercase">Overdue 20d</span>
              <span className="text-red-400/80 font-bold text-xs">₹4,200</span>
            </div>
            <p className="text-xs text-white font-medium">Neha Sen (NEET Batch)</p>
            <p className="text-[9px] text-slate-500 mt-1">Status: Unresponsive on WhatsApp</p>
          </motion.div>

        </div>
      </div>
    );
  }

  function TransformationVisual() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 60);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-indigo-950/10 rounded-xl border border-brand-indigo/10 p-6 min-h-[250px] lg:min-h-[350px]">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
        
        {/* SVG Pipeline Connection */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <svg className="w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 20,22 Q 60,10 80,50"
              fill="none"
              stroke="rgba(99, 102, 241, 0.25)"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
            <motion.path
              d="M 20,22 Q 60,10 80,50"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.2"
              strokeDasharray="8 25"
              animate={{ strokeDashoffset: [-33, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-between gap-4">
          {/* Row 1: DB Node & Dispatch Queue */}
          <div className="flex justify-between items-center">
            {/* Database Node */}
            <div className="flex items-center gap-2 bg-slate-900/90 border border-brand-indigo/30 p-2.5 rounded-lg">
              <div className="h-7 w-7 rounded-lg bg-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                <Database size={15} />
              </div>
              <div>
                <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Fee Ledger</p>
                <p className="text-[10px] text-white font-medium">Sorted SQL Sync</p>
              </div>
            </div>

            {/* Queue Status */}
            <div className="flex items-center gap-1.5 text-[9px] bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-1 rounded-full text-brand-cyan font-bold animate-pulse">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              <span>Active Batch Queue</span>
            </div>
          </div>

          {/* Row 2: WhatsApp Chat Bubble Mockup */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0b141a] border border-[#202c33] rounded-2xl p-3 max-w-[85%] self-end shadow-xl"
          >
            {/* WhatsApp Header */}
            <div className="flex items-center gap-1.5 border-b border-[#202c33] pb-1.5 mb-1.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white font-bold font-sans">FS</div>
              <span className="text-[9px] text-slate-300 font-bold">FeeSync Reminder</span>
              <span className="text-[8px] text-slate-500 ml-auto font-mono">Official</span>
            </div>
            {/* Bubble Message */}
            <p className="text-[10px] text-slate-200 leading-normal">
              Dear Parent, fee payment for <strong className="text-white">Rahul Verma</strong> of <strong className="text-white">₹8,500</strong> is outstanding. Click below to pay via UPI:
            </p>
            <div className="mt-2 bg-[#202c33] hover:bg-[#202c33]/80 p-1.5 rounded text-center text-[9px] text-brand-cyan font-bold cursor-pointer transition flex items-center justify-center gap-1">
              <span>pay.feesync.in/upilink</span>
              <ArrowUpRight size={10} />
            </div>
            <div className="flex justify-end items-center gap-0.5 mt-1 text-[7px] text-slate-400">
              <span>10:42 AM</span>
              <span className="text-brand-cyan font-bold">&#10003;&#10003;</span>
            </div>
          </motion.div>

          {/* Row 3: Automated Progress Bar */}
          <div className="bg-slate-900/90 border border-white/5 rounded-xl p-3">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">WhatsApp Auto-Dispatch</span>
              <span className="text-[10px] font-bold text-brand-cyan">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div 
                style={{ width: `${progress}%` }} 
                className="h-full bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_#06b6d4]"
              />
            </div>
            <div className="flex justify-between text-[8px] text-slate-500 mt-1">
              <span>Sending to: Class XI - batch A</span>
              <span>Est: 1.5s remaining</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function SuccessVisual({ revenue, rate }: { revenue: number; rate: number }) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-emerald-950/10 rounded-xl border border-brand-emerald/10 p-6 min-h-[250px] lg:min-h-[350px]">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)]" />
        
        {/* Sparkles particle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-12 text-brand-emerald/20"
          >
            <Sparkles size={20} />
          </motion.div>
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-12 text-brand-emerald/10"
          >
            <Sparkles size={16} />
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-between gap-4">
          {/* Row 1: Dual Statistics Card */}
          <div className="grid grid-cols-2 gap-3">
            {/* Revenue */}
            <div className="bg-slate-900/90 border border-white/5 p-2.5 rounded-xl text-left relative overflow-hidden">
              <span className="block text-[8px] text-slate-500 uppercase font-bold tracking-wider">Revenue Rec.</span>
              <span className="block text-xs sm:text-sm font-bold text-white mt-0.5">
                ₹{(revenue / 10000000).toFixed(2)} Cr
              </span>
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-10 text-brand-emerald">
                <TrendingUp size={24} className="absolute bottom-1 right-1" />
              </div>
            </div>

            {/* Collection Rate */}
            <div className="bg-slate-900/90 border border-brand-emerald/20 p-2.5 rounded-xl text-left relative overflow-hidden">
              <span className="block text-[8px] text-brand-emerald uppercase font-bold tracking-wider">Collection Rate</span>
              <span className="block text-xs sm:text-sm font-bold text-brand-emerald mt-0.5">
                {rate.toFixed(1)}%
              </span>
              <span className="absolute top-1.5 right-2 h-1.5 w-1.5 rounded-full bg-brand-emerald animate-ping" />
            </div>
          </div>

          {/* Row 2: SVG Chart */}
          <div className="h-24 w-full relative bg-slate-950/40 rounded-xl border border-white/5 p-2 flex flex-col justify-between overflow-hidden">
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest font-sans">Monthly Collection Efficiency</span>
            <div className="flex-1 w-full h-full relative mt-1">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                
                {/* Grid Lines */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                {/* Gradient fill */}
                <motion.path
                  d="M 0,75 L 50,65 L 100,50 L 150,55 L 200,30 L 250,15 L 300,10 L 300,75 Z"
                  fill="url(#chart-glow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Main Line */}
                <motion.path
                  d="M 0,75 L 50,65 L 100,50 L 150,55 L 200,30 L 250,15 L 300,10"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Glowing active node at peak */}
                <motion.circle
                  cx="300"
                  cy="10"
                  r="4"
                  fill="#10b981"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </svg>
            </div>
          </div>

          {/* Row 3: Biometric sync & invoice sent confirmations */}
          <div className="bg-slate-900/90 border border-brand-emerald/10 rounded-xl p-3 text-left relative overflow-hidden flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                <CheckCircle2 size={14} />
              </div>
              <div>
                <p className="text-[10px] text-white font-bold leading-tight">Biometric Gate System</p>
                <p className="text-[8px] text-slate-400">Verifying student credentials...</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded text-[8px] text-brand-emerald font-bold">
              <Unlock size={8} className="animate-bounce" />
              <span>Gate Open</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderVisual = (step: number) => {
    switch (step) {
      case 0:
        return <ChaosVisual />;
      case 1:
        return <TransformationVisual />;
      case 2:
        return <SuccessVisual revenue={revenue} rate={rate} />;
      default:
        return null;
    }
  };

  return (
    <section id="story" ref={containerRef} className="relative bg-[#060913] py-20 lg:py-32 overflow-hidden z-10">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none z-0" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="relative z-20 mb-16 lg:mb-24 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3 flex items-center justify-center lg:justify-start gap-2 font-sans">
            <Sparkles size={14} className="text-brand-indigo animate-pulse" />
            THE INSTITUTIONAL JOURNEY
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-syne text-white leading-tight">
            See How FeeSync Shakes Up Academic Admin
          </h3>
        </div>

        {/* DESKTOP LAYOUT (lg and up) */}
        <div className="hidden lg:grid grid-cols-2 gap-16 relative min-h-[300vh]">
          
          {/* Left Side: Story Narratives with Timeline */}
          <div className="relative pl-12 border-l border-white/5 space-y-[80vh] py-[25vh]">
            
            {/* Interactive Timeline Tracker */}
            <div className="absolute left-0 top-[15%] bottom-[15%] w-[2px] bg-slate-800 pointer-events-none">
              <motion.div
                className={`w-full absolute top-0 rounded-full transition-all duration-500 bg-gradient-to-b ${
                  activeStep === 0 
                    ? "from-red-500 to-red-500 h-[10%]" 
                    : activeStep === 1 
                    ? "from-red-500 via-brand-indigo to-brand-cyan h-[50%]" 
                    : "from-red-500 via-brand-indigo to-brand-emerald h-[100%]"
                }`}
              />
              
              {/* Step Nodes */}
              <div className={`absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 bg-[#060913] flex items-center justify-center transition-all duration-300 ${
                activeStep >= 0 ? "border-red-500 shadow-[0_0_10px_#ef4444]" : "border-slate-800"
              }`}>
                <div className={`h-1.5 w-1.5 rounded-full transition-all ${activeStep >= 0 ? "bg-red-500" : "bg-slate-800"}`} />
              </div>

              <div className={`absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 bg-[#060913] flex items-center justify-center transition-all duration-300 ${
                activeStep >= 1 ? "border-brand-indigo shadow-[0_0_10px_#4f46e5]" : "border-slate-800"
              }`}>
                <div className={`h-1.5 w-1.5 rounded-full transition-all ${activeStep >= 1 ? "bg-brand-indigo" : "bg-slate-800"}`} />
              </div>

              <div className={`absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 bg-[#060913] flex items-center justify-center transition-all duration-300 ${
                activeStep >= 2 ? "border-brand-emerald shadow-[0_0_10px_#10b981]" : "border-slate-800"
              }`}>
                <div className={`h-1.5 w-1.5 rounded-full transition-all ${activeStep >= 2 ? "bg-brand-emerald" : "bg-slate-800"}`} />
              </div>
            </div>

            {/* Step 1: The Chaos */}
            <motion.div 
              animate={{ 
                opacity: activeStep === 0 ? 1 : 0.25,
                scale: activeStep === 0 ? 1 : 0.98,
                x: activeStep === 0 ? 10 : 0
              }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center min-h-[40vh]"
            >
              <span className="text-red-500 font-bold text-sm tracking-wider uppercase mb-3 flex items-center gap-1.5 font-sans">
                <ShieldAlert size={16} /> Phase 1: The Administrative Chaos
              </span>
              <h4 className="font-clash text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
                Hours Wasted Chasing Overdue Fees
              </h4>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Academy owners spend up to 15 hours every month reviewing diaries, cross-referencing messy bank statements, and sending awkward reminder messages manually to parent groups on WhatsApp.
              </p>
              <div className="flex flex-col gap-3 text-sm text-red-400 font-sans">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  Overdue payments remain unnoticed for months.
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  Scattered receipts make tax reporting a nightmare.
                </div>
              </div>
            </motion.div>

            {/* Step 2: The Transformation */}
            <motion.div 
              animate={{ 
                opacity: activeStep === 1 ? 1 : 0.25,
                scale: activeStep === 1 ? 1 : 0.98,
                x: activeStep === 1 ? 10 : 0
              }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center min-h-[40vh]"
            >
              <span className="text-brand-indigo font-bold text-sm tracking-wider uppercase mb-3 flex items-center gap-1.5 font-sans">
                <Sparkles size={16} className="text-brand-indigo" /> Phase 2: The FeeSync Transformation
              </span>
              <h4 className="font-clash text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
                One-Click Automated Reminders
              </h4>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Deploy FeeSync and watch system algorithms organize messy registers into automated payment pipelines. The software handles WhatsApp notifications, UPI bill generator links, and batch logs instantly.
              </p>
              <div className="flex flex-col gap-3 text-sm text-brand-cyan font-sans">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shrink-0" />
                  System dispatches secure payment links on WhatsApp.
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shrink-0" />
                  Dynamic payment pipelines sort student ledger files automatically.
                </div>
              </div>
            </motion.div>

            {/* Step 3: The Success */}
            <motion.div 
              animate={{ 
                opacity: activeStep === 2 ? 1 : 0.25,
                scale: activeStep === 2 ? 1 : 0.98,
                x: activeStep === 2 ? 10 : 0
              }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center min-h-[40vh]"
            >
              <span className="text-brand-emerald font-bold text-sm tracking-wider uppercase mb-3 flex items-center gap-1.5 font-sans">
                <CheckCircle2 size={16} className="text-brand-emerald" /> Phase 3: The Automated Success
              </span>
              <h4 className="font-clash text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
                Unlock Consistent Cash Flow & Peace of Mind
              </h4>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Track growth trajectories instantly on a dashboard. Realize 99.8% collection rates, generate professional PDF invoices, sync biometric entrance gates, and scale student batches with full structural control.
              </p>
              <div className="flex flex-col gap-3 text-sm text-brand-emerald font-sans">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald shrink-0" />
                  Achieve near-zero collection latency.
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald shrink-0" />
                  Generate premium reports to boost institute reputation.
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Sticky Visual Window */}
          <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
            
            {/* Ambient Background Light Spill */}
            <div className={`absolute h-72 w-72 rounded-full blur-[100px] opacity-25 transition-all duration-700 pointer-events-none z-0 ${
              activeStep === 0 ? "bg-red-600" : activeStep === 1 ? "bg-brand-indigo" : "bg-brand-emerald"
            }`} />

            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl border border-white/10 bg-[#0B0F19]/90 p-6 glass-panel overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)] flex flex-col justify-between pointer-events-auto z-10">
              
              {/* Decorative Background Grid */}
              <div className="absolute inset-0 bg-grid-overlay opacity-10 pointer-events-none z-0" />

              {/* Visual Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  {/* Chrome window dots */}
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider ml-2 font-sans">
                    Live Admin Console
                  </span>
                </div>
                <div className="text-[9px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                  v1.2.0-secure
                </div>
              </div>

              {/* Visual Dynamic Render Area */}
              <div className="flex-1 py-6 relative flex flex-col justify-center z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    {renderVisual(activeStep)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Visual Footer */}
              <div className="border-t border-white/5 pt-4 text-left relative z-10">
                <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold font-sans">
                  SYSTEM STATUS
                </span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs font-semibold text-white font-sans">
                    {activeStep === 0 ? "Manual Chasing Mode" : activeStep === 1 ? "Sorting Databases..." : "Secure Automatic Mode"}
                  </span>
                  <span className={`h-2 w-2 rounded-full ${activeStep === 0 ? "bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" : activeStep === 1 ? "bg-brand-cyan animate-pulse shadow-[0_0_8px_#06b6d4]" : "bg-brand-emerald animate-pulse shadow-[0_0_8px_#10b981]"}`} />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* MOBILE LAYOUT (lg:hidden) */}
        {/* On mobile, steps stack sequentially with their matching visuals inside self-contained cards */}
        <div className="block lg:hidden space-y-12">
          
          {/* Mobile Step 1 */}
          <div className="bg-[#0B0F19]/60 border border-white/5 rounded-2xl p-6 glass-panel flex flex-col gap-6">
            <div>
              <span className="text-red-500 font-bold text-xs tracking-wider uppercase mb-2.5 flex items-center gap-1.5 font-sans">
                <ShieldAlert size={14} /> Phase 1: The Administrative Chaos
              </span>
              <h4 className="font-clash text-xl font-bold text-white mb-3 leading-snug">
                Hours Wasted Chasing Overdue Fees
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Academy owners spend up to 15 hours every month reviewing diaries, cross-referencing messy bank statements, and sending awkward reminder messages manually to parent groups on WhatsApp.
              </p>
              <div className="flex flex-col gap-2 text-[10px] text-red-400 font-sans">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  Overdue payments remain unnoticed for months.
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  Scattered receipts make tax reporting a nightmare.
                </div>
              </div>
            </div>
            
            {/* Visual Panel */}
            <div className="w-full overflow-hidden">
              <ChaosVisual />
            </div>
          </div>

          {/* Mobile Step 2 */}
          <div className="bg-[#0B0F19]/60 border border-white/5 rounded-2xl p-6 glass-panel flex flex-col gap-6">
            <div>
              <span className="text-brand-indigo font-bold text-xs tracking-wider uppercase mb-2.5 flex items-center gap-1.5 font-sans">
                <Sparkles size={14} className="text-brand-indigo" /> Phase 2: The FeeSync Transformation
              </span>
              <h4 className="font-clash text-xl font-bold text-white mb-3 leading-snug">
                One-Click Automated Reminders
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Deploy FeeSync and watch system algorithms organize messy registers into automated payment pipelines. The software handles WhatsApp notifications, UPI bill generator links, and batch logs instantly.
              </p>
              <div className="flex flex-col gap-2 text-[10px] text-brand-cyan font-sans">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shrink-0" />
                  System dispatches secure payment links on WhatsApp.
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shrink-0" />
                  Dynamic payment pipelines sort student ledger files automatically.
                </div>
              </div>
            </div>
            
            {/* Visual Panel */}
            <div className="w-full overflow-hidden">
              <TransformationVisual />
            </div>
          </div>

          {/* Mobile Step 3 */}
          <div className="bg-[#0B0F19]/60 border border-white/5 rounded-2xl p-6 glass-panel flex flex-col gap-6">
            <div>
              <span className="text-brand-emerald font-bold text-xs tracking-wider uppercase mb-2.5 flex items-center gap-1.5 font-sans">
                <CheckCircle2 size={14} className="text-brand-emerald" /> Phase 3: The Automated Success
              </span>
              <h4 className="font-clash text-xl font-bold text-white mb-3 leading-snug">
                Unlock Consistent Cash Flow & Peace of Mind
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Track growth trajectories instantly on a dashboard. Realize 99.8% collection rates, generate professional PDF invoices, sync biometric entrance gates, and scale student batches with full structural control.
              </p>
              <div className="flex flex-col gap-2 text-[10px] text-brand-emerald font-sans">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald shrink-0" />
                  Achieve near-zero collection latency.
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald shrink-0" />
                  Generate premium reports to boost institute reputation.
                </div>
              </div>
            </div>
            
            {/* Visual Panel */}
            <div className="w-full overflow-hidden">
              <SuccessVisual revenue={10250000} rate={99.8} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
