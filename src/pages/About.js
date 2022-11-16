import * as React from 'react';
import "../styles/about.css";
import bioImage from "../images/profpic2.jpg";
import { Container, Stack, Paper, Avatar, Box } from '@mui/material';


const About = () => {

return (
  <div className="about-page-container">
    <h1 className="title">About Me</h1>
    <Container maxWidth="lg">
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}
        alignItems="center"
        >
          <Avatar src={bioImage} alt="profile" sx={{ width: 150, height: 210, margin: 2}}/>
        <Box>
          Hey y'all! My name is Lindsey Lansford and I am a Software Developer with a passion to create intentional & unique applications.
        </Box>
      </Stack>
      <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quod pariatur facilis eos sed sint tenetur nisi iste. Dolor eos
            temporibus facere.
        </Box>
        <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quod pariatur facilis eos sed sint tenetur nisi iste. Dolor eos
            temporibus facere.
        </Box>
        <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quod pariatur facilis eos sed sint tenetur nisi iste. Dolor eos
            temporibus facere.
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
