import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
    card: {
        maxWidth: 245,
        marginLeft: 900,
        marginTop: 20,
    },
    media: {
        height: 80,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/temo.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Tamim
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Front-End Developer
          </Typography>
                </CardContent>
            </CardActionArea>

            <GitHubIcon />
            <LinkedInIcon />
        </Card>

    );
}
