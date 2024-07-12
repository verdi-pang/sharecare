import Image from "next/image";

const WelcomeDesc = () => {
  return (
    <div className="text-neutral-500 mt-16 flex flex-col self-stretch bg-amber-400 bg-opacity-10 px-6 pb-8 pt-16 text-center lg:mt-0 lg:px-64">
      <div className="lg:w-3/5 lg:self-center">
        <header className="self-center text-3xl font-semibold leading-10 text-slate-950">
          Welcome to Novo:{" "}
          <span className="text-amber-400">
            Share What You Have, Find What You Need
          </span>
        </header>
        <section className="mt-12 lg:mt-6">
          <p className="text-lg font-light leading-7">
            Are you tired of your valuable possessions sitting idle? Novo is
            here to help you maximize the potential of your belongings.
          </p>
        </section>
        <section className="mt-8 lg:mt-5">
          <p className="text-lg font-light leading-7">
            Our platform connects individuals who have items they're willing to
            rent out with those in need, creating a win-win solution for
            everyone involved.
          </p>
        </section>
        <figure className="lg:flex lg:justify-center">
          <Image
            src="/img/welcomeDescBottom.svg"
            width={344}
            height={344}
            className="mt-4 aspect-[1.08] w-full max-w-[344px] lg:self-center"
            alt="illustration"
          />
        </figure>
      </div>
    </div>
  );
};

export default WelcomeDesc;
