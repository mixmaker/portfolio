import React from "react";
import styled from "styled-components";
import i404 from "../assets/404.jpg";
import PageAnimation from "../components/PageAnimation";

const PageNotFound = () => {
  return (
    <>
      <PageAnimation />
      <StyledPageNotFound>
        <div className="text-container">
          <h1>404 not found...</h1>
        </div>
        <div className="img-container">
          <img src={i404} alt="fish" />
        </div>
      </StyledPageNotFound>
    </>
  );
};

const StyledPageNotFound = styled.div`
  height: 82vh;
  display: flex;
  align-items: center;
  .text-container {
    padding: 5rem;
    position: relative;
    color: #fff;
    width: 50%;
    opacity: 75%;
    h1 {
      font-size: 3.5rem;
    }
    h3 {
      margin: 1rem;
      font-size: 1.7rem;
      font-weight: 400;
    }
    button {
      color: #fff;
      padding: 0.5rem 1rem;
      margin: 1.5rem 1rem;
      font-size: 1rem;
      /* border: 1px solid #fff; */
      background: #671232;
      &:hover {
        background: #951743;
      }
    }
  }
  .img-container {
    background: radial-gradient(#5aa5ab, #1a445c, #052035);
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .img-container {
      height: 100%;
      img {
        object-fit: cover;
        height: 100%;
      }
    }
  }
`;

export default PageNotFound;
