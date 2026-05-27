"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import ShareApp from "./ShareApp";

export default function AppDetails() {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Content */}
        <div className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          {/* App Name */}
          <div>
            <h1 className="text-4xl font-semibold text-[#202124] sm:text-5xl lg:text-6xl">
              Pulsefy
            </h1>

            <h2 className="mt-3 text-lg font-medium text-[#01875f] sm:mt-4 sm:text-xl">
              Mahiman Labs
            </h2>
          </div>

          {/* Rating + Downloads */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:justify-start">
            <div className="border-r pr-6 sm:pr-8">
              <div className="flex items-center justify-center gap-1 font-medium lg:justify-start">
                4.3
                <Star size={15} fill="black" />
              </div>

              <p className="text-[#5f6368] text-sm">59.6K reviews</p>
            </div>

            <div>
              <h2 className="font-medium">5M+</h2>
              <p className="text-[#5f6368] text-sm">Downloads</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 lg:justify-start">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/mahiman1506/Pulsefy/releases/download/Pulsefy/Pulsefy.apk",
                )
              }
              className="w-full rounded-lg bg-[#01875f] px-8 py-3 font-medium text-white hover:bg-[#0b6e4f] sm:w-auto"
            >
              Install
            </button>

            <button className="px-0 py-2 sm:px-6 sm:py-3">
              <a
                href="https://indusapp.store/48vmt1xw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-background-english.png"
                  alt="Get it on Indus Appstore"
                  width={160}
                  height={48}
                  className="h-auto w-40 object-contain"
                />
              </a>
            </button>

            <ShareApp />

            {/* <button className="flex items-center gap-2 text-[#01875f]">
              <BookmarkPlus size={20} />
              Add to wishlist
            </button> */}
          </div>

          {/* Terms */}
          {/* <p className="max-w-175 text-[#5f6368] text-sm">
            Google Play Games on PC is required to install this game on Windows.
            By downloading the app and the game, you agree to the Google Terms
            of Service and Google Play Terms of Service.
          </p> */}
        </div>

        {/* Right App Icon */}
        <div className="shrink-0">
          <Image
            src="/images/Pulsefy_logo.png"
            width={220}
            height={220}
            alt="Pulsefy"
            className="h-auto w-36 rounded-[28px] shadow-lg sm:w-48 sm:rounded-[34px] lg:w-55 lg:rounded-[40px]"
          />
        </div>
      </div>
    </section>
  );
}
