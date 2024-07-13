"use client";

// import { Input } from "@nextui-org/input";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

export default function NewPosting() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));
  const selectedValue = useMemo(() =>
    Array.from(selectedKeys).join(", ").replaceAll("_", " ", [selectedKeys]),
  );
  return (
    <div className="flex flex-col pb-8">
      <div className="lg:w-3/5 lg:self-center">
        <div className="mb-5 mt-7 self-center lg:text-center">
          <h1 className="text-3xl font-bold text-primary">
            Share and start earning
          </h1>
        </div>
        <form>
          <div className="flex flex-col gap-6 p-3">
            <div className="flex flex-col">
              <label className="pb-2 text-sm font-semibold">Add Photos</label>
              <input
                type="file"
                name="file"
                className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                id="file_input"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-2 text-sm font-semibold">
                Posting Title
              </label>
              <input
                type="text"
                name="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="pb-2 text-sm font-semibold">Category</label>
              <input
                type="text"
                name="category"
                className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="pb-2 text-sm font-semibold">Description</label>
              <textarea
                name="description"
                rows={6}
                className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex grow-[2] flex-row gap-2">
              <div className="flex flex-auto flex-col">
                <label className="pb-2 text-sm font-semibold">
                  Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-auto grow-[1] flex-col content-center justify-center self-end pb-3">
                <label className="pb-2 text-sm font-semibold">Province</label>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="solid" className="capitalize">
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <DropdownItem key="AB">AB</DropdownItem>
                    <DropdownItem key="BC">BC</DropdownItem>
                    <DropdownItem key="MB">MB</DropdownItem>
                    <DropdownItem key="NL">NL</DropdownItem>
                    <DropdownItem key="NS">NS</DropdownItem>
                    <DropdownItem key="ON">ON</DropdownItem>
                    <DropdownItem key="PE">NS</DropdownItem>
                    <DropdownItem key="QC">QC</DropdownItem>
                    <DropdownItem key="NT">NT</DropdownItem>
                    <DropdownItem key="NU">NU</DropdownItem>
                    <DropdownItem key="YT">YT</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="pb-2 text-lg font-semibold">
                Rental price per:
              </label>
              <div className="flex flex-row gap-4 lg:flex-auto">
                <div className="flex flex-col lg:grow-[1]">
                  <label className="pb-2 text-sm font-semibold">Day</label>
                  <input
                    type="text"
                    name="day"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col lg:grow-[1]">
                  <label className="pb-2 text-sm font-semibold">Week</label>
                  <input
                    type="text"
                    name="week"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col lg:grow-[1]">
                  <label className="pb-2 text-sm font-semibold">Month</label>
                  <input
                    type="text"
                    name="month"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 lg:flex-auto">
              <div className="flex flex-col lg:grow-[2]">
                <label className="pb-2 text-sm font-semibold">Item Value</label>
                <input
                  type="text"
                  name="item-value"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col lg:grow-[1]">
                <label className="pb-2 text-sm font-semibold">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="pb-2 text-sm font-semibold">
                Minimum rental Days
              </label>
              <input
                type="text"
                name="min-rent-days"
                className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* <div className="flex gap-4 mt-4 text-sm font-medium tracking-normal leading-5 text-center w-full">
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
                    </div> */}

            <div className="flex gap-4">
              <Link href={"/"} className="min-w-fit grow">
                <div className="mt-4 min-w-fit grow items-center justify-center rounded-lg border border-primary bg-white px-6 py-4 text-center text-lg font-semibold leading-5 tracking-normal text-primary shadow shadow-primary">
                  Back
                </div>
              </Link>
              <Link href={"/posting/confirmation"} className="min-w-fit grow">
                <div className="mt-4 min-w-fit grow items-center justify-center rounded-lg border border-primary bg-slate-300 px-6 py-4 text-center text-lg font-semibold leading-5 tracking-normal text-primary shadow shadow-primary">
                  List item
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
