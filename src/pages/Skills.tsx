import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, 
  FaDatabase, FaGithub, FaServer, FaLaptopCode
} from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiJquery, SiWeb3Dotjs, SiGnubash } from 'react-icons/si';
import { BsShieldLock } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import { GiBlockHouse } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  percentage: number;
  color: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML5', percentage: 95, color: '#e34c26', icon: <FaHtml5 /> },
    { name: 'CSS3', percentage: 90, color: '#264de4', icon: <FaCss3Alt /> },
    { name: 'JavaScript ES6', percentage: 92, color: '#f0db4f', icon: <FaJs /> },
    { name: 'React.js', percentage: 88, color: '#61dafb', icon: <FaReact /> },
    { name: 'Bootstrap 5', percentage: 90, color: '#7952b3', icon: <FaBootstrap /> },
    { name: 'jQuery', percentage: 85, color: '#0769ad', icon: <SiJquery /> },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', percentage: 88, color: '#68a063', icon: <FaNodeJs /> },
    { name: 'Express.js', percentage: 85, color: '#000000', icon: <SiExpress /> },
    { name: 'REST APIs', percentage: 86, color: '#1e88e5', icon: <FaServer /> },
    { name: 'SQL', percentage: 82, color: '#F29111', icon: <FaDatabase /> },
    { name: 'PostgreSQL', percentage: 80, color: '#336791', icon: <SiPostgresql /> },
    { name: 'EJS', percentage: 85, color: '#a91e50', icon: <FaLaptopCode /> },
  ];

  const otherSkills: Skill[] = [
    { name: 'Git/GitHub', percentage: 90, color: '#f34f29', icon: <FaGithub /> },
    { name: 'Web3', percentage: 75, color: '#ff9900', icon: <SiWeb3Dotjs /> },
    { name: 'Blockchain', percentage: 75, color: '#3c3c3d', icon: <GiBlockHouse /> },
    { name: 'Bash', percentage: 80, color: '#4eaa25', icon: <SiGnubash /> },
    { name: 'Authentication', percentage: 85, color: '#8bc34a', icon: <BsShieldLock /> },
    { name: 'Deployment', percentage: 85, color: '#4285f4', icon: <TbWorldWww /> },
  ];

  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillCategoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const skillCards = document.querySelectorAll('.skill-category');
    
    gsap.fromTo(
      skillCards,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillCategoriesRef.current,
          start: "top 80%",
        }
      }
    );

    
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    gsap.fromTo(
      skillBars,
      { width: 0 },
      { 
        width: (_index, target) => {
          return target.dataset.percentage + '%';
        },
        stagger: 0.05,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          start: "top 70%",
        }
      }
    );

    
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      
      gsap.fromTo(
        timelineItems,
        { 
          opacity: 0,
          x: (index) => index % 2 === 0 ? -50 : 50
        },
        { 
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  return (
    <section className="skills-section section">
      <div className="skills-bg-shapes">
        <div className="skills-shape shape-1"></div>
        <div className="skills-shape shape-2"></div>
        <div className="skills-shape shape-3"></div>
      </div>
      
      <div className="container skills-container" ref={skillsContainerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="row mb-5"
        >
          <div className="col-12 text-center">
            <h2 className="section-title gradient-text fw-bold">Technical Skills</h2>
            <div className="title-underline"></div>
            <p className="lead mt-3 col-md-8 mx-auto">Mastering the tools that bring digital experiences to life</p>
          </div>
        </motion.div>

        <div className="skills-category-container" ref={skillCategoriesRef}>
          {/* Frontend Skills */}
          <div className="skill-category frontend-category">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <FaLaptopCode />
              </div>
              <h3>Frontend Development</h3>
            </div>
            
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-bar-fill"
                      data-percentage={skill.percentage}
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="skill-category backend-category">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <FaServer />
              </div>
              <h3>Backend Development</h3>
            </div>
            
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-bar-fill"
                      data-percentage={skill.percentage}
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Other Skills */}
          <div className="skill-category others-category">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <FaGithub />
              </div>
              <h3>Other Technologies</h3>
            </div>
            
            <div className="skills-list">
              {otherSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-bar-fill"
                      data-percentage={skill.percentage}
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Professional Journey */}
        <div className="container mt-5 pt-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="row mb-5"
          >
            <div className="col-12 text-center">
              <h2 className="gradient-text fw-bold">Professional Journey</h2>
              <div className="title-underline"></div>
              <p className="lead mt-3 col-md-8 mx-auto journey-tagline">Exploring my path in the world of technology</p>
            </div>
          </motion.div>
          
          <div className="journey-section">
            <div className="timeline-container" ref={timelineRef}>
              <div className="timeline-item">
                <div className="timeline-date">Aug 2025 - Present</div>
                <div className="timeline-marker"></div>
                <div className="timeline-content glass-card">
                  <h3>Development Team Lead</h3>
                  <p className="company-name">Franean Technologies</p>
                  <p>
                    Leading a team of developers in creating innovative web solutions for Franean Lubricants' digital transformation. Overseeing project management, code reviews, and technical architecture decisions. Mentoring junior developers and implementing best practices for scalable web applications.
                  </p>
                  <div className="timeline-tags">
                    <span className="tag">Team Leadership</span>
                    <span className="tag">Project Management</span>
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Architecture</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">May 2025 - Jul 2025</div>
                <div className="timeline-marker"></div>
                <div className="timeline-content glass-card">
                  <h3>Web Developer</h3>
                  <p className="company-name">Franean Technologies</p>
                  <p>
                    Developed and maintained web applications for Franean Lubricants' digital presence. Built responsive user interfaces and integrated backend services. Collaborated with cross-functional teams to deliver high-quality web solutions that enhanced the company's online presence and customer engagement.
                  </p>
                  <div className="timeline-tags">
                    <span className="tag">React</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">CSS3</span>
                    <span className="tag">API Integration</span>
                    <span className="tag">Responsive Design</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2023 - Present</div>
                <div className="timeline-marker"></div>
                <div className="timeline-content glass-card">
                  <h3>Freelance Web Developer</h3>
                  <p className="company-name">Various Clients</p>
                  <p>
                    Working independently on diverse projects for multiple clients, delivering custom web solutions tailored to specific business needs. Developed full-stack applications, e-commerce platforms, and interactive web experiences. Gained extensive experience working with real-world applications and diverse client requirements.
                  </p>
                  <div className="timeline-tags">
                    <span className="tag">Full Stack</span>
                    <span className="tag">Client Management</span>
                    <span className="tag">E-commerce</span>
                    <span className="tag">Custom Solutions</span>
                    <span className="tag">Real-world Apps</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Feb 2023 - Apr 2023</div>
                <div className="timeline-marker"></div>
                <div className="timeline-content glass-card">
                  <h3>Full Stack Development Intern</h3>
                  <p className="company-name">CodTech IT Solutions</p>
                  <p>
                    Collaborated with a team of developers to design and implement software solutions. Developed Express.js and React-based web projects covering API integration, real-time chat, collaborative editing, and productivity tracking. Improved project performance and integrated AI-driven approaches for enhanced application functionality.
                  </p>
                  <div className="timeline-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Express</span>
                    <span className="tag">API Integration</span>
                    <span className="tag">Real-time Chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 