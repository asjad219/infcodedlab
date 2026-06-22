import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - FeeSync",
  description: "Terms and conditions for using the FeeSync platform.",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-300 py-20 px-6 md:px-12 font-sans selection:bg-brand-indigo/30">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors mb-8 text-sm font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Back to Home
        </Link>

        <h1 className="font-clash text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
        <p className="text-sm text-slate-500 mb-12">Last Updated: June 12, 2026</p>

        <div className="space-y-8 prose prose-invert max-w-none">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed text-sm md:text-base">
              By downloading, installing, or using the FeeSync mobile application or web portal (the "Service"), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p className="leading-relaxed text-sm md:text-base">
              FeeSync, developed by InfCoded Lab, provides academic institutions, coaching centers, and private tutors with digital tools to manage fee collections, send automated WhatsApp reminders, maintain ledgers, and manage student attendance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
            <p className="leading-relaxed text-sm md:text-base mb-3">
              As a user of the Service, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>Provide accurate and complete information during registration.</li>
              <li>Maintain the confidentiality of your account login credentials.</li>
              <li>Use the Service in compliance with all applicable local, state, and national laws.</li>
              <li>Not use the Service to transmit any malicious code or illegal content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Payments and Subscriptions</h2>
            <p className="leading-relaxed text-sm md:text-base">
              FeeSync offers free and paid subscription tiers. Paid subscriptions are billed in advance on a monthly or annual basis. Payments made through Google Play Billing or our integrated payment gateways (e.g., BillDesk, Razorpay) are subject to the respective provider's terms of service. You are responsible for all charges incurred under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Termination</h2>
            <p className="leading-relaxed text-sm md:text-base">
              We reserve the right to suspend or terminate your access to the Service at our sole discretion, without prior notice, if you breach any of these Terms & Conditions or engage in fraudulent activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p className="leading-relaxed text-sm md:text-base">
              InfCoded Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the Service. We do not guarantee that the Service will be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Contact Us</h2>
            <p className="leading-relaxed text-sm md:text-base">
              For any questions regarding these Terms, please contact us at:<br />
              <strong>Email:</strong> artexplore764@gmail.com<br />
              <strong>Phone:</strong> +91 70991 76394<br />
              <strong>Address:</strong> InfCoded Lab, Kalain, Cachar, Assam, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
