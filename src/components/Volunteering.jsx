import React from 'react';
import { FaUsers, FaGlobe } from 'react-icons/fa';
import './Volunteering.css';

const Volunteering = () => {
    const volunteerData = [
        {
            organization: "iTeam JU",
            role: "Academic Leader",
            icon: <FaUsers />,
            description: "Leading academic initiatives and supporting students within the team."
        },
        {
            organization: "IEEE CIS",
            role: "Member",
            icon: <FaGlobe />,
            description: "Member contributing to IEEE CIS activities."
        }
    ];

    return (
        <section id="volunteering" className="volunteering-section">
            <div className="container">

                <h2 className="section-title">Volunteering</h2>

                <div className="volunteering-list">
                    {volunteerData.map((item, index) => (
                        <div className="vol-card" key={index}>
                            <div className="vol-icon-box">
                                {item.icon}
                            </div>
                            <div className="vol-content">
                                <h3>{item.organization}</h3>
                                <span className="vol-role">{item.role}</span>
                                <p className="vol-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Volunteering;