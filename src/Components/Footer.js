import React from "react";
import "../CSS/Footer.css";
import { webAddress } from "../Address";
const address = webAddress;

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text"></p>
    </div>
  );
};

export default Footer;

window.addEventListener("load", () => {

  setTimeout(()=> {
    if (window.location.href === address) {
      const footerText = document.querySelector(".footer-text");
      let year = new Date().getFullYear();
  
      footerText.innerHTML = `&copy; Victor Gao, ${year}. All rights reserved.`;
    }
  }, 500)

});
