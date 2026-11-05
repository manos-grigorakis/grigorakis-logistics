"use client";

import {servicesLinks} from "@/data/services-links.types";
import {m} from "framer-motion";
import Link from "next/link";

export default function Services() {
    return (
        <section id="services" className="px-4 py-24 text-white bg-foreground">
            <div className="max-w-6xl mx-auto">
                <m.span
                    className="text-xs block tracking-widest uppercase text-white/60"
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    τι κάνουμε
                </m.span>

                <m.h2
                    className="mt-2 mb-12 text-4xl font-semibold uppercase"
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    οι <span className="text-primary-500">υπηρεσιες</span> μας
                </m.h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {servicesLinks.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <m.li
                                key={index}
                                className="border border-white/10"
                                whileInView={{opacity: 1, y: 0}}
                                initial={{opacity: 0, y: 40}}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{once: true}}
                            >
                                <Link href={item.href}
                                      className="group block h-full px-6 py-8 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-primary-500">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-center size-10 bg-primary-500">
                                            <Icon
                                                className="size-5 text-white"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <span className="block text-sm text-ruler/50">{index + 1}</span>
                                    </div>


                                    <h3 className="mt-5 text-lg font-semibold">{item.label}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ruler">
                                        {item.description}
                                    </p>
                                </Link>
                            </m.li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
