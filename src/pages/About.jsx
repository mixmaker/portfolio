import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { pageAnimation } from "../components/animation";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineItems } from "../assets/data";

const About = () => {
  document.title = "About | Shoumik Kumbhakar";

  return (
    <StyledAbout
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="heading">
        <h1>About Me</h1>
        <div className="line"></div>
      </div>
      <div className="education-details">
        <h2>My Educational Journey</h2>
        <div className="timeline-wrapper">
          <VerticalTimeline lineColor="#fddffd">
            {timelineItems.map((item) => (
              <VerticalTimelineElement
                date={item.date}
                contentStyle={{
                  boxShadow: "25px 25px 50px -20px var(--box-shadow)",
                  transition: "1s",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--secondary-background)",
                  transition: "1s",
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.cardTitle}
                </h3>
                <p>{item.cardDetailedText}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className="tech-exp">
        <h2>Techs I'm familiar with</h2>
        <div className="techicons-wrapper">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            alt="html5"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt="css3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            alt="express"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="react"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
            alt="nodejs"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="figma"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            alt="cpp"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            alt="python"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="vscode"
          />
        </div>
      </div>
    </StyledAbout>
  );
};
const StyledAbout = styled(motion.div)`
  position: relative;
  min-height: 82vh;
  width: 100%;
  padding: 2rem 4rem;
  .heading {
    display: flex;
    align-items: flex-end;
    color: var(--heading-text);
    .line {
      height: 3px;
      width: 20%;
      margin: 0.5rem;
      background: #12c2e9; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to left,
        #ffb9be,
        #e0a2ff,
        #3ec9e9
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to left,
        #ffb9be,
        #e0a2ff,
        #3ec9e9
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  }
  .education-details {
    margin: 4rem 1rem 6rem 1rem;
    transition: 1s;
    color: var(--primary-text);
    .timeline-wrapper {
      margin: 1rem auto;
      width: 70%;
    }
  }
  .tech-exp {
    margin: 2rem;
    transition: 1s;
    color: var(--primary-text);
    .techicons-wrapper {
      margin-top: 2rem;
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      img {
        width: 60px;
        margin: 1rem;
      }
    }
  }
  .vertical-timeline-element-content {
    color: var(--secondary-text);
    background: var(--secondary-background);
  }
  .vertical-timeline-element-icon {
    @media only screen and (min-width: 1170px) {
      transform: scale(0.15);
    }
    transform: scale(0.25);
    background: var(--icon-color);
    -webkit-animation: none !important;
    animation: none !important;
  }

  @media only screen and (min-width: 425px) and (max-width: 768px) {
    .tech-exp {
      .techicons-wrapper {
        img {
          width: 40px;
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    padding: 2rem 0;
    .heading {
      padding-left: 1.5rem;
    }
    .education-details {
      margin: 0;
      margin: 1.5rem 1rem;
      h2 {
        font-size: 1.2rem;
        padding-left: 1rem;
      }
      .timeline-wrapper {
        width: 100%;
      }
    }
    .tech-exp {
      margin: 2.5rem 0 0 2rem;
      .techicons-wrapper {
        margin: 0;
        img {
          margin: 1rem 0.25rem;
        }
      }
    }
  }
`;
export default About;
