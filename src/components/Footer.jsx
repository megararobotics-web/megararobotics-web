import React from 'react'
import qr from '/assets/Qr.png'
import './Footer.css'
export default function Footer  () {
  return (
    <div>
        <footer className="footer">
  <div className="footer-container">
    
   
    <div className="footer-about">
      <h2>Megara Robotics</h2>
    <p>
    No: 11B/14 Periyar Salai,<br />
    Ayanavaram, Chennai, India <br />
    Call Us Between 9AM – 7PM <br />
    Monday – Saturday <br />
    Phone: +91 8086673701
  </p>
      
    </div>

   
    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="https://www.amrita.edu/faculty/rajeshm/">Research Works</a></li>
        <li><a href="/contact">Technical Support</a></li>
      </ul>
    </div>


    <div className="footer-social">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https://api.whatsapp.com/send/?phone=918086673701&text&type=phone_number&app_absent=0"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp"/></a>
        <a href="https://www.facebook.com/Megara"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"/></a>
        <a href="https://x.com/megara"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter"/></a>
        <a href="https://www.youtube.com/@megararobotics"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube"/></a>
        <a href="https://www.linkedin.com/company/megararobotics/"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Linkedin"/></a>
      </div>
    </div>


    <div className="footer-qr">
      <h3>  Scan QR</h3>
      <img src={qr} alt="QR Code"/>
    </div>
  </div>

</footer>
    </div>
  )
}
