import "../styles/projectCard.css";
import * as React from 'react';
import {Card, CardContent, CardMedia, Button, CardActionArea, CardActions } from '@mui/material';

const ProjectCard2 = (props) => {
  return (
    <div className="container" id="portfolio-card">
      <Card >

      </Card>
      <div className={`card text-center ${props.id}`}>
        <div className="card-header">{props.title}</div>
        <img src={props.image} alt={props.title} className="img-fluid" />
        <div className="card-body">
          <div className="card-text">{props.description}</div>
          <div className="card-body">
            <a
              href={props.repo}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              {props.isBlog ? "Blog" : "GitHub Repo"}
            </a>
            
            {!props.isBlog && props.prod && (
          <a
          href={props.prod}
          target="_blank"
          rel="noreferrer"
          className="card-link"
              >
                {"Production Link"}
        </a>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard2;
