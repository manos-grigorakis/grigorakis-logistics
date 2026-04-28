import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Γρηγοράκης Μεταφορική | Εθνικές Οδικές Μεταφορές",
  description:
    "Εθνικές οδικές μεταφορές σε όλη την Ελλάδα από τον Ασπρόπυργο. Επικαθήμενα, containers, μετακομίσεις και ειδικές μεταφορές. Άμεση εξυπηρέτηση, αξιόπιστες παραδόσεις.",
  metadataBase: new URL("https://grigorakis-logistics.gr"),
  alternates: {
    canonical: "https://grigorakis-logistics.gr",
  },
  authors: [{ name: "Γρηγοράκης Μεταφορική" }],
  creator: "Manos Grigorakis",
  openGraph: {
    title: "Γρηγοράκης Μεταφορική | Εθνικές Οδικές Μεταφορές",
    description:
      "Εθνικές οδικές μεταφορές σε όλη την Ελλάδα από τον Ασπρόπυργο. Επικαθήμενα, containers, μετακομίσεις και ειδικές μεταφορές. Άμεση εξυπηρέτηση, αξιόπιστες παραδόσεις.",
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
