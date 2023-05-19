import React from "react";
import styled from "styled-components";
import heroImg from "../assets/hero-image.png";
import { BiLinkExternal } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import resume from "../assets/dummy.pdf";
import PageAnimation from "../components/PageAnimation";

const Home = () => {
  const navigate = useNavigate();
  document.title = "Home | Shoumik Kumbhakar";

  return (
    <>
      <PageAnimation />
      <StyledHome>
        <div className="main-content">
          <div className="headlines">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." />
          </div>
          <div className="hero-text">
            <p>
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
          </div>
          <div className="buttons">
            <a className="resume" href={resume} download="resume">
              Resume
              <BiLinkExternal style={{ marginLeft: ".15em" }} />
            </a>
            <button
              className="contact"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="img-container bg">
          <img src={heroImg} alt="heroimage" />
        </div>
      </StyledHome>
    </>
  );
};
const StyledHome = styled(motion.div)`
  width: 100%;
  position: relative;
  height: 80vh;
  display: flex;
  padding: 2rem 4rem;
  .main-content {
    width: 90%;
    margin: auto 0;
    padding: 0 1rem;
    h2 {
      color: var(--primary-text);
      transition: 1s;
      overflow: hidden;
      span {
        display: inline-block;
      }
    }
    .headlines {
      font-size: 2.5em;
      font-weight: 700;
    }
    .hero-text {
      p {
        line-height: 2;
        font-size: 18px;
        color: var(--secondary-text); //dark
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      margin-top: 2rem;
    }
    a.resume {
      text-decoration: none;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-family: "Montserrat", sans-serif;
      font-size: 1rem;
      overflow: hidden;
      transition: 0.3s;
      color: var(--primary-text);
      box-shadow: 0px 8px 15px var(--box-shadow);
      svg {
        transition: transform 0.3s;
        margin-left: 0.1rem;
      }
      &:hover {
        color: #3b3066;
        background-color: #2ee59d;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        transform: translateY(-3px);
        svg {
          transform: translateX(3px);
        }
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: #2ee59cda;
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
    button.contact {
      color: var(--primary-text);
      margin-left: 1rem;
      text-decoration: underline;
      font-size: 1rem;
      font-family: "Montserrat", sans-serif;
    }
  }
  .img-container {
    width: 100%;
    height: 80vh;
    position: relative;
    margin: auto 0;
    img {
      /* width: 100%; */
      height: 100%;
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
        margin: 1rem 0.5rem;
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
