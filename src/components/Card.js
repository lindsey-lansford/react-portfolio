// import "../styles/projectCard.css";
import * as React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";

const ProjectCard2 = (props) => {
  return (
    
    <Card sx={{mt: ".7rem"}} variant="outlined">

        <CardContent>
        <Typography gutterBottom component="div">
          {props.title}
          </Typography>
          <Typography variant="body2">
          {props.description}
        </Typography>
        </CardContent>
          <CardMedia component="img" image={props.image} alt={props.title} />

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
              variant="outlined"
            >
              {"Live"}
            </Button>
          )}
          </CardActions>
      </Card>
  );
};

export default ProjectCard2;