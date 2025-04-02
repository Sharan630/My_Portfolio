import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects = () => {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Movies-Hub",
      description: "Movie Sphere - A React-powered movie discovery platform with TMDB integration. Features responsive UI, real-time search, movie details, ratings, and trailers.",
      technologies: ["React", "JavaScript", "API Integration", "Responsive Design"],
      imageUrl: "https://lh3.googleusercontent.com/IGSHguW7lLZrn0vS91sR7aq6jiXuwhyp8FAVz94Axz5W2GBjHE1Aamh-7xYj_0_DkvA=h315",
      githubUrl: "https://github.com/Sharan630/Movies-Hub",
      liveUrl: "https://movies-sphere-opal.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Collaborative Document Editor",
      description: "A modern web-based document editor that enables real-time collaboration between multiple users, featuring secure authentication, PDF export capabilities, and seamless multi-user editing.",
      technologies: ["JavaScript", "Socket.io", "Real-time Communication", "Document Editing"],
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150451566.jpg",
      githubUrl: "https://github.com/Sharan630/REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR",
      liveUrl: "https://github.com/Sharan630/REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR",
      featured: true
    },
    {
      id: 3,
      title: "Ctrl-R Express Management",
      description: "A modern ticket management system built with Express.js that helps organizations streamline their support and issue tracking processes with an intuitive interface.",
      technologies: ["Express.js", "EJS", "Node.js", "Database Management"],
      imageUrl: "https://lh6.googleusercontent.com/proxy/PNIsD41SUjco-l4KAJiq_ovZuWJ5D0ZpNHcyHWZs9CMUVDJNQOlfNH4e9ZAofeh1if8X22AVKEe2hbta5mtxHQA",
      githubUrl: "https://github.com/Sharan630/Ctrl-R-Express-Management-",
      liveUrl: "https://github.com/Sharan630/Ctrl-R-Express-Management-",
      featured: true
    },
    {
      id: 4,
      title: "Chrome Extension for Productivity",
      description: "A Chrome extension that tracks browsing time and boosts productivity with real-time insights into online activities, smart website categorization, daily statistics, and weekly reports.",
      technologies: ["JavaScript", "Chrome API", "Analytics", "Web Extension"],
      imageUrl: "data:image/jpeg;base64,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",
      githubUrl: "https://github.com/Sharan630/Chrome-Extenstion-for-Time-Tracking-and-Productivity-Analytics",
      liveUrl: "https://github.com/Sharan630/Chrome-Extenstion-for-Time-Tracking-and-Productivity-Analytics",
      featured: false
    },
    {
      id: 5,
      title: "Weather App with API Integration",
      description: "A sleek and user-friendly application providing real-time weather updates using the OpenWeather API with dynamic background videos and responsive design.",
      technologies: ["JavaScript", "API Integration", "CSS", "HTML5"],
      imageUrl: "https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg",
      githubUrl: "https://github.com/Sharan630/API-INTEGRATION",
      liveUrl: "https://github.com/Sharan630/API-INTEGRATION",
      featured: false
    },
    {
      id: 6,
      title: "Chat Application",
      description: "A real-time chat application built with Node.js and Socket.IO that enables instant messaging between users with features like real-time message delivery and user presence indicators.",
      technologies: ["Node.js", "Socket.IO", "CSS", "Real-time Communication"],
      imageUrl: "https://img.freepik.com/premium-vector/chat-app-logo-sms-messenger-label-design-mobile-app-online-conversation-with-texting-message-ui-design-concept-vector-illustration_172533-1513.jpg",
      githubUrl: "https://github.com/Sharan630/Chat-Application",
      liveUrl: "https://github.com/Sharan630/Chat-Application",
      featured: false
    },
    {
      id: 7,
      title: "Custom Cryptocurrency Token",
      description: "Developed a custom cryptocurrency token utilizing the Internet Computer (ICP) blockchain and the Motoko programming language, enabling decentralized token creation and management.",
      technologies: ["JavaScript", "ICP", "Blockchain", "Cryptocurrency"],
      imageUrl: "https://ih1.redbubble.net/image.2195405005.4281/raf,360x360,075,t,fafafa:ca443f4786.jpg",
      githubUrl: "https://github.com/Sharan630/My-Own-Cyptro-Token",
      liveUrl: "https://github.com/Sharan630/My-Own-Cyptro-Token",
      featured: false
    },
    {
      id: 8,
      title: "KepperNotes",
      description: "A note-taking application built with React and Vite, offering a clean, responsive interface to easily create, edit, and delete notes across devices with optimized performance.",
      technologies: ["React", "Vite", "JavaScript", "UI/UX"],
      imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEU8jPD19fUZd+36+fUYg/CZu/P39/Xh6fU3ivAuh/DF1/S40PRBj/D7+PVGk/DP3vQAdO0ifO5gl+/p7vRine8Acu0ghfDv8vVVmfDS3/Pd5vSOtfJxpvGpx/KFsfGbvvJ7rfGvy/O80vPI2fROje5hm+9po/Gtx/Etf+3usRx8AAAD90lEQVR4nO3d3XKbMBCGYWQRgWzANBDbYPwD1G7u/wqLnXTapngmKuyu2vnemRzkJMkzwojIwgQBQgghhBBCCCGEEEIIIYQQQgghhBBCCKEgsCFnNmbnBbv9E2NNFm4YkXZzPdRbzZkqlsckZDLGcdOrNDWKNaN1dMosC3DXbjUz7y2t63NAP4xxs5bx3Y3FKaMmxk2tpXxDxhyIicLAOzEhBe7WssCBqPaUp5u4lQYqlRYlHdE2W7GTzM90tyETbnr5Ibwdp1eqQbRX5cEQDoO4ComE4SGVxt0zxY5qEGs/hMrsaQbR7nw4z9zSLY0w3PtwnrllaiLhkzfCCEIIIZQOQgghlA9CCCGUD0IIIZQPQgjdhebty6jfvsa/nWMxi1toHP/o6UZmodn2K4faLppM5BWa7Wrn9p7lfjKRWViVbm8FxXE3Ecgt7F3fdt60/5gwOrttcwmz/t86SpVanxP7+YJyNfntD/b5sKjWn65fR9OnC3ahcWwqEFdtEELoQRBCCKF8EEIIoXwQzi006Ry3jLj8x8G91qaq0/S7ftqtwwHCvdb2LYunFzTF54nMwvo6y7Zre/JWuExmucXDOuzt5B7DZo4xjIPOV6FS/TWboYPD+g33udREn19qe1jtskDFv9aWzpDH86FAEEIIoXwQQgihfBBCCKF8vu9rc6GM/2j2fW1V57KxzaW+8EBoVHdx2E7jVjK+B459rY3q7vggsLYd233j+742t985toGKfa0tnGFFeDwbrEZ+JfvrcNkkVO1OhfzrcCDW/ZKoahQoMB+STYh+zIcCQQghhPJBCCGE8kEIoS/C4XpXv2+3+nDDhu7+B2GqVVFE1VtR8WvbiugT6TiFqa7bc3l5/vrW848uZVleriXRqgKf0OjqmLwu8pc/yvP8ZUH22d5sQqN7O1AWo+Vf6JaF2IR6Gb6M82iBbEJdCQG5hGmUPQQuSIFMQmPOD16BNyDtZ7LzCNM6eSikHUEuoT68PhJSA3mEZtuIAZmExfOD8ww9UFjIAJQVcgBFhSxAQWFOPA+KC2kv1TwQsgG5hJdcCsglLHMpoIyQEygj5ASKCJmmifdsQw/8IGQdwSCIs/GdEXRCZuBwmC7pD9NfhezAYHNkFfIDgziJyIk/hQLA4TB1uFf3L9P1+0qbCHA415A/dU2vv+ZywGHCOFOfTvXK5nz/Lo11ItzVfRd+e815L9U+FDvdkeyeMU/M16JjREX4XCujjsLA25SxL+ge02mK64swcMiWnaIymuh5IQ68Pw64K8zH7QOzpKuM7uGGLtkwO7Z1RFDr+KHEdMUbmudv+zGCCCGEEEIIIYQQQgghhBBCCCGEEEIIIeRr3wHYWKV5GjRitAAAAABJRU5ErkJggg==",
      githubUrl: "https://github.com/Sharan630/KepperNotes",
      liveUrl: "https://github.com/Sharan630/KepperNotes",
      featured: false
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
  
    const featuredProjects = featuredProjectsRef.current;
    if (featuredProjects) {
      gsap.fromTo(
        featuredProjects.querySelectorAll('.featured-project-card'),
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
            trigger: featuredProjects,
            start: "top 80%",
          }
        }
      );
    }

    
    const projectsGrid = projectsGridRef.current;
    if (projectsGrid) {
      gsap.fromTo(
        projectsGrid.querySelectorAll('.project-card'),
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

  
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section className="projects-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title gradient-text fw-bold">My Projects</h2>
          <div className="title-underline"></div>
          <p className="lead col-md-8 mx-auto mb-5">
            Exploring the intersection of design and functionality through innovative web development
          </p>
        </motion.div>
        
        {/* Featured Projects Section */}
        <div className="featured-projects" ref={featuredProjectsRef}>
          <h3 className="featured-projects-title mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h3>
          
          <div className="row g-4 mb-5">
            {featuredProjects.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div className="featured-project-card h-100">
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
                      <div className="featured-project-links">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="featured-project-link github">
                          <FaGithub />
                        </a>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="featured-project-link external">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="featured-project-content">
                    <h4 className="featured-project-title">{project.title}</h4>
                    <p className="featured-project-description">{project.description}</p>
                    <div className="featured-tech-stack">
                      {project.technologies.map((tech, techIndex) => (
                        <span className="tech-tag" key={techIndex}>
                          {getTechIcon(tech)} {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Regular Projects Grid */}
        <motion.div 
          className="projects-container mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
          ref={projectsGridRef}
        >
          <h3 className="more-projects-title mb-4">
            <span className="gradient-text">More Projects</span>
          </h3>
          
          <div className="projects-grid">
            {regularProjects.map((project) => (
              <motion.div 
                className="project-card"
                key={project.id}
                variants={itemVariant}
              >
                <div className="project-card-inner">
                  <div className="project-image-container">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="project-image"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/600x400?text=Project+Image";
                      }} 
                    />
                    <div className="project-image-overlay">
                      <div className="project-links">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaGithub />
                        </a>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
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
          
          <div className="text-center mt-5">
            <a href="https://github.com/Sharan630" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              See More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 