import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Grid container spacing={12}>
      <Grid item xs={3}>
        <Card className={classes.card} style={{ margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="300"
              image="C:\Users\HP\Desktop\artgallery_frontend\src\components\Gallery\p1.jpeg"
              title="Contemplative Reptile"
              style={{ backgroundSize: "cover" }}
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Fegure Paint 01
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ marginLeft: "90px", textAlign: "center" }}
            >
              Booqo
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card className={classes.card} style={{ margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="300"
              image="C:\Users\HP\Desktop\artgallery_frontend\src\components\Gallery\p5.jpeg"
              title="Contemplative Reptile"
              style={{ backgroundSize: "cover" }}
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Fegure Paint 01
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ marginLeft: "90px", textAlign: "center" }}
            >
              Booqo
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card className={classes.card} style={{ margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="300"
              image="C:\Users\HP\Desktop\artgallery_frontend\src\components\Gallery\p2.jpeg"
              title="Contemplative Reptile"
              style={{ backgroundSize: "cover" }}
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Fegure Paint 01
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ marginLeft: "90px", textAlign: "center" }}
            >
              Booqo
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className={classes.card} style={{ margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="300"
              image="C:\Users\HP\Desktop\artgallery_frontend\src\components\Gallery\p3.jpeg"
              title="Contemplative Reptile"
              style={{ backgroundSize: "cover" }}
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Fegure Paint 01
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ marginLeft: "90px", textAlign: "center" }}
            >
              Booqo
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
