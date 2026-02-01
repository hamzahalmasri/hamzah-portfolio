import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">

                <h2 className="section-title">About Me</h2>

                <p className="about-text">
                    I am a <strong>Computer Information Systems</strong> student at the University of Jordan and a beginner
                    Junior Full-Stack Web Developer with hands-on experience building small web applications using
                    <strong> React, Node.js, Express, and PostgreSQL</strong>. Passionate about solving problems,
                    creating clean user experiences, and continuously learning through projects, volunteering,
                    and structured online courses.
                </p>


                <div className="contact-grid">


                    <div className="contact-item">
                        <FaMapMarkerAlt className="icon" />
                        <span >Amman, Jordan</span>
                    </div>

                    <div className="contact-item">
                        <FaEnvelope className="icon" />
                        <a href="mailto:hamzah20.masri@gmail.com">hamzah20.masri@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        <FaPhoneAlt className="icon" />
                        <a href="tel:+962790348708">+962 79 034 8708</a>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/hamzah-almasri-aa916934a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                            <FaLinkedin size={30} />
                            <span className="contact-item">My LinkedIn Profile</span>
                        </a>
                        {/*GitHub*/}
                    </div>

                </div>



            </div>
        </section>
    );
}

export default About;