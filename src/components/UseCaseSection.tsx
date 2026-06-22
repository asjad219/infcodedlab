"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Activity, User } from "lucide-react";

const useCases = [
  {
    title: "Built for Private Home Tutors & Test Prep Coaching Centers",
    description: "Streamline your small batches with automated reminders and local UPI integrations, allowing you to focus on teaching rather than administration.",
    icon: BookOpen,
    color: "text-brand-indigo",
    bg: "bg-brand-indigo/10",
    border: "border-brand-indigo/20"
  },
  {
    title: "Perfect for High-Volume IIT-JEE / NEET Coaching Institutes",
    description: "Handle thousands of students across multiple batches. Track fee defaulters, generate bulk PDF receipts, and sync biometric attendance effortlessly.",
    icon: GraduationCap,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
    border: "border-brand-cyan/20"
  },
  {
    title: "Adaptive for Dance, Yoga, personal Trainee, Music, and Sports Academies or teacher",
    description: "Flexible fee structures for subscription-based or session-based academies. Manage memberships and recurring billing with ease.",
    icon: Activity,
    color: "text-brand-emerald",
    bg: "bg-brand-emerald/10",
    border: "border-brand-emerald/20"
  },
  {
    title: "Scalable for the individual teacher",
    description: "A lightweight, mobile-first experience. Keep track of individual student progress and payments without the overhead of complex software.",
    icon: User,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  }
];

export default function UseCaseSection() {
  return (
    <section className="relative py-24 bg-[#0a0d17] z-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-xs font-bold uppercase tracking-widest text-brand-emerald mb-3">
            Tailored For Your Niche
          </span>
          <h2 className="font-clash text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Designed for Every Educational Vertical
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Whether you are a solo educator or a multi-branch enterprise, FeeSync adapts to your unique workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:border-white/20 transition-all shadow-lg"
              >
                <div className={`h-14 w-14 rounded-xl shrink-0 flex items-center justify-center border ${useCase.bg} ${useCase.border} ${useCase.color}`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="font-syne text-xl font-bold text-white mb-2 leading-tight">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
