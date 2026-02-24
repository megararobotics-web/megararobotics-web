import React from 'react'
import './BioInspired.css'
import Navbar from '../components/Navbar'
import bioimg from '/assets/bioinspiredmain.png'
import inspirado from '/assets/Inspirado-Robot.mp4'
import Footer from '../components/Footer'
export default function BioInspired  () {
  return (
    <div>
        <Navbar/>
        <div>
            <section className="chelonia-section">
      <h1 className="chelonia-title">
        Chelonia Bio-Inspired Multibody Robot: The Ultimate <br />
        transformable Robotic System
      </h1>

      <div className="chelonia-image">
        <img src={bioimg} alt="Chelonia Robot" />
      </div>

      <div className="chelonia-description">
        <p>
          The Chelonia Bio-Inspired Multibody Robot is an innovative platform
          designed to transform into four distinct configurations—Crab, Scorpion,
          Spider, and Turtlebot—each tailored for unique movement patterns and
          applications. This adaptable design allows users to customize the robot’s
          structure to suit various operational needs, from precision-based
          pick-and-place tasks to advanced autonomous navigation. Equipped with
          grippers for manipulation, microcontrollers, and a Raspberry Pi for
          powerful onboard processing, the Chelonia Bio-Inspired Multibody is built
          for maximum versatility and functionality.
        </p>
      </div>
    </section>
        </div>
        <div className="video-wrapper">
              <video
                className="video-player"
                src={inspirado}
                controls
                preload="metadata"
                controlsList="nodownload"   
                onContextMenu={(e) => e.preventDefault()}
               
              />
            </div>


             <section className="features-section">
      <ul className="features-list">
        <li>
          <strong>Customizable Modes:</strong> Switch between Crab, Scorpion,
          Spider, and Turtlebot modes for unique movement capabilities, ideal
          for exploring robotic locomotion and real-world applications.
        </li>
        <li>
          <strong>Autonomous Navigation:</strong> Equipped with sensors and
          Raspberry Pi processing for real-time mapping, obstacle avoidance,
          and route planning in complex environments.
        </li>
        <li>
          <strong>Gripper Functionality:</strong> Precise grippers enable
          pick-and-place tasks, suitable for sorting, assembly, and interactive
          learning.
        </li>
        <li>
          <strong>High-Performance Control:</strong> Combines microcontrollers
          and Raspberry Pi for robust processing, sensor integration, and
          multitasking.
        </li>
        <li>
          <strong>Comprehensive Sensors:</strong> Features sensors for
          navigation, distance measurement, and orientation, ensuring
          intelligent environmental interaction.
        </li>
        <li>
          <strong>Educational Platform:</strong> Perfect for students,
          researchers, and enthusiasts to explore robotic systems,
          configurations, and functionalities.
        </li>
      </ul>

      <div className="features-buttons">
        <button
  onClick={() => (window.location.href = "/contact")}
>
  GET QUOTE
</button>
        <button
  onClick={() => (window.location.href = "/scorpine")}
>
  Scorpine
</button>
        <button
  onClick={() => (window.location.href = "/cancero")}
>
  Cancero
</button>
        <button
  onClick={() => (window.location.href = "/spidera")}
>
  Spidera
</button>
      </div>
    </section>
    <Footer/>
        </div>
  )
}


