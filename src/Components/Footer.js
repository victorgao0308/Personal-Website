import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text"></p>
    </div>
  );
};

export default Footer;

window.addEventListener("load", () => {
  const footerText = document.querySelector(".footer-text");
  let year = new Date().getFullYear();
  
  footerText.innerHTML = `&copy; Victor Gao, ${year}. All rights reserved.`;
});
