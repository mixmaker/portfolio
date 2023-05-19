import React from "react";
import styled from "styled-components";
// import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Card = ({ element }) => {
  return (
    <StyledCard
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href={element.url} target="_blank" rel="noreferrer">
        <div className="card-img">
          <img src={element.image} alt="coverImg" />
        </div>
        <div className="card-details">
          <div className="card-header">
            <h2>{element.name}</h2>
            <a href={element.github} target="_blank" rel="noreferrer">
              {/* <GitHubIcon sx={{ fontSize: "1.2rem", color: "#fff" }} /> */}
            </a>
          </div>
          <p>&nbsp; {element.description}</p>
        </div>
      </a>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 250px;
  border-radius: 10px;
  margin: 2rem;
  overflow: hidden;
  background-color: var(--secondary-background);
  box-shadow: 27px 27px 57px -37px var(--box-shadow);
  transition: background-color 1s, box-shadow 1s;

  .card-img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  .card-details {
    position: absolute;
    opacity: 0;
    transition: 0.5s;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    background-color: #000000e1;
    p {
      color: var(--secondary-text);
      scale: 0;
      transform-origin: bottom;
      transition-duration: 0.5s;
      transition-delay: 0.1s;
      text-align: center;
      margin-top: 0.75em;
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-around;
      h2 {
        color: var(--primary-text);
        transition-duration: 0.5s;
        transition-delay: 0.1s;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5em;
        border-radius: 7px;
        transition-duration: 0.5s;
        transition-delay: 0.1s;
        &:hover {
          background-color: #3b3939;
        }
      }
    }
    .buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 1rem;
      a {
        text-decoration: none;
        margin: auto 0;
        button {
          color: var(--primary-text);
          font-size: 0.9rem;
          margin: 0.5rem;
          padding: 0.25rem 0.5rem;
          background-color: transparent;
          border: 1px solid grey;
          font-family: "Montserrat", sans-serif;
          display: flex;
          align-items: center;
          &:hover {
            background-color: var(--button-hover-background);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    width: 280px;
    height: max-content; //340px
    .card-details {
      -webkit-line-clamp: 2;
      h2 {
        font-size: 1.2rem;
        margin-bottom: 0.25rem;
      }
      p {
        font-size: 0.9rem;
      }
      .buttons {
        margin-top: 0.5rem;
        a {
          margin: auto 0;
          button {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0.75rem;
  }
  &:hover .card-img {
    scale: 1.15;
  }
  &:hover .card-details {
    opacity: 1;
    h2 {
      translate: 10px;
    }
    a {
      translate: -10px;
    }
    p {
      scale: 1;
    }
  }
`;
export default Card;
