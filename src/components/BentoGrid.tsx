"use client";

import { motion, Variants } from "framer-motion";
import { 
  MessageSquare, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Fingerprint, 
  FolderGit, 
  UserCheck, 
  UserSquare2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function BentoGrid() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="features" className="relative bg-[#060913] py-32 z-10">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-indigo/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            System Infrastructure
          </h2>
          <h3 className="font-clash text-3xl md:text-4xl font-extrabold text-white leading-tight">
            An Elite Toolkit Designed to Optimize Academy Admin
          </h3>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Eliminate operational leakages. FeeSync bundles everything you need to manage batches, secure online funds, track collections, and verify student records.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* Card 1: Automated Fee Reminders (col-span-2) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass-panel hover:border-brand-indigo/30 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-xl min-h-[300px]"
          >
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-brand-indigo/10 blur-xl group-hover:bg-brand-indigo/15 transition-colors" />
            
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo group-hover:scale-110 transition-transform duration-300">
                <MessageSquare size={22} className="magnetic" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 border border-white/5 bg-white/5 rounded-full px-3 py-1">
                WhatsApp + SMS Integration
              </span>
            </div>

            <div className="mt-8 space-y-3">
              <h4 className="font-syne text-xl font-bold text-white">Automated Fee Reminders</h4>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                Dispatch personalized reminders with direct checkout links. Parents receive updates on WhatsApp, ensuring payments are cleared without manual intervention.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2 rounded-lg bg-white/5 border border-white/5 p-3.5 max-w-sm">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Sending to Parent of Amit Gupta</span>
                <span className="text-brand-emerald font-semibold">SUCCESS</span>
              </div>
              <p className="text-xs text-white font-bold leading-tight mt-1">
                "Hello Mr. Gupta, Fee of ₹6,500 for Amit's IIT Class is due. Pay using upi://pay-feesync"
              </p>
            </div>
          </motion.div>

          {/* Card 2: Online Payment Gateway (col-span-1) */}
          <motion.div
            variants={itemVariants}
            className="glass-panel hover:border-brand-cyan/30 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-xl min-h-[300px]"
          >
            <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-brand-cyan/10 blur-xl group-hover:bg-brand-cyan/15 transition-colors" />

            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform duration-300">
                <CreditCard size={22} className="magnetic" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan border border-brand-cyan/20 bg-brand-cyan/10 rounded-full px-3 py-1">
                Coming Soon
              </span>
            </div>

            <div className="mt-8 space-y-2">
              <h4 className="font-syne text-xl font-bold text-white">UPI & Online Payments</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Accept payments via UPI, Credit/Debit cards, Net Banking, and Wallet integrations. Settlements happen directly into your primary account.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-lg bg-white/5 border border-white/5 p-3">
              <div className="flex gap-2">
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">UPI</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">CARDS</span>
              </div>
              <span className="text-[11px] font-bold text-brand-cyan">0% Additional Costs</span>
            </div>
          </motion.div>

          {/* Card 3: Analytics Dashboard (col-span-1) */}
          <motion.div
            variants={itemVariants}
            className="glass-panel hover:border-brand-indigo/30 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-xl min-h-[300px]"
          >
            <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-brand-indigo/10 blur-xl group-hover:bg-brand-indigo/15 transition-colors" />

            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo group-hover:scale-110 transition-transform duration-300">
                <BarChart3 size={22} className="magnetic" />
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <h4 className="font-syne text-xl font-bold text-white">Analytics Dashboard</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Analyze collection rates, check pending arrears, forecast monthly revenue trajectories, and download comprehensive ledger exports.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-lg">
              <div className="flex items-center gap-1.5 text-xs text-brand-emerald">
                <TrendingUp size={14} />
                <span>+24.5% Growth</span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase">Revenue Report</span>
            </div>
          </motion.div>

          {/* Card 4: Instant PDF Receipts (col-span-2) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass-panel hover:border-brand-emerald/30 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-xl min-h-[300px]"
          >
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-brand-emerald/10 blur-xl group-hover:bg-brand-emerald/15 transition-colors" />

            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald group-hover:scale-110 transition-transform duration-300">
                <FileText size={22} className="magnetic" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 border border-white/5 bg-white/5 rounded-full px-3 py-1">
                GST Compliant Billings
              </span>
            </div>

            <div className="mt-8 space-y-3">
              <h4 className="font-syne text-xl font-bold text-white">Instant PDF Receipts</h4>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                As soon as a fee is recorded or cleared online, the engine builds a GST-compliant PDF receipt. It is instantly archived and forwarded to the parent via WhatsApp or Email.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between bg-white/5 border border-white/5 p-3.5 rounded-lg max-w-sm">
              <div className="flex items-center gap-2 text-xs text-white font-bold">
                <CheckCircle2 size={15} className="text-brand-emerald animate-pulse" />
                <span>Invoice #FS-2026-9043</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">1.2 MB PDF Generated</span>
            </div>
          </motion.div>

          {/* Card 5: Attendance Tracking */}
          <motion.div
            variants={itemVariants}
            className="glass-panel hover:border-brand-cyan/30 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-xl min-h-[280px]"
          >
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform duration-300">
                <Fingerprint size={22} className="magnetic" />
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-syne text-lg font-bold text-white">Attendance Sync</h4>
              <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                Link biometric or RFID hardware to FeeSync. Trigger automated SMS/WhatsApp gate checks when students enter the premises.
              </p>
            </div>
          </motion.div>

          {/* Card 6: Batch Management */}
          <motion.div
            variants={itemVariants}
            className="glass-panel hover:border-brand-indigo/30 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-xl min-h-[280px]"
          >
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo group-hover:scale-110 transition-transform duration-300">
                <FolderGit size={22} className="magnetic" />
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-syne text-lg font-bold text-white">Batch & Cohort Manager</h4>
              <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                Organize students into NEET, JEE, Foundation, or academy streams. Configure batch pricing grids and individual billing terms easily.
              </p>
            </div>
          </motion.div>

          {/* Card 7: Staff Access Control */}
          <motion.div
            variants={itemVariants}
            className="glass-panel hover:border-brand-emerald/30 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-xl min-h-[280px]"
          >
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald group-hover:scale-110 transition-transform duration-300">
                <UserCheck size={22} className="magnetic" />
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-syne text-lg font-bold text-white">Staff Roles & Permissions</h4>
              <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                Assign specific dashboard access limits. Let your accountant record offline collections while locking payroll files and fee matrices.
              </p>
            </div>
          </motion.div>

          {/* Card 8: Student Profiles */}
          <motion.div
            variants={itemVariants}
            className="glass-panel hover:border-brand-indigo/30 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-xl min-h-[280px]"
          >
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo group-hover:scale-110 transition-transform duration-300">
                <UserSquare2 size={22} className="magnetic" />
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-syne text-lg font-bold text-white">Comprehensive Profiles</h4>
              <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                Maintain 360-degree profiles for parents and students. Review academic histories, payment timelines, attendance ratings, and logs.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
