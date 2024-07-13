import { MoreVert } from "@mui/icons-material";
import Link from "next/link";

const ProfileRentals = () => {
  return (
    <div className="my-6 px-6">
      <div className="my-6 lg:flex lg:justify-center">
        <div className="py-3 text-base lg:w-3/5">
          <div className="border-gray flex w-full flex-row justify-between gap-4 rounded-lg border p-4">
            <div className="flex flex-row gap-4">
              <div className="flex h-[60px] min-h-[60px] w-[60px] content-center justify-center rounded-lg bg-gray-200 text-center"></div>
              <div className="flex flex-col justify-center">
                <div>Item Name</div>
                <div>Item Price</div>
              </div>
            </div>

            <MoreVert className="self-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRentals;
