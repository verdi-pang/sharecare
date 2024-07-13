import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

const ProductUserMore = ({ ownerName }) => {
  return (
    <div className="mt-3.5 flex flex-col p-4 lg:w-3/5 lg:self-center">
      <h1 className="self-center text-2xl font-semibold leading-7 text-primary">
        More Listings from {ownerName}
      </h1>
      <div className="mt-4 flex justify-center gap-5">
        <div className="flex w-[165px] flex-col overflow-hidden rounded-xl border border-solid border-indigo-900 bg-white sm:min-w-[165px]">
          <div className="relative flex aspect-[1.25] h-[150px] w-[163px] flex-col items-end self-center overflow-hidden px-16 pb-20 pt-2.5">
            <Image
              src="/img/drone.jpg"
              style={{ layout: "fill", objectFit: "cover" }}
              fill
              objectFit="cover"
              alt="item"
            />
          </div>

          <div className="mt-3 flex min-h-fit w-[160px] flex-col gap-2 px-3.5 pb-4">
            <p className="text-base font-semibold leading-4 text-indigo-900">
              Small Drone
            </p>

            <div className="mt-1 flex gap-3 whitespace-nowrap">
              <div className="text-neutral-500 grow self-center text-sm leading-3">
                Surrey
              </div>
              <div className="flex-auto text-base font-semibold leading-4 text-indigo-900">
                $20/Day
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[165px] flex-col overflow-hidden rounded-xl border border-solid border-indigo-900 bg-white sm:min-w-[165px]">
          <div className="relative flex aspect-[1.25] h-[150px] w-[163px] flex-col items-end self-center overflow-hidden px-16 pb-20 pt-2.5">
            <Image
              src="/img/drone.jpg"
              style={{ layout: "fill", objectFit: "cover" }}
              fill
              objectFit="cover"
              alt="item"
            />
          </div>

          <div className="mt-3 flex min-h-fit w-[160px] flex-col gap-2 px-3.5 pb-4">
            <p className="text-lg font-semibold leading-4 text-indigo-900">
              Small Drone
            </p>

            <div className="mt-1 flex gap-3 whitespace-nowrap">
              <div className="text-neutral-500 grow self-center text-sm leading-3">
                Surrey
              </div>
              <div className="flex-auto text-base font-semibold leading-4 text-indigo-900">
                $20/Day
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-fit items-center justify-center self-center rounded-lg border border-primary bg-slate-300 px-6 py-4 text-center text-lg font-medium leading-5 tracking-normal text-primary shadow shadow-primary">
        See more listings from John
      </div>
    </div>
  );
};

export default ProductUserMore;
