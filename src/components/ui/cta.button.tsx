interface IProps {
  text: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
}

const CtaButton = ({ text, onClick, type = "primary" }: IProps) => {
  return (
    <button className={`cta-btn ${type}`} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default CtaButton;
