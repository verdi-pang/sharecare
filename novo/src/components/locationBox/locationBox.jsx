import AdjustIcon from '@mui/icons-material/Adjust';
const LocationBox = () => {
    return (
        <div className='mx-2 py-2'>
            <div className="flex gap-2 px-4 py-5 text-black rounded-xl border border-amber-400 border-solid bg-amber-400 bg-opacity-20">
                <AdjustIcon className='self-center' />
                <p className="flex-auto my-auto text-base leading-5 text-neutral-500">
                    Results for Toronto :
                </p>
                <p className="flex-auto text-base font-semibold leading-4 text-indigo-900 content-center">
                    42 Items near you
                </p>
            </div></div>
    );

}



export default LocationBox;