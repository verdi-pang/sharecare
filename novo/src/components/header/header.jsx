import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-hero bg-cover">
            <div className='flex flex-col gap-3 h-48 justify-end '>
                <h1 className="text-3xl text-3xl leading-10 text-black">Your Belongings, Their Next Adventure</h1>
                <p className="mt-6 text-xs tracking-wide leading-4 text-black">Turn your items into opportunities. ShareIt helps you rent out your things and enrich your life.</p></div>
            <div className="flex flex-row w-full border-2 border-solid border-black justify-between rounded-xl align-center rounded-l-lg overflow-hidden">
                <input type="text" placeholder='Find what you are looking for' className='w-full p-4' />
                <Button variant='containted' className='p-4 rounded-r-lg w-fit bg-blue-400'><SearchIcon /></Button>
            </div>
            <div className='flex flex-row justify-center items-center gap-4'><span className='my-auto text-xl leading-6 text-black uppercase'>OR</span> <Button variant="contained" className='flex-1 justify-center items-center px-6 py-2.5 text-sm font-medium tracking-normal leading-5 text-white bg-slate-500 rounded-[100px]'>Post an Item</Button></div>
        </div >
    );
}

export default Header;