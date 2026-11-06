"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {sendGAEvent} from "@next/third-parties/google";

type Props = {
    title: string
    description: string
}

export function ServiceCTA({title, description}: Props) {
    const pathname = usePathname();
    const service = pathname.split("/").filter(Boolean).pop() ?? "unknown";

    // Track quote CTA click
    const handleQuoteClick = () => {
        sendGAEvent("event", "quote_click", {
            click_location: "service_cta",
            service_source: service,
        })
    }

    return (
        <div
            className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between bg-primary-500 p-8 md:p-12 lg:p-14 text-white">
            <div>
                <h2 className="text-2xl mb-4 font-semibold">{title}</h2>
                <p className="text-xs max-w-lg leading-relaxed">{description}</p>
            </div>


            <Link href="/#contact"
                  onClick={handleQuoteClick}
                  className="px-5 self-start md:self-auto block py-4 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase bg-foreground hover:cursor-pointer hover:bg-foreground/80">
                Ζητήστε προσφορά
            </Link>
        </div>
    )
}