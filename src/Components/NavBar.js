import React from "react";
import "../CSS/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

let navShowing;

const NavBar = () => {
  return (
    <>
      <ul className="main-nav">
        <li>
          <a onClick={scrollHome}>Home</a>
        </li>
        <li>
          <a onClick={scrollBio}>Bio</a>
        </li>
        <li>
          <a onClick={scrollProjects}>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faBars} className="nav-bars hide" />
        </li>
      </ul>
    </>
  );
};

export default NavBar;

function scrollHome() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

function scrollBio() {
  const mainNav = document.querySelector(".main-nav");
  let navHeight = mainNav.getClientRects()[0].height;
  const bioSection = document.getElementById("bio");
  let location = bioSection.offsetTop;

  window.scroll({
    top: location - navHeight,
    behavior: "smooth",
  });
}

function scrollProjects() {
  const mainNav = document.querySelector(".main-nav");
  let navHeight = mainNav.getClientRects()[0].height;
  const projectsSection = document.getElementById("projects");
  let location = projectsSection.offsetTop;

  window.scroll({
    top: location - navHeight,
    behavior: "smooth",
  });
}

window.addEventListener("load", () => {
  navShowing = window.innerWidth <= 500 ? false : true;
});

window.addEventListener("resize", () => {
  navShowing = window.innerWidth <= 500 ? false : true;
});
