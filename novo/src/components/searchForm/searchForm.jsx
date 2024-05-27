import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchForm = () => {
    // const searchParams = useSearchParams();

    const router = useRouter();
    const [searchValue, setSearchValue] = useState();


    return (

        <div className='p-3'>
            <form className="flex z-10 gap-5 py-1 pr-1 pl-3.5 bg-white rounded-lg border border-indigo-900 border-solid shadow shadow-primary">
                <div className="flex flex-auto gap-2.5 my-auto font-light text-indigo-900">
                    <SearchIcon />
                    {/* <label htmlFor="searchInput" className="sr-only text-sm">
                    Find what you are looking for
                </label> */}
                    <input
                        className="flex-auto"
                        type="text"
                        id="searchInput"
                        placeholder="Find what you are looking for"
                        aria-label="Find what you are looking for"
                        defaultValue={null}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <button
                    className="justify-center px-4 py-4 text-white whitespace-nowrap bg-indigo-900 rounded-md"
                    type="button"
                    onClick={() => {
                        if (searchValue != null) {
                            router.push(`/product?query=${searchValue}`)
                        } else {
                            router.push('/product')
                        }
                    }}
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchForm;