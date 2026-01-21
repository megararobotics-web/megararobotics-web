import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar'
import chelonia from '../assets/cheloniaadv.png'
import chelonia1 from '../assets/cheloniabafeu.png'
import './CheloniaB1.css'
import Footer from '../components/Footer';
import cheloniavideo from '../assets/chelonia.mp4'
import thumbnil from '../assets/thumbnail.jpg'

export default function CheloniaA  ()  {
        const imageRef1 = useRef(null);
        const imageRef2 = useRef(null);
    
        const [animate1, setAnimate1] = useState(false);
        const [animate2, setAnimate2] = useState(false);
    
        useEffect(() => {
            const observer1 = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setAnimate1(true);
                        observer1.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
    
            const observer2 = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setAnimate2(true);
                        observer2.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

    
            if (imageRef1.current) observer1.observe(imageRef1.current);
            if (imageRef2.current) observer2.observe(imageRef2.current);
    
            return () => {
                if (imageRef1.current) observer1.unobserve(imageRef1.current);
                if (imageRef2.current) observer2.unobserve(imageRef2.current);
                
            };
        }, []);
  return (
    <div>
        <Navbar/>
                    <div className="main-content">
                <div className="explore-solutions">
                    <h2>Chelonia A</h2>
                </div>
            </div>

                    <div className="main-content-B1">
                        <div className="product-section-B1">
                            <div ref={imageRef1} className={`product-image-B1 ${animate1 ? 'slide-in' : ''}`}>
                                <img src={chelonia} alt="chelonia" />
                            </div>
                            <div className="product-text-B1">
                                <span className="category-B1">Chelonia A</span>
                                <h2>Chelonia Advanced Version</h2>
                                <p>
                                    The CheloniaBot Advanced Version experiments encompass a wide range of explorations
                                    aimed at enhancing functionality, adaptability, and practical utility.
                                </p>
                              
                            </div>
                        </div>
                    </div>

    <section className="features-section">
      {/* Card */}
      <div className="features-container">
        {/* Left Side: Text */}
        <div className="features-text">
          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Affordable & Accessible:</strong> High-performance 360° LiDAR mapping at an accessible price.
            </li>
            <li>
              <strong>Compact Design:</strong> Portable at 138mm x 178mm x 192mm for easy development.
            </li>
            <li>
              <strong>ROS Integration:</strong> Compatible with ROS standards for seamless project work.
            </li>
            <li>
              <strong>Customizable Structure:</strong> Modular design with open-source boards and sensors.
            </li>
            <li>
              <strong>Advanced Sensor Suite:</strong> Includes LiDAR, IMUs, and encoders for research needs.
            </li>
            <li>
              <strong>Fully Open-Source:</strong> Open hardware, firmware, and software for limitless innovation.
            </li>
          </ul>
        </div>

        {/* Right Side: Image */}
        <div ref={imageRef2} className={`product-image-B1 ${animate2 ? 'slide-in' : ''}`}>
                                <img src={chelonia1} alt="chelonia" />
                            </div>
      </div>

      {/* Buttons */}
      <div className="features-buttons">
        <button onClick={() => (window.location.href = "/contact")}>GET QUOTE</button>
        <button onClick={() => (window.location.href = "/A-CheloniaManual")}>Experiments</button>
      </div>
    </section>

 <div className="video-wrapper">
      <video
        className="video-player"
        src={cheloniavideo}
        controls
        poster={thumbnil}
        preload="metadata"
        controlsList="nodownload"   
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <Footer/>
        </div>
  )
}
