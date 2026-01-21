import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar'
import chelonia from '../assets/cheloniab2.png'
import chelonia1 from '../assets/cheloniab2feu.png'
import './CheloniaB1.css'
import Footer from '../components/Footer';

export default function CheloniaB2  ()  {
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
                    <h2>Chelonia B2</h2>
                </div>
            </div>

                    <div className="main-content-B1">
                        <div className="product-section-B1">
                            <div ref={imageRef1} className={`product-image-B1 ${animate1 ? 'slide-in' : ''}`}>
                                <img src={chelonia} alt="chelonia" />
                            </div>
                            <div className="product-text-B1">
                                <span className="category-B1">Chelonia</span>
                                <h2>Chelonia B2 Version</h2>
                                <p>
                                    The Chelonia B2 builds on the versatility of the Chelonia B1, transforming it into a dynamic 4-wheel
                                     robotic platform equipped with Mecanum wheels. This unique wheel configuration enables precise omnidirectional movement, 
                                     allowing the robot to travel in any direction seamlessly, from side-to-side to diagonal maneuvers.
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
              <strong>Omnidirectional Mecanum Wheels:</strong> Enables movement in any direction, 
              perfect for precise and agile navigation.
            </li>
            <li>
              <strong>Customizable Design:</strong> Modular structure adaptable for various 
              applications and evolving projects.
            </li>
            <li>
              <strong>Comprehensive Sensor Suite:</strong> Equipped with IR, ultrasonic, gas sensors, IMUs, 
              RFID, and sound sensors for complex setups.
            </li>
            <li>
              <strong>Enhanced Motor Control:</strong> Optimized for omnidirectional movement, supporting 
              complex programming and directional control.
            </li>
            <li>
              <strong>Bluetooth Connectivity:</strong> Offers full wireless control for flexible operation and 
              custom configurations.
            </li>
            <li>
              <strong>Educational Guide:</strong> Includes 30 experiments covering navigation and sensor integration for comprehensive learning.
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
        <button onClick={() => (window.location.href = "/B2-CheloniaManual")}>Experiments</button>
         <button onClick={() => window.open("https://raw.githubusercontent.com/Megararobotics/brochures/main/cheloniaB2.png", "_blank")}>Brochures</button>
      </div>
    </section>
    <Footer/>
        </div>
  )
}
