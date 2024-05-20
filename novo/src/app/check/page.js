'use client';
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Link from "next/link";

export default function CheckPage() {
    return (
        <div className="flex flex-col px-3 py-6">
            <div>
                <h1>Check Availability</h1>
                <p>Request confirmation of availability from the owner before you pay.</p>
            </div>
            <div className="flex flex-row gap-4 py-3">
                <div className='rounded-lg overflow-hidden'>
                    <div className='size-24 relative'>
                        <Image src={'/img/tent.jpg'}
                            style={{ layout: "fill", objectFit: "cover" }}
                            fill
                            alt={'tent'}
                        />
                    </div>
                </div>
                <div className="content-center min-w-fit">
                    <h2>2 person dome tent</h2>
                </div>

            </div>
            <Divider orientation="horizontal" />

            <div className="flex flex-row justify-between py-3">
                <div><p>7 Days</p></div>
                <div><p>5 Feb - 12 Feb</p></div>
            </div>

            <Divider orientation="horizontal" />

            <div className="flex flex-col gap-2 py-3">
                <div className="flex flex-row justify-between">
                    <div><p>20 x 7 Days</p></div>
                    <div><p>$140.00</p></div>
                </div>
                <div className="flex flex-row justify-between">
                    <div><p>Service fee</p></div>
                    <div><p>$21.00</p></div>
                </div>
                <div className="flex flex-row justify-between">
                    <div><p>Weekly price discount</p></div>
                    <div><p>-$70.00</p></div>
                </div>
            </div>

            <Divider orientation="horizontal" />

            <div className="flex flex-row justify-between py-3">
                <div><p>Total</p></div>
                <div><p>5 Feb - 12 Feb</p></div>
            </div>
            <div className="w-full text-center py-3">
                <p className="font-bold">Sending a request is not binding</p>
            </div>

            <Divider orientation="horizontal" />

            <div className="flex flex-col gap-2 py-3">
                <h2>Message the owner</h2>

                <textarea name="description" rows={6} className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Send any other details about your request including pick up times or questions you have about the item" />

            </div>

            <div className="flex flex-row w-full gap-4">
                <Link href={"/"} className="flex">
                    <div className="flex justify-center items-center px-6 py-2.5 whitespace-nowrap bg-purple-300 rounded-lg text-violet-950">
                        Back
                    </div>
                </Link>
                <Link href={"/product"} className="flex flex-1">
                    <div className="justify-center content-center items-center px-6 py-2.5 text-white bg-slate-500 rounded-lg">
                        Submit Request
                    </div>
                </Link>
            </div>
        </div>
    )
}