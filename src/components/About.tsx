import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/Henuja.png'
const About: React.FC = () => {
    return (
      <div className="card p-4 shadow-lg border-0">
        
        <h2 className="text-center" style={{fontSize: "3em"}}>About Me</h2><br />
        <div className="text-center">
        <img src={logo} alt="" className="rounded" style={{width: 500, alignItems: "center"}} />
        </div><br></br>
        <p className="text-center justify-content" style={{fontSize: "1.5em"}}>As a passionate <b>Software Engineering </b>undergraduate, I thrive on blending technology and creativity. My studies have provided me with a strong grasp of programming languages and software development practices. I enjoy collaborating on team projects and participating in hackathons to continuously challenge myself. With a keen interest in AI and machine learning, I am eager to develop innovative software solutions that make a meaningful impact.</p>
      </div>
    );
  };
  
  export default About;
  