import { useEffect, useRef, useState } from "react";
import Navbar from '../components/Navbar'
import './WarehouseRoboT.css'
import robot1 from "../assets/warehouse1.png";  // replace with your image
import robot2 from "../assets/warehouse2.png";  // replace with your image
import robotSpec from "../assets/warehouse3.png"; // robot on right side
import Footer from "../components/Footer";

// ✅ 1. Reusable hook created from your original logic
// This makes it easy to apply the animation to many elements
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


export default function WarehouseRobot() {
  // ✅ 2. Apply the hook to all the elements we want to animate
  const [headerRef, isHeaderVisible] = useAnimateOnScroll(0.5);
  const [row1ImgRef, isRow1ImgVisible] = useAnimateOnScroll(0.3);
  const [row1TextRef, isRow1TextVisible] = useAnimateOnScroll(0.3);
  const [row2TextRef, isRow2TextVisible] = useAnimateOnScroll(0.3);
  const [row2ImgRef, isRow2ImgVisible] = useAnimateOnScroll(0.3);
  const [specsTitleRef, isSpecsTitleVisible] = useAnimateOnScroll(0.5);
  const [specsListRef, isSpecsListVisible] = useAnimateOnScroll(0.3);
  const [specImgRef, isSpecImgVisible] = useAnimateOnScroll(0.3); // This was your original one
  const [visionBoxRef, isVisionBoxVisible] = useAnimateOnScroll(0.3);
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
      { threshold: 0.05 } // Start when 5% is visible
    );

    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item, index) => {
      // Add a transition-delay inline to stagger them
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
      <div className="robot-section">
        {/* ✅ 4. Add refs and classes to the elements */}
        <div
          ref={headerRef}
          className={`robot-header scroll-animate fade-in-up ${isHeaderVisible ? "visible" : ""}`}
        >
          <h1>WAREHOUSE & INSPECTION <br /> ROBOT</h1>
        </div>

        <div className="robot-container">
          {/* Left Image */}
          <div
            ref={row1ImgRef}
            className={`robot-image scroll-animate slide-in-left ${isRow1ImgVisible ? "visible" : ""}`}
          >
            <img src={robot1} alt="Inspection Robot" />
          </div>

          {/* Right Content */}
          <div
            ref={row1TextRef}
            className={`robot-content scroll-animate slide-in-right ${isRow1TextVisible ? "visible" : ""}`}
          >
            <ul>
              <li>
                <strong>Advanced Multi-Terrain Mobility:</strong> The Search and Rescue robot, with its track belt and flipper mechanism, navigates stairs, oily areas, and rocky terrains, ensuring stability and obstacle-handling capability.
              </li>
              <li>
                <strong>Comprehensive Inspection Technology:</strong> Equipped with advanced sensors, it detects cracks, corrosion, and missing rivets, focusing on hard-to-reach areas like aircraft undersides.
              </li>
              <li>
                <strong>Enhanced Safety and Efficiency:</strong> Reduces personnel exposure to hazardous zones while providing real-time data and imagery for swift analysis and decision-making.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="robot-bottom">
          <div
            ref={row2TextRef}
            className={`robot-features scroll-animate slide-in-left ${isRow2TextVisible ? "visible" : ""}`}
          >
            <ul>
              <li><strong>Multi-Terrain Mobility:</strong> Track belt system handles stairs, oily surfaces, and rocky terrain.</li>
              <li><strong>Advanced Sensors:</strong> High-res cameras, thermal imaging, ultrasonic sensors, and corrosion detection.</li>
              <li><strong>Data & Safety:</strong> Onboard storage, real-time wireless data transmission, emergency stop, and return-to-home function.</li>
            </ul>

            <h3>Operational Highlights:</h3>
            <ul>
              <li>Speed up to 1.5 m/s, climbs up to 45°, IP67 rated.</li>
              <li>Applications: Aircraft inspection, confined space exploration, under-vehicle checks.</li>
              <li>Autonomy: Semi-autonomous with manual override.</li>
            </ul>
          </div>

          <div
            ref={row2ImgRef}
            className={`robot-image scroll-animate slide-in-right ${isRow2ImgVisible ? "visible" : ""}`}
          >
            <img src={robot2} alt="Robot Side View" />
          </div>
        </div>
      </div>



      <div className="specs-section">
        <h2
          ref={specsTitleRef}
          className={`specs-title scroll-animate fade-in-up ${isSpecsTitleVisible ? "visible" : ""}`}
        >
          Specifications
        </h2>

        <div className="specs-container">
          {/* Left Column - Text */}
          <ul
            ref={specsListRef}
            className={`specs-list scroll-animate slide-in-left ${isSpecsListVisible ? "visible" : ""}`}
          >
            <li><strong>Robot Type:</strong> Tele-operated mobile robot for search and inspection</li>
            <li><strong>Dimensions:</strong> [Length: 80 cm, Width: 50 cm, Height: 40 cm]</li>
            <li><strong>Weight:</strong> [35 kg ~ appx.]</li>
            <li><strong>Power Supply:</strong> Rechargeable lithium-ion battery</li>
            <li><strong>Battery Life:</strong> Up to 6 hours of continuous operation</li>
            <li><strong>Charging Time:</strong> 2-3 hours</li>
            <li><strong>Control Interface:</strong> Remote control with real-time video feed and sensor data display</li>
          </ul>

          {/* Right Side Image with Animation */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              ref={specImgRef} // ✅ Use the ref from our hook
              src={robotSpec}
              alt="Robot"
              // ✅ Apply animation classes
              className={`specs-image w-80 scroll-animate slide-in-right ${isSpecImgVisible ? "visible" : ""}`}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="specs-buttons">
          <button className="btn-primary" onClick={() => (window.location.href = "/contact")}>GET QUOTE</button>
          <button
            className="btn-primary"
            onClick={() => window.open("https://raw.githubusercontent.com/Megararobotics/brochures/main/SAR%20.pdf", "_blank")}
          >
            BROCHURE
          </button>

        </div>
      </div>


      <section className="vision-mission">
        <div
          ref={visionBoxRef}
          className={`vision-mission-box scroll-animate fade-in-up ${isVisionBoxVisible ? "visible" : ""}`}
        >
          <h2>Vision</h2>
          <p>
            To revolutionize inspection technology by providing an innovative, safe, and efficient
            solution for remote search and inspection across diverse terrains and challenging environments,
            ensuring reliability, precision, and enhanced safety for maintenance operations.
          </p>

          <h2>Mission</h2>
          <p>
            To design and deliver a teleoperated mobile robot with advanced mobility, sensory, and inspection
            capabilities, enabling thorough, real-time analysis of hard-to-reach areas while minimizing human
            risk and maximizing operational efficiency in industries like aviation, automotive, and infrastructure.
          </p>
        </div>
      </section>


      <section className="faq-section">
        <h2
          ref={faqTitleRef}
          className={`faq-title scroll-animate fade-in-up ${isFaqTitleVisible ? "visible" : ""}`}
        >
          SAR FAQS
        </h2>
        <div className="faq-container">
          {/* ✅ 5. The JS hook will find these .faq-item classes and animate them */}
          <div className="faq-item">
            <p><strong>1. What is the SAR robot?</strong><br />
              The SAR (Search and Rescue) robot is a rugged, multi-functional robot
              designed for disaster response and rescue operations in hazardous environments.
            </p>
          </div>

          <div className="faq-item">
            <p><strong>2. What are the key features of SAR?</strong></p>
            <ul>
              <li>Advanced mobility for navigating rubble and uneven terrains</li>
              <li>Cameras and sensors for live feedback and environment mapping</li>
              <li>Two-way communication systems for interaction with survivors</li>
            </ul>
          </div>

          <div className="faq-item">
            <p><strong>3. What types of disasters is SAR suitable for?</strong></p>
            <ul>
              <li>Earthquakes</li>
              <li>Building collapses</li>
              <li>Floods and other natural calamities and industrial accidents</li>
            </ul>
          </div>

          <div className="faq-item">
            <p><strong>4. How does SAR locate trapped individuals?</strong><br />
              SAR uses thermal imaging, motion detection sensors, and sound-detection
              systems to identify and locate survivors.
            </p>
          </div>

          <div className="faq-item">
            <p><strong>5. Is SAR autonomous or manually controlled?</strong><br />
              SAR offers both autonomous and remote-controlled operation modes,
              allowing operators to adapt to mission requirements.
            </p>
          </div>

          <div className="faq-item">
            <p><strong>6. What is SAR’s battery life?</strong><br />
              SAR operates on high-capacity batteries, providing 6–8 hours of
              operation under normal conditions. Additional battery packs can extend its runtime.
            </p>
          </div>

          <div className="faq-item">
            <p><strong>7. How much weight can SAR lift?</strong><br />
              SAR can lift up to 20 kg using its robotic arms. For heavier objects,
              it can provide support for team-based lifting.
            </p>
          </div>

          <div className="faq-item">
            <p><strong>8. What kind of cameras does SAR use?</strong></p>
          <ul>
            <li>High-resolution cameras for video streaming</li>
            <li>Night vision cameras for low-light conditions</li>
            <li>Thermal imaging cameras for heat detection</li>
          </ul>
        </div>

        <div className="faq-item">
          <p><strong>9. Is SAR resistant to extreme conditions?</strong><br />
            Yes, SAR is built to endure extreme conditions, such as high heat,
            dust, water exposure, and debris-filled environments.
          </p>
        </div>

        <div className="faq-item">
          <p><strong>10. How portable is SAR?</strong><br />
            SAR is compact and can be easily transported to disaster sites.
            Its lightweight design allows for rapid deployment.
          </p>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
