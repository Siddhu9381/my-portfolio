import React from "react";
import './Home.css';
import myImage from '../src/assets/mypic1.png'

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
                        <h1>I'm  Sidhartha Reddy Gundarapu</h1>
                    </header>
                    <h4> Data Enthusiast | Web Developer | Problem Solver</h4>
                </section>
            </home-main>
        </>
    )
}

export default Home;