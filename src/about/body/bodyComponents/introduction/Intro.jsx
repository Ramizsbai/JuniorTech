import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, Typography} from '@material-ui/core/';
import './intro.css'


const useStyles = makeStyles(theme => ({
   root: {
      padding: theme.spacing(0, 0, 6, 0),
      letterSpacing: '1px',
      fontFamily: 'Oswald, sans-serif'
     },
     para:{
         letterSpacing: '1px'
         },
    mainIntro:{
        marginTop: '200px'
    }  
     
   }));

const IntroAbout = () =>{

    const classes = useStyles();


    return(
        <div className=  {classes.mainIntro}>
            <Grid item xs={6} >
            <Container  maxWidth="sm" style={{border: '1px solid black', paddingLeft: '0px'}}>
        <Typography className={classes.root}  variant="h3" component="h3">
        Our Team.
      </Typography>
      <Typography className={classes.para} component="p">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Cumque adipisci hic veritatis necessitatibus temporibus.
       Quia blanditiis nulla consectetur dicta dolores explicabo
        repudiandae dolorem vero. Ipsa id facilis explicabo laboriosam eaque.
       <br/> <br/>

        Paper can be used to build surface or other elements for your.
      </Typography>
            </Container>
            </Grid>
        </div>
    )
}

export default IntroAbout;