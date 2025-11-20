import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaRobot, FaGithub, FaLinkedin } from 'react-icons/fa';

const Layout = () => {
    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <FaRobot className="logo-icon" />
                        <span className="logo-text">ROBO<span className="text-accent">PORTFOLIO</span></span>
                    </Link>
                    <nav className="nav">
                        <Link to="/" className="nav-link">Projects</Link>
                        <a href="#" className="nav-link">About</a>
                        <a href="#" className="nav-link">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-left">
                        <p>&copy; {new Date().getFullYear()} Robotics Portfolio. Built for the future.</p>
                    </div>
                    <div className="footer-right">
                        <a href="#" className="social-link"><FaGithub /></a>
                        <a href="#" className="social-link"><FaLinkedin /></a>
                    </div>
                </div>
            </footer>

            <style>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
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
      `}</style>
        </div>
    );
};

export default Layout;
