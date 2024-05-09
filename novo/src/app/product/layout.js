import { Suspense } from "react";

export default function productLayout({ children }) {
    return (
        <section className="flex flex-col">
            <Suspense fallback={<>Loading...</>}>{children}</Suspense>
        </section>)
}