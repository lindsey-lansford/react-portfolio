import "../styles/projectCard.css";
import * as React from "react";
import {Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";

const NewProjectCard = (props) => {
  return (
    <Card sx={{mt: "1rem"}} variant="outlined">

      <CardContent>
        <Typography gutterBottom component="div" variant="h5">
          {props.title}
          </Typography>
          <Typography variant="body2" >
          {props.description}
        </Typography>
      </CardContent>
      
          <CardMedia component="img" image={props.image} alt={props.title} />

          <CardActions>
          <Button
            href={props.repo}
            target="_blank"
            rel="noreferrer"
            size="small"
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
              size="small"
            >
              {"Live"}
            </Button>
          )}
          </CardActions>
      </Card>
  );
};

export default NewProjectCard;
