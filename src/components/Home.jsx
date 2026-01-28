import React, { useRef, useEffect, useState } from "react";
import Hero from './Hero';
import Navbar from './Navbar';
import './Home.css';
import { FaWrench, FaUsersCog, FaClock, FaToggleOn } from "react-icons/fa";
import wheelchair from "../assets/wheelChair.png";
import warehouse from "../assets/warehouse.png";
import educationalrobot from "../assets/educationRobot.png";
import arm from "../assets/bhuja.png";
import karambot from "../assets/karambot.png";


import wheelchairVid from "../assets/wheelChair.mp4";
import warehouseVid from "../assets/warehouse.mp4";
import educationalVid from "../assets/educationRobot.mp4";
import armVid from "../assets/bhuja1.mp4";
import karamvido from "../assets/karambot.mp4"

import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Home() {
  const imageRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <Hero />

      <section className="robots-section">
        <div className="section-header">
          <h2>Our Robots</h2>
          <p>
            We are designers, developers, suppliers, and dealers of a wide range of
            robotics and automation systems, as well as information technology products.
            We also specialize in manufacturing high-quality components for robotics
            and automation solutions.
          </p>
        </div>


        <div className="card-grid">




          {/* Health Care Robot */}
          <div
            className="card"
            onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
            onMouseLeave={(e) => {
              const vid = e.currentTarget.querySelector("video");
              vid.pause();
              vid.currentTime = 0;
            }}
          >
            <img src={wheelchair} alt="Health Care Robot" className="card-img" />
            <video className="card-video" src={wheelchairVid} muted loop></video>
            <h3>Health Care</h3>
            <a href="/wheelchair" className="learn-more-btn">Learn More</a>
          </div>

          {/* Warehouse Robot */}
          <div
            className="card"
            onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
            onMouseLeave={(e) => {
              const vid = e.currentTarget.querySelector("video");
              vid.pause();
              vid.currentTime = 0;
            }}
          >
            <img src={warehouse} alt="Warehouse Robot" className="card-img" />
            <video className="card-video" src={warehouseVid} muted loop></video>
            <h3>Multi-Terrain Robot</h3>
            <a href="/warehouse" className="learn-more-btn">Learn More</a>
          </div>

          {/* Educational Robot */}
          <div
            className="card"
            onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
            onMouseLeave={(e) => {
              const vid = e.currentTarget.querySelector("video");
              vid.pause();
              vid.currentTime = 0;
            }}
          >
            <img src={educationalrobot} alt="Educational Robot" className="card-img" />
            <video className="card-video" src={educationalVid} muted loop></video>
            <h3>Educational Robot</h3>
            <a href="/education" className="learn-more-btn">Learn More</a>
          </div>

          {/* Arm Robot */}
          <div
            className="card"
            onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
            onMouseLeave={(e) => {
              const vid = e.currentTarget.querySelector("video");
              vid.pause();
              vid.currentTime = 0;
            }}
          >
            <img src={arm} alt="Robotic Arm" className="card-img" />
            <video className="card-video" src={armVid} muted loop></video>
            <h3>Manipulator</h3>
            <a href="/bhuja" className="learn-more-btn">Learn More</a>
          </div>


                    {/* kerambot Robot */}
          <div
            className="card"
            onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
            onMouseLeave={(e) => {
              const vid = e.currentTarget.querySelector("video");
              vid.pause();
              vid.currentTime = 0;
            }}
          >
            <img src={karambot} alt="Robotic Arm" className="card-img" />
            <video className="card-video" src={karamvido} muted loop></video>
            <h3>Kerambot</h3>
            <a href="/Kerambot" className="learn-more-btn">Learn More</a>
          </div>



        </div>


        
      </section>

      <div className="support-container">
        <h2 className="support-title">You can count on us</h2>
        <p className="support-subtitle">
         When it comes to your intralogistics, we do everything possible to ensure that your operations run smoothly and that you get the maximum output from your Megara robots.
        </p>

        <div className="support-cards">
          <div className="support-card">
            <FaWrench className="support-icon" />
            <h4>Reliability</h4>
            <p>We ensure seamless maintenance for your Megara robots.</p>
          </div>

          <div className="support-card">
            <FaUsersCog className="support-icon" />
            <h4>Expertise</h4>
            <p>Our experienced Megara Technical Support team is here to improve your logistics workflow.</p>
          </div>

          <div className="support-card">
            <FaClock className="support-icon" />
            <h4>Responsiveness</h4>
            <p>Our standardized digital setup guarantees a rapid response and minimal downtime.</p>
          </div>

          <div className="support-card">
            <FaToggleOn className="support-icon" />
            <h4>Flexibility</h4>
            <p>Our flexible service setup ensures rapid problem-solving and quick access to repairs.</p>
          </div>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
