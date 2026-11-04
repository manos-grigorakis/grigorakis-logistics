import {useState} from "react";
import Link from "next/link";
import {LuChevronDown} from "react-icons/lu";
import {AnimatePresence, m} from "framer-motion";
import {servicesLinks} from "@/data/services-links.types";

type Props = {
    title: string;
    onNavigate: () => void;
};

export function MobileServicesDropdown({title, onNavigate}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={"flex items-center justify-between"}>
                <Link
                    href={"/#services"}
                    onClick={onNavigate}
                    className={"flex-1 py-3 transition-colors hover:text-primary-600"}
                >
                    {title}
                </Link>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Εμφάνιση υπηρεσιών"
                    aria-expanded={isOpen}
                    aria-controls="mobile-services-menu"
                    className="flex size-11 cursor-pointer items-center justify-center"
                >
                    <LuChevronDown
                        className={`size-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <m.ul
                        id={"mobile-services-menu"}
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.2, ease: "easeInOut"}}
                        className="overflow-hidden border-l border-primary-500 pl-4"
                    >
                        {servicesLinks.map((service) => (
                            <li key={service.href}>
                                <Link
                                    href={service.href}
                                    onClick={onNavigate}
                                    className="block py-3 text-foreground/80 hover:text-primary-600"
                                >
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </m.ul>
                )}
            </AnimatePresence>
        </>
    );
}
