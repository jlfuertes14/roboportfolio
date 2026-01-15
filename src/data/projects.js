export const projects = [
    {
        id: 'maze-solver-bot',
        title: 'Maze Solver Wall-Follower Bot',
        description: 'ESP32-based robot with diagonal sensor geometry and predictive PID control for maze solving. Features smart recovery and gap detection.',
        tags: ['C++', 'ESP32', 'Robotics', 'PID', 'Algorithms'],
        thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-02-10',
        overview: 'An advanced maze-solving robot that anticipates walls using diagonal sonars. It implements predictive PID control for smooth navigation and trigonometry-based gap detection.',
        steps: [
            {
                title: 'Hardware Assembly',
                description: 'Assemble the chassis with two DC motors and mount the ESP32 development board. Attach the motor driver (L298N) and connect power distribution.',
                image: null
            },
            {
                title: 'Sensor Mounting',
                description: 'Mount three HC-SR04 ultrasonic sensors at diagonal angles: North-West (45°), North (0°), and North-East (45°). This geometry enables predictive wall detection.',
                image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Wiring & Connections',
                description: 'Connect sensor trigger/echo pins to ESP32 GPIO. Wire motor driver inputs to ESP32 PWM pins. Ensure proper power isolation between logic and motors.',
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
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/maze_solver_wall-follower_bot', size: 'GitHub' }
        ]
    },
    {
        id: 'self-balancing-robot',
        title: 'ESP32 Self-Balancing Robot',
        description: 'Autonomous inverted pendulum robot with real-time web dashboard and PID tuning. Powered by MPU6050 DMP.',
        tags: ['C++', 'ESP32', 'MPU6050', 'PID', 'Control Theory'],
        thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-03-01',
        overview: 'A two-wheeled self-balancing robot that uses an MPU6050 IMU and PID control loop to stay upright. Features a web interface for real-time parameter tuning.',
        steps: [
            {
                title: 'Chassis Construction',
                description: 'Build or 3D print a tall, narrow chassis. Mount two NEMA17 stepper motors or high-torque DC motors with encoders at the base.',
                image: null
            },
            {
                title: 'MPU6050 Mounting',
                description: 'Mount the MPU6050 IMU at the center of gravity. Ensure it is level and securely attached to minimize vibration noise.',
                image: null
            },
            {
                title: 'Motor Driver Setup',
                description: 'Connect the L298N motor driver to ESP32. Wire motor A and B to the driver outputs. Connect PWM and direction pins.',
                image: null
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
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Web Dashboard',
                description: 'Deploy the built-in web server on ESP32. Access the dashboard via WiFi to monitor pitch angle and adjust PID parameters in real-time without reflashing.',
                image: null
            }
        ],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/self_balancing_robot', size: 'GitHub' }
        ]
    },
    {
        id: 'companion-bot',
        title: 'Companion Bot v3',
        description: 'Interactive desk companion with OLED face, servo expressions, and AI chat capabilities via Groq API.',
        tags: ['C++', 'ESP32-S3', 'AI', 'IoT', 'OLED'],
        thumbnail: 'https://images.unsplash.com/photo-1535378437327-b7128d8e1d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-03-20',
        overview: 'A smart desktop companion that interacts with you using animated expressions and AI. It can check crypto prices, weather, and chat using LLMs.',
        steps: [
            {
                title: 'Hardware Preparation',
                description: 'Gather components: ESP32-S3 board, SH1106 128x64 OLED display, 2x SG90 micro servos, passive buzzer, and capacitive touch sensor.',
                image: null
            },
            {
                title: 'Display Wiring',
                description: 'Connect the SH1106 OLED via I2C (SDA to GPIO8, SCL to GPIO9). Verify with a simple test sketch before proceeding.',
                image: null
            },
            {
                title: 'Servo Assembly',
                description: 'Mount servos for head movements: one for nodding (up/down), one for shaking (left/right). Connect to PWM-capable GPIO pins.',
                image: null
            },
            {
                title: 'Touch Sensor Setup',
                description: 'Wire the capacitive touch sensor to a touch-capable GPIO. Configure touch threshold for reliable pet/wake detection.',
                image: null
            },
            {
                title: 'RoboEyes Library',
                description: 'Install and configure the RoboEyes library for procedural eye animations. Customize blink rate, look direction, and emotion states.',
                image: null
            },
            {
                title: 'Groq API Integration',
                description: 'Sign up for Groq API and obtain an API key. Add WiFi credentials and API key to the config. Implement HTTP POST requests for chat completions.',
                image: null
            },
            {
                title: 'Web Dashboard',
                description: 'Access the companion bot\'s web interface to switch modes (Face, Clock, Pomodoro, Bitcoin, Weather) and send chat messages.',
                image: null
            },
            {
                title: 'Sound Effects',
                description: 'Connect the passive buzzer and implement cute sound effects for different moods and interactions (happy, curious, sleepy).',
                image: null
            }
        ],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/companion_bot', size: 'GitHub' }
        ]
    },
    {
        id: 'bot-visualizer',
        title: 'BotVisualizer',
        description: 'Real-time web telemetry visualizer for the maze solver bot using WebSockets and React.',
        tags: ['React', 'JavaScript', 'WebSockets', 'Vite', 'Visualization'],
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-02-15',
        overview: 'A web application built with React and Vite to visualize the internal state and sensor data of the maze-solving robot in real-time.',
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
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/botvisualizer', size: 'GitHub' }
        ]
    },
    {
        id: 'space-impact',
        title: 'SpaceImpact',
        description: 'Faithful recreation of the classic Nokia Space Impact game for ESP32 and OLED displays.',
        tags: ['C++', 'GameDev', 'ESP32', 'OLED', 'Retro'],
        thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-04-05',
        overview: 'A complete clone of the legendary Space Impact game, optimized for the ESP32-C3 SuperMini and SH1106 OLEDs. Features joystick control and enemy waves.',
        steps: [
            {
                title: 'Hardware Requirements',
                description: 'Gather: ESP32-C3 SuperMini, SH1106 128x64 OLED display, analog joystick module (VRx, VRy, SW pins).',
                image: null
            },
            {
                title: 'Display Connection',
                description: 'Connect the SH1106 via I2C: SDA to GPIO8, SCL to GPIO9. Install Adafruit GFX and Adafruit SH110X libraries.',
                image: null
            },
            {
                title: 'Joystick Wiring',
                description: 'Connect joystick VRx to an ADC pin for horizontal movement, VRy for vertical, and SW (button) to a digital GPIO for firing.',
                image: null
            },
            {
                title: 'Uploading the Game',
                description: 'Open the project in Arduino IDE or PlatformIO. Select ESP32-C3 board, correct COM port, and upload.',
                image: null
            },
            {
                title: 'Gameplay',
                description: 'Move your spaceship with the joystick to dodge enemies and obstacles. Press the joystick button to shoot. Survive as long as possible!',
                image: null
            }
        ],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/SpaceImpact', size: 'GitHub' }
        ]
    },
    {
        id: 'retro-snake',
        title: 'RetroSnake',
        description: 'Classic Snake game implementation for ESP32-C3 with analog joystick support.',
        tags: ['C++', 'GameDev', 'ESP32', 'OLED'],
        thumbnail: 'https://images.unsplash.com/photo-1580234550905-96d3fba4353f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-04-10',
        overview: 'The timeless Snake game brought to the ESP32 platform. Optimized for low-memory microcontrollers and smooth OLED rendering.',
        steps: [
            {
                title: 'Hardware Setup',
                description: 'Use the same hardware as SpaceImpact: ESP32-C3 SuperMini, SH1106 OLED, and analog joystick.',
                image: null
            },
            {
                title: 'I2C Configuration',
                description: 'Confirm I2C pins (SDA: GPIO8, SCL: GPIO9) are correctly defined in the code. Adjust if using different GPIOs.',
                image: null
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
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/RetroSnake', size: 'GitHub' }
        ]
    },
    {
        id: 'favorite-boy-oled',
        title: 'FavoriteBoyOLED',
        description: 'High-performance bitmap animation engine for SH1106 OLED displays on ESP32.',
        tags: ['C++', 'Graphics', 'ESP32', 'Arduino', 'Animation'],
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-04-15',
        overview: 'A simplified graphics library/engine for displaying smooth bitmap animations on OLED screens, tailored for the ESP32-C3.',
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
            },
            {
                title: 'Optimization Tips',
                description: 'For smoother playback: store frames in PROGMEM, minimize buffer clears, and use partial screen updates if possible.',
                image: null
            }
        ],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/FavoriteBoyOLED', size: 'GitHub' }
        ]
    }
];
