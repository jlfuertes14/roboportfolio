export const projects = [
    {
        id: 'maze-solver-bot',
        title: 'Maze Solver Wall-Follower Bot',
        description: 'ESP32-based robot with diagonal sensor geometry and predictive PID control for maze solving. Features smart recovery and gap detection.',
        tags: ['C++', 'ESP32', 'Robotics', 'PID', 'Algorithms'],
        thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Robotics/AI placeholder
        date: '2024-02-10',
        overview: 'An advanced maze-solving robot that anticipates walls using diagonal sonars. It implements predictive PID control for smooth navigation and trigonometry-based gap detection.',
        steps: [
            {
                title: 'Sensor Geometry',
                description: 'Arranged sonar sensors in a North-West, North-East configuration to detect walls early.',
                image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'PID Implementation',
                description: 'Tuned PID controller to minimize error in wall distance, ensuring straight paths and smooth turns.',
                image: null
            }
        ],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/maze_solver_wall-follower_bot', size: 'Unknown' }
        ]
    },
    {
        id: 'self-balancing-robot',
        title: 'ESP32 Self-Balancing Robot',
        description: 'Autonomous inverted pendulum robot with real-time web dashboard and PID tuning. Powered by MPU6050 DMP.',
        tags: ['C++', 'ESP32', 'MPU6050', 'PID', 'Control Theory'],
        thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Futuristic robot placeholder
        date: '2024-03-01',
        overview: 'A two-wheeled self-balancing robot that uses an MPU6050 IMU and PID control loop to stay upright. Features a web interface for real-time parameter tuning.',
        steps: [
            {
                title: 'IMU Integration',
                description: 'Utilizing MPU6050 DMP for precise pitch and roll data.',
                image: null
            },
            {
                title: 'Web Control',
                description: 'Hosted a web server on the ESP32 to visualize tilt data and adjust PID values wirelessly.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/self_balancing_robot', size: 'Unknown' }
        ]
    },
    {
        id: 'companion-bot',
        title: 'Companion Bot v3',
        description: 'Interactive desk companion with OLED face, servo expressions, and AI chat capabilities via Groq API.',
        tags: ['C++', 'ESP32-S3', 'AI', 'IoT', 'OLED'],
        thumbnail: 'https://images.unsplash.com/photo-1535378437327-b7128d8e1d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Cute robot/companion placeholder
        date: '2024-03-20',
        overview: 'A smart desktop companion that interacts with you using animated expressions and AI. It can check crypto prices, weather, and chat using LLMs.',
        steps: [
            {
                title: 'Expression Engine',
                description: 'Using RoboEyes library to procedurally generate eye movements and emotions.',
                image: null
            },
            {
                title: 'AI Integration',
                description: 'Connected to Groq API for fast, conversational AI responses displayed on the OLED.',
                image: null
            }
        ],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/companion_bot', size: 'Unknown' }
        ]
    },
    {
        id: 'bot-visualizer',
        title: 'BotVisualizer',
        description: 'Real-time web telemetry visualizer for the maze solver bot using WebSockets and React.',
        tags: ['React', 'JavaScript', 'WebSockets', 'Vite', 'Visualization'],
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Dashboard/Data placeholder
        date: '2024-02-15',
        overview: 'A web application built with React and Vite to visualize the internal state and sensor data of the maze-solving robot in real-time.',
        steps: [],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/botvisualizer', size: 'Unknown' }
        ]
    },
    {
        id: 'space-impact',
        title: 'SpaceImpact',
        description: 'Faithful recreation of the classic Nokia Space Impact game for ESP32 and OLED displays.',
        tags: ['C++', 'GameDev', 'ESP32', 'OLED', 'Retro'],
        thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Retro gaming placeholder
        date: '2024-04-05',
        overview: 'A complete clone of the legendary Space Impact game, optimized for the ESP32-C3 SuperMini and SH1106 OLEDs. Features joystick control and enemy waves.',
        steps: [],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/SpaceImpact', size: 'Unknown' }
        ]
    },
    {
        id: 'retro-snake',
        title: 'RetroSnake',
        description: 'Classic Snake game implementation for ESP32-C3 with analog joystick support.',
        tags: ['C++', 'GameDev', 'ESP32', 'OLED'],
        thumbnail: 'https://images.unsplash.com/photo-1580234550905-96d3fba4353f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Snake/Retro placeholder
        date: '2024-04-10',
        overview: 'The timeless Snake game brought to the ESP32 platform. Optimized for low-memory microcontrollers and smooth OLED rendering.',
        steps: [],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/RetroSnake', size: 'Unknown' }
        ]
    },
    {
        id: 'favorite-boy-oled',
        title: 'FavoriteBoyOLED',
        description: 'High-performance bitmap animation engine for SH1106 OLED displays on ESP32.',
        tags: ['C++', 'Graphics', 'ESP32', 'Arduino', 'Animation'],
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Digital art/screen placeholder
        date: '2024-04-15',
        overview: 'A simplified graphics library/engine for displaying smooth bitmap animations on OLED screens, tailored for the ESP32-C3.',
        steps: [],
        gallery: [],
        downloads: [
            { name: 'Source Code', url: 'https://github.com/jlfuertes14/FavoriteBoyOLED', size: 'Unknown' }
        ]
    }
];
