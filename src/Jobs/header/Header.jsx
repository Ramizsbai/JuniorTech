
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'; import SearchIcon from '@material-ui/icons/Search';
import './header.css';



const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: 300,
            justifyContent: "center",
            height: 38,


        },
        textInput: {
            height: 38,
        }

    },
}));
const ColorButton = withStyles(theme => ({
    root: {
        width: 100,
        height: 38,
        color: "white",
        backgroundColor: "#4c9f70",
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);


export default function Header() {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" mx="auto" justifyContent="center">
            <form className={classes.root} noValidate autoComplete="off" my="auto" >

                <TextField
                    id="outlined-basic"
                    label="Keyword"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />

            </form>
            <div >
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Search
                </ColorButton>
            </div>
        </Box>
    );
}