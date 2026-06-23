"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2, ChevronRight, MessageSquare, GraduationCap, Users } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formState, setFormState] = useState({
    instituteName: "",
    ownerName: "",
    whatsapp: "",
    category: "Coaching",
    students: "50-100",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.instituteName || !formState.ownerName || !formState.whatsapp) return;
    
    setIsSubmitting(true);
    try {
      // 1. Save to Firebase Firestore (primary action — must succeed)
      await addDoc(collection(db, "demoRequests"), {
        ...formState,
        createdAt: serverTimestamp(),
      });

      // 2. Send email via server-side API endpoint (non-blocking, best-effort)
      fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }).catch((e) => console.warn("Email notification failed (non-critical):", e));

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState({
      instituteName: "",
      ownerName: "",
      whatsapp: "",
      category: "Coaching",
      students: "50-100",
      notes: "",
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg max-h-[95vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B0F19]/90 p-5 md:p-8 shadow-2xl glass-panel z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-syne text-white flex items-center gap-2">
                    <Calendar className="text-brand-indigo" size={22} />
                    Book Free Demo
                  </h3>
                  <p className="mt-2 text-xs text-slate-400">
                    See how FeeSync can automate your operations, increase collection rate, and save 10+ hours every week.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Institute Name */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Institute / Academy Name
                    </label>
                    <div className="flex items-center">
                      <GraduationCap className="absolute left-3 text-slate-500" size={16} />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex NEET Classes"
                        value={formState.instituteName}
                        onChange={(e) => setFormState({ ...formState, instituteName: e.target.value })}
                        className="w-full rounded-lg border border-white/5 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-brand-indigo focus:bg-white/10 focus:ring-1 focus:ring-brand-indigo outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Owner/Contact Name */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Contact Name
                    </label>
                    <div className="flex items-center">
                      <Users className="absolute left-3 text-slate-500" size={16} />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Prof. R. K. Sharma"
                        value={formState.ownerName}
                        onChange={(e) => setFormState({ ...formState, ownerName: e.target.value })}
                        className="w-full rounded-lg border border-white/5 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-brand-indigo focus:bg-white/10 focus:ring-1 focus:ring-brand-indigo outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      WhatsApp Number
                    </label>
                    <div className="flex items-center">
                      <MessageSquare className="absolute left-3 text-slate-500" size={16} />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formState.whatsapp}
                        onChange={(e) => setFormState({ ...formState, whatsapp: e.target.value })}
                        className="w-full rounded-lg border border-white/5 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-brand-indigo focus:bg-white/10 focus:ring-1 focus:ring-brand-indigo outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Category
                      </label>
                      <select
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                        className="w-full rounded-lg border border-white/5 bg-white/5 py-2.5 px-3 text-sm text-white focus:border-brand-indigo focus:bg-white/10 focus:ring-1 focus:ring-brand-indigo outline-none transition-all"
                      >
                        <option value="Coaching" className="bg-[#0B0F19]">Coaching Classes</option>
                        <option value="Tutor" className="bg-[#0B0F19]">Private Tuition</option>
                        <option value="Academy" className="bg-[#0B0F19]">Music / Yoga Academy</option>
                        <option value="School" className="bg-[#0B0F19]">Preschool / School</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Active Students
                      </label>
                      <select
                        value={formState.students}
                        onChange={(e) => setFormState({ ...formState, students: e.target.value })}
                        className="w-full rounded-lg border border-white/5 bg-white/5 py-2.5 px-3 text-sm text-white focus:border-brand-indigo focus:bg-white/10 focus:ring-1 focus:ring-brand-indigo outline-none transition-all"
                      >
                        <option value="1-50" className="bg-[#0B0F19]">1 - 50</option>
                        <option value="50-100" className="bg-[#0B0F19]">50 - 100</option>
                        <option value="100-300" className="bg-[#0B0F19]">100 - 300</option>
                        <option value="300+" className="bg-[#0B0F19]">300+ Students</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Any Notes / Message?
                    </label>
                    <textarea
                      placeholder="Tell us what you want or any specific requirements (optional)..."
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      rows={2}
                      className="w-full rounded-lg border border-white/5 bg-white/5 py-2.5 px-4 text-sm text-white placeholder-slate-500 focus:border-brand-indigo focus:bg-white/10 focus:ring-1 focus:ring-brand-indigo outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic w-full relative group overflow-hidden rounded-lg bg-brand-indigo px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-indigo/90"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Scheduling Your Demo...
                      </>
                    ) : (
                      <>
                        Book My Free Demo Session
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald"
                >
                  <CheckCircle2 size={40} />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold font-syne text-white">Demo Scheduled!</h3>
                  <p className="mt-3 text-sm text-slate-300 px-4 leading-relaxed">
                    Thank you! We will reach out to you on WhatsApp at <strong className="text-brand-cyan">{formState.whatsapp}</strong> within the next 2 hours to confirm your screen sharing session.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="magnetic px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
