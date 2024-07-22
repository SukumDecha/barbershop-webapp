const Experience = () => {
  return (
    <div className="experience">
      <div className="-details">
        <h1 className="-title">Your personal barber service at your home</h1>
        <p className="-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="-stats">
          <div className="-stat">
            <h3 className="-quantity">
              99 <span>%</span>
            </h3>
            <p className="-name">Customer Satisfaction</p>
          </div>
          <div className="-stat">
            <h3 className="-quantity">
              10 <span>+</span>
            </h3>
            <p className="-name">years of experience</p>
          </div>
        </div>
      </div>
      <div className="-image">
        <img alt="thumbnails" src="/thumbnail.png" />
      </div>
    </div>
  );
};

export default Experience;
