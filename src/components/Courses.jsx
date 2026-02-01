import React from 'react';
import { FaClock, FaCertificate } from 'react-icons/fa';
import './Courses.css';

const Courses = () => {
    const certData = [
        {
            title: "The Complete Full-Stack Web Development Bootcamp",
            provider: "Dr. Angela Yu (Udemy)",
            duration: "61.5 Hours",
            imgSrc: "/certificates/fullstack.jpg"
        },
        {
            title: "React 18 / 19 Course 2025",
            provider: "Jannick Leismann (Udemy)",
            duration: "11 Hours",
            imgSrc: "/certificates/react.jpg"
        },
        {
            title: "LLM_Stack_00 Bootcamp",
            provider: "IEEE CIS JU",
            duration: "Bootcamp",
            imgSrc: "/certificates/llm.jpg"
        }
    ];

    return (
        <section id="courses" className="cert-section">
            <div className="container">

                <h2 className="section-title">Courses and Certifications</h2>

                <div className="cert-grid">
                    {certData.map((item, index) => (
                        <div className="cert-card" key={index}>

                            <div className="cert-image-wrapper">
                                <img src={item.imgSrc} alt={item.title} className="cert-img" />
                                <div className="overlay">
                                    <FaCertificate className="overlay-icon" />
                                </div>
                            </div>

                            <div className="cert-content">
                                <h3>{item.title}</h3>
                                <span className="provider">{item.provider}</span>

                                <div className="cert-meta">
                                    <FaClock className="meta-icon" />
                                    <span>{item.duration}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Courses;