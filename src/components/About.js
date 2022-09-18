import "../styles/about.css";
import bioImage from '../images/profpic1.jpg';

const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="title">About Me</h1>
      <div className="bio-image">
        <img src="{bioImage}" alt="profile" className="profile-img" />
      </div>
      <div className="bio-copy">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae delectus ullam distinctio quod consequuntur iste inventore magnam optio!
          <p>
          </p> Quasi inventore nihil quas tenetur ut neque, consectetur autem facere maxime quod!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod pariatur facilis eos sed sint tenetur nisi iste. Dolor eos temporibus facere.</p>
      </div>
    </div>
  )
} 

export default About;