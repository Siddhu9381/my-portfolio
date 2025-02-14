import React, { useEffect, useState } from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    let [page, setPage] = useState("Home");
    var sections = ["Home", "About Me", "Projects", "Skills", "Contact"]
    var sections = {
        "Home": "/",
        "About": "/about-me",
        "Projects": "/projects",
        "Skills": "/skills",
        "Contact": "/contact"
    }

    function handleClick(e, val) {
        console.log(val);
        document.querySelector(`#${page}`).classList.remove("active");
        console.log(page, document.querySelector(`#${page}`).classList)
        document.querySelector(`#${val}`).classList.add("active");
        console.log(document.querySelector(`#${val}`).classList);
        setPage(val);
    }

    return (
        <>
            <nav style={{ background: "linear-gradient(to bottom, #0A192F, #1C2333)", display: "flex", justifyContent: "space-between", padding: "0px 20px", boxSizing: "border-box", alignItems: "center" }}>
                <p><b>SID</b></p>
                <ul>
                    {Object.keys(sections).map((i) =>
                        (<li key={i} id={i} className="navbar-item"><Link to={sections[i]} onClick={(e) => handleClick(e, i)}>{i}</Link></li>)
                    )
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar;