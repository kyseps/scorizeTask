import React from "react";

import { LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";

export default function Nav() {
  return (
    <nav className="bg-white rounded-xl">
      <div className="flex gap-3 items-center px-2">
        <div className="flex gap-3 items-center">
          <Button
            variant="default"
            className="bg-[#94166d] flex items-center gap-2 px-3 py-2 rounded-xl text-white"
          >
            ورود / ثبت نام
            <PersonIcon />
          </Button>

          <Link className="p-3 border-solid border border-[#94166d] rounded-xl">
            <LockClosedIcon className="text-[#94166d]" />
          </Link>
        </div>

        <div className=" flex items-center ml-auto gap-7">
          <div className="flex gap-7 ml-[357px]">
            <NavLink className="py-[8px]" to="blog">
              بلاگ
            </NavLink>
            <NavLink className="py-[8px]" to="about">
              درباره ما
            </NavLink>
            <NavLink className="py-[8px]" to="achievements">
              موفقیت ها
            </NavLink>
            <NavLink className="py-[8px]" to="/">
              رزرو مشاوره
            </NavLink>
          </div>
          <Separator className="bg-[#94166d] h-5" orientation="vertical" />

          <Link to="/">
            <div className="flex gap-2 items-center">
              <span>
                SCO<span className="text-[#94166d]">RIZE</span>
              </span>
              <Separator className="bg-[#94166d] h-5" orientation="vertical" />
              <span className="text-[#94166d]">
                <span className="text-black">اسکو</span>
                رایز
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
