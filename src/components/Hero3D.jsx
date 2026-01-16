import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Float, useGLTF, Center, Environment, useAnimations } from '@react-three/drei';

const RobotModel = (props) => {
    const group = useRef();
    const { scene, animations } = useGLTF(`${import.meta.env.BASE_URL}robot_playground.glb`);
    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        // Play the first animation found (usually the main loop)
        if (names.length > 0) {
            actions[names[0]].reset().fadeIn(0.5).play();
        }
    }, [actions, names]);

    useFrame((state, delta) => {
        // Gentle floating rotation
        if (group.current) {
            group.current.rotation.y += delta * 0.05
        }
    });

    return (
        <group ref={group} {...props}>
            <primitive object={scene} scale={2.4} />
        </group>
    );
};

const Hero3D = () => {
    return (
        <div className="hero-3d-container" style={{ width: '100%', height: '100vh' }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 9]} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

                {/* Lighting to make the model pop */}
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF9F1C" />
                <pointLight position={[-10, 5, -10]} intensity={1} color="#00f3ff" />
                <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} />

                {/* Environment for metallic reflections */}
                <Environment preset="city" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <RobotModel position={[4.5, -2.4, -1]} />
                </Float>

                {/* Background Atmosphere */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

// Preload the model
useGLTF.preload(`${import.meta.env.BASE_URL}robot_playground.glb`);

export default Hero3D;
