"use client";

import { navLinks } from "@/data/nav-links";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const services = [
    "οδικές μεταφορές",
    "μερική φόρτωσ (LTL)",
    "containers",
    "ειδικές μεταφορές",
    "μετακομίσεις",
    "αποθήκευση",
  ];

  return (
    <footer className="w-full px-4 py-20 text-white bg-foreground">
      {/* Footer message */}
      <div className="mb-16 text-center">
        <motion.p
          className="text-4xl font-bold text-white uppercase"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          κινουμαστε <span className="text-primary-500">μαζι</span>
        </motion.p>
        <motion.p
          className="mt-3 text-sm tracking-widest uppercase text-white/40"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          25+ Χρόνια Εμπειρίας · Πανελλαδική Κάλυψη · Αξιόπιστες Παραδόσεις
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-12 mx-auto text-left max-w-7xl md:grid-cols-4 md:gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <div>
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40">
            Γρηγοράκης <span className="text-primary-500">Logistics</span>
          </h5>
          <div className="text-sm leading-relaxed text-white/50">
            <p>
              Μέλος του{" "}
              <a
                href="https://grigorakis-transport.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                Δικτύου Μεταφορών Γρηγοράκης
              </a>
            </p>
            <p className="mt-2">Υποκ. Αθήνα</p>
            <p>Ασπρόπυργος, Θέση Κούταλα</p>
            <p>Αττική, 19300</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40">
            υπηρεσιες
          </h5>

          <ul className="flex flex-col gap-2 text-xs uppercase">
            {services.map((service) => (
              <li key={service} className="text-white/50">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Sitemap */}
        <div>
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40">
            sitemap
          </h5>

          <ul className="flex flex-col gap-2 text-xs uppercase">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="transition-colors text-white/50 hover:text-primary-500"
              >
                <a href={"#" + link.section}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          {/* Contact */}
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40">
            επικοινωνία
          </h5>

          <div className="flex flex-col gap-2 mb-8 text-sm text-white/50">
            <a
              href="mailto:info@grigorakis-logistics.gr"
              className="transition-colors hover:text-primary-500"
            >
              info@grigorakis-logistics.gr
            </a>
            <a
              href="mailto:info@grigorakis-logistics.gr"
              className="transition-colors hover:text-primary-500"
            >
              contact@grigorakis-logistics.gr
            </a>
          </div>

          {/* Hours */}
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40">
            Ωράριο
          </h5>
          <p className="text-sm text-white/50">Δευ – Παρ · 08:00 – 20:00</p>
          <div></div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-px max-w-6xl mx-auto mt-16 bg-white/10"></div>

      {/* Bottom */}
      <div className="flex flex-col items-center justify-between max-w-6xl gap-2 mx-auto mt-6 text-xs md:flex-row text-white/30">
        <p className="mb-2">
          © {currentYear} Grigorakis Logistics. All rights reserved
        </p>
        <p>
          Built by{" "}
          <a
            href="https://manosgrigorakis.com"
            target="_blank"
            className="transition-colors hover:text-primary-500"
          >
            Manos Grigorakis
          </a>
        </p>
      </div>
    </footer>
  );
}
