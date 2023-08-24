import React, { useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import backgroundImage from "../../assets/3dback2.jpg";
import room4 from "../../assets/room4.jpg";
import HomeSearch from "../../Components/HomeSearch/HomeSearch";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  // HomePage
  let headline = useRef(null);
  let subheadline = useRef(null);
  let background = useRef(null);

  //Center-Container
  let backimage = useRef(null);
  let writtendata = useRef(null);
  let writtencontent = useRef(null);
  let writtencontent1 = useRef(null);

  // HomePage GSAP
  useEffect(() => {
    gsap.from(headline, {
      opacity: 0,
      color: "black",
      background: "#fff0",
      duration: 0.5,
      stagger: "1",
      delay: 2,
    });
    gsap.from(background, {
      scale: 2,
      duration: 17,
      delay: 2,
      repeat: -1,
      yoyo: 1,
    });
    gsap.from(subheadline, {
      opacity: 0,
      color: "black",
      background: "black",
      duration: 1,
      delay: 2.1,
    });
  }, []);

  //Center-Container GSAP

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(writtendata, {
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: writtendata,
        scroller: "body",
        // markers: "true",
        start: "top 80%",
        end: "top 10%",
        scrub: "true",
      },
    });
    gsap.from(writtencontent, {
      opacity: 0,
      x: -234,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: writtendata,
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: " true",
      },
    });
    gsap.from(writtencontent1, {
      opacity: 0,
      x: 234,
      duration: 2,
      delay: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: writtendata,
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: " true",
      },
    });
    gsap.from(backimage, {
      scale: 2,
      overflow: "hidden",
      duration: 10,
      delay: 2,
      repeat: -1,
      yoyo: "true",
    });
  }, []);
  return (
    <>
      <div className="homepage">
        <Navbar />
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
                ref={(el) => {
                  headline = el;
                }}
              >
                We Believe In Shelter
              </h1>
              <span
                ref={(el) => {
                  subheadline = el;
                }}
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
        <div
          id="writtendata"
          ref={(el) => {
            writtendata = el;
          }}
        >
          <div className="written-box1" id="box1">
            <div
              className="written-boxitem"
              id="written-message"
              ref={(el) => {
                writtencontent = el;
              }}
            >
              <p>
                We offer you variety of properties,including houses, apartments
                flats and land for rent in your hand.
              </p>
            </div>

            <button id="writtenbtn">Learn More</button>
          </div>

          <div
            className="written-box2"
            id="box2"
            ref={(el) => {
              writtencontent1 = el;
            }}
          >
            <img
              ref={(el) => {
                backimage = el;
              }}
              src={room4}
              className="room4"
              alt="./images/room4.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
