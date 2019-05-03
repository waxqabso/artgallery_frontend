import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';




const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop:'100px',
    backgroundColor: theme.palette.background.paper,
  },
  
});

function mrArt(props) {
  const { classes } = props;

  return (
 
    <div className={classes.root}>
   <h1>
       Our Most Rated Art
       </h1>
      <GridList className={classes.gridList} cols={2.5}>

          <GridListTile style={{width:'400px' , height:'400px'}} >
            <img src={require('./test.jpg')} alt="something wrong" />
            
            <GridListTileBar       
            />
          
          </GridListTile>

          <GridListTile  style={{width:'400px' , height:'400px'}}>
          
            <img src={require('./2.jpg')} alt="something wrong" />
            <GridListTileBar/>
            
          </GridListTile>

          <GridListTile style={{width:'400px' , height:'400px'}} >
            <img src={require('./3.jpg')} alt="something wrong"  />
           
            <GridListTileBar       
            />
           
          </GridListTile>
        ))}
           
      </GridList>
      
   
    </div>
  );
}

mrArt.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(mrArt);
