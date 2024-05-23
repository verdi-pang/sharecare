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
        <div className="flex flex-row w-full border-2 border-solid border-black justify-between rounded-xl align-center rounded-l-lg overflow-hidden bg-white shadow-md">

            <input type="text" placeholder='Find what you are looking for' className='w-full p-4' defaultValue={searchParams.get('query')?.toString()} onChange={(e) => setSearchValue(e.target.value)} />
            <Button variant='containted' className='p-4 rounded-r-lg w-fit bg-blue-400' onClick={() => { handleSearch(searchValue) }}><SearchIcon /></Button>
        </div>
    );
}

export default SearchBar;