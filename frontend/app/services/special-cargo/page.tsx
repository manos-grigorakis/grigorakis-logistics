import {Metadata} from "next";
import {SpecialCargoContents} from "@/app/services/special-cargo/SpecialCargoContents";
import {buildPageMetadata} from "@/app/lib/seo/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Ειδικές Μεταφορές",
    description: "Η Γρηγοράκης Μεταφορική αναλαμβάνει ειδικές μεταφορές σκαφών, προκατασκευασμένων κατοικιών, βιομηχανικού εξοπλισμού και ογκωδών φορτίων σε όλη την Ελλάδα.",
    path: '/services/special-cargo'
})

export default function SpecialCargoPage() {
    return <SpecialCargoContents/>;
}