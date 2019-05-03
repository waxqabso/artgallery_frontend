import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Paint from './Banner.jpg'

const styles = theme => ({
    root: {
        flexGrow: 1,
        width:'100%',
    
      
    },
    img: {
       
        display: 'inlineBlock',
        maxWidth: '100%',
        maxHeight: '100%'
    }
});

function ComplexGrid(props) {
    const { classes } = props;
    return (
        <div className={classes.root} style={{ backgroundColor:'skyblue',  height:'350%'}}>
            <img classNmae={classes.img} src={Paint} style={{width:'100%'}}  />
        </div>
    );
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);