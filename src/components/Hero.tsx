"use client";

import { motion } from "framer-motion";
import { useDemoModal } from "@/context/DemoModalContext";
import { ArrowRight, Sparkles, Shield, Play, Layout, Users, CreditCard, Calendar, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { openModal } = useDemoModal();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden mesh-gradient">

      {/* Background Interactive grid */}
      <div className="absolute inset-0 bg-grid-overlay opacity-80 pointer-events-none" />

      {/* Radial ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-indigo/15 blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-cyan/10 blur-[80px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 text-center flex flex-col items-center justify-center w-full">

        {/* Spark Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-brand-cyan mb-8 backdrop-blur-md"
        >
          <Sparkles size={12} className="animate-spin" style={{ animationDuration: '3s' }} />
          <span>Announcing FeeSync v2.0 by InfCoded Lab</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="max-w-4xl text-fluid-3xl font-extrabold font-clash tracking-tight text-white mb-6 leading-[1.05]"
        >
          Automated Fee Management App<br />
          <span className="bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald bg-clip-text text-transparent">
            for Coaching Institutes & Tutors
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="max-w-2xl text-fluid-lg text-slate-400 mb-10 leading-relaxed font-sans"
        >
          Manage student cohorts, secure online fees, automate WhatsApp reminders, and track academy revenue inside one premium, intuitive platform.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full justify-center sm:w-auto"
        >
          <button
            onClick={openModal}
            className="magnetic w-full sm:w-auto relative group overflow-hidden rounded-full bg-brand-indigo px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-brand-indigo/35 transition-all hover:bg-brand-indigo/90"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book a Free Demo
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
          </button>

          <a
            href="#story"
            className="magnetic w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-semibold text-white transition-colors duration-200"
          >
            <Play size={13} className="text-brand-cyan fill-brand-cyan" />
            See How it Works
          </a>
        </motion.div>

        {/* Hero visual: Floating devices mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
          className="relative w-full max-w-5xl h-[420px] md:h-[550px] flex items-center justify-center mt-8"
        >
          {/* Main Tablet Mockup (Center) */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0.5, -0.5, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute z-20 w-[90%] sm:w-[85%] md:w-[70%] aspect-[16/10] bg-[#0E1325] border-[3px] md:border-4 border-slate-700 rounded-xl md:rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Tablet Content */}
            <div className="w-full h-full relative group">
              <div className="absolute inset-x-0 top-0 h-4 bg-slate-800/80 border-b border-white/5 flex items-center gap-1.5 px-3 z-30">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <div className="w-full h-full pt-4 relative bg-[#090D1A] overflow-hidden flex text-[10px] md:text-xs">
                {/* Sidebar */}
                <div className="w-12 md:w-28 border-r border-white/5 bg-[#05070e] flex flex-col items-center md:items-start p-1.5 md:p-3 h-full gap-3 relative z-10">
                  <div className="flex items-center gap-1.5 mb-2 md:mb-4 px-1">
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-brand-indigo to-brand-cyan flex-shrink-0" />
                    <span className="font-bold text-white hidden md:block text-xs tracking-wide">FeeSync</span>
                  </div>
                  <div className="w-full h-8 bg-brand-indigo/15 rounded-lg border border-brand-indigo/30 flex items-center justify-center md:justify-start px-2.5 gap-2.5 text-brand-indigo transition-all cursor-pointer">
                    <Layout size={14} className="flex-shrink-0" />
                    <span className="hidden md:block font-semibold">Dashboard</span>
                  </div>
                  <div className="w-full h-8 hover:bg-white/5 rounded-lg flex items-center justify-center md:justify-start px-2.5 gap-2.5 text-slate-400 transition-all cursor-pointer">
                    <Users size={14} className="flex-shrink-0" />
                    <span className="hidden md:block font-medium">Students</span>
                  </div>
                  <div className="w-full h-8 hover:bg-white/5 rounded-lg flex items-center justify-center md:justify-start px-2.5 gap-2.5 text-slate-400 transition-all cursor-pointer">
                    <CreditCard size={14} className="flex-shrink-0" />
                    <span className="hidden md:block font-medium">Payments</span>
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 p-3 md:p-5 flex flex-col gap-4 h-full bg-[#0a0d17] relative z-10">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-bold text-xs md:text-sm">Overview</h4>
                      <p className="text-slate-500 text-[9px] md:text-[11px] mt-0.5">Welcome back, Academy Admin</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-1.5 bg-white/5 rounded-md text-slate-300 text-[9px] md:text-[11px] flex items-center gap-1.5 border border-white/10">
                        <Calendar size={12} /> This Month
                      </div>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-brand-indigo to-brand-cyan border border-white/10 shadow-lg shadow-brand-indigo/20 flex items-center justify-center text-[10px] font-bold text-white">
                        A
                      </div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 mt-1">
                    <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-3 md:p-4 flex flex-col gap-1.5 relative overflow-hidden group hover:border-brand-indigo/50 transition-colors">
                      <div className="absolute -right-4 -top-4 w-16 h-16 bg-brand-indigo/20 blur-2xl rounded-full group-hover:bg-brand-indigo/30 transition-colors" />
                      <span className="text-slate-400 text-[9px] md:text-xs font-medium">Total Revenue</span>
                      <span className="text-white font-extrabold text-sm md:text-lg tracking-tight">₹1,24,500</span>
                      <span className="text-brand-emerald text-[9px] md:text-[10px] flex items-center gap-1 mt-1 font-medium"><TrendingUp size={10} /> +12.5%</span>
                    </div>
                    <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-3 md:p-4 flex flex-col gap-1.5 relative overflow-hidden group hover:border-brand-cyan/50 transition-colors">
                      <span className="text-slate-400 text-[9px] md:text-xs font-medium">Active Students</span>
                      <span className="text-white font-extrabold text-sm md:text-lg tracking-tight">842</span>
                      <span className="text-brand-emerald text-[9px] md:text-[10px] flex items-center gap-1 mt-1 font-medium"><TrendingUp size={10} /> +4 new</span>
                    </div>
                    <div className="bg-gradient-to-b from-red-500/5 to-transparent border border-red-500/10 rounded-xl p-3 md:p-4 flex flex-col gap-1.5 relative overflow-hidden group hover:border-red-500/30 transition-colors">
                      <div className="absolute -right-4 -top-4 w-16 h-16 bg-red-500/10 blur-2xl rounded-full" />
                      <span className="text-red-400/80 text-[9px] md:text-xs font-medium">Overdue Fees</span>
                      <span className="text-white font-extrabold text-sm md:text-lg tracking-tight">₹18,200</span>
                      <span className="text-red-400 text-[9px] md:text-[10px] mt-1 font-medium">14 Students pending</span>
                    </div>
                  </div>

                  {/* Table area */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 flex flex-col mt-2">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-bold text-[10px] md:text-xs tracking-wide">Recent Transactions</span>
                      <span className="text-brand-cyan text-[9px] md:text-[10px] font-medium cursor-pointer">View All</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-0">
                      {[
                        { name: "Rahul Sharma", batch: "IIT-JEE 2026", amt: "₹4,500", status: "Paid", color: "text-brand-emerald", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                        { name: "Priya Singh", batch: "NEET 2025", amt: "₹3,200", status: "Pending", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
                        { name: "Amit Kumar", batch: "Class 10th Maths", amt: "₹1,800", status: "Paid", color: "text-brand-emerald", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                      ].map((tx, i) => (
                        <div key={i} className="flex justify-between items-center py-2.5 md:py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors rounded px-1 -mx-1">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
                              {tx.name.charAt(0)}
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-white text-[10px] md:text-xs font-semibold">{tx.name}</span>
                              <span className="text-slate-500 text-[9px] md:text-[10px]">{tx.batch}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 md:gap-8">
                            <span className="text-white font-bold text-[10px] md:text-xs">{tx.amt}</span>
                            <span className={`text-[9px] px-2 py-0.5 rounded-full border font-medium w-14 text-center ${tx.bg} ${tx.color}`}>
                              {tx.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Floating iPhone Mockup */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [-1.5, 0.5, -1.5]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="absolute left-1 md:left-6 bottom-4 md:bottom-12 z-30 w-[28%] sm:w-[22%] md:w-[18%] aspect-[9/19] bg-[#090D1A] border-[3px] md:border-4 border-slate-600 rounded-[1.5rem] md:rounded-[2.2rem] shadow-[0_0_40px_-5px_rgba(99,102,241,0.5)] overflow-hidden ring-1 ring-brand-indigo/40"
          >
            {/* Dynamic Island */}
            <div className="absolute top-2.5 md:top-3 left-1/2 -translate-x-1/2 w-[55px] h-3.5 md:w-20 md:h-5 bg-black rounded-full z-40 flex items-center justify-between px-1.5 md:px-2 shadow-sm border border-white/5">
              <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-indigo-500/20 flex items-center justify-center">
                 <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-indigo-500 animate-pulse" />
              </div>
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#111] border border-white/10 shadow-inner" />
            </div>
            <div className="w-full h-full relative bg-[#070A15]">
              <Image
                src="/dashbord.png"
                alt="FeeSync dashboard showing automated tuition fee installment tracker"
                fill
                sizes="(max-width: 1024px) 25vw, 20vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right Floating Glass Card Mockup */}
          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [1, -1.5, 1]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
            className="flex absolute right-0 md:right-8 top-12 md:top-20 z-30 w-[35%] sm:w-[25%] md:w-[20%] aspect-[4/3] glass-panel border border-white/10 rounded-xl p-2 md:p-4 shadow-[0_20px_40px_-8px_rgba(99,102,241,0.25)] flex-col justify-between overflow-hidden"
          >
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="h-5 w-5 md:h-7 md:w-7 rounded-md bg-brand-emerald/10 flex items-center justify-center text-brand-emerald">
                <Shield className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[7px] md:text-[10px] font-bold tracking-wider text-slate-500 uppercase">Verification</span>
                <span className="block text-[8px] md:text-[11px] font-bold text-white leading-none mt-0.5">Biometric Sync</span>
              </div>
            </div>

            <div className="relative h-12 md:h-20 w-full overflow-hidden rounded-md bg-white/5 mt-1.5 md:mt-2">
              <Image
                src="/biomertic.png"
                alt="FeeSync biometric attendance integration for coaching institutes"
                fill
                sizes="(max-width: 1024px) 25vw, 20vw"
                className="object-cover"
              />
            </div>

            <div className="text-left mt-1.5 md:mt-2">
              <span className="text-[7px] md:text-[10px] text-slate-400">Automatic Batch Gate Entry Status</span>
              <div className="flex items-center gap-1 md:gap-1.5 mt-0.5 md:mt-1">
                <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-brand-emerald animate-ping" />
                <span className="text-[8px] md:text-[11px] font-semibold text-brand-emerald">99.98% Synced</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
