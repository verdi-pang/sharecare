"use client";
import Link from "next/link";
import { useState } from "react";
const ProfileDisplay = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div className="px-6 my-6">
            <div className="flex flex-row gap-8 justify-center">
                <Link href={"/dashboard/profile/rentals"}>
                    <div className={`px-6 py-3 text-lg font-medium rounded-lg + ${selected === 0 ? "bg-sky-800 text-white" : "border border-sky-600"}`} onClick={() => setSelected(0)}>Rentals</div>
                </Link>
                <Link href={"/dashboard/profile/reviews"}>
                    <div className={`px-6 py-3 text-lg font-medium rounded-lg + ${selected === 1 ? "bg-sky-800 text-white" : "border border-sky-600"}`} onClick={() => setSelected(1)}>Reviews</div>
                </Link>
            </div>

        </div >
    );
}

export default ProfileDisplay;