import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
export { metadata } from "./metadata";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { LazyMotion, domMax } from "framer-motion";

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
        <LazyMotion features={domMax}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LazyMotion>

        {/* Analytics */}
        {/* {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-YL947VHQXY" />
        )}
        <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}
