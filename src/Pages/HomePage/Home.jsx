import React, { useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import backgroundImage from "../../assets/3dback2.jpg";
import room4 from "../../assets/room4.jpg";
import HomeSearch from "../../Components/HomeSearch/HomeSearch";
import ChooseStay from "../../Components/ChosseStay/ChooseStay";

const Home = () => {
  // HomePage
  let headline = useRef(null);
  let subheadline = useRef(null);
  let background = useRef(null);

  //Center-Container
  // let backimage = useRef(null);
  // let writtendata = useRef(null);
  // let writtencontent = useRef(null);
  // let writtencontent1 = useRef(null);

  // HomePage GSAP
  useEffect(() => {
    // gsap.from(headline, {
    //   opacity: 0,
    //   color: "black",
    //   background: "#fff0",
    //   duration: 0.5,
    //   stagger: "1",
    //   delay: 2,
    // });
    gsap.from(background, {
      scale: 2,
      duration: 17,
      delay: 2,
      repeat: -1,
      yoyo: 1,
    });
    // gsap.from(subheadline, {
    //   opacity: 0,
    //   color: "black",
    //   background: "black",
    //   duration: 1,
    //   delay: 2.1,
    // });
  }, []);

  return (
    <>
      <div className="homepage">
        <div className="background-video">
          <img
            src={backgroundImage}
            alt=""
            ref={(el) => {
              background = el;
            }}
          />
        </div>
        <div className="home-container">
          <div className="home-container-child">
            <div className="home-content">
              <h1
              // ref={(el) => {
              //   headline = el;
              // }}
              >
                We Believe In Shelter
              </h1>
              <span
              // ref={(el) => {
              //   subheadline = el;
              // }}
              >
                Having difficult to live, let's join us and find your happy
                stay...
              </span>
            </div>
            <div className="home-content">
              <HomeSearch />
            </div>
          </div>
        </div>
      </div>

      <div className="center-container">
        <ChooseStay />
      </div>
    </>
  );
};

export default Home;
