"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Add Students & Batches",
      desc: "Import your existing student roster via CSV or add them manually. Assign them to specific batches, courses, and fee structures in seconds."
    },
    {
      num: "02",
      title: "Configure Fee Rules",
      desc: "Set up one-time fees, monthly installments, or custom payment plans. Apply discounts and define due dates automatically."
    },
    {
      num: "03",
      title: "System Sends Reminders",
      desc: "FeeSync automatically dispatches personalized WhatsApp and SMS alerts to parents before and after due dates. No more awkward phone calls."
    },
    {
      num: "04",
      title: "Collect & Track Revenue",
      desc: "Parents pay via secure online UPI/Card links or you log cash receipts. The dashboard instantly updates your recovered revenue metrics."
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-[#070914] py-24 md:py-32 z-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-3">
            How It Works
          </h2>
          <h3 className="font-clash text-3xl md:text-5xl font-extrabold text-white leading-tight">
            From Chaos to Control in 4 Steps
          </h3>
          <p className="mt-4 text-slate-400 text-sm md:text-lg leading-relaxed">
            We designed FeeSync to require zero technical knowledge. Setup takes less than 10 minutes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#070914] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 rounded-full bg-brand-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="font-syne text-xl font-bold text-white z-10">{step.num}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
