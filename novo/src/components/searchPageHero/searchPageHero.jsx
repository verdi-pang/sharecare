
import SearchBar from '../searchbar/searchBar';

const SearchPageHero = () => {

    return (
        <div className="flex flex-col mt-6 mx-2 px-3 py-6 rounded-xl bg-indigo-900 bg-opacity-10 border border-solid  border-indigo-900 border-opacity-20 gap-2">
            <header className="self-center text-2xl font-semibold leading-9 text-center text-indigo-900"
            >
                Discover, Share, Find
            </header>
            <p className="text-sm pb-2 font-light leading-7 text-center text-neutral-500"
            >
                Explore a world of possibilities with Novo's search bar. Whether you're
                sharing your treasures or seeking something special, our platform
                connects you to a diverse range of items. Experience the joy of sharing
                and the excitement of finding whatever you need, right at your
                fingertips.
            </p>
            <SearchBar />
        </div>
    );
}

export default SearchPageHero;