"use client";

import {navLinks} from "@/data/nav-links";
import {m} from "framer-motion";
import Logo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import {servicesLinks} from "@/data/services-links.types";
import {sendGAEvent} from "@next/third-parties/google";
import {useConsent} from "@/components/providers/ConsentProvider";

export default function Footer() {
    const {openSettings} = useConsent();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full px-4 py-20 text-white bg-foreground">
            {/* Footer message */}
            <div className="mb-16 text-center">
                <m.p
                    className="text-4xl font-bold text-white uppercase"
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    κινουμαστε <span className="text-primary-500">μαζι</span>
                </m.p>
                <m.p
                    className="mt-3 text-sm tracking-widest uppercase text-white/60"
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.3, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    35+ Χρόνια Εμπειρίας · Πανελλαδική Κάλυψη · Αξιόπιστες Παραδόσεις
                </m.p>
            </div>

            <m.div
                className="grid grid-cols-1 items-start gap-12 mx-auto text-left max-w-7xl md:grid-cols-4 md:gap-8"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.5, ease: "easeOut"}}
                viewport={{once: true}}
            >
                {/* Brand */}
                <div className="flex flex-col justify-start">
                    <div className="text-sm leading-relaxed text-white/50" data-nosnippet>
                        <p>
                            Μέλος του{" "}
                            <a
                                href="https://grigorakis-transport.gr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-primary-500"
                            >
                                Δικτύου Μεταφορών Γρηγοράκης
                            </a>
                        </p>
                        <a
                            href="https://maps.app.goo.gl/gAaSxabugeHoBN7p6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-2 transition-colors hover:text-primary-500"
                        >
                            Θέση Κουταλά, Ασπρόπυργος 19300
                            <br/>
                            Αττική, Ελλάδα
                        </a>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="block mt-4 -ml-1"
                            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                        >
                            <Image
                                src={Logo}
                                alt="Grigorakis Logistics"
                                width={200}
                                height={60}
                                className="w-auto h-30 brightness-0 invert"
                            />
                        </Link>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/60">
                        υπηρεσιες
                    </p>

                    <ul className="flex flex-col gap-2 text-xs uppercase">
                        {servicesLinks.map((service) => (
                            <li key={service.href}>
                                <Link href={service.href}
                                      className={"inline-block text-white/50 transition-colors hover:text-primary-500"}>
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sitemap */}
                <div>
                    <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/60">
                        sitemap
                    </p>

                    <ul className="flex flex-col gap-2 text-xs uppercase">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}>

                                <a href={`/#${link.section}`}
                                   className="inline-block transition-colors text-white/50 hover:text-primary-500">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Hours */}
                <div data-nosnippet>
                    {/* Contact */}
                    <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/60">
                        επικοινωνία
                    </p>

                    <div className="flex flex-col gap-2 mb-8 text-sm text-white/50">
                        <a
                            href="tel:+306973392007"
                            onClick={() => sendGAEvent("event", "contact_click", {
                                contact_method: "phone",
                                click_location: "footer"
                            })}
                            className="transition-colors hover:text-primary-500"
                        >
                            +30 6973392007
                        </a>
                        <a
                            href="mailto:info@grigorakis-logistics.gr"
                            onClick={() => sendGAEvent("event", "contact_click", {
                                contact_method: "email",
                                click_location: "footer"
                            })}
                            className="transition-colors hover:text-primary-500"
                        >
                            info@grigorakis-logistics.gr
                        </a>
                        <a
                            href="mailto:contact@grigorakis-logistics.gr"
                            onClick={() => sendGAEvent("event", "contact_click", {
                                contact_method: "email",
                                click_location: "footer"
                            })}
                            className="transition-colors hover:text-primary-500"
                        >
                            contact@grigorakis-logistics.gr
                        </a>
                    </div>

                    {/* Hours */}
                    <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/60">
                        Ωράριο
                    </p>
                    <p className="text-sm text-white/50">Δευ – Παρ · 08:00 – 17:00</p>
                </div>
            </m.div>

            {/* Divider */}
            <div className="h-px max-w-6xl mx-auto mt-16 bg-white/10"/>

            {/* Bottom */}
            <div
                className="flex flex-col items-center justify-between max-w-6xl gap-2 mx-auto mt-6 text-xs md:flex-row text-white/60">
                <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
                    <p className="mb-0">
                        © {currentYear} Γρηγοράκης Μεταφορική. All rights reserved
                    </p>

                    <div className="flex items-center gap-3">
                        <Link href="/privacy-policy"
                              className="transition-colors hover:text-white hover:underline">Πολιτική Απορρήτου</Link>

                        <button type="button" onClick={openSettings}
                                className="transition-colors hover:text-white hover:underline hover:cursor-pointer">Ρυθμίσεις
                            Cookies
                        </button>
                    </div>
                </div>

                <p>
                    Built by{" "}
                    <a
                        href="https://manosgrigorakis.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary-500"
                    >
                        Manos Grigorakis
                    </a>
                </p>
            </div>
        </footer>
    );
}
