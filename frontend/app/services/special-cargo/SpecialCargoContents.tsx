import {Breadcrumbs} from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import VolvoTruckSpecialCargo from '@/public/services/volvo_truck_special_cargo.webp'
import {features, transportHighlights} from "./special-cargo.data";
import {OurServiceList} from "@/components/services/OurServiceList";
import {ServiceCTA} from "@/components/services/ServiceCTA";
import {AppLinkButton} from "@/components/ui/AppLinkButton";

export function SpecialCargoContents() {
    return (
        <section className="mx-auto max-w-6xl">
            <Breadcrumbs items={[{label: 'Υπηρεσίες', href: '/#services'}, {label: 'Ειδικές Μεταφορές'}]}/>

            <div className="flex flex-col gap-12 lg:gap-16">
                {/* Hero */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center justify-center">
                    <div>
                        <span className="text-xs uppercase text-foreground/70">υπηρεσιες μεταφορας</span>
                        <h1 className="text-4xl mb-3 font-bold">
                            <span className="text-primary-500">Ειδικές</span> Μεταφορές
                        </h1>

                        <p className="max-w-xl leading-relaxed text-foreground/70">
                            Αναλαμβάνουμε ειδικές μεταφορές φορτίων με ιδιαίτερες απαιτήσεις σε διαστάσεις, βάρος ή
                            χειρισμό. Με κατάλληλο εξοπλισμό και προσεκτικό σχεδιασμό, προσφέρουμε εξατομικευμένες
                            λύσεις μεταφοράς, δίνοντας έμφαση στην ασφάλεια, τη συνέπεια και την αξιόπιστη παράδοση.
                        </p>

                        <div className={"mt-6"}>
                            <AppLinkButton/>
                        </div>

                    </div>

                    <div className="relative w-full aspect-3/2 max-w-lg md:justify-self-end overflow-hidden">
                        <Image
                            src={VolvoTruckSpecialCargo}
                            alt="Φορτηγό της Γρηγοράκης Μεταφορικής που μεταφέρει σκάφος"
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

                {/*  Features  */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Τι μεταφέρουμε</h2>

                    <ul className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                        {features.map((item) => (
                            <li key={item.title}
                                className="flex h-full flex-col overflow-hidden bg-white/20 shadow-sm border border-foreground/10">
                                <div className="relative aspect-video md:aspect-3/2 w-full">
                                    <Image
                                        src={item.image} alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"/>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-xs mt-2 text-foreground/70 leading-relaxed">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Highlights */}
                <div className="p-8 bg-primary-800">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Κάθε φορτίο, δικό του σχέδιο</h2>

                    <ul className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                        {transportHighlights.map((item) => {
                            const Icon = item.icon

                            return (
                                <li key={item.title} className="border-t border-primary-500">
                                    <Icon
                                        className="size-6 text-ruler mt-4 mb-2"
                                        aria-hidden="true"
                                    />


                                    <div className="text-white">
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-xs mt-2 text-ruler leading-relaxed">{item.description}</p>
                                    </div>

                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Our Services */}
                <OurServiceList currentServiceRoute="/services/special-cargo"/>

                {/* CTA */}
                <ServiceCTA
                    title="Χρειάζεστε μεταφορά ειδικού ή ογκώδους φορτίου;"
                    description="Επικοινωνήστε μαζί μας για να συζητήσουμε τις απαιτήσεις
                            του φορτίου σας και να βρούμε την κατάλληλη λύση μεταφοράς,
                            με έμφαση στην ασφάλεια και την αξιοπιστία."
                />
            </div>
        </section>
    )
}