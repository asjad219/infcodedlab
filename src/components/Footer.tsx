"use client";

import Link from "next/link";
import Image from "next/image";
import { useDemoModal } from "@/context/DemoModalContext";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const { openModal } = useDemoModal();

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Story", href: "#story" },
      { label: "FAQ", href: "#faq" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Refund Policy", href: "/refund-policy" }
    ],
    company: [
      { label: "About InfCoded Lab", href: "https://infcoded.com" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" }
    ]
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#070A15] pt-24 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Logo & Pitch */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2 group w-max">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-brand-indigo/10 border border-brand-indigo/30 p-1 flex items-center justify-center">
                <Image
                  src="/FeeSync App Logo.png"
                  alt="FeeSync Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-clash text-xl font-bold tracking-wider text-white">FeeSync</span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Award-winning fee management system developed by <strong className="text-white">InfCoded Lab</strong>. Helping tuition classes and academies across India automate billing, collect online fees, and drive 99.8% recovery rates.
            </p>

            <button
              onClick={openModal}
              className="magnetic inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white transition-colors group"
            >
              Request onboarding support
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Links Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-6">Product</h4>
            <ul className="space-y-4">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-6">Legal</h4>
            <ul className="space-y-4">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-indigo shrink-0 mt-0.5" />
                <span>InfCoded Lab, Kalain, Assam, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-indigo shrink-0" />
                <a href="mailto:support@infcoded.com" className="hover:text-white transition-colors">
                  artexplore764@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-indigo shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 70991 76394
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="border-t border-white/5 pt-8 flex flex-col items-center justify-center gap-4 text-xs text-slate-500 text-center">
          <p>
            © 2026 InfCoded Lab. All rights reserved. FeeSync is a software application developed and published by InfCoded Lab. InfCoded Lab is owned and operated by Asjaduzzaman.
          </p>
        </div>
      </div>
    </footer>
  );
}
