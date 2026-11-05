import {Metadata} from "next";
import {PartialLoadContents} from "@/app/services/partial-load/PartialLoadContents";

export const metadata: Metadata = {
    title: "Μερική Φόρτωση (LTL) Εμπορευμάτων",
    description: "Μερική φόρτωση (LTL) εμπορευμάτων από τον Ασπρόπυργο σε όλη την Ελλάδα. Οικονομικές μεταφορές μικρότερων φορτίων και παλετών από τη Γρηγοράκης Μεταφορική.",
    alternates: {
        canonical: "https://grigorakis-logistics.gr/services/partial-load",
    },
};

export default function PartialLoadPage() {
    return <PartialLoadContents/>
}