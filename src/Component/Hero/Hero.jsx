import React from "react";
import "./Hero.css";
import resume from "../../../assets/Resume/Resume.pdf";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="intro">Hi, I'm Sivakaran</h1>
      <h2 className="role">Software Engineer | Customer Support Executive</h2>
      <p className="role-description">
        I develop and Test new features for the software product and maintain
        client coordination
      </p>
      <div className="buttons">
        <button className="project">View Project</button>
        <button className="resume">
          <a href={resume} target="#">
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
