import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      image: 'https://via.placeholder.com/800x600?text=E-Commerce+Website',
      description: 'A fully responsive e-commerce platform with user authentication, product filtering, and payment integration.',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Dashboard UI',
      category: 'ui',
      image: 'https://via.placeholder.com/800x600?text=Dashboard+UI',
      description: 'A modern dashboard interface for a data analytics platform with interactive charts and data visualization.',
      technologies: ['Figma', 'Adobe XD', 'JavaScript', 'D3.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'mobile',
      image: 'https://via.placeholder.com/800x600?text=Mobile+App+Design',
      description: 'UI/UX design for a fitness tracking mobile application with custom animations and intuitive user flow.',
      technologies: ['Sketch', 'After Effects', 'Principle'],
      link: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      category: 'web',
      image: 'https://via.placeholder.com/800x600?text=Weather+App',
      description: 'A weather application that shows real-time weather data with interactive maps and 5-day forecasts.',
      technologies: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
      link: '#'
    },
    {
      id: 5,
      title: 'Brand Identity',
      category: 'branding',
      image: 'https://via.placeholder.com/800x600?text=Brand+Identity',
      description: 'Complete brand identity design for a startup tech company, including logo design, color palette, and brand guidelines.',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      link: '#'
    },
    {
      id: 6,
      title: 'Task Management App',
      category: 'mobile',
      image: 'https://via.placeholder.com/800x600?text=Task+Management+App',
      description: 'A mobile application for task management with drag-and-drop functionality, reminders, and team collaboration features.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Styled Components'],
      link: '#'
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'UI Design', value: 'ui' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Branding', value: 'branding' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="portfolio-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="row mb-5"
        >
          <div className="col-12 text-center">
            <h2 className="section-title gradient-text fw-bold">My Portfolio</h2>
            <div className="title-underline"></div>
            <p className="lead mt-3">Check out some of my latest projects</p>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="row mb-5"
        >
          <div className="col-12">
            <div className="portfolio-filter d-flex flex-wrap justify-content-center gap-2">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`filter-btn btn ${activeFilter === filter.value ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => handleFilterClick(filter.value)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="row g-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="col-lg-4 col-md-6"
              >
                <div 
                  className="portfolio-item rounded shadow-sm overflow-hidden"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="portfolio-img">
                    <img src={project.image} alt={project.title} className="img-fluid" />
                  </div>
                  <div className="portfolio-content p-3">
                    <h3 className="h5">{project.title}</h3>
                    <p className="mb-2 text-muted small">{filters.find(f => f.value === project.category)?.name}</p>
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <span className="btn btn-sm btn-light">View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div 
              className="project-modal-content bg-light p-4 rounded shadow"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="project-modal-close btn btn-sm btn-light rounded-circle"
                onClick={closeProjectModal}
              >
                &times;
              </button>
              
              <div className="row g-4">
                <div className="col-lg-7">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-lg-5">
                  <h3 className="mb-3">{selectedProject.title}</h3>
                  <p className="mb-4">{selectedProject.description}</p>
                  
                  <h5 className="mb-3">Technologies Used:</h5>
                  <div className="mb-4 d-flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-primary">{tech}</span>
                    ))}
                  </div>
                  
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio; 