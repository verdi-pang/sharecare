"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';




const AvaliabilityModal = () => {
    const searchParams = useSearchParams();
    const avaliabilityModal = searchParams.get("avaliabilityModal");
    const pathname = usePathname();
    const [value, setValue] = useState(new Date());
    function onChange(nextValue) {
        setValue(nextValue)
    }
    return (
        <>
            {avaliabilityModal &&
                <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="fixed bottom-0 w-full bg-white m-auto p-8">
                        <div className="flex flex-col items-center">
                            <Calendar onChange={onChange} value={value} />
                            <br />
                            <Link href={pathname}>
                                <button type="button" className="bg-red-500 text-white p-2">Close Modal</button>
                            </Link>
                        </div>
                    </div>
                </dialog>}
        </>
    );
}

export default AvaliabilityModal;