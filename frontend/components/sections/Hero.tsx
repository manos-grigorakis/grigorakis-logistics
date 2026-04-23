"use client";

import CountUp from "react-countup";

export default function Hero() {
  const stats: { header: number; symbol: string; value: string }[] = [
    {
      header: 25,
      symbol: "+",
      value: "έτη εμπειρίας",
    },
    {
      header: 10_000,
      symbol: "+",
      value: "παραδόσεις",
    },
    {
      header: 99,
      symbol: "%",
      value: "έγκαιρες παραδόσεις",
    },
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
          Από άκρη σε άκρη της
          <span className="text-primary-500"> Ελλάδας</span>
        </h1>

        <p className="max-w-md text-foreground/70">
          Η μεταφορική εταιρία{" "}
          <span className="font-bold text-primary-500">Γρηγοράκης</span>{" "}
          αναλαμβάνει μεταφορές σε όλη την Ελλάδα, με συνέπεια, ασφάλεια και
          άμεση εξυπηρέτηση.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
          <button
            type="button"
            className="px-5 py-3 text-sm font-medium leading-5 text-white uppercase bg-primary-500 hover:cursor-pointer hover:bg-primary-600"
          >
            <a href="#contact">Ζητηστε προσφορα</a>
          </button>

          <button
            type="button"
            className="px-5 py-3 text-sm font-medium leading-5 uppercase border-2 border-primary-500 text-foreground hover:bg-foreground hover:border-foreground hover:text-white hover:cursor-pointer"
          >
            <a href="#services">Δειτε υπηρεσιες</a>
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          {stats.map((item, index) => (
            <div key={item.header} className="flex items-center">
              {index !== 0 && (
                <div className="hidden w-px h-8 mx-4 sm:block md:mx-8 bg-foreground/30" />
              )}

              <div className="text-center capitalize">
                <span className="text-lg font-bold sm:text-2xl">
                  {" "}
                  <CountUp end={item.header} duration={1.5} separator="." />
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
