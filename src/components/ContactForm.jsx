import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './ContactForm.css'

export default function ContactForm  ()  {
    const form = useRef();

  // --- Updated State ---
  // We'll use 'isSent' to control showing the form or the "Thank You" message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false); // <-- New state
  const [statusMessage, setStatusMessage] = useState(''); // This will now be just for errors

  const sendEmail = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setStatusMessage(''); // Clear any previous errors

    emailjs.sendForm(
      'service_i8po7yp',     
      'template_nassfnp',    
      form.current,
      'EVBCTEHL4RFIzX-dj' 
    )
    .then((result) => {
        console.log(result.text);
        // --- Updated Success Logic ---
        setIsSent(true); // <-- On success, set isSent to true
        setIsSubmitting(false);
    }, (error) => {
        console.log(error.text);
        // Error logic remains the same
        setStatusMessage('Failed to send message. Please try again.');
        setIsSubmitting(false);
        setTimeout(() => setStatusMessage(''), 5000); 
    });
  };
  
  return (
      <div>
  
      <div className="contact_us_8">
        <div className="responsive-container-block container">

          {/* --- New Conditional Rendering ---
            If the form is sent (isSent === true), show the "Thank You" UI.
            Otherwise (isSent === false), show the form.
          */}
          {isSent ? (
            <div className="form-box" style={{ textAlign: 'center', padding: '60px 20px' }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="80" 
                height="80" 
                fill="#10b981" // A nice green color
                viewBox="0 0 16 16"
                style={{ marginBottom: '20px' }}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '10px 0' }}>
                Thank You!
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Your message has been sent successfully. We will get back to you shortly.
              </p>
            </div>
          ) : (
            /* This is your original form */
            <form ref={form} onSubmit={sendEmail} className="form-box">
              <div className="container-block form-wrapper">
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i10mt-9">
                    <input className="input" id="ijowk-9" name="firstName" placeholder="First Name" required />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="ieakm">
                    <input className="input" id="indfi-7" name="lastName" placeholder="Last Name" required />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="iajvf">
                    <input className="input" id="ipmgh-9" name="email" placeholder="Email" type="email" required />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i0txn">
                    <input className="input" id="imgis-8" name="phoneNumber" placeholder="Phone Number" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i634i-9">
                    <textarea
                      aria-placeholder="What’s on your mind?"
                      className="textinput"
                      id="i5vyy-9"
                      name="message"
                      placeholder="What’s on your mind?"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12 checkbox-container" id="i634i-2-2">
                  <div className="checkboc-container">
                    <input id="i0m1w" type="checkbox" required />
                    <p className="checkbox-text" id="i5ywz">
                      I agree to be contacted regarding my inquiry.
                    </p>
                  </div>
                </div>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i0txn-2">
                  <button className="submit-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>

                {/* This error message will only show up if 'statusMessage' has text */}
                {statusMessage && (
                  <p style={{ 
                    textAlign: 'center', 
                    marginTop: '15px', 
                    color: 'red' // Always red, since it's only for errors now
                  }}>
                    {statusMessage}
                  </p>
                )}

                <div className="right-side-text">
                  <p className="text-blk contactus-head">
                    Get in Touch
                  </p>
                  <p className="text-blk contactus-subhead">
                    Let’s connect! Share your ideas or inquiries, and we’ll get back to you quickly.
                  </p>
                  <div className="social-media-links">
                    <a href="#" id="ix94i-2-3">
                      <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
                    </a>
                    <a href="#">
                      <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" />
                    </a>
                    <a href="#">
                      <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" />
                    </a>
                    <a href="#" id="izldf-2-3">
                      <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          )} 
          {/* --- End of Conditional Rendering --- */}

        </div>
      </div>

    </div>
  )
}
