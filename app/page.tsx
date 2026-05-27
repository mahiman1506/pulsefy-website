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
    <div className="bg-white w-full h-full">
      <Header />
      <AppDetails />
      <ScreenshotCarousel />
      <Ratings />
      <AboutApp />
      <AboutDeveloper />
      <SupportSection />
      <Footer />
    </div>
  );
}
