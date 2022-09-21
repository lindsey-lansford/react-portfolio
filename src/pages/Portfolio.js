import ProjectCard from '../components/ProjectCard';


import HabitStack from "../images/habitstack.png";


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
      image: HabitStack,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://habitstack.herokuapp.com/",
      repo: "https://github.com/lindsey-lansford/habit-map/tree/main",
      id: 2,
    },
    
    {
      title: "Weather Dashboard",
      image: HabitStack,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://habitstack.herokuapp.com/",
      repo: "https://github.com/lindsey-lansford/habit-map/tree/main",
      id: 3,
    },
    
    {
      title: "Project name 4",
      image: HabitStack,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://habitstack.herokuapp.com/",
      repo: "https://github.com/lindsey-lansford/habit-map/tree/main",
      id: 4,
    },
  
    {
      title: "Project name 5",
      image: HabitStack,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://habitstack.herokuapp.com/",
      repo: "https://github.com/lindsey-lansford/habit-map/tree/main",
      id: 5,
    },
  
    {
      title: "Project name 6",
      image: HabitStack,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde delectus in dolorem soluta hic maiores eos earum faPlaceOfWorship.",
      prod: "https://habitstack.herokuapp.com/",
      repo: "https://github.com/lindsey-lansford/habit-map/tree/main",
      id: 6,
    },
  ];

  return (
    <div className="portfolio-page-container">
      <h1 className="title">Portfolio</h1>
      <div className="container">
        {projects.map((project) => (
          <ProjectCard
            title={project.name}
            image={project.image}
            description={project.description}
            repo={project.repo}
            deployed={project.prod}
            id={project.id}
            key={project.id}
            />
          ))}
      </div>
    </div>
  )
} 

export default Portfolio;