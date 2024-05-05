"use client"

// import { Input } from "@nextui-org/input";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

export default function NewPosting() {
    return (
        <div className="flex flex-col">
            <div className="self-center mt-7 mb-5 text-3xl text-black">
                Share and start earning
            </div>
            <form>
                <div className="flex flex-col p-3 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm pb-2 font-semibold">Add Photos</label>
                        <input type="file" name="file" className="bg-gray-300 p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_input" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm pb-2 font-semibold">Posting Title</label>
                        <input type="text" name="name" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm pb-2 font-semibold">Category</label>
                        <input type="text" name="category" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm pb-2 font-semibold">Description</label>
                        <textarea name="description" rows={6} className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col flex-auto">
                            <label className="text-sm pb-2 font-semibold">Postal code</label>
                            <input type="text" name="postal-code" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="flex flex-row flex-auto justify-center content-center self-end pb-3 gap-2">
                            <MyLocationIcon /> <div className='text-sm font-semibold self-center'>CA</div>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-sm pb-2 font-semibold">Rental price per:</label>
                        <div className='flex flex-row gap-4'>
                            <div className="flex flex-col">
                                <label className="text-sm pb-2 font-semibold">Day</label>
                                <input type="text" name="day" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm pb-2 font-semibold">Week</label>
                                <input type="text" name="week" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm pb-2 font-semibold">Month</label>
                                <input type="text" name="month" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className="flex flex-col">
                            <label className="text-sm pb-2 font-semibold">Item Value</label>
                            <input type="text" name="item-value" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm pb-2 font-semibold">Quantity</label>
                            <input type="text" name="quantity" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm pb-2 font-semibold">Minimum rental Days</label>
                        <input type="text" name="min-rent-days" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className="flex gap-4 mt-4 text-sm font-medium tracking-normal leading-5 text-center w-full">
                        <Link href={"/"}>
                            <div className="justify-center items-center px-6 py-2.5 whitespace-nowrap bg-purple-300 rounded-lg text-violet-950">
                                Cancel
                            </div>
                        </Link>
                        <Link href={"/posting/confirmation"}>
                            <div className="flex-1 justify-center px-6 py-2.5 text-white bg-slate-500 rounded-lg">
                                List item
                            </div>
                        </Link>
                    </div>
                </div>

            </form>
        </div>
    )
}