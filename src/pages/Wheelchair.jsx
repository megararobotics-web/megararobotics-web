import React, { useRef, useState, useEffect } from 'react' // ✅ Added imports
import './Wheelchair.css'
import Navbar from '../components/Navbar'
import chair1 from '../assets/wheelchair1.png'
import chair2 from '../assets/wheelchair2.png'
import Footer from '../components/Footer'

// ✅ 1. Reusable hook for scroll animations
const useAnimateOnScroll = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};


export default function Wheelchair() {

  // ✅ 2. Add hooks for the elements to animate
  const [titleRef, isTitleVisible] = useAnimateOnScroll(0.5);
  const [card1Ref, isCard1Visible] = useAnimateOnScroll(0.3);
  const [card2Ref, isCard2Visible] = useAnimateOnScroll(0.3);


  return (
    <div>
      <Navbar />
      <div className="wheelchairs-section">
        <h2 
          ref={titleRef} // ✅ Apply ref
          className={`section-title scroll-animate fade-in-up ${isTitleVisible ? "visible" : ""}`} // ✅ Apply classes
        >
          Powered Wheelchairs
        </h2>
        <div className="cards-container1">

          {/* Card 1 */}
          <div 
            ref={card1Ref} // ✅ Apply ref
            className={`wheelchair-card scroll-animate fade-in-up ${isCard1Visible ? "visible" : ""}`} // ✅ Apply classes
          >
            <div className="wheelchair-img">
              <img src={chair1} alt="Maruti 1.0" />
            </div>
            <div className="wheelchair-content">
              <h3>Maruti 1.0</h3>
              <h4>Non-Foldable Wheelchair</h4>
              <p>
                This is a wheelchair that allows a health-worker to transport patients 
                to and from isolation wards without physically touching either the 
                patient or the wheelchair.
              </p>
              <button onClick={() => window.location.href='/maruti1'}>Learn More</button>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            ref={card2Ref} // ✅ Apply ref
            style={{ transitionDelay: '150ms' }} // ✅ Add a slight delay
            className={`wheelchair-card scroll-animate fade-in-up ${isCard2Visible ? "visible" : ""}`} // ✅ Apply classes
          >
            <div className="wheelchair-img">
              <img src={chair2} alt="Maruti 2.0" />
            </div>
            <div className="wheelchair-content">
              <h3>Maruti 2.0</h3>
              <h4>Foldable Wheelchair</h4>
              <p>
                This foldable powered wheelchair is made of aluminum, which is 
                extremely durable yet lightweight, making it convenient for travel.  
              </p>
              <br/>
              <button onClick={() => window.location.href='/maruti2'}>Learn More</button>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}