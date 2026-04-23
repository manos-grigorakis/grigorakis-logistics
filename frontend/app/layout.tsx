import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Γρηγοράκης Logistics | Εθνικές Μεταφορές",
  description:
    "Εθνικές οδικές μεταφορές σε όλη την Ελλάδα. Επικαθήμενα, containers, μετακομίσεις και ειδικές μεταφορές. Άμεση εξυπηρέτηση, αξιόπιστες παραδόσεις.",
  keywords: [
    "μεταφορική",
    "εθνικές μεταφορές",
    "οδικές μεταφορές",
    "logistics",
    "επικαθήμενα",
    "containers",
    "μετακομίσεις",
    "Γρηγοράκης",
    "Αθήνα",
    "Ελλάδα",
  ],
  metadataBase: new URL("https://grigorakis-logistics.gr"),
  alternates: {
    canonical: "https://grigorakis-logistics.gr",
  },
  authors: [{ name: "Γρηγοράκης Logistics" }],
  creator: "Manos Grigorakis",
  openGraph: {
    title: "Γρηγοράκης Logistics | Εθνικές Μεταφορές",
    description:
      "Εθνικές οδικές μεταφορές σε όλη την Ελλάδα. Επικαθήμενα, containers, μετακομίσεις.",
    url: "https://grigorakis-logistics.gr",
    siteName: "Γρηγοράκης Logistics",
    locale: "el_GR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${barlowCondensed.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex flex-col min-h-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
