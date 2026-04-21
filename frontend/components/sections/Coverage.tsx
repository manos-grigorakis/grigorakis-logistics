import Map from "@/components/ui/Map";

export default function Coverage() {
  const cities = [
    "αθήνα",
    "θεσαλλονίκη",
    "πάτρα",
    "ηράκλειο",
    "χανιά",
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
        <span className="text-xs tracking-widest uppercase text-foreground/40">
          καλυψη
        </span>

        <h2 className="mt-2 text-4xl font-semibold uppercase">
          παντού στην <span className="text-primary-500">Ελλάδα</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-12 mt-12 lg:items-center lg:flex-row">
          <div className="shrink-0 lg:w-120">
            <p className="leading-relaxed text-foreground/70">
              Με κέντρο διανομής στην έδρα μας και συνεργαζόμενα σημεία σε κάθε
              περιφέρεια, φτάνουμε στον τελικό παραλήπτη γρήγορα και με ασφάλεια
              — από το κέντρο της πόλης μέχρι τα πιο απομακρυσμένα χωριά.
            </p>

            {/* Cities */}
            <ul className="mt-8">
              {cities.map((city) => (
                <li
                  key={city}
                  className="py-2 font-medium capitalize border-b border-foreground/10 text-foreground/80"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-125 lg:flex-1">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
