import Image from 'next/image';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import SearchForm from '../searchForm/searchForm';


const Header = () => {
    return (
        <main className="flex flex-col items-center self-stretch mt-3.5 w-full text-base leading-4">
            <section className="relative flex-col self-stretch px-4 pt-32 pb-6 text-3xl font-semibold leading-10 text-center text-indigo-900 aspect-[1.87]">
                <Image src="/img/hero-bkg-5.svg" fill className="object-cover absolute size-full" alt="Your Belongings, Their Next Adventure" />
                <header>
                    <h1 className='text-black font-bold'>Your Belongings,</h1>
                    <h2 className="text-indigo-900 font-bold">Their Next Adventure</h2>
                </header>
            </section>
            <section className='flex flex-col justify-center'>
                <p className="text-lg font-light leading-7 text-center text-neutral-500 px-3">
                    Turn your items into opportunities. ShareCare helps you rent out your things and enrich your life.
                </p>
                <SearchForm />
                <div className='text-center mt-2'>
                    <p className=" text-indigo-900">OR</p>
                </div>

                <div className="flex w-fit gap-2.5 self-center px-5 py-3 mt-4 text-indigo-900 rounded-md border border-amber-400 border-dashed bg-amber-400 bg-opacity-20">
                    <Link href='/posting'>
                        <div className='flex gap-2.5 justify-center align-center self-center'>
                            <AddIcon />
                            <label className='self-center'>Post an Item</label>
                        </div>
                    </Link>
                </div>

            </section>
            <figure>
                <Image src="/img/hero-bottom-img.svg" width={344} height={344} className="mt-12 w-full aspect-[1.08] max-w-[344px]" alt="illustration" />
            </figure>
        </main>
    );
}

export default Header;