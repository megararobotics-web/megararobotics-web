import React from 'react'
import Navbar from '../components/Navbar'
import chair11 from "/assets/smorphi2.png"; // use actual path
import Footer from '../components/Footer'
import './Smorphi2.css'
export default function smorphi2  () {
  return (
    <div>
        <Navbar/>
<div>
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
              Smorphi 2 is the next-generation modular robotic platform that seamlessly blends innovation, flexibility, and intelligence. Designed for researchers, educators, and enthusiasts, Smorphi 2 offers unmatched versatility through its reconfigurable modules, allowing users to adapt the robot to diverse tasks and environments effortlessly.
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
</div>

<div className="features-section">
  <ul className="features-list">
    <li><strong>Modular Design:</strong> Customize the robot’s structure for specific applications, from exploration to education.</li>
    <li><strong>Advanced AI Integration:</strong> Leverage cutting-edge AI algorithms for autonomous navigation, object detection, and decision-making.</li>
    <li><strong>Enhanced Durability:</strong> Built with high-quality materials to withstand rigorous testing and dynamic environments.</li>
    <li><strong>Plug-and-Play Capability:</strong> Effortlessly integrate sensors, actuators, and other add-ons to expand functionality.</li>
    <li><strong>Education-Friendly:</strong> Ideal for learning robotics concepts, programming, and real-world problem-solving.</li>
  </ul>

  <p className="features-description">
    Smorphi 2 is more than a robot—it’s a stepping stone toward future innovations. Whether you're conducting groundbreaking research or teaching the next generation of roboticists, Smorphi 2 is your perfect companion for pushing the boundaries of what robots can achieve. Transform your robotic dreams into reality with Smorphi 2.
  </p>

  <div className="features-btn">
    <button className="quote-btn" onClick={() => (window.location.href = "/contact")}>GET QUOTE</button>
  </div>
</div>

    <Footer/>
        </div>
  )
}
