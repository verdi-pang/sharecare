"use client"
import CatItemList from "@/components/catItemList/catItemList";
import CatListSuggest from "@/components/catListSuggest/catListSuggest";
import CatSelectBar from "@/components/catSelectBar/catSelectBar";
import LandingCTA from "@/components/landingCTA/landingCTA";
import LocationBox from "@/components/locationBox/locationBox";
import SearchPageHero from "@/components/searchPageHero/searchPageHero";
import { useSearchParams } from "next/navigation";

export default function Categories() {
    const searchParams = useSearchParams();
    const customParamCat = searchParams.get("query");
    return (
        <div className="flex flex-col py-3">
            <SearchPageHero />
            <LocationBox />
            <CatSelectBar />
            <CatItemList query={customParamCat} />
            <CatListSuggest />
            <LandingCTA />
        </div>
    )
};