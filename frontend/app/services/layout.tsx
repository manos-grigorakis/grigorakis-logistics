import {ReactNode} from "react";

type ServicesLayoutProps = {
    children: ReactNode;
}

export default function ServicesLayout({children}: ServicesLayoutProps) {
    return (
        <main className="px-4 pt-32 pb-24 lg:pt-44">
            {children}
        </main>
    )
}