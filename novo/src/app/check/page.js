'use client';
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CheckPage() {
    const searchParams = useSearchParams();
    const customParamID = searchParams.get("id");
    const customParamImgUrl = searchParams.get("imgUrl");
    const customParamOwnerName = searchParams.get("ownerName")
    const customParamOwnerLocation = searchParams.get("ownerLocation")
    const customParamCat = searchParams.get("cat");
    const customParamSubCat = searchParams.get("subCat");

    return (
        <div className="flex flex-col px-3 py-6 gap-4">
            <div>
                <h1 className="text-2xl font-bold text-primary">Check Availability</h1>
                <p className="text-md font-light py-2">Request confirmation of availability from the owner before you pay.</p>
            </div>
            <div className="flex flex-col gap-4 p-3 border border-amber-400 bg-amber-400 bg-opacity-10 rounded-lg">
                <div className="flex flex-row gap-4">
                    <div className='rounded-lg overflow-hidden'>
                        <div className='size-24 relative'>
                            <Image src={customParamImgUrl}
                                style={{ layout: "fill", objectFit: "cover" }}
                                fill
                                alt={'tent'}
                            />
                        </div>
                    </div>
                    <div className="content-center min-w-fit">
                        <h2>{customParamID}</h2>
                    </div>
                </div>

                <Divider orientation="horizontal" />

                <div className="flex flex-row justify-between py-3">
                    <div><p>7 Days</p></div>
                    <div><p className="font-bold text-primary">5 Feb - 12 Feb</p></div>
                </div>

                <Divider orientation="horizontal" />

                <div className="flex flex-col gap-2 py-3">
                    <div className="flex flex-row justify-between">
                        <div><p>20 x 7 Days</p></div>
                        <div><p className="font-bold text-primary">$140.00</p></div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div><p>Service fee</p></div>
                        <div><p className="font-bold text-primary">$21.00</p></div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div><p>Weekly price discount</p></div>
                        <div><p className="font-bold text-primary line-through">$70.00</p></div>
                    </div>
                </div>

                <Divider orientation="horizontal" />

                <div className="flex flex-row justify-between py-3">
                    <div><p>Total</p></div>
                    <div><p className="font-bold text-primary">5 Feb - 12 Feb</p></div>
                </div>
                <div className="w-full text-center py-3">
                    <p className="font-bold text-red-600">Sending a request is not binding</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 py-3 mt-4">
                <h2 className="text-2xl font-bold">Message the owner</h2>

                <textarea name="description" rows={6} className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Send any other details about your request including pick up times or questions you have about the item" />
                <div className="flex gap-4">
                    <Link href={"/"} className="grow min-w-fit">
                        <div className="justify-center items-center px-6 py-4 mt-4 text-lg font-semibold tracking-normal leading-5 text-center text-primary bg-white rounded-lg shadow shadow-primary border border-primary grow min-w-fit">
                            Back
                        </div>
                    </Link>
                    <Link href={"/product"} className="grow min-w-fit">
                        <div className="justify-center items-center px-6 py-4 mt-4 text-lg font-semibold tracking-normal leading-5 text-center text-primary bg-slate-300 rounded-lg shadow shadow-primary border border-primary grow min-w-fit">
                            Submit Request
                        </div>
                    </Link>
                </div>
            </div>


        </div>
    )
}