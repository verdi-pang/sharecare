'use client'
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";
import WelcomeDesc from "@/components/welcomeDesc/welcomeDesc";
// import HowItWorks from "@/components/howItWorks/howItWorks";
import CatList from "@/components/catList/catList";
import LandingCTA from "@/components/landingCTA/landingCTA";
import LandingReviews from "@/components/landingReviews/landingReviews";


export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center gap-4">

        <Header />
        <WelcomeDesc />
        {/* <HowItWorks /> */}
        <CatList />
        <LandingCTA />
        <LandingReviews />


      </main>
    </div>
  );
}
