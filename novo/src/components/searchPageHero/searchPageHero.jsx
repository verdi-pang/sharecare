import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const SearchPageHero = () => {
    return (
        <div className="flex flex-col mt-6 mx-2 px-3 py-6 rounded-xl border border-black border-solid gap-2">
            <div className="self-start ml-2.5 text-3xl leading-9 text-black">
                Discover, Share, Find
            </div>
            <div className="mx-2.5 mt-8 text-sm font-medium tracking-normal leading-5 text-black mb-4">
                Explore a world of possibilities with Novo's search bar. Whether you're
                sharing your treasures or seeking something special, our platform
                connects you to a diverse range of items. Experience the joy of sharing
                and the excitement of finding whatever you need, right at your
                fingertips.
            </div>
            <div className="flex flex-row w-full border-2 border-solid border-black justify-between rounded-xl align-center rounded-l-lg overflow-hidden">
                <input type="text" placeholder='Find what you are looking for' className='w-full p-4' />
                <Button variant='containted' className='p-4 rounded-r-lg w-fit bg-blue-400'><SearchIcon /></Button>
            </div>
            {/* <div className="flex gap-1 justify-between pl-3 mt-6 bg-white rounded-[100px]">
                <div className="my-auto text-base font-medium tracking-normal leading-6 text-zinc-500">
                    What are you looking for today?
                </div>
                <div className="flex justify-center items-center px-6 py-2.5 bg-slate-500 rounded-[100px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3a1e5fc3fbd2a2413a44b5b6d94b18551c103a570fae834b28229ce0952c5a?apiKey=fc5a05627a354b75a7bb231268befd18&"
                        className="w-6 aspect-square"
                    />
                </div>
            </div> */}
        </div>
    );
}

export default SearchPageHero;