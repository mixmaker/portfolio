import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

const LinkTab = ({ name, link, waveColor, i, locate }) => {
  return (
    <motion.li
      initial={{ y: "2%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: i * 0.2 }}
    >
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? "navActive" : "")}
      >
        {name}
        <span className={locate.pathname === link ? "active" : ""}></span>
      </NavLink>
      <Outlet />
    </motion.li>
  );
};

const Navbar = ({ themeMode, setThemeMode, navStyle }) => {
  const links = [
    { name: "Home", link: "/", waveColor: "#5c80bc" },
    { name: "About", link: "/about", waveColor: "#f14964" },
    { name: "Projects", link: "/projects", waveColor: "#1ac0a2" },
    { name: "Contact Me", link: "/contact", waveColor: "" },
  ];

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
  const locate = useLocation();

  return (
    <StyledNavbar
      id="navbar"
      initial={{ opacity: 0, y: "8%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1, staggerChildren: 1 }}
    >
      <motion.div className="nav-left">
        <Logo />
        <BiMenuAltRight
          className="navToggle"
          style={{ fontSize: "1.2em" }}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </motion.div>
      <motion.div
        className="nav-right"
        style={isExpanded ? {} : { opacity: "0", display: "none" }}
      >
        <ul>
          {links.map((li, i) => (
            <LinkTab {...li} key={li.name} i={i} locate={locate} />
          ))}
          <motion.li
            initial={{ y: "2%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <input
              type="checkbox"
              className="toggle"
              onClick={() => {
                themeMode === "light"
                  ? setThemeMode("dark")
                  : setThemeMode("light");
              }}
            />
          </motion.li>
        </ul>
      </motion.div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(motion.div)`
  //general
  position: relative;
  top: 0;
  left: 0;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  /* border-bottom: 0.5px solid var(--secondary-text); */
  /* background: var(--nav-background); */
  color: var(--primary-text);
  z-index: 5;
  transition: background-color 1s, color 1s;
  .nav-left {
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
        position: relative;
        &:hover span {
          width: 100%;
        }
        span {
          position: absolute;
          display: flex;
          height: 1px;
          /* bottom: -2px; */
          width: 0%;
          background-color: var(--primary-text);
          transition: width;
          transition-duration: 300ms;
        }
        span.active {
          width: 100%;
        }
        a {
          font-weight: 400;
          text-decoration: none;
          /* color: #423c5a; */
          color: var(--nav-text);
          transition: color 1s;
        }
        a.navActive {
          color: var(--nav-text-active);
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
