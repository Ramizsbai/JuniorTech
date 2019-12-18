import React from 'react';
import { makeStyles, chipData } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

export default function ChipsArray() {
    const classes = useStyles();


    return (
        <Paper className={classes.root}>
            {chipData.map(data => {

                return (
                    <Chip
                        key={data.key}

                        label={data.label}
                        className={classes.chip}
                    />
                );
            })}
        </Paper>
    );
}