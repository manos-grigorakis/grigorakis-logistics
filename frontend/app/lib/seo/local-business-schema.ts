export const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://grigorakis-logistics.gr/#business",

    name: "Γρηγοράκης Μεταφορική",
    alternateName: "Grigorakis Logistics",
    description:
        "Οδικές μεταφορές, μετακομίσεις, μεταφορά containers και αποθήκευση από τον Ασπρόπυργο σε όλη την Ελλάδα.",

    url: "https://grigorakis-logistics.gr",
    image: "https://grigorakis-logistics.gr/og-image.jpg",
    email: "info@grigorakis-logistics.gr",
    telephone: "+306973392007",

    address: {
        "@type": "PostalAddress",
        streetAddress: "Θέση Κουταλά",
        addressLocality: "Ασπρόπυργος",
        addressRegion: "Αττική",
        postalCode: "19300",
        addressCountry: "GR",
    },

    areaServed: {
        "@type": "Country",
        name: "Greece",
    },

    parentOrganization: {
        "@type": "Organization",
        name: "Grigorakis Transport",
        url: "https://grigorakis-transport.gr",
    },

    sameAs: [
        "https://maps.app.goo.gl/gAaSxabugeHoBN7p6",
        "https://www.xo.gr/profile/profile-911752406/el/",
        "https://www.vrisko.gr/details/daaida6g6e6k0k6463c17506560e___j"
    ],

    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
        },
    ],
};
