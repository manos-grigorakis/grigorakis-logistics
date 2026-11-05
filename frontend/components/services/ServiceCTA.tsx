import Link from "next/link";

type Props = {
    title: string
    description: string
}

export function ServiceCTA({title, description}: Props) {
    return (
        <div
            className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between bg-primary-500 p-8 md:p-12 lg:p-14 text-white">
            <div>
                <h2 className="text-2xl mb-4 font-semibold">{title}</h2>
                <p className="text-xs max-w-lg leading-relaxed">{description}</p>
            </div>


            <Link href="/#contact"
                  className="px-5 block py-4 text-sm font-medium leading-5 text-white transition-colors duration-200 uppercase bg-foreground hover:cursor-pointer hover:bg-foreground/80">
                Ζητήστε προσφορά
            </Link>
        </div>
    )
}