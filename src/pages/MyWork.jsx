import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchUrl } from "../assets/data";
import { pageAnimation } from "../components/animation";
import Card from "../components/Card";

const CategoryButtons = ({ categoryActive, setCategoryActive }) => {
  return (
    <StyledCategoryButtons>
      <button
        className={categoryActive === "all" ? "buttonActive" : ""}
        onClick={() => setCategoryActive("all")}
      >
        All
      </button>
      <button
        className={categoryActive === "web development" ? "buttonActive" : ""}
        onClick={() => setCategoryActive("web development")}
      >
        Web Development
      </button>
      <button
        className={
          categoryActive === "mobile development" ? "buttonActive" : ""
        }
        onClick={() => setCategoryActive("mobile development")}
      >
        Mobile Development
      </button>
      <button
        className={categoryActive === "ui/ux" ? "buttonActive" : ""}
        onClick={() => setCategoryActive("ui/ux")}
      >
        UI/UX Design
      </button>
    </StyledCategoryButtons>
  );
};

const MyWork = () => {
  document.title = "My Works | Shoumik Kumbhakar";
  const [projects, setProjects] = useState();
  const [filtered, setFiltered] = useState();
  const [categoryActive, setCategoryActive] = useState("all");

  useEffect(() => {
    const setData = async () => {
      const res = await fetchUrl();
      const parsedData = await res.json();
      setProjects(parsedData);
      setFiltered(parsedData);
    };
    setData();
  }, []);

  useEffect(() => {
    if (categoryActive === "all") {
      setFiltered(projects);
      return;
    }
    const filteredData = projects.filter((elem) =>
      elem.tags.includes(categoryActive)
    );
    setFiltered(filteredData);
  }, [categoryActive]);

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
      <CategoryButtons
        categoryActive={categoryActive}
        setCategoryActive={setCategoryActive}
      />
      <motion.div
        layout
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="card-container"
      >
        <AnimatePresence>
          {filtered &&
            filtered.map((element) => (
              <Card element={element} key={element.name} />
            ))}
        </AnimatePresence>
      </motion.div>
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
    margin-bottom: 3rem;
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
    margin-top: .5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 2rem;
  }
  @media only screen and (max-width: 425px) {
    padding: 2rem;
  }
`;

const StyledCategoryButtons = styled.div`
  button {
    background-color: var(--button-background);
    padding: 0.5rem 1rem;
    margin: 0 0.75rem;
  }
  button.buttonActive {
    background-color: var(--button-hover-background);
  }
`;
export default MyWork;
