import AvaliabilityModal from "@/components/avaliablityModal/avaliabilityModal";

export default function productLayout({ children }) {
    return (
        <section className="flex flex-col">
            {children}
            <AvaliabilityModal />
        </section>)
}