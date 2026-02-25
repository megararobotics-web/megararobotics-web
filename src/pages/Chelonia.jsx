import React, { useRef, useState, useEffect } from 'react'; // ✅ Added imports
import './Chelonia.css'
import Navbar from '../components/Navbar'
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


export default function Chelonia() {

  // ✅ 2. Add hooks for all the elements to animate
  const [titleRef, isTitleVisible] = useAnimateOnScroll(0.5);
  const [card1Ref, isCard1Visible] = useAnimateOnScroll(0.3);
  const [card2Ref, isCard2Visible] = useAnimateOnScroll(0.3);
  const [card3Ref, isCard3Visible] = useAnimateOnScroll(0.3);
  const [card4Ref, isCard4Visible] = useAnimateOnScroll(0.3);
  const [visionRef, isVisionVisible] = useAnimateOnScroll(0.3);
  const [faqTitleRef, isFaqTitleVisible] = useAnimateOnScroll(0.5);

  // ✅ 3. Special effect for staggered FAQ list
  useEffect(() => {
    const faqObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            faqObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 } 
    );

    // ✅ Use new class name to find items
    const faqItems = document.querySelectorAll(".chelonia-page-faq-item");
    faqItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 100}ms`;
      faqObserver.observe(item);
    });

    return () => {
      faqItems.forEach((item) => {
        faqObserver.unobserve(item);
      });
    };
  }, []); // Runs once on mount


  return (
    <div>
      <Navbar />
      <br></br>
      {/* ✅ Removed duplicate Navbar here */}
      <div className="chelonia-page-section"> 
        <h2 
          ref={titleRef}
          className={`chelonia-page-main-title scroll-animate fade-in-up ${isTitleVisible ? "visible" : ""}`} 
        >
          Education Robot
        </h2>
        <div className="chelonia-page-grid-container"> 
          <div className="chelonia-page-grid"> 
            
            <div 
              ref={card1Ref}
              className={`chelonia-page-card scroll-animate fade-in-up ${isCard1Visible ? "visible" : ""}`} 
            >
              <div className="chelonia-page-card-img"> 
                <img src="/assets/cheloniab1.png" alt="Chelonia B1" />
              </div>
              <div className="chelonia-page-card-content"> 
                <h3>Chelonia B1</h3>
                <p>In its Base Version, the CheloniaBot unleashes a multitude of sensors, offering an immersive learning experience.</p>
                 <br/>
                <button onClick={() => window.location.href = '/cheloniab1'}>Learn More</button>
                
              </div>
            </div>

            <div 
              ref={card2Ref}
              style={{ transitionDelay: '150ms' }}
              className={`chelonia-page-card scroll-animate fade-in-up ${isCard2Visible ? "visible" : ""}`} 
            >
              <div className="chelonia-page-card-img"> 
                <img src="/assets/cheloniab2.png" alt="Chelonia B2" />
              </div>
              <div className="chelonia-page-card-content"> 
                <h3>Chelonia B2</h3>
                <p>The CheloniaBot, an innovative educational robot, stands for a gateway to the captivating world of robotics for students and enthusiasts alike.</p>
                <button onClick={() => window.location.href = '/cheloniab2'}>Learn More</button>
              </div>
            </div>

            <div 
              ref={card3Ref}
              className={`chelonia-page-card scroll-animate fade-in-up ${isCard3Visible ? "visible" : ""}`} 
            >
              <div className="chelonia-page-card-img"> 
                <img src="/assets/cheloniaa.png" alt="Chelonia A" />
              </div>
              <div className="chelonia-page-card-content"> 
                <h3>Chelonia A</h3>
                <p>The CheloniaBot Advanced Version experiments encompass a wide range of explorations aimed at enhancing functionality, adaptability, and practical utility.</p>
                <button onClick={() => window.location.href = '/cheloniab3'}>Learn More</button>
              </div>
            </div>


          </div>
        </div>
      </div>


      <div 
        ref={visionRef}
        className={`chelonia-page-vision-section scroll-animate fade-in-up ${isVisionVisible ? "visible" : ""}`} 
      >
        <div className="chelonia-page-vision-container"> 
          <div className="chelonia-page-vision-content"> 
            <h3>Vision</h3>
            <p>
              To inspire curiosity, foster innovation, and make robotics accessible to learners, educators, and researchers worldwide, empowering them to solve real-world challenges through hands-on experimentation and interdisciplinary learning.
            </p>
            <h3>Mission</h3>
            <p>
              To deliver a user-friendly and versatile robotics system that equips educators with effective teaching tools, students with engaging learning experiences, and researchers with reliable experimentation platforms, while ensuring affordability, easy integration, and continuous support to make robotics education and innovation practical and impactful.
            </p>
          </div>
        </div>
        <div className="chelonia-page-vision-buttons"> 
          <button onClick={() => window.open("https://raw.githubusercontent.com/Megararobotics/brochures/main/chelonia.pdf", "_blank")}>Brochures</button>
          <button onClick={() => window.open("https://raw.githubusercontent.com/Megararobotics/videos/main/B-Inspirado%20Robots%201.mp4", "_blank")}>VIDEO</button>
        </div>
      </div>

      <section className="chelonia-page-faq-section"> 
        <h2 
          ref={faqTitleRef}
          className={`chelonia-page-faq-title scroll-animate fade-in-up ${isFaqTitleVisible ? "visible" : ""}`} 
        >
          SAR FAQS
        </h2>
        <div className="chelonia-page-faq-container"> 
          
          {/* ✅ Renamed all faq-item classes */}
          <div className="chelonia-page-faq-item">
            <p><strong>1. What is Chelonia? </strong><br />
              Chelonia is a bio-inspired robot designed for underwater exploration, environmental monitoring,
              and research applications. Its design mimics the movement of aquatic creatures like turtles, allowing it
              to navigate efficiently in aquatic environments.    
             
            </p>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>2. What are the primary applications of Chelonia? </strong></p>
            <ul>
              <li>Marine research and data collection. </li>
              <li>Environmental monitoring and  Underwater inspections for infrastructure and vessels </li>
              <li>Educational and research purposes in robotics and biomimicry. </li>
            </ul>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>3. How does Chelonia navigate underwater?</strong></p>
            <ul>
              <li>Chelonia uses bio-inspired fins and propeller mechanisms for propulsion.</li>
              <li>It is equipped with advanced sensors and AI algorithms for navigation and obstacle avoidance.</li>
            </ul>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>4. Is Chelonia autonomous? </strong><br />
              Yes, Chelonia can operate autonomously or be remotely controlled, depending on the mission requirements.
            </p>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>5. How deep can Chelonia dive?</strong><br />
              Chelonia is designed for shallow to moderate depths, typically up to 50 meters. However, models with extended capabilities are available for deeper dives. 
            </p>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>6. What sensors are equipped on Chelonia?</strong></p>
            <ul>
              <li>High-definition cameras for video and imaging.</li>
              <li>Sonar for depth and obstacle detection</li>
              <li>Environmental sensors for temperature, salinity, and pH measurements</li>
            </ul>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>7. What is the power source for Chelonia?</strong><br />
              Chelonia operates on rechargeable batteries, offering 4–6 hours of continuous operation, depending on the usage.
            </p>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>8. Can Chelonia be customized for specific tasks? </strong><br/>
            Yes , Chelonia’s modular design allows customization for specific tasks, such as adding specialized sensors or communication devices.
            </p>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>9. Is training required to operate Chelonia?</strong><br />
              Basic training is provided to ensure users can operate Chelonia effectively. Detailed manuals and online tutorials are also available.
            </p>
          </div>

          <div className="chelonia-page-faq-item">
            <p><strong>10. How durable is Chelonia in harsh environments ?</strong><br />
              Chelonia is built with corrosion-resistant materials and designed to withstand challenging underwater conditions, including low visibility and high currents. 
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
