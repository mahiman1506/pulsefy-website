import AboutApp from "./component/AboutApp";
import AboutDeveloper from "./component/AboutDeveloper";
import AppDetails from "./component/AppHero";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Ratings from "./component/Ratings";
import ScreenshotCarousel from "./component/ScreenshotCarousel";
import SupportSection from "./component/Support";

export default function Home() {
  return (
    <>
      <meta
        name="google-site-verification"
        content="pjZLFr9OjLxjqfCg8tMCmNVV209_x2A2scXQNWy13oU"
      />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Pulsefy",
            applicationCategory: "MusicApplication",
            operatingSystem: "Android",
            description:
              "Pulsefy is a modern offline music player with no ads, playlists, themes and premium music experience.",

            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "59600",
            },

            author: {
              "@type": "Organization",
              name: "Mahiman Labs",
            },
          }),
        }}
      />

      <div className="min-h-screen w-full bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero */}
          <section>
            <AppDetails />
          </section>

          {/* Screenshots */}
          <section>
            <ScreenshotCarousel />
          </section>

          {/* Ratings */}
          <section id="reviews">
            <Ratings />
          </section>

          {/* About App */}
          <section id="about">
            <AboutApp />
          </section>

          {/* Developer */}
          <section id="developer">
            <AboutDeveloper />
          </section>

          {/* Support */}
          <section id="support">
            <SupportSection />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
