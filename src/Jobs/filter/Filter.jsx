import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './filter.css';
import ChipsArray from './skillsComponent/Skills';


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

    const [chipsList, setChipsList] = useState([]);
    const [inputValue, setInputValue] = useState(``);




    const handleChange = e => {
        const { value } = e.target;
        setInputValue(value)
    }


    const updateChipList = () => {
        const newValue = inputValue.trim()

        if (newValue.length > 0) {

            if (!chipsList.includes(newValue)) {

                if (chipsList.length < 5) {
                    setChipsList([...chipsList, newValue])
                    setInputValue(``)
                }
            }

        }
    }



    const handleClick = () => {
        updateChipList()
    }

    const handleChipDelete = chipToDelete => {
        setChipsList(chipsList => chipsList.filter(chip => chip !== chipToDelete));
    };

    const onFormSubmit = (e) => {
        e.preventDefault()
        updateChipList()
    }

    return (
        <div>
            <form
                onSubmit={onFormSubmit}
                className={classes.root}
                noValidate autoComplete="off"
            >

                <div className="filter-section">
                    <TextField
                        label="Skills"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <Fab size="small" color="primary" aria-label="add" my="auto" onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                    <ChipsArray onChipDelete={handleChipDelete} chipsList={chipsList} />
                </div>
            </form>
            <div>
            </div>
        </div>

    );
}