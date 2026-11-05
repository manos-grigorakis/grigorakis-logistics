import Link from "next/link";
import {LuChevronRight} from "react-icons/lu";

type BreadcrumbItem = {
    label: string;
    href?: string
}

type Props = {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({items}: Props) {
    return (
        <nav aria-label="Breadcrumbs" className="mb-6 md:mt-4 md:mb-10">
            <ol className={"flex flex-wrap items-center gap-1 text-sm"}>
                <li>
                    <Link href={"/"} className={"text-foreground/60 hover:text-primary-500"}>
                        Αρχική
                    </Link>
                </li>

                {items.map((item) => (
                    <li key={item.href ?? item.label} className={"flex items-center gap-1"}>
                        <LuChevronRight aria-hidden="true" className={"size-4 text-foreground/40"}/>

                        {item.href ? (
                            <Link href={item.href}
                                  className={"text-foreground/60 hover:text-primary-500"}>{item.label}</Link>
                        ) : (<span aria-current={"page"} className={"font-medium"}>{item.label}</span>)}
                    </li>
                ))}
            </ol>
        </nav>
    )
}