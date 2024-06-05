import Image from "next/image";

const CatItemListCard = () => {
    return (
        <div className="flex flex-col pt-1 pb-4 w-full bg-white rounded-xl border border-indigo-900 border-solid">
            <div className="flex overflow-hidden relative flex-col items-end self-center px-16 pt-2.5 pb-20 shadow-xl aspect-[1.25] w-[188px]">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9131d82f732e1a7957c372c3d1f857ed747b163ee9610e8e0408ecd219b74ef3?apiKey=fc5a05627a354b75a7bb231268befd18&"
                    alt="Product Image"
                    layout="fill"
                    objectFit="cover"
                />
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/99effed67d769849e945e712044bd6535b7af1b103f953216dfc59f44c1e6f47?apiKey=fc5a05627a354b75a7bb231268befd18&"
                    alt="Badge Image"
                    width={22}
                    height={22}
                />
            </div>
            <div className="flex flex-col px-3.5 mt-6">
                <div className="text-base leading-4 text-indigo-900">
                    2 Person Dome tent
                </div>
                <div className="flex gap-3 mt-3.5 whitespace-nowrap">
                    <div className="grow text-sm leading-3 text-neutral-500">
                        Surrey
                    </div>
                    <div className="flex-auto text-base font-semibold leading-4 text-indigo-900">
                        $20/day
                    </div>
                </div>
                <div className="shrink-0 mt-3.5 h-px bg-black border border-black border-solid" />
            </div>
            <div className="flex gap-5 justify-between mt-4 text-sm leading-4 text-neutral-500">
                <div className="flex gap-1.5">
                    <Image
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc36a6da69e85653d9b6d775c6086350f13e27d358c4c258552a3395dc2605ed?apiKey=fc5a05627a354b75a7bb231268befd18&"
                        alt="Profile Image"
                        className="shrink-0 rounded-full aspect-square"
                        width={17}
                        height={17}
                    />
                    <div className="my-auto">John D.</div>
                </div>
                <div className="flex gap-1.5 my-auto whitespace-nowrap">
                    <Image
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1ee99f328f90d9fe3759f646002cac3a6cd7acaa4934387d42bcc1c82b0e0ec?apiKey=fc5a05627a354b75a7bb231268befd18&"
                        alt="Star Rating"
                        className="shrink-0 self-start aspect-[1.09] fill-amber-400"
                        width={13}
                        height={13}
                    />
                    <div>(23)</div>
                </div>
            </div>
        </div>
    );
}

export default CatItemListCard;