import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fish from "../assets/Angler Fish 4.png";

const PageNotFound = () => {
  const navigate404 = useNavigate();
  return (
    <StyledPageNotFound>
      <div className="text-container">
        <h1>There's no light down here...</h1>
        <h3>It seems you went too deep.</h3>
        <button onClick={() => navigate404("/")}>Turn Back</button>
      </div>
      <div className="img-container">
        <img src={fish} alt="fish" />
      </div>
    </StyledPageNotFound>
  );
};

const StyledPageNotFound = styled.div`
  height: 82vh;
  .text-container {
    padding: 5rem;
    position: relative;
    color: #fff;
    width: 50%;
    h1 {
      font-size: 3rem;
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
      /* border: 1px solid #fff; */
      background: #671232;
      &:hover {
        background: #951743;
      }
    }
  }
  .img-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
    img {
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
