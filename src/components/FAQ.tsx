"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does the automated WhatsApp fee reminder system work?",
      answer: "FeeSync links directly to secure WhatsApp messaging pipes. When fee deadlines approach, the system aggregates student dues, creates dynamic secure billing links, and dispatches automated notices to parent WhatsApp accounts. Parents can click the link and complete payments via UPI in seconds."
    },
    {
      question: "How do refunds work if I decide to cancel my subscription?",
      answer: "All subscription payments and refunds are securely managed directly by Google Play Billing. If you choose to cancel your plan, any eligible refunds will be processed automatically according to Google Play's standard refund policies."
    },
    {
      question: "Is student and financial collection database storage secure?",
      answer: "Absolutely. FeeSync is developed by InfCoded Lab with strict security parameters. All ledger datasets, contact information, and payment histories are encrypted. No transactional credentials are saved, and our servers operate on enterprise-grade firewalls with 99.9% uptime."
    },
    {
      question: "How does biometric gate attendance sync with fee collections?",
      answer: "FeeSync can interface with local RFID/biometric hardware scanners. When a student scans their pass at the entrance gate, the system checks their batch ledger. If fees are overdue, it highlights an admin warning in the console and can optionally send a gate status ping to parents."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes! Because all transactions are routed securely through Google Play Billing, your purchase is completely protected. You can easily request your money back directly through your Google Play account settings without any hassle."
    }
  ];

  return (
    <section id="faq" className="relative bg-[#070914] py-32 z-10 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Questions & Answers
          </h2>
          <h3 className="font-clash text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Have questions about integrations or WhatsApp gateways? Here are direct answers.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#0b1022]/70 border-brand-indigo/35 shadow-lg shadow-brand-indigo/5"
                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                }`}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none select-none"
                >
                  <span className="font-syne text-sm md:text-base font-bold text-white pr-4 leading-relaxed flex items-center gap-3">
                    <HelpCircle size={16} className={isOpen ? "text-brand-cyan" : "text-slate-500"} />
                    {faq.question}
                  </span>
                  
                  {/* Rotate Toggle Icon */}
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center bg-white/5 text-slate-400 shrink-0 border border-white/5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus size={12} className="text-brand-cyan" /> : <Plus size={12} />}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-400 leading-relaxed font-sans pl-12 border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
