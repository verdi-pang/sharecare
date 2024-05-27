import Image from "next/image";
import Link from "next/link";

const JoinTodayCTA = () => {
    return (
        <div className="flex flex-col gap-2 py-8 px-5 w-full bg-amber-100 text-neutral-500">

            <h1 className='text-2xl font-bold text-center text-amber-400'>Join Sharecare Today</h1>

            <figure>
                <Image
                    src="/img/CTAasset/CTA_Phone.svg"
                    width={520} height={400}
                    className="w-full max-w-[520px]" alt="illustration"
                />
            </figure>

            <p className="text-sm">
                Ready to transform your possessions into a source of income and make a positive impact on the environment?
                <br /><br />
                Sign up for Sharecare today and become a part of the sharing revolution. Whether you have items to lend or are searching for something specific, Sharecare is the platform that brings people together to share the things they love.</p>
            <Link href={"/posting"} className="w-fit self-center">
                <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 bg-slate-300 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                    Start sharing now
                </div>
            </Link>
        </div>
    );
}

export default JoinTodayCTA;