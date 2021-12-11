import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation} from 'react-router-dom';

import logo from '../../assets/magicSymbol.jpeg' // importing our logo 
import useStyles from './styles'; //importing our styles from useStyles in the navbar folder 

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();


    return (
        <div>
                <AppBar position="fixed" className={classes.appBar} color="inherit">
                    <Toolbar>
                            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                                <img src={logo} alt="Commerce.js" height="25px" className={classes.image} /> 
                                Lucky Sauvage Shop 
                            </Typography>
                            <div className={classes.grow} /> {/* grow means this will take as much space as it needs to the left */}
                            {location.pathname === '/' &&  (
                            <div className={classes.button} > {/*  */}
                                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart /> 
                                     </Badge>
                                </IconButton>
                            </div> )}
                    </Toolbar> 
                </AppBar>
        </div>

    ) 
}

export default Navbar;