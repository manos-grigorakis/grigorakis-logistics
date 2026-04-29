"use client";

import { navLinks } from "@/data/nav-links";
import { m } from "framer-motion";
import Logo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const services = [
    "οδικές μεταφορές",
    "μερική φόρτωση (LTL)",
    "containers (πώληση & μεταφορά)",
    "ειδικές μεταφορές",
    "μετακομίσεις",
    "αποθήκευση",
  ];

  return (
    <footer className="w-full px-4 py-20 text-white bg-foreground">
      {/* Footer message */}
      <div className="mb-16 text-center">
        <m.p
          className="text-4xl font-bold text-white uppercase"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          κινουμαστε <span className="text-primary-500">μαζι</span>
        </m.p>
        <m.p
          className="mt-3 text-sm tracking-widest uppercase text-white/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          35+ Χρόνια Εμπειρίας · Πανελλαδική Κάλυψη · Αξιόπιστες Παραδόσεις
        </m.p>
      </div>

      <m.div
        className="grid grid-cols-1 items-start gap-12 mx-auto text-left max-w-7xl md:grid-cols-4 md:gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <div className="flex flex-col justify-start">
          <div className="text-sm leading-relaxed text-white/50">
            <p>
              Μέλος του{" "}
              <a
                href="https://grigorakis-transport.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-500"
              >
                Δικτύου Μεταφορών Γρηγοράκης
              </a>
            </p>
            <p className="mt-2">Θέση Κουταλά, Ασπρόπυργος 19300</p>
            <p>Αττική, Ελλάδα</p>

            {/* Logo */}
            <Link
              href="/"
              className="block mt-4 -ml-1"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src={Logo}
                alt="Grigorakis Logistics"
                width={200}
                height={60}
                className="w-auto h-30 brightness-0 invert"
              />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/60">
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
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/60">
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
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/60">
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
          <h5 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/60">
            Ωράριο
          </h5>
          <p className="text-sm text-white/50">Δευ – Παρ · 08:00 – 17:00</p>
        </div>
      </m.div>

      {/* Divider */}
      <div className="h-px max-w-6xl mx-auto mt-16 bg-white/10"></div>

      {/* Bottom */}
      <div className="flex flex-col items-center justify-between max-w-6xl gap-2 mx-auto mt-6 text-xs md:flex-row text-white/60">
        <p className="mb-2">
          © {currentYear} Γρηγοράκης Μεταφορική. All rights reserved
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
