"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Users2, IndianRupee, FileCheck2 } from "lucide-react";

// Count Up Sub-Component
function CountUp({ end, prefix = "", suffix = "", duration = 2 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Ease out quad
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="font-clash">
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const cardVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="metrics" className="relative bg-[#070914] py-32 z-10">
      
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Metric 1: Students Managed */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:border-brand-indigo/30 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users2 size={22} className="magnetic" />
            </div>
            
            <h4 className="text-fluid-2xl font-bold tracking-tight text-white mb-2 leading-none">
              <CountUp end={50000} suffix="+" />
            </h4>
            
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              Students Managed
            </p>
            
            <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
              Enrolled across batches, cohorts, and classes in India.
            </p>
          </motion.div>

          {/* Metric 2: Fees Collected */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:border-brand-emerald/30 transition-all duration-300 border-t-2 border-t-brand-emerald/20"
          >
            <div className="h-12 w-12 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald mb-6 group-hover:scale-110 transition-transform duration-300">
              <IndianRupee size={20} className="magnetic" />
            </div>

            <h4 className="text-fluid-2xl font-bold tracking-tight text-brand-emerald mb-2 leading-none">
              <CountUp end={10} prefix="₹" suffix=" Crore+" />
            </h4>

            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              Fees Collected
            </p>

            <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
              Processed through offline receipts and secure online links.
            </p>
          </motion.div>

          {/* Metric 3: Receipts Generated */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:border-brand-cyan/30 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileCheck2 size={22} className="magnetic" />
            </div>

            <h4 className="text-fluid-2xl font-bold tracking-tight text-white mb-2 leading-none">
              <CountUp end={1000000} suffix="+" />
            </h4>

            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              Receipts Generated
            </p>

            <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
              Automated PDF bills generated and archived securely.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
