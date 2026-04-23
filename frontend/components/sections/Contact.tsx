"use client";

import { motion } from "motion/react";
import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 text-white bg-primary-500">
      <motion.div
        className="flex flex-col gap-24 mx-auto min-[950px]:gap-32 min-[950px]:flex-row max-w-7xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div>
          <span className="text-xs tracking-widest uppercase text-white/60">
            επικοινωνια
          </span>

          <h2 className="mt-2 mb-4 text-4xl font-semibold uppercase">
            ζητηστε προσφορα σημερα
          </h2>

          <p className="max-w-md leading-relaxed text-white/90">
            Ζητήστε δωρεάν προσφορά ή καλέστε μας απευθείας. Απαντάμε σε όλα τα
            αιτήματα εντός εργάσιμης ημέρας.
          </p>

          {/* Info */}
          <ul className="mt-12">
            <motion.li
              className="py-4 border-b border-white/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-medium uppercase font-heading text-white/80">
                email
              </span>

              <div className="flex flex-col gap-1">
                <p className="hover:underline">
                  <a href="mailto:info@grigorakis-logistics.gr?subject=Αίτημα%20Επικοινωνίας">
                    info@grigorakis-logistics.gr
                  </a>
                </p>
                <p className="hover:underline">
                  <a href="mailto:contact@grigorakis-logistics.gr?subject=Αίτημα%20Επικοινωνίας">
                    contact@grigorakis-logistics.gr
                  </a>
                </p>
              </div>
            </motion.li>

            <motion.li
              className="py-4 border-b border-white/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-medium uppercase font-heading text-white/80">
                εδρα
              </span>
              <p className="uppercase">ασπροπυργος θεση κουταλα, 19300</p>
            </motion.li>

            <motion.li
              className="py-4 border-b border-white/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-medium uppercase font-heading text-white/80">
                ωραριο
              </span>
              <p className="uppercase">δευ - παρ · 08:00 - 20:00</p>
            </motion.li>
          </ul>
        </div>

        {/* Form */}
        <motion.div
          className="flex-1 overflow-hidden  px-8 py-16 shadow-sm bg-background drop-shadow-lg text-foreground"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
