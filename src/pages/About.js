import "../styles/about.css";

import bioImageCom from "../images/bioPic2_compressed.jpg"
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Stack, Box } from "@mui/material";
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

const About = () => {
  return (
    <div className="about-page-container">
      <Spin className="title">About Me</Spin>
      <Container>
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 3, md: 5, lg: 6 }}
          alignItems="center"
        >
          <img className="profpic" src={bioImageCom} alt="profile" />
          <Box>
              Hi there! My name is Lindsey and I'm a Web Developer based in
              Denver, CO. I have an extensive background in Product/Project
              Management & Digital Integrations, and joined the more technical
              side of the industry, coding.
          </Box>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          spacing={{ xs: 2, sm: 3, md: 3, lg: 6}}
          alignItems="baseline"
          className="lower-section"
        >
          <Box>
            I absolutely love problem solving and designing/building things that
            will hopefully make one’s life less….chaotic? I pride myself on my
            ability to communicate effectively with clients and bring their
            vision to life.
          </Box>
          <Box>
            {" "}
            My expertise lies in HTML5, CSS3, JavaScript, Node, React, and
            enjoyment for learning more, I am well-equipped to craft and deliver
            high-quality, clean and responsive web applications.
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default About;



// const typing = keyframes`
// {0% { width: 0px; }
//   100% { width: 100%; }
// }`;

// const blinking = keyframes`
// {0%, 100% { border-color: transparent; }
//   50% { border-color: #CE2D4F; }
// }`;

// const Animation = styled.div`
//   display: inline-block;
//   animation: ${typing} 3s steps(16), ${blinking} 0.5s steps(1) infinite;
//   overflow: hidden;
//   border-right: .15em solid #CE2D4F;
//   white-space: nowrap;
//   margin: 0 auto;
//   letter-spacing: .15em;
// `;

// const About = () => {
//   return (
//     <div className="about-page-container">
//       <Spin className="title">About Me</Spin>
//         <div className="top">
//         <img className="profpic" src={bioImageCom} alt="profile" />
//         <p className="bio-right">
//         Hi there! My name is Lindsey and I'm a Web Developer based in Denver, CO. I have an extensive background in Product/Project Management & Digital Integrations, and joined the more technical side of the industry, coding.
//         </p>
//     </div>
//         <div className="bottom">
//         <p>I absolutely love problem solving and designing/building things that will hopefully make one’s life less….chaotic? I pride myself on my ability to communicate effectively with clients and bring their vision to life.</p>
//           <p>My expertise lies in HTML5, CSS3, JavaScript, Node, React, and enjoyment for learning more, I am well-equipped to craft and deliver high-quality, clean and responsive web applications.</p>
//     </div>
//       </div>
//   );
// };