import React, { Component } from 'react';
import IntroAbout from './bodyComponents/introduction/Intro';
import Profiles from './bodyComponents/profiles/Profiles';
import {Container, Grid }from '@material-ui/core/';
import { makeStyles, useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Body = () =>{

    const classes = useStyles();

    return(
        <div className={classes.root} >
        <Grid item lg={12}>
         
            <IntroAbout />
            <Profiles />
            </Grid>
         
        </div>
    )
}

export default Body;