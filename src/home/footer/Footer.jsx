
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    backgroundColor: {
        background: '#4c9f70',
    },
    icons: {
        marginLeft: 300,

    }
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <div className={{ root: classes.root, backgroundColor: classes.backgroundColor, icons: classes.icons }} >

            <AppBar position="static" className={classes.backgroundColor}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Typography>
                            <FacebookIcon className={classes.icons} />
                            <InstagramIcon className={classes.icons} />
                            <LinkedInIcon className={classes.icons} />
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>

        </div>
    );
}