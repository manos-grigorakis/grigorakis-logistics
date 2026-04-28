"use client";

import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 text-white bg-primary-700">
      <div className="flex flex-col gap-24 mx-auto min-[950px]:gap-32 min-[950px]:flex-row max-w-7xl">
        <div>
          <span className="text-xs tracking-widest uppercase text-[ccc]">
            επικοινωνια
          </span>

          <h2 className="mt-2 mb-4 text-4xl font-semibold uppercase">
            ζητηστε προσφορα σημερα
          </h2>

          <p className="max-w-md leading-relaxed text-white/90">
            Ζητήστε δωρεάν προσφορά ή καλέστε μας απευθείας. Απαντάμε σε όλα τα
            αιτήματα εντός μίας εργάσιμης ημέρας.
          </p>

          {/* Info */}
          <ul className="mt-12">
            <li className="py-4 border-b border-white/40">
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
            </li>

            <li className="py-4 border-b border-white/40">
              <span className="text-lg font-medium uppercase font-heading text-white/80">
                εδρα
              </span>
              <p className="uppercase">ασπροπυργος θεση κουταλα, 19300</p>
            </li>

            <li className="py-4 border-b border-white/40">
              <span className="text-lg font-medium uppercase font-heading text-white/80">
                ωραριο
              </span>
              <p className="uppercase">δευ - παρ · 08:00 - 20:00</p>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-hidden  px-8 py-16 shadow-sm bg-background drop-shadow-lg text-foreground">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
