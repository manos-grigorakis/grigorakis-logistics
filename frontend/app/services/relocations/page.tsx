import {Metadata} from "next";
import {RelocationContents} from "@/app/services/relocations/RelocationContents";
import {buildPageMetadata} from "@/app/lib/seo/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Οικιακές & Επαγγελματικές Μετακομίσεις",
    description: "Οικιακές και επαγγελματικές μετακομίσεις από τον Ασπρόπυργο σε όλη την Ελλάδα. Οργανωμένη μεταφορά επίπλων και εξοπλισμού από τη Γρηγοράκης Μεταφορική.",
    path: '/services/relocations'
})

export default function RelocationsPage() {
    return <RelocationContents/>
}