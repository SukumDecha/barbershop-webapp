import CtaButton from "./cta.button";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="-content">
        <h1 className="-title">THE ULTIMATE CONVENIENCE FOR BUSY PEOPLE</h1>
        <p className="-desc">
          Experience the Convenience of In-Home Barber Services
        </p>

        <div className="-cta">
          <CtaButton
            text="Book an appointment"
            onClick={() => console.log("Book Now")}
          />
          <CtaButton
            text="Browse Services"
            onClick={() => console.log("Learn More")}
            type="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
