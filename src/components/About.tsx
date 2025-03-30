import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css"; // Add a custom CSS file for additional styling
import logo from './assets/Henuja.png';

const About: React.FC = () => {
  return (
    <div className="about-section card p-5 shadow-lg border-0">
      {/* Hero Section */}
      <div className="text-center">
        <img src={logo} alt="Profile" className="profile-img shadow-lg mb-4" />
        <h2 className="section-title">👨‍💻 About Me</h2>
        <p className="about-intro">
          I am a passionate <b>Software Engineering</b> undergraduate, dedicated to merging <span className="highlight">technology</span> and <span className="highlight">creativity</span>.  
          My academic journey has equipped me with strong programming skills and a deep understanding of <b>software development practices</b>.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-section mt-5">
        <h3 className="text-center text-primary">💻 My Skills</h3>
        <div className="row mt-4 gy-4">
          <div className="col-md-4 text-center">
            <div className="skill-card p-4 shadow-sm">
              <i className="bi bi-code-slash fs-1 text-primary"></i>
              <h5 className="mt-3">Programming</h5>
              <p>Proficient in JavaScript, Python, and Java.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="skill-card p-4 shadow-sm">
              <i className="bi bi-palette fs-1 text-primary"></i>
              <h5 className="mt-3">UI/UX Design</h5>
              <p>Experienced in creating user-friendly interfaces.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="skill-card p-4 shadow-sm">
              <i className="bi bi-diagram-3 fs-1 text-primary"></i>
              <h5 className="mt-3">Team Collaboration</h5>
              <p>Skilled in working effectively within teams.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="social-links mt-5 text-center">
        <h3 className="text-primary">🌐 Connect with Me</h3>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="mailto:henujadulneth@gmail.com" className="social-icon text-decoration-none text-primary fs-4">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://github.com/Henuja490" target="_blank" rel="noopener noreferrer" className="social-icon text-decoration-none text-dark fs-4">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/henuja-katuwapitiya-0a89b034b" target="_blank" rel="noopener noreferrer" className="social-icon text-decoration-none text-primary fs-4">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form mt-5">
        <h3 className="text-center text-primary">📩 Contact Me</h3>
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows={4} placeholder="Enter your message"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg shadow-sm">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
