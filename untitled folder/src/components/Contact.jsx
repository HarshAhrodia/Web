import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content glass-card glowing-card">
        <h2 className="contact-title text-gradient" data-text="Get In Touch">Get In Touch</h2>
        <p className="contact-description">
          Although I'm not currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:hello@example.com" className="btn btn-primary contact-btn">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
