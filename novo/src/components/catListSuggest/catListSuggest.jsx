const CatListSuggest = () => {
    const ItemList = [
        "Camping Lights", "Camping Backpacks", "Air Mattresses & Bedding", "Camping Stove", "Sleeping Bags", "Pest Control", "Camping Electronics", "Camping Tools"
    ]
    return (
        <div className="flex flex-col flex-wrap content-start px-4 py-2.5 mt-3 w-full text-sm font-medium tracking-normal leading-5 text-center text-slate-500 justify-center">
            <div className="flex flex-wrap gap-2.5">
                {ItemList.map((item, key) =>
                    <div className="justify-center px-4 py-2.5 bg-white border border-solid border-slate-500 rounded-lg" key={key}>
                        {item}
                    </div>)}

            </div>

        </div>
    );
}

export default CatListSuggest;