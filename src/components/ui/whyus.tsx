import { FaGoogle, FaInstagram, FaStar } from "react-icons/fa";
import { RiMastercardLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const reasons = [
  {
    icon: <TbLicense />,
    title: "Licensed",
    desc: "Our team of licensed and insured barbers follow strict cleanliness and sanitation guidelines for a safe and comfortable experience.",
  },
  {
    icon: <RiMastercardLine />,
    title: "Masters",
    desc: "Our barbers are passionate about their craft and aim to provide high-quality haircuts for every client. ",
  },
  {
    icon: <VscWorkspaceTrusted />,
    title: "Trusted",
    desc: "We have a strong online reputation with a 5-star rating from over 100 thousand satisfied clients.",
  },
];

const perfomances = [
  {
    icon: <FaGoogle />,
    title: "Google",
    rating: "4.9",
    reviews: "196 reviews",
  },
  {
    icon: <img src="/barber.jpg" alt="barber" />,
    title: "The best barber services",
    desc: "Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor",
    barberName: "John Doe",
  },
  {
    icon: <FaInstagram />,
    title: "Instragram",
    rating: "5.0",
    reviews: "301 reviews",
  },
];

const renderStars = (amount: number) => {
  const stars = [];

  for (let i = 0; i < amount; i++) {
    stars.push(<FaStar />);
  }

  return stars;
};
const WhyUs = () => {
  return (
    <div className="whyus container">
      <div className="-title">
        <h1>Browse our services</h1>
        <p>
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
          prci eu magna in senectus sit eget justo eget.
        </p>
      </div>

      <div className="-reasons">
        {reasons.map((reason, index) => (
          <div key={index} className="-box">
            <div className="-icon">{reason.icon}</div>
            <h2 className="-title">{reason.title}</h2>
            <hr />
            <p className="-desc">{reason.desc}</p>
          </div>
        ))}
      </div>

      <div className="-perfomances">
        {perfomances.map((perfomance, idx) => {
          if (perfomance.desc) {
            return (
              <div className="-perfomance barber" key={idx}>
                <div className="-avatar">{perfomance.icon}</div>
                <div className="-stars">{renderStars(5)}</div>

                <h2 className="-title">{perfomance.title}</h2>
                <p className="-desc">{perfomance.desc}</p>
                <h3 className="-barber">{perfomance.barberName}</h3>
              </div>
            );
          }

          return (
            <div className="-perfomance" key={idx}>
              <div className="-icon">{perfomance.icon}</div>
              <div className="-title">{perfomance.title}</div>
              <div className="-ratings">{perfomance.rating}</div>
              <div className="-stars">{renderStars(5)}</div>
              <div className="-reviews">{perfomance.reviews}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
