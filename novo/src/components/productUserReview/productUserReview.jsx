import { Star, VerifiedUser } from "@mui/icons-material";

const ProductUserReview = () => {
    return (
        <div className="flex flex-col p-4 mt-3 w-fit">
            <div className="text-2xl leading-7 text-primary font-semibold self-center mb-3">John’s reviews</div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col border border-solid border-primary shadow shadow-primary rounded-lg px-3 py-4">
                    <div className="text-md font-md text-secondary p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
                        urna, sollicitudin in pretium in.
                    </div>
                    <div className="flex flex-row justify-between px-2">
                        <VerifiedUser className="self-center" />
                        <div className="flex flex-col">
                            <p className="text-based text-primary font-semibold">
                                Darlene Robertson
                            </p>
                            <p className="text-sm text-secondary font-light">
                                MasterCard
                            </p>
                        </div>
                        <div className="self-center text-tert">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col border border-solid border-primary shadow shadow-primary rounded-lg px-3 py-4">
                    <div className="text-md font-md text-secondary p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
                        urna, sollicitudin in pretium in.
                    </div>
                    <div className="flex flex-row justify-between px-2">
                        <VerifiedUser className="self-center" />
                        <div className="flex flex-col">
                            <p className="text-based text-primary font-semibold">
                                Darlene Robertson
                            </p>
                            <p className="text-sm text-secondary font-light">
                                MasterCard
                            </p>
                        </div>
                        <div className="self-center text-tert">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>

                </div>
            </div>

            <div className="justify-center items-center px-6 py-4 mt-4 text-lg font-medium tracking-normal leading-5 text-center text-primary bg-slate-300 border border-primary rounded-lg shadow shadow-primary">
                See all reviews
            </div>
        </div>
    );
}

export default ProductUserReview;