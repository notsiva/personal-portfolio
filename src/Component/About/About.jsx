import React from "react";
import "./About.css";
import skills from "../../Data/skills.json";

const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <h2>What I do</h2>
        <p>
          I specialize in full-stack software development, combining frontend
          and backend technologies to build efficient and user-friendly
          applications. With strong experience in Java, Python, HTML, CSS,
          JavaScript, and PostgreSQL, I create robust systems backed by
          well-structured databases. I also develop dynamic reports using
          JasperReports and I-Report, helping clients turn data into actionable
          insights. In addition to development, I provide end-to-end technical
          support, troubleshoot application issues, and work closely with
          clients for smooth implementation, product training, and ongoing user
          support.
        </p>
      </div>
      <div className="skills">
        <h2>Skills I work with</h2>
        <div className="scroller">
          <ul className="skill-set">
            {[...skills, ...skills].map((skills, id) => {
              return (
                <li key={id} className="skill-item">
                  <img src={`/assets/${skills.img}`} alt={skills.skill} />
                  <p>{skills.skill}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
