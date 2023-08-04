import React from "react";
import "../CSS/TopBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const address = "https://master.d3f5w0adcbzt54.amplifyapp.com/";

const TopBtn = () => {
  return (
    <div className="top-btn-container hide" onClick={scrollTop}>
      <FontAwesomeIcon icon={faCaretUp} className="top-btn" />
    </div>
  );
};

export default TopBtn;

window.addEventListener("scroll", () => {
  if (window.location.href === address) {
    const topBtn = document.querySelector(".top-btn-container");

    if (window.scrollY >= 200) {
      topBtn.classList.remove("hide");
    } else {
      topBtn.classList.add("hide");
    }
  }
});

function scrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}
