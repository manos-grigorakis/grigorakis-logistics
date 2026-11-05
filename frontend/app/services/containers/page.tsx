import {Metadata} from "next";
import {ContainersContent} from "@/app/services/containers/ContainersContents";
import {buildPageMetadata} from "@/app/lib/seo/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Πώληση & Μεταφορά Containers",
    description: "Πώληση και μεταφορά containers από τη Γρηγοράκης Μεταφορική. Παραλαβές και παραδόσεις σε λιμάνια, εργοτάξια και επαγγελματικούς χώρους.",
    path: '/services/containers'
})


export default function ContainersPage() {
    return <ContainersContent/>
}
