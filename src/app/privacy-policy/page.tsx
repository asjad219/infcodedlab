import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - FeeSync",
  description: "Privacy Policy for FeeSync",
};

export default function PrivacyPolicy() {
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
        
        <h1 className="font-clash text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy for FeeSync</h1>
        <p className="text-sm text-slate-500 mb-12">Effective Date: June 12, 2026</p>

        <div className="space-y-8 prose prose-invert max-w-none text-sm md:text-base leading-relaxed">
          <p>
            This Privacy Policy explains how FeeSync ("we", "us", or "our") collects, uses, and protects your information when you use the FeeSync mobile application and related web services (collectively, the "Service"). FeeSync is a fee management system designed to help administrators and staff manage and track fees for schools and coaching centers. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p className="mb-3">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            
            <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">Personal Data</h3>
            <p className="mb-2">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>First name and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Account credentials (passwords)</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">Educational & Financial Records</h3>
            <p className="mb-2">As a fee management system for schools and coaching centers, the Service processes data related to student enrollment, batch assignments, and fee payment histories. This includes:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Student names, roll numbers, and batch details.</li>
              <li>Fee structures, balances, and payment records.</li>
            </ul>
            <p className="italic text-slate-400 text-sm mb-4">
              *Note: We do not directly store raw credit card numbers. Any payment processing is handled securely by third-party payment gateways (e.g., Google Play Billing, Bildesk).*
            </p>

            <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">Device and Usage Data</h3>
            <p className="mb-4">
              When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, and diagnostic data.
            </p>

            <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">Biometric Data</h3>
            <p className="mb-4">
              FeeSync requests the "USE_BIOMETRIC" permission to allow you to securely lock and unlock the app using your device's native biometric features (such as Fingerprint or Face ID).<br/>
              <strong>Important:</strong> Your biometric data is processed entirely locally on your device's secure hardware. We <strong>do not</strong> collect, transmit, or store your biometric data on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">FeeSync uses the collected data for various purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and maintain our Service.</li>
              <li>To notify you about changes to our Service.</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
              <li>To provide customer support.</li>
              <li>To monitor the usage of our Service.</li>
              <li>To detect, prevent, and address technical issues.</li>
              <li>To facilitate secure logins via local biometric authentication.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Data Storage and Security</h2>
            <p className="mb-3">
              The security of your data is important to us. Your data is securely stored using our backend provider, <strong>Supabase</strong>, which employs industry-standard security measures including Row Level Security (RLS) to ensure that your institution's data is strictly isolated and accessible only to authorized personnel within your organization.
            </p>
            <p>
              While we strive to use commercially acceptable means to protect your Personal Data, remember that no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Disclosure of Data</h2>
            <p className="mb-2">We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Comply with a legal obligation.</li>
              <li>Protect and defend the rights or property of FeeSync.</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
              <li>Protect the personal safety of users of the Service or the public.</li>
              <li>Protect against legal liability.</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">Third-Party Service Providers</h3>
            <p className="mb-2">
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Supabase:</strong> Used for database, authentication, and backend infrastructure.</li>
              <li><strong>Google Play Services:</strong> Used for app distribution and in-app purchases.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Children's Privacy</h2>
            <p>
              While FeeSync manages data regarding students (including minors), the Service is designed to be used by administrators and staff of schools and coaching centers. We do not knowingly collect personally identifiable information directly from children under the age of 13 without parental consent. If you are a parent or guardian and you are aware that your child has provided us with Personal Data directly, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Data Rights</h2>
            <p className="mb-2">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> You can request that we delete your personal data ("Right to be Forgotten").</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact your institution's administrator (who acts as the primary data controller) or contact us directly using the information below.
            </p>
            <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">Account and Data Deletion:</h3>
            <p className="mb-4">
              If you wish to delete your account and all associated personal data from FeeSync, you can submit a direct request by emailing us at <a href="mailto:artexplore764@gmail.com" className="text-brand-cyan hover:underline">artexplore764@gmail.com</a> with the subject line 'Account Deletion Request'. We will process your request and permanently purge your data from our Supabase servers within 30 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:<br/>
              <strong>By email:</strong> <a href="mailto:artexplore764@gmail.com" className="text-brand-cyan hover:underline">artexplore764@gmail.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
