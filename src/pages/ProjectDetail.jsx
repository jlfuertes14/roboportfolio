import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft, FaPlay, FaImage } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1>Project Not Found</h1>
                <Link to="/" className="btn">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="project-detail">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-link"><FaArrowLeft /> Back to Projects</Link>
                    <h1 className="project-title">{project.title}</h1>
                    <div className="project-meta">
                        <span className="date">{project.date}</span>
                        <div className="tags">
                            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container project-content">
                <div className="content-grid">
                    <div className="main-column">
                        <section className="section">
                            <h2>Overview</h2>
                            <p className="overview-text">{project.overview}</p>
                        </section>

                        {project.steps.length > 0 && (
                            <section className="section">
                                <h2>Build Procedures</h2>
                                <div className="steps-list">
                                    {project.steps.map((step, index) => (
                                        <div key={index} className="step-item">
                                            <div className="step-number">{index + 1}</div>
                                            <div className="step-content">
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                                {step.image && (
                                                    <img src={step.image} alt={step.title} className="step-image" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {project.gallery.length > 0 && (
                            <section className="section">
                                <h2>Gallery</h2>
                                <div className="gallery-grid">
                                    {project.gallery.map((item, index) => (
                                        <div key={index} className="gallery-item">
                                            {item.type === 'video' ? (
                                                <div className="video-placeholder">
                                                    <FaPlay className="play-icon" />
                                                    <span>{item.caption}</span>
                                                </div>
                                            ) : (
                                                <img src={item.url} alt={item.caption} />
                                            )}
                                            <div className="caption">{item.caption}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="sidebar">
                        <div className="sidebar-card">
                            <h3>Downloads</h3>
                            {project.downloads.length > 0 ? (
                                <div className="downloads-list">
                                    {project.downloads.map((file, index) => (
                                        <a key={index} href={file.url} className="download-item">
                                            <div className="file-info">
                                                <span className="file-name">{file.name}</span>
                                                <span className="file-size">{file.size}</span>
                                            </div>
                                            <FaDownload />
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted">No files available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .project-header {
          background: var(--color-bg-secondary);
          padding: var(--spacing-lg) 0 var(--spacing-md);
          border-bottom: 1px solid var(--color-border);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .back-link:hover {
          color: var(--color-accent);
        }

        .project-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--color-text-primary);
        }

        .project-meta {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .date {
          color: var(--color-text-secondary);
          font-family: var(--font-family-mono);
        }

        .tags {
          display: flex;
          gap: 0.5rem;
        }

        .tag {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .project-content {
          padding: var(--spacing-lg) 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3rem;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        .section {
          margin-bottom: 4rem;
        }

        .overview-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text-secondary);
        }

        .step-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          background: var(--color-bg-card);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: var(--color-accent);
          color: var(--color-bg-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .step-content h3 {
          margin-top: 0;
          font-size: 1.2rem;
        }

        .step-image {
          margin-top: 1rem;
          width: 100%;
          border-radius: 4px;
          border: 1px solid var(--color-border);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }

        .gallery-item {
          background: var(--color-bg-card);
          border-radius: 8px;
          overflow: hidden;
        }

        .gallery-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .video-placeholder {
          width: 100%;
          height: 200px;
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          gap: 0.5rem;
        }

        .play-icon {
          font-size: 2rem;
          color: var(--color-accent);
        }

        .caption {
          padding: 0.5rem;
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          text-align: center;
          background: var(--color-bg-card);
        }

        .sidebar-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 1.5rem;
          position: sticky;
          top: 100px;
        }

        .download-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
          margin-bottom: 0.5rem;
          transition: background var(--transition-fast);
        }

        .download-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--color-accent);
        }

        .file-name {
          display: block;
          font-weight: 500;
        }

        .file-size {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .text-muted {
          color: var(--color-text-secondary);
          font-style: italic;
        }
      `}</style>
        </div>
    );
};

export default ProjectDetail;
