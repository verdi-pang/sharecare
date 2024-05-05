// import React, { useState } from "react";

const catMenu = ['Camping', 'Film & Photography', 'Drones', 'Eletronics', 'Home Decorations', 'Scooters']


const CatSelectBar = () => {
    // const [catSelect, setCatSelectOpen] = useState(false);
    return (
        <div className="flex gap-1 text-sm font-medium tracking-normal leading-5 text-center text-slate-500 overflow-x-auto">
            {/* {catMenu.map((cat) => (
                <div className={`${catSelect ? "content-center justify-center px-6 py-2 text-white whitespace-nowrap border border-white border-solid bg-slate-500 rounded-[100px]" : "content-center justify-center px-6 py-2 text-white whitespace-nowrap border border-white border-solid bg-white rounded-[100px]"}`} key={cat} onClick={() => setCatSelectOpen(!catSelect)}>
                    {cat}
                </div>

            ))} */}
            <div className="flex gap-1 mt-2 text-sm font-medium tracking-normal leading-5 text-center text-slate-500">
                <div className="content-center justify-center px-6 py-2 text-white border border-white border-solid bg-slate-500 rounded-[100px]">
                    Camping
                </div>
                <div className="content-center justify-center px-6 py-2 bg-white border border-solid border-slate-500 rounded-[100px]">
                    Film & Photography
                </div>
                <div className="content-center justify-center px-6 py-2  border border-solid border-slate-500 rounded-[100px]">
                    Drones
                </div>
                <div className="content-center justify-center px-6 py-2  border border-solid border-slate-500 rounded-[100px]">
                    Eletronics
                </div>
                <div className="content-center justify-center px-6 py-2 border border-solid border-slate-500 rounded-[100px]">
                    Home Decorations
                </div>
                <div className="content-center justify-center px-6 py-2 border border-solid border-slate-500 rounded-[100px]">
                    Scooters
                </div>
            </div>
        </div>
    );
}

export default CatSelectBar;