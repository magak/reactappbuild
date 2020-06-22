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
        left: theme.spacing(2),
        right: theme.spacing(2),
        top: theme.spacing(2),
        bottom: theme.spacing(2),
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
                    <Button className={classes.button} variant="contained" color="secondary">Load</Button>
                    <Button className={classes.button} variant="contained" color="secondary">Update</Button>
                </Box>
                <Box flexGrow="1" display="flex">
                    <TextField color="secondary"
                        className={classes.textField}
                        id="outlined-multiline-static"
                        label="JSON"
                        multiline
                        defaultValue="Default Value"
                        variant="outlined"
                        fullWidth={true}
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