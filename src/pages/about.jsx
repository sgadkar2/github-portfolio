import React from "react";

import "../styles/about.css";

//import LinkedInRecos from './linkedinrecos';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <p className="about-details">
        I am a passionate Software Engineer with 4+ years of experience currently pursuing Master's in Computer Science degree at Binghamton University. I am about to graduate in May 2024, with a keen interest in Distributed Systems and Cloud Computing.
        </p>
        <p className="about-details">
        Throughout my professional journey, I had the privilege of working at Jio Platforms Limited, a prominent company in India, from 2018 to 2022. During my time there, I majorly worked with Java, Spring Boot, Microservices, REST APIs, SQL, and Azure CI/CD. I played a pivotal role in developing scalable, reliable, and maintainable systems and migrating from existing monolithic architecture to microservice architecture. Additionally, I was honored to receive the Spotlight award for technical ownership and a positive learning attitude. This recognition underscores my dedication and contribution to my team and organization.
        </p>
        <p className="about-details">
        My educational journey began at the prestigious Mumbai University in India, where I earned my Bachelor of Engineering degree in Computer Engineering. I am currently pursuing Masters at the renowned Binghamton University, focusing on Distributed Systems, and Machine Learning. I about to graduate with a Master of Science degree in Computer Science in May 2024. My interest areas include Distributed Systems, Cloud Computing, Networking, Security, Artificial Intelligence, Machine Learning and more.
        </p>
        <p className="about-details">
        I look forward to giving back to the community in any way possible. I am happy to mentor as well as learn from others.
        </p>
        <p className="about-details">
        Besides my ability to drive innovation and collaborate, I enjoy listening to music and reading books. I am always excited to meet new people and make friends. Feel free to drop me a note on LinkedIn, and let's arrange a coffee chat!
        </p>
      </div>
      {/*<div className="linkedin-recos">
      <LinkedInRecos/>
  </div>*/}
    </div>
  );
}

export default About;