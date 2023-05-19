import React from "react";
import styled from "styled-components";

import avatar from "../assets/avataaars (1).png";
import avatar_transparent from "../assets/avataaars.png";

const Avatar = ({ customStyle, transparent }) => {
  return (
    <StyledAvatar
      transparent={transparent}
      className="avatar"
      style={customStyle}
    >
      <img src={transparent ? avatar_transparent : avatar} alt="avatar" />
    </StyledAvatar>
  );
};

const StyledAvatar = styled.div`
  /* width: 40%; */
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.transparent ? "1px solid #fff" : "none")};
  outline: ${(props) => (props.transparent ? "1px solid #000" : "none")};
  /* margin: 0 auto;
  margin-bottom: 1.5rem; */
  img {
    width: 100%;
  }
`;
export default Avatar;
