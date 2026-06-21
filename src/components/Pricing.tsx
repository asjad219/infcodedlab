"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Gift } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Pricing() {
  const { openModal } = useDemoModal();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually");

  // Prices and features derived from the user's plan matrices
  const plans = [
    {
      name: "Free",
      description: "Perfect for independent tutors just getting started.",
      price: {
        monthly: "Free",
        annually: "Free",
      },
      features: [
        "Up to 20 Active Students",
        "Up to 2 Batches",
        "100 WhatsApp Receipts/mo",
        "30 WA Reminders/mo",
        "2 Staff Accounts",
        "Biometric Auth Included",
      ],
      recommended: false,
      cta: "Get Started Free"
    },
    {
      name: "Starter",
      description: "For small coaching classes needing more automation.",
      price: {
        monthly: 299,
        annually: 239, // 20% discount simulated
      },
      features: [
        "Up to 200 Active Students",
        "Up to 10 Batches",
        "2000 WhatsApp Receipts/mo",
        "300 WA Reminders/mo",
        "5 Staff Accounts",
        "Cloud Backup & CSV Export",
        "Support System Included",
      ],
      recommended: false,
      cta: "Start Starter Plan"
    },
    {
      name: "Growth",
      description: "For established tuition classes and test-prep centers.",
      price: {
        monthly: 999,
        annually: 799,
      },
      features: [
        "Up to 500 Active Students",
        "Up to 50 Batches",
        "5000 WhatsApp Receipts/mo",
        "1000 WA Reminders/mo",
        "10 Staff Accounts",
        "Cloud Backup & CSV Export",
        "Priority Support System",
      ],
      recommended: true,
      cta: "Schedule Growth Onboarding"
    },
    {
      name: "Institute",
      description: "For multi-branch coaching classes and schools.",
      price: {
        monthly: 1999,
        annually: 1599,
      },
      features: [
        "Up to 5000 Active Students",
        "Up to 500 Batches",
        "50000 WhatsApp Receipts/mo",
        "10000 WA Reminders/mo",
        "50 Staff Accounts",
        "Cloud Backup & CSV Export",
        "Dedicated Support System",
      ],
      recommended: false,
      cta: "Talk to Sales"
    }
  ];

  return (
    <section id="pricing" className="relative bg-[#060913] py-24 md:py-32 z-10">
      
      {/* Ambient background blur */}
      <div className="absolute bottom-12 right-0 w-[400px] h-[400px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3">
            Subscription & Plans
          </h2>
          <h3 className="font-clash text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Predictable Pricing. Engineered to Scale.
          </h3>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Select a plan that fits your academy's scale. Save 20% by choosing annual billing cycles.
          </p>
        </div>

        {/* Toggle Billing Period */}
        <div className="flex justify-center items-center gap-3 mb-16">
          <span className={`text-xs font-semibold transition-colors ${billingPeriod === "monthly" ? "text-white" : "text-slate-500"}`}>
            Billed Monthly
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly")}
            className="relative h-6 w-12 rounded-full bg-slate-800 p-0.5 transition-colors focus:outline-none"
          >
            <motion.div
              layout
              className="h-5 w-5 rounded-full bg-brand-indigo"
              animate={{ x: billingPeriod === "annually" ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold transition-colors ${billingPeriod === "annually" ? "text-white" : "text-slate-500"}`}>
              Billed Annually
            </span>
            <span className="text-[9px] font-bold text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Save 20%
            </span>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl glass-panel p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2 select-none cursor-pointer ${
                plan.recommended
                  ? "border border-brand-indigo bg-[#0a0f24] shadow-[0_15px_45px_-12px_rgba(99,102,241,0.25)]"
                  : "hover:border-white/20 hover:shadow-2xl"
              }`}
            >
              {/* Highlight ribbon */}
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-widest text-white bg-gradient-to-r from-brand-indigo to-brand-cyan px-3 py-1 rounded-full uppercase shadow-md shadow-brand-indigo/20 whitespace-nowrap">
                  RECOMMENDED
                </span>
              )}

              <div>
                {/* Header Info */}
                <div className="text-left mb-6 mt-2">
                  <h4 className="font-syne text-lg md:text-xl font-bold text-white">{plan.name}</h4>
                  <p className="text-[11px] md:text-xs text-slate-400 mt-2 min-h-[32px] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="text-left border-b border-white/5 pb-6 mb-6">
                  {typeof plan.price[billingPeriod] === "number" ? (
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-4xl font-clash font-bold text-white tracking-tight">
                        ₹{plan.price[billingPeriod]}
                      </span>
                      <span className="text-slate-500 text-xs font-semibold ml-1">/mo</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline h-[40px] md:h-[48px]">
                      <span className="text-3xl md:text-4xl font-clash font-bold text-white tracking-tight">Free</span>
                    </div>
                  )}
                  <span className="text-[9px] md:text-[10px] text-slate-500 font-semibold uppercase tracking-wider block mt-1">
                    {typeof plan.price[billingPeriod] === "number"
                      ? `Billed ${billingPeriod === "annually" ? "annually" : "monthly"}`
                      : "No hidden charges"}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 text-left mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[11px] md:text-xs text-slate-300">
                      <div className="h-4 w-4 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-brand-cyan" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger */}
              <button
                onClick={openModal}
                className={`magnetic w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 group ${
                  plan.recommended
                    ? "bg-brand-indigo text-white shadow-lg shadow-brand-indigo/25 hover:bg-brand-indigo/90"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                {plan.cta}
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          ))}
        </div>

        {/* Refer & Earn Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 bg-gradient-to-br from-[#1a140d] to-[#0A0D1A] border border-orange-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group hover:border-orange-500/40 transition-colors w-full max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] pointer-events-none" />
          
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-400/20 to-yellow-500/20 flex items-center justify-center shrink-0 border border-orange-500/20">
            <Gift size={24} className="text-orange-400 group-hover:scale-110 transition-transform md:w-8 md:h-8" />
          </div>
          
          <div className="flex-1 text-center md:text-left z-10">
            <h4 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">Refer & Earn</h4>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
              Invite other coaching centers to FeeSync and both of you get <strong className="text-orange-400">₹100 off your next month</strong>.
            </p>
          </div>
          
          <button onClick={openModal} className="shrink-0 bg-white/5 hover:bg-white/10 text-white font-bold text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 rounded-xl border border-white/10 transition-colors z-10">
            Share Invite Link
          </button>
        </motion.div>

      </div>
    </section>
  );
}
