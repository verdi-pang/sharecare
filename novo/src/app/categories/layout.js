import SearchPageHero from "@/components/searchPageHero/searchPageHero";

export default function categoriesLayout({ children }) {
    return (
        <section className="flex flex-col">
            <SearchPageHero />
            {children}
        </section>)
}