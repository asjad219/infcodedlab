"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function StickyContact() {
  const { openModal } = useDemoModal();

  // Pull WhatsApp Number from environment variables, fallback to empty string if not set
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  
  // Sanitize the phone number: remove spaces, plus signs, brackets, dashes, etc.
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  
  const whatsappMsg = encodeURIComponent("Hi, I want to know more about FeeSync.");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${whatsappMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-row md:flex-col gap-3 items-center md:items-end pointer-events-none">
      
      {/* Book Demo Sticky Button */}
      <motion.button
        onClick={openModal}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
        className="pointer-events-auto flex items-center justify-center gap-2 bg-brand-indigo text-white w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3 rounded-full font-bold shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)] hover:scale-105 hover:bg-brand-indigo/90 transition-all border border-brand-indigo/50 group"
        aria-label="Book a free demo"
      >
        <Calendar size={20} className="md:w-[18px] md:h-[18px]" />
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
        className="pointer-events-auto flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-all border border-[#25D366]/50"
        aria-label="Contact us on WhatsApp"
      >
        {/* Official brand-accurate SVG WhatsApp Icon */}
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.45 4.834 1.453 5.461 0 9.897-4.42 9.901-9.878.002-2.643-1.022-5.13-2.883-7c-1.864-1.872-4.346-2.901-7.004-2.902-5.468 0-9.905 4.42-9.91 9.882-.002 1.796.471 3.55 1.37 5.106l-.99 3.616 3.7-.971zm11.367-8.306c-.195-.097-1.155-.57-1.332-.635-.178-.066-.308-.097-.439.097-.13.197-.503.635-.616.765-.113.13-.227.147-.422.05-1.926-.967-3.178-1.756-4.237-3.576-.279-.48.279-.445.8-.1.467.31.62.4.823.82.203.42.1.8-.05.996-.15.197-.616.765-.756.9-.14.135-.286.152-.48.055-.195-.098-.824-.304-1.57-.97-1.282-1.144-2.148-2.557-2.399-2.99-.25-.434-.027-.669.19-.884.195-.193.422-.497.633-.746.21-.249.28-.42.42-.7.14-.278.07-.523-.035-.72-.105-.197-.439-1.061-.603-1.457-.16-.39-.337-.336-.459-.336-.12 0-.256-.005-.39-.005-.135 0-.356.05-.542.253-.186.203-.71.694-.71 1.692 0 1.001.727 1.968.829 2.102.102.134 1.432 2.19 3.47 3.076.484.21.86.336 1.154.43.487.154.93.132 1.281.08.39-.059 1.155-.47 1.317-.925.163-.454.163-.84.113-.925-.05-.084-.178-.135-.373-.232z" />
        </svg>
      </motion.a>

    </div>
  );
}
