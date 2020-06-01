import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        height: '100%',
        position: 'relative'
    },
    button: {
        margin: theme.spacing(2)
    },
    textField : {
        margin: theme.spacing(3),
        
    }
  }));

export default function DeveloperBoard() {
    const classes = useStyles();

    return (
        <Box overflow="auto" p={4} m={2} className={classes.root} border={2} borderRadius={10} borderColor="secondary.main">
            <Box position='absolute' display="flex" flexDirection="column" p={4} m={2}>
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