import "../styles/about.css";
import bioImage from "../images/profpic2.jpg";
import bioImage2 from "../images/bioPic2.jpg";
import { Container, Stack, Box } from '@mui/material';

const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="title">About Me</h1>
      <Container>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}
          alignItems="center"
        >
          <img className="profpic" src={bioImage2} alt="profile" />
          <Box>
          Hi there! My name is Lindsey and I'm a full stack web developer based in Denver, CO. I have a passion for creating simple and clean websites, and love to photograph the great outdoors. I have 11 years of experience living in the Rocky Mountains, and have developed a strong ability to adapt to new challenges and break them down into smaller, more manageable tasks in order to achieve my goals.
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
          I pride myself on my ability to communicate effectively with clients and bring their vision to life. With my expertise in HTML5, CSS3, JavaScript, Node.js, Express, ReactJS, SQL, MongoDB, and Bootstrap, I am well-equipped to handle any project and deliver high-quality results within a given timeline.
          </Box>
          {/* <Box>
            HTML5 | CSS3 | JavaScript | Node.js | Express | ReactJS | SQL | MongoDB | Bootstrap | MaterialUI
          </Box> */}
        </Stack>
      </Container>
    </div>
  );
};

export default About;

