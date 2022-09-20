

const ProjectCard = (props) => {
  
  const project = props.project;

  return (  
    <div className="single-project">
      <a href={project.deployLink} target="_blank" rel="noreferrer">
        <img src={project.image} alt={project.title} className="project-photo" />
      </a>
    </div>
  );
}

export default ProjectCard;