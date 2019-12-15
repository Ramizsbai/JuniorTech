import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
    card: {
        maxWidth: 245,
        marginLeft: 50,
    },
});









export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                        Our Team
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime ipsa sint est ratione hic atque necessitatibus magnam autem et.
                        Minima quasi odit omnis velit facere eligendi. Nesciunt assumenda quae omnis perferendis,
                        accusamus sunt doloremque et magnam sequi soluta vitae. Laborum?
                </Typography>
                </CardContent>


            </CardActionArea>



        </Card>
    );
}