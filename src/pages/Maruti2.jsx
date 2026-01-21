import React, { useRef, useState, useEffect } from "react";
import './Maruti2.css'
import Navbar from '../components/Navbar'
import chair11 from "../assets/maruti2.png"; // use actual path
import maruthi1 from '../assets/maruthi2.mp4'
import chair1 from '../assets/maruti2i.webp';
import chair2 from '../assets/maruti2i1.webp';
import chair3 from '../assets/maruti2i4.webp';
import Footer from "../components/Footer";
import preview from '../assets/preview.png'

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

export default function Maruti2 ()  {
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
          <img src={chair11} alt="Maruti 2.0" />
        </div>

        {/* ✅ 4. Apply ref and classes to the Right Content */}
        <div 
          ref={firstContentRef}
          className={`maruti-content scroll-animate slide-in-right ${isFirstContentVisible ? "visible" : ""}`}
        >
          <h2 className="maruti-title">MARUTI 2.0</h2>
          <h3 className="maruti-subtitle">Foldable Wheelchair</h3>
          <ul className="maruti-features">
            <li>
              Our foldable wheelchair exemplifies this philosophy.
            </li>
            <li>
              Compact design: fold and stow with a simple gesture. Perfect for travelers and those constantly on the go.
            </li>
            <li>
              Lightweight frame: crafted using state-of-the-art materials that ensure strength without adding weight. 
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
          <h2 className="maruti-title">MARUTI 2.0</h2>
          <h3 className="maruti-subtitle">Foldable Wheelchair</h3>
          <ul className="maruti-features1">
          <li>Movable arm rest </li>
          <li>Brake - electromagnetic brake </li>
          <li>Max speed - 6 km/H</li>
          <li>Loading capacity - 100 kg</li>
          <li>Voltage - 24v</li>
          <li>Weight - 28 kg</li>
          <li>Width of Armrests – 4.5 cm</li>
          <li>Seat Width – 46 cm</li>
          <li>Seat Depth – 46 cm</li>
          <li>Seat Height – 50 cm</li>
          <li>Material- Stainless Steel</li>
          <li>Dimension - (L x W x H) 68x30x100 cm</li>
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