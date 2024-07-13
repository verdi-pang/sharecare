import Image from "next/image";
import { Divider } from "@nextui-org/divider";

const LandingCTA = () => {
  return (
    <div className="mt-6 flex flex-col gap-6 p-4 lg:w-3/5 lg:self-center lg:px-4 lg:py-14">
      <div className="flex flex-col gap-6 text-center lg:gap-12">
        <div className="flex flex-col gap-2 px-2">
          <h1 className="text-2xl font-bold text-indigo-900">
            Share More, Earn More
          </h1>
          <figure className="lg:self-center">
            <Image
              src="/img/CTAasset/CTA_1.jpg"
              width={530}
              height={344}
              className="w-full max-w-[530px]"
              alt="illustration"
            />
          </figure>

          <p className="text-sm lg:text-xl">
            Discover a world of possibilities when you share what you have. Your
            idle items can now become your extra income
          </p>
        </div>
        <Divider className="text-indigo-400 lg:hidden" />

        <div className="flex flex-col gap-2 px-2">
          <h1 className="text-2xl font-bold text-indigo-900">
            Sharing Made Simple
          </h1>
          <figure className="lg:w-[530px] lg:self-center">
            <Image
              src="/img/CTAasset/CTA_2.svg"
              width={400}
              height={300}
              className="w-full max-w-[300px] lg:max-w-[480px]"
              alt="illustration"
            />
          </figure>

          <p className="text-sm lg:text-xl">
            Experience the simplicity of sharing. List your items, earn, and
            make new friends with Sharecare
          </p>
        </div>
        <Divider className="lg:hidden" />

        <div className="flex flex-col gap-2 px-2">
          <h1 className="text-2xl font-bold text-indigo-900">
            Get More from Your Belongings
          </h1>

          <figure className="lg:w-[500px] lg:self-center">
            <Image
              src="/img/CTAasset/CTA_3.svg"
              width={520}
              height={400}
              className="w-full max-w-[520px]"
              alt="illustration"
            />
          </figure>

          <p className="text-sm lg:text-xl">
            Your belongings are assets waiting to be shared. ShareCare connects
            you with those who need them
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingCTA;
