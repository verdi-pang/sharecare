const CatListSuggest = () => {
  const ItemList = [
    "Camping Lights",
    "Camping Backpacks",
    "Air Mattresses & Bedding",
    "Camping Stove",
    "Sleeping Bags",
    "Pest Control",
    "Camping Electronics",
    "Camping Tools",
  ];
  return (
    <div className="mt-3 flex flex-col flex-wrap content-start justify-center px-4 py-2.5 text-center text-sm font-medium leading-5 tracking-normal text-slate-500 lg:w-2/3 lg:self-center">
      <div className="flex flex-wrap gap-2.5">
        {ItemList.map((item, index) => (
          <div
            className="justify-center rounded-lg border border-solid border-slate-500 bg-white px-4 py-2.5"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatListSuggest;
