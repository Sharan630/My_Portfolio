import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import SocialIcons from '../shared/SocialIcons';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };
  
  const menuItemVariants = {
    closed: { 
      opacity: 0, 
      x: -10,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <motion.span 
              className="gradient-text fw-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Bhogi Sharan
            </motion.span>
          </Link>
          
          <div className="d-flex align-items-center">
            {/* Dark mode toggle on mobile */}
            <motion.button
              className="theme-toggle-btn me-3 d-lg-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
            
            {/* Mobile menu toggle */}
            <motion.button
              className="navbar-toggler"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <motion.div
                initial={false}
                animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
            </motion.button>
          </div>
          
          {/* Desktop menu */}
          <motion.div
            className="collapse navbar-collapse"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className="navbar-nav mx-auto">
              {navLinks.map((link) => (
                <motion.li key={link.path} className="nav-item" variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div className="d-none d-lg-flex align-items-center" variants={itemVariants}>
              <SocialIcons className="me-3" />
              
              <motion.button
                className="theme-toggle-btn"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </nav>
      
      {/* Mobile menu with AnimatePresence for exit animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container">
              <ul className="navbar-nav mb-3">
                {navLinks.map((link) => (
                  <motion.li key={link.path} className="nav-item" variants={menuItemVariants}>
                    <Link
                      to={link.path}
                      className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="d-flex justify-content-between align-items-center mt-4"
                variants={menuItemVariants}
              >
                <SocialIcons />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 