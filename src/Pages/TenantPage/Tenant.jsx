import React, { useEffect, useState } from "react";
import "./Tenant.css";
import Navbar from "../../Components/Navbar/Navbar";

const images = [
  "pic1.jpg",
  "pic2.jfif",
  "pic3.jpg",
  // Add more image URLs here
];

const Tenant = () => {
  const bgcolor = "#000000b6";
  const height = "4rem";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="tenant_container">
        <Navbar bgcolor={bgcolor} height={height} />
        <div className="tenant_card_container">
          <div className="search_filter">
            <div className="input_filter">
              <input type="text" placeholder="room type"/>
            </div>
            <div className="input_filter">
              <input type="text" placeholder="location"/>
            </div>
            <div>
              <button className="tenant_filter_btn">Search</button>
            </div>
          </div>
          <p className="total_cards">
            <span>207 results found </span>| Stay in Jagatpura
          </p>
          <div className="tenant_card">
            <div className="slider">
              <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="slider-image"
              />
            </div>
            <div className="room_details">
              <p className="room_address">CBI colony | Jagatpura</p>
              <div className="room_gender_details">
                <p>
                  1 BHK Room for Rent <span>-- for Boy's</span>
                </p>
              </div>
              <div className="pricing">
                <h4>
                  Rs 3500 <span>/month</span>
                </h4>
                <h4>1 BHK</h4>
              </div>
              <div className="room_basic_details">
                <p>
                  This room includes Seprate Bathroom and Celling fan is also
                  provided.
                </p>
                <ul>
                  <li>Light bill is not included</li>
                  <li>Water bill has to pay sperately</li>
                  <li>After 10 PM nighting is not allowed</li>
                </ul>
              </div>
              <div className="room_contact_details">
                <button className="owner_cnt_number">Contact</button>
                <button className="owner_room_detailing">View More</button>
              </div>
            </div>
          </div>
          <div className="tenant_card">
            <div className="slider">
              <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="slider-image"
              />
            </div>
            <div className="room_details">
              <p className="room_address">CBI colony | Jagatpura</p>
              <div className="room_gender_details">
                <p>
                  1 BHK Room for Rent <span>-- for Boy's</span>
                </p>
              </div>
              <div className="pricing">
                <h4>
                  Rs 3500 <span>/month</span>
                </h4>
                <h4>1 BHK</h4>
              </div>
              <div className="room_basic_details">
                <p>
                  This room includes Seprate Bathroom and Celling fan is also
                  provided.
                </p>
                <ul>
                  <li>Light bill is not included</li>
                  <li>Water bill has to pay sperately</li>
                  <li>After 10 PM nighting is not allowed</li>
                </ul>
              </div>
              <div className="room_contact_details">
                <button className="owner_cnt_number">Contact</button>
                <button className="owner_room_detailing">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tenant;
