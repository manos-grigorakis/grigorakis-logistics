import {StorageContents} from "@/app/services/storage/StorageContents";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Αποθήκευση Εμπορευμάτων & Logistics",
    description: "Λύσεις αποθήκευσης εμπορευμάτων και logistics μέσω συνεργαζόμενου δικτύου σε Αττική και Κρήτη. Οδικές μεταφορές και διανομή από τη Γρηγοράκης Μεταφορική.",
    alternates: {
        canonical:
            "https://grigorakis-logistics.gr/services/storage",
    },
};

export default function StoragePage() {
    return <StorageContents/>
}