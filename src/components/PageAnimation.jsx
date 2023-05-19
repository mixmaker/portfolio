import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const PageAnimation = () => {
  return (
    <>
      <Div1
        initial={{
          x: "0%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        exit={{
          x: ["0%", "0%"],
          width: ["0%", "100%"],
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <Div2
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
      />
      <Div3
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      />
    </>
  );
};

const Div1 = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 100%;
  width: 100vw;
  height: 100vh;
  z-index: 7;
  background-color: #fff;
`;

const Div2 = styled(motion.div)`
  position: fixed;
  top: 0;
  left: -20%;
  right: 100%;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  background-color: #44439c;
`;

const Div3 = styled(motion.div)`
  position: fixed;
  top: 0;
  left: -20%;
  right: 100%;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: #a148f4;
`;
export default PageAnimation;
