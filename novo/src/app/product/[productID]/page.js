"use client"

import AlsoViewed from "@/components/alsoViewed/alsoViewed";
import AvaliabilityModal from "@/components/avaliablityModal/avaliabilityModal";
import LandingCTA from "@/components/landingCTA/landingCTA";
import ProductDesc from "@/components/productDesc/productDesc";
import ProductFAQ from "@/components/productFAQ/productFAQ";
import ProductHeader from "@/components/productHeader/productHeader";
import ProductSuggest from "@/components/productSuggest/productSuggest";
import ProductUserDesc from "@/components/productUserDesc/productUserDesc";
import ProductUserMore from "@/components/productUserMore/productUserMore";
import ProductUserReview from "@/components/productUserReview/productUserReview";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function ProductDetails() {
    const searchParams = useSearchParams();
    const customParamID = searchParams.get("id");
    const customParamImgUrl = searchParams.get("imgUrl");
    const customParamOwnerName = searchParams.get("ownerName")
    const customParamOwnerLocation = searchParams.get("ownerLocation")

    return (
        <div className="flex flex-col gap-4">
            {/* This is {params.productID} */}
            <ProductHeader id={customParamID} imgUrl={customParamImgUrl} ownerLocation={customParamOwnerLocation} />
            <ProductDesc ownerName={customParamOwnerName} />
            <ProductUserDesc ownerName={customParamOwnerName} />
            <ProductUserMore ownerName={customParamOwnerName} />
            <ProductUserReview ownerName={customParamOwnerName} />
            <ProductFAQ />
            <AlsoViewed />
            <ProductSuggest />
            <LandingCTA />

        </div>
    )
}