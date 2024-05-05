import Link from "next/link";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ConfirmationButtons = () => {
    return (
        <div className="flex flex-col gap-4 mt-4 text-sm font-medium tracking-normal leading-5 text-center w-full content-center">
            <Link href={"/"}>
                <div className="justify-center items-center px-6 py-2.5 whitespace-nowrap bg-purple-300 rounded-lg text-violet-950">
                    Share your item
                </div>
            </Link>
            <Link href={"/product"}>
                <div className="flex flex-row justify-center content-center items-center px-6 py-2.5 text-white bg-slate-500 rounded-lg">
                    <ChevronLeftIcon className="self-center" />
                    <div>Back to listing</div>


                </div>
            </Link>
        </div>
    );
}

export default ConfirmationButtons;