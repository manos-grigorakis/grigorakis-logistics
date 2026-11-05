import {Metadata} from "next";
import {RelocationContents} from "@/app/services/relocations/RelocationContents";

export const metadata: Metadata = {
    title: "Οικιακές & Επαγγελματικές Μετακομίσεις",
    description: "Οικιακές και επαγγελματικές μετακομίσεις από τον Ασπρόπυργο σε όλη την Ελλάδα. Οργανωμένη μεταφορά επίπλων και εξοπλισμού από τη Γρηγοράκης Μεταφορική.",
    alternates: {
        canonical:
            "https://grigorakis-logistics.gr/services/relocations",
    },
};

export default function RelocationsPage() {
    return <RelocationContents/>
}