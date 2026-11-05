import {Metadata} from "next";
import {ContainersContent} from "@/app/services/containers/ContainersContents";

export const metadata: Metadata = {
    title: "Πώληση & Μεταφορά Containers",
    description: "Υπηρεσίες πώλησης και μεταφοράς containers από τη Γρηγοράκης Μεταφορική.",
    alternates: {
        canonical: "https://grigorakis-logistics.gr/services/containers",
    },
};

export default function ContainersPage() {
    return <ContainersContent/>
}
