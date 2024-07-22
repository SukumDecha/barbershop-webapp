import { BsTelephoneInboundFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

const infoItems = [
  {
    icon: <IoMdPin className="-icon" />,
    title: "Address",
    description: "3696 Lynden Road, Lefroy Ontario Canada",
  },
  {
    icon: <BsTelephoneInboundFill className="-icon" />,
    title: "Phone",
    description: "+62(123)-456-7890\n+62(123)-456-7890",
  },
  {
    icon: <FaClock className="-icon" />,
    title: "Hours",
    description: "Mon – Sat: 9AM – 8PM\nSun: 9AM – 6PM",
  },
];

const InfoBox = () => (
  <div className="info-box container">
    {infoItems.map(({ icon, title, description }, index) => (
      <div className="-box" key={index}>
        {icon}
        <p className="-title">{title}</p>
        <hr />
        {description.split("\n").map((line, idx) => (
          <p className="-desc" key={idx}>
            {line}
          </p>
        ))}
      </div>
    ))}
  </div>
);

export default InfoBox;
