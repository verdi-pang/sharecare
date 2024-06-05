'use client';

import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
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
            params.set('query', searchTerm);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div className="flex z-10 gap-2 py-1 pr-1 pl-1.5 bg-white rounded-lg border border-indigo-900 border-solid shadow shadow-primary">
            <div className="flex flex-auto gap-2.5 my-auto font-light text-indigo-900">
                <SearchIcon />
                <input type="text" placeholder='Find what you are looking for' className='flex-auto' defaultValue={searchParams.get('query')?.toString()} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <button
                className="justify-center px-4 py-4 text-white whitespace-nowrap bg-indigo-900 rounded-md"
                type="button"
                onClick={() => { handleSearch(searchValue) }}>
                Search
            </button>

        </div>
    );
}

export default SearchBar;