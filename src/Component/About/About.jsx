import React from "react";
import "./About.css";
import skills from "../../Data/skills.json";

const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <h2>What I do</h2>
        <p>
          I am a full-stack software developer with experience in building
          efficient and user-friendly applications using ReactJS, Node.js,
          Python, HTML, CSS, JavaScript, and PostgreSQL. I have strong knowledge
          of Java full-stack development, including Core Java, OOP concepts,
          JDBC, Servlets, JSP, and Spring-based architectures, enabling me to
          work across multiple technology stacks. I specialize in developing
          robust backend systems, well-structured databases, and dynamic reports
          using I-Report to deliver actionable insights. Alongside development,
          I provide end-to-end technical support, troubleshoot application
          issues, and collaborate closely with clients to ensure smooth
          implementation, effective training, and ongoing user support.
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
