import { useEffect, useRef } from "react";
import React from "react";
import Navbar from "./Navbar";
import "./Hero.css";

import heroVideo from "/assets/hero_video1.webm";
import heroPoster from "/assets/hero-poster.webp";

export default function Hero() {
  const videoRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  let played = false;

  const tryPlay = () => {
    if (played) return;
    played = true;
    video.play().catch(() => {
      // autoplay blocked – ignore safely
    });
  };

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
          preload="auto"
          poster={heroPoster}
          autoPlay

        >
          <source src={heroVideo} type="video/webm" />
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
