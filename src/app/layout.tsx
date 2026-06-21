import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import { DemoModalProvider } from "@/context/DemoModalContext";

export const metadata: Metadata = {
  title: "FeeSync | Premium Fee Management Software for Coaching Institutes & Academies",
  description: "Automate student fee tracking, send automated WhatsApp + SMS reminders, generate instant PDF receipts, and scale revenue. Professional platform by InfCoded Lab.",
  keywords: [
    "FeeSync",
    "InfCoded Lab",
    "Fee Management Software",
    "Coaching Institute Billing",
    "Tuition Centre App",
    "NEET JEE coaching tracker",
    "Automated fee reminders",
    "WhatsApp fee reminders India"
  ],
  authors: [{ name: "InfCoded Lab", url: "https://infcoded.com" }],
  openGraph: {
    title: "Stop Chasing Fees. Start Growing Your Institute | FeeSync",
    description: "Automate reminders, track revenue, and simplify operations. The ultimate fee collection suite for tuition centres and academies.",
    type: "website",
    locale: "en_IN",
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
