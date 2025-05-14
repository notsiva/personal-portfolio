import React from "react";
import "./Hero.css";
import resume from "/assets/Resume/Resume.pdf";

const Hero = ({ onNavigate }) => {
  return (
    <div className="hero">
      <h1 className="intro">Hi, I'm Sivakaran</h1>
      <h2 className="role">Software Engineer | Customer Support Executive</h2>
      <p className="role-description">
        I work on developing and testing new product features while managing
        client interactions to ensure their requirements are met
      </p>
      <div className="buttons">
        <a className="project" onClick={() => onNavigate("project")}>
          View Project
        </a>

        <a href={resume} target="#">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
