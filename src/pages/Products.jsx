import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './Products.css'; // We will be updating this CSS file
import robotImg from '../assets/wheelChair.gif';
import robotImg1 from '../assets/warehouse.gif';
import robotImg2 from '../assets/educationRobot.gif';
import Footer from '../components/Footer';

export default function Products() {
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef3 = useRef(null);

    const [animate1, setAnimate1] = useState(false);
    const [animate2, setAnimate2] = useState(false);
    const [animate3, setAnimate3] = useState(false);

    useEffect(() => {
        const createObserver = (setter) => {
            return new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setter(true);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
        };

        const observer1 = createObserver(setAnimate1);
        const observer2 = createObserver(setAnimate2);
        const observer3 = createObserver(setAnimate3);

        if (imageRef1.current) observer1.observe(imageRef1.current);
        if (imageRef2.current) observer2.observe(imageRef2.current);
        if (imageRef3.current) observer3.observe(imageRef3.current);

        return () => {
            if (imageRef1.current) observer1.unobserve(imagefRef1.current);
            if (imageRef2.current) observer2.unobserve(imageRef2.current);
            if (imageRef3.current) observer3.unobserve(imageRef3.current);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <br></br>
            <div className='color'>
                <div className="products-container">
                    
                    <h2 className="products-main-title">Explore our solutions</h2>

                    {/* --- Self-E Section (Card 1) --- */}
                    <div className="product-section">
                        <div 
                            ref={imageRef1} 
                            className={`product-image slide-in-left ${animate1 ? 'animate' : ''}`}
                        >
                            <img src={robotImg} alt="Self-E Wheelchair" />
                        </div>
                        <div className="product-text">
                            <span className="category">SELF-E</span>
                            <h2>Self-E is an advanced wheelchair </h2>
                            <p>
                                The main goal of the Self-E project is to provide an affordable, smart, and autonomous wheelchair that enhances mobility and independence for people with disabilities, the elderly, and patients through advanced navigation and easy  control.
                            </p>
                            <div className="product-links">
                                <a href="/wheelchair" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>
                    </div>

                    {/* --- WIR Section (Card 2) --- */}
                    {/* Note the "reverse" class added here */}
                    <div className="product-section reverse">
                         <div 
                            ref={imageRef2} 
                            className={`product-image slide-in-right ${animate2 ? 'animate' : ''}`}
                        >
                            <img src={robotImg1} alt="Warehouse Robot" />
                        </div>
                        <div className="product-text">
                            <span className="category">Multi-Terrain Robot</span>
                            <h2>The WIR is an innovative tele-operated robot</h2>
                            <p>
                                The WIR is an innovative tele-operated mobile robot designed for search and inspection.
                                Its multi-terrain driving capability allows it to navigate various surfaces, including stairs, oily areas, and rocky terrains.
                            </p>
                             <div className="product-links">
                                <a href="/warehouse" className="btn-learn-more">View Details</a>
                            </div>
                        </div>
                    </div>

                    {/* --- Education Section (Card 3) --- */}
                    <div className="product-section">
                         <div 
                            ref={imageRef3} 
                            className={`product-image slide-in-left ${animate3 ? 'animate' : ''}`}
                        >
                            <img src={robotImg2} alt="Educational Robot" />
                        </div>
                        <div className="product-text">
                            <span className="category">Educational Robot</span>
                            <h2>Megara Educational Robot</h2>
                            <p>
                                A versatile educational tool designed to introduce students to the fundamentals of robotics, 
                                programming, and automation for hands-on learning experiences.
                            </p>
                             <div className="product-links">
                                <a href="/education" className="btn-learn-more">View Details</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}