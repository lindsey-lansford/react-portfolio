import "../styles/about.css";
import bioImage from "../images/profpic2.jpg";
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
          <img className="profpic" src={bioImage} alt="profile"/>
        <Box>
        Hi y'all, my name is Lindsey and I'm a native Texan that has been living that Rocky Mountain High for 11 years and some change. I am based in Denver, CO and passionate about simple, clean web creation. I love photography, the great outdoors and breaking down challenges into smaller, more doable actions to reach the end goal.
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
        I am highly adaptable and love a challenge, big or small, I can do it all. My expertise lies in creating a vision, communicating the process to the client and executing within a given timeline.
        </Box>
        <Box>
        HTML5 | CSS3 | JavaScript | Node.js | Express | ReactJS | SQL | MongoDB | Bootstrap | MaterialUI
        </Box>
      </Stack>
    </Container>
  </div>
  );
};

export default About;

