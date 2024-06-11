import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const ProductHeaderPressables = (params) => {
    const queryPath = useSearchParams();
    const pathname = usePathname();
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(queryPath)
            params.set(name, value)

            return params.toString()
        },
        [queryPath]
    );

    const [planSelected, setPlanSelected] = useState(1);
    return (
        <div className="text-primary">
            <div className="text-2xl font-semibold">{params.id}</div>
            <div className="flex gap-2.5 pb-2.5 mt-4 whitespace-nowrap text-center">
                <div className={`flex flex-col flex-1 p-4 rounded-lg border border-primary border-solid + ${planSelected === 1 ? "shadow shadow-primary" : " "}`} onClick={() => setPlanSelected(1)}>
                    <div className="self-center text-lg leading-6">Daily</div>
                    <div className="mt-3 text-2xl leading-7 font-semibold">$20.00/day</div>
                </div>
                <div className={`flex flex-col flex-1 p-4 rounded-lg border border-primary border-solid + ${planSelected === 2 ? "shadow shadow-primary" : " "}`} onClick={() => setPlanSelected(2)}>
                    <div className="self-center text-lg leading-6">Weekly</div>
                    <div className="mt-3 text-2xl leading-7 font-semibold">$10.00/day</div>
                </div>
            </div>
            <div className="justify-center items-center px-6 py-4 mt-4 text-lg font-semibold tracking-normal leading-5 text-center text-primary bg-slate-300 rounded-lg shadow shadow-primary border border-primary">
                <Link href={pathname + '?' + createQueryString('avaliabilityModal', true)}>Check availability</Link>
            </div>
        </div>
    );
}

export default ProductHeaderPressables;