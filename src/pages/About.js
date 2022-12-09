import * as React from 'react';
import "../styles/about.css";
import bioImage from "../images/profpic2.jpg";
import { Container, Stack, Typography, Avatar, Box } from '@mui/material';


const About = () => {

return (
  <div className="about-page-container">
    <h1 className="title">About Me</h1>
    <Container maxWidth="lg">
      <Stack
        direction="row"
        spacing={{ xs: 2, sm: 2, md: 4, lg: 5 }}
        alignItems="center"
        >
          <Avatar src={bioImage} alt="profile" sx={{ width: 150, height: 210, margin: 2}}/>
        <Box>
        Hi y'all, my name is Lindsey and I'm a native Texan that has been living that Rocky Mountain High for 11 years and some change. I am based in Denver, CO and passionate about simple, clean web creation. I love photography, the great outdoors and breaking down challenges into smaller, more doable actions to reach the end goal.
        </Box>
      </Stack>
      <Stack
        display="flex"
        direction="column"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems= "baseline"
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
    // <div className="about-page-container">
    //   <h1 className="title">About Me</h1>
    //   <div className="container-fluid">
    //     <div className="row justify-content-evenly">
    //       <div className="col-4 justify-content-center">
    //         <img src={bioImage} alt="profile" className="profile-image" />
    //       </div>
    //       <div className="col-6">
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
    //           delectus ullam distinctio quod consequuntur iste inventore magnam
    //           optio!
    //         </p>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
    //           quod pariatur facilis eos sed sint tenetur nisi iste. Dolor eos
    //           temporibus facere.
    //         </p>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
    //           quod pariatur facilis eos sed sint tenetur nisi iste. Dolor eos
    //           temporibus facere.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
