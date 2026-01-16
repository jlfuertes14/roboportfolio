import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import Hero3D from '../components/Hero3D';

const Home = () => {
    return (
        <div className="home-page">
            {/* 3D Background Layer */}
            <div className="hero-3d-background">
                <Hero3D />
            </div>

            <section className="hero container">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Building the <span className="text-accent">Future</span> <br />
                        One Robot at a Time.
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        A showcase of advanced robotics projects, engineering walkthroughs, and technical documentation.
                    </motion.p>
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link to="/projects" className="btn btn-primary">View Projects</Link>
                    </motion.div>
                </motion.div>
            </section>

            <style>{`
        .home-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .hero-3d-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 0;
        }

        .floating-elements {
            display: none; /* Replaced by 3D stars */
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2; /* Sits above 3D background */
          pointer-events: none; /* Let clicks pass through to 3D scene mostly, but enable for buttons */
        }

        .hero-content {
            text-align: left;
            max-width: 600px;
            pointer-events: auto; /* Re-enable clicks for text/buttons */
        }
        
        .hero-title {
            font-size: 3.5rem;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            text-shadow: 0 4px 20px rgba(0,0,0,0.8); /* Better readability over 3D */
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          max-width: 500px;
          margin-bottom: 2rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
            .hero {
                align-items: flex-end; /* Push text to bottom on mobile so robot can be seen top? */
                padding-bottom: 10vh;
            }
            
            .hero-content {
                text-align: center;
                margin: 0 auto;
            }
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s infinite;
        }
      `}</style>
        </div>
    );
};

export default Home;
