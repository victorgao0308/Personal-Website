import React from "react";
import "../CSS/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

let navShowing;
const address = "https://master.d3f5w0adcbzt54.amplifyapp.com/";

const NavBar = () => {
  return (
    <>
      <ul className="main-nav">
        <li onClick={scrollHome}>
          <button>Home</button>
        </li>
        <li onClick={scrollBio}>
          <button>Bio</button>
        </li>
        <li onClick={scrollProjects}>
          <button>Projects</button>
        </li>
        <li onClick={scrollSocials}>
          <button>Socials</button>
        </li>
      </ul>

      <ul className="vertical-nav">
        <li className="bars">
          <FontAwesomeIcon
            icon={faBars}
            className="nav-bars"
            onClick={collapseDiv}
          />
        </li>

        <div className="collapsing-div">
          <li onClick={scrollHome} className="collapse-link hide">
            <button>Home</button>
          </li>
          <li onClick={scrollBio} className="collapse-link hide">
            <button>Bio</button>
          </li>
          <li onClick={scrollProjects} className="collapse-link hide">
            <button>Projects</button>
          </li>
          <li onClick={scrollSocials} className="collapse-link hide">
            <button>Socials</button>
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
  } else {
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

function scrollSocials() {
  let navHeight;
  if (navShowing) {
    const mainNav = document.querySelector(".main-nav");
    navHeight = mainNav.getClientRects()[0].height;
  } else {
    collapseDiv();
    const verticalNav = document.querySelector(".vertical-nav");
    navHeight = verticalNav.getClientRects()[0].height;
  }

  const socialsSection = document.getElementById("socials");
  let location = socialsSection.offsetTop;
  window.scroll({
    top: location - navHeight,
    behavior: "smooth",
  });
}

window.addEventListener("load", toggleNavMenu);

window.addEventListener("resize", toggleNavMenu);

function toggleNavMenu() {
  if (window.location.href === address) {
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
}

function collapseDiv() {
  const collapseDiv = document.querySelector(".collapsing-div");
  const links = document.querySelectorAll(".collapsing-div button");
  const collapseLinks = document.querySelectorAll(".collapse-link");

  collapseLinks.forEach((link) => {
    link.classList.toggle("hide");
  });

  if (collapseDiv.style.height !== `30vh`) collapseDiv.style.height = `30vh`;
  else {
    collapseDiv.style.height = `0vh`;
    links.forEach((link, index) => {
      link.style.opacity = 0;
    });
  }

  links.forEach((link, index) => {
    link.classList.toggle("active");
  });
}
