import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // Add a custom CSS file for additional styling
import Week1 from './assets/week1.jpg';
import Week2 from './assets/week2.jpg';
import HeroImage from './assets/Henuja.png'; // Import the new image
import Project1 from './assets/project1.jpg';
import Project2 from './assets/project2.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-section card p-5 shadow-lg border-0">
      {/* Hero Section */}
      <div className="text-center">
        <img src={HeroImage} alt="Hero" className="hero-img mb-4" />
      </div>
      <h2 className="text-center section-title">🏠 Welcome to My Portfolio</h2>
      <p className="home-text text-center">
        Explore my journey as a <b>Software Engineering</b> undergraduate. Dive into my <b>assignments</b>, <b>projects</b>, and <b>gallery</b> to learn more about my work and experiences.
      </p>

      {/* Highlights Section */}
      <div className="highlights-section mt-5">
        <h3 className="text-center text-primary">✨ Highlights</h3>
        <div className="row mt-4 gy-4">
          <div className="col-md-4 text-center">
            <div className="highlight-card p-4 shadow-sm">
              <i className="bi bi-code-slash fs-1 text-primary"></i>
              <h5 className="mt-3">Coding Projects</h5>
              <p>Explore my innovative coding projects and solutions.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="highlight-card p-4 shadow-sm">
              <i className="bi bi-people fs-1 text-primary"></i>
              <h5 className="mt-3">Team Collaboration</h5>
              <p>Learn about my teamwork experiences and group projects.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="highlight-card p-4 shadow-sm">
              <i className="bi bi-award fs-1 text-primary"></i>
              <h5 className="mt-3">Achievements</h5>
              <p>Discover my academic and professional accomplishments.</p>
            </div>
          </div>
        </div>
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

      {/* Assignments Section */}
      <div className="assignments-preview mt-5">
        <h3 className="text-center text-primary">📚 Assignments</h3>
        <p className="text-center text-muted">
          Explore my weekly assignments and learnings.
        </p>
        <div className="row mt-4 gy-4">
          <div className="col-md-6">
            <div className="card assignment-card shadow-sm border-0">
              <img src={Week1} className="card-img-top" alt="Week 1" />
              <div className="card-body">
                <h5 className="card-title text-primary">Week 1: Introduction to Professional Skills</h5>
                <p className="card-text text-muted">Learn about the importance of professional skills in the workplace.</p>
                <a href="PS_portfolio/assignment/1" className="btn btn-primary btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card assignment-card shadow-sm border-0">
              <img src={Week2} className="card-img-top" alt="Week 2" />
              <div className="card-body">
                <h5 className="card-title text-primary">Week 2: CV Writing and Cover Letters</h5>
                <p className="card-text text-muted">Discover how to create a professional CV and cover letter.</p>
                <a href="PS_portfolio/assignment/2" className="btn btn-primary btn-sm">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="PS_portfolio/assignment" className="btn btn-outline-primary btn-lg shadow-sm">View All Assignments</a>
        </div>
      </div>

    

      {/* Testimonials Section */}
      <div className="testimonials-section mt-5">
        <h3 className="text-center text-primary">💬 Testimonials</h3>
        <div className="row mt-4 gy-4">
          <div className="col-md-6">
            <div className="testimonial-card p-4 shadow-sm">
              <p>"Henuja's dedication and creativity are truly inspiring. His projects showcase his exceptional skills."</p>
              <h6 className="text-primary mt-3">- John Doe</h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-card p-4 shadow-sm">
              <p>"Working with Henuja has been a pleasure. His teamwork and problem-solving abilities are outstanding."</p>
              <h6 className="text-primary mt-3">- Jane Smith</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section mt-5 text-center">
        <h3 className="text-primary">Ready to Collaborate?</h3>
        <p className="text-muted">Let's work together to create something amazing.</p>
        <a href="PS_portfolio/about" className="btn btn-primary btn-lg shadow-sm">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
