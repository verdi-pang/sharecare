import FallbackScreen from "@/components/fallbackScreen/fallbackScreen";
import { Suspense } from "react";

export default function checkLayout({ children }) {
    return (
        <section className="flex flex-col">
            <Suspense fallback={<FallbackScreen />}>{children}</Suspense>
        </section>)
}