export default function AboutApp() {
  return (
    <section id="about" className="px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h1 className="mb-8 text-2xl font-medium text-[#202124] sm:mb-10 sm:text-[32px]">
          About this app
        </h1>

        {/* Main Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          {/* Intro */}
          <div className="space-y-5">
            <p className="text-[16px] leading-8 text-[#5f6368] sm:text-[17px]">
              🎧 <span className="font-semibold text-[#202124]">Pulsefy</span> –
              Offline Music Player
            </p>

            <p className="text-[#5f6368] leading-8">
              No ads. Just music. Experience music the way it should be —
              simple, fast, and distraction-free.
            </p>

            <p className="text-[#5f6368] leading-8">
              Pulsefy is a beautifully designed offline music player that lets
              you enjoy your favorite songs anytime, anywhere without
              interruptions.
            </p>
          </div>

          {/* Why Choose */}
          <div className="mt-10 sm:mt-12">
            <h2 className="mb-6 text-xl font-medium text-[#202124] sm:text-2xl">
              ✨ Why Choose Pulsefy?
            </h2>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div className="rounded-2xl border border-gray-200 p-5 sm:p-6">
                <h3 className="font-semibold text-lg">
                  🎵 Pure Music Experience
                </h3>

                <p className="text-[#5f6368] mt-3 leading-7">
                  No ads. No interruptions. Just your music.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 sm:p-6">
                <h3 className="font-semibold text-lg">
                  ⚡ Fast & Smooth Performance
                </h3>

                <p className="text-[#5f6368] mt-3 leading-7">
                  Lightweight and optimized for seamless playback.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 sm:p-6">
                <h3 className="font-semibold text-lg">
                  📂 Smart Music Library
                </h3>

                <p className="text-[#5f6368] mt-3 leading-7">
                  Favorites, playlists, downloads, and recently played songs
                  organized beautifully.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 sm:p-6">
                <h3 className="font-semibold text-lg">📴 Offline Anytime</h3>

                <p className="text-[#5f6368] mt-3 leading-7">
                  No internet? No problem. Enjoy your music anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 sm:mt-14">
            <h2 className="mb-8 text-xl font-medium text-[#202124] sm:text-2xl">
              🚀 Key Features
            </h2>

            <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
              {[
                "No Ads – 100% distraction-free",
                "Supports all major audio formats",
                "Create & manage playlists",
                "One-tap favorite songs",
                "Fast search & quick access",
                "Lightweight & battery-friendly",
                "Modern premium UI",
                "Beautiful customizable themes",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#01875f]" />

                  <p className="text-[#5f6368]">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mt-12 sm:mt-14">
            <h2 className="mb-6 text-xl font-medium text-[#202124] sm:text-2xl">
              💡 Coming Soon
            </h2>

            <div className="flex flex-wrap gap-4">
              {[
                "Equalizer 🎚️",
                "Advanced Search 🔍",
                "Smart Playlists 🤖",
                "More Themes 🎨",
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#f1f3f4] text-[#202124]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-gray-200 pt-8 sm:mt-16">
            <p className="text-[16px] leading-8 text-[#5f6368] sm:text-[17px]">
              🎶 Built for music lovers who want a clean, fast, and premium
              offline music experience.
            </p>

            <p className="mt-5 text-[#202124] font-medium text-lg">
              Simple • Fast • Offline
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
