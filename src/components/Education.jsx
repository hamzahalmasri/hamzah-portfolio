import React from 'react';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            institution: "University of Jordan",
            degree: "Bachelor of Computer Information Systems (CIS)",
            date: "2022 - 2026",
            description: "Focusing on software engineering, system analysis, and database management."
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">

                <h2 className="section-title">Education</h2>

                <div className="education-list">
                    {educationData.map((item, index) => (
                        <div className="edu-card" key={index}>

                            <div className="edu-icon-box">
                                <FaGraduationCap />
                            </div>

                            <div className="edu-content">
                                <h3>{item.institution}</h3>
                                <span className="edu-degree">{item.degree}</span>

                                <div className="edu-date">
                                    <FaCalendarAlt className="date-icon" />
                                    <span>{item.date}</span>
                                </div>

                                <p className="edu-desc">{item.description}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Education;