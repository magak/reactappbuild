import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import RootRef from '@material-ui/core/RootRef';

import PlayerCard from './PlayerCard';
import PlayersList from './PlayersList';
import TeamsList from './TeamsList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootPaper: {         
      height: '100%',
      position: 'relative',
      overflow: 'auto'
    },
    playersPaper: {         
      height: '100%',
      position: 'absolute',
      overflow: 'auto'
    },
    teamsPaper: {         
      height: '100%',
      position: 'absolute',
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
      position: 'relative',
      margin: theme.spacing(4),
    },
    teamsBox: {
      flexGrow: 2.3,
      position: 'relative',
      margin: theme.spacing(4),
    }
  }));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <Paper className={classes.rootPaper} elevation={5} >
          <Box className={classes.rootBox}>
            <Box className={classes.playersBox}>
              <Paper className={classes.playersPaper} elevation={3} >
                <PlayersList/>
              </Paper>
            </Box>
            <Box className={classes.teamsBox}>
              <Paper className={classes.teamsPaper} elevation={3} >
                <TeamsList/>
              </Paper>
            </Box>
          </Box>
        </Paper>
    );
}