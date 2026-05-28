import Image from "next/image";

export default function AboutDeveloper() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-2xl font-medium text-[#202124] sm:mb-10 sm:text-[32px]">
          About the developer
        </h1>

        <div className="rounded-3xl border border-gray-200 p-5 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Logo */}
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/Mahiman_Labs.png"
                width={80}
                height={80}
                alt="Mahiman Labs"
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-xl font-medium text-[#202124] sm:text-2xl">
                Mahiman Labs
              </h2>

              <p className="text-[#5f6368] mt-2 leading-7">
                Building modern, fast and ad-free music experiences for
                everyone.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:mahimanlabs@gmail.com"
              className="px-5 py-3 rounded-full bg-[#f1f3f4] hover:bg-[#e7e9ec] transition"
            >
              Contact Developer
            </a>

            <a
              href="https://github.com/mahiman1506"
              target="_blank"
              className="px-5 py-3 rounded-full bg-[#f1f3f4] hover:bg-[#e7e9ec] transition"
            >
              GitHub
            </a>

            <a
              href="https://mahiman-portfolio.vercel.app"
              target="_blank"
              className="px-5 py-3 rounded-full bg-[#f1f3f4] hover:bg-[#e7e9ec] transition"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
