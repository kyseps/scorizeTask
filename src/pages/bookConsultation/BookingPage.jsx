import React from "react";
import { Button } from "../../components/ui/button";
import { PiAirplaneTiltDuotone } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function BookingPage() {
  return (
    <>
      <div className="relative flex justify-end pt-24 pr-3">
        <Button className="bg-[#94166d] rounded-lg py-0 px-1 flex items-center justify-center z-10 hover:bg-[#94166d]">
          <span>محاجرت تضمینی</span>
          <span className="bg-white h-9 w-9 flex items-center justify-center rounded-lg">
            <PiAirplaneTiltDuotone className="text-[#94166d] scale-150" />
          </span>
        </Button>
        <Button className="bg-white border-solid border-2 border-[#94166d] rounded-lg py-0 px-1 flex items-center justify-center absolute top-[101px] right-[8px] hover:bg-white">
          <span>محاجرت ضمینی</span>
          <span className="bg-white h-9 w-9 flex items-center justify-center rounded-lg">
            <PiAirplaneTiltDuotone className="text-[#94166d] scale-150" />
          </span>
        </Button>
      </div>
      <div dir="rtl" className="py-12 pr-3 relative">
        <p className="text-5xl pb-6">محاجرت به خارج از کشور </p>
        <span className="text-5xl pl-3">با</span>
        <button className="text-4xl border-2 border-solid border-[#94166d] px-4 py-2 rounded-lg font-bold text-[#94166d]">
          اسکورایز
        </button>
        <div
          dir="ltr"
          className="flex border-2 border-solid border-[#94166d] rounded-md w-72 absolute top-5 left-24 justify-end"
        >
          <input
            placeholder="scorize.com"
            type="search"
            className="w-full rounded-lg "
          />
          <div className="w-[34px] h-[28px] bg-[#94166d] flex items-center justify-center rounded-sm">
            <ImSearch className="text-white  rounded-md" />
          </div>
        </div>
      </div>
      <div className=" flex justify-end pr-3">
        <div className="w-fit">
          <div class="mydict">
            <div>
              <label>
                <input type="radio" name="radio" checked="" />
                <span>وقت سفارت</span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>محاجرت کاری</span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>سرمایه گذاری</span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>پذیرش تحصیلی</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center border-2 border-solid border-[#94166d] rounded-md gap-12 ml-auto  w-fit">
        <div className="bg-[#94166d] p-3 rounded-md">
          <ImSearch className="text-white scale-150" />
        </div>
        <div className="flex gap-5 items-center border-b-2 border-solid border-slate-300 p-1">
          <RiArrowDropDownLine className="scale-150" />
          <p>رشته مورد نظر</p>
        </div>
        <div className="flex gap-5 items-center border-b-2 border-solid border-slate-300 p-1">
          <RiArrowDropDownLine className="scale-150" />
          <p>مقطع موزد نظر</p>
        </div>
        <div className="flex gap-5 items-center border-b-2 border-solid border-slate-300 p-1">
          <RiArrowDropDownLine className="scale-150" />
          <DropdownMenu>
            <DropdownMenuTrigger>کشور مورد نظر</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>choose one</DropdownMenuLabel>
              <DropdownMenuItem>کانادا</DropdownMenuItem>
              <DropdownMenuItem>آلمان</DropdownMenuItem>
              <DropdownMenuItem>سوریه</DropdownMenuItem>
              <DropdownMenuItem>هلند</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
