"use client";

import { motion } from "framer-motion";
import { useDemoModal } from "@/context/DemoModalContext";
import { ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";

export default function ContactCTA() {
  const { openModal } = useDemoModal();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#060913] py-24 overflow-hidden z-10 border-t border-white/5">
      
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 bg-grid-overlay opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-indigo/15 blur-[140px] animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-cyan/10 blur-[100px] pointer-events-none" />

      {/* Floating Particles System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-cyan/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-12 relative z-10 text-center flex flex-col items-center justify-center">
        
        {/* Upper Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-indigo/30 bg-brand-indigo/5 px-4 py-1.5 text-xs text-brand-cyan mb-8"
        >
          <Sparkles size={12} className="animate-pulse" />
          <span>Ready to Scale Your Academy?</span>
        </motion.div>

        {/* Massive Typography */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
          className="font-clash text-fluid-2xl md:text-fluid-3xl font-extrabold text-white tracking-tight leading-[1.05] max-w-4xl mb-8"
        >
          Ready to Automate Your Collections?<br />
          <span className="bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-emerald bg-clip-text text-transparent">
            Get Started with FeeSync Today.
          </span>
        </motion.h3>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-12"
        >
          Deploy FeeSync and experience automated WhatsApp billing, secure UPI transfers, and detailed ledger audits in one integrated panel.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <button
            onClick={openModal}
            className="magnetic relative group overflow-hidden rounded-full bg-brand-indigo px-10 py-5 text-sm font-bold text-white shadow-2xl shadow-brand-indigo/40 hover:bg-brand-indigo/95 transition-all hover:scale-105 active:scale-95 duration-200"
          >
            {/* Shimmer layout */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book Your Free Demo
              <ArrowUpRight size={16} />
            </span>
          </button>

          {/* Quick trust metrics */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} className="text-brand-emerald" /> Free Setup Support
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-700 hidden sm:inline" />
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} className="text-brand-emerald" /> Zero Credit Card Req.
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-700 hidden sm:inline" />
            <span className="flex items-center gap-1.5">
              <CheckCircle size={12} className="text-brand-emerald" /> 1-on-1 Personalized Walkthrough
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
