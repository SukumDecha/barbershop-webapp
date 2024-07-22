import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com",
  },
  {
    icon: <FaPinterest />,
    url: "https://www.pinterest.com",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="-container">
        <div className="-contents">
          <p>© Copyright 2022 barbershop - All right reserved</p>
        </div>

        <div className="-socials">
          {contacts.map((contact, index) => (
            <a key={index} href={contact.url} target="_blank" rel="noreferrer">
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
