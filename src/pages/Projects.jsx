import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import AnimatedText from "../components/AnimatedText";
import PageAnimation from "../components/PageAnimation";
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
      transition: 0.3s;
    }
    &:hover img {
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
      transition: 0.3s;
    }
    &:hover img {
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

const Projects = ({ projects }) => {
  const featuredIndex = projects?.findIndex((el) =>
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
          {featuredIndex > -1 && (
            <div className="featured">
              <FeaturedProject {...projects[featuredIndex]} />
            </div>
          )}
          {projects?.map((el) => (
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
