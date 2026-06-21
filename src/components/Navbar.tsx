"use client";

import { useState, useEffect } from "react";
import { useDemoModal } from "@/context/DemoModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const { openModal } = useDemoModal();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Hides navbar on scroll down, reveals on scroll up
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Story", href: "#story" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[9990] transition-colors duration-300 ${
          scrolled ? "bg-slate-dark/75 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-brand-indigo/10 border border-brand-indigo/30 p-1 flex items-center justify-center">
              <Image
                src="/FeeSync App Logo.png"
                alt="FeeSync Logo"
                width={32}
                height={32}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-clash text-lg font-bold tracking-wider text-white">FeeSync</span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-medium">By InfCoded Lab</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm text-slate-300 hover:text-white transition-colors duration-200 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={openModal}
              className="magnetic hidden md:flex items-center gap-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/40 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-indigo/5 transition-all hover:bg-brand-indigo hover:border-brand-indigo hover:shadow-brand-indigo/20"
            >
              Book Demo
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[9980] md:hidden bg-slate-dark/95 backdrop-blur-xl pt-24 px-8 pb-12 flex flex-col justify-between border-b border-white/5"
          >
            <div className="space-y-6 flex flex-col">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-syne text-2xl font-semibold text-slate-200 hover:text-brand-cyan transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="h-[1px] bg-white/5" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full rounded-full bg-brand-indigo py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 flex items-center justify-center gap-2"
              >
                Book Free Demo
                <ArrowUpRight size={15} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
