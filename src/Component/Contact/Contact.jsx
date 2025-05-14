import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Let's Work Together</h1>
      <p className="content">
        I'm always open to new opportunities, collaborations, and meaningful
        projects where I can contribute my skills in software development,
        support, and client implementation. Whether you're looking for someone
        to build reliable applications, streamline support processes, or bring
        technical clarity to your product rollout, I'm here to help. Let’s
        connect and create something impactful together.
      </p>
      <a
        className="connection"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sivakaransuriya@gmail.com"
        target="_"
      >
        Get in Touch
      </a>{" "}
    </div>
  );
};

export default Contact;
