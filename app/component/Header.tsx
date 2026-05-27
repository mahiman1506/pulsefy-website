"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const menuList = [
    { name: "Games" },
    { name: "Apps" },
    { name: "Books" },
    { name: "Kids" },
  ];

  const [isActive, setIsActive] = useState("Apps");

  return (
    <header className="px-4 py-4 sm:px-6 lg:h-24 lg:px-8 lg:py-0">
      <div className="flex h-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex items-center justify-between gap-4 lg:contents">
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2 lg:order-1">
            <Image
              src="/images/playstore.png"
              width={40}
              height={40}
              alt="Playstore"
            />

            <h1 className="text-[#5f6368] text-lg font-medium sm:text-[20px]">
              Google Play
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex shrink-0 items-center gap-2.5 lg:order-3">
            <Image
              src="/images/search.png"
              width={25}
              height={25}
              alt="Search"
              className="cursor-pointer brightness-0 opacity-60"
            />
            <Image src="/images/help.png" width={30} height={30} alt="help" />
            <Image src="/images/user.png" width={32} height={32} alt="user" />
          </div>
        </div>

        {/* Menu */}
        <div className="flex h-12 w-full items-center justify-center gap-15 overflow-x-auto lg:order-2 lg:h-full lg:w-auto lg:flex-1 lg:justify-start lg:gap-10">
          {menuList.map((item) => (
            <div
              key={item.name}
              onClick={() => setIsActive(item.name)}
              className="relative flex h-full shrink-0 cursor-pointer items-center"
            >
              <span
                className={`font-medium transition-colors duration-300 ${
                  isActive === item.name ? "text-[#01875f]" : "text-[#5f6368]"
                }`}
              >
                {item.name}
              </span>

              <div
                className={`absolute mt-10 h-0.75 rounded-full transition-all duration-300 ${
                  isActive === item.name ? "w-10 bg-[#01875f]" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
