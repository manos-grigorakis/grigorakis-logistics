import {Metadata} from "next";
import {ContainersContent} from "@/app/services/containers/ContainersContent";

export const metadata: Metadata = {
    title: "Πώληση & Μεταφορά Containers",
    description: "Υπηρεσίες πώλησης και μεταφοράς containers από τη Γρηγοράκης Μεταφορική.",
};

export default function ContainersPage() {
    return <ContainersContent/>
}
