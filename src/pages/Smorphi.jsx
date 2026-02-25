import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Smorphi  ()  {
  return (
    <div>
        <Navbar/>
         <div className="wheelchairs-section">
                <h2 className="section-title">Smorphi Robot</h2>
                <div className="cards-container1">
        
                  {/* Card 1 */}
                  <div className="wheelchair-card">
                    <div className="wheelchair-img">
                      <img src="/assets/smorphi1.png" alt="Maruti 1.0" />
                    </div>
                    <div className="wheelchair-content">
                      <h3>Smorphi-V2 Squarebot</h3>
                      
                      <p>
                     Smorphi is a shape-changing robot that can take seven different shapes. This features makes it capable of performing task in narrow spaces.
                      </p>
                      <button onClick={() => window.location.href='/smorphiv2'}>Learn More</button>
                    </div>
                  </div>
        
                  {/* Card 2 */}
                  <div className="wheelchair-card">
                    <div className="wheelchair-img">
                      <img src="/assets/smorphi2.png" alt="Maruti 2.0" />
                    </div>
                    <div className="wheelchair-content">
                      <h3>Smorphi 2 Squarebot</h3>
                      
                      <p>
                  
                   Smorphi 2 is the next-generation modular robotic platform that seamlessly blends innovation, flexibility, and intelligence. 
                      
                      </p>
                      <br/>
                      <button onClick={() => window.location.href='/smorphi2'}>Learn More</button>
        
                    </div>
                  </div>
        
                </div>
              </div>
              <Footer/>
        </div>
  )
}
