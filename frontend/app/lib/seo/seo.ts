import {Metadata} from "next";

const SITE_NAME = 'Γρηγοράκης Μεταφορική'
const OG_IMAGE = {url: '/og-image.jpg', width: 1200, height: 630, alt: SITE_NAME}

type PageSeo = { title: string; description: string; path: string }

export function buildPageMetadata({title, description, path}: PageSeo): Metadata {
    const fullTitle = `${title} | ${SITE_NAME}`

    return {
        title,
        description,
        alternates: {canonical: path},
        openGraph: {
            type: 'website',
            url: path,
            title: fullTitle,
            description,
            siteName: SITE_NAME,
            locale: "el_GR",
            images: [OG_IMAGE],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [OG_IMAGE.url],
        }
    }
}