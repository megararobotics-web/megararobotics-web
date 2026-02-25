import React from 'react';
import './Teams.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Dr. Rajesh Kannan",
    role: "Director & Founder",
    image: "/assets/img2.jpg",
  },
  {
    name: "Dr. Ramesh B",
    role: "Director",
    image: "/assets/img1.jpg",
  },
  {
    name: "Shankar Srinivasan",
    role: "Project Manager",
    image: "/assets/srenivasan.jpg",
  },
  {
    name: "Dhananjay Raghavan",
    role: "Project Manager",
    image: "/assets/Raghavan.jpg",
  },
  {
    name: "Sakthi Prasad",
    role: "Business Development Manager",
    image: "/assets/img3.png",
  },
  {
    name: "Shree Rajesh Raagul",
    role: "CTO",
    image: "/assets/img4.jpg",
  },
];

export default function Teams() {
  return (
    <>
      <Navbar />
      <section className="team-section">
        <h2 className="team-title">OUR TEAM</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image">
                <img
  src={member.image}
  alt={member.name}
  width="160"
  height="160"
  loading="eager"
  decoding="async"
  fetchpriority="high"
/>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
