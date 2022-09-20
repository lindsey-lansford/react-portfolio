import "../styles/about.css";
import bioImage from "../images/profpic2.jpg";

const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="title">About Me</h1>
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          <div className="col-4 justify-content-center">
            <img src={bioImage} alt="profile" className="profile-image" />
          </div>
          <div className="col-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              delectus ullam distinctio quod consequuntur iste inventore magnam
              optio!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quod pariatur facilis eos sed sint tenetur nisi iste. Dolor eos
              temporibus facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quod pariatur facilis eos sed sint tenetur nisi iste. Dolor eos
              temporibus facere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
