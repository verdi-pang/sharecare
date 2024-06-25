"use client"

import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";

export default function Login() {
    return (
        <div className="px-4 pt-8 pb-20 text-sm font-medium">
            <div className="flex flex-col gap-6 justify-center px-3 py-4">
                <div className="self-center text-3xl text-primary font-semibold">Welcome to Novo</div>
                <div className="flex flex-col gap-4">
                    <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                        Continue with Google
                    </div>
                    <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                        Continue with Facebook
                    </div>
                    <Divider className="my-4" />
                    <div>
                        <p className="text-md font-bold text-center">Continue with email</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Input type="email" label="email" size="sm" />
                        <Input type="password" label="password" size="sm" />
                        <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}