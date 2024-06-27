"use client"

import { Facebook, Google } from "@mui/icons-material";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import Link from "next/link";

export default function Login() {
    return (
        <div className="px-4 pt-8 pb-20 text-sm font-medium">
            <div className="flex flex-col gap-6 justify-center px-3 py-4">
                <div className="flex flex-col gap-2">
                    <div className="self-center text-3xl text-primary font-semibold">Welcome to Novo</div>
                    <div className="flex gap-2 justify-center">
                        <p className="text-sm font-light">Not registered yet?</p>
                        <Link href="/auth/register">
                            <p className="text-sm font-semibold underline">Create an account</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <form className="flex flex-col gap-2">
                        <Input type="email" label="email" size="sm" />
                        <Input type="password" label="password" size="sm" />
                    </form>
                    <Link href="/"><div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-lg text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                        Login
                    </div></Link>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                    {/* <Divider className="my-4" /> */}
                    <div>
                        <p className="text-md font-bold text-center">Or</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <Link href="/">
                        <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                            <Google /> Continue with Google
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                            <Facebook /> Continue with Facebook
                        </div>
                    </Link>
                </div>

            </div>
        </div >
    )
}