import {StaticImageData} from "next/image";
import TruckHouse from "@/public/fleet/truck-with-house.webp";
import TruckBoat from "@/public/fleet/truck-with-boat.webp";
import ScaniaSpecialCargo from "@/public/services/scania_special_cargo.webp";
import {IconType} from "react-icons";
import {LuClock, LuShieldCheck, LuTruck} from "react-icons/lu";

export const features: { title: string; description: string; image: StaticImageData }[] = [
    {
        title: 'Σπίτια',
        description: "Μεταφορά προκατασκευασμένων κατοικιών και κατασκευών, με προσεκτικό σχεδιασμό και έμφαση στην ασφαλή παράδοση.",
        image: TruckHouse
    },
    {
        title: 'Σκάφη',
        description: "Μεταφορά σκαφών διαφόρων διαστάσεων, με κατάλληλη υποστήριξη και ιδιαίτερη προσοχή κατά τη φόρτωση και τη μεταφορά.",
        image: TruckBoat
    },
    {
        title: 'Βιομηχανικός Εξοπλισμός',
        description: "Μεταφορά βιομηχανικών δεξαμενών, μηχανημάτων και ογκωδών φορτίων που απαιτούν ειδικό χειρισμό και σχεδιασμό.",
        image: ScaniaSpecialCargo
    },
]

export const transportHighlights: { title: string; description: string; icon: IconType }[] = [
    {
        title: 'Κατάλληλος εξοπλισμός',
        description: 'Επιλέγουμε το όχημα και τον εξοπλισμό που ταιριάζουν στο φορτίο σας.',
        icon: LuTruck
    },
    {
        title: 'Εξειδικευμένος χειρισμός',
        description: 'Πιστοποιημένοι οδηγοί αναλαμβάνουν τη φόρτωση, τη μεταφορά και την παράδοση.',
        icon: LuShieldCheck
    },
    {
        title: 'Σχεδιασμός Μεταφοράς',
        description: 'Στείλτε διαστάσεις, βάρος και σημεία παραλαβής και λάβετε γραπτή προσφορά εντός 24 ωρών.',
        icon: LuClock
    }
]