"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Presentation, Users, Guitar, Briefcase } from "lucide-react";

export default function WhoIsItFor() {
  const audiences = [
    {
      title: "Coaching Institutes",
      desc: "Manage multiple branches, large batches, and complex fee structures effortlessly.",
      icon: GraduationCap,
      color: "text-brand-indigo"
    },
    {
      title: "Independent Tutors",
      desc: "Stop chasing payments. Automate your reminders and focus purely on teaching.",
      icon: BookOpen,
      color: "text-brand-emerald"
    },
    {
      title: "Competitive Exam Centers",
      desc: "Track JEE, NEET, and UPSC batch enrollments and installment tracking without spreadsheets.",
      icon: Presentation,
      color: "text-brand-cyan"
    },
    {
      title: "Music & Arts Academies",
      desc: "Simple subscription billing for recurring monthly classes.",
      icon: Guitar,
      color: "text-yellow-500"
    },
    {
      title: "Computer Training Centers",
      desc: "Manage short-term courses and certification fee collections securely.",
      icon: Briefcase,
      color: "text-purple-500"
    },
    {
      title: "Sports Academies",
      desc: "Track membership dues and attendance seamlessly via mobile app.",
      icon: Users,
      color: "text-red-400"
    }
  ];

  return (
    <section id="audiences" className="relative bg-[#060913] py-24 md:py-32 z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Who Is FeeSync For?
          </h2>
          <h3 className="font-clash text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Built for Every Teaching Business
          </h3>
          <p className="mt-4 text-slate-400 text-sm md:text-lg leading-relaxed">
            Whether you teach 50 students from home or manage a multi-branch academy with 5,000+ enrollments, FeeSync adapts to your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 md:p-8 rounded-2xl group hover:border-white/20 transition-all duration-300"
              >
                <div className={`h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
