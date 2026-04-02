import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to dark
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app-bg-pattern">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <nav className="nav-container">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <div className="logo-prism">
                <div className="prism-shape"></div>
              </div>
            </div>
            <span className="logo-text">
              <span className="prism">CONSTRUCTION BY</span>
              <span className="flux">FEDCAP</span>
            </span>
          </Link>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/employment" className={location.pathname === '/employment' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
                Employment
              </Link>
            </li>
            <li>
              <Link to="/learning" className={location.pathname === '/learning' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
                Learning
              </Link>
            </li>
            <li>
              <Link to="/trades" className={location.pathname === '/trades' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
                Trades
              </Link>
            </li>
            <li>
              <Link to="/build-with-ai" className={location.pathname === '/build-with-ai' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
                Build with AI
              </Link>
            </li>
            <li className="theme-toggle-container">
              <button className="theme-toggle-btn" onClick={toggleTheme} title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                {isDarkMode ? <Sun /> : <Moon />}
              </button>
              <span className="theme-label">{isDarkMode ? 'Day' : 'Night'}</span>
            </li>
            {isMenuOpen && (
              <li className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>
                <X size={24} /> Close Menu
              </li>
            )}
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <div className="logo-prism">
                  <div className="prism-shape"></div>
                </div>
              </div>
              <span className="logo-text">
                <span className="prism">CONSTRUCTION BY</span>
                <span className="flux">FEDCAP</span>
              </span>
            </div>
            <p className="footer-description">
              Building the future of construction through specialized pathways, AI intelligence, and career development.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <div className="footer-links-row">
              <Link to="/">HOME</Link>
              <span className="footer-separator">/</span>
              <Link to="/employment">EMPLOYMENT</Link>
              <span className="footer-separator">/</span>
              <Link to="/learning">LEARNING</Link>
              <span className="footer-separator">/</span>
              <Link to="/trades">TRADES</Link>
              <span className="footer-separator">/</span>
              <Link to="/build-with-ai">BUILD WITH AI</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © 2026 CONSTRUCTION BY FEDCAP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
