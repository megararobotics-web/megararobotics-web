
import React, { useRef } from "react";
import "./B1Experiment.css";
import topArrow from "/assets/uparrow.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Spidera() {
  const topRef = useRef(null); // Top reference for scroll-to-top

  // Centralized content map
  const contentMap = {
    Features: {
      type: "section",
      content: (
        <>
    <ul>
        <li><b>Four-Legged Design for Stability and Mobility:</b> The robot's Four legs provide a high degree of stability, even on uneven terrain, mimicking the natural movement of arachnids. With multiple degrees of freedom in each leg, the robot can navigate obstacles, turn in place, and maintain balance during complex manoeuvres. The leg design allows for adaptive gait patterns, which improve traction and minimize the risk of tipping over.</li>
        <li><b>Adaptive Gait Control:</b> With independent control over each leg's speed, the robot can adjust its walking patterns based on environmental conditions or specific tasks. This adaptive gait control allows the robot to optimize its movements for energy efficiency, obstacle avoidance, or specific terrain types.</li>
        <li><b>Bluetooth Connectivity:</b> Utilize Bluetooth communication to control the -multibody-Spidera robot remotely. Commands can be sent through a Bluetooth module, providing wireless flexibility and enabling users to experiment with different control mechanisms.</li>
        <li><b>Educational Platform:</b> Tailored for educational purposes, the -multibody-Spidera Version is an ideal tool for students and enthusiasts to delve into the world of robotics. The robot facilitates hands-on learning, fostering a deeper understanding of robotic systems and programming.</li>
        <li><b>High Mobility in Various Terrains:</b> Its multi-legged design and sensor integration, the robot excels at traversing various surfaces, including rough, inclined, or uneven ground. It can dynamically adjust its gait and speed to handle different types of terrain, making it suitable for both indoor and outdoor applications.</li>
    </ul>

    <h2>SAFETY PRECAUTIONS</h2>
    <ol>
        <li><b>Check Power Requirements:</b> Always ensure the voltage and current match the components’ requirements. Overpowering can damage components or cause them to overheat and even catch fire.</li>
        <li><b>Use Insulation:</b> Avoid touching powered circuits with bare hands. Use insulated tools to handle components when they’re connected to a power source.</li>
        <li><b>Static Protection:</b> Sensitive components, like microcontrollers and ICs, can be damaged by static electricity. Ground yourself with an anti-static wrist strap or touch a metal object to discharge static before handling these components.</li>
        <li><b>Avoid Direct Skin Contact:</b> Resistors, transistors, and other components can heat up during operation. Let them cool down before handling or unplugging them.</li>
        <li><b>Ventilation for Batteries:</b> When working with batteries, especially lithium-ion, ensure good ventilation. Overheating can cause batteries to swell or explode.</li>
        <li><b>Fuse Protection:</b> Include fuses in your circuits, especially when experimenting with power supplies. This can prevent potential short circuits from causing damage or injury.</li>
        <li><b>Avoid Overloading Breadboards:</b> Breadboards are for low-current connections. Avoid connecting high-current components directly to them as this may cause overheating and component damage.</li>
        <li><b>Label High Voltage Areas:</b> If working with high-voltage components, mark them and keep them isolated to avoid accidental contact.</li>
        <li><b>Double-Check Connections:</b> Before powering up, double-check all connections for correctness, polarity, and insulation. Miswiring can cause short circuits or damage to components.</li>
        <li><b>Keep Water and Liquids Away:</b> Electronics and moisture don’t mix. Make sure your workspace is dry, and never work on live electronics with wet hands.</li>
    </ol>

    <h2>KIT CONTENTS</h2>
    <ul>
        <li class="kit-item"><b>Servo Motors - 12 units</b> <span>Description: Small, high-torque servos for precise control over movement.</span></li>
        <li class="kit-item"><b>Motor Shafts - 12 units</b> <span>Description: Compatible shafts for attaching servo motors to the 3D-printed legs.</span></li>
        <li class="kit-item"><b>3D-Printed Spider Legs - 4 sets</b> <span>(each set includes 3 leg segments: shoulder, elbow, wrist) Description: 3D-printed segments designed to mimic spider leg articulation.</span></li>
        <li class="kit-item"><b>Printed Circuit Board (PCB) - 1 unit</b> <span>Description: Custom-designed PCB to facilitate connections and wiring for all components.</span></li>
        <li class="kit-item"><b>Teensy Microcontroller - 1 unit</b> <span>Description: Teensy 4.1 microcontroller for precise control of the robot’s movements and processing.</span></li>
        <li class="kit-item"><b>5V Buck Converter - 1 unit</b> <span>Description: Voltage regulator to step down the power supply for components requiring 5V.</span></li>
        <li class="kit-item"><b>Bluetooth Module - 1 unit</b> <span>Description: Wireless communication module for remote control and programming.</span></li>
        <li class="kit-item"><b>Ultrasonic Sensor - 1 unit</b> <span>Description: Distance-measuring sensor for obstacle detection or proximity sensing.</span></li>
        <li class="kit-item"><b>Connectors - 1 set</b> <span>Description: Necessary connectors for all wiring (JST, DuPont, or other as needed).</span></li>
        <li class="kit-item"><b>Screws - Assorted sizes, approximately 30 pieces</b> <span>Description: Screws compatible with servo mounts, PCB, and structural assembly.</span></li>
        <li class="kit-item"><b>Screwdriver - 1 unit</b> <span>Description: Small Phillips-head or flathead screwdriver for assembling and tightening screws.</span></li>
        <li class="kit-item"><b>Wiring Set - 1 set</b> <span>Description: Pre-cut and stripped wires for connecting all components to the PCB.</span></li>
    </ul>
        </>
      ),
    },
    "Getting Started": {
      type: "section",
      content: (
        <>
    <h2>Hardware Assembly</h2>

    <h3>Components</h3>
    <p>Ensure you have the following components ready for the Chelonia-Multibody-Spidera hardware assembly:</p>
    <ul>
        <li>Teensy 4.0</li>
        <li>Servo motor (12)</li>
        <li>Battery</li>
        <li>Connectors</li>
        <li>HC-05 Bluetooth Module</li>
    </ul>

    <h3>Hardware Connection Diagram</h3>
    <p>Refer to the attached hardware connection diagram available at the following link:</p>
    <p><a href="[Hardware connection link placeholder]" target="_blank">Hardware connection</a>.</p>

    <h3>Assembly Steps</h3>
    <p>Follow the steps below to complete the Spidera hardware assembly:</p>
    <ol>
        <li><b>Battery Connection:</b>
            <ul>
                <li>Connect the battery to the power input terminals.</li>
                <li>Ensure correct polarity to avoid damage.</li>
            </ul>
        </li>
        <li><b>Wiring Check:</b>
            <ul>
                <li>Verify all connections, ensuring there are no loose wires or incorrect placements.</li>
                <li>Double-check the connection diagram for reference.</li>
            </ul>
        </li>
        <li><b>Power-Up and Testing:</b>
            <ul>
                <li>Power up the Spidera by turning ON the battery.</li>
                <li>Ensure the Teensy 4.0 and servo motors receive power.</li>
                <li>To test the hardware assembly, execute the code for the desired experiment on Teensy 4.0.</li>
                <li>Observe the movement of the legs and ensure they respond appropriately to the code instructions.</li>
            </ul>
        </li>
        <li><b>Programming Connection:</b>
            <ul>
                <li>Connect the necessary programming pins based on the experiment requirements (typically the USB connection to Teensy 4.0).</li>
            </ul>
        </li>
    </ol>

    <h2>Software Installation</h2>
    <p>This section will help you install the Arduino IDE software for programming.</p>
    <ol>
        <li>Go to the website <a href="https://www.arduino.cc" target="_blank">www.arduino.cc</a> to download the software.</li>
        <li>Click on the “windows installer” icon (or the installer for your OS) from the bottom of the site.</li>
        <li>Begin the download by clicking the “just download” option.</li>
        <li>Extract the zip file (if applicable) and start the installation.</li>
        <li>Select the installation options.</li>
        <li>Choose the installation path.</li>
        <li>Finish the installation.</li>
        <li>Launch the Arduino IDE.</li>
    </ol>

    <h2>Connecting to Arduino IDE</h2>
    <p>Follow the steps below to connect your Spidera to the Arduino IDE:</p>
    <ol>
        <li><b>Connect the Cable:</b>
            <ul>
                <li>Connect the USB cable from your computer to the Teensy 4.0 on your Spidera.</li>
            </ul>
        </li>
        <li><b>Open Arduino IDE:</b>
            <ul>
                <li>Open the Arduino IDE software on your computer.</li>
            </ul>
        </li>
        <li><b>Open New Sketch:</b>
            <ul>
                <li>In the Arduino IDE, open a new sketch (File -{">"} New).</li>
            </ul>
        </li>
        <li><b>Board Selection:</b>
            <ul>
                <li>Select the Teensy 4.0 board from the Arduino IDE software (Tools -{">"} Board -{">"} Teensyduino -{">"} Teensy 4.0).</li>
                <li>For help installing Teensyduino support in Arduino IDE, please refer to this link: <a href="[Arduino board selection link placeholder]" target="_blank">Teensy Board Setup Guide</a></li>
            </ul>
        </li>
        <li><b>Load the Code:</b>
            <ul>
                <li>Copy and paste the code for the specific experiment into the new sketch.</li>
            </ul>
        </li>
        <li><b>Verify the Code:</b>
            <ul>
                <li>Click on the "Verify" button (checkmark icon) to check the code for any errors.</li>
            </ul>
        </li>
        <li><b>Upload the Code:</b>
            <ul>
                <li>Once the code verification is successful, click on the "Upload" button (right arrow icon) to upload the code to the Teensy board. The Teensy Loader application should open automatically to handle the upload.</li>
            </ul>
        </li>
        <li><b>Observe LED Blinking:</b>
            <ul>
                <li>During the uploading process, observe the LED on the Teensy 4.0. It should blink, indicating the data transfer.</li>
            </ul>
        </li>
        <li><b>Remove the Connector:</b>
            <ul>
                <li>After successful uploading, you can safely disconnect the USB cable from the Teensy 4.0 if you are powering it externally.</li>
            </ul>
        </li>
        <li><b>Connect 5V from Buck Converter to Teensy:</b>
            <ul>
                <li>Prior to powering up the Spidera from the battery, ensure the 5V line from the buck converter is connected to the Teensy 4.0's VIN or appropriate 5V input pin (if not powered via USB).</li>
            </ul>
        </li>
    </ol>

    <div class="important-note">
        <p><b>Important Note:</b> Before proceeding with any power-up activities, it is crucial to ensure the reliability of your Spidera's wiring. Perform the following essential steps:</p>
        <ul>
            <li><b>Multimeter Continuity Check:</b>
                <ul>
                    <li>Use a multimeter to check the continuity of each wire. Verify that there are no breaks or interruptions in the wiring. This step is essential for preventing potential issues related to poor electrical connectivity.</li>
                </ul>
            </li>
            <li><b>Double-Check All Connections:</b>
                <ul>
                    <li>Thoroughly inspect all connections to guarantee that each component is securely and correctly attached. Pay special attention to junctions, joints, and interfaces between different modules. Any loose or incorrectly connected components could lead to operational errors or malfunctions.</li>
                </ul>
            </li>
        </ul>
        <p>These precautionary measures ensure a robust and reliable hardware setup, minimizing the risk of electrical faults during the operation of your Spidera.</p>
    </div>
        </>
      ),
    },
      "Spidra Standing up & Sitting Down": {
      type: "experiment",
      content: (
        <>
    <h3>Objective</h3>
    <p>The objective of this experiment is to control the B-Inspirado Robot, a 4-legged robot equipped with 12 servo motors, to perform standing up and sitting down actions using the Bluedino mobile app. The experiment aims to enable the B-Inspirado Robot to execute simple standing and sitting movements, interfaced via Bluetooth, based on user inputs from the mobile application.</p>
    
    <h3>Hardware Setup</h3>
    <p>Before running the experiment, ensure that you have assembled the B-Inspirado Robot hardware as per the assembly instructions (referencing Section 2.1 in your manual). Additionally, make sure you have connected the B-Inspirado Robot to the Arduino IDE (or compatible microcontroller environment) as explained (referencing Section 2.3 in your manual).</p>

    <h4>Robot Components:</h4>
    <ul>
        <li>B-Inspirado Robot 4-legged robot frame</li>
        <li>12 servo motors (3 for each leg)</li>
        <li>HC-05 Bluetooth module</li>
        <li>Power supply for the servos and the robot's control system</li>
        <li>Arduino or compatible microcontroller for servo control</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to the appropriate signal pins on the microcontroller. Ensure VCC and GND are properly supplied, potentially using an external power source for the servos due to high current draw.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Power up the robot and ensure the microcontroller is programmed with the appropriate code to respond to Bluetooth commands.</li>
    </ul>
    
    <h3>Software Setup</h3>
    <ol>
        <li>Download and install the <b>Bluedino</b> app from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
        <li>Configure the Bluedino app:
            <ul>
                <li>Open the app and connect to the paired HC-05 module.</li>
                <li>Go to the settings section for button configuration (e.g., Command Button Configuration or similar).</li>
                <li>Map a button (e.g., Button X as mentioned, or any other button) to send the command character <code>b</code>. This single command will toggle between standing up and sitting down in the provided code logic.</li>
            </ul>
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Ensure the B-Inspirado robot is powered on.</li>
        <li>Open the Bluedino app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module associated with the robot.</li>
        <li>Navigate to the button control interface you configured.</li>
        <li>Press the button assigned to the command <code>b</code>. The robot should stand up.</li>
        <li>Press the same button again. The robot should sit down.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>Upon pressing the designated button in the Bluedino app (sending command <code>b</code>), the B-Inspirado Robot will toggle between standing up and sitting down by adjusting its 12 servo positions according to the pre-programmed sequences.</li>
        <li>The robot should respond promptly to the commands, demonstrating stable and smooth movements.</li>
        <li>The connection status in the Bluedino app should indicate "Connected" during operation.</li>
    </ul>

    <div class="note">
        <p><b>Note:</b> The stability and smoothness of movement heavily depend on the correct calibration of servo angles in the code and the power supplied to the servos.</p>
    </div>
        </>
      ),
    },
      "Spidra walking gait movements": {
      type: "experiment",
      content: (
        <>
   <h3>Objective</h3>
    <p>The objective of this experiment is to demonstrate the walking gait movements of the B-Inspirado Robot, a 4-legged robot equipped with 12 servo motors, using the Bluedino mobile app. The experiment aims to enable directional movement control (forward, backward, left, and right) of the B-Inspirado Robot via Bluetooth communication, providing an interactive teleoperation platform that responds to simple button commands.</p>
    
    <h3>Hardware Setup</h3>
    <p>Before running the experiment, ensure that you have assembled the B-Inspirado hardware as per the assembly instructions (referencing Section 2.1 in your manual). Additionally, make sure you have connected the B-Inspirado to the Arduino IDE (or compatible microcontroller environment) as explained (referencing Section 2.3 in your manual).</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>B-Inspirado Robot:</b> A 4-legged robot frame with 12 servo motors (3 motors per leg).</li>
        <li><b>HC-05 Bluetooth Module:</b> Used for wireless communication between the robot and the mobile device.</li>
        <li><b>Microcontroller:</b> Controls the servo motors based on input commands received via Bluetooth (e.g., Teensy 4.0, Arduino Mega).</li>
        <li><b>Power Supply:</b> Batteries or an external power source sufficient to power the microcontroller and all 12 servo motors.</li>
        <li><b>Bluedino Mobile App:</b> Installed on the user's mobile phone to send commands to the robot.</li>
        <li><b>Mobile Device:</b> Used to pair with the HC-05 Bluetooth module and control the robot via the Bluedino app.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections, using an external power supply for the servos if needed.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Ensure the microcontroller is programmed with the code designed to interpret gait commands (<code>a</code>, <code>z</code>, <code>l</code>, <code>r</code>).</li>
    </ul>
    
    <h3>Software Setup (Bluedino App)</h3>
    <ol>
        <li>Download and install the <b>Bluedino</b> app from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
        <li>Configure the Bluedino app:
            <ul>
                <li>Open the app and connect to the paired HC-05 module.</li>
                <li>Go to the button configuration settings.</li>
                <li>Map the directional buttons (e.g., arrow keys) to the following commands:
                    <ul>
                        <li>Up Arrow Button: Send command <code>a</code> (for forward movement)</li>
                        <li>Down Arrow Button: Send command <code>z</code> (for backward movement)</li>
                        <li>Left Arrow Button: Send command <code>l</code> (for left movement/turning)</li>
                        <li>Right Arrow Button: Send command <code>r</code> (for right movement/turning)</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the B-Inspirado robot.</li>
        <li>Open the Bluedino app and connect to the robot's Bluetooth module.</li>
        <li>Navigate to the button control interface.</li>
        <li>Press and hold the configured arrow buttons to make the robot walk:
            <ul>
                <li>Press Up (<code>a</code>) to walk forward.</li>
                <li>Press Down (<code>z</code>) to walk backward.</li>
                <li>Press Left (<code>l</code>) to turn/walk left.</li>
                <li>Press Right (<code>r</code>) to turn/walk right.</li>
            </ul>
        </li>
        <li>Release the button to stop the robot's movement.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>The robot will successfully connect to the Bluedino app via Bluetooth.</li>
        <li>Upon pressing and holding the configured buttons on the Bluedino app, the robot will initiate walking movements in the corresponding directions (forward, backward, left, right).</li>
        <li>The robot will stop moving immediately when the button is released.</li>
        <li>The system should respond promptly, demonstrating effective teleoperation with recognizable walking gaits.</li>
    </ul>

    <div class="note">
        <p><b>Note:</b> The effectiveness of the walking gait depends on the specific algorithms implemented in the microcontroller's code, servo calibration, and the surface the robot is walking on.</p>
    </div>

        </>
      ),
    },
      "Spidra Hand Waving": {
      type: "experiment",
      content: (
        <>
    <h3>Objective</h3>
    <p>The objective of this experiment is to program a 4-legged B-Inspirado robot with 12 servo motors to perform a hand-waving action using the Bluedino mobile app. The experiment aims to establish a seamless interaction between the mobile app and the robot, allowing precise control of leg movements through Bluetooth communication.</p>
    
    <h3>Hardware Setup</h3>
    <p>Before running the experiment, ensure that you have assembled the B-Inspirado hardware as per the assembly instructions (referencing Section 2.1 in your manual). Additionally, make sure you have connected the B-Inspirado to the Arduino IDE (or compatible microcontroller environment) as explained (referencing Section 2.3 in your manual).</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>B-Inspirado Robot:</b> A 4-legged robot frame with 12 servo motors (3 servos per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller for controlling the servo motors.</li>
        <li><b>HC-05 Bluetooth Module:</b> For wireless communication between the mobile device and the robot.</li>
        <li><b>Power Supply:</b> Adequate power source to support the 12 servos and the microcontroller.</li>
        <li><b>Bluedino Mobile App:</b> An application downloaded from the Play Store, used for sending commands to the robot.</li>
        <li><b>Mobile Device:</b> Used to pair with the HC-05 Bluetooth module and control the robot via the Bluedino app.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections, using an external power supply for the servos if needed.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Ensure the microcontroller is programmed with the code designed to interpret the waving command (<code>w</code>).</li>
    </ul>

    <h3>Software Setup (Bluedino App)</h3>
    <ol>
        <li>Download and install the <b>Bluedino</b> app from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
        <li>Configure the Bluedino app:
            <ul>
                <li>Open the app and connect to the paired HC-05 module.</li>
                <li>Go to the button configuration settings (e.g., Command Button Configuration).</li>
                <li>Map a button (e.g., Button X, or another available button) to send the command character <code>w</code>. This command will trigger the waving action.</li>
            </ul>
            
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the B-Inspirado robot.</li>
        <li>Open the Bluedino app and connect to the robot's Bluetooth module.</li>
        <li>Navigate to the button control interface where you configured the 'waving' button.</li>
        <li>Press and hold the button assigned to the command <code>w</code>. The robot should initiate the waving motion with one of its legs.</li>
        <li>Release the button to stop the waving motion.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>The robot successfully pairs with the mobile phone via Bluetooth and connects through the Bluedino app.</li>
        <li>Pressing the configured button (sending command <code>w</code>) initiates the programmed waving motion of one of the robot's legs.</li>
        <li>The waving motion stops immediately when the button is released, demonstrating real-time control.</li>
        <li>The experiment confirms the robot's responsiveness to specific commands for complex actions like waving.</li>
    </ul>
        </>
      ),
    },
      "Spidra Handshake": {
      type: "experiment",
      content: (
        <>
   <h3>Objective</h3>
    <p>To develop a teleoperated robotic system using the Bluedino mobile app to control a 4-legged robot (B-Inspirado robot) equipped with 12 servo motors. The objective is to enable one leg of the robot to perform a handshaking motion when a designated button on the app is pressed, demonstrating remote control capabilities and the integration of mobile technology with robotics.</p>
    
    <h3>Hardware Setup</h3>
    <p>Before proceeding, ensure the B-Inspirado robot is fully assembled with all 12 servos connected, and the microcontroller is appropriately wired.</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Robot Structure:</b> 4-legged robot (B-Inspirado robot) with 12 servo motors (3 per leg). Structural materials (e.g., plastic or lightweight metal).</li>
        <li><b>Microcontroller:</b> Arduino board or compatible microcontroller capable of controlling 12 servo motors (e.g., Teensy 4.0, Arduino Mega).</li>
        <li><b>Bluetooth Module:</b> HC-05 Bluetooth module for wireless communication.</li>
        <li><b>Power Supply:</b> Battery pack or external power supply suitable for the microcontroller and the high current demand of 12 servo motors.</li>
        <li><b>Mobile Device:</b> Smartphone with Android OS.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to the appropriate signal pins on the microcontroller. Ensure VCC and GND are properly supplied, potentially using an external power source for the servos.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Ensure the microcontroller is programmed with the code designed to interpret the handshaking command (e.g., <code>w</code> as suggested, or another character).</li>
    </ul>

    <h3>Software Setup</h3>
    <ol>
        <li><b>Arduino IDE:</b> Program the microcontroller with the code that defines the handshaking motion sequence and listens for the Bluetooth command.</li>
        <li><b>Bluedino Mobile App:</b>
            <ul>
                <li>Download and install the <b>Bluedino</b> app from the Google Play Store.</li>
                <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
                <li>Open the Bluedino app and connect to the paired HC-05 module.</li>
                <li>Navigate to the button configuration settings (e.g., Command Button Configuration).</li>
                <li>Map a specific button (e.g., Button X, or another preferred button) to send the command character designated for handshaking (e.g., <code>w</code>).</li>
            </ul>
            
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the B-Inspirado robot.</li>
        <li>Open the Bluedino app on your mobile device and connect to the robot's Bluetooth module.</li>
        <li>Navigate to the control screen where you configured the handshaking button.</li>
        <li>Press and hold the designated button (e.g., the one mapped to <code>w</code>). The robot should initiate the handshaking motion with one of its legs.</li>
        <li>Release the button to stop the handshaking motion.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>The robot successfully establishes a Bluetooth connection with the mobile device via the Bluedino app.</li>
        <li>Pressing the configured button (e.g., Button X sending <code>w</code>) initiates the programmed handshaking motion of the designated leg.</li>
        <li>The handshaking motion continues as long as the button is held down and stops upon release.</li>
        <li>The robot responds promptly to the commands, demonstrating effective real-time control via the mobile app.</li>
    </ul>

        </>
      ),
    },
      "Dancing Robot": {
      type: "experiment",
      content: (
        <>
   <h3>Objective</h3>
    <p>To develop a teleoperated dancing robot (Spidra) using the Bluedino mobile app, allowing the 4-legged robot equipped with 12 servo motors to perform a dancing motion when a designated button on the app is pressed. This experiment aims to showcase the integration of robotics and mobile technology for real-time control and entertainment.</p>
    
    <h3>Hardware Setup</h3>
    <p>Before proceeding, ensure the Spidra robot is fully assembled with all 12 servos connected, and the microcontroller is appropriately wired and programmed.</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Robot Structure:</b> 4-legged robot (Spidra) with 12 servo motors (3 per leg). Materials for constructing the robot body (e.g., plastic or lightweight metal).</li>
        <li><b>Microcontroller:</b> Arduino board or compatible microcontroller capable of controlling 12 servo motors (e.g., Teensy 4.0, Arduino Mega).</li>
        <li><b>Bluetooth Module:</b> HC-05 Bluetooth module for wireless communication.</li>
        <li><b>Power Supply:</b> Battery pack or external power supply suitable for the microcontroller and the high current demand of 12 servo motors.</li>
        <li><b>Mobile Device:</b> Smartphone with Android OS.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to the appropriate signal pins on the microcontroller. Ensure VCC and GND are properly supplied, potentially using an external power source for the servos.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Ensure the microcontroller is programmed with the code that defines the dancing motion sequence and listens for the Bluetooth command (e.g., the command triggered by button L1 in the Bluedino app).</li>
    </ul>

    <h3>Software Setup</h3>
    <ol>
        <li><b>Arduino IDE:</b> Program the microcontroller with the code that defines the dancing motion sequence and listens for the specific Bluetooth command.</li>
        <li><b>Bluedino Mobile App:</b>
            <ul>
                <li>Download and install the <b>Bluedino</b> app from the Google Play Store.</li>
                <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
                <li>Open the Bluedino app and connect to the paired HC-05 module.</li>
                <li>Navigate to the button configuration settings (e.g., Command Button Configuration).</li>
                <li>Map a specific button (e.g., <b>L1</b>) to send the command character designated for the dancing motion in your Arduino code.</li>
            </ul>
            
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the Spidra robot.</li>
        <li>Open the Bluedino app on your mobile device and connect to the robot's Bluetooth module.</li>
        <li>Navigate to the control screen where you configured the dancing button (e.g., L1).</li>
        <li>Press and hold the designated button (L1). The robot should initiate the pre-programmed dancing motion.</li>
        <li>Release the button to stop the dancing motion.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>The robot successfully establishes a Bluetooth connection with the mobile device via the Bluedino app.</li>
        <li>Pressing the configured button (L1) initiates the programmed dancing motion involving coordinated movements of the robot's legs.</li>
        <li>The dancing motion continues as long as the button is held down and stops promptly upon release.</li>
        <li>The experiment demonstrates effective real-time control and coordination of multiple servo motors to achieve a complex action like dancing.</li>
    </ul>

        </>
      ),
    },
      "Spidera Side Walk": {
      type: "experiment",
      content: (
        <>
   <h3>Objective</h3>
    <p>The objective of this experiment is to enable the Spidera robot to perform a side-walking motion using the Bluedino mobile app. By leveraging Bluetooth teleoperation, this experiment allows the user to control the robot to walk sideways to the left or right, enhancing maneuverability and control for various applications.</p>

    <h3>Hardware Setup</h3>
    <p>Before initiating the experiment, ensure the Spidera robot is fully assembled as outlined in the assembly instructions (referencing Section 2.1) and connected to the Arduino IDE (or compatible environment) as shown (referencing Section 2.3).</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Spidera Robot:</b> A 4-legged robot equipped with 12 servo motors (3 per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller (e.g., Teensy 4.0) capable of controlling 12 servos.</li>
        <li><b>HC-05 Bluetooth Module:</b> For wireless communication.</li>
        <li><b>Power Supply:</b> Sufficient power for the microcontroller and all 12 servo motors.</li>
        <li><b>Mobile Device:</b> Android smartphone.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections, using an external power supply for the servos if needed.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Ensure the microcontroller is loaded with the code that defines the side-walking gaits and interprets the Bluetooth commands (e.g., <code>L</code> for left, <code>R</code> for right).</li>
    </ul>

    <h3>Software Setup (Bluedino App)</h3>
    <ol>
        <li>Download and install the <b>Bluedino</b> app from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
        <li>Configure the Bluedino app:
            <ul>
                <li>Open the app and connect to the paired HC-05 module.</li>
                <li>Go to the button configuration settings (e.g., Command Button Configuration).</li>
                <li>Map one button to send the command character for walking left (e.g., <code>L</code>).</li>
                <li>Map another button to send the command character for walking right (e.g., <code>R</code>).</li>
            </ul>
            
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the Spidera robot.</li>
        <li>Open the Bluedino app and connect to the robot's Bluetooth module.</li>
        <li>Navigate to the button control interface where you configured the side-walk buttons.</li>
        <li>Press and hold the button assigned to the command <code>L</code>. The robot should initiate the left side-walking gait.</li>
        <li>Release the button to stop.</li>
        <li>Press and hold the button assigned to the command <code>R</code>. The robot should initiate the right side-walking gait.</li>
        <li>Release the button to stop.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>The robot successfully pairs and connects with the Bluedino app via Bluetooth.</li>
        <li>Pressing the button configured for command <code>L</code> makes the Spidera perform a coordinated left side-walk motion.</li>
        <li>Pressing the button configured for command <code>R</code> makes the Spidera perform a coordinated right side-walk motion.</li>
        <li>The robot responds smoothly to the commands, maintaining stability while walking sideways.</li>
        <li>The Bluetooth connection remains stable, and the Bluedino app indicates a "Connected" status during operation.</li>
    </ul>

        </>
      ),
    },
      "Voice Control Through Mobile App": {
      type: "experiment",
      content: (
        <>
   <h3>Objective</h3>
    <p>The objective of this experiment is to control the Spidera robot using voice commands via a mobile app. This experiment focuses on adding a layer of interactivity by allowing the user to control the robot’s movements, such as standing, sitting, or walking, using voice inputs processed through the mobile app.</p>

    <h3>Hardware Setup</h3>
    <p>Before starting the experiment, confirm that Spidera is assembled per Section 2.1 (referencing previous assembly guide), and connect it to the Arduino IDE (or compatible environment) as explained in Section 2.3 (referencing previous setup guide).</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Spidera Robot:</b> A 4-legged robot equipped with 12 servo motors (3 per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller (e.g., Teensy 4.0) capable of controlling 12 servos.</li>
        <li><b>HC-05 Bluetooth Module:</b> For wireless communication.</li>
        <li><b>Power Supply:</b> Sufficient power for the microcontroller and all 12 servo motors.</li>
        <li><b>Mobile Device:</b> Android smartphone.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections, using an external power supply for the servos if needed.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Ensure the microcontroller is pre-loaded with code capable of processing Bluetooth commands associated with the voice inputs (e.g., specific characters or strings for "Stand", "Sit", "Left", etc.).</li>
    </ul>

    <h3>Software Setup (Mobile App)</h3>
    <ol>
        <li>Download and install a mobile app with voice control capability, such as <b>“Bluetooth Voice Control for Arduino,”</b> from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
        <li>Configure the app to recognize specific voice commands and send corresponding data (characters or strings) to the robot via Bluetooth. Example configuration:
            <ul>
                <li>Voice Command: "Stand" → Send Data: 'U' (or similar character defined in your Arduino code)</li>
                <li>Voice Command: "Sit" → Send Data: 'D'</li>
                <li>Voice Command: "Left" → Send Data: 'L'</li>
                <li>Voice Command: "Right" → Send Data: 'R'</li>
                <li>Voice Command: "Forward" → Send Data: 'F'</li>
                <li>Voice Command: "Back" → Send Data: 'B'</li>
            </ul>
            
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the Spidera robot.</li>
        <li>Open the Bluetooth Voice Control app on your mobile device and connect to the robot's HC-05 module.</li>
        <li>Speak the configured voice commands clearly into your phone's microphone.</li>
        <li>Observe the robot performing the corresponding actions (standing, sitting, walking sideways, walking forward/backward).</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>When the command <b>“Stand”</b> is issued, Spidera should stand up by adjusting its servo positions. </li>
        <li>Saying <b>“Sit”</b> should make Spidera sit down by retracting its legs. </li>
        <li>Voice commands like <b>“Left”</b> and <b>“Right”</b> should trigger the respective side-walking actions.</li>
        <li>Commands <b>“Forward”</b> and <b>“Back”</b> should initiate forward and backward walking gaits.</li>
        <li>The robot should respond accurately and promptly to each recognized voice command, demonstrating smooth and stable transitions between movements.</li>
        <li>The Bluetooth connection should remain stable, and the app should indicate a “Connected” status throughout the session.</li>
    </ul>
        </>
      ),
    },
      "Button Control Through Mobile App": {
      type: "experiment",
      content: (
        <>
    <h3>Objective</h3>
    <p>The objective of this experiment is to control Spidera's basic movements, such as standing up, sitting down, forward, backward, and side walking, using a button-based interface on the Bluedino mobile app. This experiment enables a simple, user-friendly interaction method for controlling the robot through on-screen buttons.</p>

    <h3>Hardware Setup</h3>
    <p>Before starting, verify the assembly of Spidera (referencing Section 2.1) and its connection to the Arduino IDE (or compatible environment, referencing Section 2.3).</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Spidera Robot:</b> A 4-legged robot equipped with 12 servo motors (3 per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller (e.g., Teensy 4.0) capable of controlling 12 servos.</li>
        <li><b>HC-05 Bluetooth Module:</b> For wireless communication.</li>
        <li><b>Power Supply:</b> Sufficient power for the microcontroller and all 12 servo motors.</li>
        <li><b>Mobile Device:</b> Android smartphone.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections, using an external power supply for the servos if needed.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Ensure the microcontroller is loaded with the code required to respond to the specific button commands (<code>X</code>, <code>x</code>, <code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>).</li>
    </ul>

    <h3>Software Setup (Bluedino App)</h3>
    <ol>
        <li>Download and install the <b>Bluedino</b> app from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
        <li>Configure the Bluedino app:
            <ul>
                <li>Open the app and connect to the paired HC-05 module.</li>
                <li>Navigate to the button configuration settings (e.g., Command Button Configuration).</li>
                <li>Map specific buttons to send the following command characters:
                    <ul>
                        <li>Button 1 → Send: <code>X</code> (for Stand Up)</li>
                        <li>Button 2 → Send: <code>x</code> (for Sit Down)</li>
                        <li>Button 3 → Send: <code>F</code> (for Forward Walk)</li>
                        <li>Button 4 → Send: <code>B</code> (for Backward Walk)</li>
                        <li>Button 5 → Send: <code>L</code> (for Left Side-Walk)</li>
                        <li>Button 6 → Send: <code>R</code> (for Right Side-Walk)</li>
                    </ul>
                     
                </li>
            </ul>
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the Spidera robot.</li>
        <li>Open the Bluedino app and connect to the robot's Bluetooth module.</li>
        <li>Navigate to the button control interface where you configured the movement commands.</li>
        <li>Press the button mapped to <code>X</code> to make the robot stand up.</li>
        <li>Press the button mapped to <code>x</code> to make the robot sit down.</li>
        <li>Press and hold the button for <code>F</code> to walk forward, release to stop.</li>
        <li>Press and hold the button for <code>B</code> to walk backward, release to stop.</li>
        <li>Press and hold the button for <code>L</code> to walk sideways left, release to stop.</li>
        <li>Press and hold the button for <code>R</code> to walk sideways right, release to stop.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>Pressing the button configured for <code>X</code> causes Spidera to transition smoothly into a standing position.</li>
        <li>Pressing the button for <code>x</code> causes Spidera to retract its legs into a sitting position.</li>
        <li>Using the <code>F</code> and <code>B</code> buttons initiates forward and backward walking gaits respectively.</li>
        <li>Using the <code>L</code> and <code>R</code> buttons initiates left and right side-walking gaits respectively.</li>
        <li>The robot responds promptly and accurately to each button press, demonstrating controlled movement.</li>
        <li>The Bluetooth connection remains stable, and the Bluedino app indicates a "Connected" status during operation.</li>
    </ul>

        </>
      ),
    },
      "Speed Control": {
      type: "experiment",
      content: (
        <>
    <h3>Objective</h3>
    <p>The objective of this experiment is to control the movement speed of Spidera using a mobile app. By adjusting speed settings, the user can vary the robot's walking pace and reaction time, allowing for testing at different speeds for forward, backward, and side movements.</p>

    <h3>Hardware Setup</h3>
    <p>Ensure Spidera is assembled as per Section 2.1 and connected to the Arduino IDE per Section 2.3 before running the experiment.</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Spidera Robot:</b> A 4-legged robot equipped with 12 servo motors (3 per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller (e.g., Teensy 4.0) capable of controlling 12 servos.</li>
        <li><b>HC-05 Bluetooth Module:</b> For wireless communication.</li>
        <li><b>Power Supply:</b> Sufficient power for the microcontroller and all 12 servo motors.</li>
        <li><b>Mobile Device:</b> Android smartphone.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections, using an external power supply for the servos if needed.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX (e.g., Teensy RX2)</li>
                <li>HC-05 RX to Microcontroller TX (e.g., Teensy TX2)</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Ensure the microcontroller is loaded with code that can interpret speed commands (e.g., <code>S1</code>, <code>S2</code>, <code>S3</code>) and adjust servo movement timing accordingly (e.g., by modifying delay values or step increments within the walking gaits).</li>
    </ul>

    <h3>Software Setup (Mobile App)</h3>
    <ol>
        <li>Download and install a Bluetooth control app that allows custom command configurations, such as <b>Bluedino</b> or <b>Arduino Bluetooth Controller</b>.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually <code>1234</code> or <code>0000</code>).</li>
        <li>Configure the app:
            <ul>
                <li>Open the app and connect to the paired HC-05 module.</li>
                <li>Navigate to the button configuration settings.</li>
                <li>Map specific buttons to send the following speed control command strings:
                    <ul>
                        <li>Button 1 → Send: <code>S1</code> (for Slow Speed)</li>
                        <li>Button 2 → Send: <code>S2</code> (for Medium Speed)</li>
                        <li>Button 3 → Send: <code>S3</code> (for High Speed)</li>
                    </ul>
                     
                </li>
            </ul>
        </li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the Spidera robot.</li>
        <li>Open the Bluetooth controller app and connect to the robot's Bluetooth module.</li>
        <li>Navigate to the button control interface.</li>
        <li>Press the button mapped to <code>S1</code> to set the robot to slow speed. Then, use the movement control buttons (e.g., Forward, Backward, Left Side-Walk, Right Side-Walk - configured separately) to observe slow movement.</li>
        <li>Press the button mapped to <code>S2</code> to set the robot to medium speed. Observe the change in pace when using movement controls.</li>
        <li>Press the button mapped to <code>S3</code> to set the robot to high speed. Observe the faster movement.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>The robot successfully connects to the mobile app via Bluetooth.</li>
        <li>Pressing the button configured for <code>S1</code> sets Spidera's subsequent movements to a slow, controlled pace.</li>
        <li>Pressing the button for <code>S2</code> sets the robot to move at a moderate speed.</li>
        <li>Pressing the button for <code>S3</code> commands Spidera to move at its fastest programmed pace.</li>
        <li>The robot should respond smoothly, exhibiting distinct differences in speed corresponding to each setting, while maintaining stability during movement.</li>
        <li>Bluetooth connectivity remains stable throughout the experiment.</li>
    </ul>
        </>
      ),
    },
      "Obstacle Detection Using Ultrasonic Sensor": {
      type: "experiment",
      content: (
        <>
    <h3>Objective</h3>
    <p>The objective of this experiment is to enable the Spidera robot to detect obstacles in its path using an ultrasonic sensor and to adjust its movement accordingly. This experiment will test Spidera’s ability to avoid collisions by stopping or changing direction when obstacles are detected within a certain range.</p>

    <h3>Hardware Setup</h3>
    <p>Assemble Spidera per Section 2.1 and connect it to the Arduino IDE (or compatible environment) as shown in Section 2.3, before initiating the experiment.</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Spidera Robot:</b> A 4-legged robot equipped with 12 servo motors (3 per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller (e.g., Teensy 4.0).</li>
        <li><b>HC-05 Bluetooth Module:</b> For optional remote control alongside obstacle detection.</li>
        <li><b>Ultrasonic Sensor:</b> HC-SR04 or similar model.</li>
        <li><b>Power Supply:</b> Sufficient for the microcontroller, servos, and sensor.</li>
        <li><b>Mobile Device:</b> Android smartphone (optional, for teleoperation commands).</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections.</li>
        <li>Connect the Ultrasonic Sensor (e.g., HC-SR04) to the microcontroller:
            <ul>
                <li>Sensor VCC to 5V</li>
                <li>Sensor GND to GND</li>
                <li>Sensor Trigger Pin (Trig) to a digital output pin on the microcontroller.</li>
                <li>Sensor Echo Pin to a digital input pin on the microcontroller.</li>
            </ul>
             
        </li>
        <li>Connect the HC-05 Bluetooth module (optional, if combining with teleoperation):
            <ul>
                <li>HC-05 TX to Microcontroller RX</li>
                <li>HC-05 RX to Microcontroller TX</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Power up the robot and load the microcontroller with code designed to:
            <ul>
                <li>Continuously read distance data from the ultrasonic sensor.</li>
                <li>Implement movement gaits (forward, backward, turn, etc.).</li>
                <li>Override or modify movement commands if an obstacle is detected within a predefined range (e.g., stop if distance {"<"} 20 cm).</li>
            </ul>
        </li>
    </ul>

    <h3>Software Setup</h3>
    <h4>Microcontroller Programming:</h4>
    <ol>
        <li>Program the microcontroller (using Arduino IDE or similar) to handle servo control for walking gaits.</li>
        <li>Integrate code to read the ultrasonic sensor, calculating the distance to objects in front of the robot.</li>
        <li>Implement logic within the main loop or movement functions:
            <ul>
                <li>Before executing a forward movement step, check the distance reading.</li>
                <li>If distance (e.g., 20 cm), execute an alternative action:
                    <ul>
                        <li><b>Option 1: Stop</b> - Halt all servo movement.</li>
                        <li><b>Option 2: Turn</b> - Initiate a turning gait (e.g., turn left or right) for a short duration.</li>
                        <li><b>Option 3: Reverse</b> - Initiate a backward walking gait for a short duration.</li>
                    </ul>
                </li>
                <li>If the distance is safe, proceed with the intended forward movement.</li>
            </ul>
        </li>
    </ol>

    <h4>Mobile App Setup (Optional - Bluedino):</h4>
    <ol>
        <li>Download and install the <b>Bluedino</b> app from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone.</li>
        <li>Configure the app with buttons for standard movements (Forward <code>F</code>, Backward <code>B</code>, Left Side-Walk <code>L</code>, Right Side-Walk <code>R</code>). The obstacle avoidance logic runs on the robot itself, overriding these commands when needed.</li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Power on the Spidera robot.</li>
        <li>(Optional) Open the Bluedino app and connect to the robot's Bluetooth module.</li>
        <li>Command the robot to move forward using the app button (or have it programmed to move forward autonomously).</li>
        <li>Place an obstacle (like a book or box) in the robot's path.</li>
        <li>Observe the robot's behavior as it approaches the obstacle.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>When Spidera moves forward and approaches an obstacle within the specified detection range (e.g., 20 cm), its forward motion should automatically stop. </li>
        <li>Depending on the programmed logic, the robot might then execute an alternative maneuver like turning or backing up before potentially resuming forward movement (if the path is now clear or it has turned).</li>
        <li>The robot should reliably detect obstacles using the ultrasonic sensor and react consistently to avoid collisions.</li>
        <li>If using Bluetooth, the connection should remain stable, but the robot's onboard obstacle avoidance logic should take precedence over forward movement commands when an obstacle is detected.</li>
    </ul>
        </>
      ),
    },
      "Walking to Predefined Points": {
      type: "experiment",
      content: (
        <>
    <h2>Spidera Robot: Autonomous Navigation by Time</h2>
     
    <h3>Objective</h3>
    <p>The objective of this experiment is to program Spidera to autonomously walk to predefined points based on a set of walking times. Specifically, the robot will walk straight for 5 seconds, stop, turn right for a set duration, stop, and potentially continue to other points. This will test Spidera’s ability to navigate a specified path and stop accurately at target locations using timed movements.</p>

    <h3>Hardware Setup</h3>
    <p>Ensure Spidera is assembled per Section 2.1 and connected to the Arduino IDE (or compatible environment) per Section 2.3 before beginning.</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Spidera Robot:</b> A 4-legged robot equipped with 12 servo motors (3 per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller (e.g., Teensy 4.0).</li>
        <li><b>HC-05 Bluetooth Module:</b> (Optional) For initiating the sequence or manual override.</li>
        <li><b>Ultrasonic or IR Sensors:</b> (Optional) For position calibration or boundary detection.</li>
        <li><b>Power Supply:</b> Sufficient for the microcontroller and all 12 servo motors.</li>
        <li><b>Mobile Device:</b> Android smartphone (Optional, if using Bluetooth control).</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections.</li>
        <li>(Optional) Connect any calibration sensors (Ultrasonic/IR) to appropriate analog or digital pins on the microcontroller. Position them strategically (e.g., facing down or sideways) if used for detecting target markers or boundaries.</li>
        <li>(Optional) Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX</li>
                <li>HC-05 RX to Microcontroller TX</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Power up Spidera and upload the code designed to execute the timed movement sequence.</li>
    </ul>

    <h3>Software Setup</h3>
    <h4>Microcontroller Programming:</h4>
    <ol>
        <li>Program the microcontroller (using Arduino IDE or similar) with functions for basic walking gaits: <code>walkForward()</code>, <code>turnRight()</code>, <code>stopMovement()</code>.</li>
        <li>Implement a sequence in the main loop or a dedicated function that uses timing (like <code>millis()</code> or <code>delay()</code>) to control the duration of each movement:

        </li>
        <li>(Optional) Integrate sensor readings. If using sensors to detect target points (e.g., a line on the floor), modify the code to stop or transition movements based on sensor triggers instead of, or in addition to, timed delays.</li>
        <li>(Optional) Add Bluetooth command handling. If using a mobile app, program the microcontroller to start the <code>autonomousSequence()</code> upon receiving a specific command (e.g., 'G' for Go).</li>
    </ol>

    <h4>Mobile App Setup (Optional - Bluedino):</h4>
    <ol>
        <li>Download and install the <b>Bluedino</b> app (or similar) from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone.</li>
        <li>Configure the app with a button (e.g., Button 'G') to send a command that triggers the autonomous sequence on the robot. You might also configure buttons for manual override (Stop 'S').</li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Place the Spidera robot at the starting position in a clear area.</li>
        <li>Power on the robot.</li>
        <li>If using Bluetooth control, open the app, connect to the robot, and send the command to start the autonomous sequence (e.g., press 'G'). If not using Bluetooth, the sequence might start automatically upon power-on or via a physical switch.</li>
        <li>Observe Spidera as it performs the programmed sequence:
            <ul>
                <li>Walks forward for approximately 5 seconds.</li>
                <li>Stops briefly.</li>
                <li>Turns right for the programmed duration.</li>
                <li>Stops again.</li>
                <li>Continues with any further programmed timed movements.</li>
            </ul>
        </li>
        <li>(Optional) Use manual controls via the app to stop or adjust if needed.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>Spidera executes the sequence of timed movements: walking straight for about 5 seconds, stopping, turning right for the set duration, and stopping again.</li>
        <li>The robot reaches the approximate target locations based purely on the timed execution of its gaits. Accuracy will depend on the consistency of the walking speed and turning rate.</li>
        <li>(If using sensors) The robot may show improved accuracy by stopping or adjusting based on sensor feedback near target points or boundaries.</li>
        <li>(If using Bluetooth) The connection remains stable, allowing initiation of the sequence and potential manual intervention.</li>
    </ul>
        </>
      ),
    },
      "Body Shake": {
      type: "experiment",
      content: (
        <>
    <h3>Objective</h3>
    <p>The objective of this experiment is to control Spidera to perform a body shake movement, which involves quickly tilting its body side-to-side or front-to-back. This action can be used for demonstrations, stability tests, or to simulate a reaction to external stimuli.</p>

    <h3>Hardware Setup</h3>
    <p>Ensure Spidera is assembled as per Section 2.1 and connected to the Arduino IDE (or compatible environment) according to Section 2.3 before beginning.</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Spidera Robot:</b> A 4-legged robot equipped with 12 servo motors (3 per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller (e.g., Teensy 4.0).</li>
        <li><b>HC-05 Bluetooth Module:</b> For wireless communication.</li>
        <li><b>Power Supply:</b> Sufficient for the microcontroller and all 12 servo motors.</li>
        <li><b>Mobile Device:</b> Android smartphone for running the control app.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to their designated signal pins on the microcontroller. Ensure proper VCC and GND connections.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX</li>
                <li>HC-05 RX to Microcontroller TX</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Power up Spidera and load the microcontroller with code designed to perform the shake movement sequence upon receiving the command.</li>
    </ul>

    <h3>Software Setup</h3>
    <h4>Microcontroller Programming:</h4>
    <ol>
        <li>Program the microcontroller (using Arduino IDE or similar) to handle servo control.</li>
        <li>Implement a specific function (e.g., <code>bodyShake()</code>) that rapidly adjusts the leg servo positions to create a tilting or shaking motion. This typically involves:
            <ul>
                <li>Slightly lowering the legs on one side (e.g., left) while slightly raising the legs on the other side (e.g., right).</li>
                <li>Quickly reversing this action.</li>
                <li>Repeating this sequence several times for a shaking effect.</li>
                <li>Alternatively, perform a similar sequence for front-to-back tilting.</li>
            </ul>
        </li>
        <li>Integrate Bluetooth command handling. In the main loop, check for incoming serial data. If the command <code>'t'</code> is received, call the <code>bodyShake()</code> function.</li>
    </ol>

    <h4>Mobile App Setup (Bluedino or similar):</h4>
    <ol>
        <li>Download and install the <b>Bluedino</b> app (or a similar Bluetooth terminal/controller app) from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually '1234' or '0000').</li>
        <li>Configure a button or command input in the app to send the character <code>'t'</code> when pressed.</li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Place the Spidera robot on a stable surface.</li>
        <li>Power on the robot.</li>
        <li>Open the Bluedino app on your mobile device and connect to the robot's Bluetooth module.</li>
        <li>Press the configured button (or send the command <code>'t'</code> via the terminal interface).</li>
        <li>Observe Spidera performing the body shake movement.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>Upon receiving the <code>'t'</code> command via Bluetooth, Spidera will perform the programmed shake motion, tilting its body rapidly side-to-side or front-to-back.</li>
        <li>The movement should be quick but controlled, ensuring the robot maintains balance and does not tip over.</li>
        <li>The Bluetooth connection should remain stable, allowing the command to be received reliably.</li>
        <li>After the shake sequence is complete, Spidera should return to its default standing or sitting posture.</li>
    </ul>
        </>
      ),
    },
      "Performing Predefined Actions": {
      type: "experiment",
      content: (
        <>
    <h3>Objective</h3>
    <p>The objective of this experiment is to program Spidera to perform a series of predefined actions in sequence, such as standing up, sitting down, waving, or walking a few steps. This experiment aims to demonstrate Spidera’s ability to execute a set of movements autonomously when prompted.</p>

    <h3>Hardware Setup</h3>
    <h4>Robot Components:</h4>
    <ul>
        <li>Spidera 4-legged robot</li>
        <li>12 servo motors (3 for each leg)</li>
        <li>HC-05 Bluetooth module</li>
        <li>Power supply for servos and control system</li>
        <li>Arduino or compatible microcontroller for servo and movement control</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each servo motor to the designated pins on the microcontroller.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller, ensuring TX and RX pins are configured correctly.</li>
        <li>Power up Spidera and upload the predefined sequence code to the microcontroller.</li>
    </ul>

    <h3>Software Setup</h3>
    <ul>
        <li>Download and install the Bluedino app or a similar Bluetooth control app.</li>
        <li>Pair the HC-05 Bluetooth module with the mobile phone.</li>
        <li>Configure the app to have a command (e.g., "Action Sequence") that will trigger Spidera to execute the series of predefined actions.</li>
        <li>Program the microcontroller with a sequence of movements, including actions like:
            <ul>
                <li>Home position</li>
                <li>Running etc.</li>
            </ul>
        </li>
    </ul>
    <p>Before starting, ensure Spidera is assembled per Section 2.1 and connected to the Arduino IDE per Section 2.3.</p>
    <p>Create a code sequence that allows Spidera to execute each action in a particular order with short pauses in between. Include any necessary adjustments for stability after each movement.</p>

    <h3>Expected Results</h3>
    <ul>
        <li>Upon receiving the "Action Sequence" command, Spidera will perform the predefined series of actions smoothly, moving from one to the next without interruptions.</li>
        <li>The sequence should demonstrate various movements while maintaining balance and stability.</li>
        <li>The Bluetooth connection should remain stable, allowing Spidera to continue the sequence until completion.</li>
    </ul>
        </>
      ),
    },
      "Balancing on Three Legs": {
      type: "experiment",
      content: (
        <>
    <h3>Objective</h3>
    <p>The objective of this experiment is to control Spidera to balance on three legs while lifting one leg off the ground. This test aims to demonstrate Spidera’s stability and control, as it adjusts its center of gravity to maintain balance on three legs.</p>

    <h3>Hardware Setup</h3>
    <p>Ensure Spidera is assembled per Section 2.1 and connected to the Arduino IDE (or compatible environment) per Section 2.3 before starting.</p>

    <h4>Required Components:</h4>
    <ul>
        <li><b>Spidera Robot:</b> A 4-legged robot equipped with 12 servo motors (3 per leg).</li>
        <li><b>Microcontroller:</b> Arduino or compatible microcontroller (e.g., Teensy 4.0).</li>
        <li><b>HC-05 Bluetooth Module:</b> For wireless communication.</li>
        <li><b>Power Supply:</b> Sufficient for the microcontroller and all 12 servo motors.</li>
        <li><b>Mobile Device:</b> Android smartphone for running the control app.</li>
    </ul>

    <h4>Connections:</h4>
    <ul>
        <li>Connect each of the 12 servo motors to its designated signal pins on the microcontroller. Ensure proper VCC and GND connections.</li>
        <li>Connect the HC-05 Bluetooth module to the microcontroller:
            <ul>
                <li>HC-05 TX to Microcontroller RX</li>
                <li>HC-05 RX to Microcontroller TX</li>
                <li>HC-05 VCC to 5V</li>
                <li>HC-05 GND to GND</li>
            </ul>
        </li>
        <li>Power up Spidera and upload the code designed to control the servo motors for balance adjustments.</li>
    </ul>

    <h3>Software Setup</h3>
    <h4>Microcontroller Programming:</h4>
    <ol>
        <li>Program the microcontroller (using Arduino IDE or similar) with servo control libraries.</li>
        <li>Develop a sequence function (e.g., <code>balanceOnThreeLegs(legToLift)</code>) that performs the following:
            <ul>
                <li>Calculate the necessary adjustments to the positions of the three supporting legs to shift the robot's center of gravity. This often involves inverse kinematics calculations.</li>
                <li>Smoothly move the three supporting legs to the calculated positions.</li>
                <li>Gently lift the designated leg (<code>legToLift</code>) off the ground.</li>
                <li>Hold the position for a brief period.</li>
                <li>Lower the lifted leg back to the ground.</li>
                <li>Return all legs to a stable, neutral stance.</li>
            </ul>
        </li>
        <li>Integrate Bluetooth command handling. Check for incoming serial data. If a specific command (e.g., 'Z' for Balance) is received, call the balancing sequence function, potentially cycling through lifting each leg or lifting a specific leg based on the command.</li>
    </ol>
     <div class="note">
        <p><b>Note on Programming:</b> Implementing stable balancing on three legs requires careful calculation of servo angles to shift the center of mass over the support triangle formed by the three remaining legs. This can be complex and may require understanding of inverse kinematics and stability principles.</p>
    </div>

    <h4>Mobile App Setup (Bluedino or similar):</h4>
    <ol>
        <li>Download and install the <b>Bluedino</b> app (or a similar Bluetooth controller app) from the Play Store.</li>
        <li>Pair the HC-05 Bluetooth module with your mobile phone (default password usually '1234' or '0000').</li>
        <li>Configure a button or command input in the app labeled "Balance" (or similar) to send the designated trigger command (e.g., 'Z') when pressed.</li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Place the Spidera robot on a flat, stable surface.</li>
        <li>Power on the robot.</li>
        <li>Open the Bluedino app on your mobile device and connect to the robot's Bluetooth module.</li>
        <li>Press the "Balance" button you configured in the app.</li>
        <li>Observe Spidera as it attempts to lift one leg and maintain balance on the remaining three.</li>
    </ol>

    <h3>Expected Results</h3>
    <ul>
        <li>Upon receiving the "Balance" command via Bluetooth, Spidera will execute the programmed sequence to lift one leg while adjusting the positions of the other three legs to maintain stability.</li>
        <li>Ideally, Spidera should be able to hold the three-legged stance steadily for a short period without tipping over.</li>
        <li>The Bluetooth connection should remain stable throughout the process.</li>
        <li>After the sequence, Spidera should smoothly return the lifted leg to the ground and resume a stable four-legged stance.</li>
    </ul>
        </>
      ),
    },



  };


    const sampleCodeLinks = {

  "Spidra Standing up & Sitting Down":"https://github.com/Megararobotics/Spidera/blob/main/Exp1.ino",
  "Spidra walking gait movements":"https://github.com/Megararobotics/Cancero/blob/main/Exp2.ino",
  "Spidra Hand Waving":"https://github.com/Megararobotics/Cancero/blob/main/Exp3.ino",
  "Spidra Handshake":"https://github.com/Megararobotics/Spidera/blob/main/Exp4.ino",
  "Dancing Robot":"https://github.com/Megararobotics/Spidera/blob/main/Exp5.ino",
  "Spidera Side Walk":"https://github.com/Megararobotics/Spidera/blob/main/Exp6.ino",
  "Voice Control Through Mobile App":"https://github.com/Megararobotics/Spidera/blob/main/Exp7.ino",
  "Button Control Through Mobile App":"https://github.com/Megararobotics/Spidera/blob/main/Exp8.ino",
  "Speed Control":"https://github.com/Megararobotics/Spidera/blob/main/Exp9.ino",
  "Obstacle Detection Using Ultrasonic Sensor":"https://github.com/Megararobotics/Spidera/blob/main/Exp10.ino",
  "Walking to Predefined Points":"https://github.com/Megararobotics/Spidera/blob/main/Exp11.ino",
  "Body Shake":"https://github.com/Megararobotics/Spidera/blob/main/Exp12.ino",
  "Performing Predefined Actions":"https://github.com/Megararobotics/Spidera/blob/main/Exp13.ino",
  "Balancing on Three Legs":"https://github.com/Megararobotics/Spidera/blob/main/Exp14.ino",

  };
    // Dynamically create refs for all items
    const itemRefs = useRef(
      Object.keys(contentMap).reduce((acc, key) => {
        acc[key] = React.createRef();
        return acc;
      }, {})
    );
  
    // Scroll function
    const scrollTo = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

  // Navigation lists
const beginnerItems = [
    "Spidra Standing up & Sitting Down",
    "Spidra walking gait movements",
    "Spidra Hand Waving",
    "Spidra Handshake",
    "Dancing Robot"
  
];

const intermediateItems = [
    "Spidera Side Walk",
    "Voice Control Through Mobile App",
    "Button Control Through Mobile App",
    "Mobile IMU-Based Control Through Mobile App",
    "Speed Control"
];

const advancedItems = [
    "Obstacle Detection Using Ultrasonic Sensor",
    "Walking to Predefined Points",
    "Body Shake",
    "Performing Predefined Actions",
    "Balancing on Three Legs"
];

const renderList = (items, hasLinksCount = 0) => (
  <div className="cm-list-grid">
    <div className="cm-list-left">
      {items.map((it, i) => (
        <a
          key={i}
          className="cm-item-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(itemRefs.current[it]);
          }}
        >
          {it}
        </a>
      ))}
    </div>
    <div className="cm-list-right">
      {items.map((it, i) => (
        <a
          key={i}
          className="cm-sample-link"
          href={i < hasLinksCount || hasLinksCount === -1 ? sampleCodeLinks[it] || "#" : "#"}
          target={i < hasLinksCount || hasLinksCount === -1 ? "_blank" : undefined}
          rel={i < hasLinksCount || hasLinksCount === -1 ? "noopener noreferrer" : undefined}
        >
          {i < hasLinksCount || hasLinksCount === -1 ? "Sample Code" : ""}
        </a>
      ))}
    </div>
  </div>
);



  return (
    <div>
        <Navbar/>
    <div className="cm-page">
      <div ref={topRef} />
      <div className="cm-wrapper">
        {/* Top navigation */}
        <div className="cm-bar cm-bar-setup">Setup</div>
        <div className="cm-setup-links">
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Features"])}>
            Features
          </button>
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Getting Started"])}>
            Getting Started
          </button>

        </div>

        {/* Lists */}
<div className="cm-bar cm-bar-beginner">Beginner</div>
{renderList(beginnerItems, -1)} {/* -1 means all items have sample code */}

<div className="cm-bar cm-bar-intermediate">Intermediate</div>
{renderList(intermediateItems, 3)} {/* Only first 3 items have sample code */}

<div className="cm-bar cm-bar-advanced">Advanced</div>
{renderList(advancedItems, -1)} {/* No sample code for advanced items */}

        {/* Content Sections */}
        <div className="cm-content-area">
          {Object.keys(contentMap).map((key, idx) => (
            <div className="cm-content-section" key={idx} ref={itemRefs.current[key]}>
              <h2 className="cm-content-title">{key}</h2>
              {contentMap[key].content}
<div className="top-separator">
  <img
    src={topArrow}
    alt="Back to Top"
    onClick={() => scrollTo(topRef)}
    className="top-arrow"
  />
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
<Footer/>

    </div>
  );
}



