import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2,
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Sharan630', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/bhogi-sharan-sai-b1009834b/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaEnvelope />, url: 'mailto:sharansai047@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <motion.div 
          className="row"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="col-lg-4 mb-4 mb-lg-0">
            <motion.div variants={itemVariants}>
              <h3 className="h4 mb-4">Bhogi Sharan Sai</h3>
              <p className="mb-3">Full Stack Web Developer passionate about building modern web applications and exploring blockchain technology.</p>
              <p className="mb-0">Hyderabad, Telangana, India</p>
            </motion.div>
          </div>
          
          <div className="col-lg-4 mb-4 mb-lg-0">
            <motion.div variants={itemVariants}>
              <h4 className="h5 mb-4">Quick Links</h4>
              <ul className="list-unstyled">
                {quickLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className="col-lg-4">
            <motion.div variants={itemVariants}>
              <h4 className="h5 mb-4">Connect With Me</h4>
              <div className="d-flex gap-3 mb-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-footer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="mb-0">
                <FaEnvelope className="me-2" />
                sharansai047@gmail.com
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="row mt-5 pt-4 border-top border-secondary"
          variants={itemVariants}
        >
          <div className="col-md-12 text-center">
            <p className="mb-0">
              &copy; {currentYear} Bhogi Sharan Sai. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 