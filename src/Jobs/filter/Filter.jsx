import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './filter.css';
import ChipsArray from './skillsComponent/Skills';
import MenuItem from '@material-ui/core/MenuItem';

const jobTypes = [
    {

        label: 'Full Time',
        key: 1,
    },
    {

        label: 'Part Time',
        key: 2,
    },
    {

        label: 'Internship',
        key: 3,
    },

];
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
    const [jobType, setJobType] = React.useState('Job Type');




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
        <div className="filter">
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

            <TextField
                id="outlined-select-currency"
                select
                label="Job Type"
                value={jobType}
                onChange={handleChange}
                helperText="Please select your currency"
                variant="outlined"
            >
                {jobTypes.map(option => (
                    <MenuItem key={option.key}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

        </div>

    );
}