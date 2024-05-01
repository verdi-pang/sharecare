"use client"
import CatItemList from "@/components/catItemList/catItemList";
import CatListSuggest from "@/components/catListSuggest/catListSuggest";
import CatSelectBar from "@/components/catSelectBar/catSelectBar";
import LandingCTA from "@/components/landingCTA/landingCTA";
import LocationBox from "@/components/locationBox/locationBox";
import SearchPageHero from "@/components/searchPageHero/searchPageHero";

export default function Categories() {
    return (
        <div className="flex flex-col p-3">
            <SearchPageHero />
            <LocationBox />
            <CatSelectBar />
            <CatItemList />
            <CatListSuggest />
            <LandingCTA />
        </div>
    )
};