import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer: React.FC = () => {
    return (
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <h5 className="fw-bold">Let's Connect!</h5>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="https://github.com/Henuja490" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/henuja-katuwapitiya-0a89b034b" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:henujadulneth@gmail.com" className="text-light fs-4">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="mt-3 mb-0">© {new Date().getFullYear()} Henuja Katuwapitiya | All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  