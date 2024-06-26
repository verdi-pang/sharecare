import { MoreVert } from "@mui/icons-material";
import Link from "next/link";

const ProfileRentals = () => {
    return (
        <div className="px-6 my-6">
            <div className="my-6">
                <div className="py-3 text-base">
                    <div className="w-full p-4 flex flex-row gap-4 justify-between border border-gray rounded-lg">
                        <div className="flex flex-row gap-4">
                            <div className="flex justify-center content-center text-center rounded-lg bg-gray-200 w-[60px] h-[60px] min-h-[60px]">
                            </div>
                            <div className="flex flex-col justify-center">
                                <div>Item Name</div>
                                <div>Item Price</div>
                            </div>
                        </div>

                        <MoreVert className="self-center" />
                    </div>

                </div>

            </div>
        </div >
    );
}

export default ProfileRentals;