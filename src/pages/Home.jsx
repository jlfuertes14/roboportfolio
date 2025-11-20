import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-content"
                >
                    <h1 className="hero-title">
                        Building the <span className="text-accent">Future</span> <br />
                        One Robot at a Time.
                    </h1>
                    <p className="hero-subtitle">
                        A showcase of advanced robotics projects, engineering walkthroughs, and technical documentation.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                    </div>
                </motion.div>
            </section>

            <section id="projects" className="projects-section container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            <style>{`
        .hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--spacing-xl) 0;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto var(--spacing-md);
        }

        .section-title {
          margin-bottom: var(--spacing-md);
          border-left: 4px solid var(--color-accent);
          padding-left: 1rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
      `}</style>
        </div>
    );
};

export default Home;
