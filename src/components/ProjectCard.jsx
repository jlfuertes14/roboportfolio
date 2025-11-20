import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card"
        >
            <div className="card-image-container">
                <img src={project.thumbnail} alt={project.title} className="card-image" />
                <div className="card-overlay">
                    <Link to={`/project/${project.id}`} className="btn btn-primary">
                        View Project
                    </Link>
                </div>
            </div>
            <div className="card-content">
                <div className="card-tags">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <Link to={`/project/${project.id}`} className="card-link">
                    Read More <FaArrowRight />
                </Link>
            </div>

            <style>{`
        .project-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          overflow: hidden;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-color: var(--color-accent);
        }

        .card-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .project-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 0.75rem;
          color: var(--color-accent);
          background: rgba(0, 243, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-family: var(--font-family-mono);
        }

        .card-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-primary);
        }

        .card-description {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-primary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .card-link:hover {
          color: var(--color-accent);
        }
      `}</style>
        </motion.div>
    );
};

export default ProjectCard;
