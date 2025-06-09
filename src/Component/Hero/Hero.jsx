import React from "react";
import "./Hero.css";
import resume from "/assets/Resume/Resume.pdf";

const Hero = ({ onNavigate }) => {
  return (
    <div className="hero">
      <h1 className="intro">Hi, I'm Sivakaran</h1>
      <h2 className="role">Software Engineer | Full Stack Developer</h2>
      <p className="role-description">
        Full Stack Developer who designs and builds responsive, dynamic web
        applications with a focus on clean UI, smooth user experiences, and
        scalable functionality.
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
