import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProjectCard from './ProjectCard';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import SkillsPage from './SkillsPage';
import ResumePage from './ResumePage';
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.mjs`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router basename={process.env.PUBLIC_URL}>
      <div style={{
        position: "absolute", overflow: "auto", width: "100%", top: "0px", paddingTop: "51px",
        left: "0", height: "100vh", boxSizing: "border-box"
      }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
      </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
