import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import Grid from "@material-ui/core/Grid";
const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    backgroundColor: "#ddd",
    borderRadius: "10px",
    width: "500px",
    height: "30px"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <Grid container spacing={12} style={{ backgroundColor: "skyblue" }}>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Paper className={classes.root} elevation={1}>
          <InputBase className={classes.input} placeholder="Search " />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);
