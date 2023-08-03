import React from "react";
import "../CSS/Footer.css";
const address = "http://localhost:3000/";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text"></p>
    </div>
  );
};

export default Footer;

window.addEventListener("load", () => {
  if (window.location.href === address) {
    const footerText = document.querySelector(".footer-text");
    let year = new Date().getFullYear();

    footerText.innerHTML = `&copy; Victor Gao, ${year}. All rights reserved.`;
  }
});
