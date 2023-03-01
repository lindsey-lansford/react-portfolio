// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "../styles/contact.css";
// // Here we import a helper function that will check if the email is valid
// import { validateEmail } from "../utils/helpers"
// //Animation
// // import styled, {keyframes} from "styled-components";

// // const spin = keyframes`
// //   from {transform:rotate(0deg);}
// //   to {transform:rotate(360deg);}
// // `;

// // const Spin = styled.div`
// //   display: inline-block;
// //   animation: ${spin} 1.5s 1 both normal;
// //   font-size: calc(1.375rem + 1.5vw);
// //   font-family: "Quicksand" !important;
// //   font-weight: 500;
// //   line-height: 1.2;
// // `;

// const Contact = () => {
//   // Creating state variables for the fields in the form
//   // Also setting their initial values to an empty string
//   const [userEmail, setUserEmail] = useState('');
//   const [userName, setUserName] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, setting the state of either email, username, and message
//     if (inputType === 'userEmail') {
//       setUserEmail(inputValue);
//     } else if (inputType === 'userName') {
//       setUserName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First, check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(userEmail) || !userName) {
//       setErrorMsg('Check email format and input your name.');
//       // Want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//     }

//     emailjs.sendForm(serviceID, templateID, e.target, userID)
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");

//           // If everything goes according to plan, want to clear out the input after a successful submission.
//           setUserName('');
//           setUserEmail('');
//           setMessage('');

//           //if email submission was successful, then send msg.
//           alert(`Thank you ${userName}, your email was sent!`);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-page-container">
//       <h1 className="title">Contact Me</h1>
//       <p>
//         Are you looking for a web designer to help bring your vision to life?
//         Look no further! I'd love to hear about your project and see if we're a
//         good fit to work together. Please don't hesitate to contact me and let's
//         start the conversation.
//       </p>
//       <div className="contact-form">
//         <form>
//           <ul>
//             <li>
//               <input
//                 value={userName}
//                 name="userName"
//                 type="text"
//                 placeholder="Name"
//                 onChange={handleInputChange}
//                 required
//               />
//             </li>
//             <li>
//               <input
//                 value={userEmail}
//                 name="userEmail"
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleInputChange}
//                 required
//               />
//             </li>
//             <li>
//               <textarea
//                 value={message}
//                 name="message"
//                 type="text"
//                 placeholder="Message"
//                 onChange={handleInputChange}
//                 required
//               />
//             </li>
//             <li>
//               <input
//                 type="submit"
//                 className="send-btn"
//                 value="SEND"
//                 onSubmit={handleFormSubmit}
//               />
//             </li>
//           </ul>
//         </form>
//         {/* {errorMsg && (
//         <div>
//           <p className="error-text">{errorMsg}</p>
//         </div>
//       )} */}
//       </div>
//     </div>
//   );
// };

// export default Contact;

// const Contact = (callback, validate) => {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [send, setSend] = useState(false);
//   const [isSubmiting, setIsSubmiting] = useState(false);

//   useEffect(() => {
//     if (Object.keys(errors).length === 0) {
//       if (isSubmiting) {
//         setSend(true);
//       }
//     }
//   }, [errors]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//     setErrors(validate(values));
//     setIsSubmiting(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (send) {
//       emailjs
//         .sendForm(
//           "service_vj0t154",
//           "template_8dj23rb",
//           e.target,
//           "_Qqqrmr6HS17-AebK"
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//       e.target.reset();
//     }
//   };

//   return { handleChange, values, handleSubmit, errors };
// };

// export default Contact;

// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import "../styles/contact.css";
// // Here we import a helper function that will check if the email is valid
// // import { validateEmail } from "../utils/helpers"



// const ContactMe = () => {
  
//   const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   // Creating state variables for the fields in the form
// // Also setting their initial values to an empty string
// const [email, setEmail] = useState('');
// const [message, setMessage] = useState('');
// const [error, setError] = useState('');
// const form = useRef();
  
//   const checkEmail = (e) => {
//     setEmail(e.target.value);
//   }
//   if (regex.test(email) === false) {
//     setError('Email is invalid, please enter the correct email address');
//   } else {
//     setError('');
//     return true;
//   }
  
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_vj0t154",
//         "template_8dj23rb",
//         form.current,
//         "_Qqqrmr6HS17-AebK"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           if (email !== '') {
//             setMessage('thank you for')
//           }
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   };

//   return (
//     <div className="contact-page-container">
//       <h1 className="title">Contact Me</h1>
//       <p>
//         Are you looking to build a custom website and need help bringing your
//         vision to life? Look no further! I'd love to hear about your project and
//         see if we're a good fit to work together. Please don't hesitate to
//         contact me and let's start the conversation.
//       </p>
//       <div className="contact-form">
//         <form ref={form}>
//           <ul>
//             <li>
//               <input name="user_name" type="text" placeholder="Name" required />
//             </li>
//             <li>
//               <input
//                 name="user_email"
//                 type="email"
//                 placeholder="Email"
//                 required
//                 onChange={checkEmail}
//               /> <p>{error}</p>
//             </li>
//             <li>
//               <textarea
//                 name="message"
//                 type="text"
//                 placeholder="Message"
//                 required
//               />
//             </li>
//             <li>
//               <input type="submit" className="send-btn" value="SEND" onSubmit={sendEmail} />
//               <p>{message}</p>
//             </li>
//           </ul>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactMe;