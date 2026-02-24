import React, { useRef, useState, useEffect } from "react";
import './Maruti1.css'
import Navbar from '../components/Navbar'
import chair11 from "/assets/wheelchair2.png"; // use actual path
import maruthi1 from '/assets/selfe.mp4'
import chair2 from '/assets/selfe1.png';
import chair1 from '/assets/selfe2.png';
import Footer from "../components/Footer";
import preview from '/assets/preview.png'

// ✅ 1. Reusable hook for scroll animations
const useAnimateOnScroll = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};


export default function Selfe ()  {
  const images = [chair1, chair2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ 2. Add hooks for the elements to animate
  const [firstImgRef, isFirstImgVisible] = useAnimateOnScroll(0.3);
  const [firstContentRef, isFirstContentVisible] = useAnimateOnScroll(0.3);


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
        
        {/* ✅ 3. Apply ref and classes to the Left Image */}
        <div 
          ref={firstImgRef}
          className={`maruti-image scroll-animate slide-in-left ${isFirstImgVisible ? "visible" : ""}`}
        >
          <img src={chair11} alt="Maruti 1.0" />
        </div>

        {/* ✅ 4. Apply ref and classes to the Right Content */}
        <div 
          ref={firstContentRef}
          className={`maruti-content scroll-animate slide-in-right ${isFirstContentVisible ? "visible" : ""}`}
        >
<h2 className="maruti-title">SELF-E</h2>
<h3 className="maruti-subtitle">Autonomous Smart Wheelchair</h3>

<ul className="maruti-features">
  <li>
    <strong>Autonomous navigation:</strong> Uses SLAM-based mapping and
    path-planning algorithms to navigate safely and independently in indoor
    environments.
  </li>
  <li>
    <strong>ROS-based control system:</strong> Built on the ROS platform with
    a dedicated navigation stack for reliable autonomous and assisted operation.
  </li>
  <li>
    <strong>LiDAR-enabled safety:</strong> Equipped with LiDAR sensors for
    real-time mapping, obstacle detection, and collision avoidance.
  </li>
  <li>
    <strong>Dual control modes:</strong> Supports both autonomous navigation
    and manual control through a mobile application for user and caregiver
    flexibility.
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
      <div className="video-wrapper">
      <video
        className="video-player"
        src={maruthi1}
        poster={preview}
        controls
        preload="metadata"
        controlsList="nodownload"   
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

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
<h2 className="maruti-title">SELF-E</h2>
<h3 className="maruti-subtitle">Autonomous Smart Wheelchair</h3>

<ul className="maruti-features1">
  <li>Navigation – Autonomous & Manual</li>
  <li>Mapping – SLAM-based Environment Mapping</li>
  <li>Sensors – LiDAR for Obstacle Detection</li>
  <li>Control Platform – ROS</li>
  <li>Control Interface – Mobile Application</li>
  <li>Obstacle Avoidance – Real-time</li>
  <li>Use Case – Hospitals, Elderly Care, Public Spaces</li>
  <li>Operation Mode – Autonomous & Assisted</li>
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