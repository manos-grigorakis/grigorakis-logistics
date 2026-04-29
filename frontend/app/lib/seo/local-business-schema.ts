export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "Γρηγοράκης Μεταφορική",
  alternateName: "Grigorakis Logistics",

  url: "https://grigorakis-logistics.gr",
  image: "https://grigorakis-logistics.gr/og-image.jpg",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Θέση Κουταλά",
    addressLocality: "Ασπρόπυργος",
    postalCode: "19300",
    addressCountry: "GR",
  },

  areaServed: {
    "@type": "Country",
    name: "Greece",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};
