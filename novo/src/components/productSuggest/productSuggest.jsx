const ProductSuggest = () => {
    return (
        <div className="flex flex-col mt-3.5 px-4 text-black">
            <div className="text-2xl leading-7">Check out other categories
            </div>
            <div className="flex flex-col flex-wrap content-start  py-2.5 mt-3 w-full text-sm font-medium tracking-normal leading-5 text-center text-slate-500">
                <div className="flex gap-2.5">
                    <div className="justify-center px-4 py-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                        Camping Lights
                    </div>
                    <div className="justify-center px-4 py-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                        Camping Backpacks
                    </div>
                </div>
                <div className="flex-wrap justify-center content-center px-4 py-2.5 mt-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                    Air Mattresses & Bedding
                </div>
                <div className="flex gap-1.5 self-start mt-2.5">
                    <div className="flex flex-col">
                        <div className="flex-wrap justify-center content-center px-4 py-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                            Camping Stove
                        </div>
                        <div className="flex-wrap justify-center content-center px-4 py-2.5 mt-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                            Sleeping Bags
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex-wrap justify-center content-center px-4 py-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                            Pest Control
                        </div>
                        <div className="flex-wrap justify-center content-center px-4 py-2.5 mt-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                            Camping Electronics
                        </div>
                    </div>
                </div>
                <div className="flex gap-2.5 mt-2.5">
                    <div className="flex-wrap justify-center content-center px-4 py-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                        Camping Electronics
                    </div>
                    <div className="flex-wrap justify-center content-center px-4 py-2.5 bg-white border border-solid border-slate-500 rounded-[100px]">
                        Camping Tools
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSuggest;