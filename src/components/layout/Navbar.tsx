import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import SocialIcons from '../shared/SocialIcons';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed-top">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Brand */}
          <div className="navbar-brand">
            <Link to="/">
              <span className="gradient-text fw-bold">
                Bhogi Sharan
              </span>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle d-md-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="navigation-container d-none d-md-block">
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Icons & Theme Toggle */}
          <div className="nav-actions d-flex align-items-center">
            <SocialIcons className="me-3 d-none d-md-flex" />
            
            <button
              className="theme-toggle-btn"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SocialIcons className="mt-3" />
        </div>
      )}
    </header>
  );
};

export default Navbar; 