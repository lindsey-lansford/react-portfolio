import NewProjectCard from '../components/NewProjectCard';
// images for cards
import HabitStack from "../images/habitstack.png";
import Concert from "../images/concert.png";
import WeatherDash from "../images/weather.png";
import Planner from "../images/planner.png";
// import EmployeeList from "../images/employees.png";
import EmployeeRoles from "../images/roles.png";
// import EmployeeStart from "../images/starting.png";
import SocialNetwork from "../images/social.png";
import PolaroidAlbum from "../images/travelphotos.png";
//Animation
import styled, {keyframes} from "styled-components";

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

const Portfolio = () => {
  
  const projects = [
      {
        title: "My Travel Polaroids",
        image: PolaroidAlbum,
        description: "Playing with custom CSS/animation to mimic a photo album of polaroids.",
        prod: "https://lindsey-lansford.github.io/Polaroid_Album/",
        repo: "https://github.com/lindsey-lansford/Polaroid_Album",
        id: 1,
    },

    {
      title: "Habit Stack",
      image: HabitStack,
      description: "Full Stack application that aims to help users build, track and stick to habits through repetition and reward with engaging animations.",
      prod: "https://habitstack.herokuapp.com/",
      repo: "https://github.com/lindsey-lansford/habit-map/tree/main",
      id: 2,
    },
    
    {
      title: "Concert Concierge",
      image: Concert,
      description: "An application for music lovers where they can plan their perfect concert getaway and enjoy some local cuisine.",
      prod: "https://lindsey-lansford.github.io/Concert_Concierge/",
      repo: "https://github.com/lindsey-lansford/Concert_Concierge",
      id: 3,
    },
    
    {
      title: "Weather Dashboard",
      image: WeatherDash,
      description: "This web application's purpose is to generate the current weather and the future 5-day forecast by city.",
      prod: "https://lindsey-lansford.github.io/weather-forecast-dash/",
      repo: "https://github.com/lindsey-lansford/weather-forecast-dash",
      id: 4,
    },
    
    {
      title: "Day Planner",
      image: Planner,
      description: "This web application's purpose is to generate a workday calendar that enables the user to keep up with their busy day.",
      prod: "https://lindsey-lansford.github.io/day-planner/",
      repo: "https://github.com/lindsey-lansford/day-planner",
      id: 5,
    },
  
    {
      title: "Employee Tracker Database",
      image: EmployeeRoles,
      description: "Backend MySQL Database Application",
      prod: "",
      repo: "https://github.com/lindsey-lansford/Employee-Tracker-DB",
      id: 6,
    },
  
    {
      title: "Social Network",
      image: SocialNetwork,
      description: "Backend MongoDB/Mongoose Application",
      prod: "",
      repo: "https://github.com/lindsey-lansford/social-network",
      id: 7,
    },
  ];

  return (
    <div className="portfolio-page-container">
      <Spin className="title">Projects</Spin>
      <div className="container">
        {projects.map((project) => (
          <NewProjectCard
            title={project.title}
            image={project.image}
            description={project.description}
            repo={project.repo}
            prod={project.prod}
            id={project.id}
            key={project.id}
            />
          ))}
      </div>
    </div>
  )
} 

export default Portfolio;