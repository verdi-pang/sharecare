import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const ConfirmationButtons = () => {
  return (
    <div className="mt-4 flex w-full flex-col content-center gap-4 text-center text-sm font-medium leading-5 tracking-normal lg:w-3/5 lg:self-center">
      <Link href={"/"}>
        <div className="mt-4 min-w-fit grow items-center justify-center rounded-lg border border-primary bg-white px-10 py-4 text-center text-lg font-semibold leading-5 tracking-normal text-primary shadow shadow-primary">
          Share your item
        </div>
      </Link>
      <Link href={"/product"}>
        <div className="mt-4 flex min-w-fit grow items-center justify-center rounded-lg border border-primary bg-slate-300 px-6 py-4 text-center text-lg font-semibold leading-5 tracking-normal text-primary shadow shadow-primary">
          <ChevronLeftIcon className="self-center" />
          <div>Back to listing</div>
        </div>
      </Link>
    </div>
  );
};

export default ConfirmationButtons;
