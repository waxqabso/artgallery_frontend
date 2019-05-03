import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    float: "left",
    margin: "45px"
  },
  media: {
    height: 200
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <h1 style={{ color: "#00aeef" }}> Our most rated artist</h1>
      <Card className={classes.card} style={{ backgroundColor: "#00aeef" }}>
        <img
          style={{ width: "500", height: "200px", alignItems: "top" }}
          src="/pro.png"
        />

        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "white" }}
            >
              Artist Name
            </Typography>
            <Typography component="p" style={{ color: "white" }}>
              Artist Names are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except
              Antarctica Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Praesentium quibusdam temporibus omnis laudantium totam eos,
              autem explicabo sapiente quasi debitis maiores molestiae?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* card two */}

      <Card className={classes.card} style={{ backgroundColor: "#00aeef" }}>
        <img style={{ width: "500", height: "200px" }} src="/pro.png" />

        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "white" }}
            >
              Artist Name
            </Typography>
            <Typography component="p" style={{ color: "white" }}>
              Artist Names are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except
              Antarctica Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Praesentium quibusdam temporibus omnis laudantium totam eos,
              autem explicabo sapiente quasi debitis maiores molestiae?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* crd 3 */}

      <Card className={classes.card} style={{ backgroundColor: "#00aeef" }}>
        <img style={{ width: "500", height: "200px" }} src="/pro.png" />

        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "white" }}
            >
              Artist Name
            </Typography>
            <Typography component="p" style={{ color: "white" }}>
              Artist Names are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except
              Antarctica Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Praesentium quibusdam temporibus omnis laudantium totam eos,
              autem explicabo sapiente quasi debitis maiores molestiae?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
