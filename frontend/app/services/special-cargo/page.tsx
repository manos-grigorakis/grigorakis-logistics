import {Metadata} from "next";
import {SpecialCargoContents} from "@/app/services/special-cargo/SpecialCargoContents";

export const metadata: Metadata = {
    title: "Ειδικές Μεταφορές",
    description: "Η Γρηγοράκης Μεταφορική αναλαμβάνει ειδικές μεταφορές σκαφών, προκατασκευασμένων κατοικιών, βιομηχανικού εξοπλισμού και ογκωδών φορτίων σε όλη την Ελλάδα.",
    alternates: {
        canonical: "https://grigorakis-logistics.gr/services/special-cargo",
    },
};

export default function SpecialCargoPage() {
    return <SpecialCargoContents/>;
}