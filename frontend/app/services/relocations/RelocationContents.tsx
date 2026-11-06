import {Breadcrumbs} from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import {OurServiceList} from "@/components/services/OurServiceList";
import {ServiceCTA} from "@/components/services/ServiceCTA";
import {LuCheck} from "react-icons/lu";
import {relocationTypes} from '@/app/services/relocations/relocation.data'
import {AppLinkButton} from "@/components/ui/AppLinkButton";

export function RelocationContents() {
    return (
        <section className="mx-auto max-w-6xl">
            <Breadcrumbs items={[{label: 'Υπηρεσίες', href: '/#services'}, {label: 'Μετακομίσεις'}]}/>

            <div className="flex flex-col gap-12 lg:gap-16">
                {/* Hero */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center justify-center">
                    <div>
                        <span className="text-xs uppercase text-foreground/70">υπηρεσιες μεταφορας</span>
                        <h1 className="text-4xl mb-3 font-bold">
                            Οικιακές & Επαγγελματικές <span className="text-primary-500">Μετακομίσεις</span>
                        </h1>

                        <p className="max-w-xl leading-relaxed text-foreground/70">
                            Η Γρηγοράκης Μεταφορική αναλαμβάνει οικιακές και επαγγελματικές μετακομίσεις από τον
                            Ασπρόπυργο προς προορισμούς σε όλη την Ελλάδα. Με οργανωμένη φόρτωση, προσεκτική μεταφορά
                            και συντονισμό της παράδοσης, φροντίζουμε για την ασφαλή μετακίνηση των αντικειμένων σας.
                        </p>

                        <div className={"mt-6"}>
                            <AppLinkButton/>
                        </div>
                    </div>

                    <div className="relative w-full aspect-3/2 max-w-lg md:justify-self-end overflow-hidden">
                        <Image
                            src="/services/relocation.webp"
                            alt="Κουτιά μετακόμισης"
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

                {/*  Features */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Μετακομίσεις για ιδιώτες και επιχειρήσεις</h2>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {relocationTypes.map((item) => {
                            const Icon = item.icon;

                            return (
                                <li key={item.title} className="bg-white shadow-sm p-8 lg:p-10">
                                    <Icon className="size-6 text-primary-500" aria-hidden="true"/>
                                    <h3 className="font-semibold text-xl mt-3 mb-1">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-foreground/70">{item.description}</p>

                                    <ul className="mt-4 space-y-2">
                                        {item.checks.map((check) => (
                                            <li key={check} className="text-sm flex gap-2 items-start">
                                                <LuCheck className="size-4 shrink-0 mt-0.5 text-primary-500"/>
                                                <span>{check}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Our Services */}
                <OurServiceList currentServiceRoute="/services/relocations"/>

                {/* CTA */}
                <ServiceCTA
                    title="Σχεδιάζετε μετακόμιση;"
                    description="Επικοινωνήστε με τη Γρηγοράκης Μεταφορική για να συζητήσουμε τις ανάγκες της μετακόμισής σας και να οργανώσουμε τη μεταφορά των αντικειμένων ή του επαγγελματικού σας εξοπλισμού."
                />
            </div>
        </section>
    )
}