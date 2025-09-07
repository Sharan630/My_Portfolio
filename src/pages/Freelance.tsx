import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
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
  featured?: boolean;
  year: string;
  status: 'Completed' | 'In Progress' | 'Maintenance';
}

const Freelance = () => {
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<FreelanceProject | null>(null);

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
      featured: true,
      year: "2024",
      status: "Completed"
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
      featured: true,
      year: "2024",
      status: "Completed"
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
      featured: false,
      year: "2023",
      status: "Completed"
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
      featured: false,
      year: "2023",
      status: "Completed"
    }
  ];

  const categories = ['All', ...Array.from(new Set(freelanceProjects.map(p => p.category)))];
  
  const filteredProjects = freelanceProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

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

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return '#10b981';
      case 'In Progress': return '#f59e0b';
      case 'Maintenance': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  useEffect(() => {
    const projectsGrid = projectsGridRef.current;
    if (projectsGrid) {
      gsap.fromTo(
        projectsGrid.querySelectorAll('.freelance-project-card'),
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsGrid,
            start: "top 85%",
          }
        }
      );
    }
  }, [filteredProjects]);

  return (
    <section className="freelance-section section">
      {/* Background Elements */}
      <div className="freelance-bg-shapes">
        <div className="freelance-shape shape-1"></div>
        <div className="freelance-shape shape-2"></div>
        <div className="freelance-shape shape-3"></div>
      </div>

      <div className="container">
        {/* Header Section */}
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
          
          {/* Stats */}
          <div className="row g-3 mb-5">
            <div className="col-md-3 col-6">
              <div className="stat-card glass-card p-3">
                <h4 className="stat-number gradient-text">{freelanceProjects.length}</h4>
                <p className="stat-label mb-0">Projects</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-card glass-card p-3">
                <h4 className="stat-number gradient-text">{categories.length - 1}</h4>
                <p className="stat-label mb-0">Industries</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-card glass-card p-3">
                <h4 className="stat-number gradient-text">100%</h4>
                <p className="stat-label mb-0">Success Rate</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-card glass-card p-3">
                <h4 className="stat-number gradient-text">24/7</h4>
                <p className="stat-label mb-0">Support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="search-filter-section mb-5"
        >
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="clear-search"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="filter-section">
                <button
                  className={`filter-toggle ${showFilters ? 'active' : ''}`}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FaFilter className="me-2" />
                  Filters
                </button>
                
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="filter-dropdown"
                    >
                      <div className="category-filters">
                        {categories.map(category => (
                          <button
                            key={category}
                            className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="featured-projects-section mb-5"
          >
            <h3 className="featured-title mb-4">
              <span className="gradient-text">⭐ Featured Projects</span>
            </h3>
            <div className="row g-4">
              {featuredProjects.map((project) => (
                <div className="col-lg-6" key={project.id}>
                  <motion.div
                    className="featured-project-card glass-card h-100"
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="featured-project-header">
                      <div className="project-status">
                        <span 
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(project.status) }}
                        >
                          {project.status}
                        </span>
                        <span className="project-year">{project.year}</span>
                      </div>
                      <div className="project-category">{project.category}</div>
                    </div>
                    
                    <div className="featured-project-image-container">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="featured-project-image"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/600x400?text=Project+Image";
                        }}
                      />
                      <div className="featured-project-overlay">
                        <div className="project-links">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaExternalLinkAlt />
                          </a>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="featured-project-content">
                      <h4 className="project-title">{project.title}</h4>
                      <p className="project-client">{project.client}</p>
                      <p className="project-description">{project.description}</p>
                      <div className="tech-stack">
                        {project.technologies.map((tech, index) => (
                          <span className="tech-tag" key={index}>
                            {getTechIcon(tech)} {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <motion.div 
          className="freelance-projects-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={projectsGridRef}
        >
          {regularProjects.length > 0 && (
            <>
              <h3 className="more-projects-title mb-4">
                <span className="gradient-text">More Projects</span>
              </h3>
              
              <div className="freelance-projects-grid">
                {regularProjects.map((project) => (
                  <motion.div 
                    className="freelance-project-card"
                    key={project.id}
                    whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="freelance-project-card-inner">
                      <div className="project-header">
                        <div className="project-status">
                          <span 
                            className="status-badge"
                            style={{ backgroundColor: getStatusColor(project.status) }}
                          >
                            {project.status}
                          </span>
                          <span className="project-year">{project.year}</span>
                        </div>
                        <div className="project-category">{project.category}</div>
                      </div>
                      
                      <div className="freelance-project-image-container">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="freelance-project-image"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/600x400?text=Project+Image";
                          }} 
                        />
                        <div className="freelance-project-image-overlay">
                          <div className="freelance-project-links">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="freelance-project-link">
                              <FaExternalLinkAlt />
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="freelance-project-link">
                              <FaGithub />
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="freelance-project-content">
                        <h5 className="freelance-project-title">{project.title}</h5>
                        <p className="freelance-project-client">{project.client}</p>
                        <p className="freelance-project-description">{project.description}</p>
                        <div className="freelance-tech-stack">
                          {project.technologies.map((tech, techIndex) => (
                            <span className="tech-tag small" key={techIndex}>
                              {getTechIcon(tech)} <span className="tech-name">{tech}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-5">
              <div className="glass-card p-5">
                <h4 className="mb-3">No Projects Found</h4>
                <p className="text-muted">
                  Try adjusting your search or filter criteria to find projects.
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="project-modal-overlay"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="project-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>
                
                <div className="modal-content">
                  <div className="modal-header">
                    <h3>{selectedProject.title}</h3>
                    <div className="modal-meta">
                      <span className="modal-client">{selectedProject.client}</span>
                      <span className="modal-category">{selectedProject.category}</span>
                      <span className="modal-year">{selectedProject.year}</span>
                    </div>
                  </div>
                  
                  <div className="modal-body">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title}
                      className="modal-image"
                    />
                    <p className="modal-description">{selectedProject.description}</p>
                    <div className="modal-tech-stack">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {selectedProject.technologies.map((tech, index) => (
                          <span className="tech-tag" key={index}>
                            {getTechIcon(tech)} {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="modal-footer">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <FaExternalLinkAlt className="me-2" />
                      View Live Site
                    </a>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      <FaGithub className="me-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Freelance;
