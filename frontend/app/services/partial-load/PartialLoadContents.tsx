import {Breadcrumbs} from "@/components/ui/Breadcrumbs";
import {OurServiceList} from "@/components/services/OurServiceList";
import {ServiceCTA} from "@/components/services/ServiceCTA";
import {features} from '@/app/services/partial-load/partial-load.data'
import Image from "next/image";
import {AppLinkButton} from "@/components/ui/AppLinkButton";

export function PartialLoadContents() {
    return (
        <section className="mx-auto max-w-6xl">
            <Breadcrumbs items={[{label: 'Υπηρεσίες', href: '/#services'}, {label: 'Μερική Φόρτωση (LTL)'}]}/>

            <div className="flex flex-col gap-12 lg:gap-16">
                {/* Hero */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center justify-center">
                    <div>
                        <span className="text-xs uppercase text-foreground/70">υπηρεσιες μεταφορας</span>
                        <h1 className="text-4xl mb-3 font-bold">
                            Μερική Φόρτωση <span className="text-primary-500">(LTL)</span>
                        </h1>

                        <p className="max-w-xl leading-relaxed text-foreground/70">
                            Η Γρηγοράκης Μεταφορική προσφέρει υπηρεσίες μερικής φόρτωσης (LTL) από τον Ασπρόπυργο προς
                            προορισμούς σε όλη την Ελλάδα. Συνδυάζουμε μικρότερα φορτία με άλλες αποστολές, αξιοποιώντας
                            τον διαθέσιμο χώρο του φορτηγού και περιορίζοντας το κόστος μεταφοράς, χωρίς να απαιτείται η
                            μίσθωση ολόκληρου οχήματος.
                        </p>

                        <div className={"mt-6"}>
                            <AppLinkButton/>
                        </div>
                    </div>

                    <div className="relative w-full aspect-3/2 max-w-lg md:justify-self-end overflow-hidden">
                        <Image
                            src="/services/volvo_truck_ltl.webp"
                            alt="Φορτηγό με παλέτες και διαφορετικά εμπορεύματα για οδικές μεταφορές"
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
                    <h2 className="text-2xl font-semibold mb-4">Γιατί να επιλέξετε μερική φόρτωση;</h2>

                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {features.map((feature) => {
                            const Icon = feature.icon

                            return (
                                <li key={feature.title} className="p-4 md:p-8 bg-white/50 shadow-sm">
                                    <Icon
                                        className="size-6 text-primary-500 mb-4"
                                        aria-label={`${feature.title} icon`}
                                    />

                                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                                    <p className="text-xs mt-2 text-foreground/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* How it works */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Ένα φορτηγό, πολλά φορτία</h2>

                    <div className="flex flex-col gap-8 md:gap-12">
                        {/* Full Load */}
                        <div>
                            <div
                                className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2 mb-2 sm:mb-0">
                                <h3 className="text-lg font-semibold sm:mb-2">Πλήρης φόρτωση</h3>
                                <span className="text-xs text-foreground/40 leading-relaxed">
                                    Το φορτηγό διατίθεται αποκλειστικά για τη δική σας αποστολή.
                                </span>
                            </div>
                            <div className="flex">
                                <div className="bg-primary-500 w-[90%] h-14 flex items-center justify-center">
                                    <span className="text-center text-xs md:text-sm leading-tight text-primary-100">Το φορτίο σας</span>
                                </div>

                                <div className="bg-primary-800 w-[10%] h-14"/>
                            </div>
                        </div>


                        {/* Partial Load */}
                        <div>
                            <div
                                className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2 mb-2 sm:mb-0">
                                <h3 className="text-lg font-semibold sm:mb-2">Μερική φόρτωση (LTL)</h3>
                                <span className="text-xs text-foreground/40 leading-relaxed">
                                    Το φορτίο συνδυάζεται με άλλες αποστολές σε κοινή διαδρομή.
                                </span>
                            </div>
                            <div className="flex space-x-1">
                                <div
                                    className="bg-slate-200 border border-foreground/10 w-[22.5%] h-14 flex items-center justify-center">
                                    <span
                                        className="text-center text-xs md:text-sm text-slate-700 leading-tight">Άλλο φορτίο</span>
                                </div>

                                <div className="bg-primary-500 w-[22.5%] h-14 flex items-center justify-center">
                                    <span
                                        className="text-center text-xs md:text-sm leading-tight text-primary-100">Το φορτίο σας</span>
                                </div>

                                <div
                                    className="bg-slate-200 border border-foreground/10 w-[22.5%] h-14 flex items-center justify-center">
                                    <span
                                        className="text-center text-xs md:text-sm text-slate-700 leading-tight">Άλλο φορτίο</span>
                                </div>

                                <div
                                    className="bg-slate-200 border border-foreground/10 w-[22.5%] h-14 flex items-center justify-center">
                                    <span
                                        className="text-center text-xs md:text-sm text-slate-700 leading-tight">Άλλο φορτίο</span>
                                </div>

                                <div className="bg-primary-800 w-[10%] h-14"/>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Our Services */}
                <OurServiceList currentServiceRoute="/services/partial-load"/>

                {/* CTA */}
                <ServiceCTA
                    title="Θέλετε να μεταφέρετε μικρότερο φορτίο;"
                    description="Επικοινωνήστε με τη Γρηγοράκης Μεταφορική για να συζητήσουμε τις ανάγκες της αποστολής σας και να σας προτείνουμε μια οικονομική λύση μερικής φόρτωσης."
                />
            </div>

        </section>
    )
}