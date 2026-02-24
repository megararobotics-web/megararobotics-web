import React, { useRef, useState, useEffect } from "react";
import './Maruti1.css'
import Navbar from '../components/Navbar'
import chair11 from "/assets/wheelchair1.png"; // use actual path
import maruthi1 from '/assets/maruthi1.mp4'
import chair1 from '/assets/wheelchair3.webp';
import chair2 from '/assets/wheelchair2.png';
import chair3 from '/assets/wheelchair1.webp';
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


export default function Maruti1 ()  {
  const images = [chair1, chair2, chair3];
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
          <h2 className="maruti-title">MARUTI 1.0</h2>
          <h3 className="maruti-subtitle">Non-Foldable Wheelchair</h3>
          <ul className="maruti-features">
            <li>
              <strong>Robust and advanced build:</strong> Built with a stainless-steel
              frame for enhanced strength and rust resistance. Includes a
              fast-charging lithium-ion battery for dependable, long-lasting
              performance.
            </li>
            <li>
              <strong>Stable and secure structure:</strong> Non-foldable design ensures
              maximum stability and safety, ideal for users who prioritize a
              solid and supportive wheelchair.
            </li>
            <li>
              <strong>Ergonomic comfort:</strong> Designed for prolonged use with padded
              armrests, adjustable leg rests, and a breathable backrest for
              all-day comfort.
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
          <h2 className="maruti-title">MARUTI 1.0</h2>
          <h3 className="maruti-subtitle">Non-Foldable Wheelchair</h3>
          <ul className="maruti-features1">
            <li>Brake - electromagnetic brake</li>
            <li>Max speed - 6 km/H</li>
            <li>Loading capacity - 100 kg</li>
            <li>Voltage – 24V</li>
            <li>Weight - 28 kg</li>
            <li>Dimension - (L x W x H) 51x50x106 cm</li>
            <li>Width of Armrests – 4.5 cm</li>
            <li>Seat Width – 38 cm</li>
            <li>Seat Depth – 47 cm</li>
            <li>Seat Height – 51 cm</li>
            <li>Material - Mild Steel</li>
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