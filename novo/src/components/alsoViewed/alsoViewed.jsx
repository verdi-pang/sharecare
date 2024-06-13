import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';


const AlsoViewed = () => {
    return (
        <div className="flex flex-col p-4 mt-3.5 w-full text-black">
            <div className="text-2xl font-semibold text-primary leading-7 self-center">People also Viewed</div>
            <div className="flex gap-5 mt-4 justify-center">
                <div className="flex gap-5 mt-4 justify-center">
                    <div className="flex flex-col bg-white rounded-xl border border-indigo-900 border-solid overflow-hidden w-[165px] sm:min-w-[165px]">

                        <div className='flex overflow-hidden relative flex-col items-end self-center px-16 pt-2.5 pb-20 aspect-[1.25] w-[163px] h-[150px]'>
                            <Image src="/img/drone.jpg"
                                style={{ layout: "fill", objectFit: "cover" }}
                                fill
                                objectFit="cover"
                                alt="item"
                            />
                        </div>


                        <div className="flex flex-col pb-4 gap-2 px-3.5 mt-3 w-[160px] min-h-fit">
                            <p className="text-base leading-4 text-indigo-900 font-semibold">
                                Small Drone
                            </p>

                            <div className="flex gap-3 mt-1 whitespace-nowrap">
                                <div className="grow text-sm leading-3 text-neutral-500 self-center">
                                    Surrey
                                </div>
                                <div className="flex-auto text-base font-semibold leading-4 text-indigo-900">
                                    $20/Day
                                </div>
                            </div>

                            <div className="shrink-0 mt-1 h-px bg-black border border-black border-solid" />
                            <div className="flex gap-5 justify-between mt-1 text-sm leading-4 text-neutral-500">
                                <div className="flex gap-1.5">
                                    <div className="tracking-wide text-black">Jane D.</div>
                                </div>
                                <div className="flex gap-1.5 my-auto whitespace-nowrap">
                                    <StarIcon fontSize="10" color="secondary" />
                                    <div className="text-sm text-gray-600">(23)</div>
                                </div>


                            </div>



                        </div>

                    </div>
                </div>
                <div className="flex gap-5 mt-4 justify-center">
                    <div className="flex flex-col bg-white rounded-xl border border-indigo-900 border-solid overflow-hidden w-[165px] sm:min-w-[165px]">

                        <div className='flex overflow-hidden relative flex-col items-end self-center px-16 pt-2.5 pb-20 aspect-[1.25] w-[163px] h-[150px]'>
                            <Image src="/img/drone.jpg"
                                style={{ layout: "fill", objectFit: "cover" }}
                                fill
                                objectFit="cover"
                                alt="item"
                            />
                        </div>


                        <div className="flex flex-col pb-4 gap-2 px-3.5 mt-3 w-[160px] min-h-fit">
                            <p className="text-base leading-4 text-indigo-900 font-semibold">
                                Small Drone
                            </p>

                            <div className="flex gap-3 mt-1 whitespace-nowrap">
                                <div className="grow text-sm leading-3 text-neutral-500 self-center">
                                    Surrey
                                </div>
                                <div className="flex-auto text-base font-semibold leading-4 text-indigo-900">
                                    $20/Day
                                </div>
                            </div>

                            <div className="shrink-0 mt-1 h-px bg-black border border-black border-solid" />
                            <div className="flex gap-5 justify-between mt-1 text-sm leading-4 text-neutral-500">
                                <div className="flex gap-1.5">
                                    <div className="tracking-wide text-black">Jane D.</div>
                                </div>
                                <div className="flex gap-1.5 my-auto whitespace-nowrap">
                                    <StarIcon fontSize="10" color="secondary" />
                                    <div className="text-sm text-gray-600">(23)</div>
                                </div>


                            </div>



                        </div>

                    </div>
                </div>

            </div>
            <div className="justify-center items-center px-6 py-4 mt-4 text-lg font-medium tracking-normal leading-5 text-center text-primary bg-slate-300 border border-primary rounded-lg shadow shadow-primary">
                See similar listings
            </div>
        </div>
    );
}

export default AlsoViewed;