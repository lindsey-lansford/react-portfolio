import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers"
//Animation
// import styled, {keyframes} from "styled-components";

// const spin = keyframes`
//   from {transform:rotate(0deg);}
//   to {transform:rotate(360deg);}
// `;

// const Spin = styled.div`
//   display: inline-block;
//   animation: ${spin} 1.5s 1 both normal;
//   font-size: calc(1.375rem + 1.5vw);
//   font-family: "Quicksand" !important;
//   font-weight: 500;
//   line-height: 1.2;
// `;
const userID= process.env.REACT_APP_USER_ID
const templateID= process.env.REACT_APP_TEMPLATE_ID
const serviceID= process.env.REACT_APP_SERVICE_ID

const Contact = () => {
  // Creating state variables for the fields in the form
  // Also setting their initial values to an empty string
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, setting the state of either email, username, and message
    if (inputType === 'userEmail') {
      setUserEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First, check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(userEmail) || !userName) {
      setErrorMsg('Check email format and input your name.');
      // Want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          // If everything goes according to plan, want to clear out the input after a successful submission.
          setUserName('');
          setUserEmail('');
          setMessage('');

          //if email submission was successful, then send msg.
          alert(`Thank you ${userName}, your email was sent!`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page-container">
      <h1 className="title">Contact Me</h1>
      <p>
        Are you looking for a web designer to help bring your vision to life?
        Look no further! I'd love to hear about your project and see if we're a
        good fit to work together. Please don't hesitate to contact me and let's
        start the conversation.
      </p>
      <div className="contact-form">
        <form>
          <ul>
            <li>
              <input
                value={userName}
                name="userName"
                type="text"
                placeholder="Name"
                onChange={handleInputChange}
                required
              />
            </li>
            <li>
              <input
                value={userEmail}
                name="userEmail"
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
            </li>
            <li>
              <textarea
                value={message}
                name="message"
                type="text"
                placeholder="Message"
                onChange={handleInputChange}
                required
              />
            </li>
            <li>
              <input
                type="submit"
                className="send-btn"
                value="SEND"
                onSubmit={handleFormSubmit}
              />
            </li>
          </ul>
        </form>
        {/* {errorMsg && (
        <div>
          <p className="error-text">{errorMsg}</p>
        </div>
      )} */}
      </div>
    </div>
  );
};

export default Contact;
