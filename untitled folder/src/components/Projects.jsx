import './Projects.css';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, payment processing, and an admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      external: '#'
    },
    {
      title: 'Task Management App',
      description: 'A beautiful and intuitive task management application. Drag and drop functionality, real-time updates, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
      github: '#',
      external: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that provides real-time forecasts, interactive maps, and historical data visualization.',
      tech: ['JavaScript', 'HTML/CSS', 'OpenWeather API', 'Chart.js'],
      github: '#',
      external: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Some Things I've Built</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-header">
              <div className="project-folder">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                  <FaGithub size={22} />
                </a>
                <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link">
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <ul className="project-tech-list">
              {project.tech.map((tech, i) => (
                <li key={i} className="skill-badge">{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
