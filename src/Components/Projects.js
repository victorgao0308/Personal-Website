import React from "react";
import "../CSS/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <div className="section" id="projects">
        <h1 className="projects-header scroll">Projects</h1>
        <h3 className="projects-subheader scroll">
          Tap on each card for more info, GitHub repo links, and web demos!
          <br></br>
          (Web demo currently only available for Tetris)
        </h3>
        <div className="projects-container">
          <div
            className="project scroll slide-right-projects"
            onClick={displayProjectInfoFlashCards}
          >
            <div className="project-inner">
              <h3>Flash Card App</h3>
              <div className="project-img-container"></div>
              <p className="project-desc">
                A web app where users can create, review, and study flashcards.
                Built with the PERN (PostgreSQL, Express.js, React, Node.js)
                stack, with CRUD (create, read, update, delete) operations
                between the frontend and backend.
              </p>
            </div>
          </div>
          <div
            className="project scroll slide-right-projects"
            onClick={displayProjectInfoFlashCards}
          >
            <div className="project-inner">
              <h3>Tetris</h3>
              <div className="project-img-container"></div>
              <p className="project-desc">
                The classic game of Tetris built in vanilla JavaScript. Web demo
                version slightly modified to be utilized with React. For the
                original version, please go to the GitHub repo.
              </p>
            </div>
          </div>
          <div
            className="project scroll slide-right-projects"
            onClick={displayProjectInfoFlashCards}
          >
            <div className="project-inner">
              <h3>Food For Thought</h3>
              <div className="project-img-container"></div>
              <p className="project-desc">
                A web app designed during a hackathon to connect restaurants and
                people with leftover food to charities and those in need.
                Frontend built with React and Google Maps API, backend built
                with AWS.
              </p>
            </div>
          </div>
          <div
            className="project scroll slide-right-projects"
            onClick={displayProjectInfoFlashCards}
          >
            <div className="project-inner">
              <h3>Mood Music</h3>
              <div className="project-img-container"></div>
              <p className="project-desc">
                An app desgined during a hackathon to suggest music to users
                based on their listening history and current mood. Spotify API
                integration pulls users' favorite artists/genres, and DeepFace
                AI integration tracks users' moods.
              </p>
            </div>
          </div>
          <div
            className="project scroll slide-right-projects"
            onClick={displayProjectInfoFlashCards}
          >
            <div className="project-inner">
              <h3>Multi-Cloud Storage Systems</h3>
              <div className="project-img-container"></div>
              <p className="project-desc">
                An app for simulating file transfers between local storages and
                cloud storages utilizing TCP protocols. Built in C, on the
                Ubunutu operating system.
              </p>
            </div>
          </div>
          <div
            className="project scroll slide-right-projects"
            onClick={displayProjectInfoFlashCards}
          >
            <div className="project-inner">
              <h3>Tutor Service Chat App</h3>
              <div className="project-img-container"></div>
              <p className="project-desc">
                An app where users can provide or seek tutoring services. Users
                can chat with each other, view chat history, and block other
                users. This was part of a final project for a class.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-info-container hide">
        <FontAwesomeIcon
          icon={faXmark}
          className="close-info-menu"
          onClick={closeInfoMenu}
        />
      </div>
    </>
  );
};

export default Projects;

function openInfoMenu() {
  const infoContainer = document.querySelector(".project-info-container");
  infoContainer.classList.remove("hide");
}

function closeInfoMenu() {
  const infoContainer = document.querySelector(".project-info-container");
  infoContainer.classList.add("hide");
}

function displayProjectInfoFlashCards() {
  openInfoMenu();
  const infoContainer = document.querySelector(".project-info-container");


}
