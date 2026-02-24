import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Assets
import armImage from '/assets/bhuja1.png';
import featureImage from '/assets/bhuja2.png';
import showcaseVideo from '/assets/bhujavid.mp4';

import './Bhuja.css';

export default function Bhuja() {
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
                            <h1 className="main-heading">Bhuja <br/>6-DOF Arm</h1>
                            <p className="lead-text">
                               Bhuja is a 6-DOF robotic arm with versatile control mode
Teach Pendant, AMC, and ZMQ-based SMC supporting
Base, Tool, and Joint operations. It enables precise, flexible
tasks with interchangeable end effectors for industrial and
research applications.
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
                               BHUJA is a 6-DOF articulated robotic arm with individually motor-driven joints, delivering smooth, precise, and flexible motion for automation tasks.
It supports Base, Tool, and Joint modes with Teach and Repeat programming for easy manual training and autonomous operation.
                            </p>
                            
                            <ul className="spec-list">
                                <li>
                                    <span className="label">Degrees of Freedom</span>
                                    <span className="value">6-DOF</span>
                                </li>
                                <li>
                                    <span className="label">Actuation</span>
                                    <span className="value">6 Independent Motors</span>
                                </li>
                                <li>
                                    <span className="label">Control Interface</span>
                                    <span className="value">Teach Pendant / ROS / ZMQ</span>
                                </li>
                                <li>
                                    <span className="label">Operation Modes</span>
                                    <span className="value">Teach & Repeat</span>
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