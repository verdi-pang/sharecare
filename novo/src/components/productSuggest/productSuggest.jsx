const ProductSuggest = () => {
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
    <div className="mt-3.5 flex flex-col bg-amber-400 bg-opacity-10 px-4 pb-8 pt-6 text-primary">
      <div className="self-center text-2xl font-bold leading-7">
        Check out other categories
      </div>
      <div className="mt-3 flex w-full flex-col flex-wrap content-start py-2.5 text-center text-sm font-medium leading-5 tracking-normal text-slate-500">
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
    </div>
  );
};

export default ProductSuggest;
