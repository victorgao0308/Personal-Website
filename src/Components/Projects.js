import React from "react";
import "../CSS/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="section" id="projects">
        <h1 className="projects-header scroll">Projects</h1>
        <h3 className="projects-subheader scroll">
          Tap on each card for more info!
        </h3>
        <div className="projects-container">
          <div
            className="project scroll slide-right-projects"
            onClick={displayProjectInfo}
          >
            <div className="project-inner">
              <h3>Flash Card App</h3>
              <div className="project-img-container"></div>
              <p className="project-desc">A web app where users can create, review, and study flashcards. Built with the PERN (PostgreSQL, Express.js, React, Node.js) stack, with CRUD (create, read, update, delete) operations between the frontend and backend.</p>
            </div>
          </div>
          <div className="project scroll slide-right-projects">
            <div className="project-inner">
              <h3>Tetris</h3>
              <div className="project-img-container"></div>
              <p className="project-desc">The classic game of Tetris built in vanilla JavaScript.</p>
            </div>
          </div>
          <div className="project scroll slide-right-projects">
            <div className="project-inner">
              <h3>Food For Thought</h3>
            </div>
          </div>
          <div className="project scroll slide-right-projects">
            <div className="project-inner">
              <h3>Mood Music</h3>
            </div>
          </div>
          <div className="project scroll slide-right-projects">
            <div className="project-inner">
              <h3>Multi-Cloud Storage Systems</h3>
            </div>
          </div>
          <div className="project scroll slide-right-projects">
            <div className="project-inner">
              <h3>Chat App</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

function displayProjectInfo() {
  console.log("huh");
}
