import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar'
import chelonia from '../assets/chelonia.png'
import chelonia1 from '../assets/cheloniab1feu.png'
import './CheloniaB1.css'
import Footer from '../components/Footer';

export default function CheloniaB1  ()  {
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
                    <h2>Chelonia B1</h2>
                </div>
            </div>

                    <div className="main-content-B1">
                        <div className="product-section-B1">
                            <div ref={imageRef1} className={`product-image-B1 ${animate1 ? 'slide-in' : ''}`}>
                                <img src={chelonia} alt="chelonia" />
                            </div>
                            <div className="product-text-B1">
                                <span className="category-B1">Chelonia</span>
                                <h2>Chelonia B1 Base Version</h2>
                                <p>
                                    The Chelonia B1 Base Version is a flexible and adaptable robotic platform, designed to support 
                                    a wide range of applications in robotics exploration and experimentation.
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
              <strong>Flexible Design:</strong> Chelonia B1’s modular structure
              adapts to diverse project needs, perfect for various robotics
              applications.
            </li>
            <li>
              <strong>Comprehensive Sensors:</strong> Includes IR, ultrasonic,
              gas, IMUs, RFID, and sound sensors for a range of interactions and
              monitoring.
            </li>
            <li>
              <strong>Versatile Motor Control:</strong> Intuitive motor control
              system with labeled pins for easy programming of movements.
            </li>
            <li>
              <strong>Bluetooth Connectivity:</strong> Enables remote wireless
              control for flexible operation and custom applications.
            </li>
            <li>
              <strong>Educational Guide:</strong> Comes with a 30-experiment
              guide covering navigation, sensor integration, and more for
              learning and teaching.
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
        <button onClick={() => (window.location.href = "/B1-CheloniaManual")}>Experiments</button>
        <button onClick={() => window.open("https://raw.githubusercontent.com/Megararobotics/brochures/main/CheloniaB1.png", "_blank")}>Brochures</button>
      </div>
    </section>
    <Footer/>
        </div>
  )
}
