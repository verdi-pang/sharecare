import Image from "next/image";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import SearchForm from "../searchForm/searchForm";

const Header = () => {
  return (
    <main className="mt-3.5 flex flex-col items-center self-stretch text-base leading-4 lg:relative lg:mt-0 lg:py-24">
      <Image
        src="/img/hero-bkg-5.svg"
        fill
        className="hidden lg:absolute lg:block lg:size-full lg:object-cover"
        alt="Your Belongings, Their Next Adventure"
      />
      <section className="relative aspect-[1.87] flex-col self-stretch px-4 pb-6 pt-32 text-center text-indigo-900 lg:hidden">
        <Image
          src="/img/hero-bkg-5.svg"
          fill
          className="absolute size-full object-cover"
          alt="Your Belongings, Their Next Adventure"
        />
        <header>
          <h1 className="text-3xl font-bold leading-10 text-black">
            Your Belongings,
          </h1>
          <h2 className="text-3xl font-bold leading-10 text-indigo-900">
            Their Next Adventure
          </h2>
        </header>
      </section>
      <section className="relative flex flex-col justify-center lg:w-1/3 lg:gap-4 lg:pt-8">
        <div className="hidden py-4 text-center lg:block">
          <header>
            <h1 className="text-3xl font-bold text-black">Your Belongings,</h1>
            <h2 className="text-3xl font-bold text-indigo-900">
              Their Next Adventure
            </h2>
          </header>
        </div>
        <p className="text-neutral-500 px-3 text-center text-lg font-light leading-7">
          Turn your items into opportunities. ShareCare helps you rent out your
          things and enrich your life.
        </p>
        <SearchForm />
        <div className="mt-2 text-center">
          <p className="text-indigo-900">OR</p>
        </div>

        <div className="mt-4 flex w-fit gap-2.5 self-center rounded-md border border-dashed border-amber-400 bg-amber-400 bg-opacity-20 px-5 py-3 text-indigo-900">
          <Link href="/posting">
            <div className="align-center flex justify-center gap-2.5 self-center">
              <AddIcon />
              <label className="self-center">Post an Item</label>
            </div>
          </Link>
        </div>
      </section>
      <figure className="lg:hidden">
        <Image
          src="/img/hero-bottom-img.svg"
          width={344}
          height={344}
          className="mt-12 aspect-[1.08] w-full max-w-[344px]"
          alt="illustration"
        />
      </figure>
    </main>
  );
};

export default Header;
