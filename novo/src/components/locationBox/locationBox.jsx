import MyLocationIcon from '@mui/icons-material/MyLocation';

const LocationBox = () => {
    return (
        <div className="flex gap-5 p-3 text-black rounded-xl border border-solid border-black border-opacity-10">
            <MyLocationIcon />
            <div className="flex flex-col">
                <div className="text-base font-medium tracking-normal leading-6">
                    Results for Toronto
                </div>
                <div className="mt-1.5 text-xs">124 Items near you.</div>
            </div>
        </div>
    );

}



export default LocationBox;