import React, { useRef } from "react";
import "./B1Experiment.css";
import topArrow from "../assets/uparrow.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CheloniaManualb2() {
  const topRef = useRef(null); // Top reference for scroll-to-top

  // Centralized content map
  const contentMap = {
    Overview: {
      type: "section",
      content: (
        <>
   <h2>Chelonia B2 Features</h2>

    <h3>1. Budget-friendly</h3>
    <p>Chelonia B2, the budget-friendly robot, was created to suit the needs of schools, labs, and businesses on a tight budget. Chelonia is the most affordable robot in its class, It's small! It's small too! Chelonia measures just 138mm x 178mm x 192mm (L x W x H), making it about a quarter of the size of its predecessor. Imagine carrying Chelonia in your backpack, developing and testing your programs wherever you go.</p>

    <h3>2. Diverse Sensor Integration:</h3>
    <p>The Chelonia B2 Version includes a comprehensive set of sensors, such as infrared (IR) sensors for proximity detection, ultrasonic sensors for accurate distance measurement, gas sensors for environmental monitoring, inertial measurement units (IMUs) for orientation tracking, RFID (Radio Frequency Identification) tags for identification, and sound sensors for audio interaction.</p>

    <h3>3. Versatile Motor Control:</h3>
    <p>The robot is equipped with a robust motor control system, allowing users to program precise movements. Motor pins are clearly defined, making it easy to understand and experiment with forward, backward, left, and right movements.</p>

    <h3>4. Bluetooth Connectivity:</h3>
    <p>Utilize Bluetooth communication to control the Chelonia Robot remotely. Commands can be sent through a Bluetooth module, providing wireless flexibility and enabling users to experiment with different control mechanisms.</p>

    <h3>5. Educational Platform:</h3>
    <p>Tailored for educational purposes, the Chelonia B2 Version is an ideal tool for students and enthusiasts to delve into the world of robotics. The robot facilitates hands-on learning, fostering a deeper understanding of robotic systems and programming.</p>

    <h2>Sensors</h2>

    <h3>1. MPU 6050</h3>
    <p>The MPU 6050 is a versatile motion tracking device that combines a gyroscope and accelerometer in a single integrated circuit. With its compact size and low power consumption, the MPU 6050 is an ideal choice for a wide range of applications, from wearable devices to motion-controlled gaming controllers. Its advanced motion sensing capabilities allow for precise measurement of acceleration and angular velocity in three dimensions, enabling accurate motion tracking and gesture recognition. Additionally, the MPU 6050 features onboard digital motion processing, reducing the workload on the host microcontroller and simplifying integration into existing systems. Whether you're designing a fitness tracker, stabilizing a camera, or developing a virtual reality headset, the MPU 6050 provides the performance and flexibility you need to bring your project to life. Trust in the reliability and versatility of the MPU 6050 to meet your motion sensing needs with ease and efficiency.</p>

    <h3>2. Hc-SR04 Ultrasonic Sensor</h3>
    <p>The HC-SR04 Ultrasonic Sensor is a widely used distance-measuring device that utilizes ultrasonic waves to determine the distance between the sensor and an object. This compact and affordable sensor consists of a transmitter and receiver pair, which work together to emit ultrasonic pulses and detect their reflections. By measuring the time, it takes for the ultrasonic waves to travel to the object and back, the HC-SR04 can accurately calculate the distance with high precision.</p>

    <h3>3. DHT11 - Temperature & Humidity Sensor</h3>
    <p>The DHT11 is a popular digital sensor used for measuring temperature and humidity. It features a capacitive humidity sensor and a thermistor to measure the surrounding air, providing accurate and reliable data. The DHT11 sensor operates within a temperature range of 0-50°C and a humidity range of 20-90% RH. It is widely used in environmental monitoring and control applications due to its simplicity, low cost, and ease of integration with microcontrollers like Arduino and Raspberry Pi. The sensor communicates using a single-wire protocol, making it straightforward to connect and program in various DIY projects and educational platforms.</p>

    <h3>4. IR Sensor</h3>
    <p>An Infrared (IR) sensor is an electronic device that detects and measures infrared radiation in its environment. IR sensors are commonly used for proximity detection, object detection, and distance measurement. They operate by emitting an infrared light and detecting the reflection from nearby objects. This technology is widely employed in applications such as obstacle avoidance in robotics, motion detectors in security systems, and remote-control systems. IR sensors are valued for their simplicity, low power consumption, and ability to function effectively in various lighting conditions, making them a versatile component in many electronic projects.</p>

    <h3>5. Gas Sensor</h3>
    <p>The MQ135 gas sensor is a versatile device used to detect a variety of harmful gases in the environment, including ammonia, nitrogen oxide, alcohol, benzene, smoke, and carbon dioxide. It operates by sensing changes in the conductivity of the material inside the sensor when exposed to different gas concentrations. The MQ135 is widely used in air quality monitoring systems due to its sensitivity and reliability. It provides analog output signals that can be easily read by microcontrollers like Arduino for real-time air quality assessment. This sensor is favoured for its affordability, ease of use, and effectiveness in detecting multiple gases, making it suitable for both industrial and domestic applications.</p>

    <h3>6. HC-05 Bluetooth Module</h3>
    <p>The HC-05 Bluetooth module is a widely used wireless communication device that enables seamless serial communication between electronic devices over short distances. Operating on the Bluetooth 2.0 standard, the HC-05 module facilitates reliable and low-power data transmission between devices such as microcontrollers, smartphones, and computers. It features a simple UART interface, allowing easy integration into various projects, including robotics, home automation, and IoT (Internet of Things) applications. The HC-05 module supports both master and slave modes, making it versatile for different communication setups. With its compact size, low cost, and robust performance, the HC-05 Bluetooth module is a popular choice for adding wireless connectivity to electronic projects.</p>

    <h3>7. RC522 RFID Tag</h3>
    <p>The RFID (Radio-Frequency Identification) module is a technology that allows for the wireless transmission of data between a reader and an RFID tag. RFID systems consist of three main components: the RFID reader, the RFID tag, and the antenna. The reader emits radio waves that activate the RFID tag, which then transmits its unique identification code back to the reader. RFID modules are commonly used for tracking and identification purposes in various industries, including access control, inventory management, and asset tracking. They offer advantages such as fast and contactless data transmission, high durability, and the ability to read multiple tags simultaneously. With their versatility and reliability, RFID modules play a crucial role in automating processes and improving efficiency in numerous applications.</p>
        </>
      ),
    },
    "Getting Started": {
      type: "section",
      content: (
        <>
    <h3>Assembly Steps</h3>
    <ul>
        <li><b>DC Motor and Wheel Connection:</b>
            <ul>
                <li>Connect each DC motor to the corresponding output terminals of the L298N Motor Driver.</li>
                <li>Attach the wheels securely to the motor shafts.</li>
            </ul>
        </li>
        <li><b>Battery Connection:</b>
            <ul>
                <li>Connect the battery to the power input terminals of the L298N Motor Driver.</li>
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
                <li>Power up the Chelonia by turning on the battery.</li>
                <li>Ensure the Arduino MEGA and L298N Motor Driver receive power.</li>
                <li>To test the hardware assembly, execute the code for the desired experiment on the Arduino Mega.</li>
                <li>Observe the movement of the wheels and ensure they respond appropriately to the code instructions.</li>
            </ul>
        </li>
        <li><b>Programming Connection:</b>
            <ul>
                <li>During programming, disconnect the 5V line from the L298N Motor Driver to the Arduino Mega.</li>
                <li>Connect the necessary programming pins based on the experiment requirements.</li>
            </ul>
        </li>
        <li><b>Post-Programming Power-Up:</b>
            <ul>
                <li>After programming, reconnect the 5V line from the L298N Motor Driver to the Arduino Mega for normal operation.</li>
            </ul>
        </li>
    </ul>

    <h2>Software Installation</h2>
    <p>This section will help you to install the Arduino IDE software for programming.</p>
    <ul>
        <li><b>Step 1:</b> Go to the website <a href="http://www.arduino.cc" target="_blank">www.arduino.cc</a> to download the software.</li>
        <li><b>Step 2:</b> Click on the “windows installer” icon from the bottom of the site.</li>
        <li><b>Step 3:</b> Begin the download by click “just download” option.</li>
        <li><b>Step 4:</b> Extract the zip file and start the installation.</li>
        <li><b>Step 5:</b> Select the installation options.</li>
        <li><b>Step 6:</b> Choose the installation path.</li>
        <li><b>Step 7:</b> Finish the installation.</li>
        <li><b>Step 8:</b> Launch the Arduino IDE.</li>
    </ul>

    <h2>Connecting to Arduino IDE</h2>
    <ul>
        <li><b>Connect the Cable:</b>
            <ul>
                <li>Connect the USB cable from your computer to the Arduino Mega on your Chelonia.</li>
            </ul>
        </li>
        <li><b>Open Arduino IDE:</b>
            <ul>
                <li>Open the Arduino IDE software on your computer.</li>
            </ul>
        </li>
        <li><b>Open New Sketch:</b>
            <ul>
                <li>In the Arduino IDE, open a new sketch.</li>
            </ul>
        </li>
        <li><b>Board Selection:</b>
            <ul>
                <li>Select the Arduino Mega board from the Arduino IDE software.</li>
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
                <li>Once the code verification is successful, click on the "Upload" button (right arrow icon) to upload the code to the Arduino board.</li>
            </ul>
        </li>
        <li><b>Observe LED Blinking:</b>
            <ul>
                <li>During the uploading process, observe the LED on the Arduino Mega. It should blink, indicating the data transfer.</li>
            </ul>
        </li>
        <li><b>Remove the Connector:</b>
            <ul>
                <li>After successful uploading, safely disconnect the USB cable from the Arduino Mega.</li>
            </ul>
        </li>
        <li><b>Connect 5V from Driver to Arduino:</b>
            <ul>
                <li>Prior to powering up the Chelonia, reconnect the 5V line from the L298N Motor Driver to the Arduino Mega.</li>
            </ul>
        </li>
    </ul>
       <p><b>Important Note:</b> Before proceeding with any power-up activities, it is crucial to ensure the reliability of your Chelonia's wiring. Perform the following essential steps:</p>
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
        <p>These precautionary measures ensure a robust and reliable hardware setup, minimizing the risk of electrical faults during the operation of your Chelonia Bot.</p>
        </>
      ),
    },
    "Directional Control of a Mechnum Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to introduce the basic movement capabilities of the Chelonia B2 Robot. By executing this code, you will make the robot move forward, stop, backward, stop, turn right, stop, turn left and stop again.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h2>Expected Results</h2>
    <ul>
        <li>The Chelonia B2 Robot will move forward for 1 second.</li>
        <li>The robot will stop for 1 second.</li>
        <li>The robot will move backward for 1 second.</li>
        <li>The robot will stop for 1 second.</li>
        <li>The robot will turn left for 1 second.</li>
        <li>The robot will stop for 1 second.</li>
        <li>The robot will turn right for 1 second.</li>
        <li>The robot will stop for 1 second.</li>
    </ul>
    <p>Users have the flexibility to customize the delay values in the provided code according to their specific requirements.</p>
        </>
      ),
    },
    "Chelonia B2 Control Using Mobile App": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to control the Chelonia B2 Robot using the "Arduino Bluetooth Control" mobile app. By executing this code and using the app, you can make the robot move forward, stop, backward, stop, turn right, stop, turn left and stop again.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Connect the Bluetooth module (HC-05):</h3>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino <b>after</b> uploading the code.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth module.</li>
        <li>Use the on-screen controls to send commands to the Chelonia B2 Robot:
            <ul>
                <li>G: Basic movement</li>
                <li>S: Stop</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <ul>
        <li>The Chelonia B2 Robot will move forward for 1 second.</li>
        <li>The robot will stop for 1 second.</li>
        <li>The robot will move backward for 1 second.</li>
        <li>The robot will stop for 1 second.</li>
        <li>The robot will turn left for 1 second.</li>
        <li>The robot will stop for 1 second.</li>
        <li>The robot will turn right for 1 second.</li>
        <li>The robot will stop for 1 second.</li>
    </ul>

    <h2>Common Issues</h2>
    <p><b>Bluetooth connection issues:</b> If your device is connected but not appearing in the mobile app, troubleshoot by checking the Bluetooth pairings and ensuring the HC-05 module is connected. If the issue persists, press the reset button on the HC-05, which often resolves connectivity problems.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <p><b>Q: Can I use a different Bluetooth app for control?</b><br/>
    A: Yes, if the app allows sending characters 'G' and 'S' over Bluetooth.</p>
    <p><b>Q: How can I modify the code for different motor speeds?</b><br/>
    A: Adjust the values passed to the analogWrite() functions in the code for different motor speeds.</p>
        </>
      ),
    },
    "Direction Control Chelonia B2 Robot": {
      type: "experiment",
      content: (
        <>
  <h2>Objective</h2>
    <p>The objective of this experiment is to wirelessly control the Chelonia B2 Robot using the "Arduino Bluetooth Control" mobile app. By executing this code and using the app, you can make the robot move forward, backward, turn left, turn right, forward right, forward left, backward right, backward left, super right, super left and stop.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Connect the Bluetooth module (HC-05):</h3>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino <b>after</b> uploading the code.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth.</li>
        <li>Use the on-screen controls to send commands to the Chelonia B2 Robot:
            <ul>
                <li>F: Forward</li>
                <li>B: Backward</li>
                <li>A: Super right</li>
                <li>W: Super left</li>
                <li>R: Right</li>
                <li>L: Left</li>
                <li>G: Forward left</li>
                <li>I: Forward right</li>
                <li>H: Back right</li>
                <li>J: Back left</li>
                <li>S: Stop</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Chelonia B2 Robot should respond to the commands sent from the "Arduino Bluetooth Control" app, resulting in various omnidirectional movements and rotations, as specified by the controls.</p>

    <h2>Common Issues</h2>
    <p><b>Bluetooth connection issues:</b> If your device is connected but not appearing in the mobile app, troubleshoot by checking the Bluetooth pairing settings and ensuring the HC-05 module is connected. If the issue persists, press the reset button on the HC-05, which often resolves connectivity problems.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <p><b>Q: What should I do if the app is unable to connect to the Arduino device?</b><br/>
    A: Ensure that Bluetooth is enabled on both your mobile device and the Arduino and restart the app for a fresh connection.</p>
    <p><b>Q: Can I modify the code for different motor speeds?</b><br/>
    A: Yes, you can adjust the PWM values in the code for different motor speeds and responsiveness.</p>
        </>
      ),
    },
    "Manual Speed Control": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to implement manual speed control for the Chelonia b2 Bot through mobile app. Users can input speed values directly through the mobile app to control the robot's speed. The robot will stop when a stop command is issued.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Connect the Bluetooth module (HC-05):</h3>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino <b>after</b> uploading the code.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth module.</li>
    </ol>
    
    <h2>Usage instructions</h2>
    <ol>
        <li>Enter a speed value between 0 and 255 and press "Send." The robot will move forward at the specified speed.</li>
        <li>Enter a speed value of 0 or any negative number to stop the robot.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Chelonia Bot should respond to the speed value entered via the mobile app, resulting in varied speeds of movement. The robot will stop when a stop command is issued.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <p><b>Q: Can I modify the code for different motor behaviours?</b><br/>
     A: Yes, you can customize the code to implement various motor behaviours by adjusting the logic in the moveForward and stopMotors functions.</p>
    <p><b>Q: How does the serial input affect the robot's speed?</b><br/>
     A: The speed value entered in the mobile app is directly mapped to PWM values, thereby controlling the speed of all motors.</p>
        </>
      ),
    },
       "Staircase Detection Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create a Staircase Detection Robot using the Chelonia Bot. The robot should autonomously navigate its environment and detect stairs or edges to avoid falling.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the three ultrasonic sensors to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Ultrasonic Sensor Connections:</h4>
    <ul>
        <li><b>Left sensor:</b>
            <ul>
                <li>Trigger pin: Connect to pin 14.</li>
                <li>Echo pin: Connect to pin 15.</li>
            </ul>
        </li>
        <li><b>Front sensor:</b>
            <ul>
                <li>Trigger pin: Connect to pin 16.</li>
                <li>Echo pin: Connect to pin 17.</li>
            </ul>
        </li>
        <li><b>Right sensor:</b>
            <ul>
                <li>Trigger pin: Connect to pin 18.</li>
                <li>Echo pin: Connect to pin 19.</li>
            </ul>
        </li>
    </ul>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Place the Staircase Detection Robot in an environment where it may encounter stairs or edges.</li>
        <li>The robot should stop automatically when it detects a sudden drop (like a staircase or edge).</li>
        <li>If needed, adjust the SAFE_DISTANCE to fine-tune the robot's sensitivity to drops.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Chelonia Bot should autonomously navigate and stop when it detects a drop greater than the specified safe distance, preventing it from falling downstairs.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <p><b>Q: How does the robot detect stairs?</b><br/>
     A: The downward-facing HC-SR04 ultrasonic sensors measure the distance to the ground. A sudden increase in distance (indicating a drop) triggers the robot to stop.</p>
    <p><b>Q: Can I adjust the sensitivity?</b><br/>
     A: Yes, you can adjust the SAFE_DISTANCE variable to change how close the robot can get to the edge before stopping.</p>
    <p>This experiment will help you implement and test a robot that can detect stairs or other drops, making it safer for autonomous navigation in environments with varying floor levels.</p>
        </>
      ),
    },
       "Tilt Tracking Using IMU": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create a robot that moves forward autonomously and is monitored for turning angles using an Inertial Measurement Unit (IMU). The IMU provides real-time angle data, and the robot continuously moves forward, with tilt data being transmitted to a Bluetooth device.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the IMU and Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>IMU (MPU6050 or similar):</h4>
    <ul>
        <li>VCC: Connect to 5V on Arduino.</li>
        <li>GND: Connect to GND on Arduino.</li>
        <li>SDA (Serial Data): Connect to SDA on Arduino.</li>
        <li>SCL (Serial Clock): Connect to SCL on Arduino.</li>
    </ul>

    <h4>Bluetooth Module HC-05:</h4>
    <ul>
        <li>TX: Connect to pin 1 on Arduino.</li>
        <li>RX: Connect to pin 0 on Arduino.</li>
    </ul>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 <b>after</b> uploading the code.</p>
    </div>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Download the "Bluetooth Serial Monitor" app from the Play Store.</li>
        <li>Open the Arduino IDE, load the provided code, and upload it to the Arduino Mega board.</li>
        <li>Turn on the Chelonia B2 Bot and connect to the Bluetooth module via the app.</li>
        <li>The robot will start moving forward automatically, and the turning angles will be displayed on the Bluetooth Serial Monitor app.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Chelonia Bot should move forward continuously, and the IMU will monitor and report the tilt angles. These angles will be transmitted and displayed on the Bluetooth Serial Monitor app in real-time.</p>
        </>
      ),
    },
       "Voice Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create a voice-controlled robot using a Bluetooth module and the "Arduino Bluetooth Control" mobile application. The robot should respond to specific voice commands to move forward, backward, left, right, or stop.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Connect the Bluetooth module (HC-05):</h4>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino <b>after</b> uploading the code.</p>
    </div>

    <h3>Mobile Application:</h3>
    <p>To download the required mobile application, "Arduino Bluetooth Control," simply visit the Play Store on your Android device and search for the app, or conveniently click on the provided link for quick access. This app is essential for establishing a connection between your mobile device and the Chelonia Bot's Bluetooth module, enabling seamless voice control.</p>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power up the Chelonia Bot and ensure the Bluetooth module is paired with the mobile device.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Establish a connection between the app and the Bluetooth module.</li>
        <li>Send voice commands ('F' for forward, 'B' for backward, 'L' for left, 'R' for right, 'S' for stop) through the app.</li>
    </ol>

    <h2>Expected Results:</h2>
    <p>The Chelonia Bot should respond to voice commands and move accordingly.</p>

    <h2>Frequently Asked Questions (FAQs):</h2> 
    <p><b>Q: What should I do if the robot does not respond to voice commands?</b><br/>
    A: Ensure that the Bluetooth module is properly connected, the app is paired, and the commands are sent correctly.</p>
    <p><b>Q: Can I customize the voice commands?</b><br/>
    A: Yes, you can modify the execute Command () function in the code to change the corresponding actions for different voice commands.</p>
    <p><b>Q: How do I stop the robot?</b><br/>
    A: Send the 'S' command through the app to stop the robot.</p>

    <h3>Additional Notes:</h3>
    <p>Make sure your mobile device's Bluetooth is enabled and connected to the module before sending commands.</p>
        </>
      ),
    },
       "Shape Forming Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>This innovative robot is designed to create specific shapes, introducing you to the fascinating world of robotic movements. This user manual will guide you through the setup and operation of your Shape Forming Robot.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Connect the Bluetooth module (HC-05):</h4>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino <b>after</b> uploading the code.</p>
    </div>

    <h3>Mobile App Setup</h3>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth.</li>
        <li>Use the on-screen controls to send commands to the Chelonia B2 Robot:
            <ul>
                <li>'l' - L-shape movement.</li>
                <li>'c' - circular motion.</li>
            </ul>
        </li>
    </ol>
    <p>The robot will stop by default if no commands are given.</p>

    <h2>Expected Output:</h2>
    <h4>L-Shape Movement:</h4>
    <p>The robot will move forward, stop, turn right, and then move forward again, forming an L-shape.</p>
    <h4>Circular Motion:</h4>
    <p>The robot will rotate in a circle, following the command 'c'.</p>

    <h2>FAQ:</h2>
    <p><b>How do I control the Chelonia Robot to form an L-shape using the provided code?</b><br/>
    Send the command 'l' via Bluetooth. The robot will move forward, stop, turn right, and move forward again to form an L-shape.</p>
    <p><b>Can I modify the code to create different shapes or movements?</b><br/>
    Yes, you can modify the delay times, motor control parameters, and add new commands to create different shapes and movements.</p>
        </>
      ),
    },
       "ObstacleAlert Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create an Obstacle detection Robot using a Chelonia Bot. The Chelonia Bot is equipped with ultrasonic sensors to detect obstacles, and a buzzer is activated when an obstacle is detected within a certain range. The robot stops moving forward to avoid collisions when obstacles are close.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the ultrasonic sensor and buzzer to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Ultrasonic Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 16 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 17 on the Arduino.</li>
    </ul>

    <h4>Connect the buzzer to the Chelonia:</h4>
    <ul>
        <li>Buzzer Pin: Connect to pin 26 on the Arduino.</li>
    </ul>

    <h2>Expected Results:</h2>
    <ul>
        <li>The Chelonia Bot should navigate the environment, stopping and alerting when obstacles are detected within a range of 20 units.</li>
        <li>The buzzer will produce a beeping sound when obstacles are detected.</li>
    </ul>

    <h2>Additional Information:</h2>
    <ul>
        <li>Adjust the distance threshold in the code to modify the obstacle detection range.</li>
        <li>This experiment demonstrates a basic obstacle avoidance mechanism using ultrasonic sensors.</li>
    </ul>

    <h2>FAQs:</h2>
    <p><b>Q: Can I modify the distance threshold for obstacle detection?</b><br/> 
    A: Yes, you can adjust the distance threshold in the code to customize the obstacle detection range. Look for the condition <code>if (distance  20)</code> and change the value "20" to your desired distance.</p>
    <p><b>Q: How can I change the buzzer sound duration?</b><br/>
    A: You can modify the delay values associated with buzzer activation and deactivation in the code. Adjust the values inside the <code>delay()</code> functions to change the duration of the beep.</p>
        </>
      ),
    },
       "Humidity Monitoring Robot": {
      type: "experiment",
      content: (
        <>
  <h2>Objective</h2>
    <p>The objective of this experiment is to create a humidity monitoring robot equipped with a sensor (DHT11) and Bluetooth communication for data transmission.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the DHT11 sensor and Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>DHT11 sensor connection:</h4>
    <ul>
        <li>VCC: Connect to 5V on Arduino.</li>
        <li>GND: Connect to GND on Arduino.</li>
        <li>OUT: Connect to D25 on Arduino.</li>
    </ul>

    <h4>Bluetooth Module HC-05:</h4>
    <ul>
        <li>TX: Connect to pin 1 on Arduino.</li>
        <li>RX: Connect to pin 0 on Arduino.</li>
    </ul>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 <b>after</b> uploading the code.</p>
    </div>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Download the "Bluetooth Serial Monitor" app from the Play Store.</li>
        <li>Open the Arduino IDE, load the provided code, and upload it to the Arduino Mega board.</li>
        <li>Turn on the Chelonia B2 Bot and connect to the Bluetooth module via the app.</li>
    </ol>
    <p>The robot will start moving forward automatically, and the humidity range will be displayed on the Bluetooth Serial Monitor app.</p>

    <h2>Expected Results</h2>
    <p>The Chelonia Bot should move forward continuously, and the DHT11 will monitor and report the humidity. These values will be transmitted and displayed on the Bluetooth Serial Monitor app in real-time.</p>

    <h2>FAQ (Frequently Asked Questions):</h2>
    <p><b>Q: How do I install the DHT library?</b><br/>
    A: Open Arduino IDE - Sketch - Include Library - Manage Libraries - Search for "DHT" - Install.</p>
    <p><b>Q: Can I use a different type of DHT sensor?</b><br/>
    A: Yes, update the DHTTYPE constant in the code accordingly (DHT11 or DHT22).</p>
        </>
      ),
    },
       "Joystick Operated Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create a Joystick Operated Robot using a Chelonia Bot. The robot can move forward, backward, left, and right based on the joystick inputs.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Connect the Bluetooth module (HC-05):</h4>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino <b>after</b> uploading the code.</p>
    </div>

    <h3>Mobile App Setup</h3>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth.</li>
        <li>Use the joystick to send commands to the Chelonia B2 Robot:
            <ul>
                <li>F: Forward</li>
                <li>B: Backward</li>
                <li>R: Right</li>
                <li>L: Left</li>
                <li>G: Forward left</li>
                <li>I: Forward right</li>
                <li>H: Back right</li>
                <li>J: Back left</li>
                <li>S: Stop</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Chelonia B2 Robot should respond to the directions coming from the "Arduino Bluetooth Control" app, resulting in various omnidirectional movements and rotations, as specified by the controls.</p>
        </>
      ),
    },
       "Obstacle-Based Speed Control": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to implement an obstacle-based speed control system using a Chelonia Bot. The Chelonia Bot is equipped with an ultrasonic sensor that detects obstacles. Based on the detected obstacle's distance, the robot adjusts its speed and communicates the status to a mobile app via Bluetooth.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the ultrasonic sensor and Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Ultrasonic Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 16 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 17 on the Arduino.</li>
    </ul>

    <h4>Connect the Bluetooth module (HC-05):</h4>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino <b>after</b> uploading the code.</p>
    </div>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Download the "Bluetooth Serial Monitor" app from the Play Store.</li>
        <li>Open the Arduino IDE, load the provided code, and upload it to the Arduino Mega board.</li>
        <li>Turn on the Chelonia B2 Bot and connect to the Bluetooth module via the app.</li>
    </ol>
    <p>The robot will start moving forward automatically, and the speed range will be displayed on the Bluetooth Serial Monitor app.</p>
    <p>The Chelonia Bot adjusts its speed based on the obstacle distance:</p>
    <ul>
        <li>If the distance is greater than or equal to 80 cm, the robot moves forward with full speed.</li>
        <li>If the distance is between 50 cm and 80 cm, the robot moves forward with a speed of 175.</li>
        <li>If the distance is between 10 cm and 50 cm, the robot moves forward with a speed of 100 cm.</li>
        <li>If the distance is less than 10 cm, the robot stops.</li>
    </ul>

    <h2>Expected Results:</h2>
    <ul>
        <li>The Chelonia Bot should adjust its speed based on the detected obstacle distance.</li>
        <li>Distance readings and corresponding status messages should be displayed in the Bluetooth terminal app.</li>
    </ul>

    <h2>Additional Information:</h2>
    <ul>
        <li>Customize the speed thresholds in the code based on your specific requirements.</li>
        <li>Ensure the Bluetooth module is paired correctly for communication.</li>
    </ul>
        </>
      ),
    },
       "Obstacle Detection Using IR Sensor": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create an Obstacle detection Robot using an IR sensor. The Chelonia Bot is equipped with an IR sensor to detect obstacles, and a buzzer is activated when an obstacle is detected within a certain range. The robot stops moving forward to avoid collisions when obstacles are close.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the IR sensor and buzzer to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>IR Sensor Pins:</h4>
    <ul>
        <li>Out pin: Connect to pin 22 on the Arduino.</li>
    </ul>

    <h4>Connect the buzzer to the Chelonia:</h4>
    <ul>
        <li>Buzzer Pin: Connect to pin 26 on the Arduino.</li>
    </ul>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power on the Chelonia Bot.</li>
        <li>The IR sensor continuously reads values.</li>
        <li>If the IR sensor value falls below the threshold (adjust IR_THRESHOLD as needed), the robot considers an obstacle detected.</li>
        <li>The Chelonia Bot stops moving when an obstacle is detected.</li>
        <li>When no obstacle is detected, the Chelonia Bot moves forward.</li>
    </ol>

    <h2>Expected Results:</h2>
    <ul>
        <li>The Chelonia Bot should stop when an obstacle is detected by the IR sensor.</li>
        <li>The Chelonia Bot should move forward when no obstacle is present.</li>
    </ul>

    <h2>Frequently Asked Questions (FAQs):</h2>
    <p><b>What does the IR sensor measure in this experiment?</b><br/>
    The IR sensor measures the infrared reflection from nearby objects. When an object is detected, the reflected IR light changes, indicating the presence of an obstacle.</p>
    <p><b>How do I adjust the sensitivity of the IR sensor?</b><br/>
    The sensitivity is controlled by the threshold value (IR_THRESHOLD) in the code. Experiment with different threshold values to find the optimal setting based on your environment.</p>
        </>
      ),
    },
       "Blow and Run Robo": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to control the robot using a sound sensor. The robot starts moving forward, with its motion being triggered by a sound stimulus, such as a blow detected by the sensor.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the sound sensor to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Sound sensor connection:</h4>
    <ul>
        <li>VCC: Connect to 5V on Arduino.</li>
        <li>GND: Connect to GND on Arduino.</li>
        <li>D0: Connect to D24 on Arduino.</li>
        <li>A0: Connect to A1 on Arduino.</li>
    </ul>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the Arduino IDE, load the provided code, and upload it to the Arduino Mega board.</li>
        <li>Turn on the Chelonia B2 Bot.</li>
        <li>When you blow on the sound sensor, the robot will move forward and stop after a few seconds.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Chelonia Bot should move forward continuously when you blow on the sound sensor.</p>

    <h2>Additional Information:</h2>
    <ul>
        <li>This experiment provides a versatile and interactive method of controlling the Chelonia Bot, making it suitable for various applications.</li>
        <li>The code uses PWM signals to control motor speed, ensuring smooth and proportional movements.</li>
    </ul>
        </>
      ),
    },
       "Human Following Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create a robot that can follow a person by detecting their presence and making turns based on infrared sensor inputs.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the IR and ultrasonic sensor to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Infrared Sensor Connections:</h4>
    <ul>
        <li>Connect the left IR sensor to digital pin 22 (LSP).</li>
        <li>Connect the right IR sensor to digital pin 23 (RSP).</li>
    </ul>

    <h4>Ultrasonic Sensor Connections:</h4>
    <ul>
        <li>Connect the Trig pin of the ultrasonic sensor to digital pin 16.</li>
        <li>Connect the Echo pin of the ultrasonic sensor to digital pin 17.</li>
    </ul>

    <h2>Expected Results</h2>
    <p>The robot should respond to obstacles and sensor inputs by making turns or stopping accordingly.</p>
    
    <h3>Interpreting Sensor Readings:</h3>
    <ul>
        <li><b>Distance:</b> Displays the distance measured by the ultrasonic sensor.</li>
        <li><b>RSD (Right Sensor Detection):</b> 0 if an object is detected, 1 otherwise.</li>
        <li><b>LSD (Left Sensor Detection):</b> 0 if an object is detected, 1 otherwise.</li>
    </ul>
    
    <h3>Robot Behavior:</h3>
    <ul>
        <li><b>Stop:</b> If an object is too close (distance  10), the robot stops moving.</li>
        <li><b>Right Turn:</b> If only the right sensor detects an object.</li>
        <li><b>Left Turn:</b> If only the left sensor detects an object.</li>
        <li><b>Forward:</b> If both sensors detect an object or the distance is within a specified range.</li>
        <li><b>Stop:</b> If none of the above conditions are met.</li>
    </ul>

    <h3>Adjustment:</h3>
    <p>Modify MIN_DISTANCE and MAX_DISTANCE to adjust the distance range for straight movement.</p>

    <h2>Frequently Asked Questions (FAQs):</h2>
    <p><b>Q: The robot is not responding to obstacles. What could be the issue?</b><br/>
    A: Ensure that the infrared sensors are connected correctly. Check the wiring and adjust the sensitivity.</p>
    <p><b>Q: Can I modify the distance range for straight movement?</b><br/>
    A: Yes, you can adjust the MIN_DISTANCE and MAX_DISTANCE variables in the code.</p>
        </>
      ),
    },
       "Temperature Monitoring Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create a temperature monitoring robot equipped with a sensor (DHT11) and Bluetooth communication for data transmission.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the DHT11 sensor and Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>DHT11 sensor connection:</h4>
    <ul>
        <li>VCC: Connect to 5V on Arduino.</li>
        <li>GND: Connect to GND on Arduino.</li>
        <li>OUT: Connect to D25 on Arduino.</li>
    </ul>

    <h4>Bluetooth Module HC-05:</h4>
    <ul>
        <li>TX: Connect to pin 1 on Arduino.</li>
        <li>RX: Connect to pin 0 on Arduino.</li>
    </ul>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 after uploading the code.</p>
    </div>

    <h2>Libraries:</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>DHT11:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Download the "Bluetooth Serial Monitor" app from the Play Store.</li>
        <li>Open the Arduino IDE, load the provided code, and upload it to the Arduino Mega board.</li>
        <li>Turn on the Chelonia B2 Bot and connect to the Bluetooth module via the app.</li>
        <li>The robot will start moving forward automatically, and the temperature range will be displayed on the Bluetooth Serial Monitor app.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Chelonia Bot should move forward continuously, and the DHT11 will monitor and report the temperature. These values will be transmitted and displayed on the Bluetooth Serial Monitor app in real-time.</p>

    <h2>Frequently Asked Questions (FAQs):</h2>
    <p><b>Q: How do I install the DHT library?</b><br/>
    A: Open Arduino IDE - Sketch - Include Library - Manage Libraries - Search for "DHT" - Install.</p>
    <p><b>Q: Can I use a different type of DHT sensor?</b><br/>
    A: Yes, update the DHTTYPE constant in the code accordingly (DHT11 or DHT22).</p>
        </>
      ),
    },
       "Computer Operated Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to control the Chelonia B2 Robot using the commands sent from a computer. By executing this code, you can make the robot move forward, backward, turn left, turn right, and perform various omnidirectional movements.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h2>Computer Control Setup</h2>
    <ol>
        <li>Open the Arduino IDE on your computer.</li>
        <li>Select the correct port number for your Arduino board.</li>
        <li>Open the Serial Monitor (Tools  Serial Monitor or Ctrl+Shift+M).</li>
        <li>Use the serial monitor to send the following commands to the Chelonia B2 Robot:</li>
    </ol>
    <ul>
        <li><b>F:</b> Forward</li>
        <li><b>B:</b> Backward</li>
        <li><b>A:</b> Super right</li>
        <li><b>W:</b> Super left</li>
        <li><b>R:</b> Right</li>
        <li><b>L:</b> Left</li>
        <li><b>G:</b> Forward left</li>
        <li><b>I:</b> Forward right</li>
        <li><b>H:</b> Back right</li>
        <li><b>J:</b> Back left</li>
        <li><b>S:</b> Stop</li>
    </ul>

    <h2>Expected Results</h2>
    <p>The Chelonia B2 Robot should respond to the commands sent from the serial monitor, resulting in various omnidirectional movements and rotations, as specified.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <p><b>Q: Can I modify the code for different motor speeds?</b><br/>
    A: Yes, you can adjust the PWM values in the code for different motor speeds and responsiveness.</p>
        </>
      ),
    },
       "Wall Follow Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create a wall-following robot using ultrasonic sensors and a PID controller. The robot should navigate by following a wall, adjusting its direction based on sensor inputs.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the ultrasonic sensors to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Ultrasonic front Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 16 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 17 on the Arduino.</li>
    </ul>

    <h4>Ultrasonic left Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 18 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 19 on the Arduino.</li>
    </ul>

    <h2>Libraries:</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>PID V1:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Usage Instructions:</h2>
    <ul>
        <li>Ensure the robot is powered on and connected to the Arduino.</li>
        <li>The robot will use ultrasonic sensors to measure distances from the front and left sides.</li>
        <li>The PID controller adjusts motor speeds based on sensor inputs to maintain a set distance from the wall.</li>
        <li>Monitor real-time distance values and motor actions on the serial monitor.</li>
        <li>Adjust PID tuning parameters and distance setpoints for optimal performance.</li>
    </ul>

    <h2>Expected Results:</h2>
    <p>The robot should follow a wall based on the input from ultrasonic sensors. It will adjust its direction to maintain a set distance from both the front and left walls.</p>

    <h2>Additional Information:</h2>
    <ul>
        <li>The PID controller helps achieve smooth and precise control over the robot's movements.</li>
        <li>Experiment with PID tuning for different wall-following behaviors.</li>
    </ul>

    <h2>Frequently Asked Questions (FAQs):</h2>
    <p><b>Q: How do I install the PID V1 library?</b><br/>
    A: Open Arduino IDE - Sketch - Include Library - Manage Libraries - Search for "PID V1" - Install.</p>
        </>
      ),
    },
       "Radio Frequency Detection Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create a robot that detects radio frequency. The robot moves forward autonomously until it detects a radio frequency RFID tag. Upon detection, the robot stops its movement.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the RFID sensor to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>RFID Sensor Pins:</h4>
    <ul>
        <li>RST: Connect to pin 27 on the Arduino.</li>
        <li>MISO: Connect to pin 50 on the Arduino.</li>
        <li>MOSI: Connect to pin 51 on the Arduino.</li>
        <li>SCK: Connect to pin 52 on the Arduino.</li>
        <li>SDA: Connect to pin 53 on the Arduino.</li>
    </ul>

    <h2>Libraries:</h2>
    <p>The required libraries for this experiment are:</p>
    <ul>
        <li><b>MFRC522:</b> Install this library from the Arduino IDE Library Manager.</li>
        <li><b>SPI:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power the robot and ensure it is connected to the Arduino.</li>
        <li>The robot moves forward autonomously.</li>
        <li>Bring an RFID tag close to the RFID reader and tap it.</li>
        <li>If the RFID tag is detected, the UID will be displayed on the terminal and the robot stops.</li>
    </ol>

    <h2>Expected Results:</h2>
    <p>The robot is designed to move forward autonomously until it identifies an RFID tag through its integrated RFID reader. Upon detecting the RFID tag, the robot stops the motion.</p>

    <h2>Frequently Asked Questions (FAQs):</h2>
    <p><b>Q: How do I ensure the RFID tag is detected?</b><br/>
    A: Bring the RFID tag close to the RFID reader and tap it. Check the serial monitor for UID information.</p>
    <p><b>Q: How can I modify the code for different motor speeds?</b><br/>
    A: Adjust the PWM values (e.g., analogWrite(EN_1, 200) ;) for the motors based on your speed requirements.</p>
        </>
      ),
    },
       "Fire Detecting Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create a fire-detecting robot that can sense the presence of fire using a gas sensor. Upon detecting a certain level of gas, the robot activates an alarm (buzzer) and stops its movement.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the gas sensor and Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>GAS Sensor Pins:</h4>
    <ul>
        <li>A0: Connect to pin 28 on the Arduino.</li>
        <li>D0: Connect to pin A0 on the Arduino.</li>
    </ul>

    <h4>Bluetooth Module HC-05:</h4>
    <ul>
        <li>TX: Connect to pin 1 on Arduino.</li>
        <li>RX: Connect to pin 0 on Arduino.</li>
    </ul>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 after uploading the code.</p>
    </div>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power the robot and ensure it is connected to the Arduino.</li>
        <li>Ensure that the gas sensor is properly positioned to detect the presence of fire.</li>
        <li>The robot will continuously monitor the gas sensor readings.</li>
        <li>If the gas level surpasses a threshold (value greate than 100), indicating the presence of fire, the robot will trigger the buzzer alarm and stop the robot movement.</li>
    </ol>

    <h2>Expected Results:</h2>
    <p>The robot should promptly respond to the detection of fire by activating the buzzer and halting its movement. The terminal provides real-time feedback on gas sensor readings.</p>

    <h2>Additional Information:</h2>
    <p>This experiment highlights a basic fire-detecting mechanism using a gas sensor, offering potential applications in safety and security systems.</p>

    <h2>Frequently Asked Questions (FAQs):</h2>
    <p><b>Q. What should I do if the robot does not stop when the gas is detected?</b><br/>
    A. Check the connections and ensure the gas sensor is functioning correctly. Adjust the threshold if needed.</p>
    <p><b>Q. Can I modify the code for different motor speeds?</b><br/>
    A. Certainly, adjust the PWM values in the code for moveForward() as per your requirements.</p>
    <p><b>Q. How can I extend the functionality of this robot?</b><br/>
    A. You can integrate additional sensors, communication modules, or enhance the alarm system for specific applications.</p>
        </>
      ),
    },
       "Teleopreated Control Using aMobile Application": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create a mobile Operated Robot using a Chelonia Bot. The robot can move forward, backward, left, and right based on the terminal inputs.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Connect the Bluetooth module (HC-05):</h4>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
        <li>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</li>
    </ul>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino after uploading the code.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <h4>Use the terminal to send commands to the Chelonia B2 Robot:</h4>
    <ul>
        <li>F: Forward</li>
        <li>B: Backward</li>
        <li>R: Right</li>
        <li>L: Left</li>
        <li>G: Forward left</li>
        <li>I: Forward right</li>
        <li>H: Back right</li>
        <li>J: Back left</li>
        <li>S: Stop</li>
    </ul>

    <h2>Expected Results</h2>
    <p>The Chelonia B2 Robot should respond to the directions coming from the "Arduino Bluetooth Control" app, resulting in various omnidirectional movements and rotations, as specified by the controls.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <p><b>Q: How do I pair the Bluetooth module with my smartphone?</b><br/>
    A: Follow the Bluetooth pairing instructions specific to your smartphone and Bluetooth module. Typically, you need to enable Bluetooth on your smartphone, search for available devices, and select the Bluetooth module to pair.</p>
    <p><b>Q: What should I do if the robot does not respond to terminal commands?</b><br/>
    A: Check the Bluetooth connection between the smartphone and the robot. Ensure that the Bluetooth module is powered and properly paired. Verify the wiring connections according to the provided instructions.</p>
        </>
      ),
    },
       "Line Following Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The Line Following Robot with IR Sensors is designed to autonomously navigate along a predefined path marked by a black line. This user manual provides step-by-step instructions for setting up, operating, and troubleshooting the robot.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the IR sensors to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>IR left Sensor Pins:</h4>
    <ul>
        <li>Out pin: Connect to pin 22 on the Arduino.</li>
    </ul>

    <h4>IR right Sensor Pins:</h4>
    <ul>
        <li>Out pin: Connect to pin 23 on the Arduino.</li>
    </ul>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power on the Chelonia Bot.</li>
        <li>The IR sensor continuously reads values.</li>
        <li>If the IR sensor value falls below the threshold (adjust IR_THRESHOLD as needed), the robot considers an obstacle detected.</li>
        <li>The Chelonia Bot moves when a black line is detected.</li>
        <li>When no obstacle is detected, the Chelonia Bot stops.</li>
    </ol>

    <h2>Expected Results:</h2>
    <p>The robot should follow a black line on a white surface based on the input from infrared sensors.</p>

    <h2>Frequently Asked Questions (FAQs):</h2>
    <p><b>What does the IR sensor measure in this experiment?</b><br/>
    The IR sensor measures the infrared reflection from nearby objects. When an object is detected, the reflected IR light changes, indicating the presence of an obstacle.</p>
    <p><b>How do I adjust the sensitivity of the IR sensor?</b><br/>
    The sensitivity is controlled by the threshold value (IR_THRESHOLD) in the code. Experiment with different threshold values to find the optimal setting based on your environment.</p>
        </>
      ),
    },
      "Obstacle Avoidance Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create an obstacle avoidance robot using an ultrasonic sensor. The robot should move forward until it detects an obstacle, then turns randomly to avoid the obstacle.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the ultrasonic sensors to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Ultrasonic left Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 18 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 19 on the Arduino.</li>
    </ul>

    <h4>Ultrasonic right Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 14 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 15 on the Arduino.</li>
    </ul>

    <h4>Ultrasonic front Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 16 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 17 on the Arduino.</li>
    </ul>

    <h2>Libraries:</h2>
    <p>The required libraries for this experiment are:</p>
    <ul>
        <li><b>NewPing:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power on the Chelonia Bot.</li>
        <li>The robot will start moving forward automatically until it detects an obstacle.</li>
        <li>The robot stops when it detects an obstacle and checks for obstacles using the left and right sensors.</li>
        <li>If an obstacle is detected by the left sensor, it turns right and moves forward.</li>
        <li>If an obstacle is detected by the right sensor, the robot turns left and moves forward.</li>
    </ol>

    <h2>Expected Results:</h2>
    <p>The robot should move forward until it detects an obstacle. When an obstacle is detected, the robot should randomly turn right or left to avoid the obstacle and continue move forward.</p>

    <h2>Additional Information:</h2>
    <p>Customize the speed thresholds in the code based on your specific requirements.</p>
        </>
      ),
    },
       "Maze Solving Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The Maze Solving Robot is designed to autonomously navigate through a maze by utilizing ultrasonic sensors for obstacle detection and maneuvering. This user manual provides step-by-step instructions for setting up, operating, and troubleshooting the maze-solving robot.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the ultrasonic sensors to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Ultrasonic left Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 18 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 19 on the Arduino.</li>
    </ul>

    <h4>Ultrasonic right Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 14 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 15 on the Arduino.</li>
    </ul>

    <h4>Ultrasonic front Sensor Pins:</h4>
    <ul>
        <li>Trig Pin: Connect to pin 16 on the Arduino.</li>
        <li>Echo Pin: Connect to pin 17 on the Arduino.</li>
    </ul>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power on the Chelonia Bot.</li>
        <li>The robot will autonomously navigate through the maze.</li>
        <li>If an obstacle is detected in front (within 20 cm), the robot will decide whether to turn left or right based on the distances measured by left and right ultrasonic sensors.</li>
        <li>The robot will move forward if no obstacle is detected.</li>
    </ol>

    <h2>Expected Results:</h2>
    <p>The robot should move forward until it detects an obstacle. When an obstacle is detected, the robot should randomly turn right or left to avoid the obstacle and continue move forward.</p>

    <h2>FAQs (Frequently Asked Questions):</h2>
    <ul>
        <li>
            <p><b>Q: How can I interpret the ultrasonic sensor distances?</b></p>
            <p>A: The distances are displayed on the serial monitor. Ensure the robot can detect obstacles at reasonable distances.</p>
        </li>
        <li>
            <p><b>Q: What should I do if the robot does not navigate as expected?</b></p>
            <p>A: Check the hardware connections, ensure the sensors are functioning, and review the code for potential issues.</p>
        </li>
    </ul>
        </>
      ),
    },
       "Clap Detection Robo": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to control the robot using a sound sensor. The robot starts moving forward, with its motion being triggered by a sound stimulus, such as a clap detected by the sensor.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the sound sensor to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Sound sensor connection:</h4>
    <ul>
        <li>VCC: Connect to 5V on Arduino.</li>
        <li>GND: Connect to GND on Arduino.</li>
        <li>D0: Connect to D24 on Arduino.</li>
        <li>A0: Connect to A1 on Arduino.</li>
    </ul>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the Arduino IDE, load the provided code, and upload it to the Arduino Mega board.</li>
        <li>Turn on the Chelonia B2 Bot.</li>
        <li>When you clap near to the sound sensor, the robot will move forward and stop after a few seconds.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Chelonia Bot should move forward continuously when you clap near to the sound sensor.</p>

    <h2>Additional Information:</h2>
    <ul>
        <li>This experiment provides a versatile and interactive method of controlling the Chelonia Bot, making it suitable for various applications.</li>
        <li>The code uses PWM signals to control motor speed, ensuring smooth and proportional movements.</li>
    </ul>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <p><b>Q: How sensitive is the sound sensor to claps?</b><br/>
    A: The sensitivity may vary. Ensure that the sound sensor is positioned in a way that it can detect claps effectively.</p>
        </>
      ),
    },
       "Mobile Tilt Controlled Chelonia Bot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create a mobile tilt-controlled Robot using a Chelonia Bot. The robot can move forward, backward, left, and right based on the joystick inputs.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Connect the Bluetooth module (HC-05):</h4>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino after uploading the code.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth.</li>
    </ol>

    <h4>Use the accelerometer to send commands to the Chelonia B2 Robot:</h4>
    <ul>
        <li><b>F:</b> Forward</li>
        <li><b>B:</b> Backward</li>
        <li><b>R:</b> Right</li>
        <li><b>L:</b> Left</li>
        <li><b>S:</b> Stop</li>
    </ul>

    <h2>Expected Results</h2>
    <p>The Chelonia B2 Robot should respond to the directions coming from the "Arduino Bluetooth Control" app, resulting in various omnidirectional movements and rotations, as specified by the controls.</p>
        </>
      ),
    },
       "Robot Using Mobile Arrows": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create a robot controlled using smartphone arrow keys. The robot can move forward, backward, left, and right based on the terminal inputs.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Connect the Bluetooth module (HC-05):</h4>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino after uploading the code.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth.</li>
    </ol>

    <h4>Use the terminal to send commands to the Chelonia B2 Robot:</h4>
    <ul>
        <li><b>F:</b> Forward</li>
        <li><b>B:</b> Backward</li>
        <li><b>R:</b> Right</li>
        <li><b>L:</b> Left</li>
        <li><b>G:</b> Forward left</li>
        <li><b>I:</b> Forward right</li>
        <li><b>H:</b> Back right</li>
        <li><b>J:</b> Back left</li>
        <li><b>S:</b> Stop</li>
    </ul>

    <h2>Expected Results</h2>
    <p>The Chelonia B2 Robot should respond to the directions coming from the "Arduino Bluetooth Control" app, resulting in various omnidirectional movements and rotations, as specified by the controls.</p>
        </>
      ),
    },
       "Smoke Detecting Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create a smoke-detecting robot that can sense the presence of fire using a gas sensor. Upon detecting a certain level of gas, the robot activates an alarm (buzzer) and stops its movement.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the gas sensor and Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Gas Sensor Pins:</h4>
    <ul>
        <li>A0: Connect to pin 28 on the Arduino.</li>
        <li>D0: Connect to pin A0 on the Arduino.</li>
    </ul>

    <h4>Bluetooth Module HC-05:</h4>
    <ul>
        <li>TX: Connect to pin 1 on Arduino.</li>
        <li>RX: Connect to pin 0 on Arduino.</li>
    </ul>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 after uploading the code.</p>
    </div>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power the robot and ensure it is connected to the Arduino.</li>
        <li>Ensure that the gas sensor is properly positioned to detect the presence of smoke.</li>
        <li>The robot will continuously monitor the gas sensor readings.</li>
        <li>If the gas level surpasses a threshold (value greater than 100), indicating the presence of smoke, the robot will trigger the buzzer alarm and stop the robot movement.</li>
    </ol>

    <h2>Expected Results:</h2>
    <p>The robot should promptly respond to the detection of smoke by activating the buzzer and halting its movement. The terminal provides real-time feedback on gas sensor readings.</p>

    <h2>Additional Information:</h2>
    <p>This experiment highlights a basic smoke detecting mechanism using a gas sensor, offering potential applications in safety and security systems.</p>

    <h2>FAQs:</h2>
    <p><b>Q. What should I do if the robot does not stop when the smoke is detected?</b><br/>
    A. Check the connections and ensure the gas sensor is functioning correctly. Adjust the threshold if needed.</p>
    <p><b>Q. Can I modify the code for different motor speeds?</b><br/>
    A. Certainly, adjust the PWM values in the code for moveForward() as per your requirements.</p>
    <p><b>Q. How can I extend the functionality of this robot?</b><br/>
    A. You can integrate additional sensors, communication modules, or enhance the alarm system for specific applications.</p>
        </>
      ),
    },
       "Button Controlled Robo": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create a button-controlled Robot using a Chelonia Bot. The robot can move forward, backward, left, and right based on the terminal inputs.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Connect the Bluetooth module (HC-05):</h4>
    <ul>
        <li>Connect the RX pin to the TX pin of Arduino</li>
        <li>Connect the TX pin to the RX pin of Arduino</li>
    </ul>
    <p>Ensure the Bluetooth module is properly connected to the Arduino (VCC and GND).</p>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino after uploading the code.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Pair your mobile device with the HC-05 Bluetooth.</li>
    </ol>

    <h4>Use the buttons to send commands to the Chelonia B2 Robot:</h4>
    <ul>
        <li><b>F:</b> Forward</li>
        <li><b>B:</b> Backward</li>
        <li><b>R:</b> Right</li>
        <li><b>L:</b> Left</li>
        <li><b>G:</b> Forward left</li>
        <li><b>I:</b> Forward right</li>
        <li><b>H:</b> Back right</li>
        <li><b>J:</b> Back left</li>
        <li><b>S:</b> Stop</li>
    </ul>

    <h2>Expected Results</h2>
    <p>The Chelonia B2 Robot should respond to the directions coming from the "Arduino Bluetooth Control" app, resulting in various omnidirectional movements and rotations, as specified by the controls.</p>
        </>
      ),
    },
       "Air Quality Monitoring Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to create an air quality monitoring robot capable of detecting air pollution levels using a sensor. Upon detecting poor air quality, the robot alerts the user and stops its movement.</p>

    <h2>Hardware Setup</h2>
    <ol>
        <li>Assemble the Chelonia B2 Robot hardware as per the assembly instructions in Section 1.3.</li>
        <li>Connect the Chelonia B2 Robot to the Arduino IDE, as explained in Section 1.6.</li>
    </ol>

    <h3>Motor Pins:</h3>
    <ul>
        <li>IN_11 (Pin 13): Front Right motor</li>
        <li>IN_12 (Pin 7): Front Right motor</li>
        <li>IN_13 (Pin 8): Front Left motor</li>
        <li>IN_14 (Pin 12): Front Left motor</li>
        <li>EN_1 (Pin 6): Enable Front Left motor</li>
        <li>EN_2 (Pin 11): Enable Front Right motor</li>
        <li>IN_21 (Pin 2): Back Left motor</li>
        <li>IN_22 (Pin 3): Back Left motor</li>
        <li>IN_23 (Pin 4): Back Right motor</li>
        <li>IN_24 (Pin 5): Back Right motor</li>
        <li>EN_3 (Pin 9): Enable Back Left motor</li>
        <li>EN_4 (Pin 10): Enable Back Right motor</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

    <h3>Sensor connections:</h3>
    <p>Connect the Gas sensor and Bluetooth module to the appropriate connector on the PCB, ensuring that the pin names, connections, and order are consistent.</p>
    
    <h4>Gas Sensor Pins:</h4>
    <ul>
        <li>A0: Connect to pin 28 on the Arduino.</li>
        <li>D0: Connect to pin A0 on the Arduino.</li>
    </ul>

    <h4>Bluetooth Module HC-05:</h4>
    <ul>
        <li>TX: Connect to pin 1 on Arduino.</li>
        <li>RX: Connect to pin 0 on Arduino.</li>
    </ul>
    <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of HC-05 after uploading the code.</p>
    </div>

    <h2>Usage Instructions:</h2>
    <ol>
        <li>Power the robot and ensure it is connected to the Arduino.</li>
        <li>Ensure that the gas sensor is properly positioned to detect the air quality.</li>
        <li>The robot will continuously monitor the gas sensor readings.</li>
        <li>Open the Bluetooth app and the air quality status will be displayed in the terminal.</li>
    </ol>

    <h2>Expected Results:</h2>
    <p>The Chelonia Bot should move forward continuously, and the gas sensor will monitor and report the air quality. These values will be transmitted and displayed on the Bluetooth Serial Monitor app in real-time.</p>
        </>
      ),
    },


  };

  // ✅ Sample code links mapping
  const sampleCodeLinks = {
    // Beginner
    "Directional Control of a Mechnum Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/Exp1.ino",
    "Chelonia B2 Control Using Mobile App": "https://github.com/Megararobotics/CheloniaB2/blob/main/Exp2.ino",
    "Direction Control Chelonia B2 Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/Exp3.ino",
    "Manual Speed Control": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_14.ino",
    "Staircase Detection Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_5.ino",
    "Tilt Tracking Using IMU": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_6.ino",
    "Voice Controlled Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_7.ino",
    "Shape Forming Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_8.ino",
    "ObstacleAlert Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_9.ino",
    "Humidity Monitoring Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_10.ino",

    // Intermediate
    "Joystick Operated Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_11.ino",
    "Obstacle-Based Speed Control": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_12.ino",
    "Obstacle Detection Using IR Sensor": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_13.ino",
    "Blow and Run Robot": "https://github.com/Megararobotics/chelonia_B1/blob/main/Experiment14/code.ino",
    "Human Following Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_15.ino",
    "Temperature Monitoring Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_16.ino",
    "Computer Operated Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_17.ino",
    "Wall Follow Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_18.ino",
    "Radio Frequency Detection Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_19.ino",
    "Fire Detecting Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_20.ino",

    // Advanced
    "Teleopreated Control Using aMobile Application": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_21.ino",
    "Line Following Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_22.ino",
    "Obstacle Avoidance Robot":"https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_23.ino",
    "Maze Solving Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_24.ino",
    "Clap Detection Robo": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_25.ino",
    "Mobile Tilt Controlled Chelonia Bot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_26.ino",
    "Robot Using Mobile Arrows": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_27.ino",
    "Smoke Detecting Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_28.ino",
    "Button Controlled Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_29.ino",
    "Air Quality Monitoring Robot": "https://github.com/Megararobotics/CheloniaB2/blob/main/che_b2_30.ino",
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
    "Directional Control of a Mechnum Robot",
    "Chelonia B2 Control Using Mobile App",
    "Direction Control Chelonia B2 Robot",
    "Manual Speed Control",
    "Staircase Detection Robot",
    "Tilt Tracking Using IMU",
    "Voice Controlled Robot",
    "Shape Forming Robot",
    "ObstacleAlert Robot",
    "Humidity Monitoring Robot",
  ];

  const intermediateItems = [
    "Joystick Operated Robot",
    "Obstacle-Based Speed Control",
    "Obstacle Detection Using IR Sensor",
    "Blow and Run Robot",
    "Human Following Robot",
    "Temperature Monitoring Robot",
    "Computer Operated Robot",
    "Wall Follow Robot",
    "Radio Frequency Detection Robot",
    "Fire Detecting Robot",
  ];

  const advancedItems = [
    "Teleopreated Control Using aMobile Application",
    "Line Following Robot",
    "Maze Solving Robot",
    "Clap Detection Robo",
    "Mobile Tilt Controlled Chelonia Bot",
    "Robot Using Mobile Arrows",
    "Smoke Detecting Robot",
    "Button Controlled Robot",
    "Air Quality Monitoring Robot",
  ];

  // ✅ Modified renderList function with clickable sample code links
  const renderList = (items) => (
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
            href={sampleCodeLinks[it] || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sample Code
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
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Overview"])}>
            Overview
          </button>
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Getting Started"])}>
            Getting Started
          </button>
        </div>

        {/* Lists */}
        <div className="cm-bar cm-bar-beginner">Beginner</div>
        {renderList(beginnerItems)}

        <div className="cm-bar cm-bar-intermediate">Intermediate</div>
        {renderList(intermediateItems)}

        <div className="cm-bar cm-bar-advanced">Advanced</div>
        {renderList(advancedItems)}

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
