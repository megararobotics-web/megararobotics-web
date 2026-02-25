import React, { useRef } from "react";
import "./B1Experiment.css";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

export default function CheloniaManualA() {
  const topRef = useRef(null); // Top reference for scroll-to-top

  // Centralized content map
  const contentMap = {
    Overview: {
      type: "section",
      content: (
        <>
   <h2>Chelonia LiDAR Robot: Features</h2>
    <ol>
        <li>
            <p><b>Budget-friendly</b></p>
            <p>Chelonia, the budget-friendly robot, was created to suit the needs of schools, labs, and businesses on a tight budget. Chelonia is the most affordable robot in its className, equipped with a 360° LiDAR for mapping.</p>
        </li>
        <li>
            <p><b>It's small!</b></p>
            <p>It's small too! Chelonia measures just 138mm x 178mm x 192mm (L x W x H), making it about a quarter of the size of its predecessor. Imagine carrying Chelonia in your backpack, developing and testing your programs wherever you go.</p>
        </li>
        <li>
            <p><b>Chelonia: Setting the Standard with ROS Integration!</b></p>
            <p>Chelonia follows the ROS standard, managed by Open Robotics, which is the go-to platform for roboticists worldwide. It can easily integrate with existing ROS-based components, making it a perfect starting point for learning ROS.</p>
        </li>
        <li>
            <p><b>Customizable!</b></p>
            <p>You can customize Chelonia's mechanical structure with various options like open-source control boards, computers, and sensors. Chelonia's scalable design allows for endless possibilities.</p>
        </li>
        <li>
            <p><b>Strong sensor lineup!</b></p>
            <p>Chelonia boasts a strong sensor lineup, including LiDAR, Inertial Measurement Units, and encoders for research and development purposes.</p>
        </li>
        <li>
            <p><b>Open-source</b></p>
            <p>And the best part? Chelonia is open-source from hardware to firmware and software. You're free to download, modify, and share its source codes, ensuring endless possibilities for customization and innovation.</p>
        </li>
    </ol>

    <h2>Sensors</h2>
    

        </>
      ),
    },
    "Getting Started": {
      type: "section",
      content: (
        <>
    <h2>Software Setup</h2>

    <h3>Raspberry Pi OS Installation Setup in PC</h3>
    <p>Download and install RPI-IMAGER. ‘Rpi-imager’ is the tool used for flashing the Ubuntu image onto the micro-SD card.</p>
    <p>Install ‘rpi-imager’ using the following command in the terminal:</p>
    <code>sudo apt install rpi-imager</code>
    <p>or</p>
    <code>sudo snap install rpi-imager</code>
    <p>Reference: <a href="https://snapcraft.io/install/rpi-imager/ubuntu" target="_blank">https://snapcraft.io/install/rpi-imager/ubuntu</a></p>

    <h3>Section 1: Setting Up a Raspberry Pi 4 with Ubuntu 20.04 Server</h3>
    <h4>1. Gather Required Materials</h4>
    <ul>
        <li>Raspberry Pi 4 (with power supply)</li>
        <li>microSD card (at least 16GB recommended)</li>
        <li>Card reader</li>
        <li>Computer with internet access</li>
        <li>HDMI cable and monitor</li>
        <li>USB keyboard and mouse</li>
    </ul>

    <h4>2. Download Ubuntu 20.04 Server</h4>
    <p>Visit the official Ubuntu website, select the Ubuntu 20.04 Server image for Raspberry Pi, and download the .img file.</p>

    <h4>3. Prepare the microSD Card</h4>
    <p>Use software like Raspberry Pi Imager or balenaEtcher to flash the downloaded Ubuntu image onto the microSD card.</p>

    <h4>4. Set Up the Raspberry Pi</h4>
    <p>Insert the microSD card, connect peripherals (monitor, keyboard), and power on the Raspberry Pi. The default login is <b>Username:</b> ubuntu, <b>Password:</b> ubuntu. You will be prompted to change the password on first login.</p>

    <h3>Section 2: Configuring Wi-Fi on Ubuntu Server</h3>
    <p>Edit the Netplan configuration file to add your Wi-Fi details. The file is located at <code>/etc/netplan/50-cloud-init.yaml</code>. After editing, apply the changes with <code>sudo netplan apply</code>.</p>

    <h3>Section 3: Steps for SSH Access</h3>
    <p>Enable SSH on the Raspberry Pi, find its IP address using <code>ip a</code>, and connect from another computer using <code>ssh ubuntu@&lt;Raspberry_Pi_IP_Address&gt;</code>.</p>

    <h3>Section 4: ROS Installation</h3>
    <p>This section covers installing ROS Noetic on Ubuntu 20.04.</p>
    <ol>
        <li>Configure Ubuntu repositories to allow "restricted," "universe," and "multiverse."</li>
        <li>Setup your sources.list to accept software from <code>packages.ros.org</code>.</li>
        <li>Set up your keys.</li>
        <li>Install the full desktop version (Recommended): <code>sudo apt install ros-noetic-desktop-full</code>.</li>
        <li>Set up your environment by sourcing <code>/opt/ros/noetic/setup.bash</code>.</li>
        <li>Install dependencies for building packages: <code>sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential</code>.</li>
        <li>Initialize rosdep: <code>sudo rosdep init</code> and then <code>rosdep update</code>.</li>
    </ol>

    <h3>Section 5: Installing PlatformIO on Ubuntu Server 20.04</h3>
    <p>Install prerequisites like <code>python3-pip</code>, then install PlatformIO using <code>pip3 install platformio</code>. Verify the installation and add it to your PATH.</p>

    <h2>Hardware Assembly</h2>
    <div className="note">
        <p><b>Placeholder:</b> Insert assembly video or CAD model here.</p>
    </div>

    <h3>Components</h3>
    <ul>
        <li>Teensy 3.0</li>
        <li>Raspberry Pi</li>
        <li>L298N Motor Driver</li>
        <li>DC Motors (2)</li>
        <li>Wheels (2)</li>
        <li>Battery</li>
        <li>Connectors</li>
    </ul>

    <h3>Hardware Connection Diagram</h3>
    <p>Refer to the attached hardware connection diagram. Chelonia A is the circuit diagram to be referred.</p>
    <div className="note">
        <p><b>Placeholder:</b> Link to Hardware Connection Diagram.</p>
    </div>

    <h3>Section 6: Firmware Installation Setup</h3>
    <p>There are two types of firmware used in the Chelonia bot. Please install the required firmware for each experiment as specified in the experiment guide.</p>
    
    <h4>Uploading Linorobot Firmware to Teensy with PlatformIO</h4>
    <ol>
        <li>Download the Linorobot package: <code>git clone https://github.com/linorobot/linorobot.git</code></li>
        <li>Navigate to the <code>firmware</code> folder.</li>
        <li>Install dependencies: <code>platformio run</code></li>
        <li>Connect the Teensy to your Raspberry Pi.</li>
        <li>Confirm the port and board settings in <code>platformio.ini</code>.</li>
        <li>Upload the firmware: <code>pio run –t upload</code></li>
    </ol>
        </>
      ),
    },
    "Keyboard Controlled Robot": {
      type: "experiment",
      content: (
        <>
   <h2>Teleoperation with Keyboard</h2>

    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Control the Chelonia with a Keyboard</li>
    </ul>
    
    

    <h3>INSTALLATION (Do this only for the first time):</h3>
    <ol>
        <li>SSH into the Raspberry Pi with its IP address: <code>ssh username@ip</code></li>
        <li>Install rosserial-python: <code>sudo apt-get install ros-noetic-rosserial-python</code></li>
        <li>Install teleop-twist-keyboard: <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code></li>
        <li>Navigate to your workspace: <code>cd chelonia_ws</code></li>
        <li>Clean the workspace: <code>rm -r build devel</code></li>
        <li>Build the workspace: <code>catkin_make</code></li>
        <li>Source the setup file: <code>source devel/setup.bash</code></li>
    </ol>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>
    <h4>STEP 1: Platform IO Installation</h4>
    <p>(Do this if not already installed). Follow the general steps for installing PlatformIO on Ubuntu.</p>

    <h4>STEP 2: Teensy Firmware Upload & Raspberry Pi Setup</h4>
    <p>(This is a one-time setup). Follow the general steps for uploading the Teensy firmware, configuring the Raspberry Pi, and setting up the ROS workspace.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry Pi</h4>
    <p>In a new terminal on your laptop:</p>
    <ol>
        <li>SSH into the Raspberry Pi: <code>ssh username@ip</code></li>
        <li>Navigate to the workspace: <code>cd chelonia_ws</code></li>
        <li>Source the setup file: <code>source devel/setup.bash</code></li>
        <li>Launch the bringup file: <code>roslaunch linorobot bringup.launch</code></li>
    </ol>

    <h4>STEP 4: Setup for Keyboard Control</h4>
    <p>Run the Teleop Twist Keyboard package in a <b>new SSH terminal</b> on your laptop:</p>
    <ol>
        <li>SSH into the Raspberry Pi: <code>ssh username@ip</code></li>
        <li>Navigate to the workspace: <code>cd chelonia_ws</code></li>
        <li>Source the setup file: <code>source devel/setup.bash</code></li>
        <li>Run the teleop node: <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code></li>
    </ol>
    <p>Control the robot by following the commands shown on the screen.</p>

    <h3>Frequently Asked Questions:</h3>
    <ol>
        <li><b>What is ROS Noetic, and why is it used in this experiment?</b>
            <p>ROS Noetic is a version of the Robot Operating System (ROS) designed for Ubuntu 20.04. It's used in this experiment for its compatibility with the required packages and dependencies.</p>
        </li>
        <li><b>Why is a Raspberry Pi with Ubuntu Server needed for the Chelonia?</b>
            <p>The Raspberry Pi serves as a companion computer for offloading computational tasks from the main device. It's crucial for running ROS nodes and enabling communication with the Chelonia.</p>
        </li>
        <li><b>What is the purpose of the Teensy 3.0 with Bluetooth module?</b>
            <p>The Teensy 3.0 with a Bluetooth module facilitates wireless communication between the laptop and the Chelonia, enabling remote control and data exchange.</p>
        </li>
        <li><b>How does teleoperation play a role in this experiment?</b>
            <p>Teleoperation allows users to control the Chelonia remotely using keyboard commands from the laptop. It's essential for testing and controlling the robot without physical proximity.</p>
        </li>
        <li><b>What steps are involved in setting up the ROS workspace on the Raspberry Pi?</b>
            <p>The steps include SSH'ing into the Raspberry Pi, navigating to the ROS workspace directory, rebuilding the workspace with catkin_make, sourcing the setup script, and launching the necessary ROS nodes.</p>
        </li>
        <li><b>How can errors during setup be addressed?</b>
            <p>If errors occur, review the instructions carefully, ensure all prerequisites are met, and check hardware connections. If issues persist, seek solutions from online forums or the ROS community.</p>
        </li>
        <li><b>Can keyboard commands for controlling the Chelonia be customized?</b>
            <p>Yes, keyboard commands can be customized by modifying the configuration file of the Teleop Twist Keyboard package to tailor the control scheme to specific preferences.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Wireless Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h2>Mobile App Controlled Robot</h2>

    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Chelonia package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Chelonia</li>
        <li>Control the Chelonia with a button control interface in the mobile app</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform IO Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu. Instruction link: Platform IO Installation</p>

    <h4>STEP 2: Teensy Firmware Upload, Raspberry Pi & ROS Workspace Setup (one-time setup)</h4>
    <p>Follow the general steps for the Teensy firmware uploading, Raspberry Pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry Pi</h4>
    <p>On your laptop:</p>
    <ol>
        <li>SSH into the Raspberry Pi: <code>ssh username@ip</code></li>
        <li>Install rosserial-python: <code>sudo apt-get install ros-noetic-rosserial-python</code></li>
        <li>Navigate to your workspace: <code>cd chelonia_ws</code></li>
        <li>Clean the workspace: <code>rm –r build devel</code></li>
        <li>Build the workspace: <code>catkin_make</code></li>
        <li>Source the setup file: <code>source devel/setup.bash</code></li>
    </ol>

    <h4>STEP 4: Setup the Mobile App</h4>
    <ol>
        <li>Install the app on your Android device</li>
        <li><b>Connect the device with Bluetooth:</b> Open Bluetooth settings, pair with a new device, select "HC05", and use the password "1234".</li>
        <li>Open the app, select your device ("HC05"). </li>
        <li><b>Configure Keys:</b> Go to settings - key configuration and set the following:
            <ul>
                <li>UP: 'F'</li>
                <li>DOWN: 'B'</li>
                <li>RIGHT: 'R'</li>
                <li>LEFT: 'L'</li>
            </ul>
        </li>
        <li><b>Run Bluetooth script on Raspberry Pi:</b> Open a new terminal:</li>
        <code>cd chelonia_ws</code>
        <code>source devel/setup.bash</code>
        <code>cd src/linorobot/scripts</code>
        <code>python3 bluetooth.py</code>
        <li><b>Control the Chelonia wirelessly:</b> Go to the app's home page and select the arrow key interface. </li>
        <li>Use the control keys to operate the Chelonia.</li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What role does ROS play in this experiment?</b>
            <p>ROS enables communication between the Chelonia's hardware and software, facilitating control, sensor data processing, and integration of different modules.</p>
        </li>
        <li><b>How does the Raspberry Pi contribute to the Chelonia's functionality?</b>
            <p>The Raspberry Pi processes sensory data, executes control algorithms, and communicates with external devices, enabling autonomous or teleoperated operation.</p>
        </li>
        <li><b>Why is the Teensy 3.0 with a Bluetooth module important in this setup?</b>
            <p>It enables wireless communication between the mobile app and the Chelonia, translating control commands into actionable instructions for the robot's actuators.</p>
        </li>
        <li><b>How does the mobile app enhance user experience?</b>
            <p>It provides an intuitive interface for remote control, mapping directional commands to specific keys or buttons for easy maneuvering.</p>
        </li>
        <li><b>What is the significance of ROS packages like Chelonia3?</b>
            <p>These pre-built software modules streamline setup, integration, and provide high-level functionalities essential for building advanced robotic systems like the Chelonia.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Terminal Controlled Using Mobile App": {
      type: "experiment",
      content: (
        <>
    <h2>Terminal Controlled Using Mobile App</h2>

    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu Server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Control the Chelonia with terminal commands from a mobile app</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform IO Installation (if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>

    <h4>STEP 2: Teensy Firmware Upload, Raspberry Pi & ROS Workspace Setup (one-time setup)</h4>
    <p>Follow the general steps for the Teensy firmware uploading, Raspberry Pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry Pi</h4>
    <p>On your laptop, open a terminal:</p>
    <ol>
        <li>SSH into the Raspberry Pi: <code>ssh username@ip</code></li>
        <li>Install rosserial-python: <code>sudo apt-get install ros-noetic-rosserial-python</code></li>
        <li>Navigate to your workspace: <code>cd chelonia_ws</code></li>
        <li>Clean the workspace: <code>rm –r build devel</code></li>
        <li>Build the workspace: <code>catkin_make</code></li>
        <li>Source the setup file: <code>source devel/setup.bash</code></li>
        <li>Launch the bringup file: <code>roslaunch linorobot bringup.launch</code></li>
    </ol>
    <p>In a <b>new terminal</b>:</p>
    <ol start="8">
        <li>Navigate to your workspace: <code>cd chelonia_ws</code></li>
        <li>Source the setup file: <code>source devel/setup.bash</code></li>
        <li>Navigate to the scripts folder: <code>cd src/linorobot/scripts</code></li>
        <li>Run the Bluetooth script: <code>python3 bluetooth.py</code></li>
    </ol>
    
    <h4>STEP 4: Setup the Mobile APP for Terminal Controlling</h4>
    <ol>
        <li>Install the app on your Android device</li>
        <li><b>Connect the device with Bluetooth:</b> Open Bluetooth settings, pair with a new device, select "HC05", and use the password "1234".</li>
        <li>Open the app and select your device ("HC05").</li>
        <li><b>Control the Chelonia with commands:</b> Go to the app's home page and select the command prompt icon. </li>
        <li>Now you can control the Chelonia by typing the following commands:
            <ul>
                <li>Type <b>F</b> for moving forward</li>
                <li>Type <b>B</b> for moving backward</li>
                <li>Type <b>L</b> for moving left</li>
                <li>Type <b>R</b> for moving right</li>
                <li>Type <b>S</b> for stopping</li>
            </ul>
        </li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the goal of this experiment?</b>
            <p>The goal is to set up and control a Chelonia robot using terminal commands via a mobile app.</p>
        </li>
        <li><b>What equipment is required for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, the Linorobot package, Ubuntu 20.04, a Raspberry Pi with Ubuntu Server, Chelonia hardware, and a Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I set up the mobile app for controlling the Chelonia?</b>
            <p>Install the provided Android app, pair it with the HC05 Bluetooth device (password: 1234), and select HC05 in the app. Then, use the command prompt icon to control the Chelonia by typing commands.</p>
        </li>
        <li><b>What should I do if I encounter errors during setup?</b>
            <p>Double-check your setup and follow the instructions carefully. If errors persist, consult the provided resources or seek assistance from instructors or online forums.</p>
        </li>
        <li><b>Where can I find detailed instructions for specific set-up steps?</b>
            <p>Detailed instructions for PlatformIO installation, Teensy firmware upload, Raspberry Pi configuration, and ROS workspace setup can be found in the provided links and documentation.</p>
        </li>
    </ol>
        </>
      ),
    },

    "Mobile Tilt Controlled Chelonia": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Linorobot Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Control the Chelonia with a tilting mobile phone</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform IO Installation (do if not installed)</h4>
    <p>Follow the general steps for installing PlatformIO on Ubuntu.</p>

    <h4>STEP 2: Teensy Firmware Upload, Setup Configure Raspberry Pi, ROS Workspace (one-time setup)</h4>
    <p>Follow the general steps for the Teensy firmware uploading, Raspberry Pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS Workspace in Raspberry Pi</h4>
    <p>For this, you will need to open multiple terminals and SSH into your Raspberry Pi.</p>
    
    <p><b>In the first terminal:</b></p>
    <ol>
        <li>SSH into the Raspberry Pi: <code>ssh username@ip</code></li>
        <li>Install rosserial-python: <code>sudo apt-get install ros-noetic-rosserial-python</code></li>
        <li>Navigate to your workspace: <code>cd chelonia_ws</code></li>
        <li>Clean and build the workspace:
            <code>rm -r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the setup file: <code>source devel/setup.bash</code></li>
        <li>Launch the bringup file: <code>roslaunch linorobot bringup.launch</code></li>
    </ol>
    
    <p><b>In a new (second) terminal:</b></p>
    <ol>
         <li>SSH into the Raspberry Pi: <code>ssh username@ip</code></li>
         <li>Navigate to your workspace: <code>cd chelonia_ws</code></li>
         <li>Source the setup file: <code>source devel/setup.bash</code></li>
         <li>Navigate to the scripts folder: <code>cd src/linorobot/scripts</code></li>
         <li>Run the Bluetooth script: <code>python3 bluetooth.py</code></li>
    </ol>

    <h4>STEP 4: Setup the Mobile APP for Tilt Controlling</h4>
    <ol>
        <li>Install the app on your mobile (Android).</li>
        <li><b>Connect the device with Bluetooth:</b>
            <p>Open Bluetooth settings - Pair new device - select HC05 - password: <b>1234</b></p>
        </li>
        <li>Then open the app and select your device ("HC05").</li>
        <li>Next, go to <b>Settings - Accelerometer - Direction configuration</b> and set the following:
            <ul>
                <li>Select UP then put ‘F’ - Then click OK</li>
                <li>Select DOWN then put ‘B’ - Then click OK</li>
                <li>Select LEFT then put ‘L’ - Then click OK</li>
                <li>Select RIGHT then put ‘R’ -Then click OK</li>
            </ul>
        </li>
        <li><b>Control the Chelonia by tilting the phone:</b>
            <p>Go to the home page and select "Accelerometer." </p>
        </li>
        <li>Now you can control the Chelonia with your mobile phone by tilting it.</li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The objective is to set up a Chelonia for teleoperation and control it using tilting motions of a mobile phone.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, Linorobot Package, Ubuntu 20.04, a Raspberry Pi with Ubuntu Server, Chelonia hardware, and a Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I set up the mobile app for tilt controlling?</b>
            <p>Install the provided Android app on your mobile device, pair it with the HC05 Bluetooth device (password: 1234), and configure the accelerometer directions to correspond with movements (up for forward, down for backward, left for left, and right for right).</p>
        </li>
        <li><b>What should I do if I encounter errors during the setup process?</b>
            <p>If you encounter any errors during the setup, ensure that you follow each step carefully. Double-check connections, configurations, and software installations. If problems persist, refer to the provided resources or seek assistance from instructors or online forums.</p>
        </li>
        <li><b>How do I control the Chelonia using my mobile phone's tilting motion?</b>
            <p>After setting up the mobile app and configuring the accelerometer directions, navigate to the home page and access the accelerometer feature. Tilt your phone in the desired direction to control the Chelonia accordingly.</p>
        </li>
    </ol>
        </>
      ),
    },
    "ROS - Based Joystick Controller": {
      type: "experiment",
      content: (
        <>
    <h2>Mobile Tilt Controlled Chelonia</h2>

    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Control the Chelonia with Tilting mobile phone</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform Io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, raspberry pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    
    <p><b>In the first terminal:</b></p>
    <ol>
        <li>ssh the raspberry pi with its IP address:
            <code>Ssh username@ip</code>
        </li>
        <li>Install rosserial-python (for Teensy-ROS communication):
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
        </li>
        <li>Navigate to your workspace:
            <code>cd chelonia_ws</code>
        </li>
        <li>Clean and build the workspace:
            <code>rm –r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the setup file:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch the bringup file:
            <code>Roslaunch linorobot bringup.launch</code>
        </li>
    </ol>
    
    <p><b>In a new (second) terminal:</b></p>
    <ol>
         <li>Navigate to your workspace:
             <code>cd chelonia_ws</code>
         </li>
         <li>Source the setup file:
             <code>source devel/setup.bash</code>
         </li>
         <li>Navigate to the scripts folder:
             <code>cd src/linorobot/scripts</code>
         </li>
         <li>Run the Bluetooth script:
             <code>Python3 bluetooth.py</code>
         </li>
    </ol>

    <h4>STEP 4: Setup the Mobile APP for tilt controlling</h4>
    <ol>
        <li>Install the following app on mobile (android).</li>
        <li><b>Connect the device with Bluetooth:</b>
            <p>Open Bluetooth settings- pair new device- select HC05- password: <b>1234</b></p>
        </li>
        <li>Then open app- select device -HC05.</li>
        <li>Then open <b>settings-accelerometer-. Direction configuration-</b>
            <ul>
                <li>select up then put ‘F’ - Then click ok</li>
                <li>select down then put ‘B’ - Then click ok</li>
                <li>select left then put ‘L’ - Then click ok</li>
                <li>select right then put ‘R’ - Then click ok</li>
            </ul>
        </li>
        <li><b>Control the Chelonia by tilting phone:</b>
            <p>Go to home page and select Accelerometer.</p>
        </li>
        <li>Now you can control the Chelonia with Mobile phone by Tilting.</li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The objective is to set up a Chelonia for teleoperation and control it using tilting motions of a mobile phone.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I set up the mobile app for tilt controlling?</b>
            <p>Install the provided Android app on your mobile device, pair it with the HC05 Bluetooth device (password: 1234) and configure the accelerometer directions to correspond with movements (up for forward, down for backward, left for right, and right for left). Detailed instructions can be found in the provided link.</p>
        </li>
        <li><b>What should I do if I encounter errors during the setup process?</b>
            <p>If you encounter any errors during the setup, ensure that you follow each step carefully. Double-check connections, configurations, and software installations. If problems persist, refer to the provided resources or seek assistance from instructors or online forums.</p>
        </li>
        <li><b>How do I control the Chelonia using my mobile phone's tilting motion?</b>
            <p>After setting up the mobile app and configuring the accelerometer directions, navigate to the home page and access the accelerometer feature. Tilt your phone in the desired direction to control the Chelonia accordingly. For reference, you can consult the provided link.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Button Controlled Robot": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Chelonia</li>
        <li>Control the Chelonia with a button control interface in the mobile app</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, raspberry pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address:
            <code>Ssh username@ip</code>
        </li>
        <li>Install rosserial-python (for Teensy-ROS communication):
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
        </li>
        <li>Navigate to your workspace:
            <code>cd chelonia_ws</code>
        </li>
        <li>Clean and build the workspace:
            <code>rm –r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the setup file:
            <code>source devel/setup.bash</code>
        </li>
        <li>Launch the bringup file:
            <code>Roslaunch linorobot bringup.launch</code>
        </li>
    </ol>

    <h4>STEP 4: Setup the mobile APP</h4>
    <ol>
        <li>Install the following app on mobile (android): [Link]</li>
        <li><b>Connect the device with Bluetooth:</b>
            <p>Open Bluetooth settings-{">"} pair new device-{">"} select HC05-{">"} password: <b>1234</b></p>
        </li>
        <li>Then open app-{">"} select device -{">"}HC05 [view image]</li>
        <li>Then open <b>settings-{">"}command button configuration -{">"}</b>
            <ul>
                <li>select button A then put ‘F’ -{">"} Then click ok</li>
                <li>select button B then put ‘B’ -{">"} Then click ok</li>
                <li>select button C then put ‘R’ -{">"} Then click ok</li>
                <li>select button D then put ‘L’ -{">"} Then click ok</li>
            </ul>
        </li>
    </ol>
    
    <p><b>Open a new terminal on your laptop:</b></p>
    <ol>
        <li>ssh the raspberry pi with its IP address:
            <code>Ssh username@ip</code>
        </li>
        <li>Install rosserial-python (if not already done):
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
        </li>
        <li>Navigate to your workspace:
            <code>cd chelonia_ws</code>
        </li>
        <li>Clean and build the workspace:
            <code>rm –r build devel</code>
            <code>catkin_make</code>
        </li>
        <li>Source the setup file:
            <code>source devel/setup.bash</code>
        </li>
        <li>Navigate to the scripts folder:
            <code>cd src/ linorobot/scripts</code>
        </li>
        <li>Run the Bluetooth script:
            <code>Python3 bluetooth.py</code>
        </li>
    </ol>

    <p><b>Control the Chelonia with Button controller:</b></p>
    <ul>
        <li>Go to home page and select buttons & sliders. </li>
        <li>Control the Chelonia with the buttons.</li>
    </ul>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The objective is to set up a Chelonia package for teleoperation and control the Chelonia using a button control interface in a mobile app.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I establish a Bluetooth connection between the mobile app and the Chelonia?</b>
            <p>Install the provided Android app on your mobile device, pair it with the HC05 Bluetooth device (password: 1234), and select HC05 within the app. Detailed instructions can be found in the provided link.</p>
        </li>
        <li><b>How do I configure the command buttons in the mobile app?</b>
            <p>Open the app and navigate to settings, then command button configuration. Assign commands to each button (e.g., forward, backward, left, right) by selecting the button and entering the corresponding command. Follow the provided instructions carefully.</p>
        </li>
        <li><b>How do I control the Chelonia using the button controller?</b>
            <p>After setting up the mobile app and configuring the button commands, navigate to the home page and select buttons & sliders. Use the assigned buttons to control the Chelonia's movements accordingly.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Surveillance Using Camera": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>PC or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry Pi with Ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Chelonia</li>
        <li>Implement Camera Surveillance robot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, raspberry pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Connect camera with Raspberry pi</h4>
    <p>With reference to the video mentioned connect the raspi cam to raspberry pi. </p>

    <h4>STEP 4: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    
    <p><b>In the first terminal:</b></p>
    <ol>
        <li>Open a new terminal, ssh the raspberry pi with its IP address:
            <code>Ssh username@ip</code>
        </li>
        <li>Now go to the workspace and execute the launch file. Install necessary packages:
            <code>sudo pip install picamera</code>
            <code>sudo apt-get install libraspberrypi-dev</code>
            <code>sudo apt-get install ros-noetic-compressed-image-transport</code>
            <code>sudo apt-get install libopencv-dev libwiringpi-dev</code>
            <code>sudo apt-get install ros-noetic-image-common</code>
            <code>sudo apt-get install ros-noetic-image-view</code>
            <code>sudo apt-get install ros-noetic-rqt-image-view</code>
        </li>
        <li>Navigate to your workspace and launch the camera node:
            <code>cd chelonia_ws</code>
            <code>source devel/setup.bash</code>
            <code>roslaunch raspicam_node camerav2_410x308_30fps.launch</code>
        </li>
        <li>It will launch the camera capturing package in raspberry pi.</li>
    </ol>
    
    <p><b>In a new (second) terminal:</b></p>
    <ol>
        <li>Open a new terminal, ssh the raspberry pi with its IP address:
            <code>Ssh username@ip</code>
        </li>
        <li>Now go to the workspace and execute the launch file:
            <code>cd chelonia_ws</code>
            <code>source devel/setup.bash</code>
            <code>rosrun rqt_image_view rqt_image_view</code>
        </li>
        <li>Now you can view the live visuals from the camera in your screen remotely.</li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS</h3>
    <ol>
        <li><b>How do I set up Chelonia for teleoperation?</b>
            <p>Install ROS Noetic and the Package. Configure it as per documentation. Use teleoperation nodes for remote control.</p>
        </li>
        <li><b>What are the basic components of a robot and how do they function?</b>
            <p>Robots have a power source, actuators (like motors), sensors, a controller, and a communication interface. Actuators enable movement, sensors gather data about the environment, the controller processes information, and the communication interface facilitates external interaction.</p>
        </li>
        <li><b>How can I control Chelonia with the mobile app's button interface?</b>
            <p>Establish a Bluetooth connection between the app and Chelonia. Then, use the app's button controls to send commands, such as forward, backward, or turning.</p>
        </li>
        <li><b>What's the process for installing Platform io on Ubuntu?</b>
            <p>Ensure Python is installed, then use pip to install Platform io. Add it to your system PATH for command line access. Verify the installation with a command like <code>platformio --version</code>.</p>
        </li>
        <li><b>How do I remotely view live camera visuals?</b>
            <p>SSH into the Raspberry Pi, navigate to the ROS workspace, and launch the camera capture package. Then, in another terminal, use ax<code>rosrun rqt_image_view rqt_image_view</code> to view the live stream. Ensure a stable network connection for remote viewing.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Teleoperation Using Camera Feedback": {
      type: "experiment",
      content: (
        <>
      <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Chelonia</li>
        <li>Implement Teleoperated Camera Surveillance robot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>
    <p>Instruction link: platform io Installation</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, raspberry pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    
    <p><b>In the first terminal:</b></p>
    <ol>
        <li>Open new terminal, ssh the raspberry pi with its IP address:
            <code>Ssh username@ip -X</code>
        </li>
        <li>Now go to the workspace and execute the launch file. Install necessary packages:
            <code>sudo pip install picamera</code>
            <code>sudo apt-get install libraspberrypi-dev</code>
            <code>sudo apt-get install ros-noetic-compressed-image-transport</code>
            <code>sudo apt-get install libopencv-dev libwiringpi-dev</code>
            <code>sudo apt-get install ros-noetic-image-common</code>
            <code>sudo apt-get install ros-noetic-image-view</code>
            <code>sudo apt-get install ros-noetic-rqt-image-view</code>
        </li>
        <li>Navigate to your workspace and launch the camera node:
            <code>cd chelonia_ws</code>
            <code>source devel/setup.bash</code>
            <code>roslaunch raspicam_node camerav2_410x308_30fps.launch</code>
        </li>
        <li>It will launch the camera capturing package in raspberry pi.</li>
    </ol>
    
    <p><b>In a new (second) terminal:</b></p>
    <ol>
        <li>Open new terminal, ssh the raspberry pi with its IP address:
            <code>Ssh username@ip</code>
        </li>
        <li>Now go to the workspace and execute the launch file:
            <code>cd chelonia_ws</code>
            <code>source devel/setup.bash</code>
            <code>rosrun rqt_image_view rqt_image_view</code>
        </li>
        <li>Now you can view the live visuals from the camera in your screen remotely.</li>
    </ol>

    <h4>STEP 4: Now move the robot with teleop command</h4>
    <p><b>In a new (third) terminal:</b></p>
    <ol>
        <li>Open new terminal, ssh the raspberry pi with its IP address:
            <code>Ssh username@ip</code>
        </li>
        <li>Run the teleoperation command:
            <code>Sudo apt-get install ros-noetic- teleop-twist-keyboard</code>
            <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
        </li>
        <li>Control the robot by the commands shown in the screen.</li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What are the main components needed for setting up teleoperation using camera feedback?</b>
            <p>The main components include a PC or laptop with ROS Noetic, a Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and a Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>What are the objectives of this experiment?</b>
            <p>The objectives include setting up the Chelonia package for teleoperation, understanding the basic components of a robot, establishing a reliable Bluetooth connection between a mobile app and the Chelonia, and controlling the Chelonia using a button control interface in the mobile app.</p>
        </li>
        <li><b>How do I launch the ROS workspace on the Raspberry Pi and view live camera visuals remotely?</b>
            <p>SSH into the Raspberry Pi, navigate to the ROS workspace directory, and execute the launch file for the camera capturing package. Then, SSH into the Raspberry Pi again, navigate to the workspace directory, and run the command to view the live camera visuals using rqt_image_view.</p>
        </li>
        <li><b>How do I move the robot using teleoperation commands?</b>
            <p>After SSH into the Raspberry Pi, navigate to the workspace directory, and run the teleoperation command to control the robot remotely.</p>
        </li>
        <li><b>What if I encounter issues with establishing the Bluetooth connection or controlling the robot remotely?</b>
            <p>If you encounter any issues, refer to the troubleshooting section in the provided instructions or seek help from the community forums or support channels related to ROS and Chelonia.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Human Following Robot": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot</li>
        <li>Establish a reliable Bluetooth connection between the mobile app and the Chelonia</li>
        <li>Implement Teleoperated Camera Surveillance robot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, raspberry pi configuration, and ROS workspace setup</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ul>
        <li>Open new terminal, ssh the raspberry pi with its IP address
            <code>Ssh username@ip -X</code>
        </li>
        <li>Now go to the workspace and execute the launch file
            <code>sudo pip install picamera</code>
            <code>sudo apt-get install libraspberrypi-dev</code>
            <code>sudo apt-get install ros-noetic-compressed-image-transport</code>
            <code>sudo apt-get install libopencv-dev libwiringpi-dev</code>
            <code>sudo apt-get install ros-noetic-image-common</code>
            <code>sudo apt-get install ros-noetic-image-view</code>
            <code>sudo apt-get install ros-noetic-rqt-image-view</code>
            <code>cd chelonia_ws</code>
            <code>source devel/setup.bash</code>
            <code>roslaunch raspicam_node camerav2_410x308_30fps.launch</code>
        </li>
        <li>It will launch the camera capturing package in raspberry pi</li>
        <li>Open new terminal, ssh the raspberry pi with its IP address
            <code>Ssh username@ip</code>
        </li>
        <li>Now go to the workspace and execute the launch file
            <code>cd chelonia_ws</code>
            <code>source devel/setup.bash</code>
            <code>rosrun rqt_image_view rqt_image_view</code>
        </li>
        <li>Now you can view the live visuals from the camera in your screen remotely</li>
    </ul>

    <h4>STEP 4: Now move the robot with teleop command</h4>
    <ul>
        <li>Open new terminal, ssh the raspberry pi with its IP address
            <code>Ssh username@ip</code>
        </li>
        <li>Run the teleoperation command
            <code>Sudo apt-get install ros-noetic- teleop-twist-keyboard</code>
            <code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code>
        </li>
        <li>Control the robot by the commands shown in the screen</li>
    </ul>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What are the main components needed for setting up teleoperation using camera feedback?</b>
            <p>The main components include a PC or laptop with ROS Noetic, a Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and a Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>What are the objectives of this experiment?</b>
            <p>The objectives include setting up the Chelonia package for teleoperation, understanding the basic components of a robot, establishing a reliable Bluetooth connection between a mobile app and the Chelonia, and controlling the Chelonia using a button control interface in the mobile app.</p>
        </li>
        <li><b>How do I launch the ROS workspace on the Raspberry Pi and view live camera visuals remotely?</b>
            <p>SSH into the Raspberry Pi, navigate to the ROS workspace directory, and execute the launch file for the camera capturing package. Then, SSH into the Raspberry Pi again, navigate to the workspace directory, and run the command to view the live camera visuals using rqt_image_view.</p>
        </li>
        <li><b>How do I move the robot using teleoperation commands?</b>
            <p>After SSH into the Raspberry Pi, navigate to the workspace directory, and run the teleoperation command to control the robot remotely.</p>
        </li>
        <li><b>What if I encounter issues with establishing the Bluetooth connection or controlling the robot remotely?</b>
            <p>If you encounter any issues, refer to the troubleshooting section in the provided instructions or seek help from the community forums or support channels related to ROS and Chelonia.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Staircase Detection Robot": {
      type: "experiment",
      content: (
        <>
     <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot</li>
        <li>Implement a Staircase detection robot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, raspberry pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    
    <p><b>Launch the bringup.launch</b></p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>Ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>sudo apt-get install ros-noetic-rosserial-python</code></li>
        <li>It will launch rosserial-python (teensy communication with ros)</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>Roslaunch linorobot bringup.launch</code></li>
    </ol>
    
    <p><b>Give execution permission to the python launch file</b></p>
    <ol>
        <li>Open terminal, ssh the raspberry pi from laptop using IP address of raspberry pi
            <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>cd chelonia_ws/src/linorobot/scripts</code></li>
        <li><code>sudo chmod +x staircase_detection.py</code></li>
    </ol>

    <p><b>Launch the staircase handler node</b></p>
    <ol>
        <li>Open terminal, ssh the raspberry pi from laptop using IP address of raspberry pi
            <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>cd chelonia_ws/</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rosrun linorobot staircase_detection.py</code></li>
        <li>if down displacement &lt; 5 it moves forward</li>
        <li>if distance to human is &gt; 5 it will stop movement (staircase detected)</li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The objective is to set up a Chelonia package for teleoperation and implement a staircase detection robot, which can detect staircases and stop movement to prevent falls.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
    </ol>
        </>
      ),
    },
    "ROS Based Master Slave Control": {
      type: "experiment",
      content: (
        <>
      <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Control the Chelonia with Keyboard in ROS master slave setup</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, raspberry pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>Ssh username@ip</code>
        </li>
        <li><code>sudo apt-get install ros-noetic-rosserial-python</code></li>
        <li>It will launch rosserial-python (teensy communication with ros)</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>Roslaunch linorobot bringup.launch</code></li>
    </ol>
    
    <h4>STEP 4: Setup the Laptop for the Keyboard controlling</h4>
    <p>Run Teleop Twist Keyboard package in Laptop</p>
    <p>To control the Chelonia, use the package Teleop Twist Keyboard in laptop</p>
    <ol>
        <li><code>Cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code></li>
        <li>Control the robot by the commands shown in the screen</li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The objective is to set up a Chelonia for teleoperation and implement a master-slave control system using ROS, where the robot can be controlled via keyboard commands from a laptop.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I set up the ROS workspace and launch the necessary nodes?</b>
            <p>Follow the provided instructions to set up the ROS workspace on the Raspberry Pi and launch the necessary nodes, including bringing up the ROS workspace and installing rosserial-python if needed.</p>
        </li>
        <li><b>How do I set up the laptop for keyboard control of the Chelonia?</b>
            <p>Run the Teleop Twist Keyboard package on the laptop by navigating to the ROS workspace directory (chelonia_ws), building the workspace using catkin_make, sourcing the setup file, and running the teleop_twist_keyboard.py script. Use the keyboard commands displayed on the screen to control the robot.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Shape Path Crafting Robot": {
      type: "experiment",
      content: (
        <>
      <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot</li>
        <li>Implement shape path crafting robot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, Raspberry Pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    
    <p><b>Launch the bringup.launch</b></p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>Ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>sudo apt-get install ros-noetic-rosserial-python</code></li>
        <li>It will launch rosserial-python (teensy communication with ros)</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>roslaunch linorobot bringup.launch</code></li>
    </ol>
    
    <p><b>Give execution permission to the python launch file</b></p>
    <ol>
        <li>Open terminal, ssh the raspberry pi from laptop using IP address of raspberry pi
            <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>cd chelonia_ws/src/linorobot/scripts</code></li>
        <li><code>sudo chmod +x shape_follow.py</code></li>
    </ol>

    <p><b>Launch the shape follower node</b></p>
    <ol>
        <li>Open terminal, ssh the raspberry pi from laptop using IP address of raspberry pi
            <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>cd chelonia_ws/</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rosrun linorobot shape_follow.py</code></li>
        <li>It will handle opens a mode selector and you can choose that in which shape the robot need to move [click here]</li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The objective is to set up a Chelonia for teleoperation and implement a master-slave control system using ROS, where the robot can be controlled via keyboard commands from a laptop.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I set up the ROS workspace and launch the necessary nodes?</b>
            <p>Follow the provided instructions to set up the ROS workspace on the Raspberry Pi and launch the necessary nodes, including bringing up the ROS workspace and installing rosserial-python if needed.</p>
        </li>
        <li><b>How do I set up the laptop for keyboard control of the Chelonia?</b>
            <p>Run the Teleop Twist Keyboard package on the laptop by navigating to the ROS workspace directory (chelonia_ws), building the workspace using catkin_make, sourcing the setup file, and running the teleop_twist_keyboard.py script. Use the keyboard commands displayed on the screen to control the robot.</p>
        </li>
        <li><b>What keyboard commands can I use to control the Chelonia?</b>
            <p>You can control the robot using the keyboard commands displayed on the screen after running the Teleop Twist Keyboard package. Common commands include W, D, S, and A for movement and additional keys for rotation and speed adjustment.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Chelonia Voice Control": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Control the Chelonia with voice commands</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>
    <p>Instruction link: platform io Installation</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, Raspberry pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>ssh username@ip</code>
        </li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>roslaunch linorobot bringup.launch</code></li>
    </ol>
    <p>If any error occurred, then:</p>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <p>It will launch rosserial-python (teensy communication with ros)</p>
    <p>If any error occurred, then install rosserial-python:</p>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>

    <h4>STEP 4: Setup the Mobile APP for voice controlling</h4>
    <ol>
        <li>Install the following app on mobile (android): [Link]</li>
        <li><b>Connect the device with Bluetooth:</b>
            <ul>
                <li>Open Bluetooth settings-&gt; pair new device-&gt; select HC05-&gt; password:1234</li>
                <li>Then open app-&gt; select device -&gt;HC05</li>
            </ul>
        </li>
        <li><b>Then open settings-&gt; vocal command configuration -&gt;</b>
            <ul>
                <li>select button Voice command vocal command type text you like ”Go”, -&gt; Then click ok</li>
                <li>in Data to send type ‘F’ -&gt; Then click ok</li>
                <li>select button Voice command vocal command type text you like ”Down”, -&gt; Then click ok</li>
                <li>in Data to send type ‘B’ -&gt; Then click ok</li>
                <li>select button Voice command vocal command type text you like ”Left”, -&gt; Then click ok</li>
                <li>in Data to send type ‘L’ -&gt; Then click ok</li>
                <li>select button Voice command vocal command type text you like ”Right”, -&gt; Then click ok</li>
                <li>in Data to send type ‘R’ -&gt; Then click ok</li>
            </ul>
        </li>
        <li>Reference link: [click here]</li>
        <li><b>Control the Chelonia with voice commands</b>
            <ul>
                <li>Then go to home page and select Voice control</li>
                <li>Now you can control the Chelonia with Voice.</li>
            </ul>
        </li>
    </ol>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The objective is to set up a Chelonia for teleoperation and implement voice control, allowing users to control the Chelonia using voice commands.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I set up the ROS workspace and launch the necessary nodes?</b>
            <p>Follow the provided instructions to set up the ROS workspace on the Raspberry Pi and launch the necessary nodes, including bringing up the ROS workspace and installing rosserial-python if needed.</p>
        </li>
        <li><b>How do I set up the mobile app for voice controlling?</b>
            <p>Install the provided app on your Android mobile device and connect it to the Chelonia via Bluetooth. Then configure the voice command settings in the app, assigning specific voice commands like "Go", "Down", "Left", and "Right" to corresponding robot movements.</p>
        </li>
        <li><b>How do I control the Chelonia with voice commands?</b>
            <p>After setting up the mobile app, navigate to the Voice Control section, and you can now control the Chelonia using the voice commands you configured earlier. For example, saying "Go" will move the Chelonia forward, "Down" will move it backward, "Left" will turn it left, and "Right" will turn it right.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Obstacle - Based Speed Control": {
      type: "experiment",
      content: (
        <>
          <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot</li>
        <li>Implement Obstacle handling on Chelonia bot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace (do if not yet done, its one-time setup)</h4>
    <p>The General steps for the teensy firmware uploading, raspberry pi configuration, and ROS workspace setup.</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <p><b>Launch the bringup.launch</b></p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>Ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>sudo apt-get install ros-noetic-rosserial-python</code></li>
        <li>It will launch rosserial-python (teensy communication with ros)</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>Roslaunch linorobot bringup.launch</code></li>
    </ol>

    <h4>STEP 4: Give execution permission to the python launch file</h4>
    <ol>
        <li>Open terminal, ssh the raspberry pi from laptop using IP address of raspberry pi
            <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>cd chelonia_ws/src/linorobot/scripts</code></li>
        <li><code>sudo chmod +x deceleration.py</code></li>
    </ol>

    <h4>STEP 5: Launch the obstacle handler node</h4>
    <ol>
        <li>Open terminal, ssh the raspberry pi from laptop using IP address of raspberry pi
            <code>ssh &lt;username&gt;@&lt;ip address&gt;</code>
        </li>
        <li><code>cd chelonia_ws/</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rosrun linorobot deceleration.py</code></li>
    </ol>
    <p>It will handle the obstacle and:</p>
    <ul>
        <li>if obstacle distance is &lt;30 then stop</li>
        <li>if obstacle distance is &lt;100 then decelerate</li>
        <li>if obstacle distance is &gt;100 then move normal speed</li>
    </ul>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the primary objective of this experiment?</b>
            <p>The objective is to set up a Chelonia package for teleoperation and implement obstacle-based speed control, where the Chelonia adjusts its speed based on the proximity of obstacles.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I set up the ROS workspace and launch the necessary nodes?</b>
            <p>Follow the provided instructions to set up the ROS workspace on the Raspberry Pi and launch the necessary nodes, including bringing up the ROS workspace, handling obstacles, and giving execution permission to the Python launch file.</p>
        </li>
        <li><b>What does the obstacle handler node do?</b>
            <p>The obstacle handler node, implemented in the <code>deceleration.py</code> script, monitors the distance to obstacles. If the distance is less than 30 units, it stops the Chelonia. If the distance is between 30 and 100 units, it decelerates the Chelonia. If the distance is greater than 100 units, it allows the Chelonia to move at normal speed.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Creating Map Using Slam": {
      type: "experiment",
      content: (
        <>
      <h2>SLAM Mapping Robot</h2>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Create map using slam</li>
    </ul>
    
    
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace</h4>
    <p>The General steps for the teensy firmware uploading, Raspberry pi configuration, and ROS workspace setup (<b>the firmware code is different from the other experiments</b>).</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>ssh username@ip</code>
        </li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>roslaunch linorobot mapping.launch</code></li>
    </ol>
    
    <p><b>Install ROS Packages:</b></p>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-gmapping</code>
    <code>sudo apt-get install ros-noetic-map-server</code>
    <code>sudo apt-get install ros-noetic-robot-localization</code>
    <code>sudo apt-get install ros-noetic-imu-filter-madgwick</code>
    <code>sudo apt-get install ros-noetic-teleop-twist-keyboard</code>
    <p>It will launch rosserial-python (teensy communication with ros).</p>

    <h4>STEP 4: Visualization using Rviz</h4>
    <p><b>Run rviz:</b></p>
    <ol>
        <li>open new terminal</li>
        <li><code>ssh username@ip –X</code></li>
        <li>For displaying the graphical applications, we use -x</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rviz –d src/linorobot/rviz/navigate.rviz</code></li>
    </ol>

    <p><b>Perform teleoperation for mapping manually:</b></p>
    <ol>
        <li>Open new terminal</li>
        <li><code>ssh username@ip</code></li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rosrun teleop_twist_keyboard teleop_twist_keyboard.py</code></li>
    </ol>
    <p>Now control the robot with keyboard. Control the teleoperation of the turtle bot with the keyboard keys [Click here]</p>
    <ul>
        <li>W – forward</li>
        <li>X – Backward</li>
        <li>D – Right</li>
        <li>A – Left</li>
    </ul>
    <p>Press CTRL+C and close out all windows.</p>

    <h4>Things to be consider while mapping</h4>
    <p>Move the robot smoothly to keep the map clear. Explore every part of the place to make sure the map is complete. Watch out for things in the way and steer clear of them. Watch the map as you go and fix any problems you see. Let the operator know if there are any map problems. Go back to spots if the map isn't good enough.</p>

    <h4>Once the mapping is completed, save the map</h4>
    <ol>
        <li>open new terminal</li>
        <li><code>cd chelonia_ws/src/linorobot/map</code></li>
        <li><code>rosrun map_server map_saver –f &lt;name of map&gt;</code></li>
    </ol>
    <p>// the map will be saved in the present terminal directory</p>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is SLAM?</b>
            <p>SLAM stands for Simultaneous Localization and Mapping, a technique used in robotics to create maps of an environment while keeping track of the robot's location.</p>
        </li>
        <li><b>What do I need to set up a Chelonia for SLAM?</b>
            <p>You'll need a PC with ROS, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with Bluetooth module.</p>
        </li>
        <li><b>How do I launch the ROS workspace on Raspberry Pi?</b>
            <p>SSH into the Raspberry Pi, navigate to the workspace directory, run 'catkin_make', source the setup file, and launch required ROS nodes using 'roslaunch'.</p>
        </li>
        <li><b>What if I encounter errors during ROS workspace setup?</b>
            <p>Install required ROS packages using 'sudo apt-get install' for packages like ros-noetic-rosserial-python, ros-noetic-gmapping, etc.</p>
        </li>
        <li><b>How do I control Chelonia for teleoperation during mapping?</b>
            <p>Run 'teleop_twist_keyboard' node and use keyboard keys ('W' for forward, 'X' for backward, 'D' for right, 'A' for left) to control movement. Press 'CTRL+C' to stop teleoperation.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Chelonia Bot Auto Navigation": {
      type: "experiment",
      content: (
        <>
   <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Perform Chelonia auto navigation</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>
    <p>Instruction link: platform io Installation</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace</h4>
    <p>The General steps for the teensy firmware uploading, Raspberry pi configuration, and ROS workspace setup (<b>the firmware code is different from the other experiments</b>).</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>ssh username@ip</code>
        </li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>
    <p><b>Install required ROS packages:</b></p>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-amcl</code>
    <code>sudo apt-get install ros-noetic-move-base</code>
    <code>sudo apt-get install ros-noetic-global-planner</code>
    <code>sudo apt-get install ros-noetic-dwa-local-planner</code>

    <h4>STEP 4: Visualization using Rviz</h4>
    <p><b>Run rviz:</b></p>
    <ol>
        <li>New terminal</li>
        <li><code>ssh username@ip –X</code></li>
        <li>For displaying the graphical applications, we use -x</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rviz –d src/linorobot/rviz/navigate.rviz</code></li>
    </ol>
    

    <h4>STEP 5: Set the start position and goal position for navigation (in RVIZ)</h4>
    <p>Use the tools in Rviz to set the robot's initial pose ("2D Pose Estimate") and the desired destination ("2D Nav Goal").</p>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What items do I need for Turtle Bot Auto Navigation?</b>
            <p>You'll need a PC/laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with Bluetooth.</p>
        </li>
        <li><b>What are the objectives?</b>
            <p>Set up Chelonia for teleoperation, learn its basic components, and perform auto navigation.</p>
        </li>
        <li><b>How do I launch ROS workspace, visualize with Rviz?</b>
            <p>SSH into Raspberry Pi, navigate to workspace, remove build and devel, run catkin_make, source setup, launch navigation.launch. For Rviz, SSH with X forwarding, navigate to workspace, run Rviz with provided launch file.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Moving Obstacle Avoidance": {
      type: "experiment",
      content: (
        <>
           <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Perform Chelonia auto navigation with obstacle avoidance</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace</h4>
    <p>The General steps for the teensy firmware uploading, Raspberry pi configuration, and ROS workspace setup (<b>the firmware code is different from the other experiments</b>).</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>ssh username@ip</code>
        </li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>
    <p>If any error occurred, then install the following packages:</p>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-amcl</code>
    <code>sudo apt-get install ros-noetic-move-base</code>
    <code>sudo apt-get install ros-noetic-global-planner</code>
    <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
    
    <p><b>Update the map path in <code>navigate.launch</code>:</b></p>
    <ol>
        <li><code>cd chelonia_ws/src/linorobot/launch</code></li>
        <li>Open <code>navigate.launch</code> (e.g., using <code>nano navigate.launch</code>)</li>
        <li>Give the name of the map which is saved with correct path.</li>
    </ol>
    
    <p><b>Now launch the <code>navigation.launch</code>:</b></p>
    <ol>
        <li><code>cd chelonia_ws</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>

    <h4>STEP 4: Visualization using Rviz</h4>
    <p><b>Run rviz:</b></p>
    <ol>
        <li>open new terminal</li>
        <li><code>ssh username@ip –X</code></li>
        <li>For displaying the graphical applications, we use -x</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rviz –d src/linorobot/rviz/navigate.rviz</code></li>
    </ol>

    <h4>STEP 5: Set the start position and goal position for navigation (in RVIZ)</h4>
    <p>Use the Rviz interface to set the "2D Pose Estimate" (initial position) and "2D Nav Goal" (destination).</p>

    <h4>STEP 6: Test Obstacle Avoidance</h4>
    <p>Now move close to the robot slowly and see how it responds and plan new path and going to the destination.</p>

    <h3>Frequently asked Questions:</h3>
    <ol>
        <li><b>What do I need for this experiment?</b>
            <p>You'll need a PC with Ubuntu 20.04 and ROS Noetic, a Package, Raspberry Pi with Ubuntu Server, Chelonia hardware, and a Teensy 3.0 with Bluetooth.</p>
        </li>
        <li><b>How do I set up my Chelonia?</b>
            <p>Install Platform io if needed, upload Teensy firmware, configure Raspberry Pi, and set up the ROS workspace following provided instructions.</p>
        </li>
        <li><b>How do I launch the ROS workspace on Raspberry Pi?</b>
            <p>SSH into Raspberry Pi, navigate to the workspace, remove build and devel folders, run catkin_make, source setup script, and launch navigation node.</p>
        </li>
        <li><b>What if I encounter errors during setup?</b>
            <p>Install missing ROS packages like ros-noetic-rosserial-python, ros-noetic-amcl, ros-noetic-move-base, ros-noetic-global-planner, and ros-noetic-dwa-local-planner. Check map paths in configuration files.</p>
        </li>
        <li><b>How do I visualize navigation with Rviz?</b>
            <p>SSH into Raspberry Pi with X forwarding, navigate to workspace, source setup script, and launch Rviz with provided config file to visualize navigation.</p>
        </li>
    </ol>
        </>
      ),
    },

    "Maze Solving Robot": {
      type: "experiment",
      content: (
        <>
   <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for maze solving</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Perform maze solving with Chelonia</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace</h4>
    <p>The General steps for the teensy firmware uploading, Raspberry pi configuration, and ROS workspace setup (<b>the firmware code is different from the other experiments</b>).</p>

    <h4>STEP 3: create a maze environment for the robot</h4>
    <p>Refer the video link given bellow and create a similar maze setup.</p>

    <h4>STEP 4: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>ssh username@ip</code>
        </li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>
    <p><b>If any error occurred, then:</b></p>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-amcl</code>
    <code>sudo apt-get install ros-noetic-move-base</code>
    <code>sudo apt-get install ros-noetic-global-planner</code>
    <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
    
    <p><b>Open the navigate.launch file and update the path name of map:</b></p>
    <ol>
        <li><code>cd chelonia_ws/src/linorobot/launch</code></li>
        <li><code>navigate.launch</code> (e.g., <code>nano navigate.launch</code>)</li>
        <li>Give the name of the map which is saved with correct path.</li>
    </ol>
    
    <p><b>Now launch the navigation.launch:</b></p>
    <ol>
        <li><code>cd chelonia_ws</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>

    <h4>STEP 5: Visualization using Rviz</h4>
    <p><b>Run rviz:</b></p>
    <ol>
        <li>open new terminal</li>
        <li><code>ssh username@ip –X</code></li>
        <li>For displaying the graphical applications, we use -x</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rviz –d src/linorobot/rviz/navigate.rviz</code></li>
    </ol>

    <h4>STEP 6: Set the start position and goal position for navigation (in RVIZ)</h4>
    <p>Use the Rviz interface to set the "2D Pose Estimate" (initial position) and "2D Nav Goal" (destination).</p>

    <h4>STEP 7: Observe Robot Navigation</h4>
    <p>Now move close to the robot slowly and see how it responds and plan new path and going to the destination.</p>

    <h3>Frequently Asked Questions (FAQs)</h3>
    <ol>
        <li><b>What do I need for the maze solving experiment?</b>
            <p>Hardware: Chelonia3, Raspberry Pi, Teensy 3.0. Software: ROS Noetic, Ubuntu 20.04.</p>
        </li>
        <li><b>How do I set up my Chelonia?</b>
            <p>Follow provided instructions for software setup and hardware configuration.</p>
        </li>
        <li><b>How do I launch the ROS workspace on Raspberry Pi?</b>
            <p>SSH into Pi, rebuild workspace, and launch navigation.</p>
        </li>
        <li><b>How do I visualize and navigate the maze?</b>
            <p>Run RVIZ on PC, set start and goal positions, and observe robot's response.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Waypoint Following Robot": {
      type: "experiment",
      content: (
        <>
      <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Implement Waypoint following Robot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace</h4>
    <p>The General steps for the teensy firmware uploading, Raspberry pi configuration, and ROS workspace setup (<b>the firmware code is different from the other experiments</b>).</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>ssh username@ip</code>
        </li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>
    <p><b>If any error occurred, then:</b></p>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-amcl</code>
    <code>sudo apt-get install ros-noetic-move-base</code>
    <code>sudo apt-get install ros-noetic-global-planner</code>
    <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
    
    <p><b>Open the navigate.launch file and update the path name of map:</b></p>
    <ol>
        <li><code>cd chelonia_ws/src/linorobot/launch</code></li>
        <li><code>navigate.launch</code> (e.g., <code>nano navigate.launch</code>)</li>
        <li>Give the name of the map which is saved with correct path.</li>
    </ol>
    
    <p><b>Now launch the navigation.launch:</b></p>
    <ol>
        <li><code>cd chelonia_ws</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>

    <h4>STEP 4: Visualization using Rviz</h4>
    <p><b>Run rviz:</b></p>
    <ol>
        <li>open new terminal</li>
        <li><code>ssh username@ip –X</code></li>
        <li>For displaying the graphical applications, we use -x</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rviz –d src/linorobot/rviz/navigate.rviz</code></li>
    </ol>

    <h4>STEP 5: Take the points to be followed.</h4>
    <ol>
        <li><code>ssh username@ip</code></li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rostopic echo /move_base/simple_goal</code></li>
    </ol>
    <p className="note">Note down the points and open the python file <b>waypoint_follower.py</b> and replace the points with the new points that is noted.
    <br/>Save the python file and exit.</p>

    <h4>STEP 6: Now run the waypoint follower script</h4>
    <ol>
        <li>Open new terminal</li>
        <li><code>ssh username@ip</code></li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rosrun linorobot waypoint_follower.py</code></li>
    </ol>

    <h3>Frequently Asked Questions (FAQs)</h3>
    <ol>
        <li><b>What do I need for this experiment?</b>
            <p>You'll need a PC/laptop with ROS Noetic, a Package, Ubuntu 20.04, a Raspberry Pi with Ubuntu Server, Chelonia hardware, and a Teensy 3.0 with Bluetooth.</p>
        </li>
        <li><b>How do I set up my Chelonia?</b>
            <p>Install Platform io if needed, upload Teensy firmware, configure Raspberry Pi, and set up ROS workspace as instructed.</p>
        </li>
        <li><b>What are the basic components of a Chelonia?</b>
            <p>Chelonia hardware, Raspberry Pi with Ubuntu Server, Teensy 3.0 with Bluetooth, and ROS packages for navigation/control.</p>
        </li>
        <li><b>How do I launch the ROS workspace on Raspberry Pi?</b>
            <p>SSH into Raspberry Pi, navigate to ROS workspace, remove build/devel directories, run 'catkin_make', source setup.bash, and launch navigation script.</p>
        </li>
        <li><b>How do I visualize navigation using Rviz?</b>
            <p>Run Rviz on your PC, SSH into Raspberry Pi with X11 forwarding, navigate to ROS workspace, source setup.bash, and run Rviz with provided configuration file.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Patrol and Explore": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Implement a patrol and explore robot using Chelonia bot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace</h4>
    <p>The General steps for the teensy firmware uploading, Raspberry pi configuration, and ROS workspace setup (<b>the firmware code is different from the other experiments</b>).</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li>ssh the raspberry pi with its IP address
            <code>ssh username@ip</code>
        </li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>rm –r build devel</code></li>
        <li><code>catkin_make</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>
    <p><b>If any error occurred, then:</b></p>
    <code>sudo apt-get install ros-noetic-rosserial-python</code>
    <code>sudo apt-get install ros-noetic-amcl</code>
    <code>sudo apt-get install ros-noetic-move-base</code>
    <code>sudo apt-get install ros-noetic-global-planner</code>
    <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
    
    <p><b>Open the navigate.launch file and update the path name of map:</b></p>
    <ol>
        <li><code>cd chelonia_ws/src/linorobot/launch</code></li>
        <li><code>navigate.launch</code> (e.g., <code>nano navigate.launch</code>)</li>
        <li>Give the name of the map which is saved with correct path.</li>
    </ol>
    
    <p><b>Now launch the navigation.launch:</b></p>
    <ol>
        <li><code>cd chelonia_ws</code></li>
        <li><code>roslaunch linorobot navigation.launch</code></li>
    </ol>

    <h4>STEP 4: Visualization using Rviz</h4>
    <p><b>Run rviz:</b></p>
    <ol>
        <li>open new terminal</li>
        <li><code>ssh username@ip –X</code></li>
        <li>For displaying the graphical applications, we use -x</li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rviz –d src/linorobot/rviz/navigate.rviz</code></li>
    </ol>

    <h4>STEP 5: Take the points to be followed.</h4>
    <ol>
        <li><code>ssh username@ip</code></li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>rostopic echo /move_base/simple_goal</code></li>
    </ol>
    <p className="note">Note down the points and open the python file <b>waypoint_follower.py</b> and replace the points with the new points that is noted.
    <br/>Save the python file and exit.</p>

    <h4>STEP 6: Now run the waypoint follower script</h4>
    <ol>
        <li>Open new terminal</li>
        <li><code>ssh username@ip</code></li>
        <li><code>cd chelonia_ws</code></li>
        <li><code>source devel/setup.bash</code></li>
        <li><code>Rosrun linorobot patrol.py</code></li>
    </ol>

    <h3>Frequently Asked Questions (FAQs)</h3>
    <ol>
        <li><b>What items do I need for this experiment?</b>
            <p>You'll need a PC or laptop with ROS Noetic, Package, Ubuntu 20.04, Raspberry Pi with Ubuntu Server, Chelonia hardware, and Teensy 3.0 with a Bluetooth module.</p>
        </li>
        <li><b>How do I set up my Chelonia for teleoperation?</b>
            <p>Follow instructions to install Platform io, upload Teensy firmware, configure Raspberry Pi, and set up ROS workspace. Details are in the provided links.</p>
        </li>
        <li><b>How do I launch the ROS workspace on Raspberry Pi?</b>
            <p>SSH into Raspberry Pi, navigate to ROS workspace, remove existing build and devel directories, then use catkin_make and source devel/setup.bash to launch the workspace. Run roslaunch linorobot navigation.launch. Additional steps may be needed as listed.</p>
        </li>
        <li><b>How can I visualize navigation using Rviz?</b>
            <p>Run Rviz by SSH with graphical support, navigate to ROS workspace, and execute rviz -d src/linorobot/rviz/navigate.rviz to visualize navigation.</p>
        </li>
        <li><b>How do I run the waypoint follower script?</b>
            <p>SSH into Raspberry Pi, navigate to ROS workspace, and execute rosrun linorobot waypoint_follower.py to enable the robot to follow predefined waypoints.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Teleoperated Control of Chelonia": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc with ROS Noetic</li>
        <li>teleop_twist_keyboard package</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot simulation with keyboard</li>
    </ul>

    <h3>IMPLEMENTATION STEPS:</h3>
    
    <h4>STEP 1: ROS Noetic Installation (if not installed)</h4>
    <p>The General steps for installing ROS Noetic on Ubuntu:</p>

    <h4>STEP 2: ROS Chelonia package setup (if not done)</h4>
    <p>The Package installation and setup</p>
    <p><b>INSTRUCTION LINK:</b> ROS Chelonia package setup</p>

    <h4>STEP 3: Simulate Chelonia3 Using Gazebo</h4>
    <p>Now let us use Gazebo to do the Chelonia3 simulation.</p>
    <p>First, let us launch Chelonia3 in an empty environment. Type this command (everything goes on one line):</p>
    <code>roslaunch Chelonia3_gazebo Chelonia3_empty_world.launch</code>
    <p>Wait for the Gazebo to load. It could take a while.</p>

    <h4>STEP 4: Launch Chelonia keyboard for the teleoperation</h4>
    <p>Now run the command in terminal to launch the teleop keyboard package</p>
    <code>roslaunch Chelonia3_teleop Chelonia3_teleop_key.launch</code>
    <p>control the teleoperation of the turtle bot with the keyboard keys [Click here]</p>
    <ul>
        <li>W – forward</li>
        <li>X – Backward</li>
        <li>D – Right</li>
        <li>A – Left</li>
    </ul>
    <p>Press CTRL+C and close out all windows.</p>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The main objective is to set up teleoperation for the Chelonia, allowing control of its movements using a keyboard, and to understand the basic components of robot simulation.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC with ROS Noetic installed, the teleop_twist_keyboard package, Package, and Ubuntu 20.04.</p>
        </li>
        <li><b>How do I set up ROS Noetic if it is not installed?</b>
            <p>Follow the provided instructions for installing ROS Noetic on Ubuntu. You can find the general steps in the given instruction link.</p>
        </li>
        <li><b>How do I simulate Chelonia3 using Gazebo?</b>
            <p>After setting up ROS and Chelonia packages, launch Chelonia3 in an empty environment in Gazebo using the provided command. Wait for Gazebo to load, and then you can control the simulation.</p>
        </li>
        <li><b>How do I control the Chelonia's teleoperation with a keyboard?</b>
            <p>Launch the Chelonia keyboard teleoperation package using the provided command. Once launched, you can control the Chelonia's movements using specific keys on your keyboard. For example, pressing 'W' moves the Chelonia forward, 'X' moves it backward, 'D' turns it right, and 'A' turns it left.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Chelonia Mapping Simulation": {
      type: "experiment",
      content: (
        <>
   <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc with ROS Noetic</li>
        <li>teleop_twist_keyboard package</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot simulation</li>
        <li>Perform gazebo simulation to generate a map of a room using SLAM algorithm.</li>
    </ul>

    <h3>IMPLEMENTATION STEPS:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: ROS Noetic Installation (if not installed)</h4>
    <p>The General steps for installing ROS Noetic on Ubuntu:</p>
    <p><b>INSTRUCTION LINK:</b> ROS Noetic Installation</p>

    <h4>STEP 2: ROS Chelonia package setup</h4>
    <p>The Package installation and setup</p>
    <p><b>INSTRUCTION LINK:</b> ROS Chelonia package setup</p>

    <h4>STEP 3: Simulating SLAM With Chelonia3</h4>
    <p>Let us look at how we can simulate SLAM with Chelonia3. As a refresher, Simultaneous localization and mapping (SLAM) concerns the problem of a robot building or updating a map of an unknown environment while simultaneously keeping track of its location in that environment.</p>

    <p><b>Install the SLAM module in a new terminal window.:</b></p>
    <code>sudo apt install ros-noetic-slam-gmapping</code>

    <p><b>Start Gazebo in a new terminal window:</b></p>
    <code>cd catkin_ws</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch Chelonia3_gazebo Chelonia3_world.launch</code>

    <p><b>Start SLAM in a new terminal tab:</b></p>
    <code>cd catkin_ws</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch Chelonia3_slam Chelonia3_slam.launch</code>

    <p><b>Start autonomous navigation in a new terminal tab:</b></p>
    <code>cd catkin_ws</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch Chelonia3_gazebo Chelonia3_simulation.launch</code>

    <p>Watch the robot create a map of the environment as it autonomously moves from place to place!</p>

    <p><b>To install the map saver:</b></p>
    <code>sudo apt-get install ros-noetic-map-server</code>

    <p><b>To save the map, open the path that in which the map file needed to save:</b></p>
    <code>rosrun map_server map_saver -f mapname1</code>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The main objective is to set up the Chelonia package for teleoperation, learn about basic robot simulation components, and perform Gazebo simulation to generate a map of a room using the SLAM algorithm.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC with ROS Noetic installed, the teleop_twist_keyboard package, Package, and Ubuntu 20.04.</p>
        </li>
        <li><b>How do I simulate SLAM with Chelonia3?</b>
            <p>First, install the SLAM module by executing the provided command in a new terminal window. Then start Gazebo by launching Chelonia3_world.launch. After that, start SLAM in another terminal tab using the provided command. Finally, start autonomous navigation with Chelonia3_simulation.launch to watch the robot create a map of the environment.</p>
        </li>
        <li><b>How can I save the generated map?</b>
            <p>To save the map, you need to install the map saver by executing the provided command. Then, navigate to the directory where you want to save the map file and use the command <code>rosrun map_server map_saver -f mapname1</code> to save the map.</p>
        </li>
        <li><b>Can I visualize the process with images?</b>
            <p>Yes, you can refer to the provided image links to get a visual representation of the steps involved in simulating SLAM with Chelonia3.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Autonomous Robot Simulation": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Learn about the different basic components that make up a robot simulation</li>
        <li>Perform auto navigation using prebuilt map generated enabling robot to move from initial point to destination avoiding obstacles in its way.</li>
    </ul>

    <h3>IMPLEMENTATION STEPS:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: ROS Noetic Installation (if not installed)</h4>
    <p>The General steps for installing ROS Noetic on Ubuntu:</p>
    <p><b>Instruction link:</b> ROS Noetic Installation</p>

    <h4>STEP 2: ROS Chelonia package setup</h4>
    <p>The Package installation and setup</p>
    <p><b>Instruction link:</b> ROS Chelonia package setup</p>

    <h4>STEP 3: Autonomous Navigation and Obstacle Avoidance with Chelonia3</h4>
    <p>Now let us implement obstacle avoidance for the Chelonia3 robot. The goal is to have Chelonia3 autonomously navigate around a room and avoid colliding into objects.</p>

    <p><b>Open a new terminal and type:</b></p>
    <code>roslaunch Chelonia3_gazebo Chelonia3_world.launch</code>

    <p><b>In another terminal window type:</b></p>
    <code>roslaunch Chelonia3_gazebo Chelonia3_simulation.launch</code>
    <p>You should see Chelonia3 autonomously moving about the world and avoiding obstacles along the way.</p>

    <p><b>In another terminal window type:</b></p>
    <code>roslaunch Chelonia3_gazebo Chelonia3_gazebo_rviz.launch</code>
    <p>We can open Rviz to visualize the Laserscan topic while Chelonia3 is moving about in the world. In a new terminal tab type.</p>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The main objective is to set up the Chelonia package for teleoperation, understand basic robot simulation components, and implement autonomous navigation with obstacle avoidance using prebuilt maps.</p>
        </li>
        <li><b>What equipment do I need for this experiment?</b>
            <p>You will need a PC with ROS Noetic installed, the Package, and Ubuntu 20.04.</p>
        </li>
        <li><b>How do I implement autonomous navigation and obstacle avoidance with Chelonia3?</b>
            <p>First, launch the Chelonia3 world in Gazebo by executing <code>roslaunch Chelonia3_gazebo Chelonia3_world.launch</code> in a new terminal window. Then, start the simulation with obstacle avoidance by executing <code>roslaunch Chelonia3_gazebo Chelonia3_simulation.launch</code>. You should observe Chelonia3 autonomously moving and avoiding obstacles. Additionally, you can visualize the Laserscan topic in RViz by executing <code>roslaunch Chelonia3_gazebo Chelonia3_gazebo_rviz.launch</code> in a new terminal tab.</p>
        </li>
        <li><b>Can I see a visual representation of the setup and execution?</b>
            <p>Yes, you can refer to the provided image links to visualize the setup and execution process, including Chelonia3 autonomously navigating around the world and avoiding obstacles.</p>
        </li>
        <li><b>How does obstacle avoidance work?</b>
            <p>The Chelonia3 robot uses sensor data, such as laser scans, to detect obstacles in its environment. Based on this data, it plans its path to avoid collisions with obstacles while navigating towards its destination autonomously.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Charging Doc Navigation Robot": {
      type: "experiment",
      content: (
        <>
   <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc with ROS Noetic</li>
        <li>teleop_twist_keyboard package</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Implement algorithms for the Chelonia to autonomously navigate to a charging dock (fixed location chosen by user)</li>
    </ul>

    <h3>IMPLEMENTATION STEPS:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: ROS Noetic Installation (if not installed)</h4>
    <p>The General steps for installing ROS Noetic on Ubuntu:</p>
    <p><b>INSTRUCTION LINK:</b> ROS Noetic Installation</p>

    <h4>STEP 2: ROS Chelonia package setup (if not done)</h4>
    <p>The Package installation and setup</p>
    <p><b>INSTRUCTION LINK:</b> ROS Chelonia package setup</p>

    <h4>STEP 3: Charging Dock Navigation simulation</h4>
    <p>Now let us implement the charging dock navigation simulation.</p>
    
    <p><b>Install the dependency (Open a new terminal and type):</b></p>
    <code>sudo apt-get install ros-noetic-vision-msgs</code>

    <p><b>Git clones the workspace in the catkin_ws/src (Open a new terminal and type):</b></p>
    <code>cd catkin_ws/src</code>
    <code>git clone https://github.com/osrf/autodock.git</code>
    <code>git clone https://github.com/UbiquityRobotics/fiducials.git</code>
    <code>cd ..</code>
    <code>catkin_make</code>

    <p><b>This will launch the simulated environment (In another terminal window type):</b></p>
    <code>cd catkin_ws</code>
    <code>source devel/setup.bash</code>
    <code>roslaunch autodock_sim tb3_dock_sim.launch</code>

    <p><b>This will trigger the auto docking functionality (In another terminal window type):</b></p>
    <code>cd catkin_ws</code>
    <code>source devel/setup.bash</code>
    <code>rostopic pub /autodock_action/goal autodock_core/AutoDockingActionGoal {} --once</code>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the main objective of this experiment?</b>
            <p>The main objective is to implement algorithms for the Chelonia to autonomously navigate to a charging dock, which is a fixed location chosen by the user.</p>
        </li>
        <li><b>What equipment and software do I need for this experiment?</b>
            <p>You will need a PC with ROS Noetic installed, the teleop_twist_keyboard package, Package, and Ubuntu 20.04. Additionally, you will need to install dependencies such as ros-noetic-vision-msgs.</p>
        </li>
        <li><b>How do I set up the ROS workspace for this experiment?</b>
            <p>You clone the necessary repositories (autodock and fiducials) into your <code>catkin_ws/src</code> folder and build the workspace using <code>catkin_make</code>.</p>
        </li>
        <li><b>How do I launch the charging dock navigation simulation?</b>
            <p>Open a new terminal window, navigate to the <code>catkin_ws</code> directory, source the setup file, and run <code>roslaunch autodock_sim tb3_dock_sim.launch</code> to launch the simulated environment.</p>
        </li>
        <li><b>How do I trigger the auto-docking functionality?</b>
            <p>In another terminal window, navigate to the <code>catkin_ws</code> directory, source the setup file, and run <code>rostopic pub /autodock_action/goal autodock_core/AutoDockingActionGoal {} --once</code>. This command will trigger the auto-docking functionality, allowing the Chelonia to navigate to the charging dock.</p>
        </li>
        <li><b>Can I see a visual representation of the simulation setup?</b>
            <p>Yes, you can refer to the provided image link to visualize the charging dock navigation simulation setup and execution.</p>
        </li>
    </ol>
        </>
      ),
    },

    "Complex Environment Navigation": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Perform gazebo simulation of autonomous navigation robot in complex environments</li>
    </ul>

    <h3>IMPLEMENTATION STEPS:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: ROS Noetic Installation (if not installed)</h4>
    <p>The General steps for installing ROS Noetic on Ubuntu:</p>
    <p><b>Instruction link:</b> ROS Noetic Installation</p>

    <h4>STEP 2: ROS Chelonia package setup (if not done)</h4>
    <p>The Package installation and setup</p>
    <p><b>Instruction link:</b> ROS Chelonia package setup</p>

    <h4>STEP 3: Autonomous Navigation and Obstacle Avoidance - Chelonia3</h4>
    <p>Now let us implement obstacle avoidance for the Chelonia3 robot. The goal is to have Chelonia3 autonomously navigate around a room and avoid colliding with objects.</p>

    <p><b>Open a new terminal and type:</b></p>
    <code>cd catkin_ws</code>
    <p>This will change the present working directory into catkin_ws</p>
    <code>source devel/setup.bash</code>
    <p>This will source the workspace</p>
    <code>roslaunch Chelonia3_gazebo Chelonia3_house.launch</code>
    <p className="note">*From the left side menu list click on “Insert” then -{">"} chose the object that you want to add to your map, (just drag and drop)</p>

    <p><b>In another terminal window type:</b></p>
    <code>cd catkin_ws</code>
    <p>This will change the present working directory into catkin_ws</p>
    <code>source devel/setup.bash</code>
    <p>This will source the workspace</p>
    <code>roslaunch Chelonia3_gazebo Chelonia3_simulation.launch</code>
    <p className="note">*Once the robot covered the whole region, stop the command -” roslaunch Chelonia3_gazebo Chelonia3_simulation.launch“by pressing Ctrl + C in the terminal</p>

    <p><b>In another terminal type following command to save the map:</b></p>
    <code>rosrun map_server map_saver -f &lt;name of map&gt;</code>
    <p className="note">*This will save the map in the present working directory of the terminal</p>

    <p><b>In another terminal type the following command to launch the Autonomous navigation with obstacle avoidance:</b></p>
    <code>roslaunch Chelonia3_navigation Chelonia3_navigation.launch map_file:=$HOME/&lt;path of the map file saved&gt;/&lt;name of the map&gt;.yaml</code>
    <p>This will auto navigate the robot to the desired position by choosing the initial position and goal position</p>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the objective of this experiment?</b>
            <p>The objective is to perform Gazebo simulation of autonomous navigation for a robot in complex environments.</p>
        </li>
        <li><b>What equipment and software are needed for this experiment?</b>
            <p>You will need a PC with ROS Noetic installed, the Package, and Ubuntu 20.04.</p>
        </li>
        <li><b>How do I set up ROS Noetic if it is not installed?</b>
            <p>Follow the provided instruction link for ROS Noetic installation. It will guide you through the general steps for installing ROS Noetic on Ubuntu.</p>
        </li>
        <li><b>How do I set up the ROS Chelonia package?</b>
            <p>Ensure you have the Chelonia package installed and set up by following the instructions provided in the link for ROS Chelonia package setup.</p>
        </li>
        <li><b>How do I insert objects as obstacles in the Gazebo simulation?</b>
            <p>From the left side menu, click on "Insert" and then choose the object you want to add to your map. You can drag and drop objects to place them as obstacles.</p>
        </li>
        <li><b>How do I specify the initial and goal positions for autonomous navigation?</b>
            <p>After launching the navigation launch file, you can specify the initial position and goal position by choosing them in the map visualization interface. The robot will autonomously navigate to the goal position while avoiding obstacles.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Customer Command Follower": {
      type: "experiment",
      content: (
        <>
    <h2>Gazebo Simulation: Custom Command Teleoperation</h2>
    

    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Python file that contains custom commands to navigate robot</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia package for teleoperation</li>
        <li>Perform Chelonia simulation with custom command - (written in python file)</li>
    </ul>

    <h3>IMPLEMENTATION STEPS:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: ROS Noetic Installation (if not installed)</h4>
    <p>The General steps for installing ROS Noetic on Ubuntu:</p>
    <p><b>INSTRUCTION LINK:</b> ROS Noetic Installation</p>

    <h4>STEP 2: ROS Chelonia package setup</h4>
    <p>The Package installation and setup</p>
    <p><b>INSTRUCTION LINK:</b> ROS Chelonia package setup</p>

    <h4>STEP 3: Simulate Chelonia3 Using Gazebo</h4>
    <p>Now let us use Gazebo to do the Chelonia3 simulation.</p>
    <p>First, let us launch Chelonia3 in an empty environment. Type this command (everything goes on one line):</p>
    <code>cd catkin_ws</code>
    <p>This will change the present working directory into catkin_ws</p>
    <code>source devel/setup.bash</code>
    <p>This will source the workspace</p>
    <code>roslaunch Chelonia3_gazebo Chelonia3_empty_world.launch</code>
    <p>Wait for the Gazebo to load. It could take a while. [ View image ]</p>

    <h4>STEP 4: Launch Chelonia Custom command file</h4>
    <p>Put the python file inside the <code>catkin_ws/src/Chelonia3/Chelonia3_bringup/scripts</code> folder with name <b>custom_command.py</b></p>
    <p>[ Python file link]</p>
    
    <p><b>Then perform catkin_make:</b></p>
    <code>catkin_make</code>
    
    <p><b>Now run the command in terminal to launch the custom teleop operation.</b></p>
    <p>Make the python script executable:</p>
    <code>sudo chmod +x custom_command.py</code>
    
    <p><b>Run the python file:</b></p>
    <code>rosrun Chelonia3_bringup custom_command.py</code>
    
    <p>At last Press CTRL+C and close out all windows.</p>

    <h3>FREQUENTLY ASKED QUESTIONS:</h3>
    <ol>
        <li><b>What is the objective of this experiment?</b>
            <p>The objective is to perform Chelonia simulation with custom commands using a Python file.</p>
        </li>
        <li><b>What equipment and software are needed for this experiment?</b>
            <p>You will need a PC with ROS Noetic installed, the Package, and Ubuntu 20.04. Additionally, you need a Python file containing custom commands to navigate the robot.</p>
        </li>
        <li><b>How do I set up ROS Noetic if it is not installed?</b>
            <p>Follow the provided instruction link for ROS Noetic installation. It will guide you through the general steps for installing ROS Noetic on Ubuntu.</p>
        </li>
        <li><b>How do I set up the ROS Chelonia package?</b>
            <p>Ensure you have the Chelonia package installed and set up by following the instructions provided in the link for ROS Chelonia package setup.</p>
        </li>
        <li><b>How do I simulate Chelonia3 using Gazebo?</b>
            <p>Launch Chelonia3 in an empty environment by typing the command <code>roslaunch Chelonia3_gazebo Chelonia3_empty_world.launch</code>. Wait for Gazebo to load, then close all windows by pressing CTRL+C.</p>
        </li>
        <li><b>How do I launch the Chelonia custom command file?</b>
            <p>Place the Python file containing custom commands inside the Chelonia3_bringup package with the name <code>custom_command.py</code>. Then, run the command <code>rosrun Chelonia3_bringup custom_command.py</code> in the terminal to launch the custom teleoperation.</p>
        </li>
        <li><b>Where can I find the Python file with custom commands?</b>
            <p>The Python file can be found at the provided link. Ensure that you place it inside the Chelonia3_bringup package before running the command to launch the custom teleoperation.</p>
        </li>
    </ol>
        </>
      ),
    },
    "Multiple Goal Position and Home Position from Command Line": {
      type: "experiment",
      content: (
        <>
    <h3>ITEMS NEEDED:</h3>
    <ul>
        <li>Pc or laptop with ROS Noetic</li>
        <li>Package</li>
        <li>Ubuntu 20.04</li>
        <li>Raspberry pi with ubuntu server</li>
        <li>Chelonia hardware</li>
        <li>Teensy 3.0 with Bluetooth module</li>
    </ul>

    <h3>OBJECTIVES OF EXERCISE:</h3>
    <ul>
        <li>Set up your Chelonia for teleoperation</li>
        <li>Learn about the different basic components that make up a Chelonia robot</li>
        <li>Implement Waypoint following Robot</li>
    </ul>

    <h3>IMPLEMENTATION:</h3>
    <p>Do the following steps carefully:</p>

    <h4>STEP 1: Platform io Installation (do if not installed)</h4>
    <p>The General steps for installing platform io on Ubuntu:</p>
    <p><b>Instruction link:</b> platform io Installation</p>

    <h4>STEP 2: Teensy firmware upload, Setup configure raspberry Pi, ROS workspace</h4>
    <p>(the firmware code is different from the other experiments)</p>
    <p>The General steps for the teensy firmware uploading, Raspberry pi configuration, and ROS workspace setup</p>
    <p><b>Instruction link:</b> [Click here]</p>

    <h4>STEP 3: Launch the ROS workspace in Raspberry pi</h4>
    <p>For that do the following steps in the laptop:</p>
    <ol>
        <li><b>ssh the raspberry pi with its IP address</b>
            <code>ssh username@ip</code>
        </li>
        <li><b>Navigate to workspace, clean, build, and source</b>
            <code>cd chelonia_ws</code>
            <code>rm –r build devel</code>
            <code>catkin_make</code>
            <code>source devel/setup.bash</code>
        </li>
        <li><b>Launch navigation</b>
            <code>roslaunch linorobot navigation.launch</code>
        </li>
        <li className="note"><b>If any error occurred, then install dependencies:</b>
            <code>sudo apt-get install ros-noetic-rosserial-python</code>
            <code>sudo apt-get install ros-noetic-amcl</code>
            <code>sudo apt-get install ros-noetic-move-base</code>
            <code>sudo apt-get install ros-noetic-global-planner</code>
            <code>sudo apt-get install ros-noetic-dwa-local-planner</code>
        </li>
    </ol>

    <h4>STEP 4: Take the points to be followed.</h4>
    <ol>
        <li><b>ssh the raspberry pi with its IP address</b>
            <code>ssh username@ip</code>
        </li>
        <li><b>Navigate to workspace and source</b>
            <code>cd chelonia_ws</code>
            <code>source devel/setup.bash</code>
        </li>
        <li><b>Listen to the goal topic</b>
            <p>(In Rviz, set 2D Nav Goals and note the terminal output)</p>
            <code>rostopic echo /move_base/simple_goal</code>
        </li>
        <li>
            <p>Note down the points and open the python file <b>multiple_point.py</b> and replace the points with the new points that is noted.</p>
            <p>Save the python file and exit</p>
        </li>
    </ol>

    <h4>STEP 5: Now run the waypoint follower script</h4>
    <ol>
        <li><b>Open new terminal</b>
            <code>ssh username@ip</code>
        </li>
        <li><b>Navigate to the scripts folder</b>
            <code>cd chelonia_ws/src/linorobot/scripts</code>
        </li>
        <li><b>Run the script</b>
            <code>python3 multiple_point.py</code>
        </li>
    </ol>

    <h3>Frequently Asked Questions (FAQs)</h3>
    <ol>
        <li><b>What do I need for this experiment?</b>
            <p>You'll need a PC/laptop with ROS Noetic, a Package, Ubuntu 20.04, a Raspberry Pi with Ubuntu Server, Chelonia hardware, and a Teensy 3.0 with Bluetooth.</p>
        </li>
        <li><b>How do I set up my Chelonia?</b>
            <p>Install Platform io if needed, upload Teensy firmware, configure Raspberry Pi, and set up ROS workspace as instructed.</p>
        </li>
        <li><b>What are the basic components of a Chelonia?</b>
            <p>Chelonia hardware, Raspberry Pi with Ubuntu Server, Teensy 3.0 with Bluetooth, and ROS packages for navigation/control.</p>
        </li>
        <li><b>How do I launch the ROS workspace on Raspberry Pi?</b>
            <p>SSH into Raspberry Pi, navigate to ROS workspace, remove build/devel directories, run 'catkin_make', source setup.bash, and launch navigation script.</p>
        </li>
        <li><b>How do I visualize navigation using Rviz?</b>
            <p>Run Rviz on your PC, SSH into Raspberry Pi with X11 forwarding, navigate to ROS workspace, source setup.bash, and run Rviz with provided configuration file.</p>
        </li>
    </ol>
        </>
      ),
    },
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
    "Keyboard Controlled Robot",
    "Wireless Controlled Robot",
    "Terminal Controlled Using Mobile App",
    "Mobile Tilt Controlled Chelonia",
    "ROS - Based Joystick Controller",
    "Button Controlled Robot",
    "Surveillance Using Camera",
    "Teleoperation Using Camera Feedback",
    "Human Following Robot",
    "Staircase Detection Robot",
  ];

  const intermediateItems = [
    "ROS Based Master Slave Control",
    "Shape Path Crafting Robot",
    "Surveillance Using Lidar",
    "Tilt Tracking Using IMU",
    "Chelonia Voice Control",
    "Obstacle - Based Speed Control",
    "Creating Map Using Slam",
    "Chelonia Bot Auto Navigation",
    "Moving Obstacle Avoidance",
    "Maze Solving Robot",
  ];

  const advancedItems = [
    "Waypoint Following Robot",
    "Patrol and Explore",
    "Teleoperated Control of Chelonia",
    "Chelonia Mapping Simulation",
    "Autonomous Robot Simulation",
    "Charging Doc Navigation Robot",
    "Surveillance Using Camera",
    "Complex Environment Navigation",
    "Customer Command Follower",
    "Multiple Goal Position and Home Position from Command Line",
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
