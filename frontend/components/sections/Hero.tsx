"use client";

import React from "react";
import CountUp from "react-countup";

export default function Hero() {
  const stats: { header: number; symbol: string; value: string }[] = [
    { header: 25, symbol: "+", value: "έτη εμπειρίας" },
    { header: 10_000, symbol: "+", value: "παραδόσεις" },
    { header: 99, symbol: "%", value: "έγκαιρες παραδόσεις" },
  ];

  return (
    <section className="relative flex items-center justify-around px-4 overflow-hidden min-h-lvh">
      {/* Background */}
      <div className="absolute z-0 pointer-events-none inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-sm tracking-wider uppercase">
          ~ εθνικες μεταφορες ~
        </span>

        <h1 className="max-w-2xl mt-2 mb-10 text-4xl font-bold leading-tight md:text-7xl">
          <span className="block">Από άκρη σε άκρη της</span>
          <span className="block text-primary-500">Ελλάδας</span>
        </h1>

        <p className="max-w-md text-foreground/70">
          Η μεταφορική εταιρία{" "}
          <span className="font-bold text-primary-500">Γρηγοράκης</span>{" "}
          αναλαμβάνει μεταφορές σε όλη την Ελλάδα, με συνέπεια, ασφάλεια και
          άμεση εξυπηρέτηση.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
          <a
            href="#contact"
            className="px-5 block py-4 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase bg-primary-500 hover:cursor-pointer hover:bg-primary-600"
          >
            Ζητηστε προσφορα
          </a>

          <a
            href="#services"
            className="px-5 block py-4 text-sm font-medium leading-5 uppercase border-2 transition-colors duration-200 border-primary-500 text-foreground hover:bg-foreground hover:border-foreground hover:text-white hover:cursor-pointer"
          >
            Δειτε υπηρεσιες
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-0 mt-2">
          {stats.map((item, index) => (
            <React.Fragment key={item.header}>
              {index !== 0 && (
                <div className="w-px h-8 mx-6 bg-foreground/30" />
              )}
              <div key={item.header} className="text-center capitalize">
                <span className="text-lg font-bold sm:text-2xl">
                  <CountUp
                    start={0}
                    end={item.header}
                    duration={2}
                    separator="."
                  />
                  {item.symbol}
                </span>
                <p className="text-sm font-light text-foreground/70">
                  {item.value}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
