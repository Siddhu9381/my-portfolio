import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    var sections = ["Home", "About Me", "Projects", "Skills", "Contact"]
    var sections = {
        "Home": "/",
        "About Me": "/aboutme",
        "Projects": "/projects",
        "Skills": "/skills",
        "Contact": "/contact"
    }
    return (
        <>
            <nav style={{ background: "linear-gradient(to bottom, #0A192F, #1C2333)" }}>
                <ul>
                    {Object.keys(sections).map((i) =>
                        (<li className="navbar-item"><Link to={sections[i]}>{i}</Link></li>)
                    )
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar;