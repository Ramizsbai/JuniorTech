import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core/';
import './intro.css'
import './responsiveIntro.css'



const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0, 0, 6, 0),
        letterSpacing: '1px',
        fontFamily: 'Oswald, sans-serif'
    },
    para: {
        letterSpacing: '1px',
        fontWeight: 'bold',
    },


}));

const Intro = () => {

    const classes = useStyles();


    return (






        <div className='mainIntro'>

            <Container maxWidth="lg">
                <Typography className={classes.root} variant="h3" component="h3">
                    <span className="our-team"> Our Team</span>
                </Typography>
                <Typography className={classes.para} component="p" color="#38D39F">
                    Junior Tech is a job board for junior in the tech industry in Germany. The whole idea came when we were about to finish our course. We have seen that there are no job boards focusing only on junior positions.Then we decided to create an app where people can find their first job in the tech industry.
    
    
      </Typography>
            </Container>

        </div>
    )
}

export default Intro;