"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {sendGAEvent} from "@next/third-parties/google";

export function AppLinkButton() {
    const pathname = usePathname();
    const service = pathname.split("/").filter(Boolean).pop() ?? "unknown";

    // Track quote CTA click
    const handleQuoteClick = () => {
        sendGAEvent("event", "quote_click", {
            click_location: "service_hero",
            service_source: service,
        })
    }

    return (
        <Link href="/#contact"
              onClick={handleQuoteClick}
              className="px-4 py-4 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase
            bg-primary-500 hover:cursor-pointer hover:bg-primary-600">
            Ζητήστε προσφορά
        </Link>
    )
}