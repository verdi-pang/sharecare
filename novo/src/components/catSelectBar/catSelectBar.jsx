// import React, { useState } from "react";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const catMenu = [
    { name: 'Camping', query: 'camping' },
    { name: 'Film & Photography', query: 'filmPhotography' },
    { name: 'Drones', query: 'drones' },
    { name: 'Eletronics', query: 'electronics' },
    { name: 'Home Decorations', query: 'homeDecor' },
    { name: 'Scooters', query: 'scooter' }
]


const CatSelectBar = () => {
    const [catSelect, setCatSelectOpen] = useState(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [searchValue, setSearchValue] = useState();

    const handleSearch = (searchTerm) => {
        const params = new URLSearchParams(searchParams);
        if (searchTerm) {
            params.set('query', searchTerm);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    const selectedCat = (searchTerm, cat) => {
        handleSearch(searchTerm);
        setCatSelectOpen(cat)
    }
    return (
        <div className="flex gap-1 text-sm font-medium tracking-normal leading-5 text-center text-slate-500 overflow-x-auto text-nowrap">
            {catMenu.map((cat, index) => (

                <div className={`content-center justify-center px-6 py-2 rounded-[100px] + ${catSelect === cat ? "text-white bg-slate-500" : "border border-solid bg-white"}`}
                    key={index}
                    onClick={() => selectedCat(cat.query, cat)}>
                    {cat.name}
                </div>


            ))}

        </div>
    );
}

export default CatSelectBar;