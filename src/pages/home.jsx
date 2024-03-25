// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/home.css";

// IMPORT IMAGES
import akImage from '../assets/images/samsher.jpg';

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
import EmailIcon from "../assets/icons/email";
// import InstagramIcon from "../assets/icons/instagram";

const Home = () => {
  return (
    <div className="home-container">
      <img 
        src={akImage} 
        className="home-img"
        alt=""
      ></img>

      <div className="home-intro">
        <p className="home-university">Hello World!</p>
        <p className="home-name">I am Samsher Gadkary </p>
        <p className="home-university">Master's in Computer Science Student at Binghamton University
        {/* <br></br> Ex-SDE 3 @ Walmart 
        <br></br> Gold medalist, BIT Mesra '20 */}
        </p>
        <p className="home-address">Binghamton, New York, USA</p>
      </div>

      <div className="home-icons-wrapper">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/samsher-gadkary-72a951115/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="home-icons linkedin"/>
            </a>
          </li>

          <li>
            <a 
              href="https://github.com/sgadkar2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GithubIcon className="home-icons github"/>
            </a>
          </li>

          {/* <li>
            <a 
              href="https://www.instagram.com/aakriti.kedia/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <InstagramIcon className="home-icons instagram"/>
            </a>
          </li> */}

          <li>
            <a 
              href="mailto:sgadkar2@binghamton.edu" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <EmailIcon className="home-icons email"/>
            </a>
          </li>
        </ul>
      </div>

      <div className="download-section">
        <a                 
          href="/github-portfolio/Resume.pdf"
          className="resume-download"
        >
          Download CV
        </a>
      </div> 
    </div>
  );
}

export default Home;