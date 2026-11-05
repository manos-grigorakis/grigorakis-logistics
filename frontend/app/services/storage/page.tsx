import {StorageContents} from "@/app/services/storage/StorageContents";
import {Metadata} from "next";
import {buildPageMetadata} from "@/app/lib/seo/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Αποθήκευση Εμπορευμάτων & Logistics",
    description: "Λύσεις αποθήκευσης εμπορευμάτων και logistics μέσω συνεργαζόμενου δικτύου σε Αττική και Κρήτη. Οδικές μεταφορές και διανομή από τη Γρηγοράκης Μεταφορική.",
    path: '/services/storage'
})

export default function StoragePage() {
    return <StorageContents/>
}