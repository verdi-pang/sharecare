import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-col gap-4 p-3 bg-[#fffced] min-h-[320px]">
                <div className='flex flex-col gap-2 pt-4 z-10'>
                    <div className="text-3xl font-bold pt-5"><h1>Your Belongings, Their Next Adventure</h1>
                    </div>
                    <div className="mt-2 text-base font-medium tracking-wide text-secondary leading-normal">
                        <p>Turn your items into opportunities. ShareCare helps you rent out your things and enrich your life.</p>
                    </div>

                    {/* <div className='relative self-center'>
                        <Image src={'/img/hero-bkg-4.svg'} width={340} height={340} style={{ objectFit: "cover" }} />
                    </div> */}
                </div>
                <div className='flex flex-col gap-4 z-50'>

                    <div className="flex flex-row w-full border-2 border-solid border-black justify-between rounded-xl align-center rounded-l-lg overflow-hidden bg-white shadow-md">

                        <input type="text" placeholder='Find what you are looking for' className='w-full p-4' />
                        <Button variant='containted' className='p-4 rounded-r-lg w-fit bg-blue-400'><SearchIcon /></Button>
                    </div>
                    <div className='w-full flex flex-row justify-center items-center '>
                        <div className='w-1/2 flex flex-row gap-4'>
                            <span className='my-auto text-xl leading-6 text-black uppercase'>OR</span>
                            <Link href="/posting">
                                <div className='flex-1 justify-center items-center px-6 py-2.5 text-sm font-medium tracking-normal leading-5 text-white bg-primary rounded-lg'>Post an Item</div>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Header;