import Image from "next/image";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <div className="flex flex-col bg-primary bg-opacity-10 p-4">
      <div className="lg:w-2/5 lg:self-center">
        <div>
          <h1 className="text-3xl font-bold leading-9 text-primary">
            Your Items, Your Earnings
          </h1>
        </div>
        <div>
          <p className="text-light mt-4 leading-6 tracking-wide">
            Transform Your Possessions into Profits with Novo!
          </p>
        </div>
        <Link href={"/posting"}>
          <div className="text-neutral-500 mt-4 justify-center rounded-md border border-solid border-indigo-900 bg-white px-6 py-3.5 text-center font-medium shadow-primary shadow-indigo-900">
            Post an item
          </div>
        </Link>
        <div className="relative h-[20rem] w-[22rem] lg:h-[25rem] lg:w-[35rem]">
          <Image
            src="/img/aboutHeader.svg"
            style={{ objectFit: "cover" }}
            fill
            alt="iphone"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
