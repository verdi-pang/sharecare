import { Input } from "@nextui-org/input";
import Link from "next/link";

export default function registerPage() {
    return (
        <div className="px-3 pt-8 pb-10">
            <div className="flex flex-col gap-6">
                <div className="text-center flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold text-primary ">
                        Welcome to Share Care
                    </h1>
                    <div className="flex flex-row gap-2 justify-center text-sm font-light">
                        <p>Already have an account?</p>
                        <Link href="/auth/login" className="font-semibold underline">
                            Sign in
                        </Link>
                    </div>
                </div>

                <div className="pt-6">
                    <form className="flex flex-col gap-3">
                        <Input type="text" label="First name" />
                        <Input type="text" label="Last Name" />
                        <Input type="email" label="Email" />
                        <Input type="password" label="Password" />
                        <Input type="password" label="Confirm Password" />
                        <Link href="/dashboard/profile">
                            <div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900">
                                Create Account
                            </div>
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    )
}