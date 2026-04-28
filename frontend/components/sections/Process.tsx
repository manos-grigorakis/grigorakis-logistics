"use client";

import { IconType } from "react-icons";
import {
  LuMessageSquare,
  LuClipboardList,
  LuPackageOpen,
  LuPackageCheck,
} from "react-icons/lu";
import { m } from "framer-motion";

export default function Process() {
  const steps: { icon: IconType; title: string; description: string }[] = [
    {
      icon: LuMessageSquare,
      title: "επικοινωνία",
      description:
        "Στείλτε μας τα στοιχεία του φορτίου σας διαστάσεις, βάρος, σημεία παραλαβής.",
    },
    {
      icon: LuClipboardList,
      title: "προσφορά",
      description:
        "Λαμβάνετε γραπτή, διαφανή προσφορά χωρίς κρυφές χρεώσεις εντός 24 ωρών.",
    },
    {
      icon: LuPackageOpen,
      title: "παραλαβή",
      description:
        "Προγραμματίζουμε την παραλαβή στη διεύθυνση σας με πιστοποιημένο οδηγό.",
    },
    {
      icon: LuPackageCheck,
      title: "παράδοση",
      description:
        "Παρακολουθείτε το φορτίο και λαμβάνετε επιβεβαίωση όταν φτάσει στον προορισμό του.",
    },
  ];

  return (
    <section id="process" className="px-4 py-24 text-foreground">
      <div className="max-w-6xl mx-auto">
        <m.span
          className="text-xs block tracking-widest uppercase text-foreground/70"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          διαδικασια
        </m.span>

        <m.h2
          className="mt-2 mb-24 text-4xl font-semibold uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          πως <span className="text-primary-500">δουλευουμε</span>
        </m.h2>

        {/* Stepper */}
        <div className="relative">
          {/* Desktop line */}
          <div className="absolute left-0 right-0 hidden h-px top-7 md:block bg-foreground/10">
            <m.div
              className="h-full bg-foreground/20"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Mobile line */}
          <div className="absolute top-0 bottom-0 w-px left-7 bg-foreground/10 md:hidden">
            <m.div
              className="w-full bg-foreground/20"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          <ol className="relative flex flex-col gap-8 text-sm font-medium md:flex-row md:gap-0 md:items-center md:w-full">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <m.li
                  key={index}
                  className="relative z-10 flex flex-row items-center gap-4 md:flex-col md:flex-1 md:items-center md:gap-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <m.div
                    className="flex items-center justify-center rounded-full w-15 h-15 shrink-0 bg-primary-500"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + 0.2,
                      ease: "backOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </m.div>
                  <div className="md:mt-3 md:text-center">
                    <span className="block text-sm text-foreground/50">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold capitalize ">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed max-w-50">
                      {step.description}
                    </p>
                  </div>
                </m.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
