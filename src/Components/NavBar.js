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
      </ul>

      <ul className="vertical-nav">
        <li>
            <FontAwesomeIcon
              icon={faBars}
              className="nav-bars"
              onClick={collapseDiv}
            />
        </li>

        <div className="collapsing-div hide">
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
        </div>
      </ul>
    </>
  );
};

export default NavBar;

function scrollHome() {
  if (!navShowing) collapseDiv();

  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

function scrollBio() {
  let navHeight;

  if (navShowing) {
  const mainNav = document.querySelector(".main-nav");
  navHeight = mainNav.getClientRects()[0].height;
  }
  else {
    collapseDiv();
    const verticalNav = document.querySelector(".vertical-nav");
    navHeight = verticalNav.getClientRects()[0].height;
  }
  const bioSection = document.getElementById("bio");
  let location = bioSection.offsetTop;

  window.scroll({
    top: location - navHeight,
    behavior: "smooth",
  });
}

function scrollProjects() {
  let navHeight;
  if (navShowing) {
    const mainNav = document.querySelector(".main-nav");
    navHeight = mainNav.getClientRects()[0].height;
  } else {
    collapseDiv();
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

window.addEventListener("load", toggleNavMenu);

window.addEventListener("resize", toggleNavMenu);

function toggleNavMenu() {
  const verticalNav = document.querySelector(".vertical-nav");
  const mainNav = document.querySelector(".main-nav");

  navShowing = window.innerWidth <= 500 ? false : true;
  navShowing = window.innerWidth <= 500 ? false : true;
  if (!navShowing) {
    verticalNav.classList.remove("hide");
    mainNav.classList.add("hide");
  } else {
    verticalNav.classList.add("hide");
    mainNav.classList.remove("hide");
  }
}

function collapseDiv() {
  const collapseDiv = document.querySelector(".collapsing-div");
  collapseDiv.classList.toggle("hide");

  const verticalNav = document.querySelector(".vertical-nav");
  if (collapseDiv.classList.contains("hide")) verticalNav.style.height = `8vh`;
  else verticalNav.style.height = `35vh`;
}
