import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
//animation
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

const Spin = styled.div`
  display: inline-block;
  animation: ${spin} 1.5s 1 both normal;
  font-size: calc(1.375rem + 1.5vw);
  font-family: "Quicksand" !important;
  font-weight: 500;
  line-height: 1.2;
`;

const ContactMe = () => {

const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vj0t154",
        "template_8dj23rb",
        form.current,
        "_Qqqrmr6HS17-AebK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-page-container">
      <Spin className="title">Contact Me</Spin>
      <p>
        Are you looking to build a custom website and need help bringing your
        vision to life? Look no further! I'd love to hear about your project and
        see if we're a good fit to work together. Please don't hesitate to
        contact me and let's start the conversation.
      </p>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li>
              <input name="user_name" type="text" placeholder="Name" required />
            </li>
            <li>
              <input
                name="user_email"
                type="email"
                placeholder="Email"
                required
              />
            </li>
            <li>
              <textarea
                name="message"
                type="text"
                placeholder="Message"
                required
              />
            </li>
            <li>
              <input type="submit" className="send-btn" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;