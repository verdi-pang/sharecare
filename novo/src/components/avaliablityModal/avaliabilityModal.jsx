"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import { RangeCalendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone } from '@internationalized/date';
import { Close } from "@mui/icons-material";






const AvaliabilityModal = () => {
    const searchParams = useSearchParams();
    const avaliabilityModal = searchParams.get("avaliabilityModal");
    const customParamID = searchParams.get("id");
    const customParamImgUrl = searchParams.get("imgUrl");
    const customParamOwnerName = searchParams.get("ownerName")
    const customParamOwnerLocation = searchParams.get("ownerLocation")
    const customParamCat = searchParams.get("cat");
    const customParamSubCat = searchParams.get("subCat");
    const pathname = usePathname();
    const [value, setValue] = useState({
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 }),

    });

    const deleteQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.delete(name, value)
            return params.toString()
        },
        [searchParams]
    );

    return (
        <>
            {avaliabilityModal &&
                <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="fixed bottom-0 w-full bg-white m-auto px-8 pt-9 pb-8 rounded-t-xl">
                        <Link href={pathname + '?' + deleteQueryString('avaliabilityModal', true)} >
                            <div className="absolute top-2 right-4 border border-solid border-red rounded-[100px] p-1"><Close /></div>
                        </Link>

                        <div className="flex flex-col items-center pt-4">

                            <RangeCalendar
                                aria-label="Date (Controlled)"
                                defaultValue={value}
                                onChange={setValue}
                                minValue={today(getLocalTimeZone())}
                            />

                            <br />

                            <Link href={{ pathname: '/check', query: { id: customParamID, imgUrl: customParamImgUrl, ownerName: customParamOwnerName, ownerLocation: customParamOwnerLocation, cat: customParamCat, subCat: customParamSubCat } }} >
                                <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 bg-slate-300 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">Confirm</div>
                            </Link>
                        </div>
                    </div>
                </dialog>}
        </>
    );
}

export default AvaliabilityModal;