import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiBootstrap, SiNextdotjs, SiVercel } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FreelanceProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  client: string;
  category: string;
  featured: boolean;
}

const Freelance = () => {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);

  const freelanceProjects: FreelanceProject[] = [
    {
      id: 1,
      title: "Svans Realty Website",
      description: "A luxury real estate website showcasing premium villas and commercial plots in Hyderabad. Features modern design, property listings, brochure downloads, and contact forms for high-end clientele.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      imageUrl: "https://svans-real-estate.vercel.app/",
      githubUrl: "https://github.com/Sharan630/svans-real-estate",
      liveUrl: "https://svans-real-estate.vercel.app/",
      client: "Svans Realty",
      category: "Real Estate",
      featured: true
    },
    {
      id: 2,
      title: "Franean Technologies Website",
      description: "Professional web development company website featuring services, portfolio, client testimonials, and modern UI/UX design. Built for a technology company specializing in web solutions.",
      technologies: ["React", "Next.js", "CSS3", "Modern UI/UX"],
      imageUrl: "https://www.franeantechnologies.com/",
      githubUrl: "https://github.com/Sharan630/franean-technologies",
      liveUrl: "https://www.franeantechnologies.com/",
      client: "Franean Technologies",
      category: "Technology",
      featured: true
    },
    {
      id: 3,
      title: "NexLearns Platform",
      description: "Educational platform website designed for online learning and course management. Features user-friendly interface for students and instructors with modern educational design.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      imageUrl: "https://www.nexlearns.com/",
      githubUrl: "https://github.com/Sharan630/nexlearns",
      liveUrl: "https://www.nexlearns.com/",
      client: "NexLearns",
      category: "Education",
      featured: false
    },
    {
      id: 4,
      title: "Lakdiwala Organization Website",
      description: "Non-profit organization website showcasing their mission, programs, and community impact. Built with clean, accessible design to effectively communicate their social initiatives.",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      imageUrl: "https://www.lakdiwala.org.in/",
      githubUrl: "https://github.com/Sharan630/lakdiwala-org",
      liveUrl: "https://www.lakdiwala.org.in/",
      client: "Lakdiwala Organization",
      category: "Non-profit",
      featured: false
    }
  ];

  const getTechIcon = (tech: string) => {
    switch(tech.toLowerCase()) {
      case 'react':
        return <FaReact />;
      case 'next.js':
        return <SiNextdotjs />;
      case 'node.js':
        return <FaNodeJs />;
      case 'javascript':
        return <FaJs />;
      case 'html5':
        return <FaHtml5 />;
      case 'css3':
        return <FaCss3Alt />;
      case 'typescript':
        return <SiTypescript />;
      case 'mongodb':
        return <SiMongodb />;
      case 'postgresql':
        return <SiPostgresql />;
      case 'firebase':
        return <SiFirebase />;
      case 'tailwind css':
        return <SiTailwindcss />;
      case 'bootstrap':
        return <SiBootstrap />;
      case 'vercel':
        return <SiVercel />;
      default:
        return <FaDatabase />;
    }
  };


  useEffect(() => {
    const allProjectsSection = featuredProjectsRef.current;
    if (allProjectsSection) {
      gsap.fromTo(
        allProjectsSection.querySelectorAll('.featured-project-card'),
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.3, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: allProjectsSection,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  
  const allProjects = freelanceProjects;

  return (
    <section className="freelance-section section">
      {/* Background Elements */}
      <div className="freelance-bg-shapes">
        <div className="freelance-shape shape-1"></div>
        <div className="freelance-shape shape-2"></div>
        <div className="freelance-shape shape-3"></div>
      </div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title gradient-text fw-bold">Freelance Projects</h2>
          <div className="title-underline"></div>
          <p className="lead col-md-8 mx-auto mb-4">
            Real-world applications built for diverse clients across various industries
          </p>
          
          {/* Stats Cards */}
          <div className="row g-3 mb-5">
            <div className="col-md-3 col-6">
              <motion.div 
                className="stat-card glass-card p-3"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="stat-number gradient-text">{allProjects.length}</h4>
                <p className="stat-label mb-0">Projects</p>
              </motion.div>
            </div>
            <div className="col-md-3 col-6">
              <motion.div 
                className="stat-card glass-card p-3"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="stat-number gradient-text">4</h4>
                <p className="stat-label mb-0">Industries</p>
              </motion.div>
            </div>
            <div className="col-md-3 col-6">
              <motion.div 
                className="stat-card glass-card p-3"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="stat-number gradient-text">100%</h4>
                <p className="stat-label mb-0">Success Rate</p>
              </motion.div>
            </div>
            <div className="col-md-3 col-6">
              <motion.div 
                className="stat-card glass-card p-3"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="stat-number gradient-text">24/7</h4>
                <p className="stat-label mb-0">Support</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* All Projects Section */}
        <motion.div 
          className="all-projects-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          ref={featuredProjectsRef}
        >
          <div className="text-center mb-5">
            <h3 className="all-projects-title mb-3">
              <span className="gradient-text">🚀 All Projects</span>
            </h3>
            <p className="all-subtitle">Complete portfolio of freelance work</p>
          </div>
          
          <div className="row g-5 mb-5">
             {allProjects.map((project, index) => (
               <div className="col-lg-6" key={project.id}>
                 <motion.div 
                   className="project-card-container"
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: index * 0.2 }}
                   viewport={{ once: true }}
                 >
                   <motion.div 
                     className="featured-project-card modern-card h-100"
                     whileHover={{ 
                       y: -20, 
                       rotateX: 5,
                       rotateY: 2,
                       boxShadow: "0 30px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
                       scale: 1.03
                     }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     style={{
                       transformStyle: "preserve-3d",
                       perspective: "1000px"
                     }}
                   >
                  {/* Card Header */}
                  <div className="card-header mb-3">
                    <div className="project-badges">
                      <span className="category-badge">{project.category}</span>
                      {project.featured && <span className="featured-badge">⭐ Featured</span>}
                    </div>
                    <div className="project-status">
                      <span className="status-dot"></span>
                      <span className="status-text">Live</span>
                    </div>
                  </div>
                  
                  {/* Card Glow Effect */}
                  <div className="card-glow"></div>
                  
                  {/* Project Image */}
                  <div className="project-image-wrapper mb-4">
                    <div className="project-image-container">
                      <div className="image-frame">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="project-image"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/600x300/1a1a1a/ffffff?text=Project+Preview";
                          }}
                        />
                        <div className="image-shine"></div>
                      </div>
                      <div className="image-overlay">
                        <div className="overlay-content">
                          <div className="project-links">
                            <motion.a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="project-link live-link"
                              whileHover={{ scale: 1.15, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaExternalLinkAlt />
                              <span>Live Demo</span>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="project-content">
                    <div className="project-title-section mb-3">
                      <h4 className="project-title mb-2">{project.title}</h4>
                      <div className="client-info">
                        <span className="client-icon">👤</span>
                        <span className="client-name">{project.client}</span>
                      </div>
                    </div>
                    
                    <p className="project-description mb-4">{project.description}</p>
                    
                    <div className="tech-stack-section">
                      <h6 className="tech-title mb-3">Technologies Used</h6>
                      <div className="tech-tags-container">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span 
                            className="tech-tag highlighted me-2 mb-2" 
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.1, 
                              y: -3,
                              boxShadow: "0 8px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
                              backgroundColor: "rgba(255,255,255,0.1)"
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <span className="tech-icon me-2">{getTechIcon(tech)}</span>
                            <span className="tech-name">{tech}</span>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="card-footer mt-4">
                    <div className="project-meta">
                      <span className="meta-item me-3">
                        <span className="meta-icon">📅</span>
                        <span className="meta-text">2025</span>
                      </span>
                      <span className="meta-item">
                        <span className="meta-icon">🌐</span>
                        <span className="meta-text">Web App</span>
                      </span>
                    </div>
                  </div>
                   </motion.div>
                 </motion.div>
               </div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <div className="text-center mt-5">
          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="cta-title mb-3">Interested in Working Together?</h4>
            <p className="cta-subtitle mb-4">Let's discuss your next project</p>
            <div className="cta-buttons">
              <motion.a 
                href="https://github.com/Sharan630" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg me-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="me-2" />
                View All Projects
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn btn-outline-primary btn-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
