import ProjectCard from '../components/ProjectCard';

import HabitStack from "../images/habitstack.png";
import Concert from "../images/concert.png";
import WeatherDash from "../images/weather.png";
import Planner from "../images/planner.png";
import EmployeeList from "../images/employees.png";
import EmployeeRoles from "../images/roles.png";
import EmployeeStart from "../images/starting.png";
import SocialNetwork from "../images/social.png";


const Portfolio = () => {
  
  const projects = [
    {
      title: "Habit Stack",
      image: HabitStack,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://habitstack.herokuapp.com/",
      repo: "https://github.com/lindsey-lansford/habit-map/tree/main",
      id: 1,
    },
    
    {
      title: "Concert Concierge",
      image: Concert,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://amccorkl.github.io/Concert_Concierge/",
      repo: "https://github.com/lindsey-lansford/Concert_Concierge",
      id: 2,
    },
    
    {
      title: "Weather Dashboard",
      image: WeatherDash,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://lindsey-lansford.github.io/weather-forecast-dash/",
      repo: "https://github.com/lindsey-lansford/weather-forecast-dash",
      id: 3,
    },
    
    {
      title: "Day Planner",
      image: Planner,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://lindsey-lansford.github.io/day-planner/",
      repo: "https://github.com/lindsey-lansford/day-planner",
      id: 4,
    },
  
    {
      title: "Employee Tracker Database",
      image: EmployeeRoles,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "Backend MySQL Database Application",
      repo: "https://github.com/lindsey-lansford/Employee-Tracker-DB",
      id: 5,
    },
  
    {
      title: "Social Network",
      image: SocialNetwork,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "Backend Mongoose Database Application",
      repo: "https://github.com/lindsey-lansford/social-network",
      id: 6,
    },
  ];

  return (
    <div className="portfolio-page-container">
      <h1 className="title">Portfolio</h1>
      <div className="container">
        {projects.map((project) => (
          <ProjectCard
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