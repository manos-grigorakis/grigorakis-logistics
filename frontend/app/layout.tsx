import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
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

      {/* Analytics */}
      <GoogleAnalytics gaId="G-YL947VHQXY" />
    </html>
  );
}
