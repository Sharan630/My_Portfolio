import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaTwitter, FaList, FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  

  useEffect(() => {
    const storedSubmissions = localStorage.getItem('contactSubmissions');
    if (storedSubmissions) {
      setSubmissions(JSON.parse(storedSubmissions));
    }
  }, []);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      subject: formData.subject.trim() === '',
      message: formData.message.trim() === ''
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
 
      const newSubmission: ContactSubmission = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleString()
      };
      

      const updatedSubmissions = [...submissions, newSubmission];
      setSubmissions(updatedSubmissions);
      

      localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
      
      console.log('Form submitted:', newSubmission);
      setSubmitted(true);
      

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      

      setTimeout(() => {
        setSubmitted(false);
      }, 8000);
    }
  };
  
  const handleDeleteSubmission = (id: string) => {
    const updatedSubmissions = submissions.filter(submission => submission.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
  };
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2, 
        ease: "easeIn" 
      }
    }
  };

  return (
    <section className="contact-section section">
      <div className="contact-floating-shapes">
        <div className="shape-contact shape-1"></div>
        <div className="shape-contact shape-2"></div>
        <div className="shape-contact shape-3"></div>
      </div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="row mb-5"
        >
          <div className="col-12 text-center">
            <h2 className="section-title gradient-text fw-bold fs-3 fs-md-2">Get In Touch</h2>
            <div className="title-underline"></div>
            <p className="lead mt-2 mt-md-3 col-md-8 mx-auto small">Have a project in mind or want to collaborate? I'm just a message away. Let's create something amazing together!</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="row g-3 g-md-5 align-items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="col-12 col-lg-5"
          >
            <div className="contact-info p-3 p-md-4 glass-card h-100">
              <div className="contact-header mb-3 mb-md-4">
                <h3 className="contact-title gradient-text fw-bold fs-5 fs-md-4">Contact Details</h3>
                <div className="mini-underline"></div>
                <p className="mt-2 mt-md-3 small">I'm available for freelance projects, full-time positions, and collaborative opportunities. Let's connect!</p>
              </div>
              
              <div className="contact-details">
                <motion.div 
                  className="contact-item d-flex align-items-center mb-3 mb-md-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon-wrapper me-2 me-md-3">
                    <FaMapMarkerAlt className="contact-icon" />
                  </div>
                  <div>
                    <h5 className="m-0 fw-bold small">Location</h5>
                    <p className="m-0 small">Hyderabad, Telangana, India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="contact-item d-flex align-items-center mb-3 mb-md-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon-wrapper me-2 me-md-3">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div>
                    <h5 className="m-0 fw-bold small">Email</h5>
                    <p className="m-0 small">sharansai047@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="contact-item d-flex align-items-center mb-3 mb-md-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon-wrapper me-2 me-md-3">
                    <FaPhoneAlt className="contact-icon" />
                  </div>
                  <div>
                    <h5 className="m-0 fw-bold small">Phone</h5>
                    <p className="m-0 small">+91 6309586437</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="social-links mt-4 mt-md-5">
                <h5 className="mb-2 mb-md-3 fw-bold small">Connect With Me</h5>
                <div className="d-flex gap-2 gap-md-3">
                  <motion.a 
                    href="https://www.linkedin.com/in/bhogi-sharan-sai-b1009834b/" 
                    className="social-link" 
                    aria-label="LinkedIn"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/Sharan630" 
                    className="social-link" 
                    aria-label="GitHub"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="social-link" 
                    aria-label="Twitter"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTwitter size={20} />
                  </motion.a>
                  
                  {/* View Submissions Button */}
                  {submissions.length > 0 && (
                    <motion.button 
                      className="social-link border-0"
                      aria-label="View Submissions"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowSubmissions(true)}
                    >
                      <FaList size={24} />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="col-12 col-lg-7"
          >
            <div className="contact-form-container p-3 p-md-4 glass-card h-100">
              <h3 className="contact-title gradient-text fw-bold mb-3 mb-md-4 fs-5 fs-md-4">Send Me a Message</h3>
              <div className="mini-underline mb-3 mb-md-4"></div>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="success-message p-4 text-center"
                >
                  <motion.div 
                    className="success-icon-wrapper mb-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                  </motion.div>
                  <h4>Thank you for your message!</h4>
                  <p>I appreciate your interest and will get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control custom-input ${formErrors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Your Name</label>
                        {formErrors.name && <div className="invalid-feedback">Please enter your name</div>}
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className={`form-control custom-input ${formErrors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <label htmlFor="email">Your Email</label>
                        {formErrors.email && <div className="invalid-feedback">Please enter a valid email</div>}
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control custom-input ${formErrors.subject ? 'is-invalid' : ''}`}
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        <label htmlFor="subject">Subject</label>
                        {formErrors.subject && <div className="invalid-feedback">Please enter a subject</div>}
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className={`form-control custom-input ${formErrors.message ? 'is-invalid' : ''}`}
                          placeholder="Your Message"
                          id="message"
                          name="message"
                          style={{ height: "200px" }}
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                        {formErrors.message && <div className="invalid-feedback">Please enter your message</div>}
                      </div>
                    </div>
                    
                    <div className="col-12 text-center mt-3 mt-md-4">
                      <motion.button
                        type="submit"
                        className="btn btn-gradient btn-md btn-lg px-4 px-md-5 py-2 py-md-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Submissions Modal */}
      {showSubmissions && (
        <div className="submissions-modal-overlay">
          <motion.div 
            className="submissions-modal glass-card"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="submissions-modal-header">
              <h3 className="gradient-text">Contact Submissions</h3>
              <button 
                className="submissions-close-btn"
                onClick={() => setShowSubmissions(false)}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="submissions-modal-body">
              {submissions.length === 0 ? (
                <p className="text-center py-4">No submissions yet</p>
              ) : (
                submissions.map(submission => (
                  <div key={submission.id} className="submission-card glass-card mb-3">
                    <div className="submission-header">
                      <h5>{submission.subject}</h5>
                      <div className="submission-actions">
                        <span className="submission-date">{submission.date}</span>
                        <button 
                          className="submission-delete-btn"
                          onClick={() => handleDeleteSubmission(submission.id)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                    <div className="submission-content">
                      <p><strong>From:</strong> {submission.name} ({submission.email})</p>
                      <p className="submission-message">{submission.message}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact; 