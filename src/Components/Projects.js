import React from "react";
import "../CSS/Projects.css"

const Projects = () => {
    return (
        <>
        <div className="section" id = "projects">
            <h1 className="projects-header">Projects</h1>
            <h3 className="projects-subheader">Tap on each card for more info!</h3>
            <div className="projects-container">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
        </div>
        </>
    )
}

export default Projects;