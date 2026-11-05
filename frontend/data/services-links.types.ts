import {IconType} from "react-icons";
import {LuBoxes, LuContainer, LuForklift, LuPackage, LuTruck, LuWarehouse} from "react-icons/lu";

export const servicesLinks: { href: string; label: string, icon: IconType, description: string }[] = [
    {
        href: '/services/road-transport',
        label: "Οδική Μεταφορά",
        icon: LuTruck,
        description: 'Μεταφορά εμπορευμάτων σε όλη την Ελλάδα με επικαθήμενα και ψυκτικά οχήματα. Τακτικά δρομολόγια, συνεπείς παραδόσεις.'
    },
    {
        href: '/services/partial-load',
        label: "Μερική Φόρτωση",
        icon: LuPackage,
        description: "Το φορτίο σας μοιράζεται χώρο με άλλες αποστολές προς τον ίδιο προορισμό. Λιγότερο κόστος, ίδια αξιοπιστία."
    },
    {
        href: '/services/containers',
        label: "Containers",
        icon: LuContainer,
        description: "Εμπορία, πώληση και μεταφορά containers από και προς λιμάνια, εργοτάξια και αποθήκες με κατάλληλα επικαθήμενα και εμπειρία στη διαχείριση βαρέων φορτίων.",
    },
    {
        href: '/services/special-cargo',
        label: "Ειδικές Μεταφορές",
        icon: LuForklift,
        description: "Αναλαμβάνουμε μεταφορές που απαιτούν εξειδικευμένο εξοπλισμό και εμπειρία.",
    },
    {
        href: '/services/relocations',
        label: "Μετακόμιση",
        icon: LuBoxes,
        description: "Οικιακές και επαγγελματικές μετακομίσεις με εξειδικευμένο εξοπλισμό και έμπειρο προσωπικό.",
    },

    {
        href: '/services/storage',
        label: "Αποθήκευση",
        icon: LuWarehouse,
        description: "Βραχυπρόθεσμη αποθήκευση εμπορευμάτων για επιχειρήσεις που χρειάζονται ευελιξία στη διαχείριση αποθέματος.",
    }
]