import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/lib/data";
import "./globals.css";

const grotesk = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://mubasharhassan.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — Accounting & Bookkeeping Professional`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Mubashar Hassan is a QuickBooks & Xero certified bookkeeper and accounting professional based in Abbottabad, Pakistan, specializing in bank reconciliation, payroll, VAT filing and financial reporting.",
  keywords: [
    "Mubashar Hassan",
    "bookkeeper Pakistan",
    "Xero certified professional",
    "QuickBooks ProAdvisor Pakistan",
    "Abbottabad accountant",
    "VAT filing Pakistan",
    "FBR IRIS tax filing",
    "freelance bookkeeper",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${profile.name} — Accounting & Bookkeeping Professional`,
    description:
      "QuickBooks & Xero certified bookkeeper specializing in bank reconciliation, payroll, VAT filing and financial reporting.",
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/images/profile.jpg", width: 1024, height: 1024, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Accounting & Bookkeeping Professional`,
    description:
      "QuickBooks & Xero certified bookkeeper specializing in bank reconciliation, payroll, VAT filing and financial reporting.",
    images: ["/images/profile.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: SITE_URL,
  image: `${SITE_URL}${profile.profileImage}`,
  email: profile.email,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Havelian, Abbottabad",
    addressRegion: "Khyber Pakhtunkhwa",
    addressCountry: "PK",
  },
  sameAs: [profile.linkedin],
  knowsAbout: [
    "Bookkeeping",
    "Xero",
    "QuickBooks Online",
    "Bank Reconciliation",
    "Payroll Processing",
    "VAT Filing",
    "IFRS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${grotesk.variable} ${mono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-reconciled focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
