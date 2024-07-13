"use client";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CheckPage() {
  const searchParams = useSearchParams();
  const customParamID = searchParams.get("id");
  const customParamImgUrl = searchParams.get("imgUrl");
  const customParamOwnerName = searchParams.get("ownerName");
  const customParamOwnerLocation = searchParams.get("ownerLocation");
  const customParamCat = searchParams.get("cat");
  const customParamSubCat = searchParams.get("subCat");

  return (
    <div className="flex flex-col gap-4 px-3 py-6">
      <div className="lg:w-3/5 lg:self-center">
        <div>
          <h1 className="text-2xl font-bold text-primary">
            Check Availability
          </h1>
          <p className="text-md py-2 font-light">
            Request confirmation of availability from the owner before you pay.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-amber-400 bg-amber-400 bg-opacity-10 p-3">
          <div className="flex flex-row gap-4">
            <div className="overflow-hidden rounded-lg">
              <div className="relative size-24">
                <Image
                  src={customParamImgUrl}
                  style={{ layout: "fill", objectFit: "cover" }}
                  fill
                  alt={"tent"}
                />
              </div>
            </div>
            <div className="min-w-fit content-center">
              <h2>{customParamID}</h2>
            </div>
          </div>

          <Divider orientation="horizontal" />

          <div className="flex flex-row justify-between py-3">
            <div>
              <p>7 Days</p>
            </div>
            <div>
              <p className="font-bold text-primary">5 Feb - 12 Feb</p>
            </div>
          </div>

          <Divider orientation="horizontal" />

          <div className="flex flex-col gap-2 py-3">
            <div className="flex flex-row justify-between">
              <div>
                <p>20 x 7 Days</p>
              </div>
              <div>
                <p className="font-bold text-primary">$140.00</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p>Service fee</p>
              </div>
              <div>
                <p className="font-bold text-primary">$21.00</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p>Weekly price discount</p>
              </div>
              <div>
                <p className="font-bold text-primary line-through">$70.00</p>
              </div>
            </div>
          </div>

          <Divider orientation="horizontal" />

          <div className="flex flex-row justify-between py-3">
            <div>
              <p>Total</p>
            </div>
            <div>
              <p className="font-bold text-primary">5 Feb - 12 Feb</p>
            </div>
          </div>
          <div className="w-full py-3 text-center">
            <p className="font-bold text-red-600">
              Sending a request is not binding
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 py-3">
          <h2 className="text-2xl font-bold">Message the owner</h2>

          <textarea
            name="description"
            rows={6}
            className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Send any other details about your request including pick up times or questions you have about the item"
          />
          <div className="flex gap-4">
            <Link href={"/"} className="min-w-fit grow">
              <div className="mt-4 min-w-fit grow items-center justify-center rounded-lg border border-primary bg-white px-6 py-4 text-center text-lg font-semibold leading-5 tracking-normal text-primary shadow shadow-primary">
                Back
              </div>
            </Link>
            <Link href={"/product"} className="min-w-fit grow">
              <div className="mt-4 min-w-fit grow items-center justify-center rounded-lg border border-primary bg-slate-300 px-6 py-4 text-center text-lg font-semibold leading-5 tracking-normal text-primary shadow shadow-primary">
                Submit Request
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
