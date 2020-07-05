import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import RootRef from '@material-ui/core/RootRef';

import PlayerCard from './PlayerCard';
import { List, ListItem, ListSubheader, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: { 
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'auto'
    },
    rootBox: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    playersBox: {
      flexGrow: 1,
      margin: theme.spacing(4),
    },
    teamsBox: {
      flexGrow: 6,
      margin: theme.spacing(4),
    }
  }));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={5} >
          <Box className={classes.rootBox}>
            <Box className={classes.playersBox}>
              <Paper className={classes.paper} elevation={3} >
                <List>
                  <ListItem>
                    <Box>
                      <TextField color="secondary"
                          // className={classes.textField}
                          id="outlined-multiline-static"
                          label="JSON"
                          defaultValue="Default Value"
                          variant="outlined"
                          fullWidth={true}
                      />
                    </Box>
                  </ListItem>
                  <ListItem>
                    <PlayerCard/>
                  </ListItem>
                  <ListItem>
                    <PlayerCard/>
                  </ListItem>
                  <ListItem>
                    <PlayerCard/>
                  </ListItem>
                  <ListItem>
                    <PlayerCard/>
                  </ListItem>
                  <ListItem>
                    <PlayerCard/>
                  </ListItem>
                  <ListItem>
                    <PlayerCard/>
                  </ListItem>
                </List>                
              </Paper>
            </Box>
            <Box className={classes.teamsBox}>
              <Paper className={classes.paper} elevation={3} >
              
              </Paper>
            </Box>
          </Box>
        </Paper>
    );


}