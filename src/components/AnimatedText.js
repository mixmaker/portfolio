import React from "react";
import { motion } from "framer-motion";

const line = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const wordVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({ text }) => {
  return (
    <motion.h2 variants={line} initial="initial" animate="animate">
      {text.split(" ").map((word) => (
        <motion.span key={word} variants={wordVariant} style={{ transition: "0.5s" }}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedText;
