import MazeSolverThumbnail from '../assets/projects/maze-solver/thumbnail.jpg';
import CompanionBotThumbnail from '../assets/projects/companion-bot/thumbnail.jpg';
import SelfBalancingRobotThumbnail from '../assets/projects/self-balancing/thumbnail.jpg';
import BotVisualizerThumbnail from '../assets/projects/bot-visualizer/thumbnail.png';
import SpaceImpactThumbnail from '../assets/projects/space-impact/thumbnail.jpg';
import RetroSnakeThumbnail from '../assets/projects/retro-snake/thumbnail.jpg';
import FavoriteBoyThumbnail from '../assets/projects/favorite-boy/thumbnail.jpg';

// Base URL for GitHub Pages deployment
const BASE_URL = import.meta.env.BASE_URL;

export const projects = [
    {
        id: 'maze-solver-bot',
        title: 'Maze Solver Wall-Follower Bot',
        description: 'ESP32-based robot with diagonal sensor geometry and predictive PID control for maze solving. Features smart recovery and gap detection.',
        tags: ['C++', 'ESP32', 'Robotics', 'PID', 'Algorithms'],
        thumbnail: MazeSolverThumbnail,
        date: '2024-02-10',
        overview: 'An advanced maze-solving robot that anticipates walls using diagonal sonars. It implements predictive PID control for smooth navigation and trigonometry-based gap detection.',
        wiring: [
            { component: 'Front Sonar (HC-SR04)', pin: 'Trig → GPIO 14, Echo → GPIO 35' },
            { component: 'Left Sonar (NW)', pin: 'Trig → GPIO 18, Echo → GPIO 13' },
            { component: 'Right Sonar (NE)', pin: 'Trig → GPIO 16, Echo → GPIO 34' },
            { component: 'Left Motor (L298N)', pin: 'IN1 → GPIO 23, IN2 → GPIO 22, PWM → GPIO 25' },
            { component: 'Right Motor (L298N)', pin: 'IN3 → GPIO 21, IN4 → GPIO 19, PWM → GPIO 26' },
            { component: 'Start Button', pin: 'BOOT Button (GPIO 0)' }
        ],
        steps: [
            {
                title: 'Hardware Assembly',
                description: 'Assemble the chassis with two DC motors and mount the ESP32 development board. Attach the L298N motor driver and connect power distribution.',
                image: `${BASE_URL}/assets/projects/maze-solver/assembly.jpg`
            },
            {
                title: 'Sensor Mounting',
                description: 'Mount three HC-SR04 ultrasonic sensors at diagonal angles: North-West (45°), North (0°), and North-East (45°). This geometry enables predictive wall detection.',
                image: null
            },
            {
                title: 'PID Tuning',
                description: 'Upload the firmware and calibrate PID values (Kp, Ki, Kd) for wall-following. Start with Kp only, then add Ki for steady-state error, and Kd for dampening.',
                image: null
            },
            {
                title: 'Gap Detection Logic',
                description: 'Configure trigonometry-based gap detection thresholds. The bot uses sensor geometry to calculate corridor openings and left-turn opportunities.',
                image: null
            }
        ],
        gallery: [
            { image: `${BASE_URL}/assets/projects/maze-solver/front-view.jpg`, caption: '3D Model Front View' },
            { image: `${BASE_URL}/assets/projects/maze-solver/top-view.jpg`, caption: '3D Model Top View' },
            {
                type: `youtube`,
                videoId: `vUuBfmftLQ4`,
                caption: `In Action`
            }
        ],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/maze_solver_wall-follower_bot', size: 'GitHub' }
        ]
    },
    {
        id: 'self-balancing-robot',
        title: 'ESP32 Self-Balancing Robot',
        description: 'Autonomous inverted pendulum robot with real-time web dashboard and PID tuning. Powered by MPU6050 DMP.',
        tags: ['C++', 'ESP32', 'MPU6050', 'PID', 'Control Theory'],
        thumbnail: SelfBalancingRobotThumbnail,
        date: '2024-03-01',
        overview: 'A two-wheeled self-balancing robot that uses an MPU6050 IMU and PID control loop to stay upright. Features a web interface for real-time parameter tuning.',
        wiring: [
            { component: 'MPU6050 SDA', pin: 'GPIO 32' },
            { component: 'MPU6050 SCL', pin: 'GPIO 33' },
            { component: 'MPU6050 INT', pin: 'GPIO 27' },
            { component: 'Motor A (L298N)', pin: 'ENA → GPIO 25, IN1 → GPIO 23, IN2 → GPIO 22' },
            { component: 'Motor B (L298N)', pin: 'ENB → GPIO 26, IN3 → GPIO 21, IN4 → GPIO 19' },
            { component: 'Power', pin: '12V LiPo → Motors, 5V Regulator → ESP32' }
        ],
        steps: [
            {
                title: 'Chassis Construction',
                description: 'Build or 3D print a tall, narrow chassis. Mount two high-torque DC motors with encoders at the base.',
                image: null
            },
            {
                title: 'MPU6050 Mounting',
                description: 'Mount the MPU6050 IMU at the center of gravity. Ensure it is level and securely attached to minimize vibration noise.',
                image: `${BASE_URL}/assets/projects/self-balancing/mpu6050.png`
            },
            {
                title: 'IMU Calibration',
                description: 'Run the MPU6050 calibration routine to calculate gyro offsets. Store offsets in code for consistent readings at startup.',
                image: null
            },
            {
                title: 'DMP Configuration',
                description: 'Initialize the MPU6050 Digital Motion Processor (DMP) for fused sensor data. This provides stable pitch angle with minimal drift.',
                image: null
            },
            {
                title: 'PID Loop Implementation',
                description: 'Implement the PID control loop: read pitch angle, calculate error from setpoint (0°), compute motor output. Tune Kp first, then Kd, finally Ki.',
                image: null
            },
            {
                title: 'Web Dashboard',
                description: 'Deploy the built-in web server on ESP32. Access the dashboard via WiFi to monitor pitch angle and adjust PID parameters in real-time.',
                image: `${BASE_URL}/assets/projects/self-balancing/dashboard.jpg`
            }
        ],
        gallery: [
            { image: `${BASE_URL}/assets/projects/self-balancing/sideview.jpg`, caption: 'Side View' },
            {
                type: `youtube`,
                videoId: `TK-PE49eN74`,
                caption: `Self Balancing Demo`
            },
            { image: `${BASE_URL}/assets/projects/self-balancing/electronics.png`, caption: 'Electronics' }
        ],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/self_balancing_robot', size: 'GitHub' }
        ]
    },
    {
        id: 'companion-bot',
        title: 'Companion Bot v3',
        description: 'Interactive desk companion with OLED face, servo expressions, and AI chat capabilities via Groq API.',
        tags: ['C++', 'ESP32-S3', 'AI', 'IoT', 'OLED'],
        thumbnail: CompanionBotThumbnail,
        date: '2024-03-20',
        overview: 'A smart desktop companion that interacts with you using animated expressions and AI. It can check crypto prices, weather, and chat using LLMs.',
        wiring: [
            { component: 'OLED SDA (I2C)', pin: 'GPIO 8' },
            { component: 'OLED SCL (I2C)', pin: 'GPIO 9' },
            { component: 'Nod Servo', pin: 'GPIO 4' },
            { component: 'Shake Servo', pin: 'GPIO 5' },
            { component: 'Piezo Buzzer', pin: 'GPIO 6' },
            { component: 'Capacitive Touch', pin: 'GPIO 2' }
        ],
        steps: [
            {
                title: 'Hardware Preparation',
                description: 'Gather components: ESP32-S3 board, SH1106 128x64 OLED display, 2x SG90 micro servos, passive buzzer, and capacitive touch sensor.',
                image: `${BASE_URL}/assets/projects/companion-bot/components.png`
            },
            {
                title: 'Display Wiring',
                description: 'Connect the SH1106 OLED via I2C (SDA to GPIO8, SCL to GPIO9). Verify with a simple test sketch before proceeding.',
                image: null
            },
            {
                title: 'Servo Assembly',
                description: 'Mount servos for head movements: one for nodding (up/down), one for shaking (left/right). Connect to PWM-capable GPIO pins.',
                image: `${BASE_URL}/assets/projects/companion-bot/servos.jpg`
            },
            {
                title: 'RoboEyes Library',
                description: 'Install and configure the RoboEyes library for procedural eye animations. Customize blink rate, look direction, and emotion states.',
                image: null
            },
            {
                title: 'Groq API Integration',
                description: 'Sign up for Groq API and obtain an API key. Add WiFi credentials and API key to the config. Implement HTTP POST requests for chat.',
                image: null
            },
            {
                title: 'Web Dashboard',
                description: 'Access the companion bot\'s web interface to switch modes (Face, Clock, Pomodoro, Bitcoin, Weather) and send chat messages.',
                image: `${BASE_URL}/assets/projects/companion-bot/web-dashboard.jpg`
            }
        ],
        gallery: [
            { image: `${BASE_URL}/assets/projects/companion-bot/cuteface.jpg`, caption: 'Cute Face' },
            {
                type: `youtube`,
                videoId: `7L7tV34vv1M`,
                caption: `Demo Video`
            }

        ],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/companion_bot', size: 'GitHub' }
        ]
    },
    {
        id: 'bot-visualizer',
        title: 'BotVisualizer',
        description: 'Real-time web telemetry visualizer for the maze solver bot using WebSockets and React.',
        tags: ['React', 'JavaScript', 'WebSockets', 'Vite', 'Visualization'],
        thumbnail: BotVisualizerThumbnail,
        date: '2024-02-15',
        overview: 'A web application built with React and Vite to visualize the internal state and sensor data of the maze-solving robot in real-time.',
        wiring: [], // No hardware wiring for web project
        steps: [
            {
                title: 'Project Setup',
                description: 'Clone the repository and run `npm install` to install dependencies. The project uses Vite for fast development builds.',
                image: null
            },
            {
                title: 'ESP32 Firmware',
                description: 'Flash the companion ESP32 firmware that broadcasts telemetry data via WebSockets. Configure the WiFi credentials.',
                image: null
            },
            {
                title: 'WebSocket Connection',
                description: 'Update the WebSocket URL in the React app to match your ESP32\'s IP address. The app auto-reconnects on disconnect.',
                image: null
            },
            {
                title: 'Running the Visualizer',
                description: 'Start the development server with `npm run dev`. Open the browser to see real-time sensor readings, PID outputs, and path data.',
                image: null
            },
            {
                title: 'Understanding the UI',
                description: 'The dashboard shows: sensor distances (left/center/right), motor speeds, PID error graph, and a 2D representation of the bot\'s path.',
                image: null
            }
        ],
        gallery: [
            { image: `${BASE_URL}/assets/projects/bot-visualizer/pathvisualization.png`, caption: 'Dashboard Overview' },
            { image: `${BASE_URL}/assets/projects/bot-visualizer/pathoptimized.jpg`, caption: 'Path Visualization' }
        ],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/botvisualizer', size: 'GitHub' }
        ]
    },
    {
        id: 'space-impact',
        title: 'SpaceImpact',
        description: 'Faithful recreation of the classic Nokia Space Impact game for ESP32 and OLED displays.',
        tags: ['C++', 'GameDev', 'ESP32', 'OLED', 'Retro'],
        thumbnail: SpaceImpactThumbnail,
        date: '2024-04-05',
        overview: 'A complete clone of the legendary Space Impact game, optimized for the ESP32-C3 SuperMini and SH1106 OLEDs. Features joystick control and enemy waves.',
        wiring: [
            { component: 'OLED SDA (I2C)', pin: 'GPIO 8' },
            { component: 'OLED SCL (I2C)', pin: 'GPIO 9' },
            { component: 'Joystick Y-Axis', pin: 'GPIO 0 (ADC)' },
            { component: 'Joystick X-Axis', pin: 'GPIO 1 (ADC)' },
            { component: 'Joystick Button', pin: 'GPIO 3 (Digital)' }
        ],
        steps: [
            {
                title: 'Hardware Requirements',
                description: 'Gather: ESP32-C3 SuperMini, SH1106 128x64 OLED display, analog joystick module (VRx, VRy, SW pins).',
                image: `${BASE_URL}/assets/projects/space-impact/components.png`
            },
            {
                title: 'Upload the Game',
                description: 'Open the project in Arduino IDE or PlatformIO. Select ESP32-C3 board, correct COM port, and upload.',
                image: null
            },
            {
                title: 'Gameplay',
                description: 'Move your spaceship with the joystick to dodge enemies and obstacles. Press the joystick button to shoot. Survive as long as possible!',
                image: null
            }
        ],
        gallery: [
            {
                type: `youtube`,
                videoId: `6a7KJNsjUE0`,
                caption: `Gameplay Demo`
            },
            { image: `${BASE_URL}/assets/projects/space-impact/hardware-setup.jpg`, caption: 'Hardware Setup' }
        ],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/SpaceImpact', size: 'GitHub' }
        ]
    },
    {
        id: 'retro-snake',
        title: 'RetroSnake',
        description: 'Classic Snake game implementation for ESP32-C3 with analog joystick support.',
        tags: ['C++', 'GameDev', 'ESP32', 'OLED'],
        thumbnail: RetroSnakeThumbnail,
        date: '2024-04-10',
        overview: 'The timeless Snake game brought to the ESP32 platform. Optimized for low-memory microcontrollers and smooth OLED rendering.',
        wiring: [
            { component: 'OLED SDA (I2C)', pin: 'GPIO 8' },
            { component: 'OLED SCL (I2C)', pin: 'GPIO 9' },
            { component: 'Joystick Y-Axis', pin: 'GPIO 0 (ADC)' },
            { component: 'Joystick X-Axis', pin: 'GPIO 1 (ADC)' },
            { component: 'Joystick Button', pin: 'GPIO 3 (Digital)' }
        ],
        steps: [
            {
                title: 'Hardware Setup',
                description: 'Use the same hardware as SpaceImpact: ESP32-C3 SuperMini, SH1106 OLED, and analog joystick.',
                image: `${BASE_URL}/assets/projects/retro-snake/components.png`
            },
            {
                title: 'Joystick Calibration',
                description: 'The joystick center position may vary. Adjust the dead zone threshold in code to prevent unintended movement.',
                image: null
            },
            {
                title: 'Flash the Firmware',
                description: 'Compile and upload via Arduino IDE. The game starts immediately on boot.',
                image: null
            },
            {
                title: 'How to Play',
                description: 'Control the snake with the joystick. Eat food to grow longer. Avoid hitting walls or your own tail!',
                image: null
            }
        ],
        gallery: [
            {
                type: `youtube`,
                videoId: `Pu2f6jp2hwc`,
                caption: `Gameplay Demo`
            },
            { image: `${BASE_URL}/assets/projects/retro-snake/hardware-setup.jpg`, caption: 'Hardware Setup' }
        ],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/RetroSnake', size: 'GitHub' }
        ]
    },
    {
        id: 'favorite-boy-oled',
        title: 'FavoriteBoyOLED',
        description: 'High-performance bitmap animation engine for SH1106 OLED displays on ESP32.',
        tags: ['C++', 'Graphics', 'ESP32', 'Arduino', 'Animation'],
        thumbnail: FavoriteBoyThumbnail,
        date: '2024-04-15',
        overview: 'A simplified graphics library/engine for displaying smooth bitmap animations on OLED screens, tailored for the ESP32-C3.',
        wiring: [
            { component: 'OLED SDA (I2C)', pin: 'GPIO 8' },
            { component: 'OLED SCL (I2C)', pin: 'GPIO 9' },
            { component: 'OLED VCC', pin: '3.3V' },
            { component: 'OLED GND', pin: 'GND' }
        ],
        steps: [
            {
                title: 'Gather Components',
                description: 'You need: ESP32-C3 SuperMini and an SH1106 128x64 OLED display. No additional input devices required.',
                image: null
            },
            {
                title: 'Prepare Animation Frames',
                description: 'Convert your animation frames (GIF or image sequence) to C arrays using tools like image2cpp or LCD Assistant.',
                image: null
            },
            {
                title: 'Add Frames to Code',
                description: 'Include the generated bitmap arrays in a header file. Define frame count and frame timing (e.g., 70ms per frame for ~14 FPS).',
                image: null
            },
            {
                title: 'Display Initialization',
                description: 'Initialize the SH1106 display with Adafruit libraries. Clear the buffer before drawing each frame.',
                image: null
            },
            {
                title: 'Animation Loop',
                description: 'In the main loop, iterate through frames and display each one with a delay. Use `display.drawBitmap()` for rendering.',
                image: null
            }
        ],
        gallery: [
            {
                type: `youtube`,
                videoId: `8c2Almk1yDg`,
                caption: `Animation Demo`
            },

            { image: `${BASE_URL}/assets/projects/favorite-boy/hardware-setup.jpg`, caption: 'Hardware Setup' }
        ],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/FavoriteBoyOLED', size: 'GitHub' }
        ]
    }
];
