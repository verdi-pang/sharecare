import { Person, Star } from "@mui/icons-material";

const ProductUserDesc = () => {
    return (
        <div className="flex flex-col px-3 py-8 mt-5 bg-amber-400 bg-opacity-10 text-sm">
            <div className="text-2xl leading-7 font-semibold text-tert self-center">More about John D.</div>
            <div className="flex flex-col gap-2.5 mt-4 tracking-wide py-3">
                <div className="flex flex-row gap-2">
                    <Person className="self-start" />
                    <div className="flex flex-col gap-2 px-3">
                        <div className="flex flex-row justify-between">
                            <p className="text-primary text-lg font-medium self-center">Johan D.
                            </p>
                            <div className="flex gap-2.5 text-gray-600 whitespace-nowrap leading-[143%]">
                                <Star className="self-center" color="tert" />
                                <div className="self-center">(23)</div>
                            </div>
                        </div>

                        <div className="flex flex-col self-center">

                            <p className="mt-2.5 leading-5 text-black">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
                                urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus
                                urna.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="justify-center items-center px-6 py-4 mt-4 text-lg font-medium tracking-normal leading-5 text-center text-primary bg-white border border-primary rounded-lg shadow shadow-primary">
                Message John
            </div>
            <div className="justify-center items-center px-6 py-4 mt-4 text-lg font-medium tracking-normal leading-5 text-center text-primary bg-slate-300 border border-primary rounded-lg shadow shadow-primary">
                See John’s profile
            </div>
        </div>
    );
}

export default ProductUserDesc;