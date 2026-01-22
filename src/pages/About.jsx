import React from "react";
import "./About.css";
import img from '../assets/aboutas.webp'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About  () {
  return (<div>
    <Navbar/>
 
    <div className="aboutas">

   
  <div className="about-container">
  <div className="about-image">
  <img
    src={img}
    alt="Megara Robotics"
    width="600"
    height="400"
    loading="eager"
    decoding="async"
  />

  </div>
  <div className="about-text">
    <span className="about-subtitle">About Us</span>
    <h2 className="about-title">
      About <span className="highlight">Megara Robotics</span>
    </h2>
    <p className="about-description">
      Megara Robotics is a leading robotics and automation company dedicated to
      building intelligent machines that seamlessly integrate into industries and
      everyday life. Our mission is to advance technology that simplifies
      processes, increases efficiency, and shapes the future of automation.
    </p>
    <p className="about-description">
      With a passionate team of engineers, researchers, and innovators, we design
      and develop robotic systems for diverse sectors such as manufacturing,
      healthcare, logistics, and research. Our focus is not just on machines but
      on creating solutions that empower people and businesses to achieve more.
    </p>
    <p className="about-description">
      At Megara Robotics, we believe in innovation, collaboration, and pushing
      the boundaries of what is possible. We are committed to driving the future
      of robotics and automation through cutting-edge technology and
      forward-thinking solutions.
    </p>
  </div>
</div>
 </div>
 <Footer/>
  </div>
  );
};

