import {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {AnimatePresence, m} from "framer-motion";
import {navLinks} from "@/data/nav-links";
import Logo from "@/public/logo.webp";
import {MobileServicesDropdown} from "./MobileServicesDropdown";
import {LuPhone} from "react-icons/lu";

type Props = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

export function MobileNav({isOpen, setIsOpen}: Props) {
    const closeMenu = () => setIsOpen(false);
    const barBase = "absolute left-3 right-3 h-0.5 bg-current transition-all duration-300";

    // Detects scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) closeMenu();
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    // Closes mobile dropdown if window is above threshold
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) closeMenu();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="flex items-center justify-between lg:hidden">
                <Link href="/" onClick={() => {
                    closeMenu();
                    window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                    <Image
                        src={Logo}
                        alt="Grigorakis Logistics"
                        width={120}
                        height={120}
                        loading="eager"
                        className="w-auto h-20 md:h-30"
                    />
                </Link>

                {/* CTA */}
                <div className="flex items-center gap-2">
                    <a
                        href="tel:+306973392007"
                        onClick={closeMenu}
                        aria-label="Καλέστε μας"
                        className="flex size-11 items-center justify-center border border-foreground transition-colors hover:bg-foreground hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                        <LuPhone className="size-5"/>
                    </a>

                    {/* Menu & Close Icon */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
                        aria-expanded={isOpen}
                        aria-controls={"mobile-navigation"}
                        className="relative size-11 hover:cursor-pointer"
                    >
                        <span className={`${barBase} ${isOpen ? "top-5.25 rotate-45" : "top-3.5"}`}/>
                        <span className={`${barBase} top-5.25 ${isOpen ? "opacity-0" : ""}`}/>
                        <span className={`${barBase} ${isOpen ? "top-5.25 -rotate-45" : "top-7"}`}/>
                    </button>
                </div>

            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        id="mobile-navigation"
                        className="absolute left-0 top-full w-full max-h-[calc(100dvh-7rem)] overflow-y-auto bg-background lg:hidden"
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <div className="px-4 pb-4 mx-auto max-w-7xl">
                            {/* Mobile links */}
                            <ul className="flex flex-col gap-2 text-xs font-medium uppercase">
                                {navLinks.map((link, index) => (
                                    <m.li
                                        key={link.name}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.3, delay: index * 0.07}}
                                    >
                                        {link.section === "services" ? (
                                            <MobileServicesDropdown
                                                title={link.name}
                                                onNavigate={closeMenu}
                                            />
                                        ) : (
                                            <Link
                                                href={`/#${link.section}`}
                                                onClick={closeMenu}
                                                className="block py-3 transition-colors hover:text-primary-600"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </m.li>
                                ))}

                                <li className={"mt-2"}>
                                    <Link
                                        href={"/#contact"}
                                        onClick={closeMenu}
                                        className="block w-full px-3 py-2 text-sm font-medium text-center text-white uppercase transition-colors bg-foreground hover:bg-foreground/80"
                                    >
                                        προσφορα
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
