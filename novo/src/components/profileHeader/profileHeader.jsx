import Image from "next/image";
import ShareIcon from '@mui/icons-material/Share';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
const ProfileHeader = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex w-full pt-8 mb-6 px-6 z-1 w-full h-[140px] bg-amber-200 justify-between">
                <ShareIcon className="flex-start self-start text-gray-900" /> <LinearScaleIcon className="flex-end content-end text-gray-900" />
            </div>
            <div className="flex justify-center -mt-20">
                <div className="w-[104px] h-[104px] mb-2 border-solid border-2 border-white flex items-center justify-center rounded-full">
                    <div className="relative overflow-hidden w-auto min-w-[100px]  min-h-[100px] rounded-full">
                        <Image src={"/img/blackCat.jpg"} fill style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </div>
            <div className="text-xl font-bold mt-2"><h1>Jane Doe</h1></div>
            <div className="text-base mt-2 text-gray-400">Joined 25 Apr 2024</div>
        </div>

    );
}

export default ProfileHeader;