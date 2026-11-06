import {Barlow_Condensed, DM_Sans} from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import {domAnimation, LazyMotion} from "framer-motion";
import {Navbar} from "@/components/layout/navbar/Navbar";
import {CookieBanner} from "@/components/ui/CookieBanner";
import {ConsentProvider} from "@/components/providers/ConsentProvider";
import {AnalyticsLoader} from "@/components/providers/AnalyticsLoader";

export {metadata} from "./lib/seo/metadata";

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const barlowCondensed = Barlow_Condensed({
    variable: "--font-barlow-condensed",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
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
            className={`${dmSans.variable} ${barlowCondensed.variable} h-full antialiased scroll-smooth scroll-pt-28 md:scroll-pt-38`}
        >
        <body className="flex flex-col min-h-full">
        <ConsentProvider>
            <LazyMotion features={domAnimation}>
                <Navbar/>
                <main>{children}</main>
                <Footer/>
            </LazyMotion>

            <CookieBanner/>
            <AnalyticsLoader/>
        </ConsentProvider>
        </body>
        </html>
    );
}
