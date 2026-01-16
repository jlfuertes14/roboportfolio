import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <div className="projects-page container">
            <header className="page-header">
                <h1 className="page-title">Featured <span className="text-accent">Projects</span></h1>
                <p className="page-subtitle">A collection of my robotics and embedded systems work.</p>
            </header>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            <style>{`
                .projects-page {
                    padding: var(--spacing-md) 0;
                }
                
                .page-header {
                    text-align: center;
                    margin-bottom: var(--spacing-lg);
                }
                
                .page-title {
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .page-subtitle {
                    color: var(--color-text-secondary);
                    font-size: 1.1rem;
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: var(--spacing-xl);
                }
            `}</style>
        </div>
    );
};

export default Projects;
