import { FC } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({ className = '', iconClassName = 'fs-5' }) => {
  return (
    <div className={`social-icons ${className}`}>
      <a 
        href="https://github.com/Sharan630" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
        aria-label="GitHub"
      >
        <FaGithub className={iconClassName} />
      </a>
      <a 
        href="https://www.linkedin.com/in/bhogi-sharan-sai-b1009834b/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
        aria-label="LinkedIn"
      >
        <FaLinkedin className={iconClassName} />
      </a>
      <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
        aria-label="Twitter"
      >
        <FaTwitter className={iconClassName} />
      </a>
      <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
        aria-label="Instagram"
      >
        <FaInstagram className={iconClassName} />
      </a>
    </div>
  );
};

export default SocialIcons; 