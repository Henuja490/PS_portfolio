import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css"; // Add a custom CSS file for additional styling

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer bg-gradient text-light py-5">
      <div className="container">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">About Me</h5>
            <p>
              I am a passionate Software Engineering undergraduate, dedicated to creating innovative solutions and exploring the latest technologies. Thank you for visiting my portfolio!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/assignment" className="text-light text-decoration-none">Assignments</a></li>
              <li><a href="/gallery" className="text-light text-decoration-none">Gallery</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold">Contact</h5>
            <p>
              <strong>Address:</strong> Abimanpura Road,Panadura,Sri Lanka<br />
              <strong>Phone:</strong> (+94) 711779583<br />
              <strong>Email:</strong> <a href="mailto:henujadulneth@gmail.com" className="text-light text-decoration-none">henujadulneth@gmail.com</a>
            </p>
          </div>

          {/* Social Media */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h5 className="fw-bold">Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="https://github.com/Henuja490" target="_blank" rel="noopener noreferrer" className="text-light fs-4 social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/henuja-katuwapitiya-0a89b034b" target="_blank" rel="noopener noreferrer" className="text-light fs-4 social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:henujadulneth@gmail.com" className="text-light fs-4 social-icon">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4 social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary scroll-to-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i> Back to Top
          </button>
          <p className="mt-3 mb-0">
            © {new Date().getFullYear()} Henuja Katuwapitiya | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
