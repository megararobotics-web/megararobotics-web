import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Assets
import armImage from '../assets/karambot2.png';
import featureImage from '../assets/karambot1.png';
import showcaseVideo from '../assets/karambotvid.mp4';

import './Bhuja.css';

export default function Karambot() {
    return (
        <div className="page-container">
            {/* Fixed Navigation */}
            
            <div className="nav-wrapper">
                <Navbar />
            </div>

            <main>
                {/* --- ROW 1: HERO (Gradient Background) --- */}
                <section className="row-section hero-bg">
                    <div className="content-container split-grid">
                        <div className="text-col">
                            <span className="badge-pill">INTRODUCTION</span>
                            <h1 className="main-heading">Kerambot</h1>
                            <h2></h2>
                            <p className="lead-text">
Kerambot is a smart tree-climbing robotic system designed to safely and efficiently harvest coconuts without the need for human climbing. It addresses the major challenges faced by farmers today—safety risks, labor shortages, and physical strain—by automating coconut harvesting while keeping the operator safely on the ground
                            </p>
                            <div className="btn-row">
                                <button className="btn-primary" onClick={() => window.location.href = "/contact"}>
                                    Get Quotation
                                </button>

                            </div>
                        </div>
                        <div className="img-col">
                            <div className="hero-blob"></div>
                            <img src={armImage} alt="Bhuja Robotic Arm" className="hero-img slide-in-right" />
                        </div>
                    </div>
                </section>

                {/* --- ROW 2: SPECS (White Background) --- */}
                <section className="row-section specs-bg">
                    <div className="content-container split-grid reverse">
                        <div className="text-col">
                            <span className="badge-pill dark">SPECIFICATIONS</span>
                            <h2 className="section-heading">Precision <br/>Engineering</h2>
<p className="body-text">
Kerambot is a rugged, field-tested tree-climbing robotic system engineered for real coconut trees with varying height, diameter, and surface texture. 
It combines a high-torque climbing mechanism, a circumferential harvesting system, and ground-based human control to deliver safe, stable, and efficient coconut harvesting.
</p>

                            
<ul className="spec-list">
    <li>
        <span className="label">Climbing Mechanism</span>
        <span className="value">Wheel-Based Traction System</span>
    </li>
    <li>
        <span className="label">Tree Compatibility</span>
        <span className="value">Natural Coconut Trees</span>
    </li>
    <li>
        <span className="label">Harvesting System</span>
        <span className="value">Robotic Arm on Circumferential Track</span>
    </li>
    <li>
        <span className="label">Control Method</span>
        <span className="value">Ground-Based Manual Control</span>
    </li>
    <li>
        <span className="label">Vision System</span>
        <span className="value">Live Camera Feed</span>
    </li>
    <li>
        <span className="label">Power Source</span>
        <span className="value">Onboard Battery System</span>
    </li>
</ul>

                        </div>
                        <div className="img-col">
                            <div className="spec-frame">
                                <img src={featureImage} alt="Technical Specs" className="spec-img" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ROW 3: VIDEO (Grey Background) --- */}
                <section className="row-section video-bg">
                    <div className="content-container center-col">
                        <span className="badge-pill">DEMONSTRATION</span>
                        <h2 className="section-heading">System In Action</h2>
                        
                        <div className="video-player-box">
                            <video
                                src={showcaseVideo}
                                controls
                                poster=''
                                controlsList="nodownload"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>

                
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}