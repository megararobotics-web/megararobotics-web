import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './Products.css';
import Footer from '../components/Footer';


export default function Products() {
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef3 = useRef(null);
    const imageRef4 = useRef(null);
    const imageRef5 = useRef(null);

    const [animate1, setAnimate1] = useState(false);
    const [animate2, setAnimate2] = useState(false);
    const [animate3, setAnimate3] = useState(false);
    const [animate4, setAnimate4] = useState(false);
    const [animate5, setAnimate5] = useState(false);

    useEffect(() => {
        const createObserver = (setter) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setter(true);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.3 }
            );
            return observer;
        };

        const observer1 = createObserver(setAnimate1);
        const observer2 = createObserver(setAnimate2);
        const observer3 = createObserver(setAnimate3);
        const observer4 = createObserver(setAnimate4);
        const observer5 = createObserver(setAnimate5);

        if (imageRef1.current) observer1.observe(imageRef1.current);
        if (imageRef2.current) observer2.observe(imageRef2.current);
        if (imageRef3.current) observer3.observe(imageRef3.current);
        if (imageRef4.current) observer4.observe(imageRef4.current);
        if (imageRef5.current) observer5.observe(imageRef5.current);

        return () => {
            observer1.disconnect();
            observer2.disconnect();
            observer3.disconnect();
            observer4.disconnect();
            observer5.disconnect();
        };
    }, []);

    return (
        <div>
            <Navbar />
            <br />

            <div className="color">
                <div className="products-container">
                    <h2 className="products-main-title">Explore our solutions</h2>

                    {/* --- KARAMBOT --- */}
                    <div className="product-section">
                        <div
                            ref={imageRef1}
                            className={`product-image slide-in-left ${animate1 ? 'animate' : ''}`}
                        >
                            <video
                                src="/assets/karambot.webm"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>
                        <div className="product-text">
                            <span className="category">KERAMBOT</span>
                            <h2>Kerambot is an intelligent tree-climbing harvesting robot</h2>
                            <p>
                                Kerambot is designed to safely and efficiently harvest coconuts without human climbing.
                                It reduces the risk of accidents and solves labor shortages using robotics.
                            </p>
                            <div className="product-links">
                                <a href="/kerambot" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>
                    </div>

                    {/* --- POWERED WHEELCHAIR --- */}
                    <div className="product-section reverse">
                        <div
                            ref={imageRef2}
                            className={`product-image slide-in-left ${animate2 ? 'animate' : ''}`}
                        >
                            <video
                                src="/assets/wheelChair.webm"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>
                        <div className="product-text">
                            <span className="category">POWERED WHEELCHAIR</span>
                            <h2>Powered wheelchair for assisted mobility</h2>
                            <p>
    A powered wheelchair engineered to assist patients and elderly users with smooth,
    controlled movement. Joystick-based operation ensures precise handling, enhanced safety,
    and reduced physical effort for both users and caregivers.
                            </p>
                            <div className="product-links">
                                <a href="/wheelchair" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>
                    </div>

                    {/* --- SELF-E --- */}
                    <div className="product-section">
                        <div
                            ref={imageRef3}
                            className={`product-image slide-in-left ${animate3 ? 'animate' : ''}`}
                        >
                            <video
                                src="/assets/selfe.webm"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>
                        <div className="product-text">
                            <span className="category">SELF-E</span>
                            <h2>Self-E is an advanced wheelchair</h2>
                            <p>
                               The main goal of the Self-E project is to provide an affordable, smart, and autonomous wheelchair that enhances mobility and independence for people with disabilities, the elderly, and patients through advanced navigation and easy control.
                            </p>
                            <div className="product-links">
                                <a href="/selfe" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>
                    </div>

                    {/* --- WIR --- */}
                    <div className="product-section reverse">
                        <div
                            ref={imageRef4}
                            className={`product-image slide-in-right ${animate4 ? 'animate' : ''}`}
                        >
                            <video
                                src="/assets/warehouse.webm"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>
                        <div className="product-text">
                            <span className="category">Multi-Terrain Robot</span>
                            <h2>The WIR is an innovative tele-operated robot</h2>
                            <p>
                                The WIR is an innovative tele-operated mobile robot designed for search and inspection. Its multi-terrain driving capability allows it to navigate various surfaces, including stairs, oily areas, and rocky terrains.
                            </p>
                            <div className="product-links">
                                <a href="/warehouse" className="btn-learn-more">View Details</a>
                            </div>
                        </div>
                    </div>

                    {/* --- EDUCATION --- */}
                    <div className="product-section">
                        <div
                            ref={imageRef5}
                            className={`product-image slide-in-left ${animate5 ? 'animate' : ''}`}
                        >
                            <video
                                src="/assets/educationRobot.webm"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>
                        <div className="product-text">
                            <span className="category">Educational Robot</span>
                            <h2>Megara Educational Robot</h2>
                            <p>
                               A versatile educational tool designed to introduce students to the fundamentals of robotics, programming, and automation for hands-on learning experiences.
                            </p>
                            <div className="product-links">
                                <a href="/education" className="btn-learn-more">View Details</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}
