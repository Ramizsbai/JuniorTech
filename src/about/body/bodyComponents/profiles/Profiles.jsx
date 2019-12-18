import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import image from './me-final-1.png'
import './profiles.css'
import './responsive-profiles-about.css'


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '400px',
    height: '200px'


  },
  details: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    width: '50%',
    backgroundColor: '#EDFBFC'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '180px',
    display: 'flex',
    justifyContent: 'center'
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },

}));

const Profiles = () => {

  const classes = useStyles();



  return (
    <div className='mainProfile'>




      <div className='row1'>
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
      </div>



      <div className='row2'>
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
      </div>








      <div className='row3'>

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



      </div>




    </div>




  )
};

export default Profiles