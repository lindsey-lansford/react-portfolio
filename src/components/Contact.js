import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_id", form.current, "your-token").then(
      () => {
        alert("Message successfully sent!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send the message, please try again");
      }
    );
  };

  return (
    <div className="contact-page-container">
      <h1 className="title">Contact Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        quisquam rerum modi corrupti consequatur vero, omnis perferendis non
        laudantium, tempora quibusdam facilis ex at neque odit? Fuga eos eius
        itaque?
      </p>
      <div className="contact-form">
        <form className="form-floating" ref={form} onSubmit={sendEmail}>
          <ul>
            <li>
              <input placeholder="Name" type="text" name="user_name" required="true" />
            </li>
            <li>
              <input
                placeholder="Email"
                type="email"
                name="user_email"
                required="true"
              />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required="true"
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required="true"
              ></textarea>
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

export default Contact;
