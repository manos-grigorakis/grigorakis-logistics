import {MetadataRoute} from "next";
import {servicesLinks} from "@/data/services-links.types";

const baseUrl = "https://grigorakis-logistics.gr"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...servicesLinks.map((service) => ({
            url: `${baseUrl}${service.href}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }))
    ];
}
