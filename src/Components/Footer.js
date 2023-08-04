import React from "react";
import "../CSS/Footer.css";
const address = "https://master.d3f5w0adcbzt54.amplifyapp.com/";

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
