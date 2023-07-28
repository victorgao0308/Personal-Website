import React from "react";
import "../CSS/Bio.css";
import trump from "../Images/trump.png";

let scrollElements;

const Bio = () => {
  return (
    <>
      <div className="section" id="bio">
        <h1 className="bio-header scroll slide-right">Bio</h1>

        <div className="bio-container">
          <img
            src={trump}
            className="bio-picture scroll slide-right"
            alt="bio-pic"
          ></img>
          <div className="bio-desc-container scroll slide-right"></div>
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
  const bioSection = document.getElementById("bio");
  const bioSectionHeight = bioSection.getBoundingClientRect().height;
  const elementTop = el.getBoundingClientRect().top + bioSectionHeight / 2;
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
