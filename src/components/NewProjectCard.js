import "../styles/projectCard.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Grid
} from "@mui/material";
import { Grid3x3 } from "@mui/icons-material";

const NewProjectCard = (props) => {
  return (
    <Grid>
    <Card raised
      sx={{ maxWidth: 280, margin: "0 auto", padding: "0.1em"}}>
      <CardContent>
        <Typography gutterBottom component="div" variant="h5">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>

      <CardMedia
        component="img"
        height="250"
        image={props.image}
        alt={props.title}
        sx={{ objectFit: "contain" }}
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
      </Grid>
  );
};

export default NewProjectCard;
