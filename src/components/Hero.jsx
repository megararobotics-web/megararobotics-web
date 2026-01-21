import React from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import heroVideo from "../assets/hero-video.mp4";

export default function Hero(){
  return (
   
    <div className="hero">
 <div className="Video-Container">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    
      {/* Overlay content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>Empowering Automation with Megara Robotics</h1>
          <p>Innovative Solutions for Smarter Industrial Operations</p>
        </div>
      </div>
    </div>  

    </div> 
  );
}
