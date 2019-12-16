import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './filter.css';


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
    const [chipData, setChipData] = useState(
        {
            value: "",
            skill: [null,]
        }

    );




    const handleChange = e => {
        setChipData({ value: e.target.value })
        console.log(chipData)
    }

    const handleClick = () => {


    }
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
                        value={chipData.value}
                        onChange={handleChange}
                    />
                    <Fab size="small" color="primary" aria-label="add" my="auto" onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </div>
            </form>
            <div>
            </div>
        </div>

    );
}