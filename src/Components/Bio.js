import React from "react";
import "../CSS/Bio.css";
import bioPic from "../Images/bio-pic.jpg";

let scrollElements;

const Bio = () => {
  return (
    <>
      <div className="section" id="bio">
        <h1 className="bio-header scroll slide-right">Bio</h1>

        <div className="bio-container">
          <img
            src={bioPic}
            className="bio-picture scroll slide-right"
            alt=""
          ></img>
          <div className="bio-desc-container scroll slide-right">
            <p className="bio-desc">
              Hello! I am Victor Gao, from Lexington, KY. I am currently a
              student at Purdue University, dual majoring in computer science
              and data science.
              <br></br>
              <br></br>I have previously worked alongside professors at the
              University of Kentucky to hone my skills in C and python, gaining
              experience with the Ubuntu operating system, and various image
              processing and OCR python libraries, such as OpenCV and
              Pytesseract.
              <br></br>
              <br></br>I have also worked alongside the Mara Elephant Project at
              Purdue University to create HTML templates of reports of forest
              loss and cover remaining through the years in the Greater Mara
              Ecosystem. Additionally, I helped to improve the web interface and
              functionality of Ecoscope, where users can generate these reports,
              using Django.
              <br></br>
              <br></br>Finally, I have also gone and devloped my skills in Javascript and React through some of my projects (including this website), which you can view in the next section.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;

window.addEventListener("load", () => {
  scrollElements = document.querySelectorAll(".scroll");
  handleScrollAnimation();
});

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= window.innerHeight;
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop > window.innerHeight;
};

const handleScrollAnimation = () => {
  if (scrollElements == null) return;
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      el.classList.add("scrolled");
    }
    if (elementOutofView(el)) {
      el.classList.remove("scrolled");
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
