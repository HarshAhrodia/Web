import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#" aria-label="GitHub"><FaGithub size={20} /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
        <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
        <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
      </div>
      <p className="footer-text">
        Designed & Built with <span className="text-gradient">React</span> by John Doe
      </p>
    </footer>
  );
};

export default Footer;
