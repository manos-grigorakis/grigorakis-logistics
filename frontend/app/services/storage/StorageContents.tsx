import {Breadcrumbs} from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import {OurServiceList} from "@/components/services/OurServiceList";
import {ServiceCTA} from "@/components/services/ServiceCTA";

export function StorageContents() {
    return (
        <section className="mx-auto max-w-6xl">
            <Breadcrumbs items={[{label: 'Υπηρεσίες', href: '/#services'}, {label: 'Αποθήκευση'}]}/>

            <div className="flex flex-col gap-12 lg:gap-16">
                {/* Hero */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center justify-center">
                    <div>
                        <span className="text-xs uppercase text-foreground/70">υπηρεσιες μεταφορας</span>
                        <h1 className="text-4xl mb-3 font-bold">
                            <span className="text-primary-500">Αποθήκευση</span> Εμπορευμάτων
                        </h1>

                        <p className="max-w-xl leading-relaxed text-foreground/70">
                            Η Γρηγοράκης Μεταφορική προσφέρει λύσεις αποθήκευσης εμπορευμάτων και υπηρεσίες logistics
                            μέσω του συνεργαζόμενου μεταφορικού δικτύου της. Με παρουσία στον Ασπρόπυργο και
                            συνεργαζόμενες εγκαταστάσεις σε Μοσχάτο και Κρήτη, συνδυάζουμε την αποθήκευση με την οδική
                            μεταφορά και τη διανομή εμπορευμάτων, ανάλογα με τις ανάγκες κάθε επιχείρησης.
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
                            src="/services/warehouse_storage.webp"
                            alt=""
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

                {/* Our Services */}
                <OurServiceList currentServiceRoute="/services/storage"/>

                {/* CTA */}
                <ServiceCTA
                    title="Χρειάζεστε χώρο για τα εμπορεύματά σας;"
                    description="Επικοινωνήστε με τη Γρηγοράκης Μεταφορική για να συζητήσουμε τις ανάγκες αποθήκευσης και μεταφοράς της επιχείρησής σας και να εξετάσουμε τις διαθέσιμες λύσεις."
                />
            </div>
        </section>
    )
}