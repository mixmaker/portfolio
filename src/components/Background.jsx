import React from "react";
import halfCircle from "../assets/half-circle.svg";
import square from "../assets/square.svg";
import triangle from "../assets/triangle.svg";
import wave from "../assets/wave.svg";
import x from "../assets/x.svg";
import points1 from "../assets/points1.svg";
import points2 from "../assets/points2.svg";
import styled from "styled-components";

const Background = () => {
  return (
    <StyledBackground className="bg">
      <StyledHalfcircle src={halfCircle} alt="halfCircle" />
      <StyledSquare src={square} alt="square" />
      <StyledX src={x} alt="x" />
      <StyledTriangle src={triangle} alt="triangle" />
      <StyledWave src={wave} alt="wave" />
      <StyledX2 src={x} alt="x" />
      <StyledPoints1 src={points1} alt="points1" />
      <StyledPoints2 src={points2} alt="points2" />
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  transition: 1s;
`;
const StyledHalfcircle = styled.img`
  position: absolute;
  color: #7248FF;
  top: 10%;
  right: 55%;
  width: 30px;
`;
const StyledTriangle = styled.img`
  position: absolute;
  right: 6%;
  width: 40px;
  top: 50%;
`;
const StyledSquare = styled.img`
  position: absolute;
  top: 20%;
  width: 40px;
  right: 10%;
`;
const StyledWave = styled.img`
  position: absolute;
  top: 42%;
  left: 30%;
  width: 80px;
`;
const StyledX = styled.img`
  position: absolute;
  bottom: 11%;
  right: 45%;
  width: 30px;
  @media only screen and (max-width: 768px) {
    width: 20px;
  }
`;
const StyledX2 = styled.img`
  position: absolute;
  top: 20%;
  left: 15%;
  width: 30px;
`;
const StyledPoints1 = styled.img`
  position: absolute;
  bottom: -5%;
  left: -4%;
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 100px;
    bottom: 0;
    left: 0;
  }
`;
const StyledPoints2 = styled.img`
  position: absolute;
  right: 0;
  bottom: -7%;
  width: 350px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default Background;
