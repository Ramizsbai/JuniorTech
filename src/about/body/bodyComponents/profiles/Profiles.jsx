import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, Typography, Container, Grid} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import image from './me-final-1.png'


const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
    
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 70,
    },
    icons: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(6),
    },

  }));

const Profiles = () =>{

    const classes = useStyles();
    const theme = useTheme();


    return(
        <div>
        
        <Grid container xs={2}>
       <Card className={classes.card}>
       
       <div className={classes.details}>
       <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            John Smith
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>

        <div className={classes.icons}>
        <LinkedInIcon></LinkedInIcon>
        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <GitHubIcon></GitHubIcon>
        </div>
       </div>

       <CardMedia
        className={classes.cover}
        image={image}
        title="me"
      />

       </Card>
       </Grid>

        



        </div>
        
    )
};

export default Profiles