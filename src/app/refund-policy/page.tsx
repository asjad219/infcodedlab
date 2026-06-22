import Link from "next/link";

export const metadata = {
  title: "Refund Policy - FeeSync",
  description: "Refund and cancellation policy for FeeSync subscriptions.",
};

export default function RefundPolicy() {
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
        
        <h1 className="font-clash text-4xl md:text-5xl font-bold text-white mb-4">Refund Policy</h1>
        <p className="text-sm text-slate-500 mb-12">Last Updated: June 12, 2026</p>

        <div className="space-y-8 prose prose-invert max-w-none">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Subscriptions via Google Play Billing</h2>
            <p className="leading-relaxed text-sm md:text-base">
              For all in-app purchases and subscriptions processed through the Android app, transactions are securely managed by <strong>Google Play Billing</strong>. In accordance with Google's policies, you are entitled to request a refund directly through your Google Play account if you are unsatisfied with the purchase, subject to Google Play's standard refund timelines (typically within 48 hours of purchase).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Direct Web Portal Subscriptions</h2>
            <p className="leading-relaxed text-sm md:text-base">
              For subscriptions initiated via our web portal through integrated payment gateways (like BillDesk or Razorpay), we offer a transparent money-back guarantee. If you decide to cancel your subscription within the first <strong>7 days</strong> of your initial purchase, you are eligible for a full refund—no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How to Request a Refund</h2>
            <p className="leading-relaxed text-sm md:text-base mb-3">
              Depending on where you purchased your subscription:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li><strong>Google Play Store:</strong> Open the Google Play Store app, go to your Account &gt; Purchase History, locate the FeeSync subscription, and select "Refund".</li>
              <li><strong>Web Portal / Direct Payment:</strong> Email our support team at <a href="mailto:artexplore764@gmail.com" className="text-brand-cyan hover:underline">artexplore764@gmail.com</a> with your registered email ID, institution name, and payment receipt. We will process your request within 5-7 business days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Cancellations</h2>
            <p className="leading-relaxed text-sm md:text-base">
              You may cancel your subscription at any time to prevent future billing. Cancellation does not automatically trigger a refund for previously billed periods unless the request falls within the applicable refund windows mentioned above. Upon cancellation, you will retain access to the premium features until the end of your current billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Exceptions</h2>
            <p className="leading-relaxed text-sm md:text-base">
              Refunds will not be granted if your account has been terminated due to a violation of our Terms & Conditions or if we detect fraudulent activity associated with your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contact Us</h2>
            <p className="leading-relaxed text-sm md:text-base">
              If you have any questions or need assistance regarding your billing and refunds, please reach out to us:<br/>
              <strong>Email:</strong> artexplore764@gmail.com<br/>
              <strong>Phone:</strong> +91 70991 76394<br/>
              <strong>Address:</strong> InfCoded Lab, Kalain, Cachar, Assam, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
