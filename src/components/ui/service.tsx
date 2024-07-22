import { FaScissors } from "react-icons/fa6";
import {
  GiBeard,
  GiComb,
  GiNecklaceDisplay,
  GiStandingPotion,
} from "react-icons/gi";
import CtaButton from "./cta.button";

const services = [
  {
    icon: <FaScissors />,
    title: "Adult Haircut",
    description:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo eget.",
    price: "$39",
  },
  {
    icon: <GiComb />,
    title: "Kids Haircut",
    description:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo eget.",
    price: "$29",
  },
  {
    icon: <FaScissors />,
    title: "Bread Trim",
    description:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo eget.",
    price: "$29",
  },
  {
    icon: <GiNecklaceDisplay />,
    title: "Neck Shave",
    description:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo eget.",
    price: "$39",
  },
  {
    icon: <GiStandingPotion />,
    title: "Scalp Moisturizing",
    description:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo eget.",
    price: "$10",
  },
  {
    icon: <GiBeard />,
    title: "Beard Grooming",
    description:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo eget.",
    price: "$49",
  },
];

const Services = () => {
  return (
    <div className="our-service container">
      <div className="-title">
        <h1>Browse our services</h1>
        <p>
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
          prci eu magna in senectus sit eget justo eget.
        </p>
      </div>
      <div className="-services">
        {services.map((service, index) => (
          <div key={index} className="-service">
            <div className="-icons">{service.icon}</div>
            <div className="-desc">
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <span>{service.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="-cta">
        <CtaButton text="Book an appointment" />
      </div>
    </div>
  );
};

export default Services;
