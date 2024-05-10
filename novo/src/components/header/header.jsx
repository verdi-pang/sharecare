import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Link from 'next/link';


const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-col gap-4 p-4 bg-hero bg-[center_bottom_1rem] bg-[length:350px_350px] bg-no-repeat min-h-[580px]">
                <div className='flex flex-col gap-3 h-48 justify-end'>
                    <div className="text-3xl font-bold leading-normal"><h1>Your Belongings, Their Next Adventure</h1>
                    </div>
                    <div className="mt-2 text-sm tracking-wide text-secondary">
                        <p>Turn your items into opportunities. ShareIt helps you rent out your things and enrich your life.</p>
                    </div>
                </div>
                <div className="flex flex-row w-full border-2 border-solid border-black justify-between rounded-xl align-center rounded-l-lg overflow-hidden bg-white">
                    <input type="text" placeholder='Find what you are looking for' className='w-full p-4' />
                    <Button variant='containted' className='p-4 rounded-r-lg w-fit bg-blue-400'><SearchIcon /></Button>
                </div>

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
    );
}

export default Header;