import React from "react";
import "../CSS/Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="section" id="socials">
        <h1 className="socials-header">Socials</h1>
        <h3 className="socials-subheader">Feel free to contact me!</h3>
        <div className="socials-container">
          <div className="contact-info-container link" onClick={openEmail}>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p className="contact-info">victorgao0308@gmail.com</p>
          </div>

          <div className="contact-info-container link" onClick={openLinkedIn}>
            <FontAwesomeIcon icon={faLinkedinIn} className="contact-icon" />
            <p className="contact-info">
              https://www.linkedin.com/in/victorgao0308/
            </p>
          </div>

          <div className="contact-info-container link" onClick={openGitHub}>
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <p className="contact-info">https://github.com/victorgao0308</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

function openEmail() {
  window.open("mailto:victorgao0308@gmail.com", "_blank");
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/in/victorgao0308/", "_blank");
}
function openGitHub() {
  window.open("https://github.com/victorgao0308", "_blank");
}
