import Link from "next/link";
import {useState} from "react";
import {LuChevronDown} from "react-icons/lu";
import {servicesLinks} from "@/data/services-links.types";

type Props = {
    title: string;
};

export function DesktopServicesDropdown({title}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={"relative"}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsOpen(false);
                }
            }}
            onKeyDown={(event) => {
                if (event.key === "Escape") {
                    setIsOpen(false);
                }
            }}
        >
            <Link
                href={"/#services"}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 py-2 transition-colors hover:text-primary-600"
            >
                {title}

                <LuChevronDown
                    className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </Link>

            {isOpen && (
                <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2">
                    <ul className="border border-foreground/10 bg-background p-2 shadow-lg">
                        {servicesLinks.map((service) => (
                            <li key={service.href}>
                                <Link
                                    href={service.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-xs transition-colors hover:bg-primary-500 hover:text-white"
                                >
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
