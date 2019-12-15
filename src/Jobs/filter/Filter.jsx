import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './filter.css';
import Chip from '@material-ui/core/Chip';



const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 130,
            alignItems: "center",
        },
        chip: {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function Filter() {
    const classes = useStyles();
    const [chipData, setChipData] = useState([
        { key: 0, label: '' },
        { key: 1, label: '' },
        { key: 2, label: '' },
    ]);

    const handleDelete = chipToDelete => () => {
        setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    };
    return (
        <div>
            <form
                className={classes.root}
                noValidate autoComplete="off"
            >

                <div className="filter-section">
                    <TextField
                        label="Skills"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"


                    />
                    <Fab size="small" color="primary" aria-label="add" my="auto">
                        <AddIcon />
                    </Fab>
                    <div>

                    </div>
                </div>
            </form>

        </div>

    );
}