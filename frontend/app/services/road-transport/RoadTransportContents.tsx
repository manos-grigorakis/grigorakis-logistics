import {Breadcrumbs} from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import {cities, features, locations} from "@/app/services/road-transport/road-transport.data";
import OurServiceList from "@/components/sections/our-services-list";
import {LuMapPin} from "react-icons/lu";

export function RoadTransportContents() {
    return (
        <section className="mx-auto max-w-6xl">
            <Breadcrumbs items={[{label: 'Υπηρεσίες', href: '/#services'}, {label: 'Οδική Μεταφορά'}]}/>

            <div className="flex flex-col gap-12 lg:gap-16">
                {/* Hero */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center justify-center">
                    <div>
                        <span className="text-xs uppercase text-foreground/70">υπηρεσιες μεταφορας</span>
                        <h1 className="text-4xl mb-3 font-bold">
                            <span className="text-primary-500">Οδικές</span> Μεταφορές
                        </h1>

                        <p className="max-w-xl leading-relaxed text-foreground/70">
                            Η Γρηγοράκης Μεταφορική αναλαμβάνει οδικές μεταφορές εμπορευμάτων από τον Ασπρόπυργο προς
                            όλη την Ελλάδα. Διαθέτουμε φορτηγά καρότσας και ψυγεία για τη μεταφορά γενικών φορτίων και
                            προϊόντων που απαιτούν ελεγχόμενη θερμοκρασία, με έμφαση στην ασφάλεια, τη συνέπεια και την
                            αξιόπιστη εξυπηρέτηση.
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
                            src="/fleet/parked-truck.webp"
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

                {/*  Features  */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Οργανωμένες οδικές μεταφορές εμπορευμάτων</h2>

                    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {features.map((feature) => {
                            const Icon = feature.icon

                            return (
                                <li key={feature.title} className="p-4 md:p-8 bg-white/50 shadow-sm">
                                    <div className="flex items-center justify-center size-10 bg-primary-500 mb-5">
                                        <Icon
                                            className="size-5 text-white"
                                            aria-label={`${feature.title} icon`}
                                        />
                                    </div>

                                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                                    <p className="text-xs mt-2 text-foreground/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>


                {/*  Coverage  */}
                <div className="p-6 md:p-10 bg-primary-800">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-white">Πανελλαδική κάλυψη μεταφορών</h2>
                        <p className="text-sm mt-2 text-primary-200">Με αφετηρία την έδρα μας στον Ασπρόπυργο και τη
                            συνεργασία του δικτύου μας σε Αθήνα και Κρήτη, εξυπηρετούμε μεταφορές εμπορευμάτων σε όλη
                            την Ελλάδα.</p>
                    </div>


                    {/* Locations */}
                    <div>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {locations.map((location) => {
                                const Icon = location.icon

                                return (
                                    <li key={location.name}
                                        className={`p-5 ${location.main ? "bg-primary-600" : "bg-primary-700"}`}>

                                        <Icon className="size-6 text-primary-200 mb-5"
                                              aria-label={`${location.name} icon`}/>

                                        <p className="mb-2 text-xs uppercase tracking-wide text-primary-200">{location.label}</p>
                                        <p className="text-xl font-semibold text-white">{location.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>


                    {/* Cities Coverage */}
                    <div className="mt-8 border-t border-primary-500 pt-6">
                        <h3 className="mb-5 text-lg font-semibold text-white">Περιοχές εξυπηρέτησης</h3>

                        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4 lg:grid-cols-7">
                            {cities.map((city) => (
                                <li key={city} className="flex items-center gap-2 text-sm text-white">
                                    <LuMapPin className="h-4 w-4 shrink-0 text-primary-300"/>
                                    {city}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* Our Services */}
                <OurServiceList currentServiceRoute="/services/road-transport"/>

                {/* CTA */}
                <div
                    className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between bg-primary-500 p-8 md:p-12 lg:p-14 text-white">
                    <div>
                        <h2 className="text-2xl mb-4 font-semibold">Χρειάζεστε μεταφορά εμπορευμάτων;</h2>
                        <p className="text-xs max-w-lg leading-relaxed">
                            Επικοινωνήστε με τη Γρηγοράκης Μεταφορική για να συζητήσουμε τις ανάγκες της αποστολής σας
                            και να σας προτείνουμε την κατάλληλη λύση οδικής μεταφοράς.
                        </p>
                    </div>

                    <Link href="/#contact"
                          className="px-5 block  py-4 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase bg-foreground hover:cursor-pointer hover:bg-foreground/80">
                        Ζητήστε προσφορά
                    </Link>
                </div>
            </div>
        </section>
    )
}