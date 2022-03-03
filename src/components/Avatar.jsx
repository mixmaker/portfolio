import React from "react";
import styled from "styled-components";

import avatar from "../assets/avatar_sk.jpeg";

const Avatar = ({customStyle}) => {
  return (
    <StyledAvatar className="avatar" style={customStyle}>
      <img src={avatar} alt="avatar" />
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
  border: 1px solid #fff;
  outline: 1px solid #000;
  /* margin: 0 auto;
  margin-bottom: 1.5rem; */
  img {
    width: 100%;
  }
`;
export default Avatar;
