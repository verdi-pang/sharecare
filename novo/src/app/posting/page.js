"use client"

import { Input } from "@nextui-org/input";

export default function NewPosting() {
    return (
        <div className="flex flex-col">
            <div className="self-center mt-7 text-3xl text-black">
                Share and start earning
            </div>
            <form>
                <div className="flex flex-col p-3 gap-4">
                    <div className="flex flex-col">
                        <label className="self-center pb-2">Add Photos</label>
                        <input type="file" name="file" className="p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " id="file_input" />
                    </div>
                    <div className="flex flex-col">
                        <label className="self-center pb-2">Posting Title</label>
                        <input type="text" name="name" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="flex flex-col">
                        <label className="self-center pb-2">Category</label>
                        <input type="text" name="category" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="flex flex-col">
                        <label className="self-center pb-2">Description</label>
                        <input type="text" name="category" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="flex flex-col">
                        <Input type="email" label="Email" />
                        <Input type="email" label="Email" placeholder="Enter your email" />
                    </div>
                </div>
            </form>
        </div>
    )
}