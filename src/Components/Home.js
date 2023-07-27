import React from "react";
import "../CSS/Home.css";
import trump from "../Images/trump.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

let textContent;
let navShowing;
const suffixes = [
  "Software Engineer",
  "Student",
  "Learner",
  "Web Developer",
  "Saxophonist",
];
let pool = [
  "Software Engineer",
  "Student",
  "Learner",
  "Web Developer",
  "Saxophonist",
];

const Home = () => {
  return (
    <>
      <div className="section" id="home">
        <div className="home-container">
          <div className="welcome-text-container">
            <h2 className="welcome-text" id="welcome-text">
              {textContent}
            </h2>
          </div>
          <img src = {trump} className="home-picture" alt = "profile-pic"></img>
        </div>

        <div className="project-link-container">
          <h3 className="fade-in-text" onClick={scrollProjects}>
            <span>View </span>
            <span>Projects </span>
            <span><FontAwesomeIcon icon={faChevronDown} className="bounce arrow-down-icon"/></span>
            </h3>
        </div>
      </div>
    </>
  );
};
export default Home;

function typeWriter(text, flag) {
  const textElement = document.querySelector(".welcome-text");
  let n = 0;
  if (flag) n = 22;
  let timer = setInterval(() => {
    n = n + 1;
    textElement.innerHTML = text.slice(0, n) + "|";
    if (n === text.length) {
      clearInterval(timer);
      n = 0;
      textContent = text;

      let endTimer = setInterval(() => {
        n++;
        if (n % 2) textElement.innerHTML = text;
        else textElement.innerHTML = text + "|";
        if (n === 5) {
          clearInterval(endTimer);
          typeWriterDelete(text.length - 22);
        }
      }, 500);
    }
  }, 100);
}

function typeWriterDelete(length) {
  const textElement = document.querySelector(".welcome-text");
  let n = 0;
  let timer = setInterval(() => {
    n = n + 1;
    let text = textElement.textContent;
    textElement.innerHTML = text.slice(0, 22 + length - n) + "|";
    if (n === length) {
      clearInterval(timer);
      let rand = Math.floor(Math.random() * pool.length);
      typeWriter("Hello! I am Victor, a " + pool[rand], true);
      pool.splice(rand, 1);
      if (pool.length === 0) pool = [...suffixes];
    }
  }, 100);
}
window.addEventListener("load", () => {
  let num = 0;
  navShowing = window.innerWidth <= 500 ? false : true;
  navShowing = window.innerWidth <= 500 ? false : true;

  setTimeout(() => {
    typeWriter("Hello! I am Victor, a " + pool[num], false);
    pool.splice(num, 1);
    if (pool.length === 0) pool = [...suffixes];
  }, 500)

});

window.addEventListener("resize", ()=> {
  navShowing = window.innerWidth <= 500 ? false : true;
  navShowing = window.innerWidth <= 500 ? false : true;
})

function scrollProjects() {
  let navHeight;
  if (navShowing) {
    const mainNav = document.querySelector(".main-nav");
    navHeight = mainNav.getClientRects()[0].height;
  } else {
    const verticalNav = document.querySelector(".vertical-nav");
    navHeight = verticalNav.getClientRects()[0].height;
  }

  const projectsSection = document.getElementById("projects");
  let location = projectsSection.offsetTop;
  window.scroll({
    top: location - navHeight,
    behavior: "smooth",
  });
}
