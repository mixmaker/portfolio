import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
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
      <div className="card-img">
        <img src={element.image} alt="coverImg"/>
      </div>
      <div className="card-details">
        <h2>{element.name}</h2>
        <p>&nbsp; {element.description}</p>
        <div className="buttons">
          <a href={element.url} target="_blank" rel="noreferrer">
            <button>Live demo</button>
          </a>
          <a href={element.github} target="_blank" rel="noreferrer">
            <button>
              <GitHubIcon sx={{ fontSize: ".8rem", marginRight: ".2rem" }} />
              Github
            </button>
          </a>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  width: 350px;
  border-radius: 10px;
  margin: 2rem;
  overflow: hidden;
  background-color: var(--secondary-background);
  box-shadow: 27px 27px 57px -37px var(--box-shadow);
  transition: background-color 1s, box-shadow 1s;

  .card-img {
    width: 100%;
    img {
      width: 350px;
    }
  }
  .card-details {
    padding: 1rem;
    h2 {
      margin-bottom: 0.5rem;
      color: var(--primary-text);
    }
    p {
      color: var(--secondary-text);
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
`;
export default Card;
