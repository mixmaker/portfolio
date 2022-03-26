import React from "react";
import styled from "styled-components";
import heroImg from "../assets/hero-image.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/animation";

const Home = () => {
  const navigate = useNavigate();
  document.title = "Home | Shoumik Kumbhakar";

  return (
    <StyledHome
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="main-content">
        <div className="headlines">
          <h2>Hi there, &nbsp;</h2>
          <div className="name-line">
            <h2>
              I'm<span> Shoumik</span>
            </h2>
          </div>
        </div>
        <div className="hero-text">
          <p>
            I'm a 1st year Electronics engineering student studying at
            Ramkrishna Mahato Government Engineering College, Purulia. I like
            travelling, photo editing, playing games etc.
          </p>
        </div>
        <button onClick={() => navigate("/contact")}>
          Hire Me
          <ArrowForwardIcon sx={{ fontSize: "1.2rem" }} />
        </button>
      </div>
      <div className="img-container">
        <img src={heroImg} alt="heroimage" />
      </div>
    </StyledHome>
  );
};
const StyledHome = styled(motion.div)`
  width: 100%;
  position: relative;
  height: 82vh;
  display: flex;
  padding: 2rem 4rem;
  .main-content {
    width: 90%;
    margin: auto 0;
    padding: 0 1rem;
    h2 {
      color: var(--primary-text);
      transition: 1s;
    }
    .name-line {
      display: flex;
      span {
        font-size: 3.3rem;
        color: var(--heading-text);
        transition: 1s;
      }
    }
    .hero-text {
      p {
        line-height: 2;
        font-size: 18px;
        color: var(--secondary-text); //dark
      }
    }
    button {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0.5rem 0.5rem 0.5rem 0.75rem;
      margin-top: 2rem;
      border: 1px solid #ae94fc;
      font-family: "Montserrat", sans-serif;
      font-size: 1rem;
      overflow: hidden;
      background-color: var(--button-background);
      svg {
        transition: 0.5s;
        margin-left: 0.1rem;
      }
      &:hover {
        /* color: #fff; */
        background-color: #ccceff;
        background-color: var(--button-hover-background);
        svg {
          transform: translateX(3px);
        }
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: #ffffffa2;
        height: 100%;
        width: 50%;
        transform: translateX(-120%) skewX(-30deg);
        filter: blur(10px);
        transition: 0.3s;
      }
      &:hover::after {
        transform: translateX(300%) skewX(-30deg);
      }
    }
  }
  .img-container {
    width: 100%;
    height: max-content;
    position: relative;
    margin: auto 0;
    clip-path: polygon(18% 0, 100% 0%, 100% 99%, 0 100%);
    img {
      width: 100%;
    }
    &::after {
      //dark
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-background);
      opacity: 0.2;
      transition: 1s;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
    width: 100vw;
    /* height: 82%; */
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column-reverse;
    .main-content {
      width: 100%;
      height: 100%;
      margin: auto;
      text-align: center;
      .headlines {
        display: flex;
        justify-content: center;
        align-items: baseline;
        margin: 2rem;
        span {
          font-size: 3.3rem;
          color: var(--heading-text);
        }
      }
      p {
        font-size: 1.3rem;
      }
      button {
        margin: 1rem auto;
      }
    }
    .img-container {
      height: 40vh;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media only screen and (max-width: 425px) {
    height: 86vh;
    .main-content {
      text-align: left;
      .headlines {
        display: block;
        margin: 1rem .5rem;
      }
    }
    .hero-text {
      p {
        text-align: center;
      }
    }
  }
`;
export default Home;
