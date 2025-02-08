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
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Router>
      <div style={{
        position: "absolute", overflow: "auto", width: "100%", top: "0px", paddingTop: "51px",
        left: "0", height: "100vh", boxSizing: "border-box"
      }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/skills' element={<SkillsPage />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
