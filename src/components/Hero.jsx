import { useEffect, useRef } from "react";
import React from "react";
import Navbar from "./Navbar";
import "./Hero.css";

import heroVideo from "../assets/hero_video.mp4";
import heroPoster from "../assets/hero-poster.webp";

export default function Hero() {
  const videoRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const tryPlay = () => {
    video.play().catch(() => {
      // autoplay blocked or delayed
    });
  };

  // Play when metadata is ready
  video.addEventListener("loadedmetadata", tryPlay);

  return () => {
    video.removeEventListener("loadedmetadata", tryPlay);
  };
}, []);


  return (
    <div className="hero">
      <div className="video-container">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

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
