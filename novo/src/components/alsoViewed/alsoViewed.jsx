import Image from "next/image";

const AlsoViewed = () => {
    return (
        <div className="flex flex-col p-4 mt-3.5 w-full text-black">
            <div className="text-2xl leading-7">People also Viewed</div>
            <div className="flex gap-5 mt-4">
                <div className="flex flex-col">
                    <div className='rounded-lg overflow-hidden'>
                        <div className='size-40 relative'>
                            <Image src="/img/drone.jpg"
                                style={{ layout: "fill", objectFit: "cover" }}
                                fill
                                alt="image"
                            />

                        </div>
                    </div>
                    <div className="mt-2 text-lg leading-6">2 person Dome tent</div>
                    <div className="mt-1 text-2xl leading-7">$20/day</div>
                </div>
                <div className="flex flex-col">
                    <div className='rounded-lg overflow-hidden'>
                        <div className='size-40 relative'>
                            <Image src="/img/drone.jpg"
                                style={{ layout: "fill", objectFit: "cover" }}
                                fill
                                alt="image"
                            />

                        </div>
                    </div>
                    <div className="mt-2 text-lg leading-6">2 person Dome tent</div>
                    <div className="mt-1 text-2xl leading-7">$20/day</div>
                </div>
            </div>
            <div className="justify-center items-center px-6 py-2.5 mt-4 text-sm font-medium tracking-normal leading-5 text-center bg-purple-300 rounded-[100px] text-violet-950">
                See more listings
            </div>
        </div>
    );
}

export default AlsoViewed;