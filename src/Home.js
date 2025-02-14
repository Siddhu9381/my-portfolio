import React from "react";
import './Home.css';
import myImage from '../src/assets/mypic1.png'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <home-main>
                <figure>
                    <img src={myImage} alt="no figure"></img>
                </figure>
                <section>
                    <header>
                        <h3>Hello,</h3>
                        <h1>I'm  Sidhartha Reddy Gundarapu,</h1>
                    </header>
                    <h3> a Result-driven <span style={{ color: "#32CD32" }}>Web Developer</span></h3>
                    <p>Passionate about solving real-world problems through web solutions. Skilled in React for building dynamic, eye-catching interfaces, creating and integrating APIs for seamless data handling, and deploying web applications efficiently.</p>
                    <Link to='/about-me'><button><h4>Learn more</h4></button></Link>
                </section>
            </home-main>
        </>
    )
}

export default Home;