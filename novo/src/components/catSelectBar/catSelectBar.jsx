// import React, { useState } from "react";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const catMenu = [
  { name: "Camping", query: "camping" },
  { name: "Film & Photography", query: "filmPhotography" },
  { name: "Drones", query: "drones" },
  { name: "Eletronics", query: "electronics" },
  { name: "Home Decorations", query: "homeDecor" },
  { name: "Scooters", query: "scooter" },
];

const CatSelectBar = () => {
  const [catSelect, setCatSelectOpen] = useState(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchValue, setSearchValue] = useState();

  const handleSearch = (searchTerm) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  const selectedCat = (searchTerm, cat) => {
    handleSearch(searchTerm);
    setCatSelectOpen(cat);
  };
  return (
    <div className="flex gap-1.5 overflow-x-auto text-nowrap p-3 text-center text-sm font-medium leading-5 tracking-normal text-slate-500 lg:w-3/5 lg:self-center">
      {catMenu.map((cat, index) => (
        <div
          className={`+ content-center justify-center rounded-[100px] px-6 py-2 ${catSelect === cat ? "border border-solid border-indigo-900 shadow shadow-primary" : "border border-solid bg-white"}`}
          key={index}
          onClick={() => selectedCat(cat.query, cat)}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default CatSelectBar;
