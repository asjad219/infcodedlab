"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, TrendingUp, IndianRupee } from "lucide-react";

export default function RoiCalculator() {
  const [students, setStudents] = useState<number>(500);
  const [avgFee, setAvgFee] = useState<number>(2000);

  // Derived calculations
  // Assume manual admin takes 5 minutes per student per month (receipts, reminders, entries)
  const hoursSaved = Math.round((students * 5) / 60);
  
  // Assume 5% of fees are typically delayed/lost. FeeSync recovers 90% of that.
  const extraRevenue = Math.round(students * avgFee * 0.05 * 0.9);
  
  // Assume ₹2 spent per student on paper receipts, manual SMS, registers
  const overheadSaved = students * 2;

  const totalMonthlyValue = extraRevenue + overheadSaved;

  return (
    <section className="relative bg-[#060913] py-24 md:py-32 z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-3 flex items-center justify-center gap-2">
            <Calculator size={14} /> Calculate Your ROI
          </h2>
          <h3 className="font-clash text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Stop Guessing. See the Impact.
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Adjust the sliders below based on your academy's size. Discover exactly how much time and revenue FeeSync can recover for you every single month.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Controls (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm"
          >
            {/* Slider 1: Students */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <div>
                  <label className="block text-white font-bold text-lg">Total Active Students</label>
                  <span className="text-slate-400 text-xs">Across all batches</span>
                </div>
                <div className="bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald px-4 py-1.5 rounded-lg font-bold font-mono text-xl">
                  {students.toLocaleString()}
                </div>
              </div>
              <input 
                type="range" 
                min="50" 
                max="5000" 
                step="50"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                <span>50</span>
                <span>5,000+</span>
              </div>
            </div>

            {/* Slider 2: Average Fee */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <div>
                  <label className="block text-white font-bold text-lg">Avg. Monthly Fee</label>
                  <span className="text-slate-400 text-xs">Per student (₹)</span>
                </div>
                <div className="bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald px-4 py-1.5 rounded-lg font-bold font-mono text-xl">
                  ₹{avgFee.toLocaleString()}
                </div>
              </div>
              <input 
                type="range" 
                min="500" 
                max="15000" 
                step="500"
                value={avgFee}
                onChange={(e) => setAvgFee(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                <span>₹500</span>
                <span>₹15,000+</span>
              </div>
            </div>
          </motion.div>

          {/* Results (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {/* Main Value Prop */}
            <div className="md:col-span-2 bg-gradient-to-br from-brand-emerald/20 to-[#060913] border border-brand-emerald/30 rounded-3xl p-8 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <IndianRupee size={32} className="text-brand-emerald mb-4" />
              <h4 className="text-slate-300 font-semibold mb-2">Extra Monthly Value Generated</h4>
              <motion.div 
                key={totalMonthlyValue}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl md:text-7xl font-clash font-extrabold text-white text-shadow-lg"
              >
                ₹{totalMonthlyValue.toLocaleString()}
              </motion.div>
              <p className="text-brand-emerald text-sm font-bold mt-4 tracking-wider uppercase">
                Pays for itself in days.
              </p>
              <p className="text-[9px] md:text-[10px] text-brand-emerald/60 mt-4 pt-4 border-t border-brand-emerald/20 w-full max-w-sm">
                *Calculation: Recovered revenue + printing/SMS costs saved (₹2/student)
              </p>
            </div>

            {/* Sub Metric 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-start hover:border-brand-indigo/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-6">
                <Clock size={24} />
              </div>
              <motion.div 
                key={hoursSaved}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-extrabold text-white font-clash mb-2"
              >
                {hoursSaved} <span className="text-xl md:text-2xl text-slate-500 font-medium">hrs</span>
              </motion.div>
              <p className="text-slate-400 text-sm font-medium">
                Admin time saved per month
              </p>
              <p className="text-[10px] text-slate-500 mt-4 pt-3 border-t border-white/5 w-full">
                *Based on saving 5 mins of manual work per student
              </p>
            </div>

            {/* Sub Metric 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-start hover:border-brand-cyan/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6">
                <TrendingUp size={24} />
              </div>
              <motion.div 
                key={extraRevenue}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-extrabold text-white font-clash mb-2"
              >
                ₹{extraRevenue.toLocaleString()}
              </motion.div>
              <p className="text-slate-400 text-sm font-medium">
                Lost revenue recovered
              </p>
              <p className="text-[10px] text-slate-500 mt-4 pt-3 border-t border-white/5 w-full">
                *Assumes recovering 90% of a 5% delayed payment rate
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
