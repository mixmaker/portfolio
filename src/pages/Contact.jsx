import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Avatar } from "../components";
import PageAnimation from "../components/PageAnimation";
import emailjs from "@emailjs/browser";
import { AiFillCheckCircle } from "react-icons/ai";
// import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  document.title = "Contact | Shoumik Kumbhakar";
  // const captchaRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const EmailSendConfirmation = () => {
    return (
      <StyledEmail
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <AiFillCheckCircle color="var(--vibrant)" size={"1.4rem"} />
        <span>Message sent successfully</span>
      </StyledEmail>
    );
  };

  const StyledEmail = styled(motion.div)`
    position: fixed;
    height: 1.5rem;
    // width: "8rem",
    border: 0.5px #fff solid;
    padding: 1.2rem 0.75rem;
    border-radius: 0.4rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
    background-color: var(--secondary-background);
    z-index: 999;
    display: flex;
    align-items: center;
    span {
      margin-left: 0.5rem;
      color: var(--primary-text);
    }
  `;

  const sendEmail = (e) => {
    e.preventDefault();
    // const token = captchaRef.current.getValue();

    emailjs
      .sendForm(
        "gmail_service",
        "portfolio_email",
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          result.text === "OK" && setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // captchaRef.current.reset();
  };
  return (
    <>
      <PageAnimation />
      <AnimatePresence>{success && <EmailSendConfirmation />}</AnimatePresence>
      <StyledContact>
        <div className="contact-wrapper">
          <div className="contact-text">
            <h1>Want to chat?</h1>
            <Avatar
              customStyle={{
                width: "40%",
                margin: "0 auto",
                marginBottom: "1.5rem",
              }}
              transparent
            />
            <h2>Feel free to send a message!</h2>
            <p>
              Feel free to ask anything. If you have any suggestions, please let
              me know. Your suggestions are highly appreciated. I appreciate
              your time and I try hard to reply to every single message posted
              here! Keep dropping your priceless opinions.
            </p>
          </div>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <div className="form-name form-item">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-email form-item">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
              </div>
              {/* <div className="form-phone form-item">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" minLength={10} />
              </div> */}
              <div className="form-message form-item">
                <label htmlFor="message">Your Message</label>
                <textarea type="text" name="message" required rows={5} />
              </div>
              {/* <ReCAPTCHA
                ref={captchaRef}
                sitekey={process.env.REACT_APP_SITE_KEY}
                theme={
                  document.body.classList.contains("dark") ? "dark" : "light"
                }
              /> */}
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </StyledContact>
    </>
  );
};
const StyledContact = styled(motion.div)`
  position: relative;
  min-height: 80vh;
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
        margin-bottom: 1rem;
        margin-top: 1rem;
        label {
          font-size: 1.2rem;
          color: var(--primary-text);
        }
      }
      textarea {
        resize: none;
      }
      input[type="text"],
      input[type="email"],
      textarea {
        outline: none;
        border: none;
        border-radius: .4rem;
        background: #ece9f7;
        width: 100%;
        font-size: 0.9rem;
        padding: 0.5rem;
        margin-top: 0.5rem;
      }
      input[type="submit"] {
        margin-top: 1rem;
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
