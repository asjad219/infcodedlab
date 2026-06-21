"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, CreditCard, Clock, Star } from "lucide-react";

export default function SocialProof() {
  const items = [
    { text: "Trusted by 500+ Coaching Institutes", icon: Star, color: "text-yellow-500" },
    { text: "Automated WhatsApp Fee Reminders", icon: Clock, color: "text-brand-indigo" },
    { text: "Instant Secure PDF Receipts", icon: ShieldCheck, color: "text-brand-emerald" },
    { text: "Online UPI & Card Payments", icon: CreditCard, color: "text-brand-cyan" },
    { text: "Attendance Tracker & SMS", icon: CheckCircle2, color: "text-white" },
    { text: "Secure Biometric Device Sync", icon: Sparkles, color: "text-brand-indigo" },
  ];

  // Double the list for infinite looping scroll
  const marqueeItems = [...items, ...items];

  return (
    <section className="relative border-y border-white/5 bg-[#080B15] py-8 overflow-hidden z-10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-4 text-center">
        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
          OPERATIONAL EXCELLENCE FOR INDIAN COACHING CENTRES
        </span>
      </div>

      <div className="marquee-container w-full relative">
        {/* Left and Right fade gradients */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#080B15] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#080B15] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track py-2">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-full border border-white/5 bg-white/5 px-6 py-2.5 hover:bg-white/10 hover:border-white/10 transition-colors duration-200 select-none"
              >
                <Icon size={14} className={item.color} />
                <span className="text-xs font-semibold text-slate-300 font-sans tracking-wide">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
