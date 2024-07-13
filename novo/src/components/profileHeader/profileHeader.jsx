import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import { MoreHoriz } from "@mui/icons-material";
const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center lg:w-3/5 lg:self-center">
      <div className="z-1 bg-tertiary mb-6 flex h-[140px] w-full justify-between px-6 pt-8">
        <ShareIcon className="flex-start self-start text-gray-900" />{" "}
        <MoreHoriz className="flex-end content-end text-gray-900" />
      </div>
      <div className="-mt-20 flex justify-center">
        <div className="mb-2 flex h-[104px] w-[104px] items-center justify-center rounded-full border-2 border-solid border-white">
          <div className="relative min-h-[100px] w-auto min-w-[100px] overflow-hidden rounded-full">
            <Image
              src={"/img/blackCat.jpg"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-2 text-xl font-bold">
        <h1>Jane Doe</h1>
      </div>
      <div className="mt-2 text-base text-gray-400">Joined 25 Apr 2024</div>
    </div>
  );
};

export default ProfileHeader;
