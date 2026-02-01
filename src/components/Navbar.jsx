import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="logo">Hamzah Almasri</div>

                <button className="icon-btn" onClick={() => setOpen(true)}>
                    <FiMenu size={26} />
                </button>
            </nav>

            <div className={`menu-overlay ${open ? "open" : ""}`}>
                <button className="icon-btn close" onClick={() => setOpen(false)}>
                    <FiX size={28} />
                </button>

                <ul className="menu-list">
                    {["About", "Skills", "Volunteering", "Projects", "Education", "Courses"].map(
                        (item, index) => (
                            <li
                                key={item}
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                                    {item}
                                </a>
                            </li>
                        )
                    )}
                    <a href="/Hamzah_Almasri_CV.pdf" download className="cv-btn"> Download CV </a>
                </ul>


            </div>
        </div>
    );
}

export default Navbar;
