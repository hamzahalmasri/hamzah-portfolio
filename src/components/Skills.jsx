import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaRobot } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend Development",
            icon: <FaCode />,
            skills: ["HTML", "CSS", "JavaScript", "React.js"]
        },
        {
            category: "Backend Development",
            icon: <FaServer />,
            skills: ["Node.js", "Express.js"]
        },
        {
            category: "Database",
            icon: <FaDatabase />,
            skills: ["PostgreSQL"]
        },
        {
            category: "Tools",
            icon: <FaTools />,
            skills: ["REST APIs", "Responsive Design"]
        },
        {
            category: "Automation",
            icon: <FaRobot />,
            skills: ["n8n (Simple Workflow Automation)"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">My Skills</h2>

                <div className="skills-grid">
                    {skillsData.map((item, index) => (
                        <div className="skill-card" key={index}>
                            <div className="card-header">
                                <span className="card-icon">{item.icon}</span>
                                <h3>{item.category}</h3>
                            </div>
                            <div className="skills-list">
                                {item.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;