import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const Header=(props)=> {
    const { classes } = props;
    return (
        <div className={classes.root} >
            <AppBar position="default" style={{ backgroundColor: 'white' }}>
                <Toolbar>

                    <Typography variant="h6" color="black" className={classes.grow} style={{ fontWeight: 'bold', color: 'skyblue', letterSpacing: '15px' }}>
                        ALEEL
          </Typography>
                    <Button color="black" style={{ fontWeight: 'bold', color: 'skyblue', textDecoration: 'underline' }}>Home</Button>
                    <Button color="black" style={{ paddingLeft: '20px', fontWeight: 'bold' }}>Gallery</Button>
                    <Button color="black" style={{ paddingLeft: '20px', fontWeight: 'bold' }} >About</Button>
                    <Button color="black" style={{ fontWeight: 'bold' }} >Login </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
