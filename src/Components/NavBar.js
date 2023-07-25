import React from "react";
import "../CSS/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#bio">Bio</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faBars}  className="nav-bars"/>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
