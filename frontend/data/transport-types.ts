export const TRANSPORT_TYPES: { value: string; option: string }[] = [
  {
    value: "road-transport",
    option: "Οδική Μεταφορά",
  },
  {
    value: "partial-load",
    option: "Μερική Φόρτωση",
  },
  {
    value: "containers",
    option: "Containers",
  },
  {
    value: "special-cargo",
    option: "Ειδικές Μεταφορές",
  },
  {
    value: "relocation",
    option: "Μετακόμιση",
  },
  {
    value: "storage",
    option: "Αποθήκευση",
  },
  {
    value: "other",
    option: "Αλλο",
  },
] as const;
