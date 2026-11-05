import {RoadTransportContents} from "@/app/services/road-transport/RoadTransportContents";
import {Metadata} from "next";
import {buildPageMetadata} from "@/app/lib/seo/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Οδικές Μεταφορές Εμπορευμάτων",
    description: "Οδικές μεταφορές εμπορευμάτων από τον Ασπρόπυργο σε όλη την Ελλάδα. Τακτικά δρομολόγια, φορτηγά καρότσας και ψυγεία από τη Γρηγοράκης Μεταφορική.",
    path: '/services/road-transport'
})

export default function RoadTransportPage() {
    return <RoadTransportContents/>
}