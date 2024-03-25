// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
        <div className="download-section">
            <a                 
            href="/github-portfolio/Resume.pdf"
            className="resume-download"
            >
            Download CV
            </a>
        </div> 

      <div className="timeline-section resume-experience">
        <div className="heading-section">
          <div className="heading">EXPERIENCE</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <li className="resume-item active">
              <div className="title">
                <a
                  href="https://www.linkedin.com/company/jioplatforms/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Jio Platforms Limited, India
                </a>
              </div>

              <div className="sub-title">
              Software Development Engineer
              </div>

              <div className="sub-sub-title">July 2020 - July 2022</div>

              <div className="content">
                <p> ● Engineered and developed REST APIs in Java and Spring Boot within a microservices framework, aligning with business needs </p>
                <p> ●	Reduced production bugs by 60% by implementing JUnit test cases and contract-based tests, ensuring robust code quality.</p>
                <p> ●	Spearheaded the creation of build and release pipelines on Microsoft Azure, automating microservices' build and deployment processes, eliminating manual efforts and expediting feature deployment.</p>
                <p> ●	Successfully executed the migration from monolithic to microservices architecture, accelerating releases and enhanced scalability.</p>
                <p> ●	Implemented server-level automation scripts using shell scripts for efficient deployment of JAR files</p>
                <p> ●	Utilized Java, Spring Boot, Microservices, REST API, SOAP API, Git, Microsoft Azure, SQL, and Oracle DB tech stack.</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.linkedin.com/company/jioplatforms/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Jio Platforms Limited, India
                </a>
              </div>

              <div className="sub-title">
              Java Developer
              </div>

              <div className="sub-sub-title">July 2019 - July 2020</div>

              <div className="content">
                <p> ●	Spearheaded a 4-member team, to develop and implement the O2A (Order to Activate) journey for Jio business bundled product. </p>
                <p> ●	Created user-friendly interface using Angular Framework for small medium businesses offering customer plan options.</p>
                <p> ●	Implemented customer data validation to ensure accurate and reliable information during the purchase process. </p>
                <p> ●	Automated invoice generation with diverse templates, providing customers with easy access to downloadable invoices.</p>
                <p> ●	Introduced a notification system to update customers on successful order placement, offering activation links in alignment with Microservice Architecture.</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.linkedin.com/company/jioplatforms/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Jio Platforms Limited, India
                </a>
              </div>

              <div className="sub-title">
              Software Engineer Trainee
              </div>

              <div className="sub-sub-title">July 2018 - July 2019</div>

              <div className="content">
                <p> ●	Developed and implemented a user-friendly payment system for customers to conveniently pay bills. </p>
                <p> ●	Developed features for accessing statement history, payment history, and unpaid invoices, enhancing financial management. </p>
                <p> ●	Enabled download statement history and payment records in CSV format, easing data access and analysis with date filters </p>
                <p> ●	Integrated various payment gateways, like Paytm, to facilitate secure and seamless transactions for customers. </p>
                <p> ●	Leveraged Java, Spring Boot, Microservice Architecture, Angular, Oracle, JPA, HTML, and CSS to construct an efficient system.</p>
              </div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="timeline-section resume-education">
        <div className="heading-section">
          <div className="heading">EDUCATION</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.binghamton.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Binghamton University, New York, USA
                </a>
              </div>

              <div className="sub-title">Master of Science,{" "}
                <a
                  href="https://www.binghamton.edu/computer-science/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Computer Science
                </a>
              </div>

              <div className="sub-sub-title">August 2022 - May 2024</div>
              <div className="content">
                <p><b>CGPA</b>: 3.84/4.0</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://mu.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Mumbai University, India
                </a>
              </div>

              <div className="sub-title">Bachelor of Engineering,{" "}
                <a
                  href="https://mu.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Computer Engineering
                </a>
              </div>

              <div className="sub-sub-title">July 2014 - May 2018</div>
              <div className="content">
              </div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;