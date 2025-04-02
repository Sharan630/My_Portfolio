import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import Hero3D from './Hero3D';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const textContent = typingTextRef.current;
    
    if (textContent) {
      const typingTimeline = gsap.timeline({ repeat: -1 });

      typingTimeline
        .to(textContent, { duration: 1, text: "Full Stack Developer", ease: "none" })
        .to(textContent, { duration: 0.5, delay: 1, text: "", ease: "none" })
        .to(textContent, { duration: 1, text: "Web3 Developer", ease: "none" })
        .to(textContent, { duration: 0.5, delay: 1, text: "", ease: "none" })
        .to(textContent, { duration: 1, text: "Blockchain Enthusiast", ease: "none" })
        .to(textContent, { duration: 0.5, delay: 1, text: "", ease: "none" });
    }
    
    return () => {
 
      gsap.killTweensOf(textContent);
    };
  }, []);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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


  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Floating decorative elements */}
      <motion.div 
        className="floating-shape shape-1"
        animate="animate"
        variants={floatingVariants}
      />
      <motion.div 
        className="floating-shape shape-2"
        animate="animate"
        variants={floatingVariants}
        style={{ animationDelay: '1s' }}
      />
      <motion.div 
        className="floating-shape shape-3"
        animate="animate"
        variants={floatingVariants}
        style={{ animationDelay: '2s' }}
      />
      
      {/* Social links */}
      <div className="social-links-vertical d-none d-md-flex">
        <motion.a 
          href="https://github.com/Sharan630" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/bhogi-sharan-sai-b1009834b/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <FaTwitter />
        </motion.a>
        <div className="social-line" />
      </div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-md-8 mx-auto">
            <motion.div
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="hero-content__text-box mb-5"
                variants={itemVariants}
              >
                <motion.p 
                  className="subtitle mb-3"
                  variants={itemVariants}
                >
                  <span className="highlight-badge">Welcome To My Portfolio</span>
                </motion.p>
                <motion.h1 
                  className="hero-title mb-4"
                  variants={itemVariants}
                >
                  Hi, I'm <span className="gradient-text fw-bold">Bhogi Sharan Sai</span>
                </motion.h1>
                <motion.div 
                  className="typing-container mb-4"
                  variants={itemVariants}
                >
                  <span>I'm a </span>
                  <span className="typing-text" ref={typingTextRef}></span>
                  <span className="cursor"></span>
                </motion.div>
                <motion.p 
                  className="lead mb-5"
                  variants={itemVariants}
                >
                  Passionate about building modern web applications and exploring blockchain technology. 
                  Skilled in both frontend and backend development with expertise in React, Node.js, and Web3 technologies.
                </motion.p>
                <motion.div
                  className="cta-buttons d-flex justify-content-center gap-3 flex-wrap"
                  variants={itemVariants}
                >
                  <Link to="/projects" className="btn btn-primary">
                    View My Work
                  </Link>
                  <Link to="/contact" className="btn btn-outline-primary">
                    Contact Me
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Scroll down hint */}
            <motion.div 
              className="scroll-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ 
                delay: 2, 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <FaArrowDown className="bounce-arrow mb-2" />
              <span className="scroll-text">Scroll Down</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 