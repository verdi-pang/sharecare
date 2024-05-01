import AlsoViewed from "@/components/alsoViewed/alsoViewed";
import LandingCTA from "@/components/landingCTA/landingCTA";
import ProductDesc from "@/components/productDesc/productDesc";
import ProductFAQ from "@/components/productFAQ/productFAQ";
import ProductHeader from "@/components/productHeader/productHeader";
import ProductSuggest from "@/components/productSuggest/productSuggest";
import ProductUserDesc from "@/components/productUserDesc/productUserDesc";
import ProductUserMore from "@/components/productUserMore/productUserMore";
import ProductUserReview from "@/components/productUserReview/productUserReview";

export default function ProductDetails({ params }) {
    console.log(params)
    return (
        <div className="flex flex-col gap-4">
            {/* This is {params.productID} */}
            <ProductHeader />
            <ProductDesc />
            <ProductUserDesc />
            <ProductUserMore />
            <ProductUserReview />
            <ProductFAQ />
            <AlsoViewed />
            <ProductSuggest />
            <LandingCTA />
        </div>
    )
}