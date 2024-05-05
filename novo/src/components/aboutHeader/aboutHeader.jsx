import Image from "next/image";

const AboutHeader = () => {
    return (
        <div className="flex z-10 flex-col p-4 mt-0 w-full text-black">
            <div className="text-3xl leading-9">
                Your Items, Your Earnings
            </div>
            <div className="mt-4 text-base tracking-wide leading-6">
                Transform Your Possessions into Profits with Novo!
            </div>
            <Link href={"/posting"}>
                <div className="justify-center self-start px-6 py-2.5 mt-4 text-sm font-medium tracking-normal leading-5 text-center text-white bg-slate-500 rounded-[100px]">
                    Post an item
                </div></Link>
            <div className='w-[21rem] h-[20rem] relative'>
                <Image
                    src="/img/aboutHeader.svg"
                    style={{ objectFit: 'cover' }}
                    fill
                    alt="iphone"
                />

            </div>
        </div>
    );
}

export default AboutHeader;