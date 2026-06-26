"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="founder-story" className="relative bg-[#060913] py-32 z-10 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-indigo/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 md:px-12 text-center relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Founder Story
          </h2>
          <h3 className="font-clash text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Built by Educators, For Educators
          </h3>
        </div>

        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass-panel p-8 md:p-12 rounded-2xl border-brand-indigo/20 shadow-[0_12px_40px_-15px_rgba(99,102,241,0.2)] flex flex-col justify-between text-left group"
        >
          <div>
            {/* Review Text */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-sans italic">
              "FeeSync is developed by InfCoded Lab, owned by Asjaduzzaman with a simple mission: help coaching centers and educational institutes replace manual fee tracking, notebooks, and spreadsheets with an easy, modern, and secure platform. Every feature is built by listening to educators and solving real operational problems. We are committed to continuously improving FeeSync based on customer feedback while delivering a reliable and secure experience."
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 border-t border-white/5 pt-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0 h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg bg-brand-indigo/35 text-brand-indigo">
                IC
              </div>
              <div className="flex flex-col gap-1 text-left">
                <h5 className="font-syne text-base font-bold text-white">
                  InfCoded Lab
                </h5>
                <span className="text-xs text-slate-500 leading-snug">
                  Owned by <strong className="text-slate-400 font-semibold">Asjaduzzaman</strong>
                </span>
              </div>
            </div>
            
            <div className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-xs font-bold uppercase tracking-widest text-center">
              Committed to Security
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
