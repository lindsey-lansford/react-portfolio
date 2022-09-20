// import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  
  const project = props.project;

  return (  
    <div className="card">
      <div className="card-header">
        Project Title 
      </div>
      <img src="" alt="" className="project-photo" />
      <div className="card-body">
        <div className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis dolore laboriosam quasi ad, quidem velit doloribus, magni veniam earum fugiat nihil, iste ratione delectus voluptas eum impedit. Quae, commodi?
        </div>
        <div className="card-body">
        <a href="#" target="_blank"
              rel="noreferrer" className="card-link">Project Link</a>
        <a href="#" target="_blank"
              rel="noreferrer" className="card-link">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 