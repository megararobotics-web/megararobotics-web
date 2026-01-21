import React, { useRef } from "react";
import "./B1Experiment.css";
import topArrow from "../assets/uparrow.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Scorpine() {
  const topRef = useRef(null); // Top reference for scroll-to-top

  // Centralized content map
  const contentMap = {
    Features: {
      type: "section",
      content: (
        <>
    <ul>
        <li><b>Diverse Sensor Integration:</b>
            <ul>
                <li>The Scorpion Robot Version includes a comprehensive set of sensors, such as ultrasonic sensors for accurate distance measurement, inertial measurement units (IMUs) for orientation tracking.</li>
            </ul>
        </li>
        <li><b>Versatile Motor Control:</b>
            <ul>
                <li>The robot is equipped with a robust motor control system, allowing users to program precise movements. Motor pins are clearly defined, making it easy to understand and experiment with forward, backward, left, and right movements.</li>
            </ul>
        </li>
        <li><b>Bluetooth Connectivity:</b>
            <ul>
                <li>Utilize Bluetooth communication to control the Scorpion Robot remotely. Commands can be sent through a Bluetooth module, providing wireless flexibility and enabling users to experiment with different control mechanisms.</li>
            </ul>
        </li>
        <li><b>Educational Platform:</b>
            <ul>
                <li>Tailored for educational purposes, the Scorpion Robot Version is an ideal tool for students and enthusiasts to delve into the world of robotics. The robot facilitates hands-on learning, fostering a deeper understanding of robotic systems and programming.</li>
            </ul>
        </li>
    </ul>

    <h2>SAFETY PRECAUTIONS</h2>
    <ol>
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
    </ol>

    <h2>KIT CONTENTS</h2>
    <h3>1. Core Electronics</h3>
    <ul>
        <li>Arduino Mega 2560: High-performance microcontroller for versatile robotics and electronics projects.</li>
        <li>Motor Driver Module: L298N or similar, to control motors effectively.</li>
    </ul>

    <h3>2. Actuators</h3>
    <ul>
        <li>BO Motors with Metal Gears: Durable and efficient motors for driving wheels (quantity as required).</li>
        <li>Wheels: Compatible with BO motors, with appropriate grip and size for the project.</li>
    </ul>

    <h3>3. Sensors</h3>
    <ul>
        <li>Ultrasonic Sensor: HC-SR04 for distance measurement and obstacle detection.</li>
        <li>Infrared (IR) Sensor: For line-following or proximity sensing.</li>
        <li>Gas Sensor: MQ series sensor for detecting gases like LPG, CO, or smoke.</li>
        <li>Temperature Sensor: DHT11, DHT22, or LM35 for environmental temperature readings.</li>
    </ul>

    <h3>4. Power Components</h3>
    <ul>
        <li>12V Battery: Rechargeable battery for powering the project.</li>
        <li>Arduino Power Cable: USB cable for programming and powering the Arduino board.</li>
        <li>Connectors: Battery connectors, jumper wires, and Dupont cables for reliable connections.</li>
    </ul>

    <h3>5. Structural Components</h3>
    <ul>
        <li>Base Plate: Rigid and durable base to mount the motors, sensors, and other components.</li>
        <li>Clamps: Metal or plastic clamps for securing the motors and sensors.</li>
        <li>Screws and Nuts: Assorted sizes for assembling the kit.</li>
        <li>Spacers: For creating levels or spacing components appropriately.</li>
    </ul>

    <h3>6. Prototyping and Customization</h3>
    <ul>
        <li>PCB: General-purpose PCB for soldering and custom circuits.</li>
        <li>Switch: On/off switch for the main power or specific components.</li>
        <li>Wires: Assorted lengths and gauges for power and signal connections.</li>
    </ul>
        </>
      ),
    },
    "Quick star guide": {
      type: "section",
      content: (
        <>
   <h2>Hardware Assembly</h2>
    

    <h3>Components</h3>
    <p>Ensure you have the following components ready for the Scorpion hardware assembly:</p>
    <ul>
        <li>Teensy 4.0</li>
        <li>L298N Motor Driver</li>
        <li>DC Motors (2)</li>
        <li>Wheels (2)</li>
        <li>Battery</li>
        <li>Connectors</li>
        <li>Ultrasonic sensor</li>
        <li>Level shifter</li>
        <li>IMU MPU6050</li>
        <li>PCB</li>
    </ul>

    <h3>Assembly Steps</h3>
    <p>Follow the steps below to complete the Scorpion hardware assembly:</p>
    <ol>
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
                <li>Power up the Scorpion by turning on the battery.</li>
                <li>Ensure the Teensy 4.0 and L298N Motor Driver receive power.</li>
                <li>To test the hardware assembly, execute the code for the desired experiment on the Teensy 4.0.</li>
                <li>Observe the movement of the wheels and ensure they respond appropriately to the code instructions.</li>
            </ul>
        </li>
        <li><b>Programming Connection:</b>
            <ul>
                <li>During programming, disconnect the 5V line from the L298N Motor Driver to the Teensy 4.0.</li>
                <li>Connect the necessary programming pins based on the experiment requirements.</li>
            </ul>
        </li>
        <li><b>Post-Programming Power-Up:</b>
            <ul>
                <li>After programming, reconnect the 5V line from the L298N Motor Driver to the Teensy 4.0 for normal operation.</li>
            </ul>
        </li>
    </ol>
    <div class="note">
        <p><b>Note:</b> The ENA (Enable A) and ENB (Enable B) pins are not explicitly mentioned in the code, which implies that they are shorted internally. To ensure proper functionality, physically shorten the ENA and ENB pins on the motor driver. This connection is necessary for the correct operation of the code. If these pins are not shorted, the code may not function as expected.</p>
    </div>

    <h2>Software Installation (Arduino IDE)</h2>
    <p>This section will help you to install the Arduino IDE software for programming.</p>
    <ol>
        <li>Go to the website <a href="http://www.arduino.cc" target="_blank">www.arduino.cc</a> to download the software. </li>
        <li>Click on the “windows installer” icon from the bottom of the site.</li>
        <li>Begin the download by click “just download” option.</li>
        <li>Extract the zip file and start the installation.</li>
        <li>Select the installation options.</li>
        <li>Choose the installation path.</li>
        <li>Finish the installation.</li>
        <li>Launch the Arduino IDE. </li>
    </ol>

    <h2>Connecting to Arduino IDE</h2>
    <p>Follow the steps below to connect your Scorpion to the Arduino IDE:</p>
    <ol>
        <li><b>Connect the Cable:</b>
            <ul>
                <li>Connect the USB cable from your computer to the Teensy 4.0 on your Scorpion.</li>
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
                <li>Select the Teensy 4.0 board from the Arduino IDE software (Tools -{">"} Board -{">"} Teensyduino -{">"} Teensy 4.0). For doubt please refer the link: <a href="https://www.youtube.com/watch?v=QdAuWOfOTE4&t=147s" target="_blank">Teensy Board Selection Video</a></li>
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
                <li>Once the code verification is successful, click on the "Upload" button (right arrow icon) to upload the code to the Teensy board.</li>
            </ul>
        </li>
        <li><b>Observe LED Blinking:</b>
            <ul>
                <li>During the uploading process, observe the LED on the Teensy 4.0. It should blink, indicating the data transfer.</li>
            </ul>
        </li>
        <li><b>Remove the Connector:</b>
            <ul>
                <li>After successful uploading, safely disconnect the USB cable from the Teensy 4.0.</li>
            </ul>
        </li>
        <li><b>Connect 5V from Driver to Teensy:</b>
            <ul>
                <li>Prior to powering up the Scorpion, reconnect the 5V line from the L298N Motor Driver to the Teensy 4.0.</li>
            </ul>
        </li>
    </ol>
    <div class="important-note">
        <p><b>Important Note:</b> Before proceeding with any power-up activities, it is crucial to ensure the reliability of your Scorpion's wiring. Perform the following essential steps:</p>
        <ul>
            <li><b>Multimeter Continuity Check:</b>
                <ul>
                    <li>Use a multimeter to check the continuity of each wire. Verify that there are no breaks or interruptions in the wiring. This step is essential for preventing potential issues related to poor electrical connectivity. </li>
                </ul>
            </li>
            <li><b>Double-Check All Connections:</b>
                <ul>
                    <li>Thoroughly inspect all connections to guarantee that each component is securely and correctly attached. Pay special attention to junctions, joints, and interfaces between different modules. Any loose or incorrectly connected components could lead to operational errors or malfunctions.</li>
                </ul>
            </li>
        </ul>
        <p>These precautionary measures ensure a robust and reliable hardware setup, minimizing the risk of electrical faults during the operation of your Scorpion.</p>
    </div>

    <h2>Software Setup (Raspberry Pi OS)</h2>
    <h3>Raspberry Pi OS Installation setup in PC</h3>
    <ol>
        <li><b>Download and install RPI-IMAGER</b>
            <p>‘Rpi-imager’ is the tool used for flashing the OS image onto the micro-SD card.</p>
            <p>Install ‘rpi-imager’ using the following command in the terminal:</p>
            <code>sudo apt install rpi-imager</code>
            <p>or</p>
            <code>sudo snap install rpi-imager</code>
            <p><b>Reference Link:</b> <a href="https://snapcraft.io/install/rpi-imager/ubuntu" target="_blank">https://snapcraft.io/install/rpi-imager/ubuntu</a> </p>
        </li>
        <li><b>Getting Started (YouTube Link)</b>
            <p> [Placeholder for YouTube link] </p>
        </li>
    </ol>
        </>
      ),
    },
    "Setting Up a Raspberry Pi4 with Ubuntu 20.04 Server": {
      type: "experiment",
      content: (
        <>
     <h2>Setting Up Raspberry Pi 4 with Ubuntu 20.04 Server</h2>
    

    <h3>1. Gather Required Materials</h3>
    <ul>
        <li>Raspberry Pi 4 (with power supply)</li>
        <li>microSD card (at least 16GB recommended)</li>
        <li>Card reader (to connect the microSD card to your PC)</li>
        <li>Computer with internet access</li>
        <li>HDMI cable (to connect Raspberry Pi to a monitor)</li>
        <li>USB keyboard and mouse (for initial setup)</li>
    </ul>

    <h3>2. Download Ubuntu 20.04 Server</h3>
    <ul>
        <li>Visit the official Ubuntu website.</li>
        <li>Select the Ubuntu 20.04 Server image for Raspberry Pi.</li>
    </ul>

    <h3>3. Prepare the microSD Card</h3>
    
    <ul>
        <li>Insert the microSD card into the card reader and connect it to your computer.</li>
        <li>Use software to flash the Ubuntu image onto the microSD card. You can use one of the following tools:
            <ul>
                <li><b>Raspberry Pi Imager (recommended):</b>
                    <ol>
                        <li>Download and install Raspberry Pi Imager.</li>
                        <li>Open the application and select CHOOSE OS.</li>
                        <li>Scroll down and select Ubuntu {">"} Ubuntu Server 20.04 LTS (ARM version).</li>
                        <li>Select CHOOSE STORAGE and pick your microSD card.</li>
                    </ol>
                </li>
                <li><b>balenaEtcher:</b>
                    <ol>
                        <li>Download and install balenaEtcher.</li>
                        <li>Open the application and select the downloaded .img file.</li>
                        <li>Choose the microSD card as the target.</li>
                        <li>Click Flash to start the process.</li>
                    </ol>
                </li>
            </ul>
        </li>
    </ul>

    <h3>4. Set Up the Raspberry Pi</h3>
    <ul>
        <li>Once the flashing is complete, safely eject the microSD card from your computer and insert it into the Raspberry Pi.</li>
        <li>Connect the Raspberry Pi to a monitor using an HDMI cable.</li>
        <li>Connect the USB keyboard.</li>
        <li>Finally, connect the power supply to boot up the Raspberry Pi.</li>
        <li>You can log in with the default credentials:
            <code>Username: ubuntu</code>
            <code>Password: ubuntu</code>
        </li>
        <li class="note">Upon first login, you’ll be prompted to change the password.</li>
    </ul>
        </>
      ),
    },
    "Configuring  Wi-Fi on Ubuntu Server with a Monitor": {
      type: "experiment",
      content: (
        <>
    <h2>Setting Up Raspberry Pi 4 with Ubuntu 20.04 Server</h2>
    

    <h3>1. Gather Required Materials</h3>
    <ul>
        <li>Raspberry Pi 4 (with power supply)</li>
        <li>microSD card (at least 16GB recommended)</li>
        <li>Card reader (to connect the microSD card to your PC)</li>
        <li>Computer with internet access</li>
        <li>HDMI cable (to connect Raspberry Pi to a monitor)</li>
        <li>USB keyboard and mouse (for initial setup)</li>
    </ul>

    <h3>2. Download Ubuntu 20.04 Server</h3>
    <ul>
        <li>Visit the official Ubuntu website.</li>
        <li>Select the Ubuntu 20.04 Server image for Raspberry Pi.</li>
    </ul>

    <h3>3. Prepare the microSD Card</h3>
    
    <ul>
        <li>Insert the microSD card into the card reader and connect it to your computer.</li>
        <li>Use software to flash the Ubuntu image onto the microSD card. You can use one of the following tools:
            <ul>
                <li><b>Raspberry Pi Imager (recommended):</b>
                    <ol>
                        <li>Download and install Raspberry Pi Imager.</li>
                        <li>Open the application and select CHOOSE OS.</li>
                        <li>Scroll down and select Ubuntu {">"} Ubuntu Server 20.04 LTS (ARM version).</li>
                        <li>Select CHOOSE STORAGE and pick your microSD card.</li>
                    </ol>
                </li>
                <li><b>balenaEtcher:</b>
                    <ol>
                        <li>Download and install balenaEtcher.</li>
                        <li>Open the application and select the downloaded .img file.</li>
                        <li>Choose the microSD card as the target.</li>
                        <li>Click Flash to start the process.</li>
                    </ol>
                </li>
            </ul>
        </li>
    </ul>

    <h3>4. Set Up the Raspberry Pi</h3>
    <ul>
        <li>Once the flashing is complete, safely eject the microSD card from your computer and insert it into the Raspberry Pi.</li>
        <li>Connect the Raspberry Pi to a monitor using an HDMI cable.</li>
        <li>Connect the USB keyboard.</li>
        <li>Finally, connect the power supply to boot up the Raspberry Pi.</li>
        <li>You can log in with the default credentials:
            <code>Username: ubuntu</code>
            <code>Password: ubuntu</code>
        </li>
        <li class="note">Upon first login, you’ll be prompted to change the password.</li>
    </ul>

    <h2>Configuring Wi-Fi on Ubuntu Server</h2>
    
    <ol>
        <li><b>Access the Terminal</b>
            <p>If you are at the terminal screen after booting, log in with your credentials (default is <b>ubuntu</b> for both username and password if you haven’t changed it).</p>
        </li>
        <li><b>Identify Your Wi-Fi Interface</b>
            <p>Use the following command to identify the Wi-Fi interface:</p>
            <code>ip a</code>
            <p>Look for an interface named something like <code>wlan0</code>.</p>
        </li>
        <li><b>Edit the Netplan Configuration File</b>
            <p>Open the Netplan configuration file with a text editor:</p>
            <code>cd /etc/netplan/</code>
            <code>sudo nano /etc/netplan/50-cloud-init.yaml</code>
            <p>(Note: I've suggested <code>nano</code> as it's a common text editor. The file name might vary slightly.)</p>
        </li>
        <li><b>Modify the Configuration</b>
            <p>In the file, add your Wi-Fi configuration. An example structure is below. Make sure to replace <code>YOUR_SSID</code> and <code>YOUR_PASSWORD</code> with your actual Wi-Fi details. Pay close attention to the indentation, as YAML is sensitive to it.</p>
            <div class="yaml-code">
network:
    ethernets:
        eth0:
            dhcp4: true
            optional: true
    wifis:
        wlan0:
            dhcp4: true
            optional: true
            access-points:
                "YOUR_SSID":
                    password: "YOUR_PASSWORD"
    version: 2
            </div>
        </li>
        <li><b>Apply the Configuration</b>
            <p>After editing, save the file (in <code>nano</code>, press <b>Ctrl + O</b>, then <b>Enter</b>) and exit (<b>Ctrl + X</b>).</p>
            <p>Apply the configuration using:</p>
            <code>sudo netplan apply</code>
        </li>
        <li><b>Verify the Connection</b>
            <p>Check if your Wi-Fi connection is active:</p>
            <code>ip a</code>
            <p>You should see an IP address assigned to <code>wlan0</code>.</p>
            <p>To confirm internet connectivity, you can ping a website:</p>
            <code>ping -c 4 google.com</code>
        </li>
        <li><b>Reboot (Optional)</b>
            <p>If everything seems correct but you still face issues, you can reboot your Raspberry Pi:</p>
            <code>sudo reboot</code>
        </li>
    </ol>
    <div class="note">
        <p><b>Editor Controls (for <code>nano</code>):</b></p>
        <ul>
            <li><b>Ctrl + O</b> – Save the content.</li>
            <li><b>Ctrl + X</b> – Close the editor.</li>
        </ul>
        <p>Look out for the indentation of the lines in the <code>.yaml</code> file! It is very important.</p>
    </div>
        </>
      ),
    },
    "ROS installation": {
      type: "experiment",
      content: (
        <>
    <h2>Setting Up Raspberry Pi 4 with Ubuntu 20.04 Server</h2>
    

    <h3>1. Gather Required Materials</h3>
    <ul>
        <li>Raspberry Pi 4 (with power supply)</li>
        <li>microSD card (at least 16GB recommended)</li>
        <li>Card reader (to connect the microSD card to your PC)</li>
        <li>Computer with internet access</li>
        <li>HDMI cable (to connect Raspberry Pi to a monitor)</li>
        <li>USB keyboard and mouse (for initial setup)</li>
    </ul>

    <h3>2. Download Ubuntu 20.04 Server</h3>
    <ul>
        <li>Visit the official Ubuntu website.</li>
        <li>Select the Ubuntu 20.04 Server image for Raspberry Pi.</li>
    </ul>

    <h3>3. Prepare the microSD Card</h3>
    
    <ul>
        <li>Insert the microSD card into the card reader and connect it to your computer.</li>
        <li>Use software to flash the Ubuntu image onto the microSD card. You can use one of the following tools:
            <ul>
                <li><b>Raspberry Pi Imager (recommended):</b>
                    <ol>
                        <li>Download and install Raspberry Pi Imager.</li>
                        <li>Open the application and select CHOOSE OS.</li>
                        <li>Scroll down and select Ubuntu {">"} Ubuntu Server 20.04 LTS (ARM version).</li>
                        <li>Select CHOOSE STORAGE and pick your microSD card.</li>
                    </ol>
                </li>
                <li><b>balenaEtcher:</b>
                    <ol>
                        <li>Download and install balenaEtcher.</li>
                        <li>Open the application and select the downloaded .img file.</li>
                        <li>Choose the microSD card as the target.</li>
                        <li>Click Flash to start the process.</li>
                    </ol>
                </li>
            </ul>
        </li>
    </ul>

    <h3>4. Set Up the Raspberry Pi</h3>
    <ul>
        <li>Once the flashing is complete, safely eject the microSD card from your computer and insert it into the Raspberry Pi.</li>
        <li>Connect the Raspberry Pi to a monitor using an HDMI cable.</li>
        <li>Connect the USB keyboard.</li>
        <li>Finally, connect the power supply to boot up the Raspberry Pi.</li>
        <li>You can log in with the default credentials:
            <code>Username: ubuntu</code>
            <code>Password: ubuntu</code>
        </li>
        <li class="note">Upon first login, you’ll be prompted to change the password.</li>
    </ul>

    <h2>Configuring Wi-Fi on Ubuntu Server</h2>
    
    <ol>
        <li><b>Access the Terminal</b>
            <p>If you are at the terminal screen after booting, log in with your credentials (default is <b>ubuntu</b> for both username and password if you haven’t changed it).</p>
        </li>
        <li><b>Identify Your Wi-Fi Interface</b>
            <p>Use the following command to identify the Wi-Fi interface:</p>
            <code>ip a</code>
            <p>Look for an interface named something like <code>wlan0</code>.</p>
        </li>
        <li><b>Edit the Netplan Configuration File</b>
            <p>Open the Netplan configuration file with a text editor:</p>
            <code>cd /etc/netplan/</code>
            <code>sudo nano /etc/netplan/50-cloud-init.yaml</code>
            <p>(Note: I've suggested <code>nano</code> as it's a common text editor. The file name might vary slightly.)</p>
        </li>
        <li><b>Modify the Configuration</b>
            <p>In the file, add your Wi-Fi configuration. An example structure is below. Make sure to replace <code>YOUR_SSID</code> and <code>YOUR_PASSWORD</code> with your actual Wi-Fi details. Pay close attention to the indentation, as YAML is sensitive to it.</p>
            <div class="yaml-code">
network:
    ethernets:
        eth0:
            dhcp4: true
            optional: true
    wifis:
        wlan0:
            dhcp4: true
            optional: true
            access-points:
                "YOUR_SSID":
                    password: "YOUR_PASSWORD"
    version: 2
            </div>
        </li>
        <li><b>Apply the Configuration</b>
            <p>After editing, save the file (in <code>nano</code>, press <b>Ctrl + O</b>, then <b>Enter</b>) and exit (<b>Ctrl + X</b>).</p>
            <p>Apply the configuration using:</p>
            <code>sudo netplan apply</code>
        </li>
        <li><b>Verify the Connection</b>
            <p>Check if your Wi-Fi connection is active:</p>
            <code>ip a</code>
            <p>You should see an IP address assigned to <code>wlan0</code>.</p>
            <p>To confirm internet connectivity, you can ping a website:</p>
            <code>ping -c 4 google.com</code>
        </li>
        <li><b>Reboot (Optional)</b>
            <p>If everything seems correct but you still face issues, you can reboot your Raspberry Pi:</p>
            <code>sudo reboot</code>
        </li>
    </ol>
    <div class="note">
        <p><b>Editor Controls (for <code>nano</code>):</b></p>
        <ul>
            <li><b>Ctrl + O</b> – Save the content.</li>
            <li><b>Ctrl + X</b> – Close the editor.</li>
        </ul>
        <p>Look out for the indentation of the lines in the <code>.yaml</code> file! It is very important.</p>
    </div>

    <h2>ROS Noetic Installation</h2>
    
    <p><b>Documentation:</b> <a href="https://wiki.ros.org/Documentation" target="_blank">https://wiki.ros.org/Documentation</a></p>
    <p><b>Linorobot package:</b> <a href="https://github.com/linorobot/linorobot" target="_blank">https://github.com/linorobot/linorobot</a></p>

    <h3>1. Configure your Ubuntu repositories</h3>
    <p>Configure your Ubuntu repositories to allow "restricted," "universe," and "multiverse." You can follow the <a href="https://help.ubuntu.com/community/Repositories/Ubuntu" target="_blank">Ubuntu guide</a> for instructions on doing this.</p>

    <h3>2. Setup your sources.list</h3>
    <p>Set up your computer to accept software from packages.ros.org.</p>
    <code>sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" {">"} /etc/apt/sources.list.d/ros-latest.list'</code>

    <h3>3. Set up your keys</h3>
    <code>sudo apt install curl  if you haven't already installed curl</code>
    <code>curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -</code>

    <h3>4. Installation</h3>
    <p>First, make sure your Debian package index is up-to-date:</p>
    <code>sudo apt update</code>
    <p>Now pick how much of ROS you would like to install.</p>
    <p><b>Desktop-Full Install: (Recommended)</b> : Everything in Desktop plus 2D/3D simulators and 2D/3D perception packages</p>
    <code>sudo apt install ros-noetic-desktop-full</code>

    <h3>5. Environment setup</h3>
    <p>You must source this script in every bash terminal you use ROS in.</p>
    <code>source /opt/ros/noetic/setup.bash</code>
    <p>It can be convenient to automatically source this script every time a new shell is launched. These commands will do that for you (for Bash):</p>
    <code>echo "source /opt/ros/noetic/setup.bash" {">"}{">"} ~/.bashrc</code>
    <code>source ~/.bashrc</code>

    <h3>6. Dependencies for building packages</h3>
    <p>To create and manage your own ROS workspaces, there are various tools and requirements that are distributed separately. To install these tools and other dependencies for building ROS packages, run:</p>
    <code>sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential</code>

    <h3>7. Initialize rosdep</h3>
    <p>Before  you can use many ROS tools, you will need to initialize rosdep. If you have not yet installed rosdep, do so as follows.</p>
    <code>sudo apt install python3-rosdep</code>
    <p>With the following, you can initialize rosdep.</p>
    <code>sudo rosdep init</code>
    <code>rosdep update</code>
        </>
      ),
    },
    "Installing Platform IO on Ubuntu Server 20.04": {
      type: "experiment",
      content: (
        <>
   <h2>ROS Noetic Installation</h2>
    
    <p><b>Documentation:</b> <a href="https://wiki.ros.org/Documentation" target="_blank">https://wiki.ros.org/Documentation</a></p>
    <p><b>Linorobot package:</b> <a href="https://github.com/linorobot/linorobot" target="_blank">https://github.com/linorobot/linorobot</a></p>

    <h3>1. Configure your Ubuntu repositories</h3>
    <p>Configure your Ubuntu repositories to allow "restricted," "universe," and "multiverse." You can follow the <a href="https://help.ubuntu.com/community/Repositories/Ubuntu" target="_blank">Ubuntu guide</a> for instructions on doing this.</p>

    <h3>2. Setup your sources.list</h3>
    <p>Set up your computer to accept software from packages.ros.org.</p>
    <code>sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" {">"} /etc/apt/sources.list.d/ros-latest.list'</code>

    <h3>3. Set up your keys</h3>
    <code>sudo apt install curl  if you haven't already installed curl</code>
    <code>curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -</code>

    <h3>4. Installation</h3>
    <p>First, make sure your Debian package index is up-to-date:</p>
    <code>sudo apt update</code>
    <p>Now pick how much of ROS you would like to install.</p>
    <p><b>Desktop-Full Install: (Recommended)</b> : Everything in Desktop plus 2D/3D simulators and 2D/3D perception packages</p>
    <code>sudo apt install ros-noetic-desktop-full</code>

    <h3>5. Environment setup</h3>
    <p>You must source this script in every bash terminal you use ROS in.</p>
    <code>source /opt/ros/noetic/setup.bash</code>
    <p>It can be convenient to automatically source this script every time a new shell is launched. These commands will do that for you (for Bash):</p>
    <code>echo "source /opt/ros/noetic/setup.bash" {">"}{">"} ~/.bashrc</code>
    <code>source ~/.bashrc</code>

    <h3>6. Dependencies for building packages</h3>
    <p>To create and manage your own ROS workspaces, there are various tools and requirements that are distributed separately. For example, rosinstall is a frequently used command-line tool that enables you to easily download many source trees for ROS packages with one command.</p>
    <p>To install this tool and other dependencies for building ROS packages, run:</p>
    <code>sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential</code>

    <h3>7. Initialize rosdep</h3>
    <p>Before you can use many ROS tools, you will need to initialize rosdep. rosdep enables you to easily install system dependencies for source you want to compile and is required to run some core components in ROS. If you have not yet installed rosdep, do so as follows.</p>
    <code>sudo apt install python3-rosdep</code>
    <p>With the following, you can initialize rosdep.</p>
    <code>sudo rosdep init</code>
    <code>rosdep update</code>
        </>
      ),
    },
        "Firmware Installation Setup": {
      type: "experiment",
      content: (
        <>
    <h2>Uploading Linorobot Firmware to Teensy with PlatformIO</h2>
    
    <ol>
        <li><b>Download the Linorobot Package</b>
            <p>Open a terminal and navigate to your desired directory.</p>
            <p>Clone the Linorobot package repository:</p>
            <code>git clone https://github.com/linorobot/linorobot.git</code>
            <p>Change into the Linorobot directory:</p>
            <code>cd linorobot</code>
        </li>
        <li><b>Navigate to the Firmware Folder</b>
            <p>Locate the firmware directory inside the Linorobot package, where the Teensy code is stored:</p>
            <code>cd firmware</code>
        </li>
        <li><b>Install PlatformIO Dependencies</b>
            <p>Use PlatformIO to set up the required dependencies. Run the following command in the firmware directory:</p>
            <code>platformio run</code>
            <p>This will automatically download any required libraries specified in the <code>platformio.ini</code> file.</p>
        </li>
        <li><b>Connect the Teensy to Your Raspberry Pi</b>
            <p>Connect your Teensy microcontroller to the Raspberry Pi via USB. Ensure that the Raspberry Pi recognizes it by checking with:</p>
            <code>ls /dev/tty*</code>
            <p>Look for a port like <code>/dev/ttyACM0</code> or similar.</p>
        </li>
        <li><b>Configure the PlatformIO Environment for Teensy</b>
            <p>Open the <code>platformio.ini</code> file in the firmware folder to confirm the environment configuration for Teensy. Make sure it includes settings like:</p>
            <div class="code-block">
[env:teensy]
platform = teensy
board = teensy41   or your specific Teensy model
framework = arduino
upload_port = /dev/ttyACM0   Replace with the detected port
            </div>
        </li>
        <li><b>Upload the Firmware to the Teensy</b>
            <p>With everything configured, use PlatformIO to upload the firmware to the Teensy:</p>
            <code>pio run –t upload</code>
            <p>This will compile the code and upload it to the Teensy.</p>
        </li>
        <li><b>Verify the Upload</b>
            <p>PlatformIO should display a success message once the code is uploaded. You can verify functionality through serial communication or by testing specific movements if connected to motors.</p>
        </li>
    </ol>
        </>
      ),
    },
        "ROS Setup": {
      type: "experiment",
      content: (
        <>
    <h2>Setting Up the ROS Workspace</h2>
    <p>Follow these steps on your main computer (PC/laptop) to download the workspace and copy it to the Raspberry Pi.</p>
    <ol>
        <li><b>Download the Workspace File:</b>
            <p>Download the workspace <code>.zip</code> or <code>.tar.gz</code> file from the provided link:</p>
            <p><a href="[download link]" target="_blank">Instruction link: [download link]</a> (Replace '[download link]' with the actual URL)</p>
        </li>
        <li><b>Extract the File:</b>
            <p>Extract the downloaded file to your home directory (<code>~/</code>).</p>
            <p>Example for a <code>.zip</code> file:</p>
            <code>unzip Scorpion_ws.zip -d ~/</code>
            <p>Example for a <code>.tar.gz</code> file:</p>
            <code>tar -xvzf Scorpion_ws.tar.gz -C ~/</code>
            <p>This should create a folder named <code>Scorpion_ws</code> in your home directory.</p>
        </li>
        <li><b>Copy Workspace to Raspberry Pi:</b>
            <p>Use the <code>scp</code> command to securely copy the entire <code>Scorpion_ws</code> folder to the Raspberry Pi's home directory. Open a terminal on your PC/laptop and run:</p>
            <code>scp -r ~/Scorpion_ws &lt;username of raspberry pi&gt;@&lt;ipaddressofraspberry pi&gt;:~/</code>
            <p>Replace <code>&lt;username of raspberry pi&gt;</code> with your Raspberry Pi's username (e.g., <code>ubuntu</code>) and <code>&lt;ipaddressofraspberry pi&gt;</code> with its IP address.</p>
            <p>You might be prompted for the Raspberry Pi's password.</p>
            <p>This command copies the <code>Scorpion_ws</code> directory recursively (<code>-r</code>) to the specified destination on the Raspberry Pi.</p>
        </li>
        <li><b>Source .bashrc on Raspberry Pi (Optional but Recommended):</b>
            <p>After copying, it's often necessary to source the <code>.bashrc</code> file on the Raspberry Pi, especially if you added ROS environment setup lines earlier. You can do this the next time you SSH into the Pi, or run it immediately:</p>
            <p>First, SSH into the Pi:</p>
            <code>ssh &lt;username of raspberry pi&gt;@&lt;ipaddressofraspberry pi&gt;</code>
            <p>Then, source the file:</p>
            <code>source ~/.bashrc</code>
        </li>
    </ol>
        </>
      ),
    },

        "Transeferring the Working and Building with Catkin": {
      type: "experiment",
      content: (
        <>
        <h3>Part 1: Copy and Build Workspace on Raspberry Pi</h3>
        <ol>
            <li><b>Copy the Workspace from Local to Raspberry Pi</b>
                <p>Download the workspace from the provided link. Open a terminal on your computer (where the workspace is located) and use <code>scp</code> to transfer the workspace to your Raspberry Pi. Replace <code>&lt;PATH_TO_WORKSPACE&gt;</code> with the path to your workspace on your local machine and <code>&lt;Raspberry_Pi_IP_Address&gt;</code> with your Pi’s IP address.</p>
                <code>scp -r &lt;PATH_TO_WORKSPACE&gt;/scorpion_ws ubuntu@&lt;Raspberry_Pi_IP_Address&gt;:/home/ubuntu/</code>
                <p>This command will recursively (<code>-r</code>) copy the <code>scorpion_ws</code> folder to the Raspberry Pi's <code>/home/ubuntu</code> directory.</p>
            </li>
            
            <li><b>SSH into Your Raspberry Pi</b>
                <p>Once the transfer is complete, SSH into your Raspberry Pi:</p>
                <code>ssh ubuntu@&lt;Raspberry_Pi_IP_Address&gt;</code>
            </li>
            
            <li><b>Navigate to the Workspace Directory</b>
                <p>Go to the workspace folder that was just transferred.</p>
                <code>cd /home/ubuntu/scorpion_ws</code>
            </li>
            
            <li><b>Remove build and devel Directories</b>
                <p>Use the following commands to delete the <code>build</code> and <code>devel</code> directories if they exist:</p>
                <code>sudo rm -r build/ devel/</code>
            </li>
            
            <li><b>Build the Workspace with catkin_make</b>
                <p>Run <code>catkin_make</code> to build the workspace:</p>
                <code>catkin_make</code>
                <p>The command will compile and set up the packages within the workspace.</p>
            </li>
            
            <li><b>Source the Workspace</b>
                <p>Finally, source the workspace to make the packages accessible in your current shell session:</p>
                <code>source devel/setup.bash</code>
            </li>
        </ol>

        <h3>Part 2: Configure ROS Network (Master/Slave)</h3>
        
        <h4>Configure the .bashrc file of Raspberry Pi (ROS Master)</h4>
        <ol>
            <li>
                <p>In your SSH session with the Raspberry Pi, edit the <code>.bashrc</code> file:</p>
                <code>sudo nano ~/.bashrc</code>
            </li>
            <li>
                <p>Add the following line at the end of the file. Replace <code>&lt;Ip of the raspberrypi&gt;</code> with your Pi's actual IP address.</p>
                <code>export ROS_IP=&lt;Ip of the raspberrypi&gt;</code>
            </li>
            <li>
                <p>After adding the line, save the file (<b>Ctrl + O</b>, then <b>Enter</b>) and close the editor (<b>Ctrl + X</b>).</p>
            </li>
            <li>
                <p>Source the <code>.bashrc</code> file to apply the changes:</p>
                <code>source ~/.bashrc</code>
            </li>
        </ol>

        <h4>Configure the .bashrc file of the Laptop (ROS Slave)</h4>
        <ol>
            <li>
                <p>Open a <b>new terminal on your laptop</b> (not on the Pi) and edit its <code>.bashrc</code> file:</p>
                <code>sudo nano ~/.bashrc</code>
            </li>
            <li>
                <p>Add the following two lines to the end of the file. Replace <code>&lt;Ip of the laptop&gt;</code> with your laptop's IP address and <code>&lt;ip of raspberry pi&gt;</code> with the Pi's IP address.</p>
                <code>export ROS_IP=&lt;Ip of the laptop&gt;</code>
                <code>export ROS_MASTER_URI=http://&lt;ip of raspberry pi&gt;:11311/</code>
            </li>
            <li>
                <p>After adding the lines, save the file (<b>Ctrl + O</b>, then <b>Enter</b>) and close the editor (<b>Ctrl + X</b>).</p>
            </li>
            <li>
                <p>Source the <code>.bashrc</code> file to apply the changes:</p>
                <code>source ~/.bashrc</code>
            </li>
        </ol>
        </>
      ),
    },
    // Add all other beginner, intermediate, advanced items similarly

    "Wireless Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to control the Scorpion using the "Arduino Bluetooth Control" mobile app. By executing this code and using the app, you can make the Scorpion robot move forward, backward, turn left, turn right, stop and move the 3DOF arm in forward and backward directions.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the terminal tab to send commands to the Scorpion:
            <ul>
                <li><code>f</code>: Move forward</li>
                <li><code>b</code>: Move backward</li>
                <li><code>r</code>: Turn right (Note: 'r' for right, 'l' for left as per convention)</li>
                <li><code>l</code>: Turn left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward</li>
                <li><code>d</code>: Base servo move backward</li>
                <li><code>g</code>: Middle servo move forward</li>
                <li><code>h</code>: Middle servo move backward</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <p>The scorpion robot operates in response to specific commands received from the mobile application, enabling precise and controlled movements of both the chassis and the 3DOF arm.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use a different Bluetooth app for control?</b></p>
            <p>A: Yes, if the app allows sending single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>, and <code>s</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I modify the code for different motor speeds?</b></p>
            <p>A: Adjust the values of the PWM variable (or similar speed control variables) within the Arduino code for different motor speeds.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A: In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Button Controlled Robot": {
      type: "experiment",
      content: (
        <>
        <h2>Objective</h2>
    <p>The objective of this experiment is to control Scorpion using buttons via mobile app. By executing this code and using the app, you can make the Scorpion move forward, backward, turn left, turn right, stop and move the 3DOF arm in forward and backward directions.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Select the <b>Button</b> option within the app.</li>
        <li>Configure the buttons in the app's settings to send the following commands:
            <ul>
                <li><code>f</code>: Move forward</li>
                <li><code>b</code>: Move backward</li>
                <li><code>r</code>: Turn right</li>
                <li><code>l</code>: Turn left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward</li>
                <li><code>d</code>: Base servo move backward</li>
                <li><code>g</code>: Middle servo move forward</li>
                <li><code>h</code>: Middle servo move backward</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>Use the configured buttons to operate the Scorpion.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The scorpion robot operates in response to specific button-based commands received from the mobile application, enabling precise and controlled movements of both the chassis and the 3DOF arm.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use a different Bluetooth app for control?</b></p>
            <p>A: Yes, if the app allows configuring buttons to send single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>, and <code>s</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I modify the code for different motor speeds?</b></p>
            <p>A: Adjust the values of the PWM variable (or similar speed control variables) within the Arduino code for different motor speeds.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A: In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Voice Controlled Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to control Scorpion using voice commands via mobile app. By executing this code and using the app, you can make the Scorpion move forward, backward, turn left, turn right, stop and move the 3DOF arm in forward and backward directions.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Select the <b>Voice</b> option within the app.</li>
        <li>Configure the voice commands in the app's settings. You will need to associate spoken words (e.g., "forward", "backward", "left", "right", "stop", "base forward", "base back", "middle forward", "middle back", "close", "open", "stop arm") with the corresponding single character commands to be sent via Bluetooth:
            <ul>
                <li><code>f</code>: Move forward</li>
                <li><code>b</code>: Move backward</li>
                <li><code>r</code>: Turn right</li>
                <li><code>l</code>: Turn left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward</li>
                <li><code>d</code>: Base servo move backward</li>
                <li><code>g</code>: Middle servo move forward</li>
                <li><code>h</code>: Middle servo move backward</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>Use voice commands to operate the Scorpion.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The scorpion robot operates in response to specific voice commands received from the mobile application, enabling precise and controlled movements of both the chassis and the 3DOF arm.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use a different Bluetooth app for control?</b></p>
            <p>A: Yes, if the app supports voice recognition and allows configuring voice commands to send specific single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, etc.) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I modify the code for different motor speeds?</b></p>
            <p>A: Adjust the values of the PWM variable (or similar speed control variables) within the Arduino code for different motor speeds.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A: In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>

        </>
      ),
    },
        "Joystick Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to control Scorpion using Joystick commands via mobile app. By executing this code and using the app, you can make the Scorpion move forward, backward, turn left, turn right, stop and move the 3DOF arm in forward and backward directions.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Blueduino" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Blueduino" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Select the <b>joystick</b> option within the app.</li>
        <li>Configure the joystick directions and any additional buttons in the app's settings to send the following commands:
            <ul>
                <li><code>f</code>: Move forward (e.g., Joystick Up)</li>
                <li><code>b</code>: Move backward (e.g., Joystick Down)</li>
                <li><code>r</code>: Turn right (e.g., Joystick Right)</li>
                <li><code>l</code>: Turn left (e.g., Joystick Left)</li>
                <li><code>s</code>: Stop robot movement (e.g., Joystick Center or a dedicated button)</li>
                <li><code>c</code>: Base servo move forward (e.g., Button 1)</li>
                <li><code>d</code>: Base servo move backward (e.g., Button 2)</li>
                <li><code>g</code>: Middle servo move forward (e.g., Button 3)</li>
                <li><code>h</code>: Middle servo move backward (e.g., Button 4)</li>
                <li><code>i</code>: Close gripper (e.g., Button 5)</li>
                <li><code>j</code>: Open gripper (e.g., Button 6)</li>
                <li><code>e</code>: Stop servos (e.g., Button 7)</li>
            </ul>
        </li>
        <li>Use the joystick and configured buttons to operate the Scorpion.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The scorpion robot operates in response to specific joystick-based commands received from the mobile application, enabling precise and controlled movements of both the chassis and the 3DOF arm.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use a different Bluetooth app for control?</b></p>
            <p>A: Yes, if the app provides a joystick interface and allows configuring the joystick directions/buttons to send single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, etc.) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I modify the code for different motor speeds?</b></p>
            <p>A: Adjust the values of the PWM variable (or similar speed control variables) within the Arduino code for different motor speeds.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A: In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>

        </>
      ),
    },
        "Obstacle Detection Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to create an obstacle detection robot using the Scorpion robot. The Scorpion is equipped with an ultrasonic sensor to detect obstacles. The robot stops moving forward to avoid collisions when obstacles are close. The 3DOF arm can be used to remove obstacles.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Ultrasonic sensor: J6</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Use the command <code>a</code> to start the autonomous movement of the robot.</li>
        <li>The robot starts moving forward until it detects an obstacle within 30 units (configurable).</li>
        <li>When an obstacle is detected, the robot stops.</li>
        <li>Use the following commands in the terminal to control the 3DOF arm and remove the obstacle:
            <ul>
                <li><code>f</code>: Move robot forward (for fine adjustment)</li>
                <li><code>b</code>: Move robot backward (for fine adjustment)</li>
                <li><code>r</code>: Turn robot right (for fine adjustment)</li>
                <li><code>l</code>: Turn robot left (for fine adjustment)</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward</li>
                <li><code>d</code>: Base servo move backward</li>
                <li><code>g</code>: Middle servo move forward</li>
                <li><code>h</code>: Middle servo move backward</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>After removing the obstacle, you can send the <code>a</code> command again to resume autonomous movement or continue manual control.</li>
    </ol>

    <h2>Expected Results</h2>
    <ul>
        <li>The Scorpion should autonomously move forward and stop when obstacles are detected within the specified range (default 30 units).</li>
        <li>Upon detecting an obstacle, the user should be able to control the 3DOF arm using the mobile app terminal commands to interact with or remove the obstacle.</li>
    </ul>

    <h2>Additional Information</h2>
    <ul>
        <li>Adjust the distance threshold in the Arduino code to modify the obstacle detection range. Look for a line similar to <code>if (distance {"<"} 30)</code>.</li>
        <li>This experiment demonstrates a basic obstacle avoidance mechanism combined with manual intervention using the robotic arm.</li>
    </ul>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I modify the distance threshold for obstacle detection?</b></p>
            <p>A: Yes, you can adjust the distance threshold in the code to customize the obstacle detection range. Look for the condition <code>if (distance{"<"}30)</code> and change the value "30" to your desired distance.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A: In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>

        </>
      ),
    },
        "Pick and Place": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to use the Scorpion robot to perform pick-and-place tasks. The robot consists of a two-wheeled base for mobility and a 3-DOF arm controlled by servo motors. By using the provided code, you will be able to control the robot's movement and the robotic arm's positioning to pick up and place objects.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the commands below to operate the Scorpion robot for pick-and-place tasks:
            <ul>
                <li><code>f</code>: Move robot forward</li>
                <li><code>b</code>: Move robot backward</li>
                <li><code>r</code>: Turn robot right</li>
                <li><code>l</code>: Turn robot left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward (e.g., rotate base clockwise)</li>
                <li><code>d</code>: Base servo move backward (e.g., rotate base counter-clockwise)</li>
                <li><code>g</code>: Middle servo move forward (e.g., lower arm)</li>
                <li><code>h</code>: Middle servo move backward (e.g., raise arm)</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <p>The robot will navigate according to the commands received, moving to designated locations. Using the specified commands for operating the 3DOF (Degrees of Freedom) manipulator, the robot will be capable of picking up objects and placing them at required positions with precision.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal apps can also be used if they allow sending the specified single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>s</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds?</b></p>
            <p>A: Modify the PWM constant or speed-related variables within the Arduino code, likely found in functions controlling forward and backward movement.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A. In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Pick and Drag Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to utilize the Scorpion robot to push objects backward using its 3-DOF robotic arm. The robot consists of a two-wheeled base for mobility and a robotic arm controlled by servo motors. By using the provided code, you will be able to control the robot’s movement and the arm’s positioning to push objects effectively.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the commands below to navigate the Scorpion robot and position its arm to push objects:
            <ul>
                <li><code>f</code>: Move robot forward</li>
                <li><code>b</code>: Move robot backward</li>
                <li><code>r</code>: Turn robot right</li>
                <li><code>l</code>: Turn robot left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward (e.g., rotate base clockwise)</li>
                <li><code>d</code>: Base servo move backward (e.g., rotate base counter-clockwise)</li>
                <li><code>g</code>: Middle servo move forward (e.g., lower arm)</li>
                <li><code>h</code>: Middle servo move backward (e.g., raise arm)</li>
                <li><code>i</code>: Close gripper (or move end effector forward)</li>
                <li><code>j</code>: Open gripper (or move end effector backward)</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>Navigate the robot near the object, position the arm using the servo commands, and use the arm or gripper (depending on configuration) to push the object backward, potentially using the robot's backward movement (<code>b</code>) simultaneously.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The robot will navigate to specified locations based on the commands received. Using commands for controlling the 3DOF arm, the robot will be capable of positioning its arm and using it to push objects to designated positions as instructed by the user.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal apps can also be used if they allow sending the specified single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>s</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds?</b></p>
            <p>A: Modify the PWM constant or speed-related variables within the Arduino code, likely found in functions controlling forward and backward movement.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A. In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>

        </>
      ),
    },
        "Organising Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to utilize the Scorpion robot to collect spread objects and place them into a specified location. The robot’s 3-DOF robotic arm will be used to grab, move, and place objects accurately. This exercise will demonstrate the robot's capability to perform basic sorting and assembly tasks.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the commands below to operate the Scorpion robot for collecting and placing objects:
            <ul>
                <li><code>f</code>: Move robot forward</li>
                <li><code>b</code>: Move robot backward</li>
                <li><code>r</code>: Turn robot right</li>
                <li><code>l</code>: Turn robot left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward (e.g., rotate base clockwise)</li>
                <li><code>d</code>: Base servo move backward (e.g., rotate base counter-clockwise)</li>
                <li><code>g</code>: Middle servo move forward (e.g., lower arm)</li>
                <li><code>h</code>: Middle servo move backward (e.g., raise arm)</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>Navigate the robot to the location of the objects. Use the arm and gripper commands (<code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>) to pick up an object.</li>
        <li>Navigate the robot to the specified drop-off location.</li>
        <li>Use the arm and gripper commands again to release the object.</li>
        <li>Repeat the process for other objects.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The robot is used for organizing objects. Based on the received commands, the robot moves to specified locations, uses its arm to pick up objects, and places them in designated positions as directed by the user.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal apps can also be used if they allow sending the specified single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>s</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds?</b></p>
            <p>A: Modify the PWM constant or speed-related variables within the Arduino code, likely found in functions controlling forward and backward movement.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A. In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Path Clearing Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to use the Scorpion robot’s 3-DOF arm to clear obstacles from a designated path. The robot will use its arm to grasp and move obstacles, ensuring a clear path for continued navigation.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the commands below to operate the Scorpion robot for path clearing:
            <ul>
                <li><code>f</code>: Move robot forward</li>
                <li><code>b</code>: Move robot backward</li>
                <li><code>r</code>: Turn robot right</li>
                <li><code>l</code>: Turn robot left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward (e.g., rotate base clockwise)</li>
                <li><code>d</code>: Base servo move backward (e.g., rotate base counter-clockwise)</li>
                <li><code>g</code>: Middle servo move forward (e.g., lower arm)</li>
                <li><code>h</code>: Middle servo move backward (e.g., raise arm)</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>Navigate the robot towards the obstacle using movement commands (<code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>).</li>
        <li>Position the arm and gripper using servo commands (<code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>j</code>) to approach the obstacle.</li>
        <li>Grasp the obstacle using the close gripper command (<code>i</code>).</li>
        <li>Navigate the robot (using <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>) to move the obstacle out of the path.</li>
        <li>Release the obstacle using the open gripper command (<code>j</code>).</li>
        <li>Move the robot away and repeat for other obstacles if necessary.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>This experiment involves clearing a path using specific commands. The robot will navigate through the environment, removing obstacles or repositioning objects to create a clear pathway, as instructed by the received commands.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal apps can also be used if they allow sending the specified single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>s</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds?</b></p>
            <p>A: Modify the PWM constant or speed-related variables within the Arduino code, likely found in functions controlling forward and backward movement.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A. In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Stacking Blocks": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to use the Scorpion robot’s 3-DOF robotic arm to stack blocks in a specified arrangement. This involves moving blocks to a stacking position and placing them one on top of another.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the commands below to operate the Scorpion robot for block stacking:
            <ul>
                <li><code>f</code>: Move robot forward</li>
                <li><code>b</code>: Move robot backward</li>
                <li><code>r</code>: Turn robot right</li>
                <li><code>l</code>: Turn robot left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward (e.g., rotate base clockwise)</li>
                <li><code>d</code>: Base servo move backward (e.g., rotate base counter-clockwise)</li>
                <li><code>g</code>: Middle servo move forward (e.g., lower arm)</li>
                <li><code>h</code>: Middle servo move backward (e.g., raise arm)</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>Navigate the robot to the location of the first block.</li>
        <li>Use the arm and gripper commands (<code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>) to pick up the block.</li>
        <li>Navigate the robot to the stacking location.</li>
        <li>Carefully position the arm and release the block using the gripper command (<code>j</code>).</li>
        <li>Navigate to the next block, pick it up, and return to the stacking location.</li>
        <li>Position the arm precisely above the first block and release the second block to stack it.</li>
        <li>Repeat for subsequent blocks.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The robot can be used to pick up blocks from one position and place them in another, according to user commands. Using the 3DOF arm, the robot can stack the blocks on top of one another, following the specified instructions for precise placement.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal apps can also be used if they allow sending the specified single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>s</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds?</b></p>
            <p>A: Modify the PWM constant or speed-related variables within the Arduino code, likely found in functions controlling forward and backward movement.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A. In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Straight Line Stacking Blocks": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this experiment is to use the Scorpion robot’s 3-DOF robotic arm to stack blocks in a line. This involves moving blocks to a stacking position and placing them in a line pattern.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1: J33</li>
        <li>Servo motor 2: J21</li>
        <li>Servo motor 3: J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the commands below to operate the Scorpion robot for stacking blocks in a line:
            <ul>
                <li><code>f</code>: Move robot forward</li>
                <li><code>b</code>: Move robot backward</li>
                <li><code>r</code>: Turn robot right</li>
                <li><code>l</code>: Turn robot left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward (e.g., rotate base clockwise)</li>
                <li><code>d</code>: Base servo move backward (e.g., rotate base counter-clockwise)</li>
                <li><code>g</code>: Middle servo move forward (e.g., lower arm)</li>
                <li><code>h</code>: Middle servo move backward (e.g., raise arm)</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>Navigate the robot to the location of the first block.</li>
        <li>Use the arm and gripper commands (<code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>) to pick up the block.</li>
        <li>Navigate the robot to the desired starting point of the line.</li>
        <li>Carefully position the arm and release the block using the gripper command (<code>j</code>).</li>
        <li>Navigate to the next block, pick it up.</li>
        <li>Return to the line location and carefully position the arm next to the first block.</li>
        <li>Release the second block to place it in line with the first.</li>
        <li>Repeat for subsequent blocks, ensuring they are placed adjacent to each other in a straight line.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The robot can pick up blocks from one position and place them in another, following user commands. Using the 3DOF arm, the robot can stack the blocks in a straight line, ensuring precise alignment and positioning as instructed.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal apps can also be used if they allow sending the specified single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>s</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds?</b></p>
            <p>A: Modify the PWM constant or speed-related variables within the Arduino code, likely found in functions controlling forward and backward movement.</p>
        </li>
        <li>
            <p><b>Q: How do I install the SERVO library?</b></p>
            <p>A. In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Shape Forming Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>This innovative robot is designed to create specific shapes with its arm, introducing you to the fascinating world of robotic movements. This user manual will guide you through the setup and operation of your Shape Forming Robot using the Scorpion platform.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1 (Base): J33</li>
        <li>Servo motor 2 (Middle): J21</li>
        <li>Servo motor 3 (Gripper): J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the commands below to operate the Scorpion robot's arm:
            <ul>
                <li><code>i</code>: The arm should move to form an "I" shape (straight configuration).</li>
                <li><code>l</code>: The arm should move to form an "L" shape (angled configuration).</li>
            </ul>
        </li>
        <li>Observe the movement of the robot's arm as it responds to the commands.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Scorpion robot moves forward for 1 second upon startup (as often programmed for initialization) and then operates its arm in response to specific commands received from the mobile application, enabling precise and controlled shape formations.</p>
    <ul>
        <li>When the command <code>i</code> is sent through the mobile application, the arm will perform an "I"-shaped movement (e.g., extend straight).</li>
        <li>When the command <code>l</code> is sent through the mobile application, the arm will perform an "L"-shaped movement (e.g., form a right angle).</li>
    </ul>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal apps can also be used if they allow sending the specified single characters (like <code>i</code>, <code>l</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How do I install the SERVO library?</b></p>
            <p>A. In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
        <li>
            <p><b>Q: The arm doesn't form the exact shape. What can I do?</b></p>
            <p>A: Check the servo connections and ensure they are correct. You might need to adjust the angle values within the Arduino code corresponding to the 'i' and 'l' commands to fine-tune the positions for your specific robot build.</p>
        </li>
    </ul>

        </>
      ),
    },
        "Drawing Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>This innovative robot is designed to draw shapes like circles or rectangles, introducing you to the fascinating world of robotic movements. This user manual will guide you through the setup and operation of your Drawing Robot using the Scorpion platform.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1 (Base): J33</li>
        <li>Servo motor 2 (Middle): J21</li>
        <li>Servo motor 3 (Gripper): J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Arduino Bluetooth Control" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Power on the Scorpion robot.</li>
        <li>Select the <b>terminal</b> option within the app.</li>
        <li>Use the commands below to operate the Scorpion robot for drawing:
            <ul>
                <li><code>f</code>: Move robot forward</li>
                <li><code>b</code>: Move robot backward</li>
                <li><code>r</code>: Turn robot right</li>
                <li><code>l</code>: Turn robot left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward (e.g., rotate base clockwise)</li>
                <li><code>d</code>: Base servo move backward (e.g., rotate base counter-clockwise)</li>
                <li><code>g</code>: Middle servo move forward (e.g., lower arm)</li>
                <li><code>h</code>: Middle servo move backward (e.g., raise arm)</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>First, move the robot to pick up a pen or pencil from a pen holder using the arm and gripper commands.</li>
        <li>Position the tip of the pen or pencil onto the paper on the ground, ensuring it maintains contact.</li>
        <li>Use the movement commands (<code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>) to draw shapes:
            <ul>
                <li>To draw a circle, turn the robot left (<code>l</code>) or right (<code>r</code>) continuously while potentially adjusting forward/backward motion slightly.</li>
                <li>To draw a rectangle, use a sequence of forward (<code>f</code>), turn (<code>l</code> or <code>r</code>), forward (<code>f</code>), turn (<code>l</code> or <code>r</code>), etc. commands.</li>
            </ul>
        </li>
        <li>Experiment with sequences of commands to draw different shapes as per your requirements.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Scorpion robot is capable of drawing shapes, such as rectangles or circles, by moving in the specified patterns after securely holding a pen or pencil using its 3DOF arm.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal apps can also be used if they allow sending the specified single characters (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, <code>s</code>, <code>c</code>, <code>d</code>, <code>g</code>, <code>h</code>, <code>i</code>, <code>j</code>, <code>e</code>) over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How do I install the servo library?</b></p>
            <p>A. In the Arduino IDE, go to Sketch -{">"} Include Library -{">"} Manage Libraries. Search for "Servo" and click "Install" on the official Servo library by Michael Margolis.</p>
        </li>
         <li>
            <p><b>Q: The drawing isn't precise. How can I improve it?</b></p>
            <p>A: Ensure the pen is held firmly by the gripper. Try adjusting the speed (PWM values in the code) for slower, more controlled movements. The surface you are drawing on should also be flat and smooth.</p>
        </li>
    </ul>

        </>
      ),
    },
        "Switch Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to control the Scorpion robot using switches via the "Blueduino" mobile app. By executing this code and using the app, you can make the Scorpion move forward, backward, turn left, turn right, stop, and move its 3DOF arm in forward and backward directions.</p>

    <h2>Hardware Setup</h2>
    <p>Before running the experiment, ensure that the Scorpion hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Scorpion is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
    <p>Ensure that the Teensy 4.0 and the level shifter are securely fixed in their respective connectors on the PCB board. Verify the connections between the PCB connectors and the following components:</p>
    <ul>
        <li>Motor: J31, J34</li>
        <li>Motor driver: J13, J4, J5</li>
        <li>Servo motor 1 (Base): J33</li>
        <li>Servo motor 2 (Middle): J21</li>
        <li>Servo motor 3 (Gripper): J24</li>
        <li>Bluetooth module: J8</li>
        <li>Power jumpers: J1, J2, J3</li>
    </ul>
    <p>Make sure all connections are properly secured before proceeding with the experiment.</p>

    <h2>Libraries</h2>
    <p>The required library for this experiment is:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h2>Mobile App Setup</h2>
    
    <ol>
        <li>Download and install the "Blueduino" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Blueduino" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module.</li>
        <li>Select the <b>Switch</b> option within the app.</li>
        <li>Configure the switches and their corresponding commands in the app's settings.</li>
        <li>Use the commands below to assign to switches and operate the Scorpion:
            <ul>
                <li><code>f</code>: Move robot forward</li>
                <li><code>b</code>: Move robot backward</li>
                <li><code>r</code>: Turn robot right</li>
                <li><code>l</code>: Turn robot left</li>
                <li><code>s</code>: Stop robot movement</li>
                <li><code>c</code>: Base servo move forward (e.g., rotate base clockwise)</li>
                <li><code>d</code>: Base servo move backward (e.g., rotate base counter-clockwise)</li>
                <li><code>g</code>: Middle servo move forward (e.g., lower arm)</li>
                <li><code>h</code>: Middle servo move backward (e.g., raise arm)</li>
                <li><code>i</code>: Close gripper</li>
                <li><code>j</code>: Open gripper</li>
                <li><code>e</code>: Stop servos</li>
            </ul>
        </li>
        <li>Activate the configured switches in the app to send commands and control the Scorpion.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Scorpion robot operates in response to specific switch-based commands received from the "Blueduino" mobile application, enabling precise and controlled movements.</p>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use a different Bluetooth app for control?</b></p>
            <p>A: Yes, if the app allows sending single character commands (like <code>f</code>, <code>b</code>, <code>l</code>, <code>r</code>, etc.) over Bluetooth serial communication and supports switch-like interfaces.</p>
        </li>
        <li>
            <p><b>Q: How can I modify the code for different motor speeds?</b></p>
            <p>A: Adjust the values of the PWM variable (or similar speed-related variables) in the Arduino code to change the motor speeds.</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A: Open Arduino IDE -{">"} Sketch -{">"} Include Library -{">"} Manage Libraries -{">"} Search for "Servo" -{">"} Install the official Servo library by Michael Margolis.</p>
        </li>
    </ul>

        </>
      ),
    },
        "Keyboard Controlled Robot Using ROS": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Keyboard Teleoperation</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (Assuming this is the relevant package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0 with Bluetooth module (Note: Previous Scorpion guides used Teensy 4.0)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion for teleoperation.</li>
        <li>Learn about the different basic components that make up a Scorpion robot.</li>
        <li>Control the Scorpion with Keyboard commands.</li>
    </ul>

    <h3>Installation (One-time Setup):</h3>
    <p>Perform these steps on the Raspberry Pi via SSH:</p>
    <code>ssh username@ip</code>
    <p>Install required ROS packages:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code>
    <p>Navigate to your workspace, clean, build, and source it:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace.</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi:</p>
    <code>ssh username@ip</code>
    <p>Navigate to the workspace, source it, and launch the bringup node:</p>
    <code>cd scorpion_ws</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <h4>STEP 4: Setup for Keyboard Controlling</h4>
    <p>Run the Teleop Twist Keyboard package in a <b>new terminal on your laptop (PC)</b>, not via SSH into the Pi (this allows your laptop keyboard to send commands to the ROS master running on the Pi).</p>
    <p>Ensure your laptop's `.bashrc` is configured for ROS master-slave as per the general setup guide (<code>ROS_IP</code> set to laptop IP, <code>ROS_MASTER_URI</code> set to Pi's IP).</p>
    <p>Open a new terminal on your laptop:</p>
   {">"}!-- Assuming scorpion_ws exists and is built on the laptop as well for teleop package --{">"}
    <code>cd scorpion_ws </code>
    <code>source devel/setup.bash</code>
    <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
    <p>Control the robot using the commands shown on the screen (typically arrow keys or WASD).</p>
    

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is ROS Noetic, and why is it used in this experiment?</b></p>
            <p>ROS Noetic is a version of the Robot Operating System (ROS) designed for Ubuntu 20.04. It's used for its compatibility with the necessary packages and dependencies.</p>
        </li>
        <li>
            <p><b>Why is a Raspberry Pi with Ubuntu Server needed for the Scorpion?</b></p>
            <p>The Raspberry Pi serves as the onboard computer, running ROS nodes, processing sensor data, and controlling the hardware (motors, etc.).</p>
        </li>
        <li>
            <p><b>What is the purpose of the Teensy?</b></p>
            <p>The Teensy microcontroller typically handles low-level hardware control like reading sensors (IMU, encoders if present) and driving motors based on commands received from the Raspberry Pi (via ROS serial).</p>
        </li>
         <li>
            <p><b>How does teleoperation play a role in this experiment?</b></p>
            <p>Teleoperation allows direct remote control of the Scorpion using keyboard commands from the laptop, essential for testing and manual operation.</p>
        </li>
        <li>
            <p><b>What steps are involved in setting up the ROS workspace on the Raspberry Pi?</b></p>
            <p>Steps include SSHing into the Pi, navigating to the workspace directory (e.g., `scorpion_ws`), cleaning previous builds (`rm -r build devel`), building the workspace (`catkin_make`), sourcing the setup script (`source devel/setup.bash`), and launching the core robot nodes (`roslaunch linorobot bringup.launch`).</p>
        </li>
         <li>
            <p><b>How can errors during setup be addressed?</b></p>
            <p>Review instructions carefully, ensure prerequisites (like ROS packages) are installed using `sudo apt-get install`, check hardware connections, and verify network configuration (`ROS_IP`, `ROS_MASTER_URI` in `.bashrc` files on both Pi and laptop). Consult online ROS forums if issues persist.</p>
        </li>
        <li>
            <p><b>Can keyboard commands for controlling the Scorpion be customized?</b></p>
            <p>Yes, the `teleop_twist_keyboard` node is a Python script. While direct configuration files aren't standard, you could modify the Python script itself to remap keys if needed, though this requires Python programming knowledge.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Wireless Controlled Robot Using Python Program": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Mobile App Button Control</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package if applicable)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0 with Bluetooth module (HC-05)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation.</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Scorpion.</li>
        <li>Control the Scorpion with a button control interface in the mobile app.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace.</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi:</p>
    <code>ssh username@ip</code>
    <p>Install rosserial-python if not already installed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to your workspace, clean, build, and source it:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <p>Launch the main robot bringup node:</p>
    <code>roslaunch linorobot bringup.launch</code>

    <h4>STEP 4: Setup the Mobile APP</h4>
    <p>Install the "Arduino Bluetooth Control" app on your Android device:</p>
    <p><a href="https://play.google.com/store/apps/details?id=com.broxcode.arduinobluetoothfree&pcampaignid=web_share" target="_blank">Arduino Bluetooth Control App Link</a></p>
    
    <p>Connect the device with Bluetooth:</p>
    <ol>
        <li>Open your phone's Bluetooth settings.</li>
        <li>Select "Pair new device".</li>
        <li>Select "HC05".</li>
        <li>Enter the password: <code>1234</code>.</li>
        <li>Open the "Arduino Bluetooth Control" app.</li>
        <li>Select the device -{">"} Choose "HC05". </li>
        <li>Go to Settings -{">"} Key Configuration (or similar).</li>
        <li>Configure the arrow keys:
            <ul>
                <li>Select Up arrow -{">"} Put 'F' -{">"} Click OK</li>
                <li>Select Down arrow -{">"} Put 'B' -{">"} Click OK</li>
                <li>Select Right arrow -{">"} Put 'R' -{">"} Click OK</li>
                <li>Select Left arrow -{">"} Put 'L' -{">"} Click OK</li>
                {">"}!-- Add configurations for other buttons if needed (e.g., Stop='S') --{">"}
            </ul>
        </li>
    </ol>
     <p>Launch the Bluetooth script on the Raspberry Pi (in a new terminal):</p>
     <p>SSH into the Raspberry Pi again:</p>
     <code>ssh username@ip</code>
     <p>Navigate to the scripts directory and run the Bluetooth script:</p>
     <code>cd scorpion_ws</code>
     <code>source devel/setup.bash</code>
     <code>cd src/linorobot/scripts </code>
     <code>python3 bluetooth.py</code>
     <p>Control the Scorpion wirelessly:</p>
     <ol>
        <li>Go back to the app's home page.</li>
        <li>Select the Arrow Key interface. </li>
        <li>Use the configured arrow keys to control the Scorpion.</li>
     </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What role does ROS play in this experiment?</b></p>
            <p>ROS enables communication between Scorpion’s hardware (via Teensy and Raspberry Pi) and software (control nodes, Bluetooth script), facilitating control, sensor data processing, and integration.</p>
        </li>
        <li>
            <p><b>How does the Raspberry Pi contribute to Scorpion’s functionality?</b></p>
            <p>The Raspberry Pi runs the main ROS nodes, processes higher-level commands (like those from Bluetooth), executes control algorithms, and communicates with the Teensy for low-level hardware control.</p>
        </li>
        <li>
            <p><b>Why is the Teensy with a Bluetooth module important in this setup?</b></p>
            <p>The Teensy handles real-time motor control and sensor reading. The Bluetooth module (connected typically to the Raspberry Pi or sometimes directly to Teensy depending on setup) enables wireless communication between the mobile app and the robot's control system.</p>
        </li>
        <li>
            <p><b>How does the mobile app enhance user experience?</b></p>
            <p>It provides an intuitive button interface for remote control, mapping directional commands to simple button presses for easy maneuvering.</p>
        </li>
        <li>
            <p><b>What is the significance of ROS packages like `linorobot` (or a specific Scorpion package)?</b></p>
            <p>These pre-built software modules (nodes, launch files, scripts) streamline setup, provide standard interfaces (like `cmd_vel` for movement commands), and offer functionalities essential for building and controlling robotic systems like the Scorpion.</p>
        </li>
    </ol>
        </>
      ),
    },
        "ROS Based Joystick Controller": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Joystick Control (ROS)</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>USB Joystick compatible with Linux/ROS</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation.</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Control the Scorpion with a USB joystick via ROS.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (scorpion_ws).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Connect Joystick</h4>
    <p>Connect the USB joystick to one of the USB ports on the Raspberry Pi.</p>
    

    <h4>STEP 4: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Ensure necessary ROS packages are installed on the Raspberry Pi:</p>
    <code>ssh username@ip</code>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-joy ros-noetic-teleop-twist-joy</code>
    <p>Navigate to your workspace, clean (optional), build, and source it:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <code>roslaunch linorobot bringup.launch</code>
    <p><b>Terminal 2 (on Raspberry Pi via SSH): Launch Joystick Listener</b></p>
    <p>This node reads data from the joystick hardware and publishes it to a ROS topic.</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch teleop_twist_joy teleop.launch</code>
    <div class="note">
        <p><b>Note:</b> The `teleop.launch` file within the `teleop_twist_joy` package usually includes both the `joy_node` (reads joystick data) and the `teleop_twist_joy` node (converts joy messages to `cmd_vel` messages). Running this one launch file might be sufficient if configured correctly. The next python script step might be redundant or an alternative way if the launch file isn't set up as expected.</p>
    </div>

    <p><b>Terminal 3 (Alternative/Verification - on Raspberry Pi via SSH): Run Command Controller Script (if needed)</b></p>
    <p>This script listens to the joystick topic and publishes `Twist` messages (command velocity) for the robot. This might be necessary if the `teleop.launch` file doesn't handle the conversion or if you need custom mapping.</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws/src/teleop_twist_joy/src # Adjust path if your script is elsewhere</code>
    <code>python3 joystick.py # Make sure this script exists and is configured</code>
    <p>Now, use the joystick to control the Scorpion robot.</p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the primary objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion package for teleoperation and control the Scorpion using a joystick connected to the Raspberry Pi via ROS.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (for SSH/monitoring), Raspberry Pi with Ubuntu Server and ROS Noetic, Scorpion hardware, Teensy, and a compatible USB joystick.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS-based joystick controller?</b></p>
            <p>Ensure necessary ROS joystick packages (`joy`, `teleop_twist_joy`) are installed. Connect the joystick to the Pi. Follow the steps to launch the base controller (`bringup.launch`) and the joystick teleoperation node (`teleop.launch`). Verify the joystick is detected and publishing data.</p>
        </li>
        <li>
            <p><b>How do I launch the joystick listener node and the command controller node?</b></p>
            <p>Typically, running `roslaunch teleop_twist_joy teleop.launch` starts both. The `joy_node` listens to the hardware, and `teleop_twist_joy` converts the joystick messages to robot velocity commands (`cmd_vel`). The separate Python script (`joystick.py`) might be needed for custom control logic or if the standard launch file isn't configured for your specific setup.</p>
        </li>
         <li>
            <p><b>Where can I find additional resources for reference?</b></p>
            <p>Refer to the ROS documentation for the `joy` and `teleop_twist_joy` packages for configuration details. Check the provided links for general setup steps. If you encounter difficulties, consult ROS forums or the specific documentation for your Scorpion package.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Surveillance Camera Using ROS": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Camera Surveillance Robot</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Raspberry Pi Camera Module</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation (base functionality).</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Establish necessary connections for camera functionality.</li>
        <li>Implement a Camera Surveillance robot using ROS.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (scorpion_ws).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Connect Camera with Raspberry Pi</h4>
    <p>Connect the Raspberry Pi Camera Module to the Raspberry Pi's camera port (CSI interface). Ensure the cable is inserted correctly.</p>
    
    <p>(Refer to specific video/documentation for detailed connection steps if needed).</p>

    <h4>STEP 4: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Install necessary dependencies and launch camera nodes:</p>
    <p><b>Terminal 1 (on Raspberry Pi via SSH):</b> Install Dependencies</p>
    <code>ssh username@ip</code>
    <code>sudo apt-get update</code>
    <code>sudo pip install picamera # If using Python script approach</code>
    <code>sudo apt-get install libraspberrypi-dev</code>
    <code>sudo apt-get install ros-noetic-compressed-image-transport</code>
    <code>sudo apt-get install libopencv-dev libwiringpi-dev</code>
    <code>sudo apt-get install ros-noetic-image-common</code>
    <code>sudo apt-get install ros-noetic-image-view</code>
    <code>sudo apt-get install ros-noetic-rqt-image-view</code>
    <code>sudo apt-get install ros-noetic-raspicam-node # Install the ROS node package</code>

    <p><b>Terminal 1 (Continue): Launch Camera Node</b></p>
    <code>cd scorpion_ws</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch raspicam_node camerav2_410x308_30fps.launch # Adjust launch file if needed for your camera/settings</code>
    <p>This launches the camera node, which captures images and publishes them to ROS topics.</p>

    <p><b>Terminal 2 (on Raspberry Pi via SSH or Laptop configured for ROS Master): View Camera Feed</b></p>
    <p>If viewing directly on the Pi (requires graphical environment) or SSH with X forwarding:</p>
    <code>ssh username@ip # or ssh -X username@ip</code>
    <p>If viewing from the laptop (ensure ROS network is configured):</p>
    <p>Open a terminal on the laptop.</p>
    <p>Navigate to workspace, source, and run the image view node:</p>
    <code>cd scorpion_ws # Or your local workspace if rqt_image_view is installed there</code>
    <code>source devel/setup.bash # Or source /opt/ros/noetic/setup.bash</code>
    <code>rosrun rqt_image_view rqt_image_view</code>
    <p>In the `rqt_image_view` window, select the appropriate image topic published by `raspicam_node` (e.g., `/raspicam_node/image_raw` or `/raspicam_node/image/compressed`).</p>
    <p>Now you can view the live visuals from the camera remotely.</p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>How do I set up Scorpion for teleoperation?</b></p>
            <p>Install ROS Noetic and the necessary Scorpion/Linorobot packages. Configure the ROS workspace (`scorpion_ws`), build it (`catkin_make`), and source it (`source devel/setup.bash`). Use standard ROS teleoperation nodes like `teleop_twist_keyboard` for remote control (this experiment focuses on camera setup, teleop is a prerequisite).</p>
        </li>
        <li>
            <p><b>What are the basic components of a robot and how do they function?</b></p>
            <p>Robots typically have a power source, actuators (like motors for movement), sensors (camera, IMU, etc. for perception), a controller (Raspberry Pi running ROS), and communication interfaces (Wi-Fi, Bluetooth). Actuators execute commands, sensors gather environmental data, the controller processes this data and makes decisions, and communication allows interaction.</p>
        </li>
         <li>
            <p><b>How can I control Scorpion with the mobile app's button interface?</b></p>
            <p>Establish a Bluetooth connection between the app and Scorpion (via the Raspberry Pi/HC-05). Run the appropriate ROS node (like `bluetooth.py` from previous guides) on the Pi to listen for commands. Use the app's button controls configured to send specific characters (e.g., 'F', 'B') that the ROS node translates into movement commands.</p>
        </li>
        <li>
            <p><b>What's the process for installing PlatformIO on Ubuntu?</b></p>
            <p>Ensure Python3 and pip3 are installed (`sudo apt install python3-pip`). Install PlatformIO using pip (`pip3 install platformio`). Add `~/.local/bin` to your system PATH in `.bashrc` (`echo 'export PATH=$PATH:~/.local/bin' {">>"} ~/.bashrc` then `source ~/.bashrc`). Verify with `platformio --version`.</p>
        </li>
        <li>
            <p><b>How do I remotely view live camera visuals?</b></p>
            <p>Ensure the `raspicam_node` is running on the Raspberry Pi and publishing images. On your laptop (or Pi via SSH with X forwarding), ensure ROS network settings (`ROS_IP`, `ROS_MASTER_URI`) are correct. Run `rosrun rqt_image_view rqt_image_view` and select the image topic from the dropdown menu in the GUI.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Teleoperation Using Camera Feedback in ROS": {
      type: "experiment",
      content: (
        <>
   <h2>Scorpion Teleoperated Camera Surveillance Robot</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Raspberry Pi Camera Module</li>
        <li>Bluetooth module (HC-05) - *Note: Bluetooth is listed but not used for keyboard/camera teleop in this guide.*</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation.</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Establish camera streaming from the Scorpion.</li>
        <li>Implement Teleoperated Camera Surveillance using keyboard control and remote viewing.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation(Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi (including network setup), and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch ROS Nodes on Raspberry Pi</h4>
    <p>These commands should be run in separate terminals connected to the Raspberry Pi via SSH.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Install Dependencies & Launch Base Controller</b></p>
    <p>Ensure all necessary packages are installed:</p>
    <code>ssh username@ip</code>
    <code>sudo apt-get update</code>
    <code>sudo pip install picamera</code>
    <code>sudo apt-get install libraspberrypi-dev</code>
    <code>sudo apt-get install ros-noetic-compressed-image-transport</code>
    <code>sudo apt-get install libopencv-dev libwiringpi-dev</code>
    <code>sudo apt-get install ros-noetic-image-common ros-noetic-image-view ros-noetic-rqt-image-view</code>
    <code>sudo apt-get install ros-noetic-raspicam-node</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code>
    <p>Navigate to workspace, build (if needed), source, and launch the base controller:</p>
    <code>cd scorpion_ws</code>
    <code># catkin_make # If changes were made or first build</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Launch Camera Node</b></p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch raspicam_node camerav2_410x308_30fps.launch # Adjust launch file if needed</code>
    <p>This starts the camera and publishes the image feed.</p>

    <p><b>Terminal 3 (on Laptop/PC connected to the same network, ROS Network configured): View Camera Feed</b></p>
    <p>Ensure your laptop's `.bashrc` has the correct `ROS_IP` and `ROS_MASTER_URI` pointing to the Raspberry Pi (refer to setup guide).</p>
    <code>source ~/.bashrc # Or source /opt/ros/noetic/setup.bash</code>
    <code>rosrun rqt_image_view rqt_image_view</code>
    <p>In the `rqt_image_view` window, select the camera topic (e.g., `/raspicam_node/image_raw`). You should now see the live video feed.</p>
    

    <h4>STEP 4: Move the Robot with Teleoperation</h4>
    <p><b>Terminal 4 (on Laptop/PC): Launch Keyboard Teleop</b></p>
    <p>Ensure ROS network is configured correctly.</p>
    <code>source ~/.bashrc # Or source /opt/ros/noetic/setup.bash</code>
    <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
    <p>Follow the on-screen instructions (using keys like `u, i, o, j, k, l, m, ,, .`) to control the robot while watching the camera feed in `rqt_image_view`.</p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What are the main components needed for setting up teleoperation using camera feedback?</b></p>
            <p>The main components include a PC or laptop with ROS Noetic, the specific robot ROS package (e.g., Linorobot/Scorpion), Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Scorpion hardware (including Teensy), and a Raspberry Pi Camera Module.</p>
        </li>
        <li>
             <p><b>What are the objectives of this experiment?</b></p>
             <p>The objectives include setting up the Scorpion package for teleoperation, understanding robot components, establishing camera streaming, and controlling the robot using keyboard commands while viewing the camera feed remotely.</p>
        </li>
        <li>
            <p><b>How do I launch the ROS workspace on the Raspberry Pi and view live camera visuals remotely?</b></p>
            <p>On the Pi, launch `linorobot bringup.launch` in one terminal and `raspicam_node`'s launch file in another. On your laptop (with ROS network configured), run `rqt_image_view` and select the camera topic.</p>
        </li>
        <li>
            <p><b>How do I move the robot using teleoperation commands?</b></p>
            <p>On your laptop (with ROS network configured), run `rosrun teleop_twist_keyboard teleop_twist_keyboard.py` and use the specified keys to send movement commands to the robot running on the Raspberry Pi.</p>
        </li>
        <li>
             <p><b>What if I encounter issues with establishing the Bluetooth connection or controlling the robot remotely?</b></p>
             <p>This specific experiment uses Wi-Fi (for ROS network communication between Pi and laptop) and keyboard control, not Bluetooth/mobile app control. If having network issues, verify `ROS_IP` and `ROS_MASTER_URI` settings in `.bashrc` on both Pi and laptop, ensure they are on the same network, and check firewall settings. For camera issues, ensure the camera is properly connected and enabled in the Pi's configuration (`sudo raspi-config`).</p>
        </li>
    </ol>
        </>
      ),
    },
        "Human Following Robot Using ROS": {
      type: "experiment",
      content: (
        <>
   <h2>Scorpion Human Following Robot</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware (with appropriate sensors like ultrasonic or camera for detection)</li>
        <li>Teensy 3.0 or 4.0</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation (base functionality).</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Implement a human-following robot using ROS.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Ensure necessary ROS packages are installed and launch the base controller and human following script.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <p>Ensure rosserial is installed:</p>
    <code>ssh username@ip</code>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Prepare and Launch Human Follower Node</b></p>
    <p>Navigate to the scripts directory and make the script executable:</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws/src/linorobot/scripts # Adjust path if necessary</code>
    <code>sudo chmod +x human_follow.py</code>
    <p>Navigate back to the workspace root, source, and run the script:</p>
    <code>cd ~/scorpion_ws/</code>
    <code>source devel/setup.bash</code>
    <code>rosrun linorobot human_follow.py</code>

    <p>The robot should now attempt to follow a human. The script likely uses sensor data (e.g., from an ultrasonic sensor or camera) published on ROS topics.</p>
    <ul>
        <li>If obstacle distance is &lt; 10 cm, the robot stops.</li>
        <li>If obstacle distance is &gt; 10 cm (and a human is detected within a certain range), the robot moves forward to follow.</li>
    </ul>
     

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion package for teleoperation and implement a human-following robot, where the Scorpion autonomously follows a human based on sensor input.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (for SSH/monitoring), Raspberry Pi with Ubuntu Server and ROS Noetic, Scorpion hardware with sensors (ultrasonic/camera), and a Teensy microcontroller.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow the instructions: SSH into the Pi, install `rosserial-python`, navigate to `scorpion_ws`, build with `catkin_make`, source `devel/setup.bash`. In one terminal, launch `linorobot bringup.launch`. In another, make `human_follow.py` executable (`chmod +x`), then run it using `rosrun linorobot human_follow.py` after sourcing the workspace again.</p>
        </li>
        <li>
            <p><b>How does the human follower node function?</b></p>
            <p>The `human_follow.py` script likely subscribes to sensor topics (e.g., `/scan` or `/ultrasonic_data` or an image topic with person detection). It processes this data to determine the presence and distance of a person/obstacle. Based on predefined logic (stop if distance &lt; 10, follow if distance &gt; 10 and human detected), it publishes velocity commands (`cmd_vel`) to make the robot move.</p>
        </li>
        <li>
            <p><b>How can I test the functionality of the human-following robot?</b></p>
            <p>After launching all nodes, stand in front of the robot's sensor(s) within its detection range but further than 10cm. Slowly walk away; the robot should follow. Step closer than 10cm; the robot should stop. Move out of the sensor's view; the robot might stop or search depending on the script's logic.</p>
        </li>
    </ol>
        </>
      ),
    },
        "ROS Based Master Slave Control": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Keyboard Control (ROS Master-Slave)</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05) - *Note: Bluetooth listed but not directly used for keyboard control.*</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion for teleoperation.</li>
        <li>Learn about the different basic components that make up a Scorpion robot.</li>
        <li>Control the Scorpion with Keyboard in a ROS master-slave setup (Raspberry Pi as Master, Laptop as Slave/Controller).</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi (including network setup - crucial for Master/Slave), and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>
    <div class="note">
        <p><b>Important:</b> Ensure the ROS Network Configuration (<code>ROS_IP</code> and <code>ROS_MASTER_URI</code>) is correctly set in the <code>.bashrc</code> files on both the Raspberry Pi (Master) and the Laptop (Slave) as detailed in the setup guide.</p>
    </div>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi (Master)</h4>
    <p>These commands launch the core robot nodes on the Raspberry Pi.</p>
    <p><b>Terminal 1 (on Raspberry Pi via SSH):</b></p>
    <code>ssh username@ip</code>
    <p>Install necessary packages if not already installed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>
    <p>This starts the ROS Master and the nodes communicating with the Teensy.</p>

    <h4>STEP 4: Setup the Laptop for Keyboard Controlling (Slave)</h4>
    <p>These commands launch the keyboard control node on your laptop, which sends commands to the ROS Master on the Raspberry Pi.</p>
    <p><b>Terminal 2 (on Laptop):</b></p>
    <p>Install the teleop package if not already installed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code>
    <p>Navigate to your local workspace (or just source the main ROS setup), source, and run the teleop node:</p>
    <code>cd scorpion_ws # Or your local catkin_ws if teleop is installed globally</code>
    <code># catkin_make # Only if teleop package is within this workspace</code>
    <code>source devel/setup.bash # Or source /opt/ros/noetic/setup.bash</code>
    <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
    
    <p>Control the robot using the commands displayed on the screen (e.g., u, i, o, j, k, l, m, ,, .).</p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion for teleoperation and implement a master-slave control system using ROS, where the robot (Master on Pi) can be controlled via keyboard commands from a laptop (Slave).</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop with ROS Noetic, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Scorpion hardware (including Teensy), and potentially the Linorobot/Scorpion ROS package installed on both machines or accessible via the network setup.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>On the Raspberry Pi: SSH in, ensure `rosserial-python` is installed, navigate to `scorpion_ws`, build (`catkin_make`), source (`source devel/setup.bash`), and launch the main robot interface (`roslaunch linorobot bringup.launch`).</p>
        </li>
        <li>
            <p><b>How do I set up the laptop for keyboard control of the Scorpion?</b></p>
            <p>On the Laptop: Ensure `teleop-twist-keyboard` is installed. Open a terminal, source your ROS environment (`source devel/setup.bash` or `source /opt/ros/noetic/setup.bash`), and run `rosrun teleop_twist_keyboard teleop_twist_keyboard.py`. Crucially, ensure your laptop's `.bashrc` points `ROS_MASTER_URI` to the Raspberry Pi's IP address.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Shape Path Clearing Robot Using ROS": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Shape Path Crafting Robot</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05) - *Note: Bluetooth listed but not directly used in this script.*</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation (base functionality).</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Implement a shape path crafting robot using ROS.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Ensure necessary ROS packages are installed and launch the base controller and shape following script.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <p>Ensure rosserial is installed:</p>
    <code>ssh username@ip</code>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Prepare and Launch Shape Follower Node</b></p>
    <p>Navigate to the scripts directory and make the script executable:</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws/src/linorobot/scripts # Adjust path if necessary</code>
    <code>sudo chmod +x shape_follow.py</code>
    <p>Navigate back to the workspace root, source, and run the script:</p>
    <code>cd ~/scorpion_ws/</code>
    <code>source devel/setup.bash</code>
    <code>rosrun linorobot shape_follow.py</code>
    <p>This script will likely present a mode selector in the terminal, allowing you to choose which shape (e.g., square, circle) the robot should trace.</p>
    

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion robot with ROS and implement a script that allows it to autonomously trace predefined shapes like squares or circles.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (for SSH), Raspberry Pi with Ubuntu Server and ROS Noetic, Scorpion hardware with a Teensy microcontroller, and the necessary ROS packages.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow the instructions: SSH into the Pi, install `rosserial-python`, navigate to `scorpion_ws`, build with `catkin_make`, source `devel/setup.bash`. In one terminal, launch `linorobot bringup.launch`. In another, make `shape_follow.py` executable (`chmod +x`), then run it using `rosrun linorobot shape_follow.py` after sourcing the workspace again.</p>
        </li>
        <li>
            <p><b>How does the shape follower node function?</b></p>
            <p>The `shape_follow.py` script likely contains predefined sequences of movement commands (velocity commands published to `cmd_vel`) corresponding to different shapes. When you select a shape from its menu, it executes that sequence.</p>
        </li>
        <li>
             <p><b>What keyboard commands can I use to control the Scorpion?</b></p>
             <p>This experiment focuses on autonomous shape following initiated by the `shape_follow.py` script, not direct keyboard control. For keyboard control, you would typically run the `teleop_twist_keyboard` node instead of the `shape_follow.py` script (as described in other guides).</p>
        </li>
    </ol>
        </>
      ),
    },
        "Obstacle Based Speed Control Using ROS": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Obstacle Handling Robot</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware (with ultrasonic or other distance sensor)</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05) - *Note: Bluetooth listed but not directly used in this script.*</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation (base functionality).</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Implement obstacle handling (deceleration/stopping) on the Scorpion bot using ROS.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Ensure necessary ROS packages are installed and launch the base controller and obstacle handling script.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <p>Ensure rosserial is installed:</p>
    <code>ssh username@ip</code>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Prepare and Launch Obstacle Handler Node</b></p>
    <p>Navigate to the scripts directory and make the script executable:</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws/src/linorobot/scripts # Adjust path if necessary</code>
    <code>sudo chmod +x deceleration.py # Assuming this script handles obstacle logic</code>
    <p>Navigate back to the workspace root, source, and run the script:</p>
    <code>cd ~/scorpion_ws/</code>
    <code>source devel/setup.bash</code>
    <code>rosrun linorobot deceleration.py</code>
    
    <p>The robot should now handle obstacles based on the script's logic:</p>
    <ul>
        <li>If obstacle distance is &lt; 30 cm, the robot stops.</li>
        <li>If obstacle distance is &lt; 100 cm (and &gt;= 30 cm), the robot decelerates.</li>
        <li>If obstacle distance is &gt; 100 cm, the robot moves at normal speed.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the primary objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion package for teleoperation and implement obstacle-based speed control, where the Scorpion adjusts its speed or stops based on the proximity of obstacles detected by its sensors.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop, Raspberry Pi with Ubuntu Server and ROS Noetic, Scorpion hardware (including Teensy and distance sensor), and the necessary ROS packages.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow the instructions: SSH into the Pi, install `rosserial-python`, navigate to `scorpion_ws`, build (`catkin_make`), source (`source devel/setup.bash`). In one terminal, launch `linorobot bringup.launch`. In another, make `deceleration.py` executable (`chmod +x`), then run it using `rosrun linorobot deceleration.py` after sourcing the workspace again.</p>
        </li>
        <li>
            <p><b>What does the obstacle handler node do?</b></p>
            <p>The obstacle handler node (presumably `deceleration.py`, though the name might vary - *Note: The FAQ mentions `obstacle_interaction.py`, ensure the correct script name*) subscribes to sensor topics (e.g., `/scan` or `/ultrasonic_data`). It processes the distance readings and publishes modified velocity commands (`cmd_vel`) to slow down or stop the robot if an obstacle is detected within the specified ranges (&lt; 30cm to stop, &lt; 100cm to decelerate).</p>
        </li>
    </ol>
        </>
      ),
    },
        "Moving Obstacle Avoidance Using ROS": {
      type: "experiment",
      content: (
        <>
   <h2>Scorpion Auto Navigation with Obstacle Avoidance</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware (with appropriate sensors like LiDAR or distance sensors)</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05) - *Note: Listed but not directly used for auto-navigation.*</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation (base functionality).</li>
        <li>Learn about the different basic components that make up a Scorpion robot.</li>
        <li>Perform Scorpion auto navigation using a pre-saved map with obstacle avoidance.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace</h4>
    <p>Follow the general steps for uploading the correct Teensy firmware (ensure it's the version compatible with navigation/SLAM), configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>). <b>Note: The firmware for this experiment might differ from basic teleoperation.</b></p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi, build the workspace, source it, and launch the navigation stack. Ensure you have a map file saved (e.g., from a previous SLAM experiment).</p>
    <p><b>Terminal 1 (on Raspberry Pi via SSH):</b></p>
    <code>ssh username@ip</code>
    <p>Navigate to workspace, build, and source:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <p>Install necessary navigation packages if not already installed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python # If not installed</code>
    <code>sudo apt-get install ros-noetic-amcl</code>
    <code>sudo apt-get install ros-noetic-move-base</code>
    <code>sudo apt-get install ros-noetic-global-planner</code>
    <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
    <p>Update the map file path in the launch file:</p>
    <code>cd ~/scorpion_ws/src/linorobot/launch # Adjust path if necessary</code>
    <code>nano navigate.launch # Or use another editor</code>
    <p>Find the line related to the map file (often within an `include` tag for `amcl` or `move_base`) and update the `map_file` argument with the correct absolute path to your saved map YAML file (e.g., `/home/ubuntu/scorpion_ws/src/linorobot/maps/my_map.yaml`). Save and exit the editor.</p>
    <p>Navigate back to the workspace root and launch navigation:</p>
    <code>cd ~/scorpion_ws</code>
    <code>roslaunch linorobot navigation.launch</code>

    <h4>STEP 4: Visualization using Rviz</h4>
    <p>Open RViz on your laptop to visualize the robot's position, the map, and sensor data.</p>
    <p><b>Terminal 2 (on Laptop):</b></p>
    <code>ssh username@ip -X # Use -X for graphical forwarding</code>
    <p>Navigate to workspace, source, and launch RViz with the navigation configuration:</p>
    <code>cd scorpion_ws # Or your local workspace if config is there</code>
    <code>source devel/setup.bash # Source your local workspace or /opt/ros/noetic/setup.bash</code>
    <code>rviz -d src/linorobot/rviz/navigate.rviz # Adjust path if necessary</code>
    

    <h4>STEP 5: Set Start Position and Goal Position for Navigation (in RViz)</h4>
    <ol>
        <li>In RViz, use the "2D Pose Estimate" tool (usually an arrow icon in the top toolbar) to click and drag on the map, indicating the robot's approximate current location and orientation. This helps AMCL localize the robot.</li>
        <li>Use the "2D Nav Goal" tool (usually a different arrow icon) to click and drag on the map, setting the desired destination point and orientation for the robot.</li>
    </ol>
    <p>The robot should start planning a path and moving towards the goal, avoiding obstacles detected by its sensors.</p>

    <h4>STEP 6: Observe Obstacle Avoidance</h4>
    <p>While the robot is navigating, carefully move an object (or yourself) into its path. Observe how the robot detects the obstacle (visible in the laser scan in RViz) and either stops, waits, or plans a new path around it to reach the goal.</p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What do I need for this experiment?</b></p>
            <p>You'll need a PC (Ubuntu 20.04, ROS Noetic), Raspberry Pi (Ubuntu Server), Scorpion hardware (with Teensy and sensors like LiDAR/distance), the Linorobot/Scorpion ROS package, and a previously saved map file.</p>
        </li>
        <li>
            <p><b>How do I set up my Scorpion?</b></p>
            <p>Install PlatformIO, upload the correct Teensy firmware (navigation compatible), configure the Pi (network, ROS), and set up the ROS workspace (`scorpion_ws`) following the detailed setup guides.</p>
        </li>
        <li>
            <p><b>How do I launch the ROS workspace on Raspberry Pi?</b></p>
            <p>SSH into the Pi, navigate to `scorpion_ws`, clean (`rm -r build devel`), build (`catkin_make`), source (`source devel/setup.bash`). Ensure navigation packages (`amcl`, `move_base`, planners) are installed. Update the map path in `Maps.launch`, then run `roslaunch linorobot navigation.launch`.</p>
        </li>
        <li>
            <p><b>What if I encounter errors during setup?</b></p>
            <p>Ensure all required ROS packages (`rosserial-python`, `amcl`, `move-base`, `global-planner`, `dwa-local-planner`) are installed using `sudo apt-get install`. Double-check that the map file path specified in `Maps.launch` is correct and the map files (.yaml and .pgm) exist.</p>
        </li>
        <li>
            <p><b>How do I visualize navigation with Rviz?</b></p>
            <p>SSH into the Raspberry Pi from your laptop using `ssh username@ip -X`. Navigate to your ROS workspace (`scorpion_ws`), source the environment (`source devel/setup.bash`), and launch RViz using the specific navigation configuration file: `rviz -d src/linorobot/rviz/navigate.rviz`.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Maze Solving Robot Using ROS": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Maze Solving Robot</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware (with appropriate sensors like LiDAR or distance sensors)</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05) - *Note: Listed but not directly used for maze solving.*</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for maze solving using ROS navigation.</li>
        <li>Learn about the different basic components that make up a Scorpion robot.</li>
        <li>Perform autonomous maze solving with the Scorpion robot using a pre-saved map.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace</h4>
    <p>Follow the general steps for uploading the correct Teensy firmware (ensure it's the version compatible with navigation/SLAM), configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>). <b>Note: The firmware for this experiment might differ from basic teleoperation.</b></p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>
    <p>Video link of maze solving example for reference: <a href="https://www.youtube.com/watch?v=ZMQbHMgK2rw" target="_blank">https://www.youtube.com/watch?v=ZMQbHMgK2rw</a></p>


    <h4>STEP 3: Create a Maze Environment for the Robot</h4>
    <p>Refer to the video link below and create a physical maze setup similar to the one shown. Ensure the height of the maze walls is greater than the height of the LiDAR sensor (or relevant distance sensors) on the robot.</p>
    <p>Video link: <a href="https://www.youtube.com/watch?v=fzpzEGue-wc" target="_blank">https://www.youtube.com/watch?v=fzpzEGue-wc</a></p>
    <div class="note">
        <p><b>Important:</b> You need a map file (.yaml and .pgm) of this maze environment created beforehand using SLAM (like in the SLAM Mapping experiment). This map file will be used for navigation.</p>
    </div>

    <h4>STEP 4: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi, build the workspace, source it, and launch the navigation stack, making sure to specify your maze map file.</p>
    <p><b>Terminal 1 (on Raspberry Pi via SSH):</b></p>
    <code>ssh username@ip</code>
    <p>Navigate to workspace, build, and source:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <p>Install necessary navigation packages if not already installed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python # If not installed</code>
    <code>sudo apt-get install ros-noetic-amcl</code>
    <code>sudo apt-get install ros-noetic-move-base</code>
    <code>sudo apt-get install ros-noetic-global-planner</code>
    <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
    <p>Update the map file path in the launch file:</p>
    <code>cd ~/scorpion_ws/src/linorobot/launch # Adjust path if necessary</code>
    <code>nano navigate.launch # Or use another editor</code>
    <p>Find the line related to the map file (often within an `include` tag for `amcl` or `move_base`) and update the `map_file` argument with the correct absolute path to your saved <b>maze map</b> YAML file (e.g., `/home/ubuntu/scorpion_ws/src/linorobot/maps/maze_map.yaml`). Save and exit the editor.</p>
    <p>Navigate back to the workspace root and launch navigation:</p>
    <code>cd ~/scorpion_ws</code>
    <code>roslaunch linorobot navigation.launch</code>

    <h4>STEP 5: Visualization using Rviz</h4>
    <p>Open RViz on your laptop to visualize the robot's position within the maze map.</p>
    <p><b>Terminal 2 (on Laptop):</b></p>
    <code>ssh username@ip -X # Use -X for graphical forwarding</code>
    <p>Navigate to workspace, source, and launch RViz with the navigation configuration:</p>
    <code>cd scorpion_ws # Or your local workspace if config is there</code>
    <code>source devel/setup.bash # Source your local workspace or /opt/ros/noetic/setup.bash</code>
    <code>rviz -d src/linorobot/rviz/navigate.rviz # Adjust path if necessary</code>

    <h4>STEP 6: Set Start Position and Goal Position for Navigation (in RViz)</h4>
    <ol>
        <li>In RViz, use the "2D Pose Estimate" tool to set the robot's initial position within the maze map. </li>
        <li>Use the "2D Nav Goal" tool to set the desired destination point within the maze. </li>
    </ol>
    <p>The robot should start planning a path through the maze and moving towards the goal, avoiding the walls.</p>
    

    <h4>STEP 7: Observe Navigation and Obstacle Avoidance</h4>
    <p>Observe the robot as it navigates the physical maze. If you place a temporary obstacle (not part of the map) in its path, it should attempt to navigate around it if possible, based on its sensor readings.</p>

    <h3>Frequently Asked Questions (FAQs):</h3>
    <ol>
        <li>
            <p><b>What do I need for the maze solving experiment?</b></p>
            <p>Hardware: Scorpion robot (with Teensy, sensors like LiDAR/ultrasonic), Raspberry Pi. Software: PC/Laptop with ROS Noetic, Ubuntu 20.04, Linorobot/Scorpion ROS package, a pre-built map of the maze.</p>
        </li>
        <li>
            <p><b>How do I set up my Scorpion?</b></p>
            <p>Follow the provided instructions for hardware assembly, software setup (PlatformIO, Teensy firmware for navigation, Pi configuration, ROS workspace).</p>
        </li>
        <li>
            <p><b>How do I create a maze environment?</b></p>
            <p>Watch the provided video link for constructing a physical maze. Remember to create a map of this maze using SLAM before attempting navigation.</p>
        </li>
        <li>
            <p><b>How do I launch the ROS workspace on Raspberry Pi?</b></p>
            <p>SSH into the Pi, navigate to `scorpion_ws`, rebuild (`catkin_make`), source (`source devel/setup.bash`), ensure navigation packages are installed, update the map path in `Maps.launch`, and then run `roslaunch linorobot navigation.launch`.</p>
        </li>
        <li>
            <p><b>How do I visualize and navigate the maze?</b></p>
            <p>Run RViz on your PC (connecting via SSH with `-X`). Use the "2D Pose Estimate" tool to set the robot's starting position on the map and the "2D Nav Goal" tool to set the destination. Observe the robot's movement in RViz and in the physical maze.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Python Programmed Terminal Controlled Robo": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Terminal Controlled Robot</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion for teleoperation.</li>
        <li>Learn about the different basic components that make up a Scorpion robot.</li>
        <li>Control the Scorpion with terminal commands sent via a mobile app.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi, ensure necessary packages are installed, build the workspace, source it, and launch the required nodes.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <code>ssh username@ip</code>
    <p>Install rosserial if needed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Launch Bluetooth Script</b></p>
    <p>This script listens for commands coming via Bluetooth.</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws</code>
    <code>source devel/setup.bash</code>
    <code>cd src/linorobot/scripts # Adjust path if necessary</code>
    <code>python3 bluetooth.py</code>

    <h4>STEP 4: Setup the Mobile APP for Terminal Controlling</h4>
    <ol>
        <li>Install the "Arduino Bluetooth Control" app on your Android mobile device: <a href="https://play.google.com/store/apps/details?id=com.broxcode.arduinobluetoothfree&pcampaignid=web_share" target="_blank">Google Play Store Link</a></li>
        <li>Connect the device with Bluetooth:
            <ul>
                <li>Open your phone's Bluetooth settings.</li>
                <li>Pair with a new device.</li>
                <li>Select "HC05".</li>
                <li>Enter the password: <code>1234</code>.</li>
            </ul>
        </li>
        <li>Open the "Arduino Bluetooth Control" app.</li>
        <li>Select the device {"->"} "HC05". </li>
        <li>Control Scorpion with commands:
            <ul>
                <li>Go to the home page and select the command prompt icon. </li>
                <li>Now you can control the Scorpion by typing the following commands and pressing send:
                    <ul>
                        <li><code>F</code> - Move forward</li>
                        <li><code>B</code> - Move backward</li>
                        <li><code>L</code> - Turn left</li>
                        <li><code>R</code> - Turn right</li>
                        <li><code>S</code> - Stop</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the goal of this experiment?</b></p>
            <p>The goal is to set up and control a Scorpion robot using terminal commands sent via the "Arduino Bluetooth Control" mobile app.</p>
        </li>
        <li>
            <p><b>What equipment is required for this experiment?</b></p>
            <p>You need a PC/laptop (ROS Noetic, Ubuntu 20.04), Raspberry Pi (Ubuntu Server), Scorpion hardware (with Teensy, Bluetooth module), and an Android phone with the specified app.</p>
        </li>
        <li>
            <p><b>How do I set up the mobile app for controlling Scorpion?</b></p>
            <p>Install the "Arduino Bluetooth Control" app, pair your phone with the HC-05 module (password: 1234), select "HC05" in the app, and navigate to the terminal/command prompt section to send commands (F, B, L, R, S).</p>
        </li>
        <li>
            <p><b>What should I do if I encounter errors during setup?</b></p>
            <p>Double-check all hardware connections (especially Bluetooth RX/TX), ensure the correct ROS nodes (`bringup.launch` and `bluetooth.py`) are running on the Raspberry Pi, verify Bluetooth pairing, and confirm you are sending the correct single-character commands from the app.</p>
        </li>
        <li>
            <p><b>Where can I find detailed instructions for specific set-up steps?</b></p>
            <p>Detailed instructions for PlatformIO installation, Teensy firmware upload, Raspberry Pi configuration, and ROS workspace setup are typically found in the main setup guide (e.g., `scorpion_robot_setup_guide.html`) or linked external documentation.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Staircase Detection Robot Using ROS": {
      type: "experiment",
      content: (
        <>
   <h2>Scorpion Staircase Detection Robot</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware (with downward-facing distance sensor like Ultrasonic HC-SR04)</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05) - *Note: Listed but not directly used for staircase detection.*</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion package for teleoperation (base functionality).</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Implement a staircase detection robot using distance sensors.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware (ensure it includes logic for the downward distance sensor), configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi, ensure necessary packages are installed, build the workspace, source it, and launch the required nodes.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
    <p>Install rosserial if needed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Launch Staircase Detection Node</b></p>
    <p>Give execution permission to the Python script:</p>
    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
    <code>cd scorpion_ws/src/linorobot/scripts # Adjust path if necessary</code>
    <code>sudo chmod +x staircase_detection.py</code>
    <p>Launch the staircase handler node:</p>
    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
    <code>cd scorpion_ws/</code>
    <code>source devel/setup.bash</code>
    <code>rosrun linorobot staircase_detection.py</code>
    <div class="note">
        <p><b>Logic:</b> The <code>staircase_detection.py</code> script will subscribe to the distance sensor topic (published by the Teensy via rosserial) and publish velocity commands (<code>/cmd_vel</code>).</p>
        <ul>
            <li>If the downward distance measured is less than a safe threshold (e.g., 5 cm, indicating stable ground), it allows the robot to move forward (or follows other navigation commands).</li>
            <li>If the downward distance measured suddenly increases beyond the threshold (e.g., {">"} 5 cm), it interprets this as a drop (staircase detected) and publishes a zero velocity command to stop the robot.</li>
        </ul>
        <p>*(The description "distance to human" in the original prompt seems incorrect for staircase detection; it should relate to the distance to the ground below.)*</p>
    </div>
    

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion robot with ROS and implement a staircase detection system using a downward-facing distance sensor to prevent the robot from falling off edges.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (ROS Noetic, Ubuntu 20.04), Raspberry Pi (Ubuntu Server), Scorpion hardware (with Teensy, motors, and a downward distance sensor like HC-SR04), and the appropriate ROS packages.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Python Programmed Voice Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Voice Control (ROS)</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion for teleoperation.</li>
        <li>Learn about the different basic components that make up a Scorpion robot.</li>
        <li>Control the Scorpion with voice commands via a mobile app connected through ROS.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi, ensure necessary packages are installed, build the workspace, source it, and launch the required nodes.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <code>ssh username@ip</code>
    <p>Install rosserial if needed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Launch Bluetooth Script</b></p>
    <p>This script listens for commands coming via Bluetooth.</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws</code>
    <code>source devel/setup.bash</code>
    <code>cd src/linorobot/scripts # Adjust path if necessary</code>
    <code>python3 bluetooth.py</code>

    <h4>STEP 4: Setup the Mobile APP for Voice Controlling</h4>
    <ol>
        <li>Install the "Arduino Bluetooth Control" app on your Android mobile device: <a href="https://play.google.com/store/apps/details?id=com.broxcode.arduinobluetoothfree&pcampaignid=web_share" target="_blank">Google Play Store Link</a></li>
        <li>Connect the device with Bluetooth:
            <ul>
                <li>Open your phone's Bluetooth settings.</li>
                <li>Pair with a new device.</li>
                <li>Select "HC05".</li>
                <li>Enter the password: <code>1234</code>.</li>
            </ul>
        </li>
        <li>Open the "Arduino Bluetooth Control" app.</li>
        <li>Select the device -{">"} "HC05". </li>
        <li>Configure Voice Commands:
            <ul>
                <li>Go to app settings -{">"} Vocal command configuration.</li>
                <li>Set up voice commands and the corresponding data to send:
                    <ul>
                        <li><b>Voice Command:</b> "Go", <b>Data to send:</b> <code>F</code> -{">"} Click OK</li>
                        <li><b>Voice Command:</b> "Down" (or "Back"), <b>Data to send:</b> <code>B</code> -{">"} Click OK</li>
                        <li><b>Voice Command:</b> "Left", <b>Data to send:</b> <code>L</code> -{">"} Click OK</li>
                        <li><b>Voice Command:</b> "Right", <b>Data to send:</b> <code>R</code> -{">"} Click OK</li>
                        <li><b>Voice Command:</b> "Stop", <b>Data to send:</b> <code>S</code> -{">"} Click OK (Add this for safety)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Control the Scorpion with Voice Commands:
            <ul>
                <li>Go back to the app's home page and select "Voice control". </li>
                <li>Speak the configured commands (e.g., "Go", "Left", "Stop") to control the Scorpion.</li>
            </ul>
        </li>
    </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion robot for ROS-based teleoperation and implement voice control using the "Arduino Bluetooth Control" mobile app.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (ROS Noetic, Ubuntu 20.04), Raspberry Pi (Ubuntu Server), Scorpion hardware (with Teensy, Bluetooth module), and an Android phone with the specified app.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow the guide: SSH into the Raspberry Pi, navigate to `scorpion_ws`, build using `catkin_make`, source `devel/setup.bash`. Launch the robot's base controller using `roslaunch linorobot bringup.launch` in one terminal and the Bluetooth script `python3 bluetooth.py` in another.</p>
        </li>
        <li>
            <p><b>How do I set up the mobile app for voice controlling?</b></p>
            <p>Install the app, pair with the HC-05 module (password 1234). In the app's settings under "Vocal command configuration," define your voice commands (like "Go", "Back", "Left", "Right", "Stop") and link them to the characters the `bluetooth.py` script expects (F, B, L, R, S).</p>
        </li>
        <li>
            <p><b>How do I control Scorpion with voice commands?</b></p>
            <p>After setup, go to the "Voice control" section in the mobile app. Speak the commands you configured (e.g., "Go," "Stop"). The app translates the voice to the character (e.g., 'F'), sends it via Bluetooth to the Raspberry Pi, the `bluetooth.py` script receives it and publishes it as a ROS command (likely `/cmd_vel`), which the robot's controller then acts upon.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Python Programmed Mobile Tilt Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Scorpion Mobile Tilt Control (ROS)</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion for teleoperation.</li>
        <li>Learn about the different basic components that make up a Scorpion robot.</li>
        <li>Control the Scorpion using the tilt sensor (accelerometer) of a mobile phone via Bluetooth and ROS.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi, ensure necessary packages are installed, build the workspace, source it, and launch the required nodes. You will need at least two terminals connected to the Raspberry Pi.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <code>ssh username@ip</code>
    <p>Install rosserial if needed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Launch Bluetooth Script</b></p>
    <p>This script listens for commands coming via Bluetooth.</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws</code>
    <code>source devel/setup.bash</code>
    <code>cd src/linorobot/scripts # Adjust path if necessary</code>
    <code>python3 bluetooth.py</code>

    <h4>STEP 4: Setup the Mobile APP for Tilt Controlling</h4>
    <ol>
        <li>Install the "Arduino Bluetooth Control" app on your Android mobile device: <a href="https://play.google.com/store/apps/details?id=com.broxcode.arduinobluetoothfree&pcampaignid=web_share" target="_blank">Google Play Store Link</a></li>
        <li>Connect the device with Bluetooth:
            <ul>
                <li>Open your phone's Bluetooth settings.</li>
                <li>Pair with a new device.</li>
                <li>Select "HC05".</li>
                <li>Enter the password: <code>1234</code>.</li>
            </ul>
        </li>
        <li>Open the "Arduino Bluetooth Control" app.</li>
        <li>Select the device -{">"} "HC05". </li>
        <li>Configure Accelerometer Directions:
            <ul>
                <li>Go to app settings -{">"} Accelerometer -{">"} Direction configuration.</li>
                <li>Set up tilt directions and the corresponding data to send:
                    <ul>
                        <li><b>UP:</b> Data to send: <code>F</code> -{">"} Click OK</li>
                        <li><b>DOWN:</b> Data to send: <code>B</code> -{">"} Click OK</li>
                        <li><b>LEFT:</b> Data to send: <code>L</code> -{">"} Click OK</li>
                        <li><b>RIGHT:</b> Data to send: <code>R</code> -{">"} Click OK</li>
                        <li>(Consider adding a "Stop" command for when the phone is level, if the app supports it, mapping it to <code>S</code>)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Control the Scorpion by Tilting Phone:
            <ul>
                <li>Go back to the app's home page and select "Accelerometer". </li>
                <li>Now you can control the Scorpion by tilting your mobile phone. Tilting forward sends 'F', backward sends 'B', etc.</li>
            </ul>
        </li>
    </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion robot for ROS-based teleoperation and control its movement using the tilting motion of an Android phone via the "Arduino Bluetooth Control" app.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (ROS Noetic, Ubuntu 20.04), Raspberry Pi (Ubuntu Server), Scorpion hardware (with Teensy, Bluetooth module), and an Android phone with the specified app.</p>
        </li>
        <li>
            <p><b>How do I set up the mobile app for tilt controlling?</b></p>
            <p>Install the app, pair with the HC-05 module (password 1234). In the app's accelerometer settings, map the UP, DOWN, LEFT, and RIGHT tilts to the characters F, B, L, and R respectively.</p>
        </li>
        <li>
            <p><b>What should I do if I encounter errors during the setup process?</b></p>
            <p>Double-check hardware connections (especially Bluetooth RX/TX), ensure ROS nodes (`bringup.launch` and `bluetooth.py`) are running correctly on the Pi, verify Bluetooth pairing, and confirm the accelerometer configuration in the app matches the expected characters (F, B, L, R).</p>
        </li>
        <li>
            <p><b>How do I control the Scorpion using my mobile phone's tilting motion?</b></p>
            <p>After setup, select the "Accelerometer" mode in the app. Tilting the phone forward should make the robot move forward (sends 'F'), tilting left should make it turn left (sends 'L'), and so on, based on your configuration.</p>
        </li>
    </ol>
        </>
      ),
    },
        "Python Programmed Button Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package (or Scorpion-specific package)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Scorpion hardware</li>
        <li>Teensy 3.0 or 4.0</li>
        <li>Bluetooth module (HC-05)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Scorpion for teleoperation.</li>
        <li>Learn about the different basic components that make up a Scorpion robot.</li>
        <li>Control the Scorpion using the tilt sensor (accelerometer) of a mobile phone via Bluetooth and ROS.</li>
    </ul>

    <h3>Implementation Steps:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>
    <p>Instruction link: Platform IO Installation (Placeholder Link)</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (if not done)</h4>
    <p>Follow the general steps for uploading Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace (<code>scorpion_ws</code>).</p>
    <p>Instruction link: Teensy setup and Workspace setup (Placeholder Link - refer to scorpion_robot_setup_guide.html)</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>SSH into the Raspberry Pi, ensure necessary packages are installed, build the workspace, source it, and launch the required nodes. You will need at least two terminals connected to the Raspberry Pi.</p>

    <p><b>Terminal 1 (on Raspberry Pi via SSH): Launch Base Controller</b></p>
    <code>ssh username@ip</code>
    <p>Install rosserial if needed:</p>
    <code>sudo apt-get update</code>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>Navigate to workspace, build, source, and launch:</p>
    <code>cd scorpion_ws</code>
    <code>rm -r build devel # Optional clean</code>
    <code>catkin_make</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch linorobot bringup.launch</code>

    <p><b>Terminal 2 (on Raspberry Pi via SSH): Launch Bluetooth Script</b></p>
    <p>This script listens for commands coming via Bluetooth.</p>
    <code>ssh username@ip</code>
    <code>cd scorpion_ws</code>
    <code>source devel/setup.bash</code>
    <code>cd src/linorobot/scripts # Adjust path if necessary</code>
    <code>python3 bluetooth.py</code>

    <h4>STEP 4: Setup the Mobile APP for Tilt Controlling</h4>
    <ol>
        <li>Install the "Arduino Bluetooth Control" app on your Android mobile device: <a href="https://play.google.com/store/apps/details?id=com.broxcode.arduinobluetoothfree&pcampaignid=web_share" target="_blank">Google Play Store Link</a></li>
        <li>Connect the device with Bluetooth:
            <ul>
                <li>Open your phone's Bluetooth settings.</li>
                <li>Pair with a new device.</li>
                <li>Select "HC05".</li>
                <li>Enter the password: <code>1234</code>.</li>
            </ul>
        </li>
        <li>Open the "Arduino Bluetooth Control" app.</li>
        <li>Select the device -{">"} "HC05". </li>
        <li>Configure Accelerometer Directions:
            <ul>
                <li>Go to app settings -{">"} Accelerometer -{">"} Direction configuration.</li>
                <li>Set up tilt directions and the corresponding data to send:
                    <ul>
                        <li><b>UP:</b> Data to send: <code>F</code> -{">"} Click OK</li>
                        <li><b>DOWN:</b> Data to send: <code>B</code> -{">"} Click OK</li>
                        <li><b>LEFT:</b> Data to send: <code>L</code> -{">"} Click OK</li>
                        <li><b>RIGHT:</b> Data to send: <code>R</code> -{">"} Click OK</li>
                        <li>(Consider adding a "Stop" command for when the phone is level, if the app supports it, mapping it to <code>S</code>)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Control the Scorpion by Tilting Phone:
            <ul>
                <li>Go back to the app's home page and select "Accelerometer". </li>
                <li>Now you can control the Scorpion by tilting your mobile phone. Tilting forward sends 'F', backward sends 'B', etc. </li>
            </ul>
        </li>
    </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Scorpion robot for ROS-based teleoperation and control its movement using the tilting motion of an Android phone via the "Arduino Bluetooth Control" app.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (ROS Noetic, Ubuntu 20.04), Raspberry Pi (Ubuntu Server), Scorpion hardware (with Teensy, Bluetooth module), and an Android phone with the specified app.</p>
        </li>
        <li>
            <p><b>How do I set up the mobile app for tilt controlling?</b></p>
            <p>Install the app, pair with the HC-05 module (password 1234). In the app's accelerometer settings, map the UP, DOWN, LEFT, and RIGHT tilts to the characters F, B, L, and R respectively.</p>
        </li>
        <li>
            <p><b>What should I do if I encounter errors during the setup process?</b></p>
            <p>Double-check hardware connections (especially Bluetooth RX/TX), ensure ROS nodes (`bringup.launch` and `bluetooth.py`) are running correctly on the Pi, verify Bluetooth pairing, and confirm the accelerometer configuration in the app matches the expected characters (F, B, L, R).</p>
        </li>
        <li>
            <p><b>How do I control the Scorpion using my mobile phone's tilting motion?</b></p>
            <p>After setup, select the "Accelerometer" mode in the app. Tilting the phone forward should make the robot move forward (sends 'F'), tilting left should make it turn left (sends 'L'), and so on, based on your configuration.</p>
        </li>
    </ol>
        </>
      ),
    },
    
  };
  



    const sampleCodeLinks = {

  "Wireless Controlled Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_1.ino",
  "Button Controlled Robot": "https://github.com/Megararobotics/Cancero/blob/main/Exp2.ino",
  "Voice Controlled Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_3.ino",
  "Joystick Controlled Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_4.ino",
  "Obstacle Detection Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_5.ino",
  "Pick and Place": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_6.ino",
  "Pick and Drag Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_7.ino",
  "Organising Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_8.ino",
  "Path Clearing Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_9.ino",
  "Stacking Blocks": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_10.ino",
  "Straight Line Stacking Blocks": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_11.ino",
  "Shape Forming Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_12.ino",
  "Drawing Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_13.ino",
  "Switch Controlled Robot": "https://github.com/Megararobotics/scropine/blob/main/Scorpion_advanced_14.ino"


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
  "Wireless Controlled Robot",
  "Button Controlled Robot",
  "Voice Controlled Robot",
  "Joystick Controlled Robot",
  "Obstacle Detection Robot",
  "Pick and Place",
  "Pick and Drag Robot",
  "Organising Robot",
  "Path Clearing Robot",
  "Stacking Blocks"
];

const intermediateItems = [
  "Straight Line Stacking Blocks",
  "Shape Forming Robot",
  "Drawing Robot",
  "Switch Controlled Robot",
  "Keyboard Controlled Robot Using ROS",
  "Wireless Controlled Robot Using Python Program",
  "ROS Based Joystick Controller",
  "Surveillance Camera Using ROS",
  "Teleoperation Using Camera Feedback in ROS",
  "Human Following Robot Using ROS"
];

const advancedItems = [
  "ROS Based Master Slave Control",
  "Shape Path Clearing Robot Using ROS",
  "Obstacle Based Speed Control Using ROS",
  "Moving Obstacle Avoidance Using ROS",
  "Maze Solving Robot Using ROS",
  "Python Programmed Terminal Controlled Robo",
  "Staircase Detection Robot Using ROS",
  "Python Programmed Voice Controlled Robot",
  "Python Programmed Mobile Tilt Controlled Robot",
  "Python Programmed Button Controlled Robot"
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
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Quick star guide"])}>
            Quick star guide
          </button>
            <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Setting Up a Raspberry Pi4 with Ubuntu 20.04 Server"])}>
            Setting Up a Raspberry Pi4 with Ubuntu 20.04 Server
          </button>
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Configuring  Wi-Fi on Ubuntu Server with a Monitor"])}>
            Configuring  Wi-Fi on Ubuntu Server with a Monitor
          </button><button className="cm-link" onClick={() => scrollTo(itemRefs.current["Steps for SSH Access"])}>
            Steps for SSH Access
          </button>
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["ROS installation"])}>
            ROS installation
          </button>
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Installing Platform IO on Ubuntu Server 20.04"])}>
            Installing Platform IO on Ubuntu Server 20.04
          </button>
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Firmware Installation Setup"])}>
            Firmware Installation Setup
          </button>
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["ROS Setup"])}>
            ROS Setup
          </button>
          <button className="cm-link" onClick={() => scrollTo(itemRefs.current["Transeferring the Working and Building with Catkin"])}>
            Transeferring the Working and Building with Catkin
          </button>

        </div>

        {/* Lists */}
<div className="cm-bar cm-bar-beginner">Beginner</div>
{renderList(beginnerItems, -1)} {/* -1 means all items have sample code */}

<div className="cm-bar cm-bar-intermediate">Intermediate</div>
{renderList(intermediateItems, 4)} {/* Only first 4 items have sample code */}

<div className="cm-bar cm-bar-advanced">Advanced</div>
{renderList(advancedItems, 0)} {/* No sample code for advanced items */}

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
