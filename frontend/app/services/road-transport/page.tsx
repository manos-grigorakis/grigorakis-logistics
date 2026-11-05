import {RoadTransportContents} from "@/app/services/road-transport/RoadTransportContents";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Οδικές Μεταφορές Εμπορευμάτων",
    description: "Οδικές μεταφορές εμπορευμάτων από τον Ασπρόπυργο σε όλη την Ελλάδα. Τακτικά δρομολόγια, φορτηγά καρότσας και ψυγεία από τη Γρηγοράκης Μεταφορική.",
    alternates: {
        canonical: "https://grigorakis-logistics.gr/services/road-transport",
    },
};


export default function RoadTransportPage() {
    return <RoadTransportContents/>
}