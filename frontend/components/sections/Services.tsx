"use client";

import { IconType } from "react-icons";
import {
  LuTruck,
  LuPackage,
  LuContainer,
  LuForklift,
  LuBoxes,
  LuWarehouse,
} from "react-icons/lu";
import { motion } from "motion/react";

export default function Services() {
  const data: {
    icon: IconType;
    title: string;
    description: string;
  }[] = [
    {
      icon: LuTruck,
      title: "οδικές μεταφορές",
      description:
        "Μεταφορά εμπορευμάτων σε όλη την Ελλάδα με επικαθήμενα οχήματα. Τακτικά δρομολόγια, συνεπείς παραδόσεις.",
    },
    {
      icon: LuPackage,
      title: "μερική φόρτωση (LTL)",
      description:
        "Το φορτίο σας μοιράζεται χώρο με άλλες αποστολές προς τον ίδιο προορισμό. Λιγότερο κόστος, ίδια αξιοπιστία.",
    },
    {
      icon: LuContainer,
      title: "containers",
      description:
        "Containers από και προς λιμάνια, εργοτάξια και αποθήκες με κατάλληλα επικαθήμενα και εμπειρία στη διαχείριση βαρέων φορτίων.",
    },
    {
      icon: LuForklift,
      title: "ειδικές μεταφορές",
      description:
        "Αναλαμβάνουμε μεταφορές που απαιτούν εξειδικευμένο εξοπλισμό και εμπειρία.",
    },
    {
      icon: LuBoxes,
      title: "μετακομίσεις",
      description:
        "Οικιακές και επαγγελματικές μετακομίσεις με εξειδικευμένο εξοπλισμό και έμπειρο προσωπικό.",
    },
    {
      icon: LuWarehouse,
      title: "αποθήκευση",
      description:
        "Βραχυπρόθεσμη αποθήκευση εμπορευμάτων για επιχειρήσεις που χρειάζονται ευελιξία στη διαχείριση αποθέματος.",
    },
  ];

  return (
    <section id="services" className="px-4 py-24 text-white bg-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="text-xs block tracking-widest uppercase text-white/40"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          τι κάνουμε
        </motion.span>

        <motion.h2
          className="mt-2 mb-12 text-4xl font-semibold uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          οι <span className="text-primary-500">υπηρεσιες</span> μας
        </motion.h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.li
                key={index}
                className="px-6 py-8 transition-colors duration-200 border border-white/10 hover:bg-white/5"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-500">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <span className="block text-sm text-ruler/50">
                    {index + 1}
                  </span>
                </div>

                <h4 className="mt-5 text-lg font-semibold capitalize">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ruler">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
