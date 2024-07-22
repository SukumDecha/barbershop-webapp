import Footer from "../layouts/footer";
import Appointment from "../ui/appointment";
import BookingBanner from "../ui/booking.banner";
import Experience from "../ui/experience";
import HeroBanner from "../ui/hero.banner";
import InfoBox from "../ui/info.box";
import Services from "../ui/service";
import WhyUs from "../ui/whyus";

const HomeScreen = () => {
  return (
    <div>
      <HeroBanner />
      <div className="-context">
        <InfoBox />
        <Experience />
        <Services />
        <BookingBanner />
        <WhyUs />
        <Appointment />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
