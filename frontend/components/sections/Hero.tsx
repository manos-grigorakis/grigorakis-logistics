"use client";

import CountUp from "react-countup";
import { motion } from "motion/react";

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

  // Animations
  const line = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="relative flex items-center justify-around px-4 overflow-hidden min-h-lvh">
      {/* Background */}
      <motion.div
        className="absolute z-0 pointer-events-none inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
        initial={{ opacity: 0.6 }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
        }}
      />

      <div className="flex flex-col items-center justify-center text-center">
        <motion.span
          className="text-sm tracking-wider uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        >
          ~ εθνικες μεταφορες ~
        </motion.span>

        <motion.h1
          className="max-w-2xl mt-2 mb-10 text-4xl font-bold leading-tight md:text-7xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={line} className="block">
            Από άκρη σε άκρη της
          </motion.span>
          <motion.span variants={line} className="block text-primary-500">
            Ελλάδας
          </motion.span>
        </motion.h1>

        <motion.p
          className="max-w-md text-foreground/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
          }}
        >
          Η μεταφορική εταιρία{" "}
          <span className="font-bold text-primary-500">Γρηγοράκης</span>{" "}
          αναλαμβάνει μεταφορές σε όλη την Ελλάδα, με συνέπεια, ασφάλεια και
          άμεση εξυπηρέτηση.
        </motion.p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
          <motion.button
            type="button"
            className="px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase bg-primary-500 hover:cursor-pointer hover:bg-primary-600"
            initial={{ x: -40, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.5, ease: "backOut" },
            }}
          >
            <a href="#contact">Ζητηστε προσφορα</a>
          </motion.button>

          <motion.button
            type="button"
            className="px-5 py-3 text-sm font-medium leading-5 uppercase border-2 transition-colors duration-200 border-primary-500 text-foreground hover:bg-foreground hover:border-foreground hover:text-white hover:cursor-pointer"
            initial={{ x: 40, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.5, ease: "backOut" },
            }}
          >
            <a href="#services">Δειτε υπηρεσιες</a>
          </motion.button>
        </div>

        {/* Stats */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          {stats.map((item, index) => (
            <motion.div
              key={item.header}
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.15,
                ease: "easeOut",
              }}
            >
              {index !== 0 && (
                <div className="hidden w-px h-8 mx-4 sm:block md:mx-8 bg-foreground/30" />
              )}

              <div className="text-center capitalize">
                <span className="text-lg font-bold sm:text-2xl">
                  {" "}
                  <CountUp
                    end={item.header}
                    duration={1.5}
                    separator="."
                    delay={0.8 + index * 0.15}
                  />
                  {item.symbol}
                </span>
                <p className="text-sm font-light text-foreground/70">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
