import "../styles/about.css";
// import bioImage from "../images/profpic2.jpg";
import bioImage2 from "../images/bioPic2.jpg";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Stack, Box } from "@mui/material";
//animation
import styled, { keyframes } from "styled-components";

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
      {/* <h1 className="title">About Me</h1> */}
      <Spin className="title">About Me</Spin>
      <Container>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          alignItems="center"
        >
          <img className="profpic" src={bioImage2} alt="profile" />
          <Box>
              Hi there! My name is Lindsey and I'm a web developer based in
              Denver, CO. I have a solid background in Product/Project
              Management & Digital Integrations, and joined the more technical
              side of the industry, coding.
          </Box>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          spacing={{ xs: 1, sm: 2, md: 4 }}
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
