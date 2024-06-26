"use client"

import { Facebook, Google } from "@mui/icons-material";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import Link from "next/link";

export default function Login() {
    return (
        <div className="px-4 pt-8 pb-20 text-sm font-medium">
            <div className="flex flex-col gap-6 justify-center px-3 py-4">
                <div className="self-center text-3xl text-primary font-semibold">Log in</div>

                <div className="flex flex-col gap-3">
                    <Input type="email" label="Email" size="lg" />
                    <Input type="password" label="Password" size="lg" />
                    <div className="flex flex-col gap-3">
                        <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-white bg-primary border border-solid border-white rounded-md shadow-sec">
                            Login
                        </div>
                        <Link href="#" className="self-center"><p className="text-sm font-semibold">Forgot your password?</p>
                        </Link>

                    </div>
                </div>

                <div className="flex flex-col gap-3">

                    <div>
                        <p className="text-md font-bold text-center text-neutral-200">OR</p>
                    </div>
                    <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                        <Google /> Continue with Google
                    </div>
                    <div className="justify-center px-6 py-3.5 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                        <Facebook /> Continue with Facebook
                    </div>

                </div>

                <div className="flex flex-row gap-3 justify-center">
                    <Link href="#"><p className="text-sm font-semibold text-primary">Can't log in?</p></Link>
                    <Link href="#"><p className="text-sm font-semibold text-primary">Already have an account?</p></Link>
                </div>
            </div>
        </div>
    )
}