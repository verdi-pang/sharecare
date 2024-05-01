import Link from "next/link";

const ProductHeaderPressables = () => {
    return (
        <div>
            <div className="text-2xl">2 Person Dome Tent</div>
            <div className="flex gap-2.5 pb-2.5 mt-4 whitespace-nowrap text-center">
                <div className="flex flex-col flex-1 p-4 rounded-xl border border-black border-solid">
                    <div className="self-center text-lg leading-6">Daily</div>
                    <div className="mt-3 text-2xl leading-7">$20.00/day</div>
                </div>
                <div className="flex flex-col flex-1 p-4 rounded-xl border border-black border-solid">
                    <div className="self-center text-lg leading-6">Weekly</div>
                    <div className="mt-3 text-2xl leading-7">$10.00/day</div>
                </div>
            </div>
            <div className="justify-center items-center px-6 py-2.5 mt-4 text-sm font-medium tracking-normal leading-5 text-center text-white bg-slate-500 rounded-[100px]">
                <Link href="?avaliabilityModal=true">Check availability</Link>
            </div>
        </div>
    );
}

export default ProductHeaderPressables;