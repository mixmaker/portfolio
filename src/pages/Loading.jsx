import React from "react";
import styled from "styled-components";
import { Sugar } from "react-preloaders2";
import { motion } from "framer-motion";

const Loading = () => {
  const bgColor = getComputedStyle(document.body).getPropertyValue(
    "--primary-text"
  );
  return (
    <StyledLoading
      initial={{ y: 0, opacity: 1 }}
      // animate={{ y: "60%", opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ y: 0, opacity: 0 }}
    >
      <Sugar background="transparent" color={bgColor} />
      <div className="footer">
        Made with <span>&hearts;</span> by Shoumik
      </div>
    </StyledLoading>
  );
};

const StyledLoading = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-text);
  z-index: 6;
  .footer {
    font-size: 1.4rem;
    position: absolute;
    bottom: 10%;
    padding-left: 1rem;
    /* color: #797097;
        color: #b7b0cf; */
    color: var(--secondary-text);
    span {
      color: red;
    }
  }
`;
export default Loading;
