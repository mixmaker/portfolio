import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { pageAnimation } from "../components/animation";
import Avatar from "../components/Avatar";

const Contact = () => {
  document.title = "Contact | Shoumik Kumbhakar";
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="contact-wrapper">
        <div className="contact-text">
          <h1>Want to chat?</h1>
          <Avatar
            customStyle={{
              width: "40%",
              margin: "0 auto",
              marginBottom: "1.5rem",
            }}
          />
          <h2>Feel free to send a messege!</h2>
          <p>
            Feel free to ask anything. If you have any suggestions, please let
            me know. Your suggestions are highly appreciated. I appreciate your
            time and I try hard to reply to every single message posted here!
            Keep dropping your priceless opinions.
          </p>
        </div>
        <div className="contact-form">
          <form action="">
            <div className="form-name form-item">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-email form-item">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-phone form-item">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" minLength={10} />
            </div>
            <div className="form-messege form-item">
              <label htmlFor="messege">Your Messege</label>
              <input type="text" name="messege" required />
            </div>
            <input type="submit" value="Send Messege" />
          </form>
        </div>
      </div>
    </StyledContact>
  );
};
const StyledContact = styled(motion.div)`
  position: relative;
  min-height: 82vh;
  padding: 2rem 4rem;
  .contact-wrapper {
    display: flex;
    margin: 1rem auto;
    padding: 1rem 3rem;
    width: 80%;
    height: 100%;
    transition: 1s;
    /* background-color: #f3f4f6; */
    background-color: var(--secondary-background);
    border-radius: 10px;
    /* box-shadow: 27px 27px 57px -37px #b9bbf8; */
    box-shadow: 27px 27px 57px -37px var(--box-shadow);
    .contact-text {
      width: 50%;
      margin: 3rem 0;
      h1,
      h2,
      p {
        margin-bottom: 1rem;
      }
      h1 {
        /* color: #3b2f6e; */
        color: var(--heading-text);
      }
      h2 {
        /* color: #3b3066; */
        color: var(--primary-text);
      }
      p {
        /* color: #5d5679; */
        color: var(--secondary-text);
      }
    }
    .contact-form {
      width: 50%;
      padding: 4rem 3rem;
      .form-item {
        margin-bottom: 2rem;
        label {
          font-size: 1.2rem;
          color: var(--primary-text);
        }
      }
      input[type="text"],
      input[type="email"] {
        outline: none;
        border: none;
        border-radius: 10px;
        background: #ece9f7;
        width: 100%;
        font-size: 0.9rem;
        padding: 0.5rem;
        margin-top: 0.5rem;
      }
      input[type="submit"] {
        padding: 0.5rem 1rem;
        color: var(--primary-text);
        /* background-color: #c8bdee; */
        border: 1px solid #c8bdee;
        &:hover {
          /* background-color: #b6a8e9; */
          background-color: var(--button-hover-background);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1rem;
    display: flex;
    align-items: center;
    .contact-wrapper {
      width: 95%;
      margin: 0 auto;
      .contact-text {
        h2 {
          font-size: 1.3rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
      .contact-form {
        margin: auto 0;
        padding: 0 0 0 1.5rem;
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .contact-wrapper {
      display: flex;
      flex-direction: column;
      .contact-text {
        width: 100%;
      }
      .contact-form {
        width: 100%;
      }
    }
  }
`;
export default Contact;
