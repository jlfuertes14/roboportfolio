import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft, FaPlay, FaImage } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [lightboxImage, setLightboxImage] = React.useState(null);

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

            {project.wiring && project.wiring.length > 0 && (
              <section className="section">
                <h2>Wiring Diagram</h2>
                <table className="wiring-table">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Pin Connection</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.wiring.map((item, index) => (
                      <tr key={index}>
                        <td>{item.component}</td>
                        <td><code>{item.pin}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}

            {project.steps.length > 0 && (
              <section className="section">
                <h2>Build Procedures</h2>
                <div className="steps-list">
                  {project.steps.map((step, index) => (
                    <div key={index} className="step-item">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h3>{step.title}</h3>
                        <p style={{ whiteSpace: 'pre-line' }}>{step.description}</p>
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
                        <video
                          controls
                          className="gallery-video"
                          poster={item.poster}
                        >
                          <source src={item.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : item.type === 'youtube' ? (
                        <div className="youtube-container">
                          <iframe
                            src={`https://www.youtube.com/embed/${item.videoId}`}
                            title={item.caption}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.caption}
                          onClick={() => setLightboxImage(item)}
                          style={{ cursor: 'pointer' }}
                        />
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
            <img src={lightboxImage.image} alt={lightboxImage.caption} />
            <div className="lightbox-caption">{lightboxImage.caption}</div>
          </div>
        </div>
      )}

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
          padding: 0.4rem 0.5rem;
          font-size: 0.7rem;
          color: var(--color-accent);
          text-align: center;
          background: rgba(0, 243, 255, 0.05);
          border-top: 1px solid rgba(0, 243, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
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

        .wiring-table {
          width: 100%;
          border-collapse: collapse;
          background: var(--color-bg-card);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .wiring-table th,
        .wiring-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid var(--color-border);
        }

        .wiring-table th {
          background: var(--color-accent);
          color: var(--color-bg-primary);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }

        .wiring-table tr:last-child td {
          border-bottom: none;
        }

        .wiring-table tr:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .wiring-table code {
          background: rgba(0, 243, 255, 0.1);
          color: var(--color-accent);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-family: var(--font-family-mono);
          font-size: 0.9rem;
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
          cursor: zoom-out;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          cursor: default;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .lightbox-close {
          position: absolute;
          top: -2rem;
          right: 0;
          background: transparent;
          border: none;
          color: white;
          font-size: 3rem;
          cursor: pointer;
          line-height: 1;
          padding: 0;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }

        .lightbox-close:hover {
          color: var(--color-accent);
        }

        .lightbox-caption {
          color: white;
          text-align: center;
          margin-top: 1rem;
          font-size: 1.1rem;
        }

        /* Video Gallery Styles */
        .gallery-video {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          border-radius: 8px 8px 0 0;
        }

        /* YouTube Embed Styles */
        .youtube-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 8px 8px 0 0;
          background: #000;
        }

        .youtube-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px 8px 0 0;
        }

        @media (max-width: 768px) {
          .lightbox-content img {
            max-height: 70vh;
          }
          
          .lightbox-close {
            top: -3rem;
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
