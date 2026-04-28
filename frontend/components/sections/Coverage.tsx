"use client";

import Map from "@/components/ui/Map";
import { m } from "framer-motion";
import { useState } from "react";

export default function Coverage() {
  const [inView, setInView] = useState(false);
  const cities = [
    "αθήνα",
    "θεσσαλονίκη",
    "πάτρα",
    "ηράκλειο",
    "ιωάννινα",
    "κέρκυρα",
    "πρέβεζα",
  ];

  return (
    <section id="coverage" className="relative px-4 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#0d0d0f20_1px,transparent_1px)] bg-size-[18px_18px]" />

      <div className="max-w-6xl mx-auto">
        {/* Headers */}
        <m.span
          className="text-xs block tracking-widest uppercase text-foreground/70"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          καλυψη
        </m.span>

        <m.h2
          className="mt-2 text-4xl font-semibold uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          παντού στην <span className="text-primary-500">Ελλάδα</span>
        </m.h2>

        {/* Content */}
        <div className="flex flex-col gap-12 mt-12 lg:items-center lg:flex-row">
          <div className="shrink-0 lg:w-120">
            <p className="leading-relaxed text-foreground/70">
              Με κέντρο διανομής στην έδρα μας και συνεργαζόμενα σημεία σε κάθε
              περιφέρεια, φτάνουμε στον τελικό παραλήπτη γρήγορα και με ασφάλεια
              από το κέντρο της πόλης μέχρι τα πιο απομακρυσμένα χωριά.
            </p>

            {/* Cities */}
            <ul className="mt-8">
              {cities.map((city, index) => (
                <m.li
                  key={city}
                  className="py-2 font-medium capitalize border-b border-foreground/10 text-foreground/80"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {city}
                </m.li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <m.div
            className="w-full h-125 lg:flex-1"
            onViewportEnter={() => setInView(true)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Map inView={inView} />
          </m.div>
        </div>
      </div>
    </section>
  );
}
