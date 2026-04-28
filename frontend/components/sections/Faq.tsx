"use client";

import { useState } from "react";
import { LuArrowDown } from "react-icons/lu";
import { m, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: { question: string; answer: string }[] = [
    {
      question: "Πού παραδίδετε;",
      answer:
        "Από την Αλεξανδρούπολη ως την Κρήτη, καλύπτουμε κάθε γωνιά της Ελλάδας.",
    },
    {
      question: "Πόσο κοστίζει μια μεταφορά;",
      answer:
        "Το κόστος εξαρτάται από το βάρος, τον όγκο και τον προορισμό. Συμπληρώστε τη φόρμα επικοινωνίας και σας στέλνουμε προσφορά εντός 24 ωρών.",
    },
    {
      question: "Τι μέγεθος φορτίου αναλαμβάνετε;",
      answer:
        "Από μικρές παλέτες έως πλήρη φορτία με επικαθήμενο. Αν δεν έχετε πλήρες φορτίο, μπορούμε να το συνδυάσουμε με άλλες αποστολές προς τον ίδιο προορισμό.",
    },
    {
      question: "Πόσο διαρκεί μια παράδοση;",
      answer:
        "Εξαρτάται από τον προορισμό. Σε κύριες πόλεις συνήθως εντός 24–48 ωρών. Για απομακρυσμένες περιοχές ενημερώνουμε κατά την επιβεβαίωση.",
    },
    {
      question: "Μπορώ να παρακολουθώ το φορτίο μου;",
      answer:
        "Ναι, κατά τη διάρκεια της μεταφοράς είμαστε πάντα διαθέσιμοι τηλεφωνικά για ενημέρωση σχετικά με την πορεία της αποστολής σας.",
    },
  ];

  const handleToggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faqs" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <m.span
          className="block text-xs tracking-widest uppercase text-foreground/70"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          συχνες ερωτησεις
        </m.span>

        <m.h2
          className="mt-2 mb-12 text-4xl font-semibold uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          εχετε <span className="text-primary-500">απορια;</span>
        </m.h2>

        {/* Faqs */}

        <div>
          {faqs.map((i, index) => {
            const isOpen = openIndex === index;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <h2>
                  <button
                    onClick={() => handleToggle(index)}
                    type="button"
                    className={`flex text-xl font-medium items-center justify-between w-full py-5 rtl:text-right border-b border-b-foreground/30 gap-3 hover:cursor-pointer ${
                      openIndex === index
                        ? "font-semibold text-primary-500"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    <span>{i.question}</span>
                    <LuArrowDown
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h2>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="py-5 border-b border-b-foreground/50">
                        <p className="mb-2 text-sm">{i.answer}</p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
