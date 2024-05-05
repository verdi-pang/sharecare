import AboutCallout from "@/components/aboutCallout/aboutCallout";
import AboutCTA from "@/components/aboutCTA/aboutCTA";
import AboutHeader from "@/components/aboutHeader/aboutHeader";
import AboutHowitworks from "@/components/aboutHowitworks/aboutHowitworks";
import CatList from "@/components/catList/catList";

export default function aboutPage() {
    return (
        <div className="flex flex-col p-3 gap-4">
            <AboutHeader />
            <AboutCallout />
            <AboutCTA />
            <AboutHowitworks />
            <CatList />
        </div>
    )
}