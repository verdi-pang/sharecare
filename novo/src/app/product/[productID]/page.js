"use client"

import AlsoViewed from "@/components/alsoViewed/alsoViewed";
import LandingCTA from "@/components/landingCTA/landingCTA";
import ProductDesc from "@/components/productDesc/productDesc";
import ProductFAQ from "@/components/productFAQ/productFAQ";
import ProductHeader from "@/components/productHeader/productHeader";
import ProductSuggest from "@/components/productSuggest/productSuggest";
import ProductUserDesc from "@/components/productUserDesc/productUserDesc";
import ProductUserMore from "@/components/productUserMore/productUserMore";
import ProductUserReview from "@/components/productUserReview/productUserReview";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ProductDetails() {
    const searchParams = useSearchParams();
    const customParamID = searchParams.get("id");
    const customParamImgUrl = searchParams.get("imgUrl");
    const customParamOwnerName = searchParams.get("ownerName")
    const customParamOwnerLocation = searchParams.get("ownerLocation")
    const router = useRouter();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row content-center font-bold" onClick={router.back}><ChevronLeftIcon />
                <div>Back</div>
            </div>
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