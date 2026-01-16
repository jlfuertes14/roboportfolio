import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaRobot, FaGithub, FaLinkedin } from 'react-icons/fa';

const Layout = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="layout">
      {/* Scroll Progress Indicator */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo">
            <img src={`${import.meta.env.BASE_URL}jl-robotics-logo.png`} alt="JL-Robotics" className="logo-img" />
          </Link>
          <nav className="nav">
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
          </nav>
          <a href="https://jlfuertes14.github.io/my-portfolio" className="nav-link external-link">
            ← Visit My Portfolio
          </a>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} JL-Robotics. Innovating with Embedded Systems & Robotics.</p>
          </div>
          <div className="footer-right">
            <a href="https://github.com/jlfuertes14" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/jl-fuertes" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
          </div>
        </div>
      </footer>

      <style>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-accent), var(--color-accent-secondary));
          z-index: 1000;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px var(--color-accent-glow);
        }

        .header {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--color-border);
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 1rem 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .logo-icon {
          color: var(--color-accent);
        }

        .logo-img {
          height: auto;
          width: 220px; /* Adjust this value to change the length */
          border-radius: 4px;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        .nav-link:hover {
          color: var(--color-accent);
        }

        .main-content {
          flex: 1;
          padding: var(--spacing-md) 0;
        }

        .footer {
          background: var(--color-bg-secondary);
          border-top: 1px solid var(--color-border);
          padding: 2rem 0;
          margin-top: auto;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-left p {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }

        .footer-right {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          color: var(--color-text-secondary);
          font-size: 1.2rem;
        }

        .social-link:hover {
          color: var(--color-accent);
        }
        .external-link {
          margin-left: 2rem;
          font-size: 0.9rem;
          opacity: 0.7;
          border-left: 1px solid var(--color-border);
          padding-left: 1.5rem;
        }

        .external-link:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .header .container {
            flex-direction: column;
            gap: 1rem;
          }
          
          .external-link {
            margin-left: 0;
            border-left: none;
            padding-left: 0;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
