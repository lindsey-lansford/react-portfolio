import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        form.current,
        "user_id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    // emailjs.sendForm('gmail', 'template_8dj23rb', form.current, 'lzU8BubB8HMMbDOwb')
    //   .then(() => {
    //     alert("Message successfully sent!");
    //     window.location.reload(false);
    //   },
    //   () => {
    //     alert("Failed to send the message, please try again");
    //   }
    // );
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
        <form className="" ref={form} onSubmit={sendEmail}>
          <ul>
            <li>
              <input placeholder="Name" type="text" name="userName" required />
            </li>
            <li>
              <input
                placeholder="Email"
                type="email"
                name="userEmail"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
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
