import {IconType} from "react-icons";
import {LuBuilding2, LuMapPin, LuRoute, LuShieldCheck, LuTruck, LuWarehouse} from "react-icons/lu";

export const features: { icon: IconType, title: string, description: string }[] = [
    {
        icon: LuRoute,
        title: 'Τακτικά δρομολόγια',
        description: 'Οργανωμένα δρομολόγια από τον Ασπρόπυργο προς πόλεις και περιοχές σε όλη την Ελλάδα.'
    },
    {
        icon: LuTruck,
        title: 'Φορτηγά καρότσας & ψυγεία',
        description: 'Μεταφορά γενικών εμπορευμάτων με φορτηγά καρότσας και προϊόντων που απαιτούν ψύξη με φορτηγά ψυγεία.'
    },
    {
        icon: LuShieldCheck,
        title: 'Έμπειροι οδηγοί',
        description: 'Έμπειροι επαγγελματίες οδηγοί με προτεραιότητα στην ασφαλή μεταφορά και τον σωστό χειρισμό των φορτίων.'
    },
    {
        icon: LuMapPin,
        title: 'Ενημέρωση αποστολής',
        description: 'Ενημέρωση για την πορεία της μεταφοράς και συντονισμός για την παράδοση των εμπορευμάτων.'
    }
]

export const locations: { label: string, name: string, icon: IconType, main?: boolean }[] = [
    {label: "Εγκαταστάσεις μας", name: "Ασπρόπυργος", icon: LuBuilding2, main: true},
    {label: "Σημείο δικτύου", name: "Μοσχάτο Αττικής", icon: LuWarehouse},
    {label: "Σημείο δικτύου", name: "Άγιος Νικόλαος Κρήτης", icon: LuWarehouse},
]

export const cities: string[] = ["Αθήνα", "Θεσσαλονίκη", "Πάτρα", "Ηράκλειο", "Ιωάννινα", "Κέρκυρα", "Πρέβεζα"]