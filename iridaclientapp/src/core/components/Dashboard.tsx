import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import RootRef from '@material-ui/core/RootRef';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootPaper: { 
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    playersPaper: {

    },
    teamsPaper: {

    },
    rootBox: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
    },
    playersBox: {
      flexGrow: 1,
      margin: theme.spacing(4)
    },
    teamsBox: {
      flexGrow: 3,
      margin: theme.spacing(4)
    }
  }));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <Paper className={classes.rootPaper} elevation={5} >
          <Box className={classes.rootBox}>
            <Box className={classes.playersBox}>
              <Paper className={classes.rootPaper} elevation={3} >
                
              </Paper>
            </Box>
            <Box className={classes.teamsBox}>
              <Paper className={classes.rootPaper} elevation={3} >
                
              </Paper>
            </Box>
          </Box>
        </Paper>
    );


}