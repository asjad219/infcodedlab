import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import { DemoModalProvider } from "@/context/DemoModalContext";

export const metadata: Metadata = {
  title: "Coaching Fee Management App | Automate Reminders & Collections | FeeSync",
  description: "Stop chasing unpaid student fees manually. FeeSync automates tuition fee tracking, sends automated WhatsApp/SMS due alerts, handles installments, and collects secure online payments.",
  keywords: [
    "FeeSync",
    "InfCoded Lab",
    "Fee Management Software",
    "Coaching Institute Billing",
    "Tuition Centre App",
    "NEET JEE coaching tracker",
    "Automated fee reminders",
    "WhatsApp fee reminders India",
    "Coaching Fee Management App",
    "Student fee tracking software"
  ],
  authors: [{ name: "InfCoded Lab", url: "https://infcoded.com" }],
  openGraph: {
    title: "Coaching Fee Management App | Automate Reminders & Collections | FeeSync",
    description: "Stop chasing unpaid student fees manually. FeeSync automates tuition fee tracking, sends automated WhatsApp/SMS due alerts, handles installments, and collects secure online payments.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://feesync.in/dashbord.png",
        width: 1200,
        height: 630,
        alt: "FeeSync dashboard showing automated tuition fee installment tracker",
      }
    ]
  },
  icons: {
    icon: '/icon.png?v=2',
    shortcut: '/icon.png?v=2',
    apple: '/icon.png?v=2',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth antialiased">
      <body className="min-h-screen bg-slate-dark text-foreground flex flex-col font-sans relative">
        <LenisProvider>
          <DemoModalProvider>
            <CustomCursor />
            <div className="noise-overlay" />
            {children}
          </DemoModalProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
