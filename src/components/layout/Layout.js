import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Paint from './4.png'

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
         <Grid container spacing={24}>
       
        <Grid item xs={12} sm={6}>
        </Grid>
        <Grid item xs={12} sm={6} >
        <div >
<h1><span>Become</span><br/>
    <span>Future Painter</span>
</h1>

 <p style={{fontSize:'18px' }}>Use your blood to paint. Keep painting until you faint.<br/> Keep painting until you die.</p>
 <Button style={{paddingLeft:'18px' ,width:'118px'}}
        variant="contained"
        color="primary"
        disableRipple
      
      >
        About
      </Button>
        </div>
        </Grid>
        
      </Grid>
      

        </div>
    );
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);
