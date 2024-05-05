import './Works.css'
const Works = () => {
  return (
    <div className="works">
      {/* leftSide */}
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          I worked for Vala blue Company .
          <br />
          And As A Freelancer I have been developing websites and apps for Restaurants
          <br />
          and for Small Businesses for the past 2 years .
        </span>

        <button className="button s-button">Hire me </button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
};

export default Works;
