import Image from "next/image";
import Link from "next/link";

const AboutHeader = () => {
    return (
        <div className="flex z-10 flex-col p-4 bg-primary bg-opacity-10">
            <div >
                <h1 className="text-3xl leading-9 font-bold text-primary">Your Items, Your Earnings</h1>
            </div>
            <div >
                <p className="mt-4 text-light tracking-wide leading-6">Transform Your Possessions into Profits with Novo!</p>
            </div>
            <Link href={"/posting"}>
                <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900 bg-white">
                    Post an item
                </div>
            </Link>
            <div className='w-[22rem] h-[20rem] relative'>
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