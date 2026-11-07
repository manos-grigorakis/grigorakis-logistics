"use client";

import {useSyncExternalStore} from "react";
import CountUp from "react-countup";
import {sendGAEvent} from "@next/third-parties/google";

const subscribe = () => () => {
};

export default function Hero() {
    // false on the server and during hydration, true right after
    const hydrated = useSyncExternalStore(subscribe, () => true, () => false)

    const stats: { header: number; symbol: string; value: string }[] = [
        {header: 35, symbol: "+", value: "έτη εμπειρίας"},
        {header: 30, symbol: "K +", value: "παραδόσεις"},
        {header: 99, symbol: "%", value: "έγκαιρες παραδόσεις"},
    ];

    return (
        <section className="relative flex items-center justify-around px-4 overflow-hidden min-h-screen">
            {/* Background */}
            <div
                className="absolute z-0 pointer-events-none inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] hero-grid"
            />

            <div className="flex flex-col items-center justify-center text-center">
                <span
                    className="text-sm tracking-wider uppercase hero-in [--hero-y:-10px] [--hero-duration:0.4s]"
                >
                    ~ εθνικες μεταφορες ~
                </span>

                <h1 className="max-w-2xl mt-2 mb-10 text-4xl font-bold leading-tight md:text-7xl">
                    <span className="block hero-in [--hero-y:30px]">
                        Από άκρη σε άκρη της
                    </span>
                    <span className="block text-primary-500 hero-in [--hero-y:30px] [--hero-delay:0.15s]">
                        Ελλάδας
                    </span>
                </h1>

                <p className="max-w-md text-foreground/70 hero-in [--hero-y:20px] [--hero-duration:0.8s] [--hero-delay:0.6s]">
                    Η μεταφορική εταιρία{" "}
                    <span className="font-bold text-primary-500">Γρηγοράκης</span> στον
                    Ασπρόπυργο αναλαμβάνει μεταφορές και υπηρεσίες logistics σε όλη την
                    Ελλάδα, με συνέπεια, ασφάλεια και άμεση εξυπηρέτηση.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
                    <a href="#contact"
                       onClick={() => sendGAEvent("event", "quote_click", {click_location: "home_hero"})}
                       className="px-5 block py-4 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase bg-primary-500 hover:cursor-pointer hover:bg-primary-600 hero-in [--hero-x:-40px] [--hero-delay:0.5s] [--hero-ease:cubic-bezier(0.33,1.53,0.69,0.99)]"
                    >
                        Ζητηστε προσφορα
                    </a>

                    <a href="#services"
                       className="px-5 block py-4 text-sm font-medium leading-5 uppercase border-2 transition-colors duration-200 border-primary-500 text-foreground hover:bg-foreground hover:border-foreground hover:text-white hover:cursor-pointer hero-in [--hero-x:40px] [--hero-delay:0.5s] [--hero-ease:cubic-bezier(0.33,1.53,0.69,0.99)]">
                        Δειτε υπηρεσιες
                    </a>
                </div>

                {/* Stats */}
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                    {stats.map((item, index) => (
                        <div
                            key={item.header}
                            className={`flex items-center ${hydrated ? "hero-in [--hero-y:20px]" : "opacity-0"}`}
                            style={{animationDelay: `${0.8 + index * 0.15}s`}}
                        >
                            {index !== 0 && (
                                <div className="hidden w-px h-8 mx-4 sm:block md:mx-8 bg-foreground/30"
                                />
                            )}

                            <div className="text-center capitalize">
                <span className="text-lg font-bold sm:text-2xl">
                  <CountUp
                      end={item.header}
                      duration={2}
                      separator="."
                      delay={0.8 + index * 0.15}
                  />

                    {item.symbol}
                </span>
                                <p className="text-sm font-light text-foreground/70">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
