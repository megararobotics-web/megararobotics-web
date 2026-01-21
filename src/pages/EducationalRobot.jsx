import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import chelonia from '../assets/chelonia.png';
import bioinspired from '../assets/bioinspired.png';
import smorphi from '../assets/smorphi.png';
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
  
  // Ref for the new button animation
  const [buttonRef, isButtonVisible] = useAnimateOnScroll(0.3);

  // Function to handle navigation
  const handleLearnMore = () => {
    // You can use useNavigate hook here if using react-router-dom v6
    // navigate('/courses-details'); 
    window.location.href = '/courses-details';
  };

  return (
    <div>
      <Navbar />
      <div className="educational-robot-section">
        <h2
          ref={titleRef}
          className={`section-title scroll-animate fade-in-up ${isTitleVisible ? "visible" : ""}`}
        >
          Educational Robots
        </h2>

        <div className="cards-container">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className={`educational-robot-card scroll-animate fade-in-up ${isCard1Visible ? "visible" : ""}`}
          >
            <div className="educational-robot-img">
              <img src={chelonia} alt="Chelonia Bots" />
            </div>
            <div className="educational-robot-content">
              <h3>Chelonia Bots</h3>
              <p>
                Chelonia is a bio-inspired robot designed for underwater exploration, environmental monitoring,
                and research applications.
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
              <img src={bioinspired} alt="Bio Inspired" />
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
              <img src={smorphi} alt="Smorphi" />
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

        {/* --- NEW BUTTON SECTION --- */}
        <div 
          ref={buttonRef}
          className={`center-button-container scroll-animate fade-in-up ${isButtonVisible ? "visible" : ""}`}
          style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}
        >
           <button 
             onClick={handleLearnMore}
             className="quote-btn" 
             style={{ padding: '15px 40px', fontSize: '1.2rem' }}
           >
             Explore Course Details
           </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}