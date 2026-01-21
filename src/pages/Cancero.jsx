import React, { useRef } from "react";
import "./B1Experiment.css";
import topArrow from "../assets/uparrow.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cancero() {
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
    "Voice Control Robot with Gripper": {
      type: "experiment",
      content: (
        <>
    <h2>1.1 Objective</h2>
    <p>The objective is to build a voice-controlled robot that can perform directional movements (forward, backward, left, right) and control a gripper mechanism using servo motors. The robot receives commands via Bluetooth and acts accordingly, making it suitable for applications like material handling, remote operation, or robotic competitions.</p>

    <h3>Setup</h3>
    <p>Before proceeding, ensure that you have completed the Cancero assembly and connected it to the Teensy 4.0 following the instructions in Sections 2.1 and 2.3.</p>

    <h2>1.2 Hardware Connections</h2>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins the pin numbers are provided below.</p>

    <h4>Motor Driver to Teensy 4.0</h4>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>IN1 (Motor1Dir1) → Pin 20</li>
                <li>IN2 (Motor1Dir2) → Pin 1</li>
                <li>ENA (Motor1PWM) → Pin 2</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>IN3 (Motor2Dir1) → Pin 6</li>
                <li>IN4 (Motor2Dir2) → Pin 9</li>
                <li>ENB (Motor2PWM) → Pin 5</li>
            </ul>
        </li>
        <li><b>Power to Motor Driver:</b>
            <ul>
                <li>+12V → Battery Positive Terminal</li>
                <li>GND → Battery Negative Terminal</li>
            </ul>
        </li>
        <li>Motor terminals connect to left and right wheels respectively.</li>
    </ul>

    <h4>Servo Motors</h4>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h4>Bluetooth Module (HC-05/HC-06)</h4>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>
    <div class="note">
        <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>
    </div>

    <h2>1.3 Mobile Application</h2>
    <p>To download the required mobile application, "Arduino Bluetooth Control," simply visit the Play Store on your Android device and search for the app or conveniently click on the provided link for quick access. This app is essential for establishing a connection between your mobile device and the Cancero's Bluetooth module, enabling seamless voice control.</p>
    <p><a href="https://play.google.com/store/apps/details?id=com.broxcode.arduinobluetoothfree" target="_blank">[Play Store Link: Arduino Bluetooth Control]</a></p>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Power up the Cancero and ensure the Bluetooth module is paired with the mobile device (default password '1234' if needed).</li>
        <li>Open the "Arduino Bluetooth Control" app on your mobile device.</li>
        <li>Establish a connection between the app and the Bluetooth module (select HC-05/HC-06).</li>
        <li>Configure the vocal commands and data to be sent in the mobile app's settings (Voice Command Configuration). For example:
            <ul>
                <li>Voice Command: "Go Forward" -{">"} Data to send: <code>F</code></li>
                <li>Voice Command: "Go Back" -{">"} Data to send: <code>B</code></li>
                <li>Voice Command: "Turn Left" -{">"} Data to send: <code>L</code></li>
                <li>Voice Command: "Turn Right" -{">"} Data to send: <code>R</code></li>
                <li>Voice Command: "Stop" -{">"} Data to send: <code>S</code></li>
                <li>Voice Command: "Lift Up" -{">"} Data to send: <code>U</code></li>
                <li>Voice Command: "Lower Down" -{">"} Data to send: <code>D</code></li>
                <li>Voice Command: "Open Gripper" -{">"} Data to send: <code>O</code></li>
                <li>Voice Command: "Close Gripper" -{">"} Data to send: <code>C</code></li>
            </ul>
        </li>
        <li>Navigate to the Voice Control section in the app.</li>
        <li>Send voice commands through the app. The robot should respond accordingly.</li>
    </ol>

    <h2>1.4 Expected Results</h2>
    <p>The Cancero should respond to the configured voice commands and move its base (forward, backward, left, right, stop) and control its gripper (up, down, open, close) accordingly.</p>

    <h2>1.5 Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: What should I do if the robot does not respond to voice commands?</b></p>
            <p>A: Ensure the Bluetooth module is properly connected (TX to RX2, RX to TX2 on Teensy 4.0), the app is paired with the correct Bluetooth device, the connection is active in the app, and the voice commands are configured correctly in the app's settings to send the expected characters (<code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>, <code>S</code>, <code>U</code>, <code>D</code>, <code>O</code>, <code>C</code>).</p>
        </li>
        <li>
            <p><b>Q: Can I customize the voice commands?</b></p>
            <p>A: Yes, the voice phrases (e.g., "Go Forward") are configured within the "Arduino Bluetooth Control" app. The corresponding characters sent (<code>F</code>, <code>B</code>, etc.) must match what the Arduino/Teensy code expects in its `executeCommand()` function (or equivalent).</p>
        </li>
        <li>
            <p><b>Q: How do I stop the robot?</b></p>
            <p>A: Send the configured voice command associated with the 'S' character (e.g., say "Stop" if you configured it that way) through the app.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Bluetooth Joystick Control Robot With Gripper": {
      type: "experiment",
      content: (
        <>
     <h2>2.1 Objective</h2>
    <p>The objective of this experiment is to control the Cancero wirelessly using a Bluetooth joystick module via the "Blue Duino" mobile app. By executing the provided code and interfacing the joystick through the app, you can move the Cancero forward, backward, left, right, stop the motors, and control a gripper mechanism using servo motors based on joystick input.</p>

    <h3>Setup</h3>
    <p>Before running the experiment, ensure that you have assembled the Cancero hardware, as described in Section 2.1. Additionally, ensure that the Cancero is connected to the Arduino IDE, as explained in Section 2.3.</p>

    <h2>2.2 Hardware Setup</h2>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins, the pin numbers are provided below.</p>

    <h4>Motor Driver to Teensy 4.0</h4>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>IN1 (Motor1Dir1) → Pin 20</li>
                <li>IN2 (Motor1Dir2) → Pin 1</li>
                <li>ENA (Motor1PWM) → Pin 2</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>IN3 (Motor2Dir1) → Pin 6</li>
                <li>IN4 (Motor2Dir2) → Pin 9</li>
                <li>ENB (Motor2PWM) → Pin 5</li>
            </ul>
        </li>
        <li><b>Power to Motor Driver:</b>
            <ul>
                <li>+12V → Battery Positive Terminal</li>
                <li>GND → Battery Negative Terminal</li>
            </ul>
        </li>
        <li>Motor terminals connect to left and right wheels respectively.</li>
    </ul>

    <h4>Servo Motors</h4>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h4>Bluetooth Module (HC-05/HC-06)</h4>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>
    <div class="note">
        <p>Before connecting the Bluetooth module to the PCB, ensure that the code has been successfully uploaded to avoid any interference during the programming process. The PCB includes a dedicated connector for the 6 pins of the Bluetooth module. Refer to the connection guidelines provided in Section 2.1 for further details.</p>
    </div>

    <h2>2.3 Mobile App Setup</h2>
    <ol>
        <li>Download the “Blue Duino" app from the Play Store: <a href="https://play.google.com/store/apps/details?id=com.blueduino.arduinobluetooth" target="_blank">[Mobile application]</a></li>
        <li>Pair your mobile device with the robot's Bluetooth module (HC-05/HC-06). The default password is often '1234'.</li>
        <li>Open the "Blue Duino" app and connect to the Arduino/Teensy device through Bluetooth.</li>
        <li>Refer to the app setup guide for configuring joystick controls: <a href="#">[Blue duino_setup]</a> (Placeholder Link)</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Ensure the Cancero robot is powered on.</li>
        <li>Connect to the Arduino/Teensy device via Bluetooth using the "Blue Duino" app.</li>
        <li>Navigate to the joystick control interface within the app.</li>
        <li>Use the on-screen joystick and configured buttons to send commands to the Cancero:
            <ul>
                <li>Joystick Up: <code>F</code> (Move forward)</li>
                <li>Joystick Down: <code>B</code> (Move backward)</li>
                <li>Joystick Left: <code>L</code> (Turn left)</li>
                <li>Joystick Right: <code>R</code> (Turn right)</li>
                <li>Joystick Center/Button: <code>S</code> (Stops both motors)</li>
                <li>Configured Buttons for Gripper: <code>U</code> (Lift Up), <code>D</code> (Lower Down), <code>O</code> (Open Gripper), <code>C</code> (Close Gripper)</li>
            </ul>
        </li>
    </ol>

    <h2>2.4 Expected Results</h2>
    <p>The Cancero should respond to the commands sent from the "Blue Duino" app's joystick and button interface, resulting in various movements (base and gripper), as specified by the controls.</p>

    <h2>2.5 Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: What should I do if the app is unable to connect to the Arduino device?</b></p>
            <p>A: Ensure that Bluetooth is enabled on both your mobile device and the Arduino/Teensy. Check the Bluetooth pairing in your phone's settings. Restart the app for a fresh connection attempt. Verify the Bluetooth module's wiring (TX/RX connections).</p>
        </li>
        <li>
            <p><b>Q: Can I modify the code for different motor speeds?</b></p>
            <p>A: Yes, you can adjust the PWM (speed) values within the Teensy code that correspond to the forward, backward, left, and right movement functions. You might need to adjust the range mapping based on how the joystick sends data.</p>
        </li>
    </ul>
        </>
      ),
    },
        "Blutooth-Controlled Robotic Vehicle with Gripper Control": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this project is to create a Bluetooth-controlled robotic vehicle (Cancero) with gripper control and ultrasonic obstacle detection. The robot can move in multiple directions, open/close a gripper, lift/lower the gripper, and react to obstacles using distance sensing. The robot’s actions are controlled by Bluetooth commands sent from a mobile app.</p>

    <h2>Hardware Setup</h2>

    <h3>Components:</h3>
    <ul>
        <li><b>Microcontroller:</b> Teensy 4.0 for controlling all components.</li>
        <li><b>Motor Driver Module:</b> L298N Motor Driver to control two DC motors.</li>
        <li><b>DC Motors:</b> 2 motors attached to the motor driver.</li>
        <li><b>Servos:</b> Two servo motors for gripper control (open/close and up/down).</li>
        <li><b>Ultrasonic Sensor (HC-SR04):</b> For distance measurement and obstacle detection.</li>
        <li><b>Bluetooth Module (e.g., HC-05 or HC-06):</b> For wireless communication.</li>
        <li><b>Power Supply:</b> Suitable battery or adapter.</li>
    </ul>

    <h3>Connections:</h3>
    <ul>
        <li><b>Motor Driver Module (L298N):</b>
            <ul>
                <li>Motor 1: Connected to Teensy pins 20, 1 (controlled by ENA at pin 2).</li>
                <li>Motor 2: Connected to Teensy pins 6, 9 (controlled by ENB at pin 5).</li>
            </ul>
        </li>
        <li><b>Servos:</b>
            <ul>
                <li>Gripper Open/Close Servo: Signal connected to Teensy pin 3.</li>
                <li>Gripper Up/Down Servo: Signal connected to Teensy pin 4.</li>
                <li>(Both servos VCC to 5V, GND to GND)</li>
            </ul>
        </li>
        <li><b>Ultrasonic Sensor (HC-SR04):</b>
            <ul>
                <li>Trig Pin: Connected to Teensy pin 17.</li>
                <li>Echo Pin: Connected to Teensy pin 16.</li>
            </ul>
        </li>
        <li><b>Bluetooth Module (HC-05/HC-06):</b>
            <ul>
                <li>TX → Teensy 4.0 RX2 (Pin 7 or Serial2)</li>
                <li>RX → Teensy 4.0 TX2 (Pin 8 or Serial2)</li>
                <li>VCC → 5V from Teensy 4.0</li>
                <li>GND → Teensy 4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h3>Wiring Summary:</h3>
    <p>Connect all components based on the pin assignments specified above and in the code. Ensure the motor driver is powered by the battery, and the GND pins of the motor driver, Teensy, and Bluetooth module are connected to a common ground.</p>
    <div class="note">
        <p><b>Note:</b> Connect the Bluetooth module (RX/TX pins) <b>after</b> uploading the code to the Teensy to avoid potential conflicts during the upload process.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li><b>Download a Bluetooth Controller App:</b> Install an app like "Bluetooth Terminal" or "Arduino Bluetooth Controller" from the Play Store (Android) or App Store (iOS).</li>
        <li><b>Connect to Bluetooth:</b>
            <ul>
                <li>Power on the robot.</li>
                <li>Pair your smartphone with the HC-05/HC-06 Bluetooth module (default password is often '1234').</li>
                <li>Open the Bluetooth controller app and connect to the paired Bluetooth module.</li>
            </ul>
        </li>
        <li><b>Send Commands via App:</b> Use the app’s terminal or button interface to send the following character-based commands:
            <ul>
                <li><code>F</code>: Move forward</li>
                <li><code>B</code>: Move backward</li>
                <li><code>L</code>: Turn left</li>
                <li><code>R</code>: Turn right</li>
                <li><code>S</code>: Stop motors</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
                <li><code>A</code>: Enable obstacle-aware mode (robot will react to obstacles)</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <ul>
        <li><b>Manual Control:</b> When Bluetooth commands like <code>F</code>, <code>B</code>, <code>L</code>, <code>R</code> are sent, the robot moves accordingly. <code>S</code> stops the motors.</li>
        <li><b>Gripper Control:</b> <code>O</code> opens, <code>C</code> closes, <code>U</code> lifts, and <code>D</code> lowers the gripper.</li>
        <li><b>Obstacle-Aware Mode (Activated by <code>A</code>):</b>
            <ul>
                <li>The robot monitors distance using the ultrasonic sensor.</li>
                <li>Distance {"<"} 10 cm: Motors stop.</li>
                <li>Distance 10–49 cm: Speed reduces significantly.</li>
                <li>Distance 50–79 cm: Speed reduces moderately.</li>
                <li>Distance{" >"}= 80 cm: Moves at full configured speed.</li>
            </ul>
        </li>
    </ul>

    <h2>FAQ</h2>
    <ul>
        <li><b>Q: Why is the robot not responding to Bluetooth commands?</b><br/>
            A: Ensure the Bluetooth module is correctly paired, the app is connected to the right device, and the correct baud rate (usually 9600) is used. Double-check RX/TX pin connections (RX on module to TX2 on Teensy, TX on module to RX2 on Teensy).</li>
        <li><b>Q: Why are the motors not moving?</b><br/>
            A: Check motor driver connections (IN1, IN2, ENA, IN3, IN4, ENB to Teensy pins). Ensure the motor driver has sufficient power from the battery and shares a common ground with the Teensy.</li>
        <li><b>Q: The gripper servos are not moving. What could be the problem?</b><br/>
            A: Verify servo signal pin connections (Pins 3 and 4 on Teensy). Ensure servos receive 5V power and share a common ground. Check if the `Servo.h` library is included and servos are attached correctly in the code.</li>
        <li><b>Q: How can I troubleshoot the ultrasonic sensor?</b><br/>
            A: Check Trig (Pin 17) and Echo (Pin 16) connections. Use the Arduino IDE's Serial Monitor (ensure `Serial.begin(9600);` is in `setup()`) to print the distance values read by the sensor to verify its function.</li>
        <li><b>Q: How do I modify the robot’s speed?</b><br/>
            A: Adjust the PWM values (0–255 range) set using `analogWrite()` for the ENA (Pin 2) and ENB (Pin 5) pins within the movement functions (e.g., `moveForward()`).</li>
        <li><b>Q: What happens in obstacle-aware mode if an obstacle is detected?</b><br/>
            A: The robot dynamically adjusts its speed based on the detected distance: stops if very close ({"<"}10 cm), slows down moderately if close (10-49 cm), slows down slightly if medium distance (50-79 cm), and moves at the set speed if far away ({">"}= 80 cm).</li>
        <li><b>Q: Can I extend the functionality?</b><br/>
            A: Yes, you can add more commands (e.g., for different speeds, arm positions) by modifying the `executeCommand()` function in the Teensy code and configuring the mobile app accordingly. You could also integrate more sensors.</li>
    </ul>
        </>
      ),
    },
            "Pick and Place Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The aim of this experiment is to demonstrate the functionality of a robot performing a pick-and-place task using the Blue Duino app to control the robot via Bluetooth. The robot will move to a designated location, pick up an object using its gripper, and place the object at another specified location. All commands are sent through a mobile device with a Bluetooth connection.</p>

    <h2>Setup</h2>
    <p>Before starting, ensure that the robot's assembly (Cancero) is complete and all necessary hardware connections are in place, as described in Sections 2.1 and 2.3 of the user manuals.</p>

    <h2>Hardware Connections</h2>

    <h3>Motor Control Pins:</h3>
    <p>The robot's movement is controlled by a motor driver, and the connections should be made as follows:</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction input 1 (IN1): pin 20</li>
                <li>Direction input 2 (IN2): pin 1</li>
                <li>PWM pin (ENA): pin 2</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction input 1 (IN3): pin 6</li>
                <li>Direction input 2 (IN4): pin 9</li>
                <li>PWM pin (ENB): pin 5 (Corrected from ENA based on previous context)</li>
            </ul>
        </li>
    </ul>

    <h3>Gripper Control Pins:</h3>
    <ul>
        <li>Two servo motors (connected to pins 3 and 4) control the robotic gripper’s open/close and up/down movements.
             <ul>
                <li>Gripper Servo Signal → Teensy4.0 Pin 3</li>
                <li>Vertical Lift Servo Signal → Teensy4.0 Pin 4</li>
                <li>(Both servos VCC to 5V, GND to GND)</li>
             </ul>
        </li>
    </ul>

    <h3>Bluetooth Module (HC-05/HC-06):</h3>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>

    <h3>Bluetooth Module Connection:</h3>
    <div class="note">
        <p>Make sure that the code is successfully uploaded to Teensy 4.0 before connecting the Bluetooth module. Connect the 6-pin connector of the Bluetooth module to the dedicated slot on the PCB board. Refer to Section 2.1 of the manual for more details about the Bluetooth module connection.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download the “Blue Duino" app from the Play Store: <a href="https://play.google.com/store/apps/details?id=com.blueduino.arduinobluetooth" target="_blank">[Mobile application]</a></li>
        <li>Refer to the Blue Duino setup guide for configuring controls: <a href="#">[Blue duino_setup]</a> (Placeholder Link)</li>
        <li>Pair your mobile device with the robot's Bluetooth module (HC-05/HC-06).</li>
        <li>Open the "Blue Duino" app and connect to the Arduino/Teensy device through Bluetooth.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li><b>Connect the Robot to Bluetooth:</b>
            <ul>
                <li>Power on the Cancero robot.</li>
                <li>Pair the robot with your mobile device via Bluetooth using the "Blue Duino" app.</li>
            </ul>
        </li>
        <li><b>Control the Robot:</b>
            <ul>
                <li><b>Move the robot to the object:</b> Use the app's configured controls (joystick, buttons, etc.) to navigate the robot.
                    <ul>
                        <li><code>F</code> to move forward</li>
                        <li><code>B</code> to move backward</li>
                        <li><code>L</code> to turn left</li>
                        <li><code>R</code> to turn right</li>
                        <li><code>S</code> to stop (if configured)</li>
                    </ul>
                </li>
                <li><b>Operate the gripper:</b> Use the configured controls for the gripper.
                    <ul>
                        <li><code>U</code> to move gripper up</li>
                        <li><code>D</code> to move gripper down</li>
                        <li><code>O</code> to open gripper</li>
                        <li><code>C</code> to close gripper (to pick up the object)</li>
                    </ul>
                </li>
                <li><b>Move the robot to the drop-off location:</b> Use the movement controls (<code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>).</li>
                <li><b>Place the object:</b> Use the gripper controls (e.g., <code>D</code> to lower, <code>O</code> to open/release).</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <ul>
        <li>The robot will respond to the Bluetooth commands from the "Blue Duino" app, moving forward, backward, left, right, or stopping as directed.</li>
        <li>The gripper will lift, lower, open, and close based on the corresponding commands (<code>U</code>, <code>D</code>, <code>O</code>, <code>C</code>), allowing the robot to successfully pick up and place objects.</li>
    </ul>

    <h2>FAQs</h2>
    <ul>
        <li>
            <p><b>Q: What if the robot doesn’t pick up the object properly?</b></p>
            <p>A: Ensure the object is within the gripper's reach and suitable size/weight. Adjust the robot's alignment before closing the gripper. Check if the servo positions for 'open' and 'closed' in the code are correctly calibrated for your gripper.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust the speed of the robot?</b></p>
            <p>A: You can modify the PWM values set by `analogWrite()` for the ENA (Pin 2) and ENB (Pin 5) pins within the robot's movement functions in the Teensy code.</p>
        </li>
        <li>
            <p><b>Q: What happens if I lose Bluetooth connection?</b></p>
            <p>A: The robot will likely stop executing commands. Re-establish the connection using the "Blue Duino" app. Ensure the robot remains within the Bluetooth range (typically around 10 meters).</p>
        </li>
    </ul>

    <h2>Additional Notes</h2>
    <ul>
        <li>Calibrate the gripper's open/close and up/down positions in the code for optimal performance.</li>
        <li>Start by testing the pick-and-place sequence with lightweight, easy-to-grip objects.</li>
        <li>Maintain a stable Bluetooth connection by staying within range and minimizing interference.</li>
    </ul>
        </>
      ),
    },
            "Computer-Controlled Cancero Robot With Intergrater Gripper": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The Computer Operated Cancero experiment allows you to control the movements of a Cancero using commands sent from your computer (via the Arduino IDE Serial Monitor) to the Teensy board. The bot can move forward, backward, turn left, turn right, stop, and control its gripper based on the received commands.</p>

    <h2>Setup</h2>
    <ol>
        <li>Assemble the Cancero hardware following the instructions in Section 2.1.</li>
        <li>Connect the Cancero (Teensy 4.0) to the Arduino IDE as explained in Section 2.3. Ensure the correct board (Teensy 4.0) is selected in the IDE.</li>
    </ol>

    <h2>Hardware Connections</h2>

    <h3>Motor Connections:</h3>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>PWM input (ENA): Teensy pin 2</li>
                <li>Direction input 1 (IN1): Teensy pin 20</li>
                <li>Direction input 2 (IN2): Teensy pin 1</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>PWM input (ENB): Teensy pin 5</li>
                <li>Direction input 1 (IN3): Teensy pin 6</li>
                <li>Direction input 2 (IN4): Teensy pin 9</li>
            </ul>
        </li>
        <li><b>Power to Motor Driver:</b>
            <ul>
                <li>+12V → Battery Positive Terminal</li>
                <li>GND → Battery Negative Terminal</li>
            </ul>
        </li>
        <li>Motor terminals connect to left and right wheels respectively.</li>
    </ul>

    <h3>Servo Motors:</h3>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h3>Bluetooth Module (HC-05/HC-06):</h3>
    <p>(Included for completeness based on provided text, but not strictly required for Serial Monitor control)</p>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>
     <div class="note">
        <p>Before connecting the Bluetooth module (if used), ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the 6 pins of the Bluetooth module. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>
    </div>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Connect the Cancero robot to your computer via USB.</li>
        <li>Upload the appropriate Arduino sketch (code) for computer control to the Teensy 4.0 board.</li>
        <li>Connect the main power supply to the robot.</li>
        <li>Open the Serial Monitor in the Arduino IDE (Tools {">"} Serial Monitor).</li>
        <li>Ensure the baud rate in the Serial Monitor matches the rate specified in your Arduino code (e.g., <code>Serial.begin(9600);</code> - typically 9600).</li>
        <li>Type the following commands into the input field of the Serial Monitor and press Enter or click "Send":
            <ul>
                <li><code>F</code>: Move forward</li>
                <li><code>B</code>: Move backward</li>
                <li><code>L</code>: Turn left</li>
                <li><code>R</code>: Turn right</li>
                <li><code>S</code>: Stop motors</li>
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
            </ul>
        </li>
    </ol>

    <div class="note">
        <p><b>Safety Note:</b> Ensure proper precautions when connecting and disconnecting components and avoid short circuits. Always disconnect the power supply when making changes to the circuit.</p>
    </div>
        </>
      ),
    },
            "Pushing Operation Using Cancero Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to utilize the Cancero robot to push objects backward using its Gripper. The robot consists of a two-wheeled base for mobility and a robotic arm controlled by servo motors. By using the provided code, you will be able to control the robot’s movement and the gripper positioning to push objects effectively.</p>

    <h2>Setup</h2>
    <p>Ensure that the Cancero robot has been assembled according to the assembly instructions in Section 2.4. The robot should be connected to the Arduino IDE as described in Section 2.3.</p>

    <h2>Hardware Setup</h2>

    <h3>Bluetooth Module (HC-05) to Teensy 4.0:</h3>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>

    <h3>Motor Driver (L298N) Connections:</h3>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Motor 1 Output (OUT1 and OUT2) to Motor 1 Terminals</li>
                <li>Direction Control: IN1 to Pin 20, IN2 to Pin 1</li>
                <li>PWM Control: ENA to Pin 2</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Motor 2 Output (OUT3 and OUT4) to Motor 2 Terminals</li>
                <li>Direction Control: IN3 to Pin 6, IN4 to Pin 9</li>
                <li>PWM Control: ENB to Pin 5</li>
            </ul>
        </li>
    </ul>

    <h3>Servo Motors:</h3>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h3>Power Supply:</h3>
    <ul>
        <li>12V Power Source: Connect to the L298N motor driver to power the DC motors.</li>
        <li>Ensure that the 5V regulator on the L298N can provide sufficient current for the servos, or use a separate 5V power source for the servos and Teensy.</li>
    </ul>

    <h2>Mobile App Setup (Bluduino)</h2>
    <ol>
        <li><b>Install the App:</b> Download and install the "Bluduino" app from the Google Play Store.</li>
        <li><b>Pair the Device:</b>
            <ul>
                <li>Open the Bluetooth settings on your mobile device.</li>
                <li>Search for available devices and pair with the HC-05 module. The default pairing code is usually <code>1234</code>.</li>
            </ul>
        </li>
        <li><b>Connect to Bluetooth:</b>
            <ul>
                <li>Open the Bluduino app.</li>
                <li>Select the HC-05 module from the list of paired devices to establish a connection.</li>
            </ul>
        </li>
        <li><b>Control the Robot:</b> Configure and use the app interface (buttons, joystick, etc.) to send the following commands:
            <ul>
                <li><code>F</code>: Move forward</li>
                <li><code>B</code>: Move backward</li>
                <li><code>L</code>: Turn left</li>
                <li><code>R</code>: Turn right</li>
                <li><code>S</code>: Stop (if configured)</li>
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Cancero robot should move forward to position itself correctly near the object. Upon receiving the appropriate commands (e.g., lowering the arm with <code>D</code>, closing the gripper slightly with <code>C</code> if needed for pushing surface, and moving backward with <code>B</code>), the robot should use its robotic arm to push objects backward. The arm’s servos should precisely execute the push action. Feedback on movement and arm positioning might be available via the Serial Monitor if programmed in the sketch.</p>

    <h2>Common Issues</h2>
    <div class="issues">
        <p><b>Bluetooth Connection Problems:</b> Ensure the HC-05 module is correctly paired and connected within the Bluduino app. If connection fails, try restarting the Bluetooth module (power cycle the robot), restarting Bluetooth on your phone, and re-pairing the devices.</p>
        <p><b>Mechanical Structural Issues:</b> Due to the forces involved in pushing, the arm servos might struggle or the arm structure might flex if not robust. Reinforce joints, ensure secure mounting, or consider using servos with higher torque if pushing heavier objects.</p>
    </div>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal or controller apps can be used as long as they allow sending the specified single-character commands (<code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>, <code>S</code>, <code>U</code>, <code>D</code>, <code>O</code>, <code>C</code>, etc.).</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds or servo angles/speed?</b></p>
            <p>A: Modify the PWM values (0-255) used with `analogWrite()` for motor speeds in the Teensy code. For servos, adjust the target angles (`write()` function) or the step increments and delays in custom movement functions to control position and speed.</p>
        </li>
    </ul>
        </>
      ),
    },
            "Straight-Line Stacking Experiment Robot": {
      type: "experiment",
      content: (
        <>
     <h2>Objective</h2>
    <p>The objective of this experiment is to use the Cancero robot’s 2-DOF robotic arm to stack blocks in a straight-line arrangement. This involves moving blocks to a stacking position and placing them one near another.</p>

    <h2>Setup</h2>
    <p>Ensure that the Cancero robot is assembled and connected according to the instructions of the manual (referencing Sections 2.1 and 2.3 for assembly and IDE connection respectively).</p>

    <h2>Hardware Setup</h2>

    <h3>Bluetooth Module (HC-05) to Teensy 4.0:</h3>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>

    <h3>Motor Driver (L298N) Connections:</h3>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Motor 1 Output (OUT1 and OUT2) to Motor 1 Terminals</li>
                <li>Direction Control: IN1 to Pin 20, IN2 to Pin 1</li>
                <li>PWM Control: ENA to Pin 2</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Motor 2 Output (OUT3 and OUT4) to Motor 2 Terminals</li>
                <li>Direction Control: IN3 to Pin 6, IN4 to Pin 9</li>
                <li>PWM Control: ENB to Pin 5</li>
            </ul>
        </li>
    </ul>

    <h3>Servo Motors:</h3>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h3>Power Supply:</h3>
    <ul>
        <li>12V Power Source: Connect to the L298N motor driver to power the DC motors.</li>
        <li>Ensure that the 5V supply (either from L298N regulator or separate source) can provide sufficient current for the servos and Teensy.</li>
    </ul>
    <div class="note">
        <p>Upload the provided code to the Teensy 4.0 using the Arduino IDE before connecting the Bluetooth module.</p>
    </div>

    <h2>Mobile App Setup (Bluduino)</h2>
    <ol>
        <li><b>Install the App:</b> Download and install the "Bluduino" app from the Google Play Store.</li>
        <li><b>Pair the Device:</b>
            <ul>
                <li>Open the Bluetooth settings on your mobile device.</li>
                <li>Search for available devices and pair with the HC-05 module. The default pairing code is usually <code>1234</code> or <code>0000</code>.</li>
            </ul>
        </li>
        <li><b>Connect to Bluetooth:</b>
            <ul>
                <li>Open the Bluduino app.</li>
                <li>Select the HC-05 module from the list of paired devices to establish a connection.</li>
            </ul>
        </li>
        <li><b>Send Commands:</b> Use the app's interface (buttons, joystick, terminal, etc.) to send the following commands to control the robot:
            <ul>
                <li><code>F</code>: Move Cancero robot forward</li>
                <li><code>B</code>: Move Cancero robot backward</li>
                <li><code>L</code>: Turn Cancero robot left</li>
                <li><code>R</code>: Turn Cancero robot right</li>
                <li><code>S</code>: Stop Cancero robot movement</li>
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Cancero robot should successfully pick up blocks using its gripper, navigate to the designated stacking area using the movement commands, and place the blocks one near another in a straight-line arrangement using the arm and gripper commands. The robot's movements and arm actions should be controllable and reasonably precise.</p>

    <h2>Common Issues</h2>
    <div class="issues">
        <p><b>Bluetooth Connection Problems:</b> Ensure the HC-05 module is correctly paired and selected within the Bluduino app. If issues persist, try restarting the robot's power, toggling Bluetooth on the phone, and re-pairing.</p>
        <p><b>Mechanical Structural Issues:</b> If the arm struggles to lift or accurately place blocks, check for loose joints, servo strain, or insufficient power. Reinforce the arm structure or consider using servos with higher torque if necessary.</p>
    </div>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal or controller apps that allow sending single-character commands (like <code>F</code>, <code>B</code>, <code>U</code>, <code>C</code>, etc.) can be used.</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds or servo angles/positions?</b></p>
            <p>A: Motor speeds can be adjusted by changing the PWM values (0-255) in the `analogWrite()` calls within the Teensy code. Servo angles/positions are controlled using the `write()` function or by modifying custom movement functions in the code to set specific target angles or movement steps.</p>
        </li>
    </ul>
        </>
      ),
    },
            "Clearing the Path By Moving Obstacles with Cancero Robot Arm": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to use the Cancero robot’s 2-DOF robotic arm to clear obstacles from a designated path. The robot will use its arm to detect, grasp, and move obstacles, ensuring a clear path for continued navigation.</p>

    <h2>Setup</h2>
    <p>Ensure that the Cancero robot is assembled and connected according to the instructions provided in Section 2.4 and Section 2.3 of the manual.</p>

    <h2>Hardware Setup</h2>

    <h3>Bluetooth Module (HC-05) to Teensy 4.0:</h3>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li> 
    </ul>

    <h3>Motor Driver (L298N) Connections:</h3>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Motor 1 Output (OUT1 and OUT2) to Motor 1 Terminals</li>
                <li>Direction Control: IN1 to Teensy 4.0 Pin 20, IN2 to Teensy 4.0 Pin 1</li>
                <li>PWM Control: ENA to Teensy 4.0 Pin 2</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Motor 2 Output (OUT3 and OUT4) to Motor 2 Terminals</li>
                <li>Direction Control: IN3 to Teensy 4.0 Pin 6, IN4 to Teensy 4.0 Pin 9</li>
                <li>PWM Control: ENB to Teensy 4.0 Pin 5</li>
            </ul>
        </li>
    </ul>

    <h3>Servo Motors:</h3>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h3>Power Supply:</h3>
    <ul>
        <li>12V Power Source: Connect to the L298N motor driver to power the DC motors.</li>
        <li>Ensure that the 5V supply (either from L298N regulator or separate source) can provide sufficient current for the servos and Teensy.</li>
    </ul>
    <div class="note">
        <p>Upload the provided code to the Teensy 4.0 using the Arduino IDE before connecting the Bluetooth module.</p>
    </div>

    <h2>Mobile App Setup (Bluduino)</h2>
    <ol>
        <li><b>Install the App:</b> Download and install the "Bluduino" app from the Google Play Store.</li>
        <li><b>Pair the Device:</b>
            <ul>
                <li>Open the Bluetooth settings on your mobile device.</li>
                <li>Search for available devices and pair with the HC-05 module. The default pairing code is usually <code>1234</code> or <code>0000</code>.</li>
            </ul>
        </li>
        <li><b>Connect to Bluetooth:</b>
            <ul>
                <li>Open the Bluduino app.</li>
                <li>Select the HC-05 module from the list of paired devices to establish a connection.</li>
            </ul>
        </li>
        <li><b>Send Commands:</b> Use the app's interface (buttons, joystick, terminal, etc.) to send the following commands to control the robot:
            <ul>
                <li><code>F</code>: Move Cancero robot forward</li> 
                <li><code>B</code>: Move Cancero robot backward</li> 
                <li><code>L</code>: Turn Cancero robot left</li> 
                <li><code>R</code>: Turn Cancero robot right</li> 
                <li><code>S</code>: Stop Cancero robot movement</li> 
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
            </ul>
        </li>
    </ol>

    <h2>Expected Results</h2>
    <p>By teleoperating using the mobile app, the Cancero robot should navigate to obstacles in its path, use its arm to grasp and move each obstacle (using commands like <code>D</code>, <code>C</code>, <code>U</code>, <code>O</code> and movement commands), and place them in a designated area, thus clearing the path. The robot's arm should operate smoothly, successfully removing obstacles as commanded.</p>

    <h2>Common Issues</h2>
    <div class="issues">
        <p><b>Bluetooth Connection Problems:</b> Ensure the HC-05 module is correctly paired and connected within the Bluduino app. Restart both the module (robot power) and the mobile device if necessary and re-pair them.</p>
        <p><b>Mechanical Structural Issues:</b> Due to the weight or imbalance of the robot arm, the servos may struggle to lift objects or move smoothly. This could be caused by the mechanical structure of the arm not being sturdy enough to handle the load. To address this, reinforce the joints or structure, distribute the weight more evenly, or adjust the arm’s design to reduce strain on the servos. Using servos with higher torque ratings may also help compensate for these mechanical limitations.</p>
    </div>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal or controller apps can also be used as long as they allow sending the specified single-character commands (<code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>, <code>S</code>, <code>U</code>, <code>D</code>, <code>O</code>, <code>C</code>, etc.).</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds or servo angles?</b></p>
            <p>A: Modify the PWM values (0-255) in the `analogWrite()` calls within the Teensy code for motor speed. Adjust the target angles in `servo.write()` calls or step increments/delays in custom movement functions for servo control.</p>
        </li>
    </ul>
        </>
      ),
    },
            "Automated Object Retrieval and Relocation System": {
      type: "experiment",
      content: (
        <>
   <h2>Objective</h2>
    <p>The objective of this code is to control a robot with Bluetooth commands, specifically using command <code>A</code> to engage an autonomous mode. When <code>A</code> is sent, the robot continuously moves forward and detects obstacles using an ultrasonic sensor. If it encounters an obstacle, it stops, picks up the object, places it elsewhere, and then resumes forward movement.</p>

    <h2>Hardware Setup</h2>

    <h3>Microcontroller:</h3>
    <ul>
        <li>Teensy 4.0 for controlling all components.</li>
    </ul>

    <h3>Motor Driver Module:</h3>
    <ul>
        <li>L298N Motor Driver to control two DC motors.</li>
        <li>Motor 1: Connected to pins 20, 1 (controlled by ENA at pin 2).</li>
        <li>Motor 2: Connected to pins 6, 9 (controlled by ENB at pin 5).</li>
    </ul>

    <h3>DC Motors:</h3>
    <ul>
        <li>2 motors attached to the motor driver to move the robot forward, backward, left, or right.</li>
    </ul>

    <h3>Servos:</h3>
    <ul>
        <li>Two servo motors (connected to pins 3 and 4) to control the robotic gripper’s open/close and up/down movements.</li>
    </ul>

    <h3>Ultrasonic Sensor (HC-SR04):</h3>
    <ul>
        <li>Trig Pin: Connected to pin 17.</li>
        <li>Echo Pin: Connected to pin 16.</li>
        <li>Used to measure the distance to obstacles and change motor behavior dynamically.</li>
    </ul>

    <h3>Bluetooth Module (e.g., HC-05 or HC-06):</h3>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
        <li>Used to send/receive Bluetooth commands from the mobile app.</li>
    </ul>

    <h3>Power Supply:</h3>
    <ul>
        <li>Suitable battery or adapter to power the motors, Teensy, and other components.</li>
    </ul>

    <h3>Wiring Summary:</h3>
    <ul>
        <li>Connect all components based on the pin assignments in the code.</li>
        <li>Ensure the motor driver is powered by the battery, and the GND pins of the motor driver, Teensy, and Bluetooth module are connected.</li>
    </ul>

    <h2>Expected Result</h2>
    <p>Upon starting the code and sending the <code>A</code> command via Bluetooth:</p>
    <ol>
        <li>The robot will begin moving forward.</li>
        <li>It will monitor the distance to obstacles using an ultrasonic sensor.</li>
        <li>When an obstacle is detected within a certain range, the robot will:
            <ul>
                <li>Stop moving.</li>
                <li>Execute a pick-and-place sequence: Open the gripper, lower the arm, close the gripper to pick up the object, lift the gripper, potentially turn or move slightly, lower the arm to place the object, and open the gripper.</li>
                <li>Resume forward movement after placing the object.</li>
            </ul>
        </li>
        <li>The robot will repeat this process until the command mode is changed (e.g., by sending 'S' or another movement command) or obstacles are no longer encountered.</li>
    </ol>

    <h2>Frequently Asked Questions (FAQ)</h2>
    <ol>
        <li>
            <p><b>What is the purpose of the ultrasonic sensor in this code?</b></p>
            <p>The ultrasonic sensor is used to measure the distance between the robot and any objects in its path. When an object is detected within a certain range, the robot stops its forward motion and initiates the programmed obstacle handling (pick-and-place) routine.</p>
        </li>
        <li>
            <p><b>How does the Bluetooth communication work?</b></p>
            <p>The code uses <code>Serial2</code> (connected to Teensy pins 7 and 8) to communicate with a Bluetooth module. It listens for incoming commands. When the character <code>A</code> is received, the robot enters the autonomous obstacle-detection and pick-and-place mode.</p>
        </li>
        <li>
            <p><b>What do the servos control?</b></p>
            <p>The code uses two servos: one (connected to pin 3) likely controls the opening and closing of the gripper, and the other (connected to pin 4) controls the vertical lifting/lowering angle of the gripper mechanism.</p>
        </li>
        <li>
            <p><b>Can I adjust the distance at which the robot detects obstacles?</b></p>
            <p>Yes, you can modify the threshold distance check within the main loop or any dedicated obstacle detection function (like a hypothetical `followDistanceLogic()` if implemented). Look for code comparing the measured distance (e.g., `distance {"<"} threshold_value`) and change `threshold_value` to your desired detection range (in cm or inches, depending on the sensor reading function).</p>
        </li>
        <li>
            <p><b>What happens if the robot encounters multiple obstacles in quick succession?</b></p>
            <p>As long as the robot is in the autonomous mode triggered by 'A', it will execute the full stop, pick, and place routine each time an obstacle is detected within the specified range after resuming forward movement. It will handle obstacles sequentially as it encounters them.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Cancero Control Using Mobile App Terminal": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to control the Cancero using the "Arduino Bluetooth Connector" mobile app. By executing this code and using the app, you can make the Cancero move forward, backward, turn left, turn right, stop, and control the gripper.</p>

    <h2>Setup</h2>
    <p>Before running the experiment, ensure that you have assembled the Cancero hardware as per the assembly instructions (referencing Section 2.1). Additionally, make sure you have connected the Cancero to the Arduino IDE (Teensy 4.0), as explained in Section 2.3.</p>

    <h2>Hardware Setup</h2>
    <p>Connect the hardware as follows to ensure proper functionality.</p>

    <h3>Motor Control Pins:</h3>
    <p>To connect the driver pins, a proper connector is provided on the PCB board, making it easy to connect the pins. This design is very user-friendly due to the simplicity of the connection. To verify the pins, the pin numbers are provided below.</p>
    <ul>
        <li><b>Connect Motor 1:</b>
            <ul>
                <li>PWM input (ENA): Connect to pin 2 (Teensy)</li> 
                <li>Direction input 1 (IN1): Connect to pin 20 (Teensy)</li>
                <li>Direction input 2 (IN2): Connect to pin 1 (Teensy)</li> 
            </ul>
        </li>
        <li><b>Connect Motor 2:</b>
            <ul>
                <li>PWM input (ENB): Connect to pin 5 (Teensy)</li> 
                <li>Direction input 1 (IN3): Connect to pin 6 (Teensy)</li>
                <li>Direction input 2 (IN4): Connect to pin 9 (Teensy)</li> 
            </ul>
        </li>
    </ul>

     <h3>Servo Motors:</h3>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h3>Bluetooth Module (HC-05/HC-06):</h3>
     <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>
    <p>Before connecting the Bluetooth module to the PCB board, ensure the code has been successfully uploaded. The PCB board includes a dedicated connector for the Bluetooth module, designed to prevent any faulty connections. For detailed instructions on connecting the module, please refer to the hardware connection guidelines provided in Section 2.1.</p>
    <div class="note">
         <p><b>Note:</b> Connect the RX and TX pins of HC-05 to the TX2 and RX2 pins of Teensy 4.0 respectively <b>after</b> uploading the code.</p>
    </div>

    <h2>Mobile App Setup</h2>
    <ol>
        <li>Download and install the "Arduino Bluetooth Connector" app from the Play Store. </li>
        <li>Pair your mobile device with the HC-05 Bluetooth module through your phone's Bluetooth settings (Default password is often <code>1234</code> or <code>0000</code>).</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the "Arduino Bluetooth Connector" app on your mobile device.</li>
        <li>Connect to the paired HC-05 Bluetooth module from within the app.</li>
        <li>Navigate to the Terminal or Console section of the app.</li>
        <li>Use the on-screen keyboard or input field to send the following commands to the Cancero:
            <ul>
                <li><code>F</code>: Move forward</li>
                <li><code>B</code>: Move backward</li>
                <li><code>L</code>: Turn left</li>
                <li><code>R</code>: Turn right</li>
                <li><code>S</code>: Stop motors</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
            </ul>
        </li>
    </ol>

    <h2>Common Issues</h2>
    <div class="issues">
        <p><b>Bluetooth connection issues:</b> If your device is paired but not appearing or connecting in the mobile app, troubleshoot by:
            <ul>
                <li>Checking the Bluetooth pairing settings on your phone.</li>
                <li>Ensuring the HC-05 module is powered on and correctly connected to the Teensy.</li>
                <li>Trying to press the small reset button on the HC-05 module (if available).</li>
                <li>Restarting the app and/or toggling Bluetooth on your phone.</li>
            </ul>
        </p>
         <p><b>Robot not responding:</b>
            <ul>
                 <li>Verify power to the robot (Teensy and motor driver).</li>
                 <li>Double-check all wiring connections, especially motor driver and Bluetooth pins.</li>
                 <li>Ensure the correct code is uploaded to the Teensy.</li>
                 <li>Confirm you are sending the exact uppercase characters (F, B, L, R, S, O, C, U, D).</li>
            </ul>
        </p>
    </div>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use a different Bluetooth app for control?</b></p>
            <p>A: Yes, any Bluetooth terminal app that allows you to send single character data (like 'F', 'B', 'L', 'R', 'S', 'O', 'C', 'U', 'D') should work.</p>
        </li>
        <li>
            <p><b>Q: How can I modify the code for different motor speeds?</b></p>
            <p>A: Adjust the values passed to the <code>analogWrite()</code> functions within the motor control functions (e.g., <code>moveForward()</code>, <code>moveBackward()</code>) in the Teensy code. The value typically ranges from 0 (off) to 255 (full speed).</p>
        </li>
    </ul>

        </>
      ),
    },
            "Button-Controlled Robot for Precision Gripping Applications": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of the Cancero Button-Controlled Robot experiment is to demonstrate basic robotic control using button commands sent via serial communication (Bluetooth). By interfacing with the Teensy 4.0 microcontroller, users can send specific commands from a mobile app to the robot to control its movement (forward, backward, left, right, stop) and its gripper (open, close, up, down). This experiment aims to provide hands-on experience in programming and controlling a simple robot, fostering understanding and proficiency in robotics fundamentals. Through this project, users can gain practical knowledge of motor control, serial communication, and basic robotics concepts.</p>

    <h2>Setup</h2>
    <ol>
        <li>Assemble the Cancero robot hardware according to the instructions in Section 2.1.</li>
        <li>Connect the Cancero robot to the Arduino IDE as explained in Section 2.3 (ensure Teensy 4.0 board support is installed).</li>
    </ol>

    <h2>Hardware Assembly</h2>

    <h3>Motor Connections:</h3>
    <p>Connect the motor control pins from the L298N driver to the Teensy 4.0 board as follows:</p>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Direction Pins: Connect motor1 Dir1 (L298N IN1) to Teensy Pin 20 and motor1 Dir2 (L298N IN2) to Teensy Pin 1.</li>
                <li>ENA: Connect motor1 PWM (L298N ENA) to Teensy Pin 2.</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Direction Pins: Connect motor2 Dir1 (L298N IN3) to Teensy Pin 6 and motor2 Dir2 (L298N IN4) to Teensy Pin 9.</li>
                <li>ENB: Connect motor2 PWM (L298N ENB) to Teensy Pin 5.</li>
            </ul>
        </li>
    </ul>

    <h3>Bluetooth Module (HC-05/HC-06):</h3>
    <p>Ensure the Bluetooth module is properly connected to the Teensy (VCC and GND). Connect its pins as follows:</p>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0 (or appropriate 3.3V/5V source)</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>
    <div class="note">
        <p><b>Important:</b> Connect the RX and TX pins of the HC-05 module <b>after</b> uploading the code to the Teensy 4.0 to avoid potential conflicts during the upload process.</p>
    </div>

    <h3>Servo Motors:</h3>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0 (or separate 5V source if needed)</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0 (or separate 5V source if needed)</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h2>Mobile Application Setup</h2>
    <ol>
        <li>To download the required mobile application, "Arduino Bluetooth Controller," simply visit the Play Store on your Android device and search for the app or conveniently click on the provided link for quick access. </li>
        <li>Pair your mobile device with the HC-05 Bluetooth module through your phone's Bluetooth settings (Default password is often <code>1234</code> or <code>0000</code>).</li>
        <li>Open the "Arduino Bluetooth Controller" app.</li>
        <li>Connect to the paired HC-05 module within the app.</li>
        <li>Navigate to the "Buttons" control mode.</li>
        <li>Configure the buttons in the app settings to send the following commands:
            <ul>
                <li>Button for Forward: <code>F</code></li>
                <li>Button for Backward: <code>B</code></li>
                <li>Button for Left: <code>L</code></li>
                <li>Button for Right: <code>R</code></li>
                <li>Button for Stop: <code>S</code></li>
                <li>Button for Gripper Open: <code>O</code></li>
                <li>Button for Gripper Close: <code>C</code></li>
                <li>Button for Gripper Up: <code>U</code></li>
                <li>Button for Gripper Down: <code>D</code></li>

            </ul>
        </li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Power up the Cancero robot.</li>
        <li>Ensure the Bluetooth module is paired and connected within the "Arduino Bluetooth Controller" app.</li>
        <li>Use the configured buttons in the app to control the robot's movement and gripper actions.</li>
    </ol>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: How do I control the Cancero Button-Controlled Robot?</b></p>
            <p>A: Use the configured buttons in the "Arduino Bluetooth Controller" mobile app. Press the button assigned to <code>F</code> to move forward, <code>B</code> for backward, <code>L</code> for left, <code>R</code> for right, <code>S</code> to stop movement, <code>O</code>/<code>C</code> to open/close the gripper, and <code>U</code>/<code>D</code> to move the gripper up/down.</p>
        </li>
         <li>
            <p><b>Q: Can I use any Bluetooth controller app?</b></p>
            <p>A: Yes, you can use any app that allows configuring buttons to send specific single characters (like <code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>, <code>S</code>, <code>O</code>, <code>C</code>, <code>U</code>, <code>D</code>) via Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: What type of power source does the robot require?</b></p>
            <p>A: The robot typically requires a battery (e.g., 12V LiPo or similar) connected to the L298N motor driver to power the motors. The Teensy and servos require 5V, which might come from the Teensy's USB connection during testing or a voltage regulator connected to the main battery during operation. Ensure the power source provides sufficient voltage and current for all components.</p>
        </li>
        <li>
            <p><b>Q: How can I troubleshoot if the robot is not responding to commands?</b></p>
            <p>A: First, check all wiring connections for motors, servos, Bluetooth module, and power. Verify that the robot is powered on and the battery is charged. Ensure the Bluetooth module is paired correctly with your phone and connected within the app. Check that the correct code is uploaded to the Teensy and that the correct commands are assigned to the buttons in the app. You can also use the Arduino Serial Monitor (via USB) to print debug messages from the Teensy code to see if it's receiving commands.</p>
        </li>
    </ul>
        </>
      ),
    },
            "Assembling Spread Objects with Cancer Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Objective</h2>
    <p>The objective of this experiment is to utilize the Cancero robot to collect spread objects and place them into a specified location. The robot’s 2-DOF robotic arm will be used to grab, move, and place objects accurately. This exercise will demonstrate the robot's capability to perform basic sorting and assembly tasks.</p>

    <h2>Setup</h2>
    <p>Ensure that the Cancero robot has been assembled according to the assembly instructions (referencing Section 2.4). The robot should be connected to the Arduino IDE (Teensy 4.0) as described in Section 2.3.</p>

    <h2>Hardware Setup</h2>

    <h3>Bluetooth Module (HC-05) to Teensy 4.0:</h3>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>

    <h3>Motor Driver (L298N) Connections:</h3>
    <ul>
        <li><b>Motor 1:</b>
            <ul>
                <li>Motor 1 Output (OUT1 and OUT2) to Motor 1 Terminals</li>
                <li>Motor 1 Direction Control: IN1 to Teensy 4.0 Pin 20, IN2 to Teensy 4.0 Pin 1</li>
                <li>Motor 1 PWM Control: ENA to Teensy 4.0 Pin 2</li>
            </ul>
        </li>
        <li><b>Motor 2:</b>
            <ul>
                <li>Motor 2 Output (OUT3 and OUT4) to Motor 2 Terminals</li>
                <li>Motor 2 Direction Control: IN3 to Teensy 4.0 Pin 6, IN4 to Teensy 4.0 Pin 9</li>
                <li>Motor 2 PWM Control: ENB to Teensy 4.0 Pin 5</li>
            </ul>
        </li>
    </ul>

    <h3>Servo Motors:</h3>
    <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h3>Power Supply:</h3>
    <ul>
        <li>12V Power Source: Connect to the L298N motor driver to power the DC motors.</li>
        <li>Ensure that the 5V regulator on the L298N (or a separate regulator/power source) can provide sufficient current for the servos, especially under load.</li>
    </ul>
    <div class="note">
        <p>Upload the provided code to the Teensy 4.0 using the Arduino IDE <b>before</b> connecting the Bluetooth module's RX/TX pins.</p>
    </div>

    <h2>Mobile App Setup (Bluduino)</h2>
    <ol>
        <li><b>Install the App:</b> Download and install the "Bluduino" app from the Google Play Store. </li>
        <li><b>Pair the Device:</b> Open the Bluetooth settings on your mobile device. Search for available devices and pair with the HC-05 module. The default pairing code is usually <code>1234</code> or <code>0000</code>.</li>
        <li><b>Connect to Bluetooth:</b> Open the Bluduino app. Select the HC-05 module from the list of paired devices.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Power on the Cancero robot.</li>
        <li>Connect to the HC-05 module using the Bluduino app.</li>
        <li>Use the app's control interface (e.g., buttons, terminal, joystick - whichever mode you configure or is default) to send the following commands to control the robot:
            <ul>
                <li><code>F</code>: Move forward</li>
                <li><code>B</code>: Move backward</li>
                <li><code>L</code>: Turn left</li>
                <li><code>R</code>: Turn right</li>
                <li><code>S</code>: Stop motors</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
            </ul>
        </li>
        <li>Navigate the robot to the location of the objects.</li>
        <li>Use the gripper commands (<code>U</code>, <code>D</code>, <code>O</code>, <code>C</code>) to pick up an object.</li>
        <li>Navigate the robot to the desired placement location.</li>
        <li>Use the gripper commands to release the object.</li>
        <li>Repeat for other objects.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Cancero robot should navigate to the location of the spread objects, use its robotic arm to pick up each object, and then move the object to a specified location. The arm should move smoothly and accurately, grabbing and releasing objects as commanded. The Arduino Serial Monitor (if connected via USB) can provide feedback on the robot’s movements and arm operations for debugging.</p>

    <h2>Common Issues</h2>
    <div class="issues">
        <p><b>Bluetooth Connection Problems:</b> Ensure the HC-05 module is correctly paired and connected within the Bluduino app. Restart both the module and the mobile device if necessary and re-pair them.</p>
        <p><b>Mechanical Structural Issues:</b> Due to the weight or imbalance of the robot arm, the servos may struggle to lift heavy objects or move smoothly. This could be caused by the mechanical structure not being sturdy enough. Reinforce joints, distribute weight evenly, adjust the arm’s design, or consider using servos with higher torque ratings if needed.</p>
        <p><b>Power Issues:</b> Servos can draw significant current, especially when lifting objects. Ensure your 5V power source (whether from Teensy, L298N regulator, or a separate BEC/regulator) can handle the combined load of both servos and the Teensy/Bluetooth module.</p>
    </div>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal or controller apps can also be used as long as they allow sending the specified single character commands (e.g., <code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>, <code>S</code>, <code>U</code>, <code>D</code>, <code>O</code>, <code>C</code>).</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds or servo angles/positions?</b></p>
            <p>A: Modify the PWM values (typically 0-255) passed to <code>analogWrite()</code> for motor speed in the Teensy code (within functions like <code>moveForward</code>, <code>moveBackward</code>, etc.). For servo angles, modify the values (typically 0-180) passed to the <code>servo.write()</code> functions for the gripper and lift servos in the Teensy code.</p>
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
    <p>The objective of this experiment is to utilize the Cancero robot to push objects backward using its Gripper (2-DOF robotic arm). The robot consists of a two-wheeled base for mobility and a robotic arm controlled by servo motors. By using the provided code, you will be able to control the robot’s movement and the gripper positioning to push objects effectively.</p>

    <h2>Setup</h2>
    <p>Ensure that the Cancero robot has been assembled according to the assembly instructions (referencing Section 2.4). The robot should be connected to the Arduino IDE (Teensy 4.0) as described in Section 2.3.</p>

    <h2>Hardware Setup</h2>

    <h3>Motor Pins (L298N to Teensy 4.0):</h3>
    <ul>
        <li><b>Left Motor:</b>
            <ul>
                <li>Motor 1A(IN1): Connect to pin 20</li>
                <li>Motor 1B(IN2): Connect to pin 1</li>
                <li>Motor 1 PWM(ENA): Connect to pin 2</li>
            </ul>
        </li>
        <li><b>Right Motor:</b>
            <ul>
                <li>Motor 2A(IN3): Connect to pin 6</li>
                <li>Motor 2B(IN4): Connect to pin 9</li>
                <li>Motor 2 PWM(ENB): Connect to pin 5 </li>
            </ul>
        </li>
    </ul>

    <h3>Servo Pins (to Teensy 4.0):</h3>
     <ul>
        <li><b>Gripper Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 3</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
        <li><b>Vertical Lift Servo:</b>
            <ul>
                <li>Signal → Teensy4.0 Pin 4</li>
                <li>VCC → 5V from Teensy4.0</li>
                <li>GND → Teensy4.0 GND</li>
            </ul>
        </li>
    </ul>

    <h3>Bluetooth Module Pins (HC-05 to Teensy 4.0):</h3>
    <ul>
        <li>TX → Teensy4.0 RX2 (Pin 7 or Serial2)</li>
        <li>RX → Teensy4.0 TX2 (Pin 8 or Serial2)</li>
        <li>VCC → 5V from Teensy4.0</li>
        <li>GND → Teensy4.0 GND</li>
    </ul>
    <p>Ensure the motor connections are secure and follow the pin descriptions provided for accurate functionality.</p>
     <div class="note">
        <p><b>Note:</b> Connect the RX and TX pins of the HC-05 module to the Teensy 4.0's TX2 and RX2 pins respectively <b>after</b> uploading the code.</p>
    </div>

    <h2>Mobile App Setup (Bluduino)</h2>
    <ol>
        <li><b>Install the App:</b> Download and install the "Bluduino" app from the Google Play Store. </li>
        <li><b>Pair the Device:</b> Open the Bluetooth settings on your mobile device. Search for available devices and pair with the HC-05 module. The default pairing code is usually <code>1234</code> or <code>0000</code>.</li>
        <li><b>Connect to Bluetooth:</b> Open the Bluduino app. Select the HC-05 module from the list of paired devices.</li>
    </ol>

    <h2>Usage Instructions</h2>
    <ol>
        <li>Power on the Cancero robot.</li>
        <li>Connect to the HC-05 module using the Bluduino app.</li>
        <li>Use the app's control interface (e.g., terminal, buttons, joystick) to send the following commands to control the robot:
            <ul>
                <li><code>F</code>: Move forward</li>
                <li><code>B</code>: Move backward</li>
                <li><code>L</code>: Turn left</li>
                <li><code>R</code>: Turn right</li>
                <li><code>S</code>: Stop motors</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
            </ul>
        </li>
        <li>Navigate the robot towards the object you want to push.</li>
        <li>Use the gripper commands (<code>U</code>, <code>D</code>, <code>O</code>, <code>C</code>) to position the gripper appropriately behind the object.</li>
        <li>Use the movement commands (primarily <code>B</code> - backward) to push the object.</li>
    </ol>

    <h2>Expected Results</h2>
    <p>The Cancero robot should move forward/backward to position itself correctly and then use its robotic arm (gripper) to push objects backward as commanded. The arm’s servos should execute the push command, extending and retracting as needed. The Arduino Serial Monitor (if connected via USB) can provide feedback on the robot’s movement and arm positioning during the operation.</p>

    <h2>Common Issues</h2>
    <div class="issues">
        <p><b>Bluetooth Connection Problems:</b> Ensure the HC-05 module is correctly paired and connected within the Bluduino app. Restart both the module and the mobile device if necessary and re-pair them.</p>
        <p><b>Mechanical Structural Issues:</b> Due to the weight or imbalance of the robot arm, the servos may struggle to push heavy objects or move smoothly. This could be caused by the mechanical structure not being sturdy enough. Reinforce joints, distribute weight evenly, adjust the arm’s design, or consider using servos with higher torque ratings if needed.</p>
         <p><b>Power Issues:</b> Servos can draw significant current. Ensure your 5V power source can handle the load, especially when pushing against resistance. Insufficient power can cause servo jitter or resets.</p>
         <p><b>Pushing Force:</b> The robot's ability to push depends on motor torque, wheel traction, and servo strength. Lighter objects on smooth surfaces will be easier to push.</p>
    </div>

    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
        <li>
            <p><b>Q: Can I use other Bluetooth apps for control?</b></p>
            <p>A: Yes, other Bluetooth terminal or controller apps can also be used if they allow sending the specified single character commands (e.g., <code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>, <code>S</code>, <code>U</code>, <code>D</code>, <code>O</code>, <code>C</code>).</p>
        </li>
        <li>
            <p><b>Q: How can I adjust motor speeds?</b></p>
            <p>A: Modify the PWM values (typically 0-255) passed to <code>analogWrite()</code> for motor speed in the Teensy code, within the movement functions (<code>moveForward</code>, <code>moveBackward</code>, etc.).</p>
        </li>
    </ul>
        </>
      ),
    },
            "Keyboard Controlled Robot Using ROS": {
      type: "experiment",
      content: (
        <>
    <h2>Cancero Keyboard Teleoperation</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package for Cancero)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible microcontroller like Teensy 4.0) with Bluetooth module</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero for teleoperation.</li>
        <li>Learn about the different basic components that make up a Cancero robot.</li>
        <li>Control the Cancero with Keyboard.</li>
    </ul>

    <h3>Installation (Do it only for the first time):</h3>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
            (Replace <code>username</code> and <code>ip</code> with your Raspberry Pi's credentials)
        </li>
        <li>Install necessary ROS packages:
            <code>sudo apt-get update</code>
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
            <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code>
        </li>
        <li>Navigate to your ROS workspace (assuming it's named <code>Chelonia_ws</code> as per input, though the robot is Cancero):
            <code>cd ~/Chelonia_ws</code>
            (If your workspace has a different name, use that instead)
        </li>
        <li>Clean and rebuild the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the workspace setup file:
            <code>source devel/setup.bash</code>
            (Consider adding this to your <code>~/.bashrc</code> for persistence)
        </li>
    </ol>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. Ensure it's correctly set up for compiling and uploading firmware to your Teensy board. (Link to PlatformIO setup guide can be added here if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the appropriate Linorobot (or specific Cancero) firmware to the Teensy board using PlatformIO. Ensure your Raspberry Pi is configured (OS, Wi-Fi, SSH) and the ROS workspace (<code>Chelonia_ws</code> or similar) is correctly set up as per the installation steps above or a separate guide. (Link to Teensy/Workspace setup guide can be added here).</p>
    <div class="note">
        <p>Ensure you upload the correct firmware compatible with ROS communication (rosserial) for this experiment.</p>
    </div>

    <h4>STEP 3: Launch the ROS workspace in Raspberry Pi</h4>
    <p>Perform these steps on your laptop to connect to the Raspberry Pi and launch the robot's base nodes:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Navigate to the ROS workspace:
            <code>cd ~/Chelonia_ws</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch the main robot bringup file (adjust filename if needed):
            <code>roslaunch linorobot bringup.launch</code>
            (This typically starts rosserial communication with the Teensy and publishes sensor data/subscribes to commands).
        </li>
    </ol>

    <h4>STEP 4: Setup for Keyboard Controlling</h4>
    <p>Run the Teleop Twist Keyboard package on your laptop (not via SSH, unless you SSH without <code>-X</code> and control from there, or configure ROS networking).</p>
    <p><b>Option A: Run on Laptop (Requires ROS Networking Setup)</b></p>
    <ol>
        <li>Ensure ROS Networking is configured (ROS_MASTER_URI on laptop points to RPi, ROS_IP set correctly on both).</li>
        <li>Open a new terminal <b>on your laptop</b>.</li>
        <li>Navigate to your local ROS workspace (if you have one, otherwise this package is system-installed):
            <code>cd ~/Chelonia_ws</code> (or relevant workspace)
            <code>source devel/setup.bash</code> (if using a local workspace build)
        </li>
        <li>Run the teleop node:
            <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
        </li>
    </ol>
     <p><b>Option B: Run via SSH (Simpler if ROS Networking isn't set up)</b></p>
     <ol>
         <li>Open a <b>new</b> SSH connection to the Raspberry Pi (separate from the one running <code>bringup.launch</code>):
             <code>ssh username@ip</code>
         </li>
         <li>Navigate to the ROS workspace:
             <code>cd ~/Chelonia_ws</code>
         </li>
         <li>Source the workspace:
             <code>source devel/setup.bash</code>
         </li>
         <li>Run the teleop node:
             <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
         </li>
     </ol>
    <p>Control the robot using the keyboard commands displayed in the terminal where <code>teleop_twist_keyboard.py</code> is running (usually arrow keys or WASD).</p> 

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is ROS Noetic, and why is it used in this experiment?</b></p>
            <p>ROS Noetic is a version of the Robot Operating System (ROS) specifically for Ubuntu 20.04. It provides libraries and tools for building robot applications and is used here for compatibility with the required software packages.</p>
        </li>
        <li>
            <p><b>Why is a Raspberry Pi with Ubuntu Server needed for the Cancero?</b></p>
            <p>The Raspberry Pi acts as the robot's onboard computer, running ROS nodes to process sensor data, handle communication with the microcontroller (Teensy), and execute higher-level tasks, offloading computation from your main PC.</p>
        </li>
        <li>
            <p><b>What is the purpose of the Teensy 3.0 with Bluetooth module?</b></p>
            <p>The Teensy microcontroller handles low-level hardware control (motors, sensors) and communicates with the Raspberry Pi via serial (USB in this keyboard setup, Bluetooth might be for other control methods). The Bluetooth module enables wireless control, typically from a mobile app, though not used directly in this keyboard teleop guide.</p>
        </li>
        <li>
            <p><b>How does teleoperation play a role in this experiment?</b></p>
            <p>Teleoperation means remotely controlling the robot. In this case, you use keyboard commands from your laptop (sent through ROS topics) to drive the Cancero robot.</p>
        </li>
        <li>
            <p><b>What steps are involved in setting up the ROS workspace on the Raspberry Pi?</b></p>
            <p>SSH into the Pi, navigate to the workspace directory (e.g., <code>~/Chelonia_ws</code>), clean previous builds (<code>rm -r build devel</code>), compile the code (<code>catkin_make</code>), and source the environment setup file (<code>source devel/setup.bash</code>). Finally, launch the robot's core nodes using <code>roslaunch</code>.</p>
        </li>
        <li>
            <p><b>How can errors during setup be addressed?</b></p>
            <p>Carefully review error messages. Ensure all required packages (like <code>rosserial-python</code>, <code>teleop-twist-keyboard</code>) are installed using <code>sudo apt-get install</code>. Check hardware connections (USB between Pi and Teensy). Verify workspace paths and sourcing. Consult ROS documentation or online forums for specific errors.</p>
        </li>
        <li>
            <p><b>Can keyboard commands for controlling the Cancero be customized?</b></p>
            <p>Yes, the <code>teleop_twist_keyboard</code> package can sometimes be configured, or you could modify its Python script (<code>teleop_twist_keyboard.py</code>) or create your own ROS node to map different keys to velocity commands published on the <code>/cmd_vel</code> topic.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Wireless Controlled Robot Using Python Program": {
      type: "experiment",
      content: (
        <>
   <h2>Cancero Mobile App Button Control</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package for Cancero)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (HC-05)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero package for teleoperation.</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Cancero.</li>
        <li>Control the Cancero with a button control interface in the mobile app.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. Ensure it's correctly set up for compiling and uploading firmware to your Teensy board. (Add link to PlatformIO setup guide if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the appropriate Linorobot (or specific Cancero) firmware to the Teensy board using PlatformIO. Ensure your Raspberry Pi is configured (OS, Wi-Fi, SSH) and the ROS workspace (<code>Chelonia_ws</code> or similar) is correctly set up. (Add link to Teensy/Workspace setup guide if available).</p>
    <div class="note">
        <p>Ensure you upload the correct firmware compatible with ROS communication (rosserial) for this experiment.</p>
    </div>

    <h4>STEP 3: Launch the ROS workspace in Raspberry Pi</h4>
    <p>Perform these steps on your laptop to connect to the Raspberry Pi and launch the robot's base nodes:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
            (Replace <code>username</code> and <code>ip</code> with your Raspberry Pi's credentials)
        </li>
        <li>Install rosserial-python if not already installed:
            <code>sudo apt-get update</code>
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
        </li>
        <li>Navigate to the ROS workspace (adjust name if different):
            <code>cd ~/Chelonia_ws</code>
        </li>
        <li>Clean and rebuild the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
            (Consider adding this to <code>~/.bashrc</code> for persistence)
        </li>
        <li>Launch the main robot bringup file (This step might be missing in the original text but is usually required before running the bluetooth script):
             <code>roslaunch linorobot bringup.launch</code>
             (Adjust launch file name if needed. This starts communication with Teensy).
        </li>
    </ol>

    <h4>STEP 4: Setup the Mobile App and Run Bluetooth Script</h4>
    <ol>
        <li>Install the Mobile App:
            <p>Install the "Arduino Bluetooth Control" app on your Android mobile device from the Play Store: <a href="https://play.google.com/store/apps/details?id=com.broxcode.arduinobluetoothfree&pcampaignid=web_share" target="_blank">Arduino Bluetooth Control App</a></p>
        </li>
        <li>Connect via Bluetooth:
            <ul>
                <li>Open Bluetooth settings on your phone.</li>
                <li>Pair New Device -{">"} Select HC05.</li>
                <li>Enter password: <code>1234</code> (or <code>0000</code>).</li>
                <li>Open the "Arduino Bluetooth Control" app.</li>
                <li>Select Device -{">"} Choose HC05. </li>
            </ul>
        </li>
        <li>Configure App Buttons (Key Configuration):
             <ul>
                 <li>Open app settings -{">"} Key Configuration (or similar button setup).</li>
                 <li>Configure the arrow/direction buttons:
                     <ul>
                         <li>Select UP button -{">"} Enter character: <code>F</code></li>
                         <li>Select DOWN button -{">"} Enter character: <code>B</code></li>
                         <li>Select RIGHT button -{">"} Enter character: <code>R</code></li>
                         <li>Select LEFT button -{">"} Enter character: <code>L</code></li>
                         {"<"}!-- Add other buttons like STOP ('S') if needed/supported by bluetooth.py --{">"}
                     </ul>
                 </li>
             </ul>
        </li>
        <li>Run the Bluetooth Control Script on Raspberry Pi:
            <ul>
                <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi (separate from the one running <code>bringup.launch</code>):
                    <code>ssh username@ip</code>
                </li>
                <li>Navigate to the ROS workspace:
                    <code>cd ~/Chelonia_ws</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Navigate to the scripts directory:
                    <code>cd src/linorobot/scripts</code>
                     (Adjust path if your structure differs)
                </li>
                <li>Run the Python script that listens for Bluetooth commands and publishes them to ROS:
                    <code>python3 bluetooth.py</code>
                     (Ensure this script exists and correctly translates F, B, L, R to <code>/cmd_vel</code> messages).
                </li>
            </ul>
        </li>
        <li>Control the Cancero Wirelessly:
            <ul>
                <li>Go back to the app's home page.</li>
                <li>Select the Arrow Key / Button Control interface. </li>
                <li>Press the configured buttons (Up, Down, Left, Right) to control the Cancero.</li>
            </ul>
        </li>
    </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What role does ROS play in this experiment?</b></p>
            <p>ROS enables communication between the Cancero's hardware (via Raspberry Pi and Teensy) and the software control logic. It handles the translation of Bluetooth commands into motor velocity messages (<code>/cmd_vel</code>) and manages the robot's nodes.</p>
        </li>
        <li>
            <p><b>How does the Raspberry Pi contribute to the Cancero's functionality?</b></p>
            <p>The Raspberry Pi runs the main ROS nodes, including the <code>bluetooth.py</code> script which receives commands from the mobile app, and potentially other nodes for sensor processing or navigation. It communicates with the Teensy microcontroller.</p>
        </li>
        <li>
            <p><b>Why is the Teensy 3.0 with a Bluetooth module important in this setup?</b></p>
            <p>The Teensy handles the real-time control of motors based on commands received from the Raspberry Pi (via rosserial). The Bluetooth module (connected to the Raspberry Pi in this setup, based on running `bluetooth.py` there) provides the wireless link to the mobile app.</p>
        </li>
        <li>
            <p><b>How does the mobile app enhance user experience?</b></p>
            <p>It provides a simple, intuitive button interface (Arrow Keys) on a smartphone for remotely controlling the robot's basic movements.</p>
        </li>
        <li>
            <p><b>What is the significance of ROS packages like Cancero3 (or Linorobot)?</b></p>
            <p>These pre-built ROS packages contain the necessary launch files, scripts (like <code>bluetooth.py</code>), and configurations to quickly set up and control the specific robot hardware (Cancero), streamlining the development process.</p>
        </li>
    </ol>
        </>
      ),
    },
            "ROS Based Joystick Controller": {
      type: "experiment",
      content: (
        <>
   <h2>Cancero Joystick Control (ROS)</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package for Cancero, using <code>Chelonia_ws</code> based on commands)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (Bluetooth module not strictly needed for joystick control unless used for other purposes simultaneously)</li>
        <li>USB Joystick</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero package for teleoperation.</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Control the Cancero with a joystick.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. Ensure it's correctly set up for compiling and uploading firmware to your Teensy board. (Link to PlatformIO setup guide can be added here).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the appropriate firmware (compatible with ROS rosserial) to the Teensy board using PlatformIO. Ensure your Raspberry Pi is configured (OS, Wi-Fi, SSH) and the ROS workspace (<code>Chelonia_ws</code>) is correctly set up. (Link to Teensy/Workspace setup guide can be added here).</p>

    <h4>STEP 3: Connect Joystick</h4>
    <p>Connect the USB joystick to one of the USB ports on the Raspberry Pi.</p> 

    <h4>STEP 4: Launch the ROS workspace in Raspberry Pi</h4>
    <p>Perform these steps on your laptop to connect to the Raspberry Pi and launch the necessary nodes:</p>
    <ol>
        <li>
            <p><b>Launch <code>bringup.launch</code>:</b></p>
            <ul>
                <li>SSH into the Raspberry Pi:
                    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
                </li>
                <li>Install rosserial-python if needed:
                    <code>sudo apt-get update</code>
                    <code>sudo apt-get install ros-noetic-rosserial-python</code>
                </li>
                <li>Navigate to the ROS workspace:
                    <code>cd ~/Chelonia_ws</code>
                </li>
                <li>Clean and rebuild the workspace (if necessary):
                    <code>rm -r build devel</code>
                    <code>catkin_make</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Launch the main robot bringup file:
                    <code>roslaunch linorobot bringup.launch</code>
                    (This starts communication with the Teensy). Keep this terminal running.
                </li>
            </ul>
        </li>
        <li>
            <p><b>Launch the Joystick Listener Node:</b></p>
             <p>This node reads data from the connected joystick and publishes it to ROS topics.</p>
            <ul>
                <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
                </li>
                 <li>Install the joystick teleop package if needed:
                    <code>sudo apt-get install ros-noetic-teleop-twist-joy</code>
                 </li>
                <li>Navigate to the ROS workspace:
                    <code>cd ~/Chelonia_ws</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Launch the teleop twist joy launch file:
                    <code>roslaunch teleop_twist_joy teleop.launch</code>
                     (This launches the <code>joy_node</code> to read joystick data and the <code>teleop_twist_joy</code> node to convert joystick inputs to <code>/cmd_vel</code> messages). Keep this terminal running.
                </li>
            </ul>
        </li>
        <li>
             <p><b>Optional: Verify Joystick Operation (Alternative/Debugging Step)</b></p>
             <p>The previous step (using <code>teleop.launch</code>) usually handles everything. The <code>joystick.py</code> script mentioned in the original prompt might be a custom script or potentially redundant if using the standard <code>teleop_twist_joy</code> package. If <code>teleop.launch</code> works, you likely don't need this step. If it doesn't, investigate the purpose of <code>joystick.py</code> in your specific workspace setup.</p>
             {"<"}!-- Removed the potentially redundant python script execution --{">"}
        </li>
    </ol>
     <p>Now, you should be able to control the Cancero robot using the connected joystick.</p> 

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the primary objective of this experiment?</b></p>
            <p>The objective is to set up a Cancero package for teleoperation and control the Cancero robot using a connected USB joystick through ROS.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You will need a PC/laptop (for setup/SSH), ROS Noetic, the robot's ROS package, Ubuntu 20.04, a Raspberry Pi with Ubuntu Server, Cancero hardware, a Teensy microcontroller, and a USB joystick.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS-based joystick controller?</b></p>
            <p>Follow the implementation steps: ensure prerequisites (PlatformIO, firmware, workspace) are met, connect the joystick to the Raspberry Pi, launch the robot's <code>bringup.launch</code> file, and then launch the <code>teleop_twist_joy</code> package's <code>teleop.launch</code> file.</p>
        </li>
        <li>
            <p><b>How do I launch the joystick listener node and the command controller node?</b></p>
            <p>Launching <code>roslaunch teleop_twist_joy teleop.launch</code> typically starts both necessary nodes: <code>joy_node</code> (listens to the physical joystick device like <code>/dev/input/js0</code>) and <code>teleop_node</code> (subscribes to the joystick topic, e.g., <code>/joy</code>, and publishes velocity commands to <code>/cmd_vel</code>).</p>
        </li>
        <li>
            <p><b>Where can I find additional resources for reference?</b></p>
            <p>Refer to the ROS documentation for <code>teleop_twist_joy</code>, your specific Cancero/Linorobot package documentation, and any provided links or setup guides for PlatformIO and Teensy firmware flashing.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Surveillance Camera Using ROS": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, using <code>Chelonia_ws</code> based on commands)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module</li>
        <li>Raspberry Pi Camera Module</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero package for teleoperation.</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Cancero (Note: Bluetooth is listed but not used in this specific guide's implementation).</li>
        <li>Implement Camera Surveillance robot functionality.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. Ensure it's correctly set up for compiling and uploading firmware. (Add link to PlatformIO setup guide if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the appropriate firmware to the Teensy, configuring the Raspberry Pi, and setting up the ROS workspace (<code>Chelonia_ws</code>). (Add link to Teensy/Workspace setup guide if available).</p>

    <h4>STEP 3: Connect Camera with Raspberry Pi</h4>
    <p>Physically connect the Raspberry Pi Camera Module to the Raspberry Pi's CSI port. Ensure the ribbon cable is inserted correctly. (Add link to a camera connection video/guide if available).</p> 

    <h4>STEP 4: Launch the ROS workspace and Camera Nodes in Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH to install dependencies and launch the camera stream:</p>
    <ol>
        <li>
            <p><b>Install Dependencies:</b></p>
            <ul>
                <li>SSH into the Raspberry Pi:
                    <code>ssh username@ip</code>
                </li>
                <li>Install required packages:
                    <code>sudo apt-get update</code>
                    <code>sudo pip install picamera</code>
                    <code>sudo apt-get install libraspberrypi-dev</code>
                    <code>sudo apt-get install ros-noetic-compressed-image-transport</code>
                    <code>sudo apt-get install libopencv-dev libwiringpi-dev</code>
                    <code>sudo apt-get install ros-noetic-image-common</code>
                    <code>sudo apt-get install ros-noetic-image-view</code>
                    <code>sudo apt-get install ros-noetic-rqt-image-view</code>
                </li>
            </ul>
        </li>
        <li>
            <p><b>Launch Camera Node:</b></p>
            <ul>
                 <li>Navigate to your ROS workspace:
                    <code>cd ~/Chelonia_ws</code>
                 </li>
                 <li>Source the workspace:
                     <code>source devel/setup.bash</code>
                 </li>
                 <li>Launch the raspicam node (adjust launch file if using a different camera or configuration):
                     <code>roslaunch raspicam_node camerav2_410x308_30fps.launch</code>
                     (This will start publishing camera images to ROS topics). Keep this terminal running.
                 </li>
            </ul>
        </li>
        <li>
            <p><b>View Camera Stream Remotely:</b></p>
            <ul>
                <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh username@ip</code>
                    (Using <code>-X</code> for GUI forwarding might work but can be slow; running <code>rqt_image_view</code> on the laptop connected to the RPi's ROS master is usually better if ROS networking is set up).
                </li>
                <li>Navigate to your ROS workspace:
                    <code>cd ~/Chelonia_ws</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Run rqt_image_view to see the camera feed:
                    <code>rosrun rqt_image_view rqt_image_view</code>
                    (Select the appropriate image topic, e.g., <code>/raspicam_node/image_raw</code> or similar, from the dropdown in the rqt_image_view window). 
                </li>
            </ul>
        </li>
    </ol>
    <p>Now you can view the live visuals from the camera on your screen remotely.</p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>How do I set up Cancero for teleoperation?</b></p>
            <p>Install ROS Noetic and the necessary Cancero/Linorobot packages. Configure the hardware and software as per the documentation. Use standard ROS teleoperation nodes like <code>teleop_twist_keyboard</code> (as shown in other guides) to control the robot remotely.</p>
        </li>
        <li>
            <p><b>What are the basic components of a robot and how do they function?</b></p>
            <p>Key components include: a <b>Power Source</b> (battery), <b>Actuators</b> (motors for movement), <b>Sensors</b> (camera, IMU, etc. to perceive the environment), a <b>Controller</b> (Raspberry Pi + Teensy running software), and a <b>Communication Interface</b> (Wi-Fi for SSH/ROS, Bluetooth for mobile apps).</p>
        </li>
        <li>
            <p><b>How can I control Cancero with the mobile app's button interface?</b></p>
            <p>Establish a Bluetooth connection between the mobile app (like Arduino Bluetooth Control) and the Raspberry Pi (running a script like <code>bluetooth.py</code>). Configure the app buttons to send specific characters (e.g., 'F', 'B', 'L', 'R'), which the Python script translates into ROS commands.</p>
        </li>
        <li>
            <p><b>What's the process for installing Platform io on Ubuntu?</b></p>
            <p>Ensure Python3 and pip are installed (<code>sudo apt install python3-pip</code>). Install PlatformIO using pip (<code>pip3 install platformio</code>). Add its installation directory (usually <code>~/.local/bin</code>) to your system PATH in <code>~/.bashrc</code> (<code>export PATH="$PATH:~/.local/bin"</code>) and source the file (<code>source ~/.bashrc</code>). Verify with <code>platformio --version</code>.</p>
        </li>
        <li>
            <p><b>How do I remotely view live camera visuals?</b></p>
            <p>SSH into the Raspberry Pi and run the <code>raspicam_node</code> launch file. Then, in another SSH session (or preferably on your laptop if ROS networking is set up), run <code>rosrun rqt_image_view rqt_image_view</code> and select the correct image topic published by <code>raspicam_node</code>. Ensure a stable network connection.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Teleoperation Using Camera Feedback in ROS": {
      type: "experiment",
      content: (
        <>
   <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, using <code>Chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module</li>
        <li>Raspberry Pi Camera Module</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero package for teleoperation.</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Cancero (Note: Bluetooth is listed but not directly used for control in this guide).</li>
        <li>Implement Teleoperated Camera Surveillance robot functionality (View camera feed while controlling via keyboard).</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. Ensure it's correctly set up. (Provide Instruction link: platform io Installation if available)</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading firmware, configuring the Raspberry Pi, and setting up the ROS workspace (<code>Chelonia_ws</code>). (Provide Instruction link: Teensy setup and Workspace setup.docx if available).</p>
    <div class="note">
        <p>Ensure the firmware uploaded supports ROS rosserial communication.</p>
    </div>

    <h4>STEP 3: Launch the ROS workspace and Camera Nodes in Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>
            <p><b>Install Dependencies & Launch Camera Node:</b></p>
            <ul>
                <li>Open a new terminal and SSH into the Raspberry Pi (Use <code>-X</code> if you plan to run GUI apps directly from the Pi over SSH, though this can be slow):
                    <code>ssh username@ip -X</code>
                </li>
                <li>Install required packages:
                    <code>sudo apt-get update</code>
                    <code>sudo pip install picamera</code>
                    <code>sudo apt-get install libraspberrypi-dev</code>
                    <code>sudo apt-get install ros-noetic-compressed-image-transport</code>
                    <code>sudo apt-get install libopencv-dev libwiringpi-dev</code>
                    <code>sudo apt-get install ros-noetic-image-common</code>
                    <code>sudo apt-get install ros-noetic-image-view</code>
                    <code>sudo apt-get install ros-noetic-rqt-image-view</code>
                 </li>
                 <li>Navigate to your ROS workspace:
                    <code>cd ~/Chelonia_ws</code>
                 </li>
                 <li>Source the workspace:
                     <code>source devel/setup.bash</code>
                 </li>
                 <li>Launch the raspicam node:
                     <code>roslaunch raspicam_node camerav2_410x308_30fps.launch</code>
                     (This starts publishing camera images. Keep this terminal running). 
                 </li>
            </ul>
        </li>
        <li>
            <p><b>View Camera Stream Remotely:</b></p>
            <ul>
                <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi (If ROS networking is set up between laptop and Pi, you can run rqt_image_view on the laptop instead):
                    <code>ssh username@ip</code>
                </li>
                <li>Navigate to your ROS workspace:
                    <code>cd ~/Chelonia_ws</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Run rqt_image_view:
                    <code>rosrun rqt_image_view rqt_image_view</code>
                    (In the rqt_image_view window, select the camera topic, e.g., <code>/raspicam_node/image_raw</code>). Keep this running to view the feed. 
                </li>
            </ul>
        </li>
    </ol>

    <h4>STEP 4: Now move the robot with teleop command</h4>
     <ol>
        <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Install the teleop keyboard package if needed:
             <code>sudo apt-get update</code>
             <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code>
        </li>
        <li>Run the teleoperation node:
            <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
        </li>
     </ol>
    <p>Control the robot using the keyboard commands shown in the terminal (typically W, A, S, D, X, etc.). You should be able to see the robot's movement via the camera feed in the <code>rqt_image_view</code> window. </p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What are the main components needed for setting up teleoperation using camera feedback?</b></p>
            <p>The main components include a PC/laptop (ROS Noetic, Ubuntu 20.04), Raspberry Pi (Ubuntu Server), Cancero hardware (with camera), and a Teensy microcontroller.</p>
        </li>
        <li>
            <p><b>What are the objectives of this experiment?</b></p>
            <p>To set up the Cancero for teleoperation, understand its components, establish necessary connections (including camera), and control the robot via keyboard while viewing the camera feed.</p>
        </li>
        <li>
            <p><b>How do I launch the ROS workspace on the Raspberry Pi and view live camera visuals remotely?</b></p>
            <p>SSH into the RPi, install camera-related dependencies, navigate to the workspace, source it, and run <code>roslaunch raspicam_node camerav2_410x308_30fps.launch</code>. In a separate SSH session, navigate to the workspace, source it, and run <code>rosrun rqt_image_view rqt_image_view</code>, selecting the correct topic.</p>
        </li>
        <li>
            <p><b>How do I move the robot using teleoperation commands?</b></p>
            <p>In a separate SSH session after launching the camera and base nodes (like <code>bringup.launch</code> if needed), run <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code> and use the indicated keys (W, A, S, D, etc.) to send movement commands.</p>
        </li>
        <li>
            <p><b>What if I encounter issues with establishing the Bluetooth connection or controlling the robot remotely?</b></p>
            <p>(Note: Bluetooth isn't used for control in this specific guide). For keyboard control issues, ensure <code>teleop_twist_keyboard</code> is installed, the node is running, the correct terminal has focus, and the base robot nodes (like <code>bringup.launch</code>) are running and communicating correctly with the hardware. Check ROS topics (<code>rostopic list</code>, <code>rostopic echo /cmd_vel</code>) for debugging.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Human Following Robot Using ROS": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, using <code>Chelonia_ws</code>/<code>Cancero_ws</code> based on commands)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware (Requires appropriate sensors like ultrasonic or camera for human detection)</li>

    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero package for teleoperation (as a prerequisite understanding).</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Implement a human-following robot function.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. Ensure it's correctly set up for compiling and uploading firmware. (Add link to PlatformIO setup guide if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the appropriate firmware (compatible with ROS rosserial and the sensors used for following), configuring the Raspberry Pi, and setting up the ROS workspace (<code>Chelonia_ws</code> or <code>Cancero_ws</code>). (Add link to Teensy/Workspace setup guide if available).</p>

    <h4>STEP 3: Launch the ROS workspace and Human Following Node in Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>
            <p><b>Launch <code>bringup.launch</code>:</b></p>
            <ul>
                <li>SSH into the Raspberry Pi:
                    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
                </li>
                <li>Install rosserial-python if needed:
                    <code>sudo apt-get update</code>
                    <code>sudo apt-get install ros-noetic-rosserial-python</code>
                </li>
                <li>Navigate to the correct ROS workspace (adjust `chelonia_ws` if needed):
                    <code>cd ~/chelonia_ws</code>
                </li>
                <li>Clean and rebuild the workspace (if necessary):
                    <code>rm -r build devel</code>
                    <code>catkin_make</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Launch the main robot bringup file (ensure this launch file starts the necessary sensor drivers):
                    <code>roslaunch linorobot bringup.launch</code>
                    (Keep this terminal running).
                </li>
            </ul>
        </li>
        <li>
            <p><b>Give Execution Permission to the Python Script:</b></p>
            <ul>
                 <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
                 </li>
                 <li>Navigate to the scripts directory within your workspace (adjust `Cancero_ws` if needed):
                     <code>cd ~/Cancero_ws/src/linorobot/scripts</code>
                 </li>
                 <li>Make the script executable:
                     <code>sudo chmod +x human_follow.py</code>
                 </li>
            </ul>
        </li>
        <li>
            <p><b>Launch the Human Follower Node:</b></p>
            <ul>
                 <li>In the same terminal (or a new one after SSHing), navigate to the workspace root (adjust `Cancero_ws` if needed):
                     <code>cd ~/Cancero_ws/</code>
                 </li>
                 <li>Source the workspace:
                     <code>source devel/setup.bash</code>
                 </li>
                 <li>Run the human following script:
                     <code>rosrun linorobot human_follow.py</code>
                      (Keep this terminal running). 
                 </li>
            </ul>
        </li>
    </ol>
    <p>The robot should now attempt to follow a human based on its sensor input:</p>
    <ul>
        <li>If obstacle distance is &lt; 10 (units depend on sensor/code, likely cm), it stops.</li>
        <li>If obstacle distance is &gt; 10, it follows (moves forward).</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Cancero robot to autonomously follow a human using ROS and appropriate sensors.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (ROS Noetic, Ubuntu 20.04), Raspberry Pi (Ubuntu Server), Cancero hardware with sensors (e.g., ultrasonic, camera), and potentially a Teensy microcontroller running compatible firmware.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow STEP 3: Ensure <code>bringup.launch</code> (which should start sensor drivers) is running. Then, make the <code>human_follow.py</code> script executable and run it using <code>rosrun</code>.</p>
        </li>
        <li>
            <p><b>How does the human follower node function?</b></p>
            <p>The <code>human_follow.py</code> script reads data from the robot's sensors (specified within the script, often ultrasonic for simple distance following). Based on the detected distance, it publishes velocity commands (<code>/cmd_vel</code>) to make the robot move forward (if distance {">"} 10) or stop (if distance {"<"} 10).</p>
        </li>
        <li>
            <p><b>How can I test the functionality of the human-following robot?</b></p>
            <p>After launching all required nodes (<code>bringup.launch</code> and <code>human_follow.py</code>), stand in front of the robot's sensor. Move away slowly; the robot should follow. Move closer; the robot should stop when you are within 10 units.</p>
        </li>
    </ol>
        </>
      ),
    },
            "ROS Based Master Slave Control": {
      type: "experiment",
      content: (
        <>
    <h2>Cancero Keyboard Control (ROS Master-Slave)</h2>

    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (Note: Bluetooth isn't used for keyboard control but might be part of the standard hardware)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero for teleoperation.</li>
        <li>Learn about the different basic components that make up a Cancero robot in a ROS context.</li>
        <li>Control the Cancero using keyboard commands in a ROS master-slave configuration (Laptop as master, Raspberry Pi as slave).</li>
    </ul>

     <h3>Installation (Do only for the first time):</h3>
     <p>Before proceeding, ensure the following ROS packages are installed on both the Raspberry Pi and the Laptop:</p>
     <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Install necessary packages:
            <code>sudo apt-get update</code>
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
            <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code>
        </li>
        <li>Navigate to your ROS workspace (adjust `chelonia_ws` if different):
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Clean and rebuild the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
         <li>Source the workspace (add this to <code>.bashrc</code> if not done):
            <code>source devel/setup.bash</code>
         </li>
     </ol>
     <p>Repeat steps 2, 3, 4, and 5 on your Laptop as well.</p>
     <div class="note">
        <p><b>Network Configuration:</b> Ensure ROS networking (<code>ROS_IP</code>, <code>ROS_MASTER_URI</code>) is correctly configured in the <code>.bashrc</code> files on both the Raspberry Pi (slave) and the Laptop (master) so they can communicate. The Raspberry Pi should point to its own IP for <code>ROS_IP</code>, and the Laptop should point to its own IP for <code>ROS_IP</code> and the Raspberry Pi's IP for <code>ROS_MASTER_URI</code>.</p>
     </div>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu on the machine you use to program the Teensy. (Add link to PlatformIO setup guide if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the appropriate firmware (supporting ROS rosserial), configuring the Raspberry Pi (including ROS installation and network setup), and setting up the ROS workspace (<code>chelonia_ws</code>). (Add link to Teensy/Workspace setup guide if available).</p>

    <h4>STEP 3: Launch the ROS Core and Bringup on Raspberry Pi (Slave)</h4>
    <p>Perform these steps on your laptop via SSH to the Raspberry Pi:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Navigate to your ROS workspace:
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch the main robot bringup file (this starts ROS core on the Pi and connects to the Teensy):
            <code>roslaunch linorobot bringup.launch</code>
            (Keep this terminal running). 
        </li>
    </ol>

    <h4>STEP 4: Setup and Run Keyboard Control on Laptop (Master)</h4>
    <p>Perform these steps in a <b>new terminal on your Laptop</b> (do not SSH):</p>
    <ol>
        <li>Navigate to your local ROS workspace (ensure it has the necessary packages or dependencies):
            <code>cd ~/chelonia_ws</code>
        </li>
         <li>Source the workspace:
             <code>source devel/setup.bash</code>
         </li>
         <li>Run the Teleop Twist Keyboard node:
             <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
         </li>
    </ol>
    <p>Control the robot using the keyboard commands displayed in this terminal (usually W, A, S, D, X, etc.). The commands are sent over the network to the ROS master running on the Raspberry Pi, which then controls the robot. </p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is ROS Noetic, and why is it used in this experiment?</b></p>
            <p>ROS Noetic is the ROS version for Ubuntu 20.04. It provides the communication framework (master-slave) and tools (like <code>teleop_twist_keyboard</code>, <code>rosserial</code>) needed for this experiment.</p>
        </li>
        <li>
            <p><b>Why is a Raspberry Pi with Ubuntu Server needed for the Cancero?</b></p>
            <p>The Raspberry Pi runs the main ROS nodes (ROS master, hardware drivers via <code>rosserial</code>) directly connected to the robot's hardware (Teensy). The laptop acts as a remote control station.</p>
        </li>
        <li>
            <p><b>What is the purpose of the Teensy 3.0?</b></p>
            <p>The Teensy acts as a low-level microcontroller, directly interfacing with motors and sensors. It communicates with the Raspberry Pi using the ROS rosserial protocol over USB.</p>
        </li>
        <li>
            <p><b>How does teleoperation play a role in this experiment?</b></p>
            <p>Teleoperation allows remote control. Here, the <code>teleop_twist_keyboard</code> node on the laptop sends velocity commands (<code>/cmd_vel</code> topic) over the ROS network to the nodes running on the Raspberry Pi, which then instructs the Teensy to move the motors.</p>
        </li>
        <li>
            <p><b>What steps are involved in setting up the ROS workspace on the Raspberry Pi?</b></p>
            <p>SSH into the Pi, navigate to the workspace (e.g., <code>~/chelonia_ws</code>), ensure required packages (like <code>linorobot</code>) are present in <code>src</code>, build using <code>catkin_make</code>, and source <code>devel/setup.bash</code>. Crucially, run <code>roslaunch linorobot bringup.launch</code> to start the core robot nodes.</p>
        </li>
        <li>
            <p><b>How can errors during setup be addressed?</b></p>
            <p>Check ROS network configuration (<code>ROS_IP</code>, <code>ROS_MASTER_URI</code> in <code>.bashrc</code> on both machines). Ensure required packages are installed (<code>sudo apt-get install ...</code>). Verify hardware connections (Teensy to Pi). Check ROS topics (<code>rostopic list</code>, <code>rostopic echo /cmd_vel</code>) to debug communication.</p>
        </li>
        <li>
            <p><b>Can keyboard commands for controlling the Cancero be customized?</b></p>
            <p>The <code>teleop_twist_keyboard</code> node has parameters to remap keys or change speed/turn rates, often passed via the command line or a launch file. Consult its documentation (<code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py --help</code>) for options.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Shape Path Clearing Robot Using ROS": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (Note: Bluetooth isn't used for keyboard control but might be part of the standard hardware)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero for teleoperation.</li>
        <li>Learn about the different basic components that make up a Cancero robot in a ROS context.</li>
        <li>Control the Cancero using keyboard commands in a ROS master-slave configuration (Laptop as master, Raspberry Pi as slave).</li>
    </ul>

     <h3>Installation (Do only for the first time):</h3>
     <p>Before proceeding, ensure the following ROS packages are installed on both the Raspberry Pi and the Laptop:</p>
     <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Install necessary packages:
            <code>sudo apt-get update</code>
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
            <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code>
        </li>
        <li>Navigate to your ROS workspace (adjust <code>chelonia_ws</code> if different):
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Clean and rebuild the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
         <li>Source the workspace (add this to <code>.bashrc</code> if not done):
            <code>source devel/setup.bash</code>
         </li>
     </ol>
     <p>Repeat steps 2, 3, 4, and 5 on your Laptop as well.</p>
     <div class="note">
        <p><b>Network Configuration:</b> Ensure ROS networking (<code>ROS_IP</code>, <code>ROS_MASTER_URI</code>) is correctly configured in the <code>.bashrc</code> files on both the Raspberry Pi (slave) and the Laptop (master) so they can communicate. The Raspberry Pi should point to its own IP for <code>ROS_IP</code> and <code>ROS_MASTER_URI</code> (since it runs the master node <code>roscore</code> via <code>bringup.launch</code>). The Laptop should point to its own IP for <code>ROS_IP</code> and the Raspberry Pi's IP for <code>ROS_MASTER_URI</code>.</p>
     </div>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu on the machine you use to program the Teensy. (Add link to PlatformIO setup guide if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the appropriate firmware (supporting ROS rosserial), configuring the Raspberry Pi (including ROS installation and network setup), and setting up the ROS workspace (<code>chelonia_ws</code>). (Add link to Teensy/Workspace setup guide if available).</p>

    <h4>STEP 3: Launch the ROS Core and Bringup on Raspberry Pi (Slave)</h4>
    <p>Perform these steps on your laptop via SSH to the Raspberry Pi:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Navigate to your ROS workspace:
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch the main robot bringup file (this starts ROS core on the Pi and connects to the Teensy):
            <code>roslaunch linorobot bringup.launch</code>
            (Keep this terminal running). 
        </li>
    </ol>

    <h4>STEP 4: Setup and Run Keyboard Control on Laptop (Master)</h4>
    <p>Perform these steps in a <b>new terminal on your Laptop</b> (do not SSH):</p>
    <ol>
        <li>Navigate to your local ROS workspace (ensure it has the necessary packages or dependencies):
            <code>cd ~/chelonia_ws</code>
        </li>
         <li>Source the workspace:
             <code>source devel/setup.bash</code>
         </li>
         <li>Run the Teleop Twist Keyboard node:
             <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
         </li>
    </ol>
    <p>Control the robot using the keyboard commands displayed in this terminal (usually W, A, S, D, X, etc.). The commands are sent over the network to the ROS master running on the Raspberry Pi, which then controls the robot. </p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Cancero for teleoperation and implement a master-slave control system using ROS, where the robot can be controlled via keyboard commands from a laptop.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Cancero hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow the provided instructions to set up the ROS workspace on the Raspberry Pi and launch the necessary nodes, including bringing up the ROS workspace and installing rosserial-python if needed.</p>
        </li>
        <li>
            <p><b>How do I set up the laptop for keyboard control of the Cancero?</b></p>
            <p>Run the Teleop Twist Keyboard package on the laptop by navigating to the ROS workspace directory (<code>chelonia_ws</code>), building the workspace using <code>catkin_make</code>, sourcing the setup file, and running the <code>teleop_twist_keyboard.py</code> script. Use the keyboard commands displayed on the screen to control the robot.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Obstacle Based Speed Control Using ROS": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware (Requires ultrasonic or other distance sensors)</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (Note: Bluetooth isn't used here but might be part of the hardware)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero package for teleoperation (as a base).</li>
        <li>Learn about basic robot components in ROS.</li>
        <li>Implement Obstacle handling (obstacle-based speed control) on the Cancero bot using ROS.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. (Add link if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow general steps for firmware upload (ensure it supports rosserial and reads distance sensors), Raspberry Pi configuration (ROS installed), and ROS workspace setup (<code>chelonia_ws</code>). (Add link if available).</p>
    <div class="note">
        <p>The firmware must publish distance sensor readings to a ROS topic (e.g., <code>/ultrasonic</code>, <code>/sensor_data</code>) for the Python script to use.</p>
    </div>

    <h4>STEP 3: Launch the ROS Workspace and Obstacle Handling Node on Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>
            <p><b>Launch <code>bringup.launch</code>:</b></p>
            <ul>
                <li>SSH into the Raspberry Pi:
                    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
                </li>
                <li>Install rosserial-python if needed:
                     <code>sudo apt-get update</code>
                     <code>sudo apt-get install ros-noetic-rosserial-python</code>
                 </li>
                 <li>Navigate to the ROS workspace:
                     <code>cd ~/chelonia_ws</code>
                 </li>
                 <li>Clean and rebuild if necessary:
                     <code>rm -r build devel</code>
                     <code>catkin_make</code>
                 </li>
                 <li>Source the workspace:
                     <code>source devel/setup.bash</code>
                 </li>
                 <li>Launch the main robot bringup file (ensure this starts sensor drivers):
                     <code>roslaunch linorobot bringup.launch</code>
                     (Keep this terminal running).
                 </li>
            </ul>
        </li>
        <li>
            <p><b>Give Execution Permission to the Python Script:</b></p>
            <ul>
                <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
                </li>
                <li>Navigate to the scripts directory:
                    <code>cd ~/chelonia_ws/src/linorobot/scripts</code>
                </li>
                <li>Make the <code>deceleration.py</code> script executable:
                    <code>sudo chmod +x deceleration.py</code>
                </li>
            </ul>
        </li>
        <li>
            <p><b>Launch the Obstacle Handler Node:</b></p>
            <ul>
                <li>In the same terminal (or a new one after SSHing), navigate to the workspace root:
                    <code>cd ~/chelonia_ws/</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Run the deceleration script:
                    <code>rosrun linorobot deceleration.py</code>
                    (Keep this terminal running). 
                </li>
            </ul>
        </li>
    </ol>
    <p>The <code>deceleration.py</code> script will now monitor the distance sensor topic:</p>
    <ul>
        <li>If obstacle distance is &lt; 30 (units likely cm), it stops the robot.</li>
        <li>If obstacle distance is &lt; 100, it decelerates.</li>
        <li>If obstacle distance is &gt; 100, it allows normal speed.</li>
    </ul>
    <div class="note">
        <p>To see the robot move and react, you might need to run a teleoperation node (like <code>teleop_twist_keyboard</code>) simultaneously, or modify <code>deceleration.py</code> to command forward motion when distance {">"} 100.</p>
    </div>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the primary objective of this experiment?</b></p>
            <p>The objective is to set up a Cancero package for teleoperation and implement obstacle-based speed control, where the Cancero adjusts its speed based on the proximity of obstacles.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Cancero hardware (with distance sensors), and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow the provided instructions (STEP 3) to set up the ROS workspace on the Raspberry Pi and launch the necessary nodes, including bringing up the ROS workspace (<code>bringup.launch</code>), handling obstacles (running <code>deceleration.py</code>), and giving execution permission to the Python launch file.</p>
        </li>
        <li>
            <p><b>What does the obstacle handler node do?</b></p>
            <p>The obstacle handler node, implemented in the <code>deceleration.py</code> script, monitors the distance to obstacles via ROS topics. If the distance is less than 30 units, it stops the Cancero. If the distance is between 30 and 100 units, it decelerates the Cancero. If the distance is greater than 100 units, it allows the Cancero to move at normal speed (or a predefined speed).</p>
        </li>
    </ol>
        </>
      ),
    },
            "Moving Obstacle Avoidance Using ROS": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware (Requires sensors supported by the navigation stack, e.g., LiDAR, IMU)</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (Note: Bluetooth isn't directly used for navigation but might be part of the hardware)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero for teleoperation (as a base requirement).</li>
        <li>Learn about the different basic components that make up a Cancero robot for navigation in ROS.</li>
        <li>Perform Cancero auto navigation with obstacle avoidance using a pre-existing map.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. (Add link if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (the firmware code is different from the other experiments)</h4>
    <p>Follow general steps for uploading the firmware supporting ROS navigation (including IMU, encoders, etc.), configuring the Raspberry Pi (ROS installed, network setup), and setting up the ROS workspace (<code>chelonia_ws</code>). Ensure the firmware used is specifically for navigation tasks. (Add link if available).</p>
    <div class="note">
        <p><b>Firmware Note:</b> The firmware for navigation typically differs from basic teleoperation firmware as it needs to handle odometry calculation (from encoders) and possibly IMU data publishing.</p>
    </div>

    <h4>STEP 3: Launch the ROS Workspace and Navigation Stack on Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Navigate to the ROS workspace:
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Clean and rebuild if necessary (especially after firmware changes):
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>
            <p><b>Install necessary ROS navigation packages (if not already installed):</b></p>
            <code>sudo apt-get update</code>
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
            <code>sudo apt-get install ros-noetic-amcl</code>
            <code>sudo apt-get install ros-noetic-move-base</code>
            <code>sudo apt-get install ros-noetic-map-server</code>
            <code>sudo apt-get install ros-noetic-global-planner</code>
            <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
        
        </li>
        <li>
            <p><b>Update the map path in <code>navigate.launch</code>:</b></p>
            <ul>
                 <li>Navigate to the launch file directory:
                     <code>cd ~/chelonia_ws/src/linorobot/launch</code>
                 </li>
                 <li>Edit the navigation launch file (e.g., using <code>nano</code>):
                     <code>nano navigate.launch</code>
                 </li>
                 <li>Find the line related to the map server and update the <code>map_file</code> argument to point to your saved map (e.g., <code>my_map.yaml</code> created during SLAM). Ensure the path is correct. Example:
                     <code class="code-block">&lt;arg name="map_file" default="$(find linorobot)/maps/my_map.yaml"/&gt;</code>
                 </li>
                 <li>Save (Ctrl+O, Enter) and exit (Ctrl+X).</li>
            </ul>
        </li>
         <li>
             <p><b>Launch the navigation stack:</b></p>
             <ul>
                <li>Navigate back to the workspace root:
                    <code>cd ~/chelonia_ws</code>
                </li>
                 <li>Launch the navigation file:
                    <code>roslaunch linorobot navigation.launch</code>
                    (Keep this terminal running). 
                </li>
            </ul>
        </li>
    </ol>

    <h4>STEP 4: Visualization using Rviz on Laptop</h4>
    <p>Perform these steps in a <b>new terminal on your Laptop</b>:</p>
    <ol>
        <li>SSH into the Raspberry Pi with X11 forwarding enabled:
            <code>ssh username@ip -X</code>
            (The <code>-X</code> allows graphical applications like Rviz to display on your laptop).
        </li>
        <li>Navigate to the ROS workspace on the Pi:
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch Rviz with the navigation configuration:
            <code>rviz -d src/linorobot/rviz/navigate.rviz</code>
            
        </li>
    </ol>

    <h4>STEP 5: Set Initial Pose and Goal Position in Rviz</h4>
    <ol>
        <li>In the Rviz window, use the "2D Pose Estimate" button (often an arrow icon) to click and drag on the map, indicating the robot's approximate current location and orientation. This helps the localization system (AMCL) start correctly. </li>
        <li>Use the "2D Nav Goal" button (often another arrow icon) to click and drag on the map, setting the desired destination location and orientation for the robot. </li>
    </ol>

    <h4>STEP 6: Observe Navigation and Obstacle Avoidance</h4>
    <p>Watch the robot in the real world and in Rviz. It should start planning a path (often shown as green or blue lines) and move towards the goal.</p>
    <p>To test obstacle avoidance, slowly move an object (like your hand or a box) into the robot's path (be careful!). Observe how the robot detects the obstacle (using its sensors, visualized in Rviz, often as red dots/lines) and either stops, slows down, or replans its path around the obstacle. </p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What do I need for this experiment?</b></p>
            <p>You'll need a PC (Ubuntu 20.04, ROS Noetic), a Raspberry Pi (Ubuntu Server), Cancero hardware (with sensors like LiDAR/IMU/encoders), and a Teensy microcontroller programmed with navigation-compatible firmware.</p>
        </li>
        <li>
            <p><b>How do I set up my Cancero?</b></p>
            <p>Ensure PlatformIO is installed, upload the correct navigation firmware to the Teensy, configure the Raspberry Pi (OS, ROS, network), and set up the ROS workspace (<code>chelonia_ws</code>) following the detailed setup guides.</p>
        </li>
        <li>
            <p><b>How do I launch the ROS workspace on Raspberry Pi for navigation?</b></p>
            <p>SSH into the Pi, navigate to <code>~/chelonia_ws</code>, optionally rebuild (<code>rm -r build devel && catkin_make</code>), source the environment (<code>source devel/setup.bash</code>), and run <code>roslaunch linorobot navigation.launch</code> after ensuring the correct map file path is set within the launch file.</p>
        </li>
        <li>
            <p><b>What if I encounter errors during setup?</b></p>
            <p>Install any missing ROS packages listed in STEP 3 using <code>sudo apt-get install </code>. Double-check that the map file path specified in <code>navigate.launch</code> is correct and the map files (<code>.yaml</code> and <code>.pgm</code>) exist. Verify ROS network configuration.</p>
        </li>
        <li>
            <p><b>How do I visualize navigation with Rviz?</b></p>
            <p>SSH into the Raspberry Pi from your laptop using the <code>-X</code> flag (<code>ssh username@ip -X</code>). Navigate to your workspace (<code>cd ~/chelonia_ws</code>), source it (<code>source devel/setup.bash</code>), and launch Rviz with the navigation config file (<code>rviz -d src/linorobot/rviz/navigate.rviz</code>).</p>
        </li>
    </ol>
        </>
      ),
    },
            "Maze Solving Robot Using ROS": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware (Requires sensors supported by navigation stack, e.g., LiDAR, IMU)</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (Note: Bluetooth isn't used here but might be part of the hardware)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero for maze solving.</li>
        <li>Learn about the different basic components that make up a Cancero robot for navigation.</li>
        <li>Perform maze solving with Cancero using ROS navigation.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. (Add link if available).</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (the firmware code is different from the other experiments)</h4>
    <p>Follow general steps for uploading the firmware supporting ROS navigation, configuring the Raspberry Pi, and setting up the ROS workspace (<code>chelonia_ws</code>). Ensure the firmware is compatible with maze solving/navigation. (Add link to setup guide if available).</p>
    <p>Maze solving example video for reference: <a href="https://www.youtube.com/watch?v=ZMQbHMgK2rw" target="_blank">[Click here]</a></p>

    <h4>STEP 3: Create a Maze Environment for the Robot</h4>
    <p>Refer to the video link below and create a similar physical maze setup for your robot.</p>
    <p>Video link: <a href="https://www.youtube.com/watch?v=fzpzEGue-wc" target="_blank">[Click here]</a></p>
    <div class="note">
        <p><b>Important:</b> Make sure the height of the maze walls is greater than the height of the LiDAR sensor (or other primary distance sensors) on the robot, so the sensors can reliably detect the walls.</p>
    </div>

    <h4>STEP 4: Launch the ROS Workspace and Navigation Stack on Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Navigate to the ROS workspace:
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Clean and rebuild the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>
            <p><b>Install necessary ROS navigation packages (if needed):</b></p>
            <code>sudo apt-get update</code>
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
            <code>sudo apt-get install ros-noetic-amcl</code>
            <code>sudo apt-get install ros-noetic-move-base</code>
            <code>sudo apt-get install ros-noetic-map-server</code>
            <code>sudo apt-get install ros-noetic-global-planner</code>
            <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
        </li>
        <li>
            <p><b>Update the map path in <code>navigate.launch</code>:</b></p>
            <p>For maze solving, you typically run SLAM first to create a map of the maze, or use a predefined map if available.</p>
            <ul>
                 <li>Navigate to the launch file directory:
                     <code>cd ~/chelonia_ws/src/linorobot/launch</code>
                 </li>
                 <li>Edit the navigation launch file:
                     <code>nano navigate.launch</code>
                 </li>
                 <li>Find the map server section and ensure the <code>map_file</code> argument points to your maze map YAML file (e.g., <code>maze_map.yaml</code>).
                     <code class="code-block">&lt;arg name="map_file" default="$(find linorobot)/maps/maze_map.yaml"/&gt;</code>
                 </li>
                 <li>Save (Ctrl+O, Enter) and exit (Ctrl+X).</li>
            </ul>
        </li>
         <li>
             <p><b>Launch the navigation stack:</b></p>
             <ul>
                <li>Navigate back to the workspace root:
                    <code>cd ~/chelonia_ws</code>
                </li>
                 <li>Launch the navigation file:
                    <code>roslaunch linorobot navigation.launch</code>
                    (Keep this terminal running).
                </li>
            </ul>
        </li>
    </ol>

    <h4>STEP 5: Visualization using Rviz on Laptop</h4>
    <p>Perform these steps in a <b>new terminal on your Laptop</b>:</p>
    <ol>
        <li>SSH into the Raspberry Pi with X11 forwarding:
            <code>ssh username@ip -X</code>
        </li>
        <li>Navigate to the ROS workspace on the Pi:
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch Rviz with the navigation configuration:
            <code>rviz -d src/linorobot/rviz/navigate.rviz</code>
            
        </li>
    </ol>

    <h4>STEP 6: Set Start Position and Goal Position for Navigation (in RVIZ)</h4>
    <ol>
        <li>In Rviz, use the "2D Pose Estimate" tool to set the robot's initial position and orientation within the maze map. Reference image: <a href="#" target="_blank">[click here]</a> </li>
        <li>Use the "2D Nav Goal" tool to set the desired goal position and orientation within the maze. Reference image: <a href="#" target="_blank">[click here]</a> </li>
    </ol>

    <h4>STEP 7: Observe Maze Solving</h4>
    <p>Watch the robot physically navigate the maze and observe its path planning and execution in Rviz. It should avoid walls and find its way to the goal.</p>
    <p>You can test its dynamic obstacle avoidance by slowly moving an object into its path (be careful not to disrupt its localization).</p>

    <h3>Frequently Asked Questions (FAQs):</h3>
    <ol>
        <li>
            <p><b>What do I need for the maze solving experiment?</b></p>
            <p>Hardware: Cancero robot (with sensors like LiDAR/IMU), Raspberry Pi, Teensy 3.0. Software: ROS Noetic, Ubuntu 20.04.</p>
        </li>
        <li>
            <p><b>How do I set up my Cancero?</b></p>
            <p>Follow the provided general setup instructions for software installation (PlatformIO, ROS), hardware configuration, and firmware upload (specific navigation firmware needed).</p>
        </li>
         <li>
            <p><b>How do I create a maze environment?</b></p>
            <p>Build a physical maze using materials like cardboard or wood panels. Ensure the walls are high enough for the robot's sensors to detect them consistently. Refer to the example video link for ideas.</p>
        </li>
        <li>
            <p><b>How do I launch the ROS workspace on Raspberry Pi?</b></p>
            <p>SSH into the Pi, navigate to your ROS workspace (<code>~/chelonia_ws</code>), rebuild the workspace (<code>rm -r build devel && catkin_make</code>), source the setup file (<code>source devel/setup.bash</code>), and launch the navigation stack (<code>roslaunch linorobot navigation.launch</code>), ensuring the correct map file is specified.</p>
        </li>
        <li>
            <p><b>How do I visualize and navigate the maze?</b></p>
            <p>Run RVIZ on your PC (connected to the Pi via SSH with -X), load the navigation configuration. Use the "2D Pose Estimate" tool to set the robot's starting position on the map and the "2D Nav Goal" tool to set the destination. Observe the robot's path planning and movement in Rviz and the real world.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Python Programmed Terminal Controlled Robo Using a Mobile App": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (HC-05 recommended)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero for teleoperation via ROS.</li>
        <li>Learn about the basic components involved in ROS robot control.</li>
        <li>Control the Cancero using terminal commands sent from a mobile app.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. (Add specific link if available)</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the firmware (ensure it includes Bluetooth serial handling), configuring the Raspberry Pi (ROS installed, network setup), and setting up the ROS workspace (<code>chelonia_ws</code>). (Add specific link to setup guide if available).</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>
            <p><b>Terminal 1: Launch <code>bringup.launch</code></b></p>
            <ul>
                <li>SSH into the Raspberry Pi:
                    <code>ssh username@ip</code>
                </li>
                <li>Install rosserial-python if needed:
                    <code>sudo apt-get update</code>
                    <code>sudo apt-get install ros-noetic-rosserial-python</code>
                    (This enables ROS communication with the Teensy via serial/USB).
                </li>
                <li>Navigate to the ROS workspace:
                    <code>cd ~/chelonia_ws</code>
                </li>
                <li>Clean and rebuild if necessary:
                    <code>rm -r build devel</code>
                    <code>catkin_make</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Launch the main robot bringup file:
                    <code>roslaunch linorobot bringup.launch</code>
                    (Keep this terminal running).
                </li>
            </ul>
        </li>
        <li>
            <p><b>Terminal 2: Launch Bluetooth Script</b></p>
            <ul>
                <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh username@ip</code>
                </li>
                 <li>Navigate to the workspace:
                     <code>cd ~/chelonia_ws</code>
                 </li>
                 <li>Source the workspace:
                     <code>source devel/setup.bash</code>
                 </li>
                 <li>Navigate to the scripts directory:
                    <code>cd src/linorobot/scripts</code>
                 </li>
                 <li>Run the Bluetooth script (ensure this script reads Bluetooth data and publishes to <code>/cmd_vel</code>):
                     <code>python3 bluetooth.py</code>
                     (Keep this terminal running).
                 </li>
            </ul>
        </li>
    </ol>

    <h4>STEP 4: Setup the Mobile APP for Terminal Controlling</h4>
    <ol>
        <li>Install the Bluetooth terminal app on your Android mobile device: <a href="[Link]" target="_blank">[Link]</a> (e.g., Arduino Bluetooth Control or similar).</li>
        <li>
            <p><b>Connect the device with Bluetooth:</b></p>
            <ul>
                <li>Go to your phone's Bluetooth settings.</li>
                <li>Pair a new device.</li>
                <li>Select HC05 (or your module's name).</li>
                <li>Enter the password (default is often <code>1234</code> or <code>0000</code>).</li>
            </ul>
        </li>
        <li>Open the installed Bluetooth app.</li>
        <li>Select the device to connect to (choose HC05). </li>
        <li>
            <p><b>Control the Cancero with commands:</b></p>
            <ul>
                <li>Navigate to the terminal or command prompt interface within the app. </li>
                <li>Now you can control the Cancero by typing the following commands and sending them:
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
            <p>The goal is to set up and control a Cancero robot using terminal commands sent from a mobile app via Bluetooth, translated into ROS commands.</p>
        </li>
        <li>
            <p><b>What equipment is required for this experiment?</b></p>
            <p>You need a PC/laptop (Ubuntu 20.04, ROS Noetic), Raspberry Pi (Ubuntu Server), Cancero hardware, Teensy 3.0, and a Bluetooth module (HC-05).</p>
        </li>
        <li>
            <p><b>How do I set up the mobile app for controlling the Cancero?</b></p>
            <p>Install a suitable Android Bluetooth terminal app, pair your phone with the robot's HC-05 module (password usually <code>1234</code>), connect to the HC-05 within the app, and use the app's terminal/command interface to type and send commands like 'F', 'B', 'L', 'R', 'S'.</p>
        </li>
        <li>
            <p><b>What should I do if I encounter errors during setup?</b></p>
            <p>Double-check all hardware connections (especially Bluetooth RX/TX), ensure ROS nodes (<code>bringup.launch</code>, <code>bluetooth.py</code>) are running without errors, verify Bluetooth pairing, and confirm you are sending the correct commands from the app.</p>
        </li>
        <li>
            <p><b>Where can I find detailed instructions for specific set-up steps?</b></p>
            <p>Refer to the specific setup guides for PlatformIO installation, Teensy firmware upload, Raspberry Pi configuration (OS, ROS, network), and ROS workspace setup mentioned in the earlier steps or provided documentation.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Staircase Detection Robot Using ROS": {
      type: "experiment",
      content: (
        <>
   <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware (Requires downward-facing distance sensor, e.g., Ultrasonic)</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (Note: Bluetooth might not be directly used, depending on the implementation)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero package for teleoperation (as a base requirement).</li>
        <li>Learn about the basic components needed for staircase detection.</li>
        <li>Implement a staircase detection robot using ROS.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. (Add specific link if available)</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the firmware (ensure it supports the downward sensor), configuring the Raspberry Pi (ROS installed, network setup), and setting up the ROS workspace (<code>chelonia_ws</code>). (Add specific link to setup guide if available).</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>
            <p><b>Launch <code>bringup.launch</code>:</b></p>
            <ul>
                <li>SSH into the Raspberry Pi:
                    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
                </li>
                <li>Install rosserial-python if needed:
                    <code>sudo apt-get update</code>
                    <code>sudo apt-get install ros-noetic-rosserial-python</code>
                </li>
                <li>Navigate to the ROS workspace:
                    <code>cd ~/chelonia_ws</code>
                </li>
                <li>Clean and rebuild if necessary:
                    <code>rm -r build devel</code>
                    <code>catkin_make</code>
                </li>
                <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                </li>
                <li>Launch the main robot bringup file (ensure this publishes sensor data):
                    <code>roslaunch linorobot bringup.launch</code>
                    (Keep this terminal running).
                </li>
            </ul>
        </li>
        <li>
            <p><b>Give execution permission to the staircase detection script:</b></p>
            <ul>
                <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
                </li>
                 <li>Navigate to the scripts directory:
                     <code>cd ~/chelonia_ws/src/linorobot/scripts</code>
                 </li>
                 <li>Make the script executable:
                    <code>sudo chmod +x staircase_detection.py</code>
                 </li>
            </ul>
        </li>
        <li>
            <p><b>Launch the Staircase Handler Node:</b></p>
             <ul>
                 <li>In the same (second) terminal:</li>
                 <li>Navigate back to the workspace root:
                     <code>cd ~/chelonia_ws/</code>
                 </li>
                 <li>Source the workspace:
                     <code>source devel/setup.bash</code>
                 </li>
                 <li>Run the staircase detection script:
                     <code>rosrun linorobot staircase_detection.py</code>
                     (Keep this terminal running). 
                 </li>
            </ul>
        </li>
    </ol>
    <div class="note">
        <p><b>Behavior Logic (based on comments):</b></p>
        <ul>
            <li>If downward displacement (distance) is less than 5 (units assumed, e.g., cm), it moves forward.</li>
            <li>If distance is greater than 5, it stops movement (staircase detected).</li>
            <li><i>Note: The script likely reads sensor data (e.g., from an <code>/ultrasonic_down</code> topic published by <code>bringup.launch</code>) and publishes velocity commands (<code>/cmd_vel</code>) based on this logic.</i></li>
        </ul>
    </div>


    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Cancero robot with ROS to detect staircases or drop-offs using a downward-facing sensor and stop its movement to prevent falling.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC (Ubuntu 20.04, ROS Noetic), Raspberry Pi (Ubuntu Server), Cancero hardware equipped with a downward-facing distance sensor, and a Teensy microcontroller programmed appropriately.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow the steps above: Launch the main robot interface (<code>bringup.launch</code>) in one terminal. In another terminal, make the <code>staircase_detection.py</code> script executable (<code>chmod +x</code>) and then run it using <code>rosrun linorobot staircase_detection.py</code> after sourcing the workspace.</p>
        </li>
         <li>
            <p><b>How does the staircase detection logic work?</b></p>
            <p>The <code>staircase_detection.py</code> script reads data from the downward sensor. If the measured distance exceeds a threshold (e.g., 5 units), it interprets this as a drop-off/staircase and sends a command to stop the robot's motors. Otherwise, it allows the robot to move forward.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Python Programmed Voice Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (HC-05 recommended)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero for teleoperation via ROS.</li>
        <li>Learn about the different basic components that make up a Cancero robot.</li>
        <li>Control the Cancero with voice commands using a mobile app.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. (Add specific link if available)</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the firmware (ensure it includes Bluetooth serial handling), configuring the Raspberry Pi (ROS installed, network setup), and setting up the ROS workspace (<code>chelonia_ws</code>). (Add specific link to setup guide if available).</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Navigate to the ROS workspace:
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Clean and rebuild the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch the main robot bringup file:
            <code>roslaunch linorobot bringup.launch</code>
            (Keep this terminal running).
        </li>
        <li>
            <p><b>If errors occur (e.g., rosserial connection issues):</b></p>
            <ul>
                <li>Install rosserial-python if needed:
                    <code>sudo apt-get update</code>
                    <code>sudo apt-get install ros-noetic-rosserial-python</code>
                </li>
                <li>Relaunch the bringup file after installation.</li>
            </ul>
        </li>
        <li>
            <p><b>Run the Bluetooth bridge script (if needed):</b></p>
            <p><i>Note: The <code>bluetooth.py</code> script from previous examples might be required if <code>bringup.launch</code> doesn't handle Bluetooth directly. Run it in a separate terminal.</i></p>
            <ul>
                 <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh username@ip</code>
                </li>
                 <li>Navigate to the scripts directory:
                    <code>cd ~/chelonia_ws/src/linorobot/scripts</code>
                 </li>
                 <li>Run the script:
                     <code>python3 bluetooth.py</code>
                     (Keep this terminal running).
                 </li>
            </ul>
        </li>
    </ol>

    <h4>STEP 4: Setup the Mobile APP for Voice Controlling</h4>
    <ol>
        <li>Install the required app on your Android mobile device: <a href="[Link]" target="_blank">[Link]</a> (e.g., Arduino Bluetooth Control).</li>
        <li>
            <p><b>Connect the device with Bluetooth:</b></p>
            <ul>
                <li>Go to your phone's Bluetooth settings.</li>
                <li>Pair a new device.</li>
                <li>Select HC05 (or your module's name).</li>
                <li>Enter the password (default is often <code>1234</code> or <code>0000</code>).</li>
            </ul>
        </li>
        <li>Open the installed Bluetooth app.</li>
        <li>Select the device to connect to (choose HC05). </li>
        <li>
            <p><b>Configure Vocal Commands:</b></p>
            <ul>
                <li>Navigate to the app's settings section for voice command configuration.</li>
                <li>Set up the following commands (or similar):
                    <ul>
                        <li>Vocal command: "Go" -{">"} Data to send: <code>F</code> -{">"} Click OK</li>
                        <li>Vocal command: "Down" / "Back" -{">"} Data to send: <code>B</code> -{">"} Click OK</li>
                        <li>Vocal command: "Left" -{">"} Data to send: <code>L</code> -{">"} Click OK</li>
                        <li>Vocal command: "Right" -{">"} Data to send: <code>R</code> -{">"} Click OK</li>
                        <li>(Optional) Vocal command: "Stop" -{">"} Data to send: <code>S</code> -{">"} Click OK</li>
                    </ul>
                </li>
                <li>Reference link for app setup (if available): <a href="#" target="_blank">[click here]</a></li>
            </ul>
        </li>
        <li>
            <p><b>Control the Cancero with voice commands:</b></p>
            <ul>
                <li>Go back to the app's home page/main screen.</li>
                <li>Select the "Voice Control" mode or button. </li>
                <li>Now you can control the Cancero by speaking the configured commands (e.g., "Go", "Left", "Stop").</li>
             </ul>
        </li>
    </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Cancero robot for teleoperation via ROS and control its movement using voice commands sent from a mobile app through Bluetooth.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You need a PC/laptop (Ubuntu 20.04, ROS Noetic), Raspberry Pi (Ubuntu Server), Cancero hardware, Teensy 3.0, a Bluetooth module (HC-05), and an Android smartphone.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow Step 3: SSH into the Pi, build the <code>chelonia_ws</code> workspace, source it, and launch <code>linorobot bringup.launch</code>. If your setup requires a separate script to bridge Bluetooth to ROS topics (like <code>/cmd_vel</code>), run that script (e.g., <code>bluetooth.py</code>) in a second terminal.</p>
        </li>
        <li>
            <p><b>How do I set up the mobile app for voice controlling?</b></p>
            <p>Install the specified Android app, pair your phone with the HC-05 module. Inside the app, connect to the HC-05 and go to the voice command configuration settings. Assign spoken words (like "Go") to specific characters (like 'F') that the robot's ROS script understands.</p>
        </li>
        <li>
            <p><b>How do I control the Cancero with voice commands?</b></p>
            <p>After configuring the commands in the app, activate the voice control mode. Speak the commands you set up (e.g., "Go," "Left," "Stop") clearly into your phone's microphone.</p>
        </li>
    </ol>
        </>
      ),
    },
            "Python Programmed Mobile Tilt Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h3>Items Needed:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (HC-05 recommended)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero for teleoperation via ROS.</li>
        <li>Learn about the different basic components that make up a Cancero robot.</li>
        <li>Control the Cancero with voice commands using a mobile app.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. (Add specific link if available)</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the firmware (ensure it includes Bluetooth serial handling), configuring the Raspberry Pi (ROS installed, network setup), and setting up the ROS workspace (<code>chelonia_ws</code>). (Add specific link to setup guide if available).</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
        <li>Navigate to the ROS workspace:
            <code>cd ~/chelonia_ws</code>
        </li>
        <li>Clean and rebuild the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch the main robot bringup file:
            <code>roslaunch linorobot bringup.launch</code>
            (Keep this terminal running).
        </li>
        <li>
            <p><b>If errors occur (e.g., rosserial connection issues):</b></p>
            <ul>
                <li>Install rosserial-python if needed:
                    <code>sudo apt-get update</code>
                    <code>sudo apt-get install ros-noetic-rosserial-python</code>
                </li>
                <li>Relaunch the bringup file after installation.</li>
            </ul>
        </li>
         <li>
            <p><b>Run the Bluetooth bridge script (if needed):</b></p>
            <p><i>Note: The <code>bluetooth.py</code> script from previous examples might be required if <code>bringup.launch</code> doesn't handle Bluetooth directly. Run it in a separate terminal.</i></p>
            <ul>
                 <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh username@ip</code>
                </li>
                 <li>Navigate to the scripts directory:
                    <code>cd ~/chelonia_ws/src/linorobot/scripts</code>
                 </li>
                 <li>Run the script:
                     <code>python3 bluetooth.py</code>
                     (Keep this terminal running).
                 </li>
            </ul>
        </li>
    </ol>

    <h4>STEP 4: Setup the Mobile APP for Voice Controlling</h4>
    <ol>
        <li>Install the required app on your Android mobile device: <a href="[Link]" target="_blank">[Link]</a> (e.g., Arduino Bluetooth Control).</li>
        <li>
            <p><b>Connect the device with Bluetooth:</b></p>
            <ul>
                <li>Go to your phone's Bluetooth settings.</li>
                <li>Pair a new device.</li>
                <li>Select HC05 (or your module's name).</li>
                <li>Enter the password (default is often <code>1234</code> or <code>0000</code>).</li>
            </ul>
        </li>
        <li>Open the installed Bluetooth app.</li>
        <li>Select the device to connect to (choose HC05). </li>
        <li>
            <p><b>Configure Vocal Commands:</b></p>
            <ul>
                <li>Navigate to the app's settings section for voice command configuration.</li>
                <li>Set up the following commands (or similar):
                    <ul>
                        <li>Vocal command: "Go" -{">"} Data to send: <code>F</code> -{">"} Click OK</li>
                        <li>Vocal command: "Down" / "Back" -{">"} Data to send: <code>B</code> -{">"} Click OK</li>
                        <li>Vocal command: "Left" -{">"} Data to send: <code>L</code> -{">"} Click OK</li>
                        <li>Vocal command: "Right" -{">"} Data to send: <code>R</code> -{">"} Click OK</li>
                        <li>(Optional) Vocal command: "Stop" -{">"} Data to send: <code>S</code> -{">"} Click OK</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <p><b>Control the Cancero with voice commands:</b></p>
            <ul>
                <li>Go back to the app's home page/main screen.</li>
                <li>Select the "Voice Control" mode or button. </li>
                <li>Now you can control the Cancero by speaking the configured commands (e.g., "Go", "Left", "Stop").</li>
             </ul>
        </li>
    </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What is the main objective of this experiment?</b></p>
            <p>The objective is to set up a Cancero for teleoperation and implement voice control, allowing users to control the Cancero using voice commands.</p>
        </li>
        <li>
            <p><b>What equipment do I need for this experiment?</b></p>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Cancero hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li>
            <p><b>How do I set up the ROS workspace and launch the necessary nodes?</b></p>
            <p>Follow the provided instructions to set up the ROS workspace on the Raspberry Pi and launch the necessary nodes, including bringing up the ROS workspace and installing rosserial-python if needed.</p>
        </li>
        <li>
            <p><b>How do I set up the mobile app for voice controlling?</b></p>
            <p>Install the provided app on your Android mobile device and connect it to the Cancero via Bluetooth. Then configure the voice command settings in the app, assigning specific voice commands like "Go", "Down", "Left", and "Right" to corresponding robot movements.</p>
        </li>
        <li>
            <p><b>How do I control the Cancero with voice commands?</b></p>
            <p>After setting up the mobile app, navigate to the Voice Control section, and you can now control the Cancero using the voice commands you configured earlier. For example, saying "Go" will move the Cancero forward, "Down" will move it backward, "Left" will turn it left, and "Right" will turn it right.</p>
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
        <li>Package (Assume Linorobot or similar ROS package, e.g., using <code>Chelonia_ws</code>)</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Cancero hardware</li>
        <li>Teensy 3.0 (or compatible) with Bluetooth module (HC-05 recommended)</li>
    </ul>

    <h3>Objectives of Exercise:</h3>
    <ul>
        <li>Set up your Cancero package for teleoperation via ROS.</li>
        <li>Learn about the different basic components that make up a robot.</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Cancero.</li>
        <li>Control the Cancero with a button control interface in the mobile app.</li>
    </ul>

    <h3>Implementation:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. (Add specific link if available)</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>Follow the general steps for uploading the firmware (ensure it includes Bluetooth serial handling), configuring the Raspberry Pi (ROS installed, network setup), and setting up the ROS workspace (<code>Chelonia_ws</code>). (Add specific link to setup guide if available).</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>Perform these steps on your laptop via SSH:</p>
    <ol>
        <li>SSH into the Raspberry Pi:
            <code>ssh username@ip</code>
        </li>
         <li>Install rosserial-python if needed:
            <code>sudo apt-get update</code>
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
        </li>
        <li>Navigate to the ROS workspace:
            <code>cd ~/Chelonia_ws</code>
        </li>
        <li>Clean and rebuild the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the workspace:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch the main robot bringup file:
            <code>roslaunch linorobot bringup.launch</code>
            (Keep this terminal running).
        </li>
    </ol>

    <h4>STEP 4: Setup the Mobile APP</h4>
    <ol>
        <li>Install the required app on your Android mobile device: <a href="[Link]" target="_blank">[Link]</a> (e.g., Arduino Bluetooth Control).</li>
        <li>
            <p><b>Connect the device with Bluetooth:</b></p>
            <ul>
                <li>Go to your phone's Bluetooth settings.</li>
                <li>Pair a new device.</li>
                <li>Select HC05 (or your module's name).</li>
                <li>Enter the password (default is often <code>1234</code> or <code>0000</code>).</li>
            </ul>
        </li>
        <li>Open the installed Bluetooth app.</li>
        <li>Select the device to connect to (choose HC05). </li>
        <li>
            <p><b>Configure Command Buttons:</b></p>
            <ul>
                <li>Navigate to the app's settings section for command button configuration.</li>
                <li>Assign characters to buttons (examples):
                    <ul>
                        <li>Button A (or Up Arrow): <code>F</code> (Forward) -{">"} Click OK</li>
                        <li>Button B (or Down Arrow): <code>B</code> (Backward) -{">"} Click OK</li>
                        <li>Button C (or Right Arrow): <code>R</code> (Right) -{">"} Click OK</li>
                        <li>Button D (or Left Arrow): <code>L</code> (Left) -{">"} Click OK</li>
                        <li>(Optional) Add a button for Stop: <code>S</code> -{">"} Click OK</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <p><b>Run the Bluetooth Bridge Script:</b></p>
             <ul>
                 <li>Open a <b>new</b> terminal and SSH into the Raspberry Pi:
                    <code>ssh username@ip</code>
                </li>
                 <li>Install rosserial-python if you haven't already:
                     <code>sudo apt-get update && sudo apt-get install ros-noetic-rosserial-python</code>
                 </li>
                 <li>Navigate to the ROS workspace:
                    <code>cd ~/Chelonia_ws</code>
                 </li>
                 <li>Clean and rebuild if necessary:
                    <code>rm -r build devel</code>
                    <code>catkin_make</code>
                 </li>
                 <li>Source the workspace:
                    <code>source devel/setup.bash</code>
                 </li>
                 <li>Navigate to the scripts directory:
                    <code>cd src/linorobot/scripts</code>
                 </li>
                 <li>Run the Bluetooth script:
                     <code>python3 bluetooth.py</code>
                     (Keep this terminal running).
                     <div class="note">This script likely listens for characters ('F', 'B', 'L', 'R', 'S') from the Bluetooth serial port and publishes corresponding commands to the <code>/cmd_vel</code> ROS topic, which the main robot controller subscribes to.</div>
                 </li>
            </ul>
        </li>
        <li>
            <p><b>Control the Cancero Wirelessly:</b></p>
            <ul>
                <li>Go back to the app's home page/main screen.</li>
                <li>Select the mode for using buttons (e.g., "Arrow Keys" or "Buttons & Sliders"). </li>
                <li>Press the configured buttons to control the Cancero's movement.</li>
             </ul>
        </li>
    </ol>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li>
            <p><b>What role does ROS play in this experiment?</b></p>
            <p>ROS enables communication between the Cancero's hardware (via Teensy and rosserial) and software components (like the Bluetooth bridge script and motor controllers), facilitating control and data flow.</p>
        </li>
        <li>
            <p><b>How does the Raspberry Pi contribute to the Cancero's functionality?</b></p>
            <p>The Raspberry Pi runs the main ROS nodes, processes commands received via Bluetooth (through the <code>bluetooth.py</code> script), and sends velocity commands to the Teensy microcontroller via rosserial.</p>
        </li>
        <li>
            <p><b>Why is the Teensy 3.0 with a Bluetooth module important in this setup?</b></p>
            <p>The Teensy directly controls the motors and reads sensor data. The Bluetooth module attached to it receives commands wirelessly from the mobile app, which the Teensy (or Raspberry Pi via rosserial) interprets.</p>
        </li>
        <li>
            <p><b>How does the mobile app enhance user experience?</b></p>
            <p>It provides an intuitive button-based interface for remotely controlling the robot's movement without needing a physical keyboard or joystick connected to the ROS system.</p>
        </li>
        <li>
            <p><b>What is the significance of ROS packages like Cancero3 (assuming <code>Chelonia_ws</code> contains relevant Cancero packages)?</b></p>
            <p>These packages contain pre-built software modules (nodes, launch files, scripts like <code>bluetooth.py</code>) that streamline the setup and provide essential functionalities like motor control, sensor interfacing, and communication bridges.</p>
        </li>
         <li>
            <p><b>How do I establish a Bluetooth connection between the mobile app and the Cancero?</b></p>
            <p>Pair your Android phone with the HC-05 module in the phone's Bluetooth settings (password usually '1234'). Then, open the specific Bluetooth control app, scan for devices, and connect to the HC-05.</p>
        </li>
         <li>
            <p><b>How do I configure the command buttons in the mobile app?</b></p>
            <p>In the app's settings, find the section for configuring buttons (e.g., "Command Button Configuration"). Select a button (like 'A' or 'Up Arrow') and assign the corresponding character ('F' for forward, 'B' for backward, 'L' for left, 'R' for right, 'S' for stop) that the <code>bluetooth.py</code> script expects.</p>
        </li>
         <li>
            <p><b>How do I control the Cancero using the button controller?</b></p>
            <p>After pairing, connecting within the app, and configuring the buttons, go to the app's control screen (e.g., "Buttons & Sliders" or "Arrow Keys"). Pressing the configured buttons will send the associated characters via Bluetooth to the robot.</p>
        </li>
    </ol>
        </>
      ),
    },
                "Switch Controlled Robot with Gripper Functionality": {
      type: "experiment",
      content: (
        <>
     <h3>Objective</h3>
    <p>The objective of this experiment is to control Cancero using switches via the Blueduino mobile app. By executing this code and using the app, you can make the Cancero move forward, backward, turn left, turn right, stop, and move the 2DOF arm in forward and backward directions.</p>

    <h3>Hardware Setup</h3>
    <p>Before running the experiment, ensure that the Cancero hardware is assembled according to the instructions provided in Section 2.1. Additionally, confirm that the Cancero is connected to the Arduino IDE as explained in Section 2.3, and that the pin configurations match those detailed in Section 2.1.</p>
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

    <h3>Libraries:</h3>
    <p>The required libraries for this experiment are:</p>
    <ul>
        <li><b>Servo:</b> Install this library from the Arduino IDE Library Manager.</li>
    </ul>

    <h3>Mobile App Setup</h3>
    <ol>
        <li>Download and install the "Blueduino" app from the Play Store.</li>
        <li>Pair the Bluetooth module (HC-05) with your mobile device (default password usually <code>1234</code> or <code>0000</code>).</li>
    </ol>

    <h3>Usage Instructions</h3>
    <ol>
        <li>Open the "Blueduino" app on your mobile device.</li>
        <li>Connect to the HC-05 Bluetooth module from the list of paired devices.</li>
        <li>Select the <b>switch</b> option within the app.</li>
        <li>Configure the switches and the commands they send in the app's settings. Use the commands below to operate the Cancero:
            <ul>
                <li><code>F</code>: Move forward</li>
                <li><code>B</code>: Move backward</li>
                <li><code>L</code>: Turn left</li>
                <li><code>R</code>: Turn right</li>
                <li><code>S</code>: Stops both motors</li>
                <li><code>U</code>: Move gripper up</li>
                <li><code>D</code>: Move gripper down</li>
                <li><code>O</code>: Open gripper</li>
                <li><code>C</code>: Close gripper</li>
                <li><code>e</code>: Stop servos (if implemented in code)</li>
            </ul>
        </li>
        <li>Use the configured switches to control the robot.</li>
    </ol>

    <h3>Expected Results</h3>
    <p>The Cancero robot operates in response to specific switch-based commands received from the mobile application, enabling precise and controlled movements of the base and the gripper arm.</p>

    <h3>Frequently Asked Questions (FAQs)</h3>
    <ul>
        <li>
            <p><b>Q: Can I use a different Bluetooth app for control?</b></p>
            <p>A: Yes, if the app allows sending single characters like <code>F</code>, <code>B</code>, <code>L</code>, <code>R</code>, <code>S</code>, <code>U</code>, <code>D</code>, <code>O</code>, and <code>C</code> over Bluetooth serial communication.</p>
        </li>
        <li>
            <p><b>Q: How can I modify the code for different motor speeds?</b></p>
            <p>A: Adjust the values assigned to the PWM variable or directly within the <code>analogWrite()</code> functions in the Arduino/Teensy code that control the motor speeds (typically ranging from 0 to 255).</p>
        </li>
        <li>
            <p><b>Q: How do I install the Servo library?</b></p>
            <p>A: Open Arduino IDE -{">"} Sketch -{">"} Include Library -{">"} Manage Libraries... -{">"} Search for "Servo" -{">"} Select the library by Michael Margolis/Arduino -{">"} Click Install.</p>
        </li>
    </ul>
        </>
      ),
    },
  };

    const sampleCodeLinks = {

  "Voice Control Robot with Gripper":"https://github.com/Megararobotics/Cancero/blob/main/Cancer_code.ino",
  "Bluetooth Joystick Control Robot With Gripper":"https://github.com/Megararobotics/Cancero/blob/main/Exp2.ino",
  "Blutooth-Controlled Robotic Vehicle with Gripper Control":"https://github.com/Megararobotics/Cancero/blob/main/Exp3.ino",
  "Pick and Place Robot":"https://github.com/Megararobotics/Cancero/blob/main/Exp4.ino",
  "Computer-Controlled Cancero Robot With Intergrater Gripper":"https://github.com/Megararobotics/Cancero/blob/main/Exp5.ino",
  "Pushing Operation Using Cancero Robot":"https://github.com/Megararobotics/Cancero/blob/main/Exp6.ino",
  "Straight-Line Stacking Experiment Robot":"https://github.com/Megararobotics/Cancero/blob/main/Exp7.ino",
  "Clearing the Path By Moving Obstacles with Cancero Robot Arm":"https://github.com/Megararobotics/Cancero/blob/main/Exp8.ino",
  "Automated Object Retrieval and Relocation System":"https://github.com/Megararobotics/Cancero/blob/main/Exp9.ino",
  "Cancero Control Using Mobile App Terminal":"https://github.com/Megararobotics/Cancero/blob/main/Exp10.ino",
  "Button-Controlled Robot for Precision Gripping Applications":"https://github.com/Megararobotics/Cancero/blob/main/Exp11.ino",
  "Assembling Spread Objects with Cancer Robot":"https://github.com/Megararobotics/Cancero/blob/main/Exp12.ino",
  "Pick and Drag Robot":"https://github.com/Megararobotics/Cancero/blob/main/Exp13.ino",
  "Shape Path Clearing Robot Using ROS":"https://github.com/Megararobotics/Cancero/blob/main/Exp31.ino",

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
  "Voice Control Robot with Gripper",
  "Bluetooth Joystick Control Robot With Gripper",
  "Blutooth-Controlled Robotic Vehicle with Gripper Control",
  "Pick and Place Robot",
  "Computer-Controlled Cancero Robot With Intergrater Gripper",
  "Pushing Operation Using Cancero Robot",
  "Straight-Line Stacking Experiment Robot",
  "Clearing the Path By Moving Obstacles with Cancero Robot Arm",
  "Automated Object Retrieval and Relocation System",
  "Cancero Control Using Mobile App Terminal",
  
];

const intermediateItems = [
  "Button-Controlled Robot for Precision Gripping Applications",
  "Assembling Spread Objects with Cancer Robot",
  "Pick and Drag Robot",
  "Keyboard Controlled Robot Using ROS",
  "Wireless Controlled Robot Using Python Program",
  "ROS Based Joystick Controller",
  "Surveillance Camera Using ROS",
  "Teleoperation Using Camera Feedback in ROS",
  "Human Following Robot Using ROS",
  "ROS Based Master Slave Control",
];

const advancedItems = [
  "Shape Path Clearing Robot Using ROS",
  "Obstacle Based Speed Control Using ROS",
  "Moving Obstacle Avoidance Using ROS",
  "Maze Solving Robot Using ROS",
  "Python Programmed Terminal Controlled Robo Using a Mobile App",
  "Staircase Detection Robot Using ROS",
  "Python Programmed Voice Controlled Robot",
  "Python Programmed Mobile Tilt Controlled Robot",
  "Python Programmed Button Controlled Robot",
  "Switch Controlled Robot with Gripper Functionality",
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
{renderList(intermediateItems, 3)} {/* Only first 3 items have sample code */}

<div className="cm-bar cm-bar-advanced">Advanced</div>
{renderList(advancedItems, 1)} {/* No sample code for advanced items */}

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
