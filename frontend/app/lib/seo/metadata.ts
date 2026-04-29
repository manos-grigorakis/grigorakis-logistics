import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://grigorakis-logistics.gr"),

  title: {
    default: "Γρηγοράκης Μεταφορική | Οδικές Μεταφορές & Logistics",
    template: "%s | Γρηγοράκης Μεταφορική",
  },
  description:
    "Η Γρηγοράκης Μεταφορική στον Ασπρόπυργο προσφέρει εθνικές οδικές μεταφορές, μετακομίσεις, μεταφορά containers και υπηρεσίες logistics σε όλη την Ελλάδα.",
  applicationName: "Γρηγοράκης Μεταφορική",

  alternates: {
    canonical: "https://grigorakis-logistics.gr/",
  },

  authors: [{ name: "Γρηγοράκης Μεταφορική" }],
  creator: "Γρηγοράκης Μεταφορική",

  openGraph: {
    type: "website",
    url: "https://grigorakis-logistics.gr",
    title: "Γρηγοράκης Μεταφορική",
    description: "Εθνικές οδικές μεταφορές & logistics από τον Ασπρόπυργο.",
    siteName: "Γρηγοράκης Μεταφορική",
    locale: "el_GR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Γρηγοράκης Μεταφορική",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Γρηγοράκης Μεταφορική",
    description: "Οδικές μεταφορές & logistics από τον Ασπρόπυργο.",
    images: ["/og-image.jpg"],
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
