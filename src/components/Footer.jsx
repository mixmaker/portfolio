import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avatar } from "./";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-left">
        <Avatar
          customStyle={{
            width: "40px",
            marginRight: ".5rem",
            border: ".2px solid #fff !important",
          }}
        />
        <div className="footer-left-text">
          <div className="footer-name">Shoumik Kumbhakar</div>
          <div className="footer-copyright">Copyright © 2022 shoumik.tk</div>
        </div>
      </div>
      <div className="footer-right">
        <a
          href="https://facebook.com/shoumik.kumbhakar"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com/shoumik.kumbhakar"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/shoumik-kumbhakar-06a195225"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 8vh;
  padding: 0 3rem;
  .footer-left {
    display: flex;
    align-items: center;
    .footer-left-text {
      display: flex;
      align-items: center;
      .footer-name {
        margin-right: 1rem;
        font-size: 1.2rem;
        color: var(--primary-text); //dark
      }
      .footer-copyright {
        border-left: 2px solid #afafaf;
        padding-left: 1rem;
        /* color: #797097;
        color: #b7b0cf; */
        color: var(--secondary-text);
      }
    }
  }
  .footer-right {
    width: 10%;
    display: flex;
    justify-content: space-evenly;
    a {
      display: flex;
      align-items: center;
      svg {
        color: var(--icon-color);
        transition: 0.5s;
        &:hover {
          color: var(--icon-hover);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .footer-left {
      .footer-left-text {
        flex-direction: column;
        .footer-name {
          font-size: 0.9rem;
        }
        .footer-copyright {
          border: none;
          padding-left: 0;
          font-size: 75%;
        }
      }
    }
    .footer-right {
      width: 30%;
    }
  }
  @media only screen and (max-width: 425px) {
    padding: 0 1rem;
  }
`;
export default Footer;
