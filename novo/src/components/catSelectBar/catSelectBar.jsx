// import React, { useState } from "react";

import Link from "next/link";
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
    return (
        <div className="flex gap-1 text-sm font-medium tracking-normal leading-5 text-center text-slate-500 overflow-x-auto text-nowrap">
            {catMenu.map((cat) => (
                <Link href={{ query: { category: cat.query } }}>
                    <div className={`content-center justify-center px-6 py-2 rounded-[100px] + ${catSelect === cat ? "text-white bg-slate-500" : "border border-solid bg-white"}`}
                        key={cat.query}
                        onClick={() => setCatSelectOpen(cat)}>
                        {cat.name}
                    </div>
                </Link>

            ))}

        </div>
    );
}

export default CatSelectBar;