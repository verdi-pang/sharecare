import Image from "next/image";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import SearchForm from "../searchForm/searchForm";

const Header = () => {
  return (
    <main className="mt-3.5 flex w-full flex-col items-center self-stretch text-base leading-4">
      <section className="relative aspect-[1.87] flex-col self-stretch px-4 pb-6 pt-32 text-center text-3xl font-semibold leading-10 text-indigo-900 lg:aspect-[3.3]">
        <Image
          src="/img/hero-bkg-5.svg"
          fill
          className="absolute size-full object-cover"
          alt="Your Belongings, Their Next Adventure"
        />
        <header>
          <h1 className="font-bold text-black">Your Belongings,</h1>
          <h2 className="font-bold text-indigo-900">Their Next Adventure</h2>
        </header>
      </section>
      <section className="flex flex-col justify-center">
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
