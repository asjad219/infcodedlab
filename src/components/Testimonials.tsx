"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCard {
  quote: string;
  name: string;
  role: string;
  institute: string;
  avatarInitials: string;
  avatarBg: string;
}

export default function Testimonials() {
  const testimonials: TestimonialCard[] = [
    {
      quote: "FeeSync saved us at least 15 hours a week. The automated WhatsApp reminders are magic—we recovered 94% of our pending arrears in the first week of deployment.",
      name: "Prof. Rajesh Mehta",
      role: "Director",
      institute: "Mehta Classes (NEET/JEE)",
      avatarInitials: "RM",
      avatarBg: "bg-brand-indigo/35 text-brand-indigo"
    },
    {
      quote: "No more awkward reminder phone calls with parents. They appreciate getting instant PDF receipts on WhatsApp. This software is a game changer.",
      name: "Kavita Sharma",
      role: "Founder",
      institute: "Saraswati Music Academy",
      avatarInitials: "KS",
      avatarBg: "bg-brand-cyan/35 text-brand-cyan"
    },
    {
      quote: "Biometric attendance integration combined with instant billing is flawless. Parents get text alerts when their children scan their entry passes.",
      name: "Dr. A. K. Banerjee",
      role: "Founder",
      institute: "Banerjee Physics Classes",
      avatarInitials: "AB",
      avatarBg: "bg-brand-emerald/35 text-brand-emerald"
    },
    {
      quote: "We manage 1,500+ students across 4 branches. Batch configuration templates and staff access logs give us absolute control over the collection queue.",
      name: "Vikas Jain",
      role: "Managing Director",
      institute: "Catalyst JEE Academy",
      avatarInitials: "VJ",
      avatarBg: "bg-white/10 text-white"
    }
  ];

  // Double the list for infinite scroll
  const marqueeCards = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative bg-[#060913] py-32 z-10 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-indigo/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Client Success
          </h2>
          <h3 className="font-clash text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Loved by Hundreds of Academy Directors
          </h3>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            See how coaching institutes and academies across India are standardizing their administrative workflows with FeeSync.
          </p>
        </div>

        {/* Continuous Slider Row */}
        <div className="marquee-container w-full relative py-6">
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#060913] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#060913] to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-8">
            {marqueeCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[85vw] max-w-[300px] md:max-w-none md:w-[380px] shrink-0 glass-panel p-8 rounded-2xl hover:border-brand-indigo/40 hover:-translate-y-2 hover:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.3)] transition-all duration-300 flex flex-col justify-between text-left group select-none cursor-grab active:cursor-grabbing whitespace-normal"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans italic">
                    "{card.quote}"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-6">
                  <div className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm ${card.avatarBg}`}>
                    {card.avatarInitials}
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <h5 className="font-syne text-sm font-bold text-white">
                      {card.name}
                    </h5>
                    <span className="text-[11px] text-slate-500 leading-snug">
                      {card.role}, <strong className="text-slate-400 font-semibold">{card.institute}</strong>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
