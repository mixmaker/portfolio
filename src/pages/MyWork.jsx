import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchUrl } from "../assets/data";
import { pageAnimation } from "../components/animation";
import Card from "../components/Card";

const MyWork = () => {
  document.title = "My Works | Shoumik Kumbhakar";
  const [projects, setProjects] = useState();

  useEffect(() => {
    const setData = async () => {
      const res = await fetchUrl();
      const parsedData = await res.json();
      setProjects(parsedData);
    };
    setData();
  }, []);

  return (
    <StyledMyWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="heading">
        <h1>My Works</h1>
        <div className="line"></div>
      </div>
      <div className="card-container">
        {projects &&
          projects.map((element) => (
            <Card element={element} key={element.name} />
          ))}
      </div>
    </StyledMyWork>
  );
};

const StyledMyWork = styled(motion.div)`
  position: relative;
  min-height: 82vh;
  padding: 2rem 4rem;
  .heading {
    display: flex;
    align-items: flex-end;
    margin-bottom: 2rem;
    h1 {
      color: var(--heading-text);
    }
    .line {
      height: 3px;
      width: 20%;
      margin: 0.5rem;
      background: #12c2e9; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to left,
        #ffb9be,
        #e0a2ff,
        #3ec9e9
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to left,
        #ffb9be,
        #e0a2ff,
        #3ec9e9
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media only screen and (max-width: 425px) {
    padding: 2rem;
  }
`;
export default MyWork;
