import React, { useRef, useState, useEffect } from "react";
import './Maruti1.css'
import Navbar from '../components/Navbar'
import chair11 from "/assets/smorphi.png"; // use actual path

import chair1 from '/assets/smarp2.webp';
import chair2 from '/assets/smorphi1.png';

import Footer from "../components/Footer";

export default function SmorphiV2 ()  {
  const images = [chair1, chair2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
       <div>
      <Navbar />
      <div className="maruti-container">
        {/* Left - Image */}
        <div className="maruti-image">
          <img src={chair11} alt="Maruti 1.0" />
        </div>

        {/* Right - Content */}
        <div className="maruti-content">
          <h2 className="maruti-title">Smorphi V2 squarebot</h2>
        
          <ul className="maruti-features">
            <li>
              The Smorphi robot is a modular, reconfigurable robot designed for educational purposes. It is made up of individual blocks that can be connected together in different ways to create different shapes and functionalities.
            </li>
            <li>
              This makes it a versatile tool that can be used to teach a variety of concepts, from basic coding to more advanced robotics principles. The Smorphi robot is equipped with a variety of sensors, including ultrasonic sensors, infrared sensors, and a camera. 
            </li>
          </ul>
          <button
  className="quote-btn"
  onClick={() => (window.location.href = "/contact")}
>
  GET QUOTE
</button>

        </div>
      </div>
      {/**/}

      <div className="maruti-container1">
        {/* Left - Image */}
        <div className="maruti-image">
        <div className="carousel">
  <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
  <img src={images[currentIndex]} alt={`Wheelchair ${currentIndex + 1}`} />
  <button className="carousel-btn next" onClick={nextSlide}>›</button>
</div>

        </div>

        {/* Right - Content */}
        <div className="maruti-content">
          <h2 className="maruti-title">Specifications</h2>
          <ul className="maruti-features1">
 <li><strong>Dimensions (L × W × H):</strong> 20 × 10 × 45 cm</li>
  <li><strong>Payload Capacity:</strong> 1 kg</li>
  <li><strong>Wheel Diameter:</strong> 1 cm</li>
  <li><strong>Maximum Angular Speed of Robot:</strong> 1.25 rad/s</li>
  <li><strong>Type of Motor:</strong> Brushed DC</li>
          </ul>
          <button
  className="quote-btn"
  onClick={() => (window.location.href = "/contact")}
>
  GET QUOTE
</button>

        </div>
      </div>

  <Footer/>
    </div>
  )
}
