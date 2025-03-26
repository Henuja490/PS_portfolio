import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/Henuja.png'
const About: React.FC = () => {
    return (
      <div className="about-section card p-5 shadow-lg border-0">
  <h2 className="text-center section-title">👨‍💻 About Me</h2>
  
  <div className="text-center my-4">
    <img src={logo} alt="Profile" className="profile-img shadow-lg" />
  </div>

  <p className="about-text text-center">
    I am a passionate <b>Software Engineering</b> undergraduate, dedicated to merging <span className="highlight">technology</span> and <span className="highlight">creativity</span>.  
    My academic journey has equipped me with strong programming skills and a deep understanding of <b>software development practices</b>.  
    I love <b>team collaboration</b>, participating in <b>hackathons</b>, and exploring <span className="highlight">AI & Machine Learning</span> to create innovative solutions that leave a meaningful impact.
  </p>

  <div className="text-center mt-4">
    <a href="/assignment" className="btn btn-primary btn-lg shadow-sm">View My Work 🚀</a>
  </div>
</div>

    );
  };
  
  export default About;
  