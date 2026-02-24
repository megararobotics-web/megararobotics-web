import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import banner from '/assets/banner.jpg';
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

export default function CoursesDetails() {
  const [coursesTitleRef, isCoursesTitleVisible] = useAnimateOnScroll(0.5);
  const [coursesImgRef, isCoursesImgVisible] = useAnimateOnScroll(0.3);
  const [coursesListRef, isCoursesListVisible] = useAnimateOnScroll(0.3);
  const [programBoxRef, isProgramBoxVisible] = useAnimateOnScroll(0.3);

  return (
    <div>
      <Navbar />
      
      {/* Added some top margin so it doesn't hide behind Navbar if fixed */}
      <div className="courses-container" style={{ marginTop: '80px' }}>
        <h2 
          ref={coursesTitleRef}
          className={`courses-heading scroll-animate fade-in-up ${isCoursesTitleVisible ? "visible" : ""}`}
        >
          Courses Details of Educational Robot
        </h2>

        {/* Image Section */}
        <div 
          ref={coursesImgRef}
          className={`courses-image scroll-animate fade-in-up ${isCoursesImgVisible ? "visible" : ""}`}
        >
          <img src={banner} alt="Educational Robot" />
        </div>

        {/* Courses List */}
        <div 
          ref={coursesListRef}
          className={`courses-list scroll-animate fade-in-up ${isCoursesListVisible ? "visible" : ""}`}
        >
          <ul>
            <li>Robotics</li>
            <li>ROS (Robot Operating System)</li>
            <li>VLSI (Very-Large-Scale Integration)</li>
            <li>Artificial Intelligence (AI)</li>
          </ul>
          <ul>
            <li>Automation and Robotics</li>
            <li>Industry 4.0 and IoT (Internet of Things)</li>
            <li>Coding in Python</li>
            <li>Artificial Intelligence (AI)</li>
          </ul>
          <ul>
            <li>Machine Learning (ML)</li>
            <li>Robot ML & Collaborative Robotics</li>
            <li>PCB Design</li>
          </ul>
        </div>

        {/* Program Offers Box */}
        <div 
          ref={programBoxRef}
          className={`program-offers scroll-animate fade-in-up ${isProgramBoxVisible ? "visible" : ""}`}
        >
          <p><strong>The Program Offers:</strong></p>
          <p><strong>Courses:</strong> Comprehensive training in cutting-edge technologies.</p>
          <p><strong>Internships:</strong> Hands-on learning opportunities.</p>
          <p><strong>Webinars:</strong> Expert-led discussions on advanced topics.</p>
          <p><strong>Circular Learning:</strong> Structured modules for skill enhancement.</p>
          <button
            className="quote-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            GET QUOTE
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}