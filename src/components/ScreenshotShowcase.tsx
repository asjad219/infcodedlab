"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Laptop, Phone, Layout, ChevronRight, Eye, Users, Settings } from "lucide-react";

// 3D Mouse Tilt Wrapper
function TiltWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shadowStyle, setShadowStyle] = useState("0px 15px 35px rgba(0, 0, 0, 0.5)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    
    const mouseX = e.clientX - rect.left - w / 2;
    const mouseY = e.clientY - rect.top - h / 2;
    
    // Tilt calculations (max 10 degrees)
    const rX = -(mouseY / (h / 2)) * 8;
    const rY = (mouseX / (w / 2)) * 8;
    
    setRotateX(rX);
    setRotateY(rY);

    // Dynamic shadow position shifting based on tilt direction
    const shadowX = -rY * 2;
    const shadowY = 15 + rX * 2;
    setShadowStyle(`${shadowX}px ${shadowY}px 35px rgba(0, 0, 0, 0.6)`);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShadowStyle("0px 15px 35px rgba(0, 0, 0, 0.5)");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      style={{ 
        transformStyle: "preserve-3d",
        boxShadow: shadowStyle
      }}
      className={`${className} transition-shadow duration-300`}
    >
      {children}
    </motion.div>
  );
}

export default function ScreenshotShowcase() {
  const [activeTab, setActiveTab] = useState<"desktop" | "mobile" | "settings">("desktop");

  return (
    <section id="screenshots" className="relative bg-[#070914] py-32 z-10 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3">
            Interface Showcase
          </h2>
          <h3 className="font-clash text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Designed for Simplicity. Engineered for Speed.
          </h3>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Take a tour of our award-winning layouts. Interact with the elements below to tilt them in 3D space.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center items-center gap-4 mb-20">
          <button
            onClick={() => setActiveTab("desktop")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
              activeTab === "desktop"
                ? "bg-brand-indigo border-brand-indigo text-white shadow-lg shadow-brand-indigo/20"
                : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <Laptop size={14} />
            Desktop Ledger
          </button>

          <button
            onClick={() => setActiveTab("mobile")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
              activeTab === "mobile"
                ? "bg-brand-indigo border-brand-indigo text-white shadow-lg shadow-brand-indigo/20"
                : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <Phone size={14} />
            Mobile App
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
              activeTab === "settings"
                ? "bg-brand-indigo border-brand-indigo text-white shadow-lg shadow-brand-indigo/20"
                : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <Layout size={14} />
            Console Settings
          </button>
        </div>

        {/* Dynamic Display Area */}
        <div className="flex items-center justify-center w-full min-h-[480px] md:min-h-[580px]">
          
          {activeTab === "desktop" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="w-full max-w-4xl px-4 flex flex-col items-center relative"
            >
              {/* Coming Soon Badge Outside */}
              <div className="absolute -top-12 z-50">
                 <span className="bg-[#05070E]/80 backdrop-blur-md border border-brand-cyan/50 text-brand-cyan px-6 py-2 rounded-full font-bold tracking-widest uppercase text-[10px] md:text-xs shadow-[0_0_25px_rgba(6,182,212,0.4)] ring-1 ring-brand-cyan/20">
                   Coming Soon
                 </span>
              </div>

              {/* MacBook Mockup */}
              <TiltWrapper className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#1b1f33] border-4 border-slate-700 rounded-xl overflow-hidden group shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-4 md:h-5 bg-slate-800 flex items-center gap-1 md:gap-1.5 px-2 md:px-3 z-30">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-red-500" />
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500" />
                  <span className="text-[7px] md:text-[9px] text-slate-500 mx-auto select-none font-mono">ledger.feesync.com/admin</span>
                </div>

                <div className="w-full h-full pt-4 md:pt-5 relative bg-[#090D1A] flex text-[10px] md:text-xs">
                  {/* Sidebar */}
                  <div className="w-12 md:w-48 border-r border-white/5 bg-[#05070e] flex flex-col p-1 md:p-4 gap-2">
                     <div className="flex justify-center md:justify-start items-center gap-2 mb-2 md:mb-4 px-1">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-brand-indigo to-brand-cyan" />
                        <span className="font-bold text-white hidden md:block">FeeSync Admin</span>
                     </div>
                     <div className="w-full h-8 bg-brand-indigo/15 rounded-lg border border-brand-indigo/30 flex items-center justify-center md:justify-start px-0 md:px-3 gap-3 text-brand-indigo">
                        <Layout size={14} />
                        <span className="hidden md:block font-semibold">Ledger</span>
                     </div>
                     <div className="w-full h-8 flex items-center justify-center md:justify-start px-0 md:px-3 gap-3 text-slate-500 hover:text-white transition-colors">
                        <Users size={14} />
                        <span className="hidden md:block">Students</span>
                     </div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 p-2 md:p-6 overflow-hidden flex flex-col relative bg-gradient-to-br from-[#090D1A] to-[#05070e]">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
                     
                     <div className="flex justify-between items-center mb-3 md:mb-6 relative z-10">
                        <div className="flex items-center gap-2 md:gap-3">
                           <h4 className="text-white font-bold text-xs md:text-lg">Financial Ledger</h4>
                        </div>
                        <button className="bg-gradient-to-r from-brand-indigo to-brand-cyan text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[8px] md:text-xs font-bold shadow-lg shadow-brand-cyan/20 hover:scale-105 transition-transform">Generate Report</button>
                     </div>

                     {/* Top Metric Cards */}
                     <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-6 relative z-10">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2 md:p-4 backdrop-blur-sm shadow-xl flex flex-col justify-center">
                           <span className="text-[7px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Total Collected</span>
                           <span className="text-white font-bold text-xs md:text-xl">₹12.4M</span>
                        </div>
                        <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-lg p-2 md:p-4 backdrop-blur-sm shadow-xl flex flex-col justify-center">
                           <span className="text-[7px] md:text-[10px] text-brand-cyan font-bold uppercase tracking-widest mb-1">Pending Dues</span>
                           <span className="text-white font-bold text-xs md:text-xl">₹845K</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2 md:p-4 backdrop-blur-sm shadow-xl flex flex-col justify-center">
                           <span className="text-[7px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Recovery Rate</span>
                           <span className="text-brand-emerald font-bold text-xs md:text-xl">94.2%</span>
                        </div>
                     </div>

                     {/* Table */}
                     <div className="flex-1 bg-black/40 border border-white/10 rounded-xl p-2 md:p-4 overflow-x-auto overflow-y-hidden flex flex-col gap-1 md:gap-2 shadow-2xl relative z-10">
                        <div className="grid grid-cols-3 md:grid-cols-5 text-[7px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider pb-1 md:pb-2 border-b border-white/10 px-1 md:px-2">
                           <span className="col-span-1 md:col-span-2">Student Profile</span>
                           <span>Batch Group</span>
                           <span className="hidden md:block">Next Billing</span>
                           <span className="text-right">Ledger Status</span>
                        </div>
                        {/* Rows */}
                        {[
                          { name: "Rahul Verma", batch: "IIT-JEE 2027", status: "Paid", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]" },
                          { name: "Sneha Patel", batch: "NEET 2026", status: "Pending", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.2)]" },
                          { name: "Amit Kumar", batch: "Foundation", status: "Overdue", color: "text-red-400 bg-red-400/10 border-red-400/20 shadow-[0_0_10px_rgba(248,113,113,0.2)]" },
                          { name: "Priya Singh", batch: "IIT-JEE 2027", status: "Paid", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]" },
                        ].map((row, i) => (
                           <div key={i} className="grid grid-cols-3 md:grid-cols-5 text-[8px] md:text-xs text-slate-300 items-center py-1.5 md:py-3 px-2 md:px-3 border-b border-white/5 hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
                              <span className="col-span-1 md:col-span-2 font-semibold text-white truncate flex items-center gap-2">
                                 <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-brand-indigo/20 flex items-center justify-center text-[6px] md:text-[9px] font-bold text-brand-indigo group-hover:bg-brand-indigo group-hover:text-white transition-colors">{row.name.charAt(0)}</div>
                                 {row.name}
                              </span>
                              <span className="text-slate-400 truncate font-mono text-[7px] md:text-[10px]">{row.batch}</span>
                              <span className="hidden md:block text-slate-500 font-mono text-[7px] md:text-[10px]">12th Oct 2026</span>
                              <div className="flex justify-end">
                                 <span className={`px-2 py-0.5 md:px-3 md:py-1 rounded text-[7px] md:text-[9px] font-bold border uppercase tracking-widest ${row.color}`}>
                                    {row.status}
                                 </span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                </div>
              </TiltWrapper>
              <div className="h-2 w-[85%] mx-auto bg-slate-800 rounded-b-full shadow-lg shadow-black/80 hidden md:block" />
            </motion.div>
          )}

          {activeTab === "mobile" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="w-full max-w-sm px-4"
            >
              {/* iPhone Mockup */}
              <TiltWrapper className="relative w-full aspect-[9/19] bg-[#090D1A] border-8 border-slate-800 rounded-[2.5rem] overflow-hidden group">
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-900 mr-2" />
                  <div className="w-4 h-0.5 bg-slate-800 rounded-full" />
                </div>
                <div className="w-full h-full relative">
                  <Image
                    src="/attendanc.png"
                    alt="FeeSync Batch Attendance Manager Screen"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </TiltWrapper>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="w-full max-w-4xl px-4 flex flex-col items-center relative"
            >
              {/* Coming Soon Badge Outside */}
              <div className="absolute -top-12 z-50">
                 <span className="bg-[#05070E]/80 backdrop-blur-md border border-brand-cyan/50 text-brand-cyan px-6 py-2 rounded-full font-bold tracking-widest uppercase text-[10px] md:text-xs shadow-[0_0_25px_rgba(6,182,212,0.4)] ring-1 ring-brand-cyan/20">
                   Coming Soon
                 </span>
              </div>

              {/* Settings Dashboard Card */}
              <TiltWrapper className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#0C101F] border-4 border-slate-700 rounded-xl overflow-hidden group glass-panel flex flex-col shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-4 md:h-5 bg-slate-800 flex items-center gap-1 md:gap-1.5 px-2 md:px-3 z-30">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-red-500" />
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500" />
                  <span className="text-[7px] md:text-[9px] text-slate-500 mx-auto select-none font-mono">console.feesync.com/settings</span>
                </div>

                <div className="w-full h-full pt-4 md:pt-5 relative bg-[#090D1A] flex text-[10px] md:text-xs">
                  {/* Sidebar */}
                  <div className="w-12 md:w-48 border-r border-white/5 bg-[#05070e] flex flex-col p-1 md:p-4 gap-2">
                     <div className="flex justify-center md:justify-start items-center gap-2 mb-2 md:mb-4 px-1">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-brand-indigo to-brand-cyan" />
                        <span className="font-bold text-white hidden md:block">FeeSync Admin</span>
                     </div>
                     <div className="w-full h-8 flex items-center justify-center md:justify-start px-0 md:px-3 gap-3 text-slate-500 hover:text-white transition-colors">
                        <Layout size={14} />
                        <span className="hidden md:block">Overview</span>
                     </div>
                     <div className="w-full h-8 bg-brand-cyan/15 rounded-lg border border-brand-cyan/30 flex items-center justify-center md:justify-start px-0 md:px-3 gap-3 text-brand-cyan">
                        <Settings size={14} />
                        <span className="hidden md:block font-semibold">Settings</span>
                     </div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 p-3 md:p-8 overflow-hidden flex flex-col gap-3 md:gap-6 bg-gradient-to-br from-[#090D1A] to-[#05070e] relative">
                     <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-indigo/10 rounded-full blur-[80px] pointer-events-none" />
                     
                     <div className="flex justify-between items-center pb-2 md:pb-4 border-b border-white/10 relative z-10">
                        <div className="flex items-center gap-2 md:gap-3">
                           <h4 className="text-white font-bold text-xs md:text-xl">System Configuration</h4>
                        </div>
                     </div>
                     
                     {/* Setting Blocks */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 relative z-10">
                        <div className="bg-black/40 border border-white/10 hover:border-brand-cyan/30 rounded-xl p-3 md:p-5 backdrop-blur-sm transition-colors group">
                           <div className="flex justify-between items-start mb-3">
                              <div>
                                 <span className="block text-white font-bold text-[11px] md:text-base group-hover:text-brand-cyan transition-colors">Biometric Gate Sync</span>
                                 <span className="block text-slate-400 text-[9px] md:text-xs mt-1 leading-relaxed">Automatically mark student attendance when they pass through hardware gates.</span>
                              </div>
                              <div className="w-8 h-4 md:w-12 md:h-6 bg-brand-emerald/20 rounded-full border border-brand-emerald/50 flex items-center p-0.5 justify-end shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                                 <div className="w-3 h-3 md:w-5 md:h-5 bg-brand-emerald rounded-full shadow-md" />
                              </div>
                           </div>
                           <div className="w-full bg-white/5 h-1 md:h-1.5 rounded-full mt-2 overflow-hidden">
                              <div className="h-full bg-brand-emerald w-full" />
                           </div>
                           <span className="text-[7px] md:text-[9px] text-brand-emerald font-bold uppercase tracking-widest mt-2 block">System Online & Synced</span>
                        </div>

                        <div className="bg-black/40 border border-white/10 hover:border-brand-indigo/30 rounded-xl p-3 md:p-5 backdrop-blur-sm transition-colors group">
                           <div className="flex justify-between items-start mb-3">
                              <div>
                                 <span className="block text-white font-bold text-[11px] md:text-base group-hover:text-brand-indigo transition-colors">WhatsApp Business API</span>
                                 <span className="block text-slate-400 text-[9px] md:text-xs mt-1 leading-relaxed">Dispatch automated invoice links and overdue warnings directly to parent numbers.</span>
                              </div>
                              <div className="w-8 h-4 md:w-12 md:h-6 bg-brand-emerald/20 rounded-full border border-brand-emerald/50 flex items-center p-0.5 justify-end shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                                 <div className="w-3 h-3 md:w-5 md:h-5 bg-brand-emerald rounded-full shadow-md" />
                              </div>
                           </div>
                           <div className="w-full bg-white/5 h-1 md:h-1.5 rounded-full mt-2 overflow-hidden">
                              <div className="h-full bg-brand-indigo w-[85%]" />
                           </div>
                           <span className="text-[7px] md:text-[9px] text-brand-indigo font-bold uppercase tracking-widest mt-2 block">85% Monthly Quota Used</span>
                        </div>
                     </div>

                     <div className="bg-black/40 border border-white/10 rounded-xl p-3 md:p-5 mt-1 md:mt-2 relative z-10 shadow-2xl flex-1 flex flex-col justify-center">
                        <span className="block text-white font-bold text-[11px] md:text-base mb-1">Payment Gateway Integration</span>
                        <span className="block text-slate-400 text-[9px] md:text-xs mb-3 md:mb-5">Configure secure routes for UPI and Credit Card settlements.</span>
                        <div className="space-y-3 md:space-y-4">
                           <div>
                              <div className="flex justify-between mb-1.5">
                                 <span className="block text-brand-cyan text-[8px] md:text-xs font-bold uppercase tracking-wider">Live Razorpay Key ID</span>
                                 <span className="block text-brand-emerald text-[8px] md:text-[10px] font-bold uppercase bg-brand-emerald/10 px-2 py-0.5 rounded border border-brand-emerald/20">Verified</span>
                              </div>
                              <div className="w-full bg-[#05070e] border border-brand-cyan/30 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[10px] md:text-sm text-slate-300 font-mono tracking-wider shadow-inner">rzp_live_K9x8HjA2L1qM5v</div>
                           </div>
                        </div>
                     </div>

                  </div>
                </div>
              </TiltWrapper>
              <div className="h-2 w-[85%] mx-auto bg-slate-800 rounded-b-full shadow-lg shadow-black/80 hidden md:block" />
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
