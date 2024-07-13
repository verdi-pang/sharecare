"use client";

import { Facebook, Google } from "@mui/icons-material";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex px-4 pb-20 pt-8 text-sm font-medium lg:justify-center">
      <div className="flex flex-col justify-center gap-6 px-3 py-4 lg:w-2/5">
        <div className="flex flex-col gap-2">
          <div className="self-center text-3xl font-semibold text-primary">
            Welcome to Novo
          </div>
          <div className="flex justify-center gap-2">
            <p className="text-sm font-light">Not registered yet?</p>
            <Link href="/auth/register">
              <p className="text-sm font-semibold underline">
                Create an account
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-2">
            <Input type="email" label="email" size="sm" />
            <Input type="password" label="password" size="sm" />
          </form>
          <Link href="/">
            <div className="text-neutral-500 mt-4 justify-center rounded-md border border-solid border-indigo-900 px-6 py-3.5 text-center text-lg font-medium shadow-primary shadow-indigo-900">
              Login
            </div>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {/* <Divider className="my-4" /> */}
          <div>
            <p className="text-md text-center font-bold">Or</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Link href="/">
            <div className="text-neutral-500 mt-4 justify-center rounded-md border border-solid border-indigo-900 px-6 py-3.5 text-center font-medium shadow-primary shadow-indigo-900">
              <Google /> Continue with Google
            </div>
          </Link>
          <Link href="/">
            <div className="text-neutral-500 mt-4 justify-center rounded-md border border-solid border-indigo-900 px-6 py-3.5 text-center font-medium shadow-primary shadow-indigo-900">
              <Facebook /> Continue with Facebook
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
