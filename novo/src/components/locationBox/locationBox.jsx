import AdjustIcon from "@mui/icons-material/Adjust";
const LocationBox = () => {
  return (
    <div className="mx-2 py-2 lg:w-3/5 lg:self-center">
      <div className="flex gap-2 rounded-xl border border-solid border-amber-400 bg-amber-400 bg-opacity-20 px-4 py-5 text-black">
        <AdjustIcon className="self-center" />
        <p className="text-neutral-500 my-auto flex-auto text-base leading-5">
          Results for Toronto :
        </p>
        <p className="flex-auto content-center text-base font-semibold leading-4 text-indigo-900">
          42 Items near you
        </p>
      </div>
    </div>
  );
};

export default LocationBox;
