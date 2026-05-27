import Image from "next/image";
import Link from "next/link";
import { Mail, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-[#f8f9fa] sm:mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-20 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-2xl shadow-sm sm:h-16 sm:w-16">
                <Image
                  src="/images/Pulsefy_logo.png"
                  width={64}
                  height={64}
                  alt="Pulsefy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h1 className="text-2xl font-semibold text-[#202124] sm:text-3xl">
                  Pulsefy
                </h1>

                <p className="text-[#5f6368] mt-1">No ads. Just music.</p>
              </div>
            </div>

            <p className="mt-6 text-[#5f6368] leading-8 max-w-md">
              Pulsefy is a modern offline music player built for people who want
              a clean, fast and premium music experience without interruptions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-medium text-[#202124] mb-6">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#5f6368] hover:text-[#01875f] transition"
              >
                Home
              </Link>

              <a
                href="#about"
                className="text-[#5f6368] hover:text-[#01875f] transition"
              >
                About App
              </a>

              <a
                href="#reviews"
                className="text-[#5f6368] hover:text-[#01875f] transition"
              >
                Ratings & Reviews
              </a>

              <a
                href="https://mahiman1506.github.io/Privacy-Policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#5f6368] hover:text-[#01875f] transition"
              >
                <ShieldCheck size={18} />
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-medium text-[#202124] mb-6">Connect</h2>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:mahimanlabs@gmail.com"
                className="flex items-center gap-3 text-[#5f6368] hover:text-[#01875f] transition"
              >
                <Mail size={18} />
                Contact Developer
              </a>

              <a
                href="https://github.com/mahiman1506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#5f6368] hover:text-[#01875f] transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-center md:mt-14 md:flex-row md:text-left">
          <p className="text-[#5f6368] text-sm">
            © 2026 Pulsefy • All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-[#5f6368]">
            <span>Made with</span>

            <Heart size={16} className="fill-red-500 text-red-500" />

            <span>by Mahiman Labs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
