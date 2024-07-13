import AboutCallout from "@/components/aboutCallout/aboutCallout";
import AboutCTA from "@/components/aboutCTA/aboutCTA";
import AboutHeader from "@/components/aboutHeader/aboutHeader";
import AboutHowitworks from "@/components/aboutHowitworks/aboutHowitworks";
import CatList from "@/components/catList/catList";
import JoinTodayCTA from "@/components/joinTodayCTA/joinTodayCTA";
import LandingCTA from "@/components/landingCTA/landingCTA";

export default function aboutPage() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <AboutHeader />
      <AboutCallout />
      <JoinTodayCTA />
      <LandingCTA />
      <AboutHowitworks />
      <CatList />
    </div>
  );
}
