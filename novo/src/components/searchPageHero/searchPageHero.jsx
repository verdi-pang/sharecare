import SearchBar from "../searchbar/searchBar";

const SearchPageHero = () => {
  return (
    <div className="mx-2 mt-6 flex flex-col gap-2 rounded-xl border border-solid border-indigo-900 border-opacity-20 bg-indigo-900 bg-opacity-10 px-3 py-6 lg:w-3/5 lg:self-center">
      <header className="self-center text-center text-2xl font-semibold leading-9 text-indigo-900">
        Discover, Share, Find
      </header>
      <p className="text-neutral-500 pb-2 text-center text-sm font-light leading-7">
        Explore a world of possibilities with Novo's search bar. Whether you're
        sharing your treasures or seeking something special, our platform
        connects you to a diverse range of items. Experience the joy of sharing
        and the excitement of finding whatever you need, right at your
        fingertips.
      </p>
      <SearchBar />
    </div>
  );
};

export default SearchPageHero;
