import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ChooseStay.css";
import chooseImage from "../../assets/room4.jpg";

const ChooseStay = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="choose-container">
        <div className="choose_details" data-aos="fade-right">
          <h4>
            We offer you variety of properties,including houses, apartments
            flats and land for rent in your hand.
          </h4>
          <button className="choose_btn">Learn More</button>
        </div>
        <div className="choose_image" data-aos="fade-left">
          <img src={chooseImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default ChooseStay;
