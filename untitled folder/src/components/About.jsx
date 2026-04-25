import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text glass-card">
          <p>
            Hello! I'm a developer who loves building things that live on the internet. 
            My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, 
            and a huge corporation. My main focus these days is building accessible, inclusive products and 
            digital experiences for a variety of clients.
          </p>
          <div className="skills-container">
            <h3>Technologies I've been working with:</h3>
            <ul className="skills-list">
              <li className="skill-badge">JavaScript (ES6+)</li>
              <li className="skill-badge">React</li>
              <li className="skill-badge">Node.js</li>
              <li className="skill-badge">TypeScript</li>
              <li className="skill-badge">Next.js</li>
              <li className="skill-badge">CSS / Tailwind</li>
            </ul>
          </div>
        </div>
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <img src="/avatar.png" alt="Profile Avatar" className="about-image-glow" />
            <div className="about-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
