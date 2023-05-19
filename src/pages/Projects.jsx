import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import AnimatedText from "../components/AnimatedText";
import PageAnimation from "../components/PageAnimation";
import { useState } from "react";
import { fetchUrl } from "../assets/data";
import { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";

const FeaturedProject = ({ name, summary, image, url, github }) => {
  return (
    <StyledArticle>
      <a href={url} target="_blank" rel="noopener noreferrer" className="img">
        <img src={image} alt={name} />
      </a>
      <div className="right-section">
        <div className="title">
          <span>Featured Project</span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h2>{name}</h2>
          </a>
          <p>{summary}</p>
        </div>
        <div className="right-buttons">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit project
          </a>
        </div>
      </div>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  color: var(--primary-text);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 4rem;
  border: 1px solid var(--primary-text);
  border-bottom-width: 6px;
  border-right-width: 6px;
  border-radius: 1rem;
  .img {
    flex: 1;
    margin-right: 2rem;
    cursor: pointer;
    height: fit-content;
    display: flex;
    overflow: hidden;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: auto;
      transition: .3s;
    }
    &:hover img{
      transform: scale(1.1);
    }
  }
  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
    .title {
      span {
        font-size: 1.2rem;
        color: var(--vibrant);
      }
      h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
        margin-top: 0.25rem;
      }
      p {
        color: var(--secondary-text);
        word-spacing: 0.15rem;
        font-size: 1.05rem;
      }
    }
    .right-buttons {
      display: flex;
      align-items: center;
      svg {
        font-size: 2.3rem;
      }
      a:last-child {
        background-color: var(--primary-text);
        color: var(--primary-background);
        padding: 0.5rem 1rem;
        border-radius: 0.4rem;
        margin-left: 1rem;
      }
    }
  }
`;

const ProjectCard = ({ type, name, summary, image, url, github }) => {
  return (
    <StyledCard className="project">
      <a href={url} target="_blank" rel="noopener noreferrer" className="img">
        <img src={image} alt={name} />
      </a>
      <div className="right-section">
        <div className="title">
          <span>{type}</span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h2>{name}</h2>
          </a>
        </div>
        <div className="right-buttons">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={35} />
          </a>
          {type !== "Mobile Application" && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          )}
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  color: var(--primary-text);
  width: 100%;
  /* display: flex; */
  /* flex-wrap: wrap; */
  padding: 1.5rem;
  border: 1px solid var(--primary-text);
  border-bottom-width: 6px;
  border-right-width: 6px;
  border-radius: 1rem;
  .img {
    flex: 1;
    /* margin-right: 2rem; */
    cursor: pointer;
    display: flex;
    height: fit-content;
    overflow: hidden;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: auto;
      transition: .3s;
    }
    &:hover img{
      transform: scale(1.1);
    }
  }
  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
    .title {
      span {
        font-size: 1rem;
        color: var(--vibrant);
      }
      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        margin-top: 0.25rem;
      }
      p {
        color: var(--secondary-text);
        word-spacing: 0.15rem;
        font-size: 1.05rem;
      }
    }
    .right-buttons {
      display: flex;
      align-items: center;
      svg {
        font-size: 1rem;
      }
      a:last-child {
        margin-left: 1rem;
        text-decoration: underline;
      }
    }
  }
`;

const data = [
  {
    name: "Wavelet",
    description: "An online music streaming website built with React",
    type: "Website",
    image: "https://ik.imagekit.io/shoumik/tr:med_thumb/ss_wavelet.png",
    tags: ["web development", "ui/ux", "react", "js", "nodejs"],
    url: "https://wavelet.mixmaker.ml",
    github: "https://github.com/mixmaker/wavelet",
  },
  {
    name: "React Portfolio",
    description: "My personal portfolio showcasing my works and achievements",
    type: "Website",
    image: "https://ik.imagekit.io/shoumik/tr:med_thumb/ss_reactportfolio.png",
    tags: ["web development", "ui/ux", "react", "js", "styledcomponents"],
    url: "https://shoumik.tk",
    github: "https://github.com/mixmaker/portfolio",
  },
  {
    name: "Notable",
    description: "Note taking app built using react-native",
    type: "Mobile Application",
    image: "https://ik.imagekit.io/shoumik/tr:med_thumb/ss_notable_mobile.jpg",
    tags: ["mobile development", "react-native", "js", "ui/ux"],
    url: "",
    github: "https://github.com/mixmaker/wavelet-react-native",
  },
  {
    name: "Capture",
    description: "Portfolio website of a photo and video manipulation company",
    type: "Website",
    image: "https://ik.imagekit.io/shoumik/tr:med_thumb/ss_capture.png",
    tags: ["web development", "react", "js", "framermotion"],
    url: "https://capture.mixmaker.ml",
    github: "https://github.com/mixmaker/capture",
  },
  {
    name: "Wibe Studio",
    description: "Fashion studio website made with React",
    type: "Website",
    image: "https://ik.imagekit.io/shoumik/tr:med_thumb/ss_wibe.png",
    tags: [
      "web development",
      "react",
      "js",
      "framermotion",
      "gsap",
      "featured",
    ],
    summary:
      "A modern and stylish website showcasing the fashion studio's products. Smooth animations and scrolling effects using gsap, framer-motion and locomotive scroll. It's using React JS and styled-components",
    url: "https://wibe-studio-mixmaker.vercel.app",
    github: "https://github.com/mixmaker/wibe-studio",
  },
  {
    name: "Wavelet Mobile",
    description: "Music streaming app built using react-native",
    type: "Mobile Application",
    image: "https://ik.imagekit.io/shoumik/tr:med_thumb/ss_wavelet_mobile.jpg",
    tags: ["mobile development", "react-native", "js", "ui/ux"],
    url: "",
    github: "https://github.com/mixmaker/wavelet-react-native",
  },
  {
    name: "HTML Portfolio",
    description: "Basic portfolio landing page made with HTML, CSS, JS",
    type: "Website",
    image: "https://ik.imagekit.io/shoumik/tr:med_thumb/ss_htmlportfolio.png",
    tags: ["web development", "html", "css", "js"],
    url: "https://htmlportfolio.shoumik.cf",
    github: "https://github.com/mixmaker/html-portfolio",
  },
  {
    name: "Quote Generator",
    description:
      "A javascript based project which displays famous quotes from an API",
    type: "Website",
    image: "https://ik.imagekit.io/shoumik/tr:med_thumb/ss_quotesapp.png",
    tags: ["web development", "ui/ux", "html", "css", "js", "restapi"],
    url: "https://quotesapp.shoumik.cf",
    github: "https://github.com/mixmaker/random-quote-app",
  },
];

const Projects = ({ projects }) => {
  const featuredIndex = data.findIndex((el) =>
    el.tags.some((r) => r === "featured")
  );
  // const featured = data[data.tags.indexOf("featured")];

  return (
    <>
      <PageAnimation />
      <StyledMyWork>
        <div className="heading">
          <AnimatedText text="Imagination Trumps Knowledge! " />
        </div>
        <div className="grid">
          <div className="featured">
            <FeaturedProject {...data[featuredIndex]} />
          </div>
          {data.map((el) => (
            <ProjectCard {...el} />
          ))}
        </div>
      </StyledMyWork>
    </>
  );
};

const StyledMyWork = styled(motion.div)`
  position: relative;
  min-height: 82vh;
  padding: 2rem 4rem;
  .heading {
    display: flex;
    justify-content: center;
    color: var(--heading-text);
    margin-bottom: 4rem;
    h2 {
      font-size: 6rem;
      text-align: center;
      color: var(--primary-text);
      span {
        display: inline-block;
      }
    }
  }
  div.grid {
    display: grid;
    grid-template-columns: 12;
    row-gap: 10rem;
    column-gap: 5rem;
    width: 100%;
    .featured {
      grid-column: span 12;
    }
    .project {
      grid-column: span 4;
    }
    .pro1 {
      /* width: 100%; */
    }
    .pro2 {
      /* width: 100%; */
    }
  }
`;

export default Projects;
