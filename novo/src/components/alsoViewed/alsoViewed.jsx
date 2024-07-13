import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

const AlsoViewed = () => {
  return (
    <div className="mt-3.5 flex flex-col p-4 text-black">
      <div className="self-center text-2xl font-semibold leading-7 text-primary">
        People also Viewed
      </div>
      <div className="mt-4 flex justify-center gap-5">
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

              <div className="mt-1 h-px shrink-0 border border-solid border-black bg-black" />
              <div className="text-neutral-500 mt-1 flex justify-between gap-5 text-sm leading-4">
                <div className="flex gap-1.5">
                  <div className="tracking-wide text-black">Jane D.</div>
                </div>
                <div className="my-auto flex gap-1.5 whitespace-nowrap">
                  <StarIcon fontSize="10" color="secondary" />
                  <div className="text-sm text-gray-600">(23)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

              <div className="mt-1 h-px shrink-0 border border-solid border-black bg-black" />
              <div className="text-neutral-500 mt-1 flex justify-between gap-5 text-sm leading-4">
                <div className="flex gap-1.5">
                  <div className="tracking-wide text-black">Jane D.</div>
                </div>
                <div className="my-auto flex gap-1.5 whitespace-nowrap">
                  <StarIcon fontSize="10" color="secondary" />
                  <div className="text-sm text-gray-600">(23)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 items-center justify-center rounded-lg border border-primary bg-slate-300 px-6 py-4 text-center text-lg font-medium leading-5 tracking-normal text-primary shadow shadow-primary lg:w-fit lg:self-center">
        See similar listings
      </div>
    </div>
  );
};

export default AlsoViewed;
