import {IconType} from "react-icons";
import {LuBox, LuShieldCheck, LuTag} from "react-icons/lu";

export const features: { icon: IconType, title: string, description: string }[] = [
    {
        icon: LuTag,
        title: 'Οικονομικότερη μεταφορά',
        description: 'Το κόστος μεταφοράς επιμερίζεται σε περισσότερες αποστολές, χωρίς να χρειάζεται να δεσμεύσετε ολόκληρο φορτηγό.'
    },
    {
        icon: LuBox,
        title: 'Ιδανική για μικρότερα φορτία',
        description: 'Κατάλληλη λύση για εμπορεύματα και παλέτες που δεν καταλαμβάνουν όλο τον διαθέσιμο χώρο ενός φορτηγού.'
    },
    {
        icon: LuShieldCheck,
        title: 'Οργανωμένη παράδοση',
        description: 'Συντονισμός των αποστολών, προσεκτικός χειρισμός των εμπορευμάτων και ενημέρωση για την παράδοσή τους.'
    }
]