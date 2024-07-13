import { Input } from "@nextui-org/input";
import Link from "next/link";

export default function registerPage() {
  return (
    <div className="px-3 pb-10 pt-8 lg:flex lg:justify-center">
      <div className="flex flex-col gap-6 lg:w-2/5 lg:self-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold text-primary">
            Welcome to Share Care
          </h1>
          <div className="flex flex-row justify-center gap-2 text-sm font-light">
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
              <div className="text-neutral-500 mt-4 justify-center rounded-md border border-solid border-indigo-900 px-6 py-3.5 text-center font-medium shadow-primary shadow-indigo-900">
                Create Account
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
