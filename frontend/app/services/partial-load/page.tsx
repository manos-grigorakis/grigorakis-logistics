import {Metadata} from "next";
import {PartialLoadContents} from "@/app/services/partial-load/PartialLoadContents";
import {buildPageMetadata} from "@/app/lib/seo/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Μερική Φόρτωση (LTL) Εμπορευμάτων",
    description: "Μερική φόρτωση (LTL) εμπορευμάτων από τον Ασπρόπυργο σε όλη την Ελλάδα. Οικονομικές μεταφορές μικρότερων φορτίων και παλετών από τη Γρηγοράκης Μεταφορική.",
    path: '/services/partial-load'
})

export default function PartialLoadPage() {
    return <PartialLoadContents/>
}