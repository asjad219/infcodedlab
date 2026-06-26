import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import { DemoModalProvider } from "@/context/DemoModalContext";
import StickyContact from "@/components/StickyContact";
import Script from "next/script";

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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://feesync.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Fee Management App | Automate Reminders & Collections | FeeSync",
    description: "Stop chasing unpaid student fees manually. FeeSync automates tuition fee tracking, sends automated WhatsApp/SMS due alerts, handles installments, and collects secure online payments.",
    images: ["https://feesync.in/dashbord.png"],
    creator: "@FeeSync",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth antialiased">
      <head>
        {/* Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID} />
        )}

        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-930SVT5BWD"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-930SVT5BWD');
            `,
          }}
        />
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+"${process.env.NEXT_PUBLIC_CLARITY_ID}";
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script");
              `,
            }}
          />
        )}
      </head>
      <body className="min-h-screen bg-slate-dark text-foreground flex flex-col font-sans relative">
        {/* GTM noscript */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>
        )}
        <LenisProvider>
          <DemoModalProvider>
            <CustomCursor />
            <div className="noise-overlay" />
            <StickyContact />
            {children}
          </DemoModalProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
