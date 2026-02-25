import React, { useRef } from "react";
import "./B1Experiment.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CheloniaManual() {
  const topRef = useRef(null); // Top reference for scroll-to-top

  // Centralized content map
  const contentMap = {
    Overview: {
      type: "section",
      content: (
        <>
<p>Chelonia User Manual – Base Version! an extensive guide to unlocking the potential of your versatile robotic companion. With a collection of 30 diverse experiments, each tailored to enhance specific capabilities, this manual is your gateway to a world of exploration and innovation. The Chelonia boasts an array of innovative hardware, including motors, infrared sensors, ultrasonic sensors, IMU, sound sensors, Bluetooth modules, and more. Familiarize yourself with the hardware layout to ensure seamless execution of experiments.</p>

<p><b>FEATURES</b></p>
<ul>
    <li><b>Diverse Sensor Integration:</b> The Chelonia Base Version includes a comprehensive set of sensors, such as infrared (IR) sensors for proximity detection, ultrasonic sensors for accurate distance measurement, gas sensors for environmental monitoring, inertial measurement units (IMUs) for orientation tracking, RFID tags for identification, and sound sensors for audio interaction.</li>
    <li><b>Versatile Motor Control:</b> The robot is equipped with a robust motor control system, allowing users to program precise movements. Motor pins are clearly defined, making it easy to understand and experiment with forward, backward, left, and right movements.</li>
    <li><b>Bluetooth Connectivity:</b> Utilize Bluetooth communication to control the Chelonia Robot remotely. Commands can be sent through a Bluetooth module, providing wireless flexibility and enabling users to experiment with different control mechanisms.</li>
    <li><b>Educational Platform:</b> Tailored for educational purposes, the Chelonia Base Version is an ideal tool for students and enthusiasts to delve into the world of robotics. The robot facilitates hands-on learning, fostering a deeper understanding of robotic systems and programming.</li>
</ul>

<p><b>SAFETY PRECAUTIONS</b></p>
<ul>
    <li><b>Workspace Safety</b>
        <ul>
            <li>Keep your workspace tidy and well-lit to avoid accidents.</li>
            <li>Ensure proper ventilation, especially when soldering or using adhesives.</li>
            <li>Avoid working near flammable materials.</li>
        </ul>
    </li>
    <li><b>Electrical Safety</b>
        <ul>
            <li>Always disconnect the circuit from power before making changes or adjustments.</li>
            <li>Use low-voltage power supplies (below 12V) for hobby projects whenever possible to minimize risk.</li>
            <li>Check wires and components for damage before use to prevent short circuits.</li>
        </ul>
    </li>
    <li><b>Handling Tools and Components</b>
        <ul>
            <li>Use insulated tools for working with electronic circuits to avoid accidental shocks.</li>
            <li>Handle components carefully to avoid bending leads or damaging delicate parts.</li>
            <li>Avoid applying excessive force when inserting or removing components from breadboards or PCBs.</li>
        </ul>
    </li>
    <li><b>Soldering Safety</b>
        <ul>
            <li>Wear safety goggles to protect your eyes from solder splatter.</li>
            <li>Use a soldering iron stand and avoid touching the iron’s heated parts.</li>
            <li>Work in a well-ventilated area or use a fume extractor to avoid inhaling fumes.</li>
        </ul>
    </li>
    <li><b>Battery and Power Safety</b>
        <ul>
            <li>Use only recommended battery types and capacities for your project.</li>
            <li>Do not short-circuit batteries, and avoid exposing them to heat or punctures.</li>
            <li>Dispose of batteries responsibly and according to local regulations.</li>
        </ul>
    </li>
    <li><b>Circuit Testing</b>
        <ul>
            <li>Double-check connections before powering the circuit to prevent shorts or component damage.</li>
            <li>Use a multimeter to verify voltages and currents before powering sensitive components.</li>
            <li>Start testing at low power and gradually increase if needed.</li>
        </ul>
    </li>
    <li><b>Personal Safety</b>
        <ul>
            <li>Avoid working on electronics with wet hands or in damp conditions.</li>
            <li>Keep loose clothing, jewelry, and long hair away from moving parts or exposed circuits.</li>
            <li>If something feels hot or smells burnt, turn off power immediately and inspect the circuit.</li>
        </ul>
    </li>
    <li><b>Component Safety</b>
        <ul>
            <li>Be aware of the polarity of components like LEDs, capacitors, and diodes to avoid damage.</li>
            <li>Handle ICs and other sensitive components by their edges to prevent static damage.</li>
            <li>Store components in anti-static bags or containers when not in use.</li>
        </ul>
    </li>
    <li><b>Fire Prevention</b>
        <ul>
            <li>Keep a small fire extinguisher or fire blanket nearby, especially if working with soldering or batteries.</li>
            <li>Never leave soldering irons, heat guns, or other tools unattended when powered on.</li>
        </ul>
    </li>
    <li><b>Emergency Preparedness</b>
        <ul>
            <li>Know how to disconnect power quickly in case of a malfunction.</li>
            <li>Keep first aid supplies nearby in case of minor burns or cuts.</li>
        </ul>
    </li>
</ul>

<p><b>KIT CONTENTS</b></p>
<ul>
    <li><b>Core Electronics</b>
        <ul>
            <li>Arduino Mega 2560: High-performance microcontroller for versatile robotics and electronics projects.</li>
            <li>Motor Driver Module: L298N or similar, to control motors effectively.</li>
        </ul>
    </li>
    <li><b>Actuators</b>
        <ul>
            <li>BO Motors with Metal Gears: Durable and efficient motors for driving wheels (quantity as required).</li>
            <li>Wheels: Compatible with BO motors, with appropriate grip and size for the project.</li>
        </ul>
    </li>
    <li><b>Sensors</b>
        <ul>
            <li>Ultrasonic Sensor: HC-SR04 for distance measurement and obstacle detection.</li>
            <li>Infrared (IR) Sensor: For line-following or proximity sensing.</li>
            <li>Gas Sensor: MQ series sensor for detecting gases like LPG, CO, or smoke.</li>
            <li>Temperature Sensor: DHT11, DHT22, or LM35 for environmental temperature readings.</li>
        </ul>
    </li>
    <li><b>Power Components</b>
        <ul>
            <li>12V Battery: Rechargeable battery for powering the project.</li>
            <li>Arduino Power Cable: USB cable for programming and powering the Arduino board.</li>
            <li>Connectors: Battery connectors, jumper wires, and Dupont cables for reliable connections.</li>
        </ul>
    </li>
    <li><b>Structural Components</b>
        <ul>
            <li>Base Plate: Rigid and durable base to mount the motors, sensors, and other components.</li>
            <li>Clamps: Metal or plastic clamps for securing the motors and sensors.</li>
            <li>Screws and Nuts: Assorted sizes for assembling the kit.</li>
            <li>Spacers: For creating levels or spacing components appropriately.</li>
        </ul>
    </li>
    <li><b>Prototyping and Customization</b>
        <ul>
            <li>PCB: General-purpose PCB for soldering and custom circuits.</li>
            <li>Switch: On/off switch for the main power or specific components.</li>
            <li>Wires: Assorted lengths and gauges for power and signal connections.</li>
        </ul>
    </li>
</ul>
        </>
      ),
    },
    "Getting Started": {
      type: "section",
      content: (
        <>
<p><b>Hardware Assembly</b></p>
<p><b>Components</b></p>
<p>Ensure you have the following components ready for the Chelonia hardware assembly:</p>
<ul>
    <li>Arduino Mega</li>
    <li>L298N Motor Driver</li>
    <li>DC Motors (2)</li>
    <li>Wheels (2)</li>
    <li>Battery</li>
    <li>Connectors</li>
</ul>

<p><b>Hardware Connection Diagram</b></p>
<p>Refer to the attached hardware connection diagram available at the following link:</p>

<p><b>Assembly Steps</b></p>
<p>Follow the steps below to complete the Chelonia hardware assembly:</p>
<ul>
    <li><b>DC Motor and Wheel Connection:</b>
        <ul>
            <li>Connect each DC motor to the corresponding output terminals of the L298N Motor Driver.</li>
            <li>Attach the wheels securely to the motor shafts.</li>
            <li>There is already a proper connector in place to connect the motor and its driver pin to the PCB, which helps the user avoid any connection faults.</li>
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
            <li>Ensure the Arduino Mega and L298N Motor Driver receive power.</li>
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
<p><b>Note:</b> The ENA (Enable A) and ENB (Enable B) pins are not explicitly mentioned in the code, which implies that they are shorted internally. To ensure proper functionality, physically shorten the ENA and ENB pins on the motor driver. This connection is necessary for the correct operation of the code. If these pins are not shorted, the code may not function as expected.</p>

<p><b>Software Installation</b></p>
<p>This section will help you to install the Arduino ide software for programming.</p>
<ul>
    <li>Step 1: Go to the website www.arduino.cc to download the software.</li>
    <li>Step 2: Click on the “windows installer” icon from the bottom of the site.</li>
    <li>Step 3: Begin the download by click “just download” option.</li>
    <li>Step 4: Extract the zip file and start the installation.</li>
    <li>Step 5: Select the installation options.</li>
    <li>Step 6: Choose the installation path.</li>
    <li>Step 7: Finish the installation.</li>
    <li>Step 8: Launch the Arduino IDE.</li>
</ul>

<p><b>Connecting to Arduino IDE</b></p>
<p>Follow the steps below to connect your Chelonia to the Arduino IDE:</p>
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
    <li><b>Board Selection</b>
        <ul>
            <li>Select the Arduino Mega board from the Arduino IDE software. For doubt, please refer the link :Arduino board selection</li>
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
<p>These precautionary measures ensure a robust and reliable hardware setup, minimizing the risk of electrical faults during the operation of your Chelonia.</p>
        </>
      ),
    },
    "Custom Command Follower": {
      type: "experiment",
      content: (
        <>
<p><b>Objective</b></p>
<p>This experiment's objective is to introduce the basic movement capabilities of Chelonia. By executing this code, you will make the Chelonia move forward, stop, turn right, and stop again.</p>

<p><b>Hardware Setup</b></p>
<p>Before running the experiment, ensure that you have assembled the Chelonia hardware as per the assembly instructions in Section 2.1. Additionally, make sure you have connected the Chelonia to the Arduino IDE, as explained in Section 2.3.</p>
<p><b>Motor Pins:</b></p>
<ul>
    <li>Connect the left motor to the following pins:
        <ul>
            <li>Motor 1(ENA): Connect to pin 9</li>
            <li>Motor 1A(IN1): Connect to pin 2</li>
            <li>Motor 1B(IN2): Connect to pin 3</li>
        </ul>
    </li>
    <li>Connect the right motor to the following pins:
        <ul>
            <li>Motor 2(ENA): Connect to pin 10</li>
            <li>Motor 2A(IN3): Connect to pin 4</li>
            <li>Motor 2B(IN4): Connect to pin 5</li>
        </ul>
    </li>
</ul>
<p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>

<p><b>Expected Results</b></p>
<ul>
    <li>Chelonia will move forward for 1 second, followed by a 1-second stop.</li>
    <li>It will then move backward for 1 second and stop again for 1 second.</li>
    <li>Next, the Chelonia will turn right for 1 second and stop for 1 second.</li>
    <li>Afterward, it will turn left for 1 second, and once it stops, the process will repeat.</li>
</ul>
<p>Users have the flexibility to customize the delay values in the provided code according to their specific requirements.</p>
        </>
      ),
    },
    "Chelonia Control Using Mobile App": {
      type: "experiment",
      content: (
        <>
<p><b>Objective</b></p>
<p>The objective of this experiment is to control the Chelonia using the "Arduino Bluetooth Connector" mobile app. By executing this code and using the app, you can make the Chelonia move forward, backward, turn left, turn right, and stop.</p>

<p><b>Setup</b></p>
<p>Before running the experiment, ensure that you have assembled the Chelonia hardware as per the assembly instructions in Section 2.1. Additionally, make sure you have connected the Chelonia to the Arduino IDE, as explained in Section 2.3.</p>
<p><b>Hardware Setup:</b> Connect the hardware as follows to ensure proper functionality.</p>
<p><b>Motor Control Pins:</b></p>
<p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
<ul>
    <li><b>Connect Motor 1:</b>
        <ul>
            <li>PWM input (ENA): Connect to pin 9</li>
            <li>Direction input 1 (IN1): Connect to pin 2</li>
            <li>Direction input 2 (IN2): Connect to pin 3</li>
        </ul>
    </li>
    <li><b>Connect Motor 2:</b>
        <ul>
            <li>PWM input (ENB): Connect to pin 10</li>
            <li>Direction input 1 (IN3): Connect to pin 4</li>
            <li>Direction input 2 (IN4): Connect to pin 5</li>
        </ul>
    </li>
</ul>
<p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 4 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>

<p><b>Mobile App Setup</b></p>
<ul>
    <li>Download and install the "Arduino Bluetooth Connector" app from the Play Store.</li>
    <li>Pair your mobile device with the HC-05 Bluetooth module.</li>
</ul>

<p><b>Usage Instructions</b></p>
<ul>
    <li>Open the "Arduino Bluetooth Connector" app on your mobile device.</li>
    <li>Connect to the HC-05 Bluetooth module.</li>
    <li>Use the on-screen controls to send commands to the Chelonia:
        <ul>
            <li>F: Move forward</li>
            <li>B: Move backward</li>
            <li>L: Turn left</li>
            <li>R: Turn right</li>
            <li>S: Stop</li>
        </ul>
    </li>
</ul>
<p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino after uploading the code.</p>

<p><b>Common Issues:</b></p>
<ul>
    <li><b>Bluetooth connection issues:</b> If your device is connected, but not appearing in the mobile app, troubleshoot by checking the Bluetooth pairing settings and ensuring the HC-05 module is connected. If the issue persists, a simple resolution is to press the reset button on the HC-05, which often resolves connectivity problems.</li>
</ul>

<p><b>Frequently Asked Questions (FAQs)</b></p>
<ul>
    <li>
        <p><b>Q: Can I use a different Bluetooth app for control?</b></p>
        <p>A: Yes, if the app allows sending characters 'F,' 'B,' 'L,' 'R,' and 'STOP' over Bluetooth.</p>
    </li>
    <li>
        <p><b>Q: How can I modify the code for different motor speeds?</b></p>
        <p>A: Adjust the values passed to the analogWrite() functions in the code for different motor speeds.</p>
    </li>
</ul>
        </>
      ),
    },
    "Wireless Controlled": {
      type: "experiment",
      content: (
        <>
<p><b>Objective</b></p>
<p>The objective of this experiment is to wirelessly control the Chelonia using the "MR Remote" mobile app. By executing this code and using the app, you can make the Chelonia move forward, backward, turn left, turn right, and stop.</p>

<p><b>Setup</b></p>
<p>Before running the experiment, ensure that you have assembled the Chelonia hardware as per the assembly instructions in Section 2.1. Additionally, make sure you have connected the Chelonia to the Arduino IDE, as explained in Section 2.3.</p>
<p><b>Hardware Setup:</b></p>
<p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
<ul>
<li><b>Motor 1:</b>
<ul>
<li>Direction input 1 (IN1): pin 2</li>
<li>Direction input 2 (IN2): pin 3</li>
<li>PWM pin (ENA): pin 9</li>
</ul>
</li>
<li><b>Motor 2:</b>
<ul>
<li>Direction input 1 (IN3): pin 4</li>
<li>Direction input 2 (IN4): pin 5</li>
<li>PWM pin (ENA): pin 10</li>
</ul>
</li>
</ul>
<p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>

<p><b>Mobile App Setup</b></p>
<ul>
<li>Download the “Blue Duino" app from the provided link: Mobile application (it is available on the Play Store).</li>
<li>Open the app and connect to the Arduino device through Bluetooth.</li>
</ul>

<p><b>Usage Instructions</b></p>
<ul>
<li>Open the "MR Remote" app on your mobile device.</li>
<li>Connect to the Arduino device via Bluetooth.</li>
<li>Use the on-screen controls to send commands to the Chelonia:
<ul>
<li>F: Move forward</li>
<li>B: Move backward</li>
<li>L: Turn left</li>
<li>R: Turn right</li>
<li>Any other character: Stops both motors.</li>
</ul>
</li>
</ul>

<p><b>Expected Results</b></p>
<p>The Chelonia should respond to the commands sent from the "MR Remote" app, resulting in various movements, as specified by the controls.</p>

<p><b>Frequently Asked Questions (FAQs)</b></p>
<ul>
<li>
<p><b>Q: What should I do if the app is unable to connect to the Arduino device?</b></p>
<p>A: Ensure that Bluetooth is enabled on both your mobile device and the Arduino and restart the app for a fresh connection.</p>
</li>
<li>
<p><b>Q: Can I modify the code for different motor speeds?</b></p>
<p>A: Yes, you can adjust the delay values in the code for different motor speeds.</p>
</li>
</ul>
        </>
      ),
    },
    "Bluetooth Speed Control": {
      type: "experiment",
      content: (
        <>
             <p>This experiment's objective is to manually control the speed of a two-motor robot by sending speed values via the Serial Monitor. The robot's motors will drive the robot forward when a positive speed value is provided. The robot will stop when no speed value or a non-positive value is sent.</p>

    <h3>Setup</h3>
    <p>Before running the experiment, ensure that you have assembled the Chelonia hardware as per the assembly instructions in Section 2.1. Additionally, make sure you have connected the Chelonia to the Arduino IDE, as explained in Section 2.3.</p>
    
    <p><b>Hardware Setup:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <h3>Usage Instructions</h3>
    <ul>
        <li>Upload the code to the Arduino board.</li>
        <li>Open the Serial Monitor in Bluetooth app.</li>
        <li>Enter a speed value between 0 and 255 (inclusive) and press "Send" or "Enter".</li>
        <li>The robot will move forward at the specified speed.</li>
        <li>To stop the robot, enter "0" or a negative value and send it via the Serial Monitor.</li>
        <li>The robot will stop moving.</li>
    </ul>

    <h3>Expected Results</h3>
    <p>The Chelonia should respond to the adjusted potentiometer value, resulting in varied speeds as the push button is pressed.</p>

    <h3>Frequently Asked Questions (FAQs)</h3>
    <ul>
        <li>
            <p><b>Q: Can I modify the code for different motor behaviors?</b></p>
            <p>A: Yes, you can customize the code to implement various motor behaviors by adjusting the logic in the moveForward() and stopMotors() functions.</p>
        </li>
        <li>
            <p><b>Q: How does the potentiometer affect the robot's speed?</b></p>
            <p>A: Turning the potentiometer adjusts the analog input, mapped to PWM values, thereby controlling the speed of both motors.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Staircase Detection Robot": {
      type: "experiment",
      content: (
        <>
        <p><b>Objective</b></p>
  <p>The objective of this experiment is to create an Edge Detection Robot using Chelonia. The robot should autonomously navigate its environment by detecting obstacles with HC-SR04 ultrasonic sensors.</p>

    <p><b>Setup</b></p>
    <p>Before running the experiment, ensure that you have assembled the Chelonia hardware as per the assembly instructions in Section 2.1. Additionally, make sure you have connected the Chelonia to the Arduino IDE, as explained in Section 2.3.</p>

    <p><b>Hardware Setup</b></p>
    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>Ultrasonic pins:</b></p>
    <p>To connect the ultrasonic sensor, a dedicated connector is already available on the PCB board, making the process straightforward. Simply align the sensor with the corresponding labels on the PCB to ensure proper connection. For additional clarity, the pin configurations are provided below. This setup simplifies the connection process and reduces the risk of errors.</p>
    <ul>
        <li>Triger pin: pin 14</li>
        <li>Echo pin: pin15</li>
        <li>Vcc: 5v</li>
        <li>Gnd: Gnd</li>
    </ul>

    <p><b>Usage Instructions</b></p>
    <ul>
        <li>Ensure the Edge Detection Robot is placed in an environment with obstacles.</li>
        <li>Observe the robot's autonomous navigation based on the ultrasonic sensor readings.</li>
        <li>Adjust the robot's response to obstacles by modifying the code logic.</li>
    </ul>

    <p><b>Expected Results</b></p>
    <p>The Chelonia should autonomously navigate, avoiding obstacles based on the readings from the HC-SR04 ultrasonic sensors.</p>

    <p><b>Frequently Asked Questions (FAQs)</b></p>
    <ul>
        <li>
            <p><b>Q: How does the robot detect obstacles?</b></p>
            <p>A: The HC-SR04 ultrasonic sensors are used to measure the distance between the robot and obstacles. The robot reacts based on the sensor readings to avoid collisions.</p>
        </li>
        <li>
            <p><b>Q: Can I customize the robot's response to obstacles?</b></p>
            <p>A: Yes, you can modify the code to change the robot's behavior in response to obstacles by adjusting the logic in the loop () function.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Tilt Tracking Using IMU": {
      type: "experiment",
      content: (
        <>
  <p><b>Objective</b></p>
    <p>This experiment's objective is to create a two-wheel robot activated by a push button and monitored for turning angles using an Inertial Measurement Unit (IMU). The IMU provides real-time angle data, and the robot moves forward when the push button is pressed.</p>

    <p><b>Setup</b></p>
    <p>Before starting the experiment, ensure the Chelonia is assembled according to the hardware setup instructions provided in Section 2.1. Additionally, connect the Chelonia to the Arduino IDE following the guidelines in Section 2.3.</p>

    <p><b>Hardware Setup</b></p>
    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>IMU:</b></p>
    <p>Connect the IMU sensor to its designated position on the PCB board, ensuring a correct and secure connection. The board features a pre-installed IMU connector, eliminating the possibility of incorrect connections and making the process straightforward for users. For additional guidance, please refer to the detailed pin connection information provided below. Ensure the following connections:</p>
    <ul>
        <li>VCC to 5V on Arduino</li>
        <li>GND to GND on Arduino</li>
        <li>SDA (Serial Data) to SDA on Arduino pin:20</li>
        <li>SCL (Serial Clock) to SCL on Arduino pin: 21</li>
    </ul>

    <p><b>Bluetooth Module HC-05:</b></p>
    <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>

    <p><b>Libraries</b></p>
    <p>The required libraries for this experiment are:</p>
    <ul>
        <li>MPU6050_light (This library is included in the Arduino IDE by default.) You just installed it from the library manager .library install</li>
        <li>Software Serial library (Included in Arduino IDE)</li>
    </ul>

    <p><b>Usage Instructions</b></p>
    <ul>
        <li>Download the "Bluetooth Serial Monitor" app from the Play Store.</li>
        <li>Open the Arduino IDE, load the provided code, and upload it to the Arduino board.</li>
        <li>Turn on the Chelonia and connect to the Bluetooth module.</li>
        <li>Open the "Bluetooth Serial Monitor" app on your mobile device.</li>
        <li>Press and hold the push button to make the robot move forward.</li>
        <li>Release the push button to stop the robot.</li>
    </ul>
        </>
      ),
    },
    "Voice Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective</b></p>
    <p>The objective of this experiment is to create a voice-controlled robot using a Bluetooth module and the "Arduino Bluetooth Connector" mobile application. The robot should respond to specific voice commands to move forward, backward, left, right, or stop.</p>

    <p><b>Setup</b></p>
    <p>Before proceeding, ensure that you have completed the Chelonia assembly and connected it to the Arduino Mega following the instructions in Sections 2.1 and 2.3.</p>

    <p><b>Hardware Connections:</b></p>
    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>
    <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>

    <p><b>Mobile Application:</b></p>
    <p>To download the required mobile application, "Arduino Bluetooth Connector," simply visit the Play Store on your Android device and search for the app, or conveniently click on the provided link for quick access. This app is essential for establishing a connection between your mobile device and the Chelonia's Bluetooth module, enabling seamless voice control.</p>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li>Power up the Chelonia and ensure the Bluetooth module is paired with the mobile device.</li>
        <li>Open the "Arduino Bluetooth Connector" app on your mobile device.</li>
        <li>Establish a connection between the app and the Bluetooth module.</li>
        <li>Send voice commands ('F' for forward, 'B' for backward, 'L' for left, 'R' for right, 'S' for stop) through the app. For example, to move robot forward Set voice command as go and command to send as F. Likewise set voice command as back and command to send as B to move the robot backward. Follow the same procedure for moving the robot left, right and stop.</li>
    </ul>

    <p><b>Expected Results:</b></p>
    <p>The Chelonia should respond to voice commands and move accordingly.</p>
    
    <p><b>Frequently Asked Questions (FAQs):</b></p>
    <ul>
        <li>
            <p><b>Q: What should I do if the robot does not respond to voice commands?</b></p>
            <p>A: Ensure that the Bluetooth module is properly connected, the app is paired, and the commands are sent correctly.</p>
        </li>
        <li>
            <p><b>Q: Can I customize the voice commands?</b></p>
            <p>A: Yes, you can modify the execute Command () function in the code to change the corresponding actions for different voice commands.</p>
        </li>
        <li>
            <p><b>Q: How do I stop the robot?</b></p>
            <p>A: Send the 'S' command through the app to stop the robot.</p>
        </li>
    </ul>

    <p><b>Additional Notes:</b></p>
    <ul>
        <li>Make sure your mobile device's Bluetooth is enabled and connected to the module before sending commands.</li>
    </ul>
        </>
      ),
    },
    "Shape Forming Robot": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective</b></p>
    <p>This innovative robot is designed to create specific shapes, introducing you to the fascinating world of robotic movements. This user manual will guide you through the setup and operation of your Shape Forming Robot.</p>
    
    <p><b>Setup</b></p>
    <ul>
        <li>Assemble the Chelonia hardware following the instructions in Section 2.1.</li>
        <li>Connect the Chelonia to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>Hardware Connections:</b></p>
    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>
    <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>

    <p><b>Usage Instructions</b></p>
    <p><b>Terminal</b></p>
    <p>Open the Terminal in the Arduino Bluetooth controller application. For any doubts, please refer previous Bluetooth controlled experiment.</p>
    <p><b>Enter Commands</b></p>
    <p>Type the following commands in the Serial Monitor and press Enter:</p>
    <ul>
        <li>'L' - Move in L-shape.</li>
        <li>'O' - Move in a circular motion.</li>
        <li>Default condition it stops.</li>
    </ul>
    <p><b>Observe Movement</b></p>
    <p>As you send commands, observe how the robot responds, creating the desired shapes.</p>

    <p><b>Expected Output:</b></p>
    <p>Upon successfully executing the provided code and following the instructions in this user manual, you can anticipate the following outcomes:</p>
    <ul>
        <li><b>L-Shape Movement:</b>
            <p>When the command 'L' is sent through the mobile application, the Chelonia Robot will perform an L-shaped movement. Observe the robot moving forward for a specified duration, followed by a stop. Subsequently, it will execute a right turn, pause again, and finally move forward once more.</p>
        </li>
        <li><b>Circular Motion:</b>
            <p>Upon sending the command 'O,' the Chelonia Robot will initiate a circular motion. You can expect the robot to rotate clockwise, creating a circular path. Adjustments to the delay time in the code can control the speed of this rotational movement.</p>
        </li>
    </ul>
    
    <p><b>Note:</b> Ensure that the Bluetooth connection is stable, the motor connections are correct, and the code is uploaded successfully for the Chelonia Robot to exhibit the expected output. Feel free to experiment and modify the code to achieve different shapes and motions.</p>
        </>
      ),
    },
    "ObstacleAlert Robot": {
      type: "experiment",
      content: (
        <>
<p><b>Objective</b></p>
    <p>The objective of this experiment is to create an Obstacle Alert Robot using a Chelonia. The Chelonia is equipped with ultrasonic sensors to detect obstacles, and a buzzer is activated when an obstacle is detected within a certain range. The robot stops moving forward to avoid collisions when obstacles are close.</p>
    
    <p><b>Hardware Setup:</b></p>
    <ul>
        <li>Connect the motors to the Chelonia following the instructions provided in Section 2.1.</li>
        <li>Connect the Chelonia to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>Ultrasonic pins:</b></p>
    <p>To connect the ultrasonic sensor, a dedicated connector is already available on the PCB board, making the process straightforward. Simply align the sensor with the corresponding labels on the PCB to ensure proper connection. For additional clarity, the pin configurations are provided below. This setup simplifies the connection process and reduces the risk of errors.</p>
    <ul>
        <li>Triger pin: pin 16</li>
        <li>Echo pin: pin 17</li>
        <li>Vcc: 5v</li>
        <li>Gnd: Gnd</li>
    </ul>
    
    <p>To connect the buzzer to the PCB board, first locate the designated connector on the board, which is specifically designed for this purpose. The connector is pre-configured to accommodate the buzzer, making the installation process straightforward. Simply align the buzzer's pins with the connector's pin slots, ensuring that they match the pin numbers provided. Once aligned, gently press the buzzer into place until it is securely connected. This setup allows the user to easily integrate the buzzer into the system without requiring additional modifications or complex wiring, ensuring a reliable and efficient connection.</p>
    <ul>
        <li>Pin number: One leg to Gnd and connect the other pin to Pin-26</li>
    </ul>

    <p><b>Expected Results:</b></p>
    <ul>
        <li>The Chelonia should navigate the environment, stopping and alerting when obstacles are detected within a range of 20 units.</li>
        <li>The buzzer will produce a beeping sound when obstacles are detected.</li>
    </ul>

    <p><b>Additional Information:</b></p>
    <ul>
        <li>Adjust the distance threshold in the code to modify the obstacle detection range.</li>
        <li>This experiment demonstrates a basic obstacle avoidance mechanism using ultrasonic sensors.</li>
    </ul>

    <p><b>FAQs:</b></p>
    <ul>
        <li>
            <p><b>Q: Can I modify the distance threshold for obstacle detection?</b></p>
            <p>A: Yes, you can adjust the distance threshold in the code to customize the obstacle detection range. Look for the condition if distance less than 20 and change the value "20" to your desired distance.</p>
        </li>
        <li>
            <p><b>Q: How can I change the buzzer sound duration?</b></p>
            <p>A: You can modify the delay values associated with buzzer activation and deactivation in the code. Adjust the values inside the delay () functions to change the duration of the beep.</p>
        </li>
    </ul>
        </>
      ),
    },
    "Humidity Monitoring Robo": {
      type: "experiment",
      content: (
        <>
  <p><b>Objective:</b></p>
    <p>The objective of this experiment is to create a temperature monitoring robot equipped with a humidity and temperature sensor (DHT11), ultrasonic sensor for obstacle detection, and Bluetooth communication for data transmission.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the Chelonia hardware following the instructions in Section 2.1.</li>
        <li>Connect the Chelonia to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>DHT sensor:</b></p>
    <p>To connect the DHT sensor pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li>VCC-VCC</li>
        <li>GND-GND</li>
        <li>Data- Pin 25</li>
    </ul>
    <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>

    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>Ultrasonic pins:</b></p>
    <p>To connect the ultrasonic sensor, a dedicated connector is already available on the PCB board, making the process straightforward. Simply align the sensor with the corresponding labels on the PCB to ensure proper connection. For additional clarity, the pin configurations are provided below. This setup simplifies the connection process and reduces the risk of errors.</p>
    <ul>
        <li>Triger pin: pin 16</li>
        <li>Echo pin: pin 17</li>
        <li>Vcc: 5v</li>
        <li>Gnd: Gnd</li>
    </ul>

    <p><b>Libraries:</b></p>
    <ul>
        <li>DHT Library:</li>
        <li>Adafruit_Sensor library</li>
    </ul>
    <p>To download the DHT library and Adafruit_Sensor library, click on the following link: DHT library ZIP file , adafruit_Sensor</p>
    <p>After downloading the zip file, open the Arduino IDE. Navigate to the 'Sketch' menu, select 'Include Library,' and choose 'Add .ZIP Library. Locate the downloaded zip file, click 'Open,' and the Arduino IDE will install the library. Now you can use the DHT library in your Arduino sketches for the weather monitoring robot project. To ensure a smooth installation process, please refer to this link DHT library arduino</p>
    <p><b>Example Code:</b> Humidity monitoring Robo</p>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Upload the Code:</b>
            <p>Upload the provided Arduino code to the Arduino board.</p>
        </li>
        <li><b>Serial Monitor:</b>
            <p>Open the Arduino IDE Serial Monitor (Tools - Serial Monitor).</p>
            <p>Set the baud rate to 9600.</p>
        </li>
        <li><b>Bluetooth Communication:</b>
            <p>Use a Bluetooth-enabled device and connect to the Bluetooth module on the robot.</p>
            <p>Monitor temperature readings on the connected device.</p>
        </li>
        <li><b>Obstacle Detection:</b>
            <p>The robot moves forward continuously unless an obstacle is detected.</p>
            <p>If an obstacle is detected, the robot stops and turns left.</p>
        </li>
    </ul>

    <p><b>FAQ (Frequently Asked Questions):</b></p>
    <ul>
        <li>
            <p><b>Q: How do I install the DHT library?</b></p>
            <p>A: Open Arduino IDE - Sketch - Include Library - Manage Libraries - Search for "DHT" - Install.</p>
        </li>
        <li>
            <p><b>Q: Can I use a different type of DHT sensor?</b></p>
            <p>A: Yes, update the DHTTYPE constant in the code accordingly (DHT11 or DHT22).</p>
        </li>
        <li>
            <p><b>Q: The robot is not moving. What could be the issue?</b></p>
            <p>A: Check motor connections, power supply, and ensure that the Bluetooth module is connected.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust the obstacle detection distance?</b></p>
            <p>A: Modify the distance threshold in the checkObstacle function (e.g., change distance less than 10 to a different value).</p>
        </li>
    </ul>
        </>
      ),
    },
    "Smoke Detecting Robot": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The objective of this experiment is to create a fire-detecting robot that can sense the presence of fire using a gas sensor. Upon detecting a certain level of gas, the robot activates an alarm (buzzer) and stops its movement.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the robot hardware according to the instructions in Section 2.1.</li>
        <li>Connect the robot to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>Hardware Assembly:</b></p>
    <ul>
        <li>Connect the buzzer to digital pin 26 on the Arduino.</li>
        <li>Connect the gas sensor to analog pin A0 on the Arduino. Please refer the link for the connection: Gas sensor Arduino connection</li>
        <li>Connect the motor control pins:
            <ul>
                <li>ENA to pin 9 (PWM of Motor A)</li>
                <li>IN1 to pin 2 (Input 1 of Motor A)</li>
                <li>IN2 to pin 3 (Input 2 of Motor A)</li>
                <li>ENB to pin 10 (PWM of Motor B)</li>
                <li>IN3 to pin 4 (Input 1 of Motor B)</li>
                <li>IN4 to pin 5 (Input 2 of Motor B)</li>
            </ul>
        </li>
    </ul>
    
    <p><b>Code Example:</b> Fire Detecting Robo</p>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Power On:</b>
            <ul>
                <li>Connect the Arduino to a power source.</li>
                <li>Ensure that the gas sensor is properly positioned to detect the presence of fire.</li>
            </ul>
        </li>
        <li><b>Operation:</b>
            <ul>
                <li>The robot will continuously monitor the gas sensor readings.</li>
                <li>If the gas level surpasses a threshold (value greater than 120), indicating the presence of fire, the robot will:
                    <ul>
                        <li>Trigger the buzzer alarm.</li>
                        <li>Stop its movement.</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>Indication:</b>
            <ul>
                <li>The serial monitor will display the analog readings from the gas sensor.</li>
                <li>"GAS Detected!" will be printed if the gas level exceeds the threshold.</li>
            </ul>
        </li>
        <li><b>Reset:</b>
            <ul>
                <li>To restart the robot, remove the fire source or lower the gas levels.</li>
                <li>Press the reset button on the Arduino if needed.</li>
            </ul>
        </li>
    </ul>

    <p><b>Expected Results:</b></p>
    <p>The robot should promptly respond to the detection of fire by activating the sounding of the buzzer and halting its movement. The serial monitor provides real-time feedback on gas sensor readings.</p>

    <p><b>Additional Information:</b></p>
    <p>This experiment highlights a basic fire-detecting mechanism using a gas sensor, offering potential applications in safety and security systems.</p>

    <p><b>FAQs:</b></p>
    <ul>
        <li>
            <p><b>Q. What should I do if the robot does not stop when gas is detected?</b></p>
            <p>A. Check the connections and ensure the gas sensor is functioning correctly. Adjust the threshold if needed.</p>
        </li>
        <li>
            <p><b>Q. Can I modify the code for different motor speeds?</b></p>
            <p>A. Certainly, adjust the PWM values in the code for moveForward() as per your requirements.</p>
        </li>
        <li>
            <p><b>Q. How can I extend the functionality of this robot?</b></p>
            <p>A. You can integrate additional sensors, communication modules, or enhance the alarm system for specific applications.</p>
        </li>
    </ul>
        </>
      ),
    },

    "Obstacle Based Speed Control": {
      type: "experiment",
      content: (
        <>
          <p>Control speed of motors via Bluetooth commands.</p>
    <p><b>Objective:</b></p>
    <p>The objective of this experiment is to implement an obstacle-based speed control system using a Chelonia. The Chelonia is equipped with an ultrasonic sensor that detects obstacles. Based on the detected obstacle's distance, the robot adjusts its speed and communicates the status to a mobile app via Bluetooth.</p>

    <p><b>Hardware Setup:</b></p>
    <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>

    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>Ultrasonic pins:</b></p>
    <p>To connect the ultrasonic sensor, a dedicated connector is already available on the PCB board, making the process straightforward. Simply align the sensor with the corresponding labels on the PCB to ensure proper connection. For additional clarity, the pin configurations are provided below. This setup simplifies the connection process and reduces the risk of errors.</p>
    <ul>
        <li>Triger pin: pin 16</li>
        <li>Echo pin: pin 17</li>
        <li>Vcc: 5v</li>
        <li>Gnd: Gnd</li>
    </ul>

    <p><b>Bluetooth App Setup:</b></p>
    <ul>
        <li>Download and install “Bluetooth serial monitor” app from play store.</li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li>Power on the Chelonia.</li>
        <li>Open the Bluetooth terminal app on your mobile device.</li>
        <li>Observe the distance readings from the ultrasonic sensor displayed in the app.</li>
        <li>The Chelonia adjusts its speed based on the obstacle distance:
            <ul>
                <li>If the distance is greater than or equal to 80 cm, the robot moves forward with full speed.</li>
                <li>If the distance is between 50 cm and 80 cm, the robot moves forward with a speed of 175.</li>
                <li>If the distance is between 10 cm and 50 cm, the robot moves forward with a speed of 100 cm.</li>
                <li>If the distance is less than 10 cm, the robot stops.</li>
            </ul>
        </li>
    </ul>

    <p><b>Expected Results:</b></p>
    <ul>
        <li>The Chelonia should adjust its speed based on the detected obstacle distance.</li>
        <li>Distance readings and corresponding status messages should be displayed in the Bluetooth terminal app.</li>
    </ul>

    <p><b>Additional Information:</b></p>
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
  <p><b>Objective:</b></p>
    <p>The objective of this experiment is to implement obstacle detection using an IR sensor on a Chelonia. The Chelonia is equipped with two IR sensors that detect obstacles in its path. When an obstacle is detected, the robot stops, and when no obstacle is present, it continues moving forward.</p>

    <p><b>Hardware Setup:</b></p>
    <ul>
        <li>Connect the Chelonia to the Arduino IDE as explained in Section 2.3.</li>
        <li>To connect the IR sensors to the PCB, ensure that you identify the correct IR sensors based on the pin numbers provided below, as there are two IR sensors present. The proper connector for the IR sensors is already available on the board, which helps prevent connection errors. Connect the VCC, GND, and output pin of the IR sensors to pin 22 and pin 23 on the PCB, ensuring a secure and correct connection. This setup will help avoid any potential faults in the connections.</li>
    </ul>

    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li>Power on the Chelonia.</li>
        <li>Observe the serial monitor in the Arduino IDE or a terminal to see real-time updates.</li>
        <li>The IR sensors continuously read values.</li>
        <li>If the IR sensor's value falls below the threshold (adjust IR_THRESHOLD as needed), the robot considers an obstacle detected.</li>
        <li>The Chelonia stops moving when an obstacle is detected.</li>
        <li>When no obstacle is detected, the Chelonia moves forward.</li>
    </ul>

    <p><b>Expected Results:</b></p>
    <ul>
        <li>The Chelonia should stop when an obstacle is detected by the IR sensors.</li>
        <li>The Chelonia should move forward when no obstacle is present.</li>
    </ul>

    <p><b>Frequently Asked Questions (FAQs):</b></p>
    <ul>
        <li>
            <p><b>What does the IR sensor measure in this experiment?</b></p>
            <p>The IR sensors measure the infrared reflection from nearby objects. When an object is detected, the reflected IR light changes, indicating the presence of an obstacle.</p>
        </li>
        <li>
            <p><b>How do I adjust the sensitivity of the IR sensor?</b></p>
            <p>The sensitivity is controlled by the threshold value (IR_THRESHOLD) in the code. Experiment with different threshold values to find the optimal setting based on your environment.</p>
        </li>
        <li>
            <p><b>Q. What should I do if the Chelonia does not respond to joystick movements?</b></p>
            <p>A: Check the connections of the joystick and motors. Ensure that the pins specified in the code match your hardware configuration.</p>
        </li>
        <li>
            <p><b>Q. How can I enhance the responsiveness of the Chelonia to joystick movements?</b></p>
            <p>A: Experiment with the delay in the code. Smaller delays may result in more responsive control, while larger delays can provide smoother movements.</p>
        </li>
    </ul>
        </>
      ),
    },
    "Human Following Robot": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The objective of this experiment is to create a robot that can follow a person by detecting their presence and making turns based on infrared sensor inputs.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the Chelonia hardware following the instructions in Section 2.1.</li>
        <li>Connect the Chelonia to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENB): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>Infrared Sensor Connections:</b></p>
    <p>To connect the IR sensor, two connectors are already placed on the PCB board. These allow the IR sensor pins to be directly connected to the board, helping to avoid faulty connections in the hardware. For further clarification, the pin details are provided below.</p>
    <ul>
        <li>Left IR pin number 22.</li>
        <li>Right IR pin number 23.</li>
    </ul>

    <p><b>Ultrasonic pins:</b></p>
    <p>To connect the ultrasonic sensor, a dedicated connector is already available on the PCB board, making the process straightforward. Simply align the sensor with the corresponding labels on the PCB to ensure proper connection. For additional clarity, the pin configurations are provided below. This setup simplifies the connection process and reduces the risk of errors.</p>
    <ul>
        <li>Triger pin: pin 16</li>
        <li>Echo pin: pin 17</li>
        <li>Vcc: 5v</li>
        <li>Gnd: Gnd</li>
    </ul>
    
    <p><b>Power Supply:</b></p>
    <ul>
        <li>Ensure that the robot is powered appropriately.</li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Upload the Code:</b>
            <ul>
                <li>Upload the provided Arduino code to the Arduino board.</li>
            </ul>
        </li>
        <li><b>Serial Monitor:</b>
            <ul>
                <li>Open the Arduino IDE Serial Monitor (Tools - Serial Monitor).</li>
                <li>Set the baud rate to 9600.</li>
            </ul>
        </li>
        <li><b>Testing:</b>
            <ul>
                <li>Place the robot in an accessible area.</li>
                <li>Ensure the ultrasonic sensor has a clear view.</li>
                <li>Observe the Serial Monitor for distance readings and sensor status.</li>
            </ul>
        </li>
        <li><b>Interpreting Sensor Readings:</b>
            <ul>
                <li>Distance: Displays the distance measured by the ultrasonic sensor.</li>
                <li>RSD (Right Sensor Detection): 0 if an object is detected, 1 otherwise.</li>
                <li>LSD (Left Sensor Detection): 0 if an object is detected, 1 otherwise.</li>
            </ul>
        </li>
        <li><b>Robot Behavior:</b>
            <ul>
                <li><b>Stop:</b> If an object is too close (distance  10), the robot stops moving.</li>
                <li><b>Right Turn:</b> If only the right sensor detects an object.</li>
                <li><b>Left Turn:</b> If only the left sensor detects an object.</li>
                <li><b>Forward:</b> If both sensors detect an object or the distance is within a specified range.</li>
                <li><b>Stop:</b> If none of the above conditions are met.</li>
            </ul>
        </li>
        <li><b>Adjustment:</b>
            <ul>
                <li>Modify MIN_DISTANCE and MAX_DISTANCE to adjust the distance range for straight movement.</li>
            </ul>
        </li>
    </ul>

    <p><b>Expected Results:</b></p>
    <p>The robot should respond to obstacles and sensor inputs by making turns or stopping accordingly.</p>

    <p><b>FAQ (Frequently Asked Questions):</b></p>
    <ul>
        <li>
            <p><b>Q: The robot is not responding to obstacles. What could be the issue?</b></p>
            <p>A: Ensure that the infrared sensors are connected correctly. Check the wiring and adjust the sensitivity.</p>
        </li>
        <li>
            <p><b>Q: Can I modify the distance range for straight movement?</b></p>
            <p>A: Yes, you can adjust the MIN_DISTANCE and MAX_DISTANCE variables in the code.</p>
        </li>
    </ul>
        </>
      ),
    },
    "Temperature Monitoring Robot": {
      type: "experiment",
      content: (
        <>
   <p><b>Objective:</b></p>
    <p>The objective of this experiment is to create a temperature monitoring robot equipped with a humidity and temperature sensor (DHT11), ultrasonic sensor for obstacle detection, and Bluetooth communication for data transmission.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the Chelonia hardware following the instructions in Section 2.1.</li>
        <li>Connect the Chelonia to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>DHT sensor:</b></p>
    <p>To connect the DHT sensor pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li>VCC-VCC</li>
        <li>GND-GND</li>
        <li>Data- Pin 25</li>
    </ul>
    <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>

    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>Ultrasonic pins:</b></p>
    <p>To connect the ultrasonic sensor, a dedicated connector is already available on the PCB board, making the process straightforward. Simply align the sensor with the corresponding labels on the PCB to ensure proper connection. For additional clarity, the pin configurations are provided below. This setup simplifies the connection process and reduces the risk of errors.</p>
    <ul>
        <li>Triger pin: pin 16</li>
        <li>Echo pin: pin 17</li>
        <li>Vcc: 5v</li>
        <li>Gnd: Gnd</li>
    </ul>

    <p><b>Power Supply:</b></p>
    <ul>
        <li>Ensure that the robot is powered appropriately. Motors and sensors may require different voltage levels.</li>
    </ul>

    <p><b>Libraries:</b></p>
    <ul>
        <li>DHT Library:</li>
        <li>Adafruit_Sensor library</li>
    </ul>
    <p>To download the DHT library and Adafruit_Sensor library, click on the following link: DHT library ZIP file , adafruit_Sensor</p>
    <p>After downloading the zip file, open the Arduino IDE. Navigate to the 'Sketch' menu, select 'Include Library,' and choose 'Add .ZIP Library. Locate the downloaded zip file, click 'Open,' and the Arduino IDE will install the library. Now you can use the DHT library in your Arduino sketches for the weather monitoring robot project. To ensure a smooth installation process, please refer to this link DHT library arduino</p>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Upload the Code:</b>
            <ul>
                <li>Upload the provided Arduino code to the Arduino board.</li>
            </ul>
        </li>
        <li><b>Serial Monitor:</b>
            <ul>
                <li>Open the Arduino IDE Serial Monitor (Tools - Serial Monitor).</li>
                <li>Set the baud rate to 9600.</li>
            </ul>
        </li>
        <li><b>Bluetooth Communication:</b>
            <ul>
                <li>Use a Bluetooth-enabled device and connect to the Bluetooth module on the robot.</li>
                <li>Monitor temperature readings on the connected device.</li>
            </ul>
        </li>
        <li><b>Obstacle Detection:</b>
            <ul>
                <li>The robot moves forward continuously unless an obstacle is detected.</li>
                <li>If an obstacle is detected, the robot stops and turns left.</li>
            </ul>
        </li>
    </ul>

    <p><b>FAQ (Frequently Asked Questions):</b></p>
    <ul>
        <li>
            <p><b>Q: How do I install the DHT library?</b></p>
            <p>A: Open Arduino IDE - Sketch - Include Library - Manage Libraries - Search for "DHT" - Install.</p>
        </li>
        <li>
            <p><b>Q: Can I use a different type of DHT sensor?</b></p>
            <p>A: Yes, update the DHTTYPE constant in the code accordingly (DHT11 or DHT22).</p>
        </li>
        <li>
            <p><b>Q: The robot is not moving. What could be the issue?</b></p>
            <p>A: Check motor connections, power supply, and ensure that the Bluetooth module is connected.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust the obstacle detection distance?</b></p>
            <p>A: Modify the distance threshold in the checkObstacle function (e.g., change distance 10 to a different value).</p>
        </li>
    </ul>
        </>
      ),
    },
    "Computer Operated Chelonia": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The Computer Operated Chelonia experiment allows you to control the movements of a Chelonia using commands sent from your computer to the Arduino board. The bot can move forward, backward, turn left, turn right, or stop based on the received commands.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the Chelonia hardware following the instructions in Section 2.1.</li>
        <li>Connect the Chelonia to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>Motor connections</b></p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>PWM input (motor1PWM) ENA: Arduino pin 9</li>
                <li>Direction input 1 (motor1Dir1) IN1: Arduino pin 2</li>
                <li>Direction input 2 (motor1Dir2) IN2: Arduino pin 3</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>PWM input (motor2PWM) ENB: Arduino pin 10</li>
                <li>Direction input 1 (motor2Dir1) IN3: Arduino pin 4</li>
                <li>Direction input 2 (motor2Dir2) IN4: Arduino pin 5</li>
            </ul>
        </li>
    </ul>

    <p><b>Usage instructions:</b></p>
    <ul>
        <li>Connect the power supply to the robot.</li>
        <li>Open the Serial Monitor in the Arduino IDE (Tools  Serial Monitor).</li>
        <li>Send commands from the computer to control the robot:
            <ul>
                <li>'f': Move forward</li>
                <li>'b': Move backward</li>
                <li>'l': Turn left</li>
                <li>'r': Turn right</li>
                <li>'s': Stop</li>
            </ul>
        </li>
    </ul>
    
    <p><b>Note:</b> Ensure proper precautions when connecting and disconnecting components and avoid short circuits. Always disconnect the power supply when making changes to the circuit.</p>
        </>
      ),
    },
    "Wall Follow Robot": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The objective of this experiment is to create a wall-following robot using ultrasonic sensors and a PID controller. The robot should navigate by following a wall, adjusting its direction based on sensor inputs.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the robot hardware as per the provided instructions in Section 2.1.</li>
        <li>Connect the robot to the Arduino IDE following the guidelines in Section 2.3.</li>
    </ul>

    <p><b>Motor Control Pins:</b></p>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 2</li>
                <li>Direction input 2 (IN2): pin 3</li>
                <li>PWM pin (ENA): pin 9</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 4</li>
                <li>Direction input 2 (IN4): pin 5</li>
                <li>PWM pin (ENA): pin 10</li>
            </ul>
        </li>
    </ul>

    <p><b>Ultrasonic pins:</b></p>
    <p>To connect the ultrasonic sensor, a dedicated connector is already available on the PCB board, making the process straightforward. Simply align the sensor with the corresponding labels on the PCB to ensure proper connection. For additional clarity, the pin configurations are provided below. This setup simplifies the connection process and reduces the risk of errors.</p>
    <ul>
        <li>For first sensor, Triger pin: pin 16</li>
        <li>Echo pin: pin 17</li>
        <li>For second sensor, Triger pin: pin 18</li>
        <li>Echo pin: pin 19</li>
    </ul>

    <p><b>Libraries:</b></p>
    <ul>
        <li><b>PID controller library:</b>
            <p>To download the PID controller library, click on the following link:PID Controller library</p>
            <p>After downloading the zip file, open the Arduino IDE. Navigate to the 'Sketch' menu, select 'Include Library,' and choose 'Add .ZIP Library. Locate the downloaded zip file, click 'Open,' and the Arduino IDE will install the library</p>
        </li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li>Ensure the robot is powered on and connected to the Arduino.</li>
        <li>The robot will use ultrasonic sensors to measure distances from the front and left sides.</li>
        <li>The PID controller adjusts motor speeds based on sensor inputs to maintain a set distance from the wall.</li>
        <li>Monitor real-time distance values and motor actions on the serial monitor.</li>
        <li>Adjust PID tuning parameters and distance setpoints for optimal performance.</li>
    </ul>

    <p><b>Expected Results:</b></p>
    <p>The robot should follow a wall based on the input from ultrasonic sensors. It will adjust its direction to maintain a set distance from both the front and left walls.</p>
    
    <p><b>Additional Information:</b></p>
    <ul>
        <li>The PID controller helps achieve smooth and precise control over the robot's movements.</li>
        <li>Experiment with PID tuning for different wall-following behaviors.</li>
    </ul>
        </>
      ),
    },
    "Alert System Using Tag": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The objective of this experiment is to create an alert system using an RFID tag. The system should detect the RFID tag, and upon detection, it sends a message to a Bluetooth app. The robot can be controlled to move forward by sending F command using mobile app.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the robot hardware according to the instructions in Section 2.1.</li>
        <li>Connect the robot to the Arduino IDE as explained in Section 2.3.</li>
        <li>Establish the following hardware connections:</li>
    </ul>

    <p><b>RFID Reader:</b></p>
    <p>For detailed instructions on connecting the RFID reader to the Arduino, please refer to the following link: :RFID reader to the Arduino .. Follow this link to download the MFRC522 library. Do not follow the connection instructions from the link provided, as a connector is already placed on the PCB board, making it easy to connect the RFID tag for the user.</p>
    <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>
    
    <p><b>Motor A:</b></p>
    <ul>
        <li>ENA: Connect to PWM pin 9.</li>
        <li>IN1: Connect to digital pin 2.</li>
        <li>IN2: Connect to digital pin 3.</li>
    </ul>

    <p><b>Motor B:</b></p>
    <ul>
        <li>ENA: Connect to PWM pin 10.</li>
        <li>IN3: Connect to digital pin 4.</li>
        <li>IN4: Connect to digital pin 5.</li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li>Power the robot and ensure it is connected to the Arduino.</li>
        <li>Bring an RFID tag close to the RFID reader and tap it.</li>
        <li>If the RFID tag is detected, the UID will be displayed on the serial monitor, and a message will be sent to the Bluetooth app saying "Robo passes."</li>
        <li>Send F command to move the robot forward using mobile app.</li>
        <li>To stop the robot in emergency situations, the user can send S command using mobile app.</li>
    </ul>

    <p><b>Expected Results:</b></p>
    <ul>
        <li>The system should respond to the RFID tag by sending a message to the Bluetooth app.</li>
        <li>Sending the F command should make the robot move forward and sending S command or if the RFID tag detects the robot should stop.</li>
    </ul>

    <p><b>FAQs:</b></p>
    <ul>
        <li><b>Q: How do I ensure the RFID tag is detected?</b>
            <p>A: Bring the RFID tag close to the RFID reader and tap it. Check the serial monitor for UID information.</p>
        </li>
        <li><b>Q: Can I customize the message sent to the Bluetooth app?</b>
            <p>A: Yes, modify the bluetoothSerial.println("Robo passes"); line in the code for different messages.</p>
        </li>
        <li><b>Q: How can I modify the code for different motor speeds?</b>
            <p>A: Adjust the PWM values (e.g., analogWrite(ENA, 200) ;) for both motors based on your speed requirement</p>
        </li>
    </ul>
        </>
      ),
    },
    "Gas Detecting Robo": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The objective of this experiment is to create a fire-detecting robot that can sense the presence of fire using a gas sensor. Upon detecting a certain level of gas, the robot activates an alarm (buzzer) and stops its movement.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the robot hardware according to the instructions in Section 2.1.</li>
        <li>Connect the robot to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>Hardware Assembly:</b></p>
    <ul>
        <li>Connect the buzzer to digital pin 26 on the Arduino.</li>
        <li>Connect the gas sensor to analog pin A0 on the Arduino. Please refer the link for the connection: Gas sensor Arduino connection</li>
        <li>Connect the motor control pins:
            <ul>
                <li>ENA to pin 9 (PWM of Motor A)</li>
                <li>ENB to pin 10 (PWM of Motor B)</li>
                <li>IN1 to pin 2 (Input 1 of Motor A)</li>
                <li>IN2 to pin 3 (Input 2 of Motor A)</li>
                <li>IN3 to pin 4 (Input 1 of Motor B)</li>
                <li>IN4 to pin 5 (Input 2 of Motor B)</li>
            </ul>
        </li>
        <li>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Power On:</b>
            <ul>
                <li>Connect the Arduino to a power source.</li>
                <li>Ensure that the gas sensor is properly positioned to detect the presence of fire.</li>
            </ul>
        </li>
        <li><b>Operation:</b>
            <ul>
                <li>The robot will continuously monitor the gas sensor readings.</li>
                <li>If the gas level surpasses a threshold (value  120), indicating the presence of fire, the robot will:
                    <ul>
                        <li>Trigger the buzzer alarm.</li>
                        <li>Stop its movement.</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>Indication:</b>
            <ul>
                <li>The serial monitor will display the analog readings from the gas sensor.</li>
                <li>"GAS Detected!" will be printed if the gas level exceeds the threshold.</li>
            </ul>
        </li>
        <li><b>Reset:</b>
            <ul>
                <li>To restart the robot, remove the fire source or lower the gas levels.</li>
                <li>Press the reset button on the Arduino if needed.</li>
            </ul>
        </li>
    </ul>

    <p><b>Expected Results:</b></p>
    <p>The robot should promptly respond to the detection of fire by activating the sounding of the buzzer and halting its movement. The serial monitor provides real-time feedback on gas sensor readings.</p>

    <p><b>Additional Information:</b></p>
    <p>This experiment highlights a basic fire-detecting mechanism using a gas sensor, offering potential applications in safety and security systems.</p>

    <p><b>FAQs:</b></p>
    <ul>
        <li><b>Q. What should I do if the robot does not stop when gas is detected?</b>
            <p>A. Check the connections and ensure the gas sensor is functioning correctly. Adjust the threshold if needed.</p>
        </li>
        <li><b>Q. Can I modify the code for different motor speeds?</b>
            <p>A. Certainly, adjust the PWM values in the code for moveForward() as per your requirements.</p>
        </li>
        <li><b>Q. How can I extend the functionality of this robot?</b>
            <p>A. You can integrate additional sensors, communication modules, or enhance the alarm system for specific applications.</p>
        </li>
    </ul>
        </>
      ),
    },
    "Teleoperated Control Using Mobile Application": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The objective of this experiment is to control a robot using a mobile application developed with MIT App Inventor. The robot's movement is based on joystick values sent from the mobile application via Bluetooth, allowing the user to teleoperate the robot.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the robot hardware according to the instructions in Section 2.1.</li>
        <li>Connect the robot to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>Hardware Connection:</b></p>
    <ul>
        <li>Connect the motors to the motor control pins on the Arduino.</li>
        <li><b>Motor A (Left Motor):</b>
            <ul>
                <li>Pin 9 (ENA): Connect to the enable pin of the left motor.</li>
                <li>Pin 2(IN1): Connect to input 1 of the left motor.</li>
                <li>Pin 3 (IN2): Connect to input 2 of the left motor.</li>
            </ul>
        </li>
        <li><b>Motor B (Right Motor):</b>
            <ul>
                <li>Pin 10 (ENB): Connect to the enable pin of the right motor.</li>
                <li>Pin 4 (IN3): Connect to input 1 of the right motor.</li>
                <li>Pin 5 (IN4): Connect to input 2 of the right motor.</li>
            </ul>
        </li>
        <li><b>Connect Bluetooth module:</b>
            <ul>
                <li>RX (Bluetooth) to TX (Arduino pin 0).</li>
                <li>TX (Bluetooth) to RX (Arduino pin 1).</li>
            </ul>
        </li>
        <li>Install the MIT App Inventor Companion app on your Android smartphone.</li>
        <li>For detailed instructions on installing the MIT App Inventor on your smartphone and understanding the hardware connections, please refer to the following link: [BlueDino]. This comprehensive guide will walk you through the step-by-step process for a seamless setup and operation of your teleoperated robot.</li>
    </ul>

    <p><b>Connection Instructions:</b></p>
    <ul>
        <li>Power on the robot and ensure that the Bluetooth module is paired with your smartphone.</li>
        <li>Open the BlueDuino app on your smartphone from Play store.</li>
    </ul>

    <p><b>Mobile App Usage:</b></p>
    <ul>
        <li>Launch the BlueDuino app.</li>
        <li>Establish a Bluetooth connection with the robot by selecting the appropriate device from the list.</li>
        <li>Configure each button in the app by setting Commanda such as ‘F’ for forward movement, ‘B’ for backward movement, ‘L’ for left movement, ‘R’ for right movement and ‘S’ to stop.</li>
        <li>Use the virtual joystick on the app to control the robot's movement.</li>
        <li>Move the joystick up and down for forward and backward motion.</li>
        <li>Move the joystick left and right to turn the robot.</li>
        <li>The robot will stop when the joystick is in the center position.</li>
        <li>Observe the real-time feedback on the Serial Monitor for troubleshooting and monitoring motor speeds.</li>
    </ul>

    <p><b>Notes:</b></p>
    <ul>
        <li>Ensure that the Bluetooth module is properly paired and connected to the robot.</li>
        <li>Keep the smartphone within the Bluetooth range for optimal control.</li>
        <li>Adjust the joystick values for sensitivity based on your preferences by modifying the code if needed.</li>
        <li>The robot should respond to joystick movements, providing a teleoperated control experience.</li>
    </ul>

    <p><b>FAQs:</b></p>
    <ul>
        <li><b>Q: How do I pair the Bluetooth module with my smartphone?</b>
            <p>A: Follow the Bluetooth pairing instructions specific to your smartphone and Bluetooth module. Typically, you need to enable Bluetooth on your smartphone, search for available devices, and select the Bluetooth module to pair.</p>
        </li>
        <li><b>Q: What should I do if the robot does not respond to joystick movements?</b>
            <p>A: Check the Bluetooth connection between the smartphone and the robot. Ensure that the Bluetooth module is powered and properly paired. Verify the wiring connections according to the provided instructions.</p>
        </li>
        <li><b>Q: Can I customize the mobile app interface?</b>
            <p>A: The MIT App Inventor provides a user-friendly interface for designing custom mobile apps. You can modify the app's layout, add additional features, or customize the joystick behavior using the MIT App Inventor platform.</p>
        </li>
    </ul>
        </>
      ),
    },
    "Line Following Robot": {
      type: "experiment",
      content: (
        <>
  <p><b>Objective:</b></p>
    <p>The Line Following Robot with Ultrasonic and IR Sensors is designed to autonomously navigate along a predefined path marked by a black line while avoiding obstacles using an ultrasonic sensor. This user manual provides step-by-step instructions for setting up, operating, and troubleshooting the robot.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li>Assemble the robot hardware according to the instructions in Section 2.1.</li>
        <li>Connect the robot to the Arduino IDE as explained in Section 2.3.</li>
    </ul>
    
    <p><b>Assemble the Robot Hardware:</b></p>
    <ul>
        <li>Connect the motors, infrared sensors, and ultrasonic sensor based on the provided hardware assembly instructions.</li>
    </ul>

    <p><b>Connect to Arduino IDE:</b></p>
    <ul>
        <li>Connect the robot to the Arduino IDE as explained in Section 2.3.</li>
    </ul>

    <p><b>Hardware Connections:</b></p>
    <ul>
        <li><b>Ultrasonic Sensor:</b> <a href="#">Ultrasonic sensor with arduino</a>
            <ul>
                <li>Connect the trig Pin to digital pin 16.</li>
                <li>Connect the echo Pin to digital pin 17.</li>
            </ul>
        </li>
        <li><b>Left Motor:</b>
            <ul>
                <li>Connect ENA to digital pin 9.</li>
                <li>Connect LMP to digital pin 2.</li>
                <li>Connect LMN to digital pin 3.</li>
            </ul>
        </li>
        <li><b>Right Motor:</b>
            <ul>
                <li>Connect ENB to digital pin 10.</li>
                <li>Connect RMP to digital pin 4.</li>
                <li>Connect RMN to digital pin 5.</li>
            </ul>
        </li>
        <li><b>Left Infrared Sensor:</b>
            <ul>
                <li>Connect LSP to digital pin 22.</li>
            </ul>
        </li>
        <li><b>Right Infrared Sensor:</b>
            <ul>
                <li>Connect RSP to digital pin 23.</li>
            </ul>
        </li>
    </ul>

    <p><b>Initialization:</b></p>
    <ul>
        <li>Initialize the motor pins, infrared sensor pins, and ultrasonic sensor pins in the setup.</li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Power On:</b>
            <ul>
                <li>Power the robot and ensure it is connected to the Arduino.</li>
            </ul>
        </li>
        <li><b>Ultrasonic Sensor Distance Measurement:</b>
            <ul>
                <li>The ultrasonic sensor will measure the distance using the trig Pin and echo Pin. The distance will be displayed on the serial monitor.</li>
            </ul>
        </li>
        <li><b>Infrared Sensor Line Following:</b>
            <ul>
                <li>The infrared sensors (LSP and RSP) will detect the presence of a black line.</li>
                <li>If the distance measured by the ultrasonic sensor is greater than 15:
                    <ul>
                        <li>If both infrared sensors are not on the black line, the robot will move forward.</li>
                        <li>If the left sensor is on the black line and the right sensor is not, the robot will turn left.</li>
                        <li>If the right sensor is on the black line and the left sensor is not, the robot will turn right.</li>
                    </ul>
                </li>
                <li>If the distance is less than 15, the robot will stop.</li>
            </ul>
        </li>
    </ul>

    <p><b>Expected Results:</b></p>
    <ul>
        <li>The robot should follow a black line on a white surface based on the input from infrared sensors.</li>
        <li>The ultrasonic sensor should measure and display the distance on the serial monitor.</li>
    </ul>

    <p><b>FAQs:</b></p>
    <ul>
        <li><b>Q: How do I interpret the ultrasonic sensor distance?</b>
            <p>A: The distance is displayed on the serial monitor. Ensure it is greater than 15 for proper line-following.</p>
        </li>
        <li><b>Q: How can I modify the speed of the motors?</b>
            <p>A: Adjust the PWM values (e.g., analogWrite(LMP, 50) ;) for both motors in the code based on your speed requirements.</p>
        </li>
    </ul>
        </>
      ),
    },
    "Clap Robo": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The Clap Robot is designed to respond to sound (claps) by moving forward when a clap is detected. This user manual provides step-by-step instructions for setting up, operating, and troubleshooting the clap robot.</p>

    <p><b>Hardware Setup:</b></p>
    <ul>
        <li><b>Motors:</b>
            <ul>
                <li>Connect the left motor control pins (ENA, IN1 and IN2) to digital pins 9, 2 and 3, respectively.</li>
                <li>Connect the right motor control pins (IN3, IN4 and ENB) to digital pins 4, 5 and 10, respectively.</li>
            </ul>
        </li>
        <li><b>Sound Sensor:</b>
            <ul>
                <li>Connect the sound sensor to digital pin 24.</li>
            </ul>
        </li>
    </ul>

    <p><b>Initialization:</b></p>
    <ul>
        <li>In the setup section of the Arduino code, set the pin modes for the sound sensor and motor control pins.</li>
        <li>Upload the provided Arduino code to the Arduino board. The code enables the robot to respond to claps by moving forward.</li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Power On:</b>
            <ul>
                <li>Power the robot and ensure it is connected to the Arduino.</li>
            </ul>
        </li>
        <li><b>Clap Detection:</b>
            <ul>
                <li>The sound sensor will detect claps or loud sounds.</li>
            </ul>
        </li>
        <li><b>Motor Movement:</b>
            <ul>
                <li>If a clap is detected, the robot will move forward.</li>
                <li>If another clap is detected, the robot will stop.</li>
            </ul>
        </li>
    </ul>

    <p><b>Expected Results:</b></p>
    <ul>
        <li>The clap robot should respond to claps by moving forward.</li>
    </ul>
    
    <p><b>Note:</b> For any doubts in the hardware connection please refer the link: <a href="#">Sound sensor connection</a>. (Note: don’t want to connect any resistor)</p>

    <p><b>FAQs:</b></p>
    <ul>
        <li><b>Q: How sensitive is the sound sensor to claps?</b>
            <p>A: The sensitivity may vary. Ensure that the sound sensor is positioned in a way that it can detect claps effectively.</p>
        </li>
    </ul>
        </>
      ),
    },
    "Obstacle Avoidance Robo (Ultrasonic Sensor)": {
      type: "experiment",
      content: (
        <>
   <p><b>Objective:</b></p>
    <p>The objective of this experiment is to create an obstacle avoidance robot using an ultrasonic sensor. The robot should move forward until it detects an obstacle, then turn randomly to avoid the obstacle.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li><b>Assemble the Robot Hardware:</b>
            <ul>
                <li>Connect the motors, ultrasonic sensor, and motor control library based on the provided hardware assembly instructions.</li>
            </ul>
        </li>
        <li><b>Install Required Libraries:</b>
            <ul>
                <li>Install the necessary libraries for motor control and ultrasonic sensor:</li>
                <li>ControlMotor Library: Download and install this library for motor control.</li>
                <li>Ultrasonic Library: Download and install this library for the HC-SR04 ultrasonic sensor.</li>
                <li>For include the Arduino library in Arduino IDE please see the link <a href="#">How to include library in Arduino IDE</a></li>
            </ul>
        </li>
        <li><b>Connect to Arduino IDE:</b>
            <ul>
                <li>Connect the robot to the Arduino IDE as explained in Section 2.3.</li>
            </ul>
        </li>
    </ul>

    <p><b>Hardware Connections:</b></p>
    <ul>
        <li><b>Right Motor:</b>
            <ul>
                <li>IN1 (2): Connected to the digital pin 2 on the Arduino.</li>
                <li>IN2 (3): Connected to the digital pin 3 on the Arduino.</li>
                <li>ENA (9): Connected to the PWM-enabled digital pin 9 on the Arduino.</li>
            </ul>
        </li>
        <li><b>Left Motor:</b>
            <ul>
                <li>IN3 (4): Connected to the digital pin 4 on the Arduino.</li>
                <li>IN4 (5): Connected to the digital pin 5 on the Arduino.</li>
                <li>ENB (10): Connected to the PWM-enabled digital pin 10 on the Arduino.</li>
            </ul>
        </li>
        <li><b>Ultrasonic Sensor:</b>
            <ul>
                <li>Connect the Trig pin to digital pin 14.</li>
                <li>Connect the Echo pin to digital pin 15.</li>
            </ul>
        </li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Power On:</b>
            <ul>
                <li>Power the robot and ensure it is connected to the Arduino.</li>
            </ul>
        </li>
        <li><b>Obstacle Avoidance:</b>
            <ul>
                <li>The robot will move forward at a speed of 150.</li>
                <li>The ultrasonic sensor will continuously measure the distance to the obstacle.</li>
            </ul>
        </li>
        <li><b>Random Turns:</b>
            <ul>
                <li>If an obstacle is detected (distance  30cm):
                    <ul>
                        <li>The robot will stop.</li>
                        <li>A random value is generated to determine whether to turn left or right.</li>
                        <li>The robot will turn in the randomly chosen direction (right or left) for 0.4 seconds.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

    <p><b>Expected Results:</b></p>
    <ul>
        <li>The robot should move forward until it detects an obstacle.</li>
        <li>When an obstacle is detected, the robot should randomly turn left or right to avoid the obstacle.</li>
    </ul>
        </>
      ),
    },
    "Maze Solving Robot": {
      type: "experiment",
      content: (
        <>
  <p><b>Objective:</b></p>
    <p>The Maze Solving Robot is designed to autonomously navigate through a maze by utilizing ultrasonic sensors for obstacle detection and maneuvering. This user manual provides step-by-step instructions for setting up, operating, and troubleshooting the maze-solving robot.</p>

    <p><b>Setup:</b></p>
    <ul>
        <li><b>Ultrasonic Sensors:</b>
            <ul>
                <li>Connect the left ultrasonic sensor's trigger (Trig) pin to digital pin 14 and echo (Echo) pin to digital pin 15.</li>
                <li>Connect the front ultrasonic sensor's trigger (Trig) pin to digital pin 16 and echo (Echo) pin to digital pin 17.</li>
                <li>Connect the right ultrasonic sensor's trigger (Trig) pin to digital pin 18 and echo (Echo) pin to digital pin 19.</li>
            </ul>
        </li>
        <li><b>Motors:</b>
            <ul>
                <li>Connect the left motor control pins (ENA, LEFT_MOTOR_IN1 and LEFT_MOTOR_IN2) to digital pins 9, 2 and 3, respectively.</li>
                <li>Connect the right motor control pins (RIGHT_MOTOR_IN1, RIGHT_MOTOR_IN2 and ENB) to digital pins 4, 5 and 10, respectively.</li>
            </ul>
        </li>
        <li><b>Install Required Libraries:</b>
             <ul>
                <li>Install the necessary libraries by download the link: <a href="#">Arduino NEWping.h library</a></li>
                <li>Upload the provided Arduino code to the Arduino board. The code uses ultrasonic sensors to detect obstacles and navigate through a maze.</li>
            </ul>
        </li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>Power On:</b>
            <ul>
                <li>Power the robot and ensure it is connected to the Arduino.</li>
            </ul>
        </li>
        <li><b>Ultrasonic Sensor Distance Measurement:</b>
            <ul>
                <li>The ultrasonic sensors will measure distances using the trigger and echo pins.</li>
                <li>Distances will be displayed on the serial monitor.</li>
            </ul>
        </li>
        <li><b>Maze Solving:</b>
            <ul>
                <li>The robot will autonomously navigate through the maze.</li>
                <li>If an obstacle is detected in front (within 20 cm), the robot will decide whether to turn left or right based on the distances measured by left and right ultrasonic sensors.</li>
                <li>The robot will move forward if no obstacle is detected.</li>
            </ul>
        </li>
    </ul>

    <p><b>Expected Results:</b></p>
    <ul>
        <li>The maze-solving robot should autonomously navigate through the maze, avoiding obstacles in its path.</li>
    </ul>
    
    <p><b>FAQs:</b></p>
    <ul>
        <li><b>Q: How can I interpret the ultrasonic sensor distances?</b>
            <p>A: The distances are displayed on the serial monitor. Ensure the robot can detect obstacles at reasonable distances.</p>
        </li>
        <li><b>Q: What should I do if the robot does not navigate as expected?</b>
            <p>A: Check the hardware connections, ensure the sensors are functioning, and review the code for potential issues.</p>
        </li>
    </ul>
        </>
      ),
    },
    "Mobile Tilt Controlled Chelonia Bot": {
      type: "experiment",
      content: (
        <>
     <p><b>Objective:</b></p>
    <p>The objective of this experiment is to control the Chelonia using the "Arduino Bluetooth Connector" mobile app. By executing this code and using the app, you can make the Chelonia move forward, backward, turn left, turn right, and stop through tilting the mobile phone.</p>
    <p>Before diving into the experiment, make sure you have completed the basic hardware assembly outlined in the earlier sections of this user manual. Additionally, you need to set up the mobile application to control the Chelonia through tilt commands.</p>

    <p><b>Mobile Application Setup:</b></p>
    <ul>
        <li>Follow the link for the <a href="#">Mobile application setup for tilt controlled Chelonia</a></li>
    </ul>

    <p><b>Bluetooth Connectivity:</b></p>
    <ul>
        <li>Enable Bluetooth on your mobile device.</li>
        <li>Pair your mobile device with the Chelonia's Bluetooth module.</li>
    </ul>

    <p><b>Hardware Setup:</b> Connect the hardware as follows to ensure proper functionality.</p>
    <ul>
        <li><b>Motor Control Pins:</b>
            <ul>
                <li><b>Connect Motor 1:</b>
                    <ul>
                        <li>PWM input (ENA): Connect to pin 9</li>
                        <li>Direction input 1 (IN1): Connect to pin 2</li>
                        <li>Direction input 2 (IN2): Connect to pin 3</li>
                    </ul>
                </li>
                <li><b>Connect Motor 2:</b>
                    <ul>
                        <li>PWM input (ENB): Connect to pin 10</li>
                        <li>Direction input 1 (IN3): Connect to pin 4</li>
                        <li>Direction input 2 (IN4): Connect to pin 5</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Ensure the Bluetooth module (HC-05) is properly connected to the Arduino (VCC and GND). Connect its RX to TX and TX to RX. For detailed guidance on connecting the HC-05 Bluetooth module to your Arduino, please refer to the following link: <a href="#">HC-05 and Arduino Connection</a>.</li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>F: Move forward</b> – Tilt the phone in forward direction</li>
        <li><b>B: Move backward</b> - Tilt the phone in backward direction</li>
        <li><b>L: Turn left</b> - Tilt the phone in left direction</li>
        <li><b>R: Turn right</b>- Tilt the phone in right direction</li>
        <li><b>S: Stop</b></li>
    </ul>

    <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino after uploading the code.</p>

    <p><b>Common Issues:</b></p>
    <ul>
        <li><b>Bluetooth connection issues:</b> If your device is connected, but not appearing in the mobile app, troubleshoot by checking the Bluetooth pairing settings and ensuring the HC-05 module is connected. If the issue persists, a simple resolution is to press the reset button on the HC-05, which often resolves connectivity problems.</li>
    </ul>
        </>
      ),
    },
        "Robot Using Mobile Arrows": {
      type: "experiment",
      content: (
        <>
    <p><b>Objective:</b></p>
    <p>The objective of this experiment is to control the Chelonia using the "Arduino Bluetooth Connector" mobile app. Use the HC-05 Bluetooth module to control the robot to move forward, backward, left, and right wirelessly from a smartphone app using arrow keys.</p>

    <p><b>Mobile Application Setup:</b></p>
    <ul>
        <li>Follow the link for the <a href="#">Mobile application setup the Robot using the Mobile arrows</a>.</li>
    </ul>

    <p><b>Bluetooth Connectivity:</b></p>
    <ul>
        <li>Enable Bluetooth on your mobile device.</li>
        <li>Pair your mobile device with the Chelonia's Bluetooth module.</li>
    </ul>

    <p><b>Hardware Setup:</b> Connect the hardware as follows to ensure proper functionality.</p>
    <ul>
        <li><b>Motor Control Pins:</b>
            <ul>
                <li><b>Connect Motor 1:</b>
                    <ul>
                        <li>PWM input (ENA): Connect to pin 9</li>
                        <li>Direction input 1 (IN1): Connect to pin 2</li>
                        <li>Direction input 2 (IN2): Connect to pin 3</li>
                    </ul>
                </li>
                <li><b>Connect Motor 2:</b>
                    <ul>
                        <li>PWM input (ENB): Connect to pin 10</li>
                        <li>Direction input 1 (IN3): Connect to pin 4</li>
                        <li>Direction input 2 (IN4): Connect to pin 5</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Ensure the Bluetooth module (HC-05) is properly connected to the Arduino (VCC and GND). Connect its RX to TX and TX to RX. For detailed guidance on connecting the HC-05 Bluetooth module to your Arduino, please refer to the following link: <a href="#">HC-05 and Arduino Connection</a>.</li>
    </ul>

    <p><b>Usage Instructions:</b></p>
    <ul>
        <li><b>F: Move forward</b></li>
        <li><b>B: Move backward</b></li>
        <li><b>L: Turn left</b></li>
        <li><b>R: Turn right</b></li>
        <li><b>S: Stop</b></li>
    </ul>

    <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX and RX pins of Arduino after uploading the code.</p>
        </>
      ),
    },


    
   
  };

  const sampleCodeLinks = {
    // Beginner
    "Custom Command Follower": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Experiment1/Basic_movement.ino",
    "Chelonia Control Using Mobile App": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Experiment2/EXP_2.ino",
    "Wireless Controlled": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Experiment3/EXP_3.ino",
    "Bluetooth Speed Control": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Experiment4/Speed_control.ino",
    "Staircase Detection Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Experiment5/Exp_No5.ino",
    "Tilt Tracking Using IMU": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/EXP6.ino",
    "Voice Controlled Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp7.ino",
    "Shape Forming Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp8.ino",
    "ObstacleAlert Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp9.ino",
    "Humidity Monitoring Robo": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp10.ino",
    "Smoke Detecting Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp26.ino",

    // Intermediate
    "Obstacle Based Speed Control": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp11.ino",
    "Obstacle Detection Using IR Sensor": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp12.ino",
    "Human Following Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp13.ino",
    "Temperature Monitoring Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp14.ino",
    "Computer Operated Chelonia": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp15.ino",
    "Wall Follow Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp16.ino",
    "Alert System Using Tag": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp17.ino",
    "Gas Detecting Robo": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp18.ino",
    "Teleoperated Control Using Mobile Application": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp19.ino",
    "Line Following Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp20.ino",
    "Clap Robo": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp23.ino",

    // Advanced
    "Obstacle Avoidance Robo (Ultrasonic Sensor)": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp21.ino",
    "Maze Solving Robot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp22.ino",
    "Mobile Tilt Controlled Chelonia Bot": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp24.ino",
    "Robot Using Mobile Arrows": "https://github.com/Megararobotics/chelonia_B1_new/blob/main/Exp25.ino",
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
    "Custom Command Follower",
    "Chelonia Control Using Mobile App",
    "Wireless Controlled",
    "Bluetooth Speed Control",
    "Staircase Detection Robot",
    "Tilt Tracking Using IMU",
    "Voice Controlled Robot",
    "Shape Forming Robot",
    "ObstacleAlert Robot",
    "Humidity Monitoring Robo",
    "Smoke Detecting Robot",
  ];

  const intermediateItems = [
    "Obstacle Based Speed Control",
    "Obstacle Detection Using IR Sensor",
    "Human Following Robot",
    "Temperature Monitoring Robot",
    "Computer Operated Chelonia",
    "Wall Follow Robot",
    "Alert System Using Tag",
    "Gas Detecting Robo",
    "Teleoperated Control Using Mobile Application",
    "Line Following Robot",
    "Clap Robo",
  ];

  const advancedItems = [
    "Obstacle Avoidance Robo (Ultrasonic Sensor)",
    "Maze Solving Robot",
    "Mobile Tilt Controlled Chelonia Bot",
    "Robot Using Mobile Arrows",
  ];

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
    src="/assets/uparrow.png"
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
