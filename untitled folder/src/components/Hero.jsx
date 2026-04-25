import './Hero.css';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-particles">
        <div className="particle p-1"></div>
        <div className="particle p-2"></div>
        <div className="particle p-3"></div>
        <div className="particle p-4"></div>
      </div>
      
      <div className="hero-content animate-fade-in">
        <h2 className="hero-subtitle">Hello, I'm</h2>
        <h1 className="hero-title">
          <span className="text-gradient" data-text="John Doe">John Doe</span>
        </h1>
        <p className="hero-description">
          A passionate Frontend Developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} className="btn-icon" />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="hero-glass-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
