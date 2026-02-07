import React from 'react';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            title: "Movies and Series Tracker",
            type: "(Personal Project)",
            videoSrc: "/videos/movies-tracker.mp4",
            technologies: ["Node.js", "Express", "PostgreSQL", "EJS", "HTML", "CSS", "JavaScript"]
        },
        {
            title: "TinDog Website",
            type: "(Course Project)",
            videoSrc: "/videos/tindog.mp4",
            technologies: ["HTML", "CSS", "Bootstrap"]
        },
        {
            title: "Ramadan Kareem Website",
            type: "(Personal Project)",
            videoSrc: "/videos/ramadan.mp4",
            technologies: ["React", "CSS3", "JavaScript", "Vite"],
        },
        {
            title: "EAT.COM Website",
            type: "(Personal Project)",
            videoSrc: "/videos/Eat.mp4",
            technologies: ["React", "Vite", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Flowise AI (RAG)"],
        },

    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">

                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className="project-card" key={index}>

                            <div className="video-wrapper">

                                <video
                                    src={project.videoSrc}
                                    controls
                                    muted
                                    className="project-video"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="project-info">
                                <h3 className="project-title">
                                    {project.title}
                                    {project.type && <span className="project-type">{project.type}</span>}
                                </h3>

                                <div className="tech-stack">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>



                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;