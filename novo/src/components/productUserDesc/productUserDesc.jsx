const ProductUserDesc = () => {
    return (
        <div className="flex flex-col p-4 mt-5 w-full text-sm">
            <div className="text-2xl leading-7 text-black">More about John D.</div>
            <div className="flex gap-2.5 mt-4 tracking-wide">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cec5b0a704f44a0f36f17c58e539ecb4ba2fd921f2be7378180954722c34a7f?apiKey=fc5a05627a354b75a7bb231268befd18&"
                    className="shrink-0 self-start w-9 aspect-square"
                />
                <div className="flex flex-col flex-1">
                    <div className="flex gap-2.5 self-start text-gray-600 whitespace-nowrap leading-[143%]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ad89a864d2a94a810acaa544efef17561137dd235966b5629071777d6e1f9c?apiKey=fc5a05627a354b75a7bb231268befd18&"
                            className="shrink-0 my-auto aspect-[1.06] fill-stone-900 w-[17px]"
                        />
                        <div>(23)</div>
                    </div>
                    <div className="mt-2.5 leading-5 text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
                        urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus
                        urna.
                    </div>
                </div>
            </div>
            <div className="justify-center items-center px-6 py-2.5 mt-4 font-medium tracking-normal text-center bg-purple-300 leading-[143%] rounded-[100px] text-violet-950">
                Message John
            </div>
            <div className="justify-center items-center px-6 py-2.5 mt-4 font-medium tracking-normal text-center bg-purple-300 leading-[143%] rounded-[100px] text-violet-950">
                See John’s profile
            </div>
        </div>
    );
}

export default ProductUserDesc;