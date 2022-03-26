import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ setProgress, themeMode, setThemeMode, navStyle }) => {
  const pageLoadHandler = () => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 50);
  };
  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    ) > 768
      ? true
      : false;
  }

  const [isExpanded, setIsExpanded] = useState(getWidth);
  const navigate2home = useNavigate();
  return (
    <StyledNavbar>
      <div className="nav-left">
        <h1 onClick={() => navigate2home("/")}>Shoumik Kumbhakar</h1>
        <button
          className="navToggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className="nav-right"
        style={isExpanded ? {} : { opacity: "0", display: "none" }}
      >
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "navActive" : "")}
              onClick={pageLoadHandler}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "navActive" : "")}
              onClick={pageLoadHandler}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/works"}
              className={({ isActive }) => (isActive ? "navActive" : "")}
              onClick={pageLoadHandler}
            >
              My Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "navActive" : "")}
              onClick={pageLoadHandler}
            >
              Contact Me
            </NavLink>
          </li>
          <li>
            <input
              type="checkbox"
              className="toggle"
              onClick={() => {
                themeMode === "light"
                  ? setThemeMode("dark")
                  : setThemeMode("light");
              }}
            />
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  //general
  position: sticky;
  top: 0;
  left: 0;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  border-bottom: 0.5px solid var(--secondary-text);
  background: var(--nav-background);
  color: var(--primary-text);
  z-index: 5;
  transition: 1s;
  .nav-left {
    h1 {
      font-size: 1.6rem;
      font-family: "Comfortaa", cursive;
      font-weight: 400;
    }
    .navToggle {
      display: none;
    }
  }
  .nav-right {
    width: 40%;
    transition: 0.5s;
    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      list-style: none;
      li {
        margin-right: 0.4rem;
        a {
          font-weight: 400;
          text-decoration: none;
          /* color: #423c5a; */
          color: var(--secondary-text);
          transition: color 1s;
        }
        a.navActive {
          color: #d6d6d6;
        }
      }
    }

    //light-dark toggle from https://codepen.io/arpadev13/pen/ExbPVdZ
    .toggle {
      --size: 1.5rem;
      appearance: none;
      outline: none;
      cursor: pointer;
      width: var(--size);
      height: var(--size);
      box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
      border-radius: 999px;
      color: #e6e6ff;
      transition: all 500ms;
    }
    .toggle:checked {
      --ray-size: calc(var(--size) * -0.4);
      --offset-orthogonal: calc(var(--size) * 0.65);
      --offset-diagonal: calc(var(--size) * 0.45);
      transform: scale(0.75);
      color: #fa0;
      box-shadow: inset 0 0 0 var(--size),
        calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
        var(--offset-orthogonal) 0 0 var(--ray-size),
        0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
        0 var(--offset-orthogonal) 0 var(--ray-size),
        calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
          var(--ray-size),
        var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
        calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0
          var(--ray-size),
        var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0
          var(--ray-size);
    }
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    height: max-content;
    .nav-left {
      display: flex;
      .navToggle {
        display: flex;
        svg {
          color: var(--primary-text);
          transition: 1s;
        }
      }
      /* position: relative; */
      svg {
        color: #fff;
        position: absolute;
        right: 0;
        top: 0;
        margin: 0.75rem 2rem;
      }
    }
    .nav-right {
      /* display: none; */
      width: 100%;
      padding-top: 1rem;
      ul {
        flex-direction: column;
        li {
          margin-top: 0.25rem;
        }
      }
    }
  }
`;
export default Navbar;
