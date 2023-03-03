import "../styles/projectCard.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const NewProjectCard = (props) => {
  return (
    
    <Card sx={{ mt: "1.2rem", border: 1 }} variant="outlined">
      <CardContent>
        <Typography gutterBottom component="div" variant="h5">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>

      <CardMedia
        component="img"
        image={props.image}
        alt={props.title}

      />

      <CardActions>
        <Button
          href={props.repo}
          target="_blank"
          rel="noreferrer"
          size="small"
          variant="contained"
          color="primary"
        >
          {props.isDuel ? "Github" : "GitHub"}
        </Button>

        {!props.isDuel && props.prod && (
          <Button
            href={props.prod}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="success"
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
