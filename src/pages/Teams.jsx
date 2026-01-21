import React from 'react';
import './Teams.css';

import imgRajesh from '../assets/img2.jpg';
import imgRamesh from '../assets/img1.jpg';
import imgSakthi from '../assets/img3.png';
import imgShree from '../assets/img4.jpg';
import Srinivasan from '../assets/srenivasan.jpg';
import Raghavan from '../assets/Raghavan.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Dr. Rajesh Kannan",
    role: "Director & Founder",
    image: imgRajesh,
  },
  {
    name: "Dr. Ramesh B",
    role: "Director",
    image: imgRamesh,
  },
  {
    name: "Shankar Srinivasan",
    role: "Project Manager",
    image: Srinivasan,
  },
  {
    name: "Dhananjay Raghavan",
    role: "Project Manager",
    image: Raghavan,
  },
  {
    name: "Sakthi Prasad",
    role: "Business Development Manager",
    image: imgSakthi,
  },
  {
    name: "Shree Rajesh Raagul",
    role: "CTO",
    image: imgShree,
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
                <img src={member.image} alt={member.name} />
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
