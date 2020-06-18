import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        height: '100%',
        position: 'relative',
        overflow: 'auto',
        border: '2px solid',
        borderRadius: 10,
        borderColor: theme.palette.secondary.main,

    },
    mainBox: {
        position: 'absolute',
        display: 'flex',
        height: '90%',
        width: '90%',
        flexDirection: (wideScrenMode: Boolean) => wideScrenMode ? "column" : "row"
    },
    button: {
        margin: theme.spacing(2)
    },
    textField : {
        margin: theme.spacing(3),        
    }
  }));

export default function DeveloperBoard() {
    const wideScrenMode = useMediaQuery('(min-aspect-ratio: 8/5)');
    const classes = useStyles(wideScrenMode);

    return (
        <Box p={4} m={2} className={classes.root}>
            <Box className={classes.mainBox} p={4} m={2}>
                <Box>
                    <Button className={classes.button} variant="contained" color="secondary">1</Button>
                    <Button className={classes.button} variant="contained" color="secondary">2</Button>
                </Box>
                <Box flexGrow="1" display="flex">
                    <TextField color="secondary"
                        className={classes.textField}
                        id="outlined-multiline-static"
                        label="JSON"
                        multiline
                        defaultValue="Default Value"
                        variant="outlined"
                    />
                </Box>
            </Box>
            {/* <TextField color="secondary"
                className={classes.textField}
                id="outlined-multiline-static"
                label="JSON"
                multiline
                defaultValue="Default Value"
                variant="outlined"
            /> */}
        </Box>
    );
}