import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Educationalrobot.css';

// Reusable hook for scroll animations
const useAnimateOnScroll = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

export default function EducationalRobot() {

  const [titleRef, isTitleVisible] = useAnimateOnScroll(0.5);
  const [card1Ref, isCard1Visible] = useAnimateOnScroll(0.3);
  const [card2Ref, isCard2Visible] = useAnimateOnScroll(0.3);
  const [card3Ref, isCard3Visible] = useAnimateOnScroll(0.3);
  const [buttonRef, isButtonVisible] = useAnimateOnScroll(0.3);

  // NEW workshop refs
  const [workshopTitleRef, isWorkshopTitleVisible] = useAnimateOnScroll(0.3);
  const [workshopImg1Ref, isWorkshopImg1Visible] = useAnimateOnScroll(0.3);
  const [workshopImg2Ref, isWorkshopImg2Visible] = useAnimateOnScroll(0.3);
  const [workshopImg3Ref, isWorkshopImg3Visible] = useAnimateOnScroll(0.3);

  const handleLearnMore = () => {
    window.location.href = '/courses-details';
  };

  return (
    <div>
      <Navbar />

      <div className="educational-robot-section">

        {/* Educational Robots Title */}
        <h2
          ref={titleRef}
          className={`section-title scroll-animate fade-in-up ${isTitleVisible ? "visible" : ""}`}
        >
          Educational Robots
        </h2>

        {/* Robot Cards */}
        <div className="cards-container">

          {/* Card 1 */}
          <div
            ref={card1Ref}
            className={`educational-robot-card scroll-animate fade-in-up ${isCard1Visible ? "visible" : ""}`}
          >
            <div className="educational-robot-img">
              <img src="/assets/chelonia.png" alt="Chelonia Bots" />
            </div>
            <div className="educational-robot-content">
              <h3>Chelonia Bots</h3>
              <p>
                Chelonia is a bio-inspired robot designed for underwater exploration, environmental monitoring, and research applications.
              </p>
              <button onClick={() => window.location.href = '/chelonia'}>Learn More</button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            style={{ transitionDelay: '150ms' }}
            className={`educational-robot-card scroll-animate fade-in-up ${isCard2Visible ? "visible" : ""}`}
          >
            <div className="educational-robot-img">
              <img src="/assets/bioinspired.png" alt="Bio Inspired" />
            </div>
            <div className="educational-robot-content">
              <h3>Bio-Inspirado</h3>
              <p>
                The Chelonia Robot transforms into four modes for versatile movement and tasks.
              </p>
              <button onClick={() => window.location.href = '/bioinspired'}>Learn More</button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            style={{ transitionDelay: '300ms' }}
            className={`educational-robot-card scroll-animate fade-in-up ${isCard3Visible ? "visible" : ""}`}
          >
            <div className="educational-robot-img">
              <img src="/assets/smorphi.png" alt="Smorphi" />
            </div>
            <div className="educational-robot-content">
              <h3>Smorphi</h3>
              <p>
                The Smorphi robot is a modular, reconfigurable robot designed for educational purposes.
              </p>
              <button onClick={() => window.location.href = '/smorphi'}>Learn More</button>
            </div>
          </div>

        </div>

        {/* Explore Course Details Button */}
        <div
          ref={buttonRef}
          className={`center-button-container scroll-animate fade-in-up ${isButtonVisible ? "visible" : ""}`}
          style={{ textAlign: 'center', marginTop: '50px', marginBottom: '80px' }}
        >
          <button
            onClick={handleLearnMore}
            className="quote-btn"
            style={{ padding: '15px 40px', fontSize: '1.2rem' }}
          >
            Explore Course Details
          </button>
        </div>


        {/* ========================= */}
        {/* NEW WORKSHOP SECTION */}
        {/* ========================= */}

        <div className="workshop-section">

          <h2
            ref={workshopTitleRef}
            className={`section-title scroll-animate fade-in-up ${isWorkshopTitleVisible ? "visible" : ""}`}
          >
            RISC Robotics Workshop
          </h2>

          <p className="workshop-subtitle scroll-animate fade-in-up visible">
            Hands-on training sessions where students design, build, and program robots through practical learning and expert guidance.
          </p>

          <div className="workshop-image-container">

            <img
              ref={workshopImg1Ref}
              className={`workshop-img scroll-animate fade-in-up ${isWorkshopImg1Visible ? "visible" : ""}`}
              src="/assets/workshop1.jpg"
              alt="Workshop 1"
            />

            <img
              ref={workshopImg2Ref}
              className={`workshop-img scroll-animate fade-in-up ${isWorkshopImg2Visible ? "visible" : ""}`}
              src="/assets/workshop2.jpg"
              alt="Workshop 2"
            />

            <img
              ref={workshopImg3Ref}
              className={`workshop-img scroll-animate fade-in-up ${isWorkshopImg3Visible ? "visible" : ""}`}
              src="/assets/workshop3.jpg"
              alt="Workshop 3"
            />

              <img
              ref={workshopImg1Ref}
              className={`workshop-img scroll-animate fade-in-up ${isWorkshopImg1Visible ? "visible" : ""}`}
              src="/assets/workshop4.jpg"
              alt="Workshop 4"
            />

            <img
              ref={workshopImg2Ref}
              className={`workshop-img scroll-animate fade-in-up ${isWorkshopImg2Visible ? "visible" : ""}`}
              src="/assets/workshop5.jpg"
              alt="Workshop 5"
            />

            <img
              ref={workshopImg3Ref}
              className={`workshop-img scroll-animate fade-in-up ${isWorkshopImg3Visible ? "visible" : ""}`}
              src="/assets/workshop6.jpg"
              alt="Workshop 6"
            />


          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}