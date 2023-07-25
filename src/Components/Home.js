import React from "react";
import "../CSS/Home.css";

let textContent;
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
        <div className="welcome-text-container">
          <h2 className="welcome-text" id="welcome-text">
            {textContent}
          </h2>
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
  typeWriter("Hello! I am Victor, a " + pool[num], false);
  pool.splice(num, 1);
  if (pool.length === 0) pool = [...suffixes];
});
