import { FC } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({ className = '' }) => {
  return (
    <div className={`social-icons ${className}`}>
      <a 
        href="https://github.com/Sharan630" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a 
        href="https://www.linkedin.com/in/bhogi-sharan-sai-b1009834b/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialIcons; 