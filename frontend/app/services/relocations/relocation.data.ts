import {IconType} from "react-icons";
import {LuBuilding2, LuHouse} from "react-icons/lu";

export const relocationTypes: { icon: IconType, title: string, description: string, checks: string[] }[] = [
    {
        icon: LuHouse,
        title: "Οικιακές μετακομίσεις",
        description:
            "Μετακομίσεις διαμερισμάτων και μονοκατοικιών με προσεκτική φόρτωση και μεταφορά των προσωπικών σας αντικειμένων.",
        checks: [
            "Συνεννόηση για ημέρα μετακόμισης",
            "Φόρτωση και μεταφορά αντικειμένων",
            "Παράδοση στη νέα διεύθυνση",
        ],
    },
    {
        icon: LuBuilding2,
        title: "Επαγγελματικές μετακομίσεις",
        description:
            "Μεταφορές επαγγελματικού εξοπλισμού, επίπλων και εμπορευμάτων για επιχειρήσεις που μεταφέρονται σε νέο χώρο.",
        checks: [
            "Οργάνωση της μεταφοράς",
            "Μεταφορά επίπλων και εξοπλισμού",
            "Παράδοση στον νέο επαγγελματικό χώρο",
        ],
    },
]