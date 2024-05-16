import FallbackScreen from "@/components/fallbackScreen/fallbackScreen";
import { Suspense } from "react";

export default function productLayout({ children }) {
    return (
        <section className="flex flex-col">
            <Suspense fallback={<FallbackScreen />}>{children}</Suspense>
        </section>)
}