import {Metadata} from "next";
import {ContainersContent} from "@/app/services/containers/ContainersContents";

export const metadata: Metadata = {
    title: "Πώληση & Μεταφορά Containers",
    description: "Πώληση και μεταφορά containers από τη Γρηγοράκης Μεταφορική. Παραλαβές και παραδόσεις σε λιμάνια, εργοτάξια και επαγγελματικούς χώρους.",
    alternates: {
        canonical: "https://grigorakis-logistics.gr/services/containers",
    },
};

export default function ContainersPage() {
    return <ContainersContent/>
}
