import Image from "next/image";
import Link from "next/link";

const JoinTodayCTA = () => {
  return (
    <div className="text-neutral-500 flex flex-col gap-2 bg-amber-400 bg-opacity-10 px-5 py-8">
      <div className="lg:flex lg:w-3/5 lg:flex-col lg:content-center lg:self-center">
        <h1 className="text-center text-2xl font-bold text-amber-400 lg:text-3xl">
          Join Sharecare Today
        </h1>

        <figure className="lg:self-center">
          <Image
            src="/img/CTAasset/CTA_Phone.svg"
            width={520}
            height={400}
            className="w-full max-w-[520px] lg:w-[520px]"
            alt="illustration"
          />
        </figure>

        <p className="text-sm lg:text-xl">
          Ready to transform your possessions into a source of income and make a
          positive impact on the environment?
          <br />
          <br />
          Sign up for Sharecare today and become a part of the sharing
          revolution. Whether you have items to lend or are searching for
          something specific, Sharecare is the platform that brings people
          together to share the things they love.
        </p>
        <Link href={"/posting"} className="w-fit self-center lg:w-fit">
          <div className="text-neutral-500 mt-4 justify-center rounded-md border border-solid border-indigo-900 bg-slate-300 px-6 py-3.5 text-center font-medium shadow-primary shadow-indigo-900">
            Start sharing now
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JoinTodayCTA;
