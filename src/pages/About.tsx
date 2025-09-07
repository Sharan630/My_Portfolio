import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUserAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        {/* Floating shapes for modern design */}
        <div className="floating-shape shape-about-1"></div>
        <div className="floating-shape shape-about-2"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="row"
        >
          <div className="col-12 text-center mb-5">
            <h2 className="section-title gradient-text fw-bold">About Me</h2>
            <div className="title-underline"></div>
            <p className="lead col-md-8 mx-auto about-tagline">Passionate about creating digital experiences that make a difference</p>
          </div>
        </motion.div>

        <div className="row align-items-center gx-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-lg-5 mb-5 mb-lg-0"
          >
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img 
                  src="/images/profile.jpg" 
                  alt="Bhogi Sharan Sai - Developer Profile" 
                  className="img-fluid about-image" 
                />
                
                {/* Decorative elements */}
                <motion.div 
                  className="image-dot-pattern"
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5
                  }}
                ></motion.div>
                
                {/* Modern border overlay */}
                <div className="image-border-top-left"></div>
                <div className="image-border-bottom-right"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-lg-7"
          >
            <div className="about-content glass-card p-4 p-lg-5">
              <div className="d-flex align-items-center mb-4">
                <div className="about-icon-container me-3">
                  <FaUserAlt className="about-icon" />
                </div>
                <h3 className="mb-0">Full Stack Web Developer</h3>
              </div>
              
              <p className="lead mb-4">
                Hello! I'm Bhogi Sharan Sai, a passionate Full Stack Web Developer with expertise in modern web technologies and blockchain development.
              </p>
              
              <p className="mb-4">
                I specialize in building responsive and user-friendly web applications using React.js and Node.js. My experience extends to Web3 development on the Internet Computer, including blockchain technology and token contract development.
              </p>
              
              <p className="mb-4">
                I'm proficient in frontend technologies like HTML5, CSS3, JavaScript ES6, and React, as well as backend technologies including Node.js, Express.js, and databases like SQL and PostgreSQL. I'm constantly learning and exploring new technologies to enhance my skills.
              </p>
            </div>
            
            <div className="row mt-5 g-4">
              <div className="col-md-6">
                <motion.div 
                  className="about-info-box glass-card p-4"
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <FaGraduationCap className="info-icon me-3" />
                    <h5 className="fw-bold mb-0">Education</h5>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <p className="mb-0 fw-bold">Computer Science</p>
                      <p className="mb-0 info-text">IIIT-Vadodara - International Campus Diu (IIITV-ICD)</p>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="col-md-6">
                <motion.div 
                  className="about-info-box glass-card p-4"
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <FaBriefcase className="info-icon me-3" />
                    <h5 className="fw-bold mb-0">Experience</h5>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <p className="mb-0 fw-bold">Freelance Web Developer</p>
                      <p className="mb-0 info-text">Various Clients (2023 - Present)</p>
                      <p className="mb-0 small text-muted">Worked on many real-world applications</p>
                    </li>
                    <li className="mb-3">
                      <p className="mb-0 fw-bold">Development Team Lead</p>
                      <p className="mb-0 info-text">Franean Technologies (August 2025 - Present)</p>
                    </li>
                    <li className="mb-3">
                      <p className="mb-0 fw-bold">Web Developer</p>
                      <p className="mb-0 info-text">Franean Technologies (May 2025 - July 2025)</p>
                    </li>
                    <li className="mb-3">
                      <p className="mb-0 fw-bold">Full Stack Development Intern</p>
                      <p className="mb-0 info-text">CodTech IT Solutions (Feb 2023 - April 2023)</p>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 