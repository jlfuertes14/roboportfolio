export const projects = [
    {
        id: 'quadruped-robot-v1',
        title: 'Quadruped Robot V1',
        description: 'A 12-DOF quadruped robot built with Arduino and 3D printed parts. Features inverse kinematics and gait stability control.',
        tags: ['Robotics', 'Arduino', 'C++', '3D Printing'],
        thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2023-10-15',
        overview: 'This project aims to build a low-cost, open-source quadruped robot platform for educational purposes. It uses high-torque servos and a custom PCB for power distribution.',
        steps: [
            {
                title: 'Chassis Assembly',
                description: 'Assemble the 3D printed body parts using M3 screws. Ensure the servo brackets are aligned correctly.',
                image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Electronics Wiring',
                description: 'Connect the 12 servos to the PCA9685 driver board. Connect the driver board to the Arduino Mega.',
                image: 'https://images.unsplash.com/photo-1555664424-778a69022365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Software Calibration',
                description: 'Upload the calibration sketch to center the servos. Adjust the offsets in the config.h file.',
                image: null
            }
        ],
        gallery: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Final Assembly' },
            { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', caption: 'Walking Test' }
        ],
        downloads: [
            { name: 'STL Files', url: '#', size: '15 MB' },
            { name: 'Source Code', url: '#', size: '2 MB' }
        ]
    },
    {
        id: 'autonomous-rover',
        title: 'Autonomous Mars Rover',
        description: 'A 6-wheeled rover capable of autonomous navigation and obstacle avoidance using LIDAR and SLAM.',
        tags: ['ROS', 'Python', 'Raspberry Pi', 'LIDAR'],
        thumbnail: 'https://images.unsplash.com/photo-1535378437327-b7128d8e1d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2023-12-01',
        overview: 'Simulating a Mars rover mission, this robot navigates unknown terrain using SLAM (Simultaneous Localization and Mapping).',
        steps: [
            {
                title: 'Suspension Design',
                description: 'Implementing a rocker-bogie suspension system for stability on rough terrain.',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ],
        gallery: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1535378437327-b7128d8e1d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Rover in Desert' }
        ],
        downloads: [
            { name: 'Circuit Diagram', url: '#', size: '500 KB' }
        ]
    },
    {
        id: 'robotic-arm',
        title: '6-Axis Robotic Arm',
        description: 'Industrial style robotic arm for pick and place operations. Controlled via a custom React dashboard.',
        tags: ['Industrial', 'Automation', 'React', 'IoT'],
        thumbnail: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-01-20',
        overview: 'A precise 6-axis robotic arm designed for small-scale manufacturing tasks. It features a web-based control interface.',
        steps: [],
        gallery: [],
        downloads: []
    }
];
