// import "../styles/projectCard.css";
import * as React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from "@mui/material";

const ProjectCard2 = (props) => {
  return (
    <div className="container" id="portfolio-card">
      <Card>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        </CardContent>
          <CardMedia component="img" image={props.image} alt={props.title} />
          </CardActionArea>
          <CardActions>
          <Button
            href={props.repo}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
          >
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.prod && (
            <Button
              href={props.prod}
              target="_blank"
              rel="noreferrer"
              variant="contained"
            >
              {"Live"}
            </Button>
          )}
          </CardActions>
      </Card>

      <div className={`card text-center ${props.id}`}>

      </div>
    </div>
  );
};

export default ProjectCard2;
