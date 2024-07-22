import { FiInstagram, FiMail, FiPhoneCall } from "react-icons/fi";
import CtaButton from "./cta.button";

const contacts = [
  {
    icon: <FiPhoneCall />,
    title: "Give us a call",
    desc: "(+66) 92-889-0498",
  },
  {
    icon: <FiMail />,
    title: "Send us an email",
    desc: "ninemaster12gt@gmail.com",
  },
  {
    icon: <FiInstagram />,
    title: "Dm via Instragram",
    desc: "@barbercut",
  },
];

const Appointment = () => {
  return (
    <div className="appointment">
      <div className="-title">
        <h1>Make An Appointment</h1>
        <p>
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
          prci eu magna in senectus sit eget justo
        </p>
      </div>

      <CtaButton text="Book now" />

      <div className="-contacts">
        {contacts.map((contact, index) => (
          <div className="-box" key={index}>
            <div className="-icon">{contact.icon}</div>
            <div className="-desc">
              <h1>{contact.title}</h1>
              <p>{contact.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
