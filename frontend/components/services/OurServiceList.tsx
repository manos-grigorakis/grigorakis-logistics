import Link from "next/link";
import {LuArrowRight} from "react-icons/lu";
import {servicesLinks} from "@/data/services-links.types";

type Props = {
    currentServiceRoute: string;
}

export function OurServiceList({currentServiceRoute}: Props) {
    return (
        <div>
            <h2 className="text-2xl mb-4 font-semibold">Δείτε και τις υπόλοιπες υπηρεσίες μας</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {servicesLinks.filter((service) => service.href !== currentServiceRoute)
                    .map((service) => (
                        <li key={service.href}>
                            <Link href={service.href}
                                  className="bg-white/20 flex h-full items-center justify-between gap-3 cursor-pointer transition-colors duration-200 shadow-sm border border-foreground/10 p-4 hover:bg-primary-500 hover:text-white">
                                {service.label}
                                <LuArrowRight/>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}