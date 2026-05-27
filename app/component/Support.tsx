import { Heart } from "lucide-react";

export default function SupportSection() {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-5 text-center shadow-sm sm:p-8 lg:p-12">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5ee] sm:h-20 sm:w-20">
            <Heart size={36} className="fill-[#01875f] text-[#01875f]" />
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-2xl font-semibold text-[#202124] sm:mt-8 sm:text-[34px]">
            Support Pulsefy
          </h1>

          <p className="mt-5 text-[#5f6368] leading-8 max-w-2xl mx-auto">
            If you enjoy using Pulsefy and want to support future updates,
            features and improvements, you can support the developer using
            Google Pay.
          </p>

          {/* QR */}
          <div className="mt-10 flex justify-center">
            <a
              href="upi://pay?pa=bhattmahiman0-1@okicici&pn=Mahiman Labs&tn=Support Pulsefy"
              className="group w-full cursor-pointer rounded-2xl border border-gray-200 px-4 py-5 transition hover:border-[#01875f] hover:shadow-md sm:w-auto sm:px-6"
            >
              <p className="text-[#202124] font-medium text-center">
                Support via UPI
              </p>

              <p className="mt-3 break-all text-center text-base font-medium text-[#01875f] group-hover:underline sm:text-lg">
                bhattmahiman0-1@okicici
              </p>

              <p className="mt-2 text-sm text-[#5f6368] text-center">
                Tap to pay with Google Pay, PhonePe or Paytm
              </p>
            </a>
          </div>

          {/* Thank You */}
          <p className="mt-10 text-sm text-[#5f6368]">
            Every contribution helps improve Pulsefy ❤️
          </p>
        </div>
      </div>
    </section>
  );
}
