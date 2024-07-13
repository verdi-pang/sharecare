"use client";

import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
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
  return (
    <div className="z-10 flex gap-2 rounded-lg border border-solid border-indigo-900 bg-white py-1 pl-1.5 pr-1 shadow shadow-primary">
      <div className="my-auto flex flex-auto gap-2.5 font-light text-indigo-900">
        <SearchIcon />
        <input
          type="text"
          placeholder="Find what you are looking for"
          className="flex-auto"
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <button
        className="justify-center whitespace-nowrap rounded-md bg-indigo-900 px-4 py-4 text-white"
        type="button"
        onClick={() => {
          handleSearch(searchValue);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
