import React from 'react';
import './styles.css';
import { FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";


import PP from './img/PP.jpg';

const Resume = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        {/* Navbar Brand */}
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Chandru Loganathan</span>
          <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={PP} alt="..." onClick={() => scrollToTop()} /></span>
        </a>
        {/* Navbar Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container-fluid p-0">
        {/* About */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h2 className="mb-0">
              Chandru
              <span className="text-primary">Loganathan</span>
            </h2>
            <div className="subheading mb-5">
              No: 44, Veera Anjaneyar Koil, 3nd Cross Street, Chakra Nagar
              Mangadu
              CHENNAI 600122 · (978) 972-4829 ·
              <a href="chandrulogan605@gmail.com">chandrulogan605@gmail.com</a>
            </div>
            <p className="lead mb-5">Motivated and enthusiastic fresher in MERN stack development, eager to apply my knowledge and skills to create innovative and impactful web applications.</p>
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/chandru-loganathan-91088b189/"><i className="fab fa-linkedin-in"><FaLinkedin /></i></a>
              <a className="social-icon" href="https://github.com/chandrulogan"><i className="fab fa-github"><FaGithub /></i></a>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* Education */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">SKR Engineering College</h3>
                <div className="subheading mb-3">Bachelor of Engineering</div>
                <div>Mechanical Engineering</div>
                <p>GPA: 7.6</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2015 - May 2019</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Jeeva Velu Residential School</h3>
                <div className="subheading mb-3">Higher secondary</div>
                <p>Percentage: 65</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2014 - May 2015</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* Skills */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item"><i className="fab fa-html5"><FaHtml5 /></i></li>
              <li className="list-inline-item"><i className="fab fa-css3-alt"><FaCss3Alt /></i></li>
              <li className="list-inline-item"><i className="fab fa-js-square"><FaJsSquare /></i></li>
              <li className="list-inline-item"><i className="fab fa-angular"><FaReact /></i></li>
              <li className="list-inline-item"><i className="fab fa-react"><FaNode /></i></li>
              <li className="list-inline-item"><i className="fab fa-node-js"><BiLogoMongodb /></i></li>
            </ul>
            {/* ... Rest of the skills section code ... */}
          </div>
        </section>
        <hr className="m-0" />

        {/* My Projects 1 */}
        <section className="resume-section" id="projects">
          <div className="resume-section-content">
            <h3 className="mb-2">WEB SCRAPER</h3>
            <div className="subheading mb-2">Description</div>
            <p>I developed a web scraping project that extracts data from
              the popular e-commerce platform Flipkart. The project is built using
              React, Node.js, and MongoDB. The main goal of the project is to
              scrape information about gaming laptops from Flipkart and display
              the data on a user-friendly dashboard</p>
            <div>
              <b>Deployed URL:</b>
            </div>
            <p>
              The frontend is deployed and hosted, allowing you to interact with the live application:&nbsp;
              <a
                className="nav-link js-scroll-trigger"
                href="https://647ca3f14e613a3ac56dbc70--gentle-crumble-e2c0e6.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline' }}
              >
                <u>Deployed URL</u>
              </a>
            </p>

          {/*Project 2*/}
            <h3 className="mb-2">GMAIL CLONE</h3>
            <div className="subheading mb-2">Description</div>
            <p>Developed a Gmail clone web application using React.js and
            Node.js, closely mimicking the functionality and user interface of the
            original Gmail platform. Implemented features such as composing,
            sending, receiving, and deleting emails, as well as organizing emails
            into different categories (inbox, starred, snoozed, sent, draft, and
            trash). Leveraged RESTful APIs and Axios library to communicate
            with the backend server. This project allowed me to enhance my
            front-end development skills and gain experience in working with a
            modern web framework.
            </p>
            <div>
              <b>Deployed URL:</b>
            </div>
            <p>
              Deployed URL:&nbsp;
              <a
                className="nav-link js-scroll-trigger"
                href="https://64a30da7c0029140238b5c6c--aquamarine-stroopwafel-04be78.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline' }}
              >
                <u>Live Demo</u>
              </a>
            </p>



            <ul className="list-inline dev-icons">

            </ul>
            {/* ... Rest of the skills section code ... */}
          </div>
        </section>
        <hr className="m-0" />

        {/* Interests */}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>As a web developer, I enjoy spending my free time outdoors playing cricket, football, and chess. I love the excitement of cricket matches, the teamwork in football games, and the mental challenges of chess. Combining my passion for coding and outdoor activities brings out the best in me.</p>
            <p>When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
