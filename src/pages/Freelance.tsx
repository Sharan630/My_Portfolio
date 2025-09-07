import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiBootstrap } from 'react-icons/si';
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
}

const Freelance = () => {
  const projectsGridRef = useRef<HTMLDivElement>(null);

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
      category: "Real Estate"
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
      category: "Technology"
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
      category: "Education"
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
      category: "Non-profit"
    }
  ];

  const getTechIcon = (tech: string) => {
    switch(tech.toLowerCase()) {
      case 'react':
        return <FaReact />;
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
      case 'tailwindcss':
        return <SiTailwindcss />;
      case 'bootstrap':
        return <SiBootstrap />;
      default:
        return <FaDatabase />;
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
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
  }, []);

  return (
    <section className="freelance-section section">
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
          <p className="lead col-md-8 mx-auto mb-5">
            Real-world applications built for diverse clients across various industries
          </p>
        </motion.div>
        
        <motion.div 
          className="freelance-projects-container mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
          ref={projectsGridRef}
        >
          {freelanceProjects.length === 0 ? (
            <div className="text-center py-5">
              <div className="glass-card p-5">
                <h4 className="mb-3">Projects Coming Soon</h4>
                <p className="text-muted">
                  I'm currently working on showcasing my freelance projects. 
                  Check back soon to see the diverse range of real-world applications I've built for clients.
                </p>
              </div>
            </div>
          ) : (
            <div className="freelance-projects-grid">
              {freelanceProjects.map((project) => (
                <motion.div 
                  className="freelance-project-card"
                  key={project.id}
                  variants={itemVariant}
                >
                  <div className="freelance-project-card-inner">
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
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="freelance-project-link">
                            <FaGithub />
                          </a>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="freelance-project-link">
                            <FaExternalLinkAlt />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="freelance-project-content">
                      <div className="freelance-project-meta">
                        <span className="freelance-project-client">{project.client}</span>
                        <span className="freelance-project-category">{project.category}</span>
                      </div>
                      <h5 className="freelance-project-title">{project.title}</h5>
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
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Freelance;
