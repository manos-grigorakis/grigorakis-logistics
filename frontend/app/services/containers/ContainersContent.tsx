import {OurServiceList} from "@/components/services/OurServiceList";
import {IconType} from "react-icons";
import {LuContainer, LuHardHat, LuShip, LuTruck, LuWarehouse} from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import {Breadcrumbs} from "@/components/ui/Breadcrumbs";


export function ContainersContent() {
    const offers: { icon: IconType; title: string, description: string }[] = [
        {icon: LuShip, title: "Λιμάνια", description: 'Παραλαβές και παραδόσεις containers.'},
        {icon: LuHardHat, title: "Εργοτάξια", description: 'Μεταφορές containers σε χώρους έργων.'},
        {
            icon: LuWarehouse,
            title: "Αποθήκες",
            description: 'Παραλαβές και παραδόσεις containers από και προς αποθηκευτικούς χώρους.'
        },
    ];

    return (
        <section className="mx-auto max-w-6xl">
            <Breadcrumbs items={[{label: 'Υπηρεσίες', href: '/#services'}, {label: 'Containers'}]}/>

            <div className="flex flex-col gap-12 lg:gap-16">
                {/* Hero */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center justify-center">
                    <div>
                        <span className="text-xs uppercase text-foreground/70">υπηρεσιες μεταφορας</span>
                        <h1 className="text-4xl mb-3 font-bold">
                            Πώληση & Μεταφορά <span className="text-primary-500">Containers</span>
                        </h1>

                        <p className="max-w-xl leading-relaxed text-foreground/70">
                            Αναλαμβάνουμε την εμπορία, πώληση και μεταφορά containers από και προς λιμάνια,
                            εργοτάξια και αποθήκες. Με κατάλληλα επικαθήμενα και εμπειρία στη διαχείριση βαρέων
                            φορτίων, προσφέρουμε λύσεις προσαρμοσμένες στις ανάγκες κάθε μεταφοράς.
                        </p>

                        <div className={"mt-6"}>
                            <Link href="/#contact"
                                  className="px-4 py-4 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase bg-primary-500 hover:cursor-pointer hover:bg-primary-600">
                                Ζητήστε προσφορά
                            </Link>
                        </div>

                    </div>

                    <div className="relative w-full aspect-3/2 max-w-lg md:justify-self-end overflow-hidden">
                        <Image
                            src="/services/grigorakis_truck_container.webp"
                            alt="Φορτηγό της Γρηγοράκης Μεταφορικής που μεταφέρει container"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover saturate-[.85] contrast-[1.05]"
                        />

                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-[#19305B]/8 pointer-events-none"
                        />
                    </div>
                </div>

                {/* Features */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Τι προσφέρουμε</h2>

                    <ul className="grid grid-cols-1 md:grid-cols-2 mb-6">
                        <li className="p-8 lg:p-10 bg-white/50 shadow-sm">
                            <div className="flex items-center justify-center size-10 bg-primary-500 mb-5">
                                <LuTruck className="size-6 text-white" aria-hidden="true"/>
                            </div>

                            <h3 className="text-2xl font-semibold">Μεταφορά</h3>
                            <p className="text-xs mt-2 text-foreground/70 leading-relaxed">
                                Αναλαμβάνουμε τη μεταφορά containers από και προς λιμάνια, εργοτάξια και αποθήκες,
                                με κατάλληλα επικαθήμενα για τη διαχείριση βαρέων φορτίων.
                            </p>
                        </li>
                        <li className="p-8 lg:p-10 bg-primary-800 text-white shadow-sm">
                            <div className="flex items-center justify-center size-10 bg-primary-500 mb-5">
                                <LuContainer className="size-6 text-white" aria-hidden="true"/>
                            </div>

                            <h3 className="text-2xl font-semibold">Πώληση</h3>
                            <p className="text-xs text-ruler mt-2 leading-relaxed">
                                Διαθέτουμε containers προς πώληση για επαγγελματικές ανάγκες. Επικοινωνήστε μαζί μας
                                για να συζητήσουμε τις απαιτήσεις σας και τις διαθέσιμες επιλογές.
                            </p>
                        </li>

                    </ul>

                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {offers.map((item) => {
                            const Icon = item.icon;

                            return (
                                <li key={item.title}
                                    className="flex flex-col p-6 justify-center bg-white/20 shadow-sm border border-foreground/10">
                                    <div className="flex items-center justify-center size-10 bg-primary-500 mb-5">
                                        <Icon
                                            className="size-5 text-white"
                                            aria-label={`${item.title} icon`}
                                        />
                                    </div>

                                    <p className="text-sm font-semibold">{item.title}</p>
                                    <p className="text-xs  mt-2 leading-relaxed text-foreground/70">{item.description}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Description - Gallery */}
                <div className="grid grid-cols-1 md:items-center md:grid-cols-5 gap-8 lg:gap-12">
                    <div className="relative aspect-5/4 md:aspect-4/5 md:col-span-2 overflow-hidden">
                        <Image
                            src="/services/containers_stacked.webp"
                            alt="Στοιβαγμένα containers"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="md:col-span-3">
                        <h2 className="text-2xl mb-4 font-semibold">Η υπηρεσία μας</h2>

                        <p className="leading-relaxed text-foreground/70">
                            Στη Γρηγοράκης Μεταφορική δραστηριοποιούμαστε στην εμπορία, πώληση και μεταφορά
                            containers, εξυπηρετώντας επαγγελματίες και επιχειρήσεις με διαφορετικές ανάγκες. Με
                            πολυετή εμπειρία στις οδικές μεταφορές και κατάλληλα επικαθήμενα, αναλαμβάνουμε τη
                            μεταφορά containers και τη διαχείριση βαρέων φορτίων.
                        </p>

                        <p className="mt-4 leading-relaxed text-foreground/70">
                            Πραγματοποιούμε παραλαβές και παραδόσεις containers από και προς λιμάνια, εργοτάξια,
                            αποθήκες και άλλους επαγγελματικούς χώρους. Κάθε μεταφορά έχει τις δικές της απαιτήσεις,
                            γι&#39; αυτό εξετάζουμε τον προορισμό, τα χαρακτηριστικά του φορτίου και τις ανάγκες της
                            αποστολής, ώστε να προτείνουμε την κατάλληλη λύση.
                        </p>

                        <p className="mt-4 leading-relaxed text-foreground/70">
                            Παράλληλα με τις μεταφορές, προσφέρουμε δυνατότητα αγοράς containers για επαγγελματική
                            χρήση. Επικοινωνήστε μαζί μας για πληροφορίες σχετικά με τις διαθέσιμες επιλογές και την
                            εξυπηρέτηση των αναγκών σας.
                        </p>
                    </div>
                </div>

                {/* Our Services */}
                <OurServiceList currentServiceRoute="/services/containers"/>

                {/* CTA */}
                <div
                    className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between bg-primary-500 p-8 md:p-12 lg:p-14 text-white">
                    <div>
                        <h2 className="text-2xl mb-4 font-semibold">Ενδιαφέρεστε για αγορά ή μεταφορά container;</h2>
                        <p className="text-xs max-w-lg leading-relaxed">
                            Επικοινωνήστε μαζί μας για πληροφορίες σχετικά με την αγορά containers ή για να
                            συζητήσουμε τις ανάγκες της μεταφοράς σας.
                        </p>
                    </div>


                    <Link href="/#contact"
                          className="px-5 block py-4 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase bg-foreground hover:cursor-pointer hover:bg-foreground/80">
                        Ζητήστε προσφορά
                    </Link>
                </div>
            </div>
        </section>
    )
}