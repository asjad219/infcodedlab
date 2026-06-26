"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function StickyContact() {
  const { openModal } = useDemoModal();

  // Pull WhatsApp Number from environment variables, fallback to empty string if not set
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappMsg = encodeURIComponent("Hi, I want to know more about FeeSync.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 items-end pointer-events-none">
      
      {/* Book Demo Sticky Button */}
      <motion.button
        onClick={openModal}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
        className="pointer-events-auto flex items-center justify-center gap-2 bg-brand-indigo text-white px-5 py-3 rounded-full font-bold shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)] hover:scale-105 hover:bg-brand-indigo/90 transition-all border border-brand-indigo/50 group"
        aria-label="Book a free demo"
      >
        <Calendar size={18} />
        <span className="hidden md:block">Book Demo</span>
      </motion.button>

      {/* WhatsApp Sticky Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.2 }}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-all border border-[#25D366]/50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>

    </div>
  );
}
