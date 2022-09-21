const ProjectCard = (props) => {
  
  return (  
    <div className={`card ${props.id}`}>
      <div className="card-header">
        {props.title}
      </div>
      <img src={props.image} alt={props.title} className="project-photo" />
      <div className="card-body">
        <div className="card-text">
        {props.description}
        </div>
        <div className="card-body">
        <a href={props.prod} target="_blank"
              rel="noreferrer" className="card-link">Production Link</a>
        <a href={props.repo} target="_blank"
              rel="noreferrer" className="card-link">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 